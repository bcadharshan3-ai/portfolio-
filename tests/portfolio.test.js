import test from "node:test";
import assert from "node:assert/strict";
import {
  personalInfo,
  careerStartDate,
  calculateExperience,
  keyMetrics,
  skillCategories,
  experienceData,
  projectsData,
  educationData,
  awardsData,
  validateContactForm,
  filterProjects,
  filterSkills
} from "../js/portfolio-data.js";

test("Portfolio Data Integrity: personalInfo contains required fields and dynamic getters", () => {
  assert.equal(personalInfo.name, "Dharshan A");
  assert.equal(personalInfo.initials, "DA");
  assert.match(personalInfo.email, /@/);
  assert.ok(personalInfo.phone.length > 0);
  assert.ok(personalInfo.linkedin.includes("linkedin.com/in/dharshan03"));
  assert.ok(personalInfo.experienceYears.includes("Years"));
  assert.ok(/years/i.test(personalInfo.summary));
});

test("Portfolio Data Integrity: keyMetrics contains 5 impact statistics", () => {
  assert.equal(keyMetrics.length, 5);
  const values = keyMetrics.map((m) => m.value);
  assert.ok(values.includes("30%"));
  assert.ok(values.includes("90%"));
  assert.ok(values.includes("20%"));
});

test("Portfolio Data Integrity: skillCategories covers frontend, backend, cloud, testing, databases, leadership", () => {
  assert.ok(skillCategories.length >= 6);
  const ids = skillCategories.map((c) => c.id);
  assert.ok(ids.includes("frontend"));
  assert.ok(ids.includes("backend"));
  assert.ok(ids.includes("cloud"));
  assert.ok(ids.includes("databases"));
  assert.ok(ids.includes("testing"));
  assert.ok(ids.includes("leadership"));
});

test("Portfolio Data Integrity: projectsData contains 6 rich showcase projects", () => {
  assert.equal(projectsData.length, 6);
  projectsData.forEach((project) => {
    assert.ok(project.id);
    assert.ok(project.title);
    assert.ok(project.role);
    assert.ok(project.category);
    assert.ok(project.description.length > 20);
    assert.ok(Array.isArray(project.highlights) && project.highlights.length > 0);
    assert.ok(Array.isArray(project.tags) && project.tags.length > 0);
  });
});

test("Portfolio Data Integrity: education and awards are well-formed", () => {
  assert.equal(educationData.length, 2);
  assert.equal(awardsData.length, 2);
  assert.ok(awardsData.some((a) => a.title.includes("Gold Medallist")));
  assert.ok(awardsData.some((a) => a.title.includes("Best Student Award")));
});

test("validateContactForm: Valid inputs pass successfully", () => {
  const result = validateContactForm({
    name: "Alex Hunter",
    email: "alex.hunter@example.com",
    subject: "Full-Stack Opportunity",
    message: "We came across your profile and would love to discuss a senior engineering role."
  });
  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test("validateContactForm: Invalid email is detected", () => {
  const result = validateContactForm({
    name: "Alex",
    email: "not-an-email",
    subject: "Hello there",
    message: "Valid message with more than 10 characters."
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.email);
});

test("validateContactForm: Missing or short name is rejected", () => {
  const emptyName = validateContactForm({
    name: " ",
    email: "test@domain.com",
    subject: "Inquiry",
    message: "This is a detailed message."
  });
  assert.equal(emptyName.isValid, false);
  assert.ok(emptyName.errors.name);

  const shortName = validateContactForm({
    name: "A",
    email: "test@domain.com",
    subject: "Inquiry",
    message: "This is a detailed message."
  });
  assert.equal(shortName.isValid, false);
  assert.ok(shortName.errors.name);
});

test("validateContactForm: Short subject or message is rejected", () => {
  const shortSubject = validateContactForm({
    name: "Alex Hunter",
    email: "alex@example.com",
    subject: "Hi",
    message: "Valid message with plenty of text."
  });
  assert.equal(shortSubject.isValid, false);
  assert.ok(shortSubject.errors.subject);

  const shortMsg = validateContactForm({
    name: "Alex Hunter",
    email: "alex@example.com",
    subject: "Engineering role",
    message: "Short"
  });
  assert.equal(shortMsg.isValid, false);
  assert.ok(shortMsg.errors.message);
});

test("filterProjects: correctly filters by category or returns all", () => {
  const all = filterProjects(projectsData, "all");
  assert.equal(all.length, projectsData.length);

  const edtech = filterProjects(projectsData, "edtech");
  assert.equal(edtech.length, 1);
  assert.equal(edtech[0].id, "katon-classroom");

  const nonExistent = filterProjects(projectsData, "unknown-cat");
  assert.equal(nonExistent.length, 0);

  const falsyCat = filterProjects(projectsData, null);
  assert.equal(falsyCat.length, projectsData.length);
});

test("filterSkills: filters categories correctly", () => {
  const all = filterSkills(skillCategories, "all");
  assert.equal(all.length, skillCategories.length);

  const cloudOnly = filterSkills(skillCategories, "cloud");
  assert.equal(cloudOnly.length, 1);
  assert.equal(cloudOnly[0].id, "cloud");

  const nullCat = filterSkills(skillCategories, null);
  assert.equal(nullCat.length, skillCategories.length);
});

test("calculateExperience: dynamically calculates years and handles edge cases", () => {
  // Test from real career start date
  const realExp = calculateExperience(careerStartDate);
  assert.ok(realExp.years >= 4);
  assert.ok(realExp.formatted.includes("+ Years"));
  assert.ok(realExp.label.includes("Mar 2022 – Present"));

  // Fixed test dates: exactly 2 years
  const twoYears = calculateExperience("2022-03-01", new Date("2024-03-01"));
  assert.equal(twoYears.years, 2);
  assert.equal(twoYears.months, 0);
  assert.equal(twoYears.formatted, "2+ Years");
  assert.equal(twoYears.detailed, "2 Years");

  // Fixed test dates: 2 years 6 months
  const twoYearsSixMos = calculateExperience("2022-03-01", new Date("2024-09-01"));
  assert.equal(twoYearsSixMos.years, 2);
  assert.equal(twoYearsSixMos.months, 6);
  assert.equal(twoYearsSixMos.detailed, "2 Years, 6 Months");

  // Month wraparound edge case: started in Nov 2022, evaluated in Jan 2023 -> 0 years, 2 months
  const wrap = calculateExperience("2022-11-01", new Date("2023-01-01"));
  assert.equal(wrap.years, 0);
  assert.equal(wrap.months, 2);
  assert.equal(wrap.totalMonths, 2);
});

