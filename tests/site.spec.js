const { test, expect } = require("@playwright/test");

const websiteURL = "http://localhost:3000";

const aboutmeURL = "http://localhost:3000/aboutme";
// Expected constants
const expectedTitle = "Resume Portfolio";

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

test("Check Page Title", async ({ page }) => {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
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

test("Check Navbar", async ({ page }) => {
  await page.goto(websiteURL);
  await expect(page.locator(".Navbar")).toBeVisible();
});

test("Check Hero Image", async ({ page }) => {
  await page.goto(websiteURL);
  await expect(page.locator(".HeroImage")).toBeVisible();
});

test("Check Hero Text", async ({ page }) => {
  await page.goto(websiteURL);
  await expect(page.locator(".HeroText")).toBeVisible();
});

test("Test for Skills Section", async ({ page }) => {
  await page.goto(aboutmeURL);
  await expect(page.locator(".SkillsSection")).toBeVisible();
});

test("Test for About Me Content", async ({ page }) => {
  await page.goto(aboutmeURL);
  await expect(page.locator(".AboutMeContent")).toBeVisible();
});

test("Check SEO Meta Description(AboutMe", async ({ page }) => {
  await page.goto(aboutmeURL);
  const metaDescription = await page.getAttribute(
    'meta[name="description"]',
    "content"
  );
  await expect(metaDescription).not.toBe("");
});

test("Check SEO Meta Keywords(AboutMe)", async ({ page }) => {
  await page.goto(aboutmeURL);
  const metaKeywords = await page.getAttribute(
    'meta[name="keywords"]',
    "content"
  );
  await expect(metaKeywords).not.toBe("");
});

test("Check Navbar(AboutMe)", async ({ page }) => {
  await page.goto(aboutmeURL);
  await expect(page.locator(".Navbar")).toBeVisible();
});
