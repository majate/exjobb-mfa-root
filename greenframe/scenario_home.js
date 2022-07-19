// eslint-disable-next-line no-unused-expressions
async page => {
  for (let i = 0; i < 3; i++) {
    await page.goto('', { waitUntil: 'networkidle' }) // Go to the baseUrl
    await page.waitForTimeout(3000) // Wait for 3 seconds
  }
}
