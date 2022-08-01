Feature: Register Partner

Scenario: Sign Up New Partner

  Given I open Register Partner page
  Then the title is "Daftar Sebagai Penerima Pembiayaan | ALAMI Peer-to-Peer Lending Syariah"
  And Input nama lengkap
  And Input email
  And Wait for 3s
  And Input NoHP
  And Input password
  And Input confirm password
  And Click agreement
  And Click lanjutkan
  And Success redirect to Terimakasih page
  And Wait for 3s