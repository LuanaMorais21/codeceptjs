Feature('login')

Scenario('Login com sucesso', ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/')
  I.click('Login')
  I.fillField('#user', 'luana@teste.com')
  I.fillField('#password', '123456')
  I.click('#btnLogin')
  I.see('Login realizado')
}).tag('@sucesso')

Scenario('Logar apenas com o e-mail', ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/')
  I.click('Login')
  I.fillField('#user', 'luana@teste.com')
  I.click('#btnLogin')
  I.see('Senha inválida')
}).tag('@senha')

Scenario('Logar sem e-mail e senha', ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/')
  I.click('Login')
  I.click('#btnLogin')
  I.see('E-mail inválido')
}).tag('@credenciais')

Scenario('Logar apenas com senha', ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/')
  I.click('Login')
  I.fillField('#password', '123456')
  I.click('#btnLogin')
  I.see('E-mail inválido')
}).tag('@email')

Scenario('Logar com senha inválida', ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/')
  I.click('Login')
  I.fillField('#user', 'luana@teste.com')
  I.fillField('#password', '1234')
  I.click('#btnLogin')
  I.see('Senha inválida')
}).tag('@caracteres')
