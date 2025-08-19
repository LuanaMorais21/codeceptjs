Feature('cadastro')

Scenario('Cadastro com sucesso', ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/')
  I.click('Cadastro')
  I.fillField('#user', 'Luana M.')
  I.fillField('#email', 'luana@teste.com')
  I.fillField('#password', '123456')
  I.click('#btnRegister')
  I.see('Cadastro realizado!')
}).tag('@cadastro')

Scenario('Cadastro com e-mail já existente', ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/')
  I.click('Cadastro')
  I.fillField('#user', 'Luana M.')
  I.fillField('#email', 'luana@teste.com')
  I.fillField('#password', '123456')
  I.click('#btnRegister')
  I.dontSee('Cadastro realizado!')
}).tag('@emailexistente')

Scenario('Cadastro com senha fraca', ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/')
  I.click('Cadastro')
  I.fillField('#user', 'Luana M.')
  I.fillField('#email', 'luana@teste.com')
  I.fillField('#password', '1')
  I.click('#btnRegister')
  I.see('O campo senha deve ter pelo menos 6 dígitos')
}).tag('@caracteressenha')

Scenario('Cadastro com e-mail inválido', ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/')
  I.click('Cadastro')
  I.fillField('#user', 'Luana M.')
  I.fillField('#email', 'luana@xxxx')
  I.fillField('#password', '123456')
  I.click('#btnRegister')
  I.dontSee('Cadastro realizado!')
}).tag('@emailinvalido')

Scenario('Cadastro com campos obrigatórios em branco', ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/')
  I.click('Cadastro')
  I.fillField('#user', '')
  I.fillField('#email', '')
  I.fillField('#password', '')
  I.click('#btnRegister')
  I.see('O campo nome deve ser prenchido')
}).tag('@camposobrigatorios')

Scenario('Validação de limite de caracteres no nome', ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/')
  I.click('Cadastro')
  I.fillField('#email', 'xxx@xxx.com')
  I.fillField('#password', '123456')
  I.fillField(
    '#user',
    'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.'
  )
  I.click('#btnRegister')
  I.dontSee('Cadastro realizado!')
}).tag('@nomemaior')
