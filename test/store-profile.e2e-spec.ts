import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da Loja' }).click()

  await page.getByRole('textbox', { name: 'Nome' }).fill('Rocket Pizza')
  await page
    .getByRole('textbox', { name: 'Descricao' })
    .fill('Another Description')
  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso!')

  await await expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close', exact: true }).click()

  await await expect(
    page.getByRole('button', { name: 'Rocket Pizza' })
  ).toBeVisible()
})
