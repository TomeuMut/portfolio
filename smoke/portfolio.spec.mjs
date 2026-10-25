import { test, expect } from '@playwright/test'

for (const language of ['es', 'en', 'ca']) {
  test(`${language}: localized page, assets and navigation work`, async ({ page, isMobile }) => {
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    const response = await page.goto(`/${language}/`, { waitUntil: 'domcontentloaded' })
    expect(response.status()).toBe(200)
    await expect(page.locator('html')).toHaveAttribute('lang', language)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Bartomeu')
    if (isMobile) {
      const toggle = page.locator('button[aria-controls="primary-navigation"]')
      await toggle.click()
      await expect(toggle).toHaveAttribute('aria-expanded', 'true')
    }
    await page.locator('#primary-navigation a[href="#projects"]').click()
    await expect(page).toHaveURL(/#projects$/)
    await expect(page.locator('#projects')).toBeInViewport()
    for (const image of await page.locator('img').all()) {
      const source = await image.getAttribute('src')
      if (source?.startsWith('/')) expect((await page.request.get(source)).ok()).toBeTruthy()
    }
    expect(errors).toEqual([])
  })
}

test('root redirects to Spanish', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' })
  await expect(page).toHaveURL(/\/es\//)
})
