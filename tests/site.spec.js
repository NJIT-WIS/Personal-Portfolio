const { test, expect } = require("@playwright/test");

const websiteURL = "http://localhost:3000";

const aboutmeURL = "http://localhost:3000/project";
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
