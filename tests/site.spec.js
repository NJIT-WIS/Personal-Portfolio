const { test, expect } = require("@playwright/test");

const websiteURL = "http://localhost:3000";

const aboutmeURL = "http://localhost:3000/project";

const resumeURL = "http://localhost:3000/aboutme";
// Expected constants
const expectedTitle = "Resume Portfolio for Midterm";

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

test("Check Page Title", async ({ page }) => {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});

test("Hero Section", async ({ page }) => {
  await page.goto(websiteURL);
  await expect(page.locator(".logo")).toBeVisible();
});

test("Check SEO Meta Description", async ({ page }) => {
  await page.goto(websiteURL);
  const metaDescription = await page.getAttribute(
    'meta[name="description"]',
    "content"
  );
  await expect(metaDescription).not.toBe("");
});

test("Check SEO Meta Keywords", async ({ page }) => {
  await page.goto(websiteURL);
  const metaKeywords = await page.getAttribute(
    'meta[name="keywords"]',
    "content"
  );
  await expect(metaKeywords).not.toBe("");
});

test("Check Responsive Meta Tag", async ({ page }) => {
  await page.goto(websiteURL);
  const viewportMeta = await page.getAttribute(
    'meta[name="viewport"]',
    "content"
  );
  await expect(viewportMeta).toBe("width=device-width, initial-scale=1");
});

test("Hero Section: Check Hero", async ({ page }) => {
  await page.goto(websiteURL);
  await expect(page.locator(".hero-text")).toBeVisible();
});

test("Hero Section: Check Header", async ({ page }) => {
  await page.goto(websiteURL);
  await expect(page.locator(".hero-text h1")).toBeVisible();
});

test("Hero Section: Subtext", async ({ page }) => {
  await page.goto(websiteURL);
  await expect(page.locator(".sub-text")).toBeVisible();
});

test("Hero Section: Check for View Page Button", async ({ page }) => {
  await page.goto(websiteURL);
  await expect(page.locator(".pill-link")).toBeVisible();
});

test("Check Profile Name", async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator(".sidebar h2")).toBeVisible();
});

/* This test checks that the profile image is visible on the page */
test("Check Profile Image", async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator(".portrait img")).toBeVisible();
});

/* This test checks that the job title is visible on the page */
test("Check Job Title", async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator(".sidebar h3")).toBeVisible();
});

/* This test checks that the social links are visible on the page */
test("Check Social Links", async ({ page }) => {
  await page.goto(resumeURL);
  const linksCount = await page.locator(".links a").count();
  await expect(linksCount).toBeGreaterThan(0);
});

/* This test checks that the Objective section is visible on the page */
test("Check Objective Section", async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator(".sidebar-bottom h4")).toBeVisible();
});

/* This test checks that the Skills section is visible on the page */
test("Check Skills Section", async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator(".skills-section h2")).toBeVisible();
});

/* This test checks that the Experience section is visible on the page */
test("Check Experience Section", async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator(".experience-section h2")).toBeVisible();
});

/* This test checks that the Education section is visible on the page */
test("Check Education Section", async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator(".education-section h2")).toBeVisible();
});

/* This test checks that the page title is not empty */
test("AboutMe Page: Check Page Title", async ({ page }) => {
  await page.goto(resumeURL);
  const title = await page.title();
  await expect(title).not.toBe("");
});

/* This test checks that the meta description for SEO is not empty */
test("AboutMe Page: Check SEO Meta Description", async ({ page }) => {
  await page.goto(resumeURL);
  const metaDescription = await page.getAttribute(
    'meta[name="description"]',
    "content"
  );
  await expect(metaDescription).not.toBe("");
});

/* This test checks that the meta keywords for SEO are not empty */
test("AboutMe Page: Check SEO Meta Keywords", async ({ page }) => {
  await page.goto(resumeURL);
  const metaKeywords = await page.getAttribute(
    'meta[name="keywords"]',
    "content"
  );
  await expect(metaKeywords).not.toBe("");
});
/* This test checks that the main content area is present on the page */
test("Check Main Content Area", async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator("body > .container > .main-content")).toBeVisible();
});

/* This test checks that the skills icons are present on the page */
test("Check Skills Icons", async ({ page }) => {
  await page.goto(resumeURL);
  const skillsIconsCount = await page.locator(".skill-list li i").count();
  await expect(skillsIconsCount).toBeGreaterThan(0);
});

/* This test checks that the experience company and role are visible on the page */
test("Check Experience Role and Company", async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator(".experience-section h3")).toBeVisible();
});

test("Project: Check Project Tttle", async ({ page }) => {
  await page.goto(aboutmeURL);
  await expect(page.locator(".projects-title")).toBeVisible();
});

test("Check Project Cards", async ({ page }) => {
  await page.goto(aboutmeURL);
  const linksCount = await page.locator(".card").count();
  await expect(linksCount).toBeGreaterThan(2);
});
