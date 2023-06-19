import { test } from '../../fixtures/default'
import { expect } from '@playwright/test'
import { authAdmin, openModule } from '../../functions'
import { createReferralNew } from './functions'

//homework
test.describe(`Создание направления`, () => {
	
	

  test.beforeEach(async ({ page }) => {

    await authAdmin(page)
    await openModule(page, `Лаборатория`)
  })

   test('1.Создать направление через функцию', async ({ page }) => {
 const analysis = `коагулограмма`
 const patient = `Тестовый тест тестович`
     
      // создать направление с полученными данными и рандомным штрих-кодом
    await createReferralNew(page, patient, analysis)
	
  // статус направления "Новый"
    expect(page.locator(`#LisRefDetailsTableData .reject-status`).first()).toContainText(`Новый`)
    })
  })