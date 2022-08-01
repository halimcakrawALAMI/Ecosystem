const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

let namaLengkap = 'Automation Nama Lengkap'
let noHP = '08123456789'
let password = 'Password01'

function makeEmail(length){
 var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return 'Automation_' + result + '@mailnesia.com';
}

Given(/^I open Register Partner page$/, () => {
  return client.url('https://dev.p2p-3.alamisharia.co.id/register/partner').waitForElementVisible('body', 1000);
});

Then(/^the title is "([^"]*)"$/, title => {
  return client.assert.title(title);
});

Then(/^Wait for 3s$/, () => {
  return client.pause(3000);
});

Then(/^Input nama lengkap$/, () => {
  client.useXpath()
  client.setValue("//input[@id='registerNamaPartnership']", [namaLengkap]);
});

Then(/^Input email$/, () => {
  client.setValue("//input[@id='registerEmailPartnership']", [makeEmail(5)]);
});

Then(/^Input NoHP$/, () => {
  client.setValue("//input[@id='PartnershipPhone']", [noHP]);
});

Then(/^Input password$/, () => {
  client.setValue("//input[@id='showPassword']", [password]);
});

Then(/^Input confirm password$/, () => {
  client.setValue("//input[@name='passwordConfirm']", [password]);
});

Then(/^Click agreement$/, () => {
  client.click("//input[@id='setujuKebijakan']");
});

Then(/^Click lanjutkan$/, () => {
  client.click("//button[@id='daftarAlami']");
});

Then(/^Success redirect to Terimakasih page$/, () => {
  client.useCss()
  client.expect.element('.one > p:nth-of-type(1)').text.to.equal('Kamu sudah berhasil mendaftar sebagai Partnership. Silahkan klik link aktivasi yang dikirimkan ke email Kamu.');
});