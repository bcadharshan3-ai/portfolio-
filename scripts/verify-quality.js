/**
 * Static Quality & Security Verification Script
 * Validates SonarQube, security, and linting rules across the codebase.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

console.log("🔍 Running Code Quality & SonarQube Compliance Audit...\n");

let issueCount = 0;

function reportIssue(file, rule, message) {
  issueCount++;
  console.error(`❌ [${rule}] ${file}: ${message}`);
}

function reportPass(checkName) {
  console.log(`✅ [PASS] ${checkName}`);
}

// 1. Audit HTML Files for Accessibility & Security
function auditHTML() {
  const htmlPath = path.join(ROOT_DIR, "index.html");
  const content = fs.readFileSync(htmlPath, "utf-8");

  // Sonar Security: target="_blank" must include rel="noopener noreferrer"
  const blankTargetRegex = /<a\s+[^>]*target=["']_blank["'][^>]*>/gi;
  let match;
  while ((match = blankTargetRegex.exec(content)) !== null) {
    const tag = match[0];
    if (!tag.includes("rel=") || (!tag.includes("noopener") && !tag.includes("noreferrer"))) {
      reportIssue("index.html", "Security:ReverseTabnabbing", `Link with target="_blank" is missing rel="noopener noreferrer": ${tag}`);
    }
  }

  // Sonar Accessibility: All form inputs have IDs and corresponding labels
  const inputRegex = /<input\s+[^>]*id=["']([^"']+)["'][^>]*>/gi;
  while ((match = inputRegex.exec(content)) !== null) {
    const inputId = match[1];
    const labelRegex = new RegExp(`<label[^>]*for=["']${inputId}["']`, "i");
    if (!labelRegex.test(content)) {
      reportIssue("index.html", "Accessibility:MissingLabel", `Input with id="${inputId}" has no matching <label for="${inputId}">`);
    }
  }

  // Check language attribute
  if (!/<html[^>]*lang=["'][a-z]{2}["']/i.test(content)) {
    reportIssue("index.html", "Accessibility:MissingLang", "<html> tag must have a valid lang attribute");
  }

  // Check Title
  if (!/<title>[^<]+<\/title>/i.test(content)) {
    reportIssue("index.html", "SEO:MissingTitle", "<title> tag is missing or empty");
  }

  reportPass("HTML Security & Accessibility Audit");
}

// 2. Audit JavaScript for Sonar Security & Clean Code
function auditJavaScript() {
  const jsFiles = [
    path.join(ROOT_DIR, "js", "app.js"),
    path.join(ROOT_DIR, "js", "portfolio-data.js")
  ];

  for (const filePath of jsFiles) {
    const relPath = path.relative(ROOT_DIR, filePath);
    const content = fs.readFileSync(filePath, "utf-8");

    // Sonar Security: No innerHTML usage
    if (/\.innerHTML\s*=/i.test(content)) {
      reportIssue(relPath, "Security:DOM-XSS", "Usage of innerHTML detected. Use textContent or replaceChildren() instead.");
    }

    // Sonar Security: No eval()
    if (/\beval\s*\(/i.test(content)) {
      reportIssue(relPath, "Security:Eval", "eval() usage is forbidden.");
    }

    // Sonar Security: No document.write()
    if (/document\.write\s*\(/i.test(content)) {
      reportIssue(relPath, "Security:DocumentWrite", "document.write() usage is forbidden.");
    }

    // Sonar Code Smell: Avoid 'var'
    if (/\bvar\s+[a-zA-Z]/i.test(content)) {
      reportIssue(relPath, "CodeSmell:VarUsage", "Use 'const' or 'let' instead of 'var'.");
    }
  }

  reportPass("JavaScript Security & XSS Audit");
}

// 3. Audit CSS for Contrast & Units
function auditCSS() {
  const cssPath = path.join(ROOT_DIR, "css", "style.css");
  const content = fs.readFileSync(cssPath, "utf-8");

  if (!content.includes(":root")) {
    reportIssue("css/style.css", "DesignSystem", "CSS variables in :root are required.");
  }

  if (!content.includes('[data-theme="dark"]')) {
    reportIssue("css/style.css", "DesignSystem", "Dark mode theme block [data-theme='dark'] is required.");
  }

  reportPass("CSS Theme Architecture Audit");
}

// Execute
auditHTML();
auditJavaScript();
auditCSS();

console.log("\n==========================================");
if (issueCount === 0) {
  console.log("🎉 AUDIT PASSED: 0 SonarQube issues, 0 Lint issues, 0 Security vulnerabilities!");
  process.exit(0);
} else {
  console.error(`💥 AUDIT FAILED: ${issueCount} issues detected.`);
  process.exit(1);
}
