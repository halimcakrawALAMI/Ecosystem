Feature: Register Partner

Scenario: Sign Up New Partner

  Given I open Register Partner page
  Then the title is "Daftar Sebagai Penerima Pembiayaan | ALAMI Peer-to-Peer Lending Syariah"
  And Input nama lengkap
  And Input email
  And Input NoHP
  And Input password
  And Input confirm password
  And Click agreement
  And Wait for 3s
  And Click lanjutkan
  And Success redirect to Terimakasih page
  And Wait for 3s
  And Open Verify Email page
  And Wait for 3s
  And Input email mailnesia
  And Wait for 3s
  And Click search inbox
  And Click detail email
  And Click lanjutkan persetujuan
  And Wait for 3s