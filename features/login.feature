Feature: Login - Positive flow

    Background: User is on Index page and navigete to Login page

        Given That user click on Login button
        
        Scenario: Successifully login into SLP

        And Fill both field with valid data 
        When User click on Login button 
        Then User is successifully logged in 


#  Scenario: Sign in with Facebook 

#      And Click on Facebook icon
#      And Fill e-mail/phone field with valid data
#      And Fill password field with Facebook password
#      When User click on Prijavite se button
#      Then User is successifully logged in 

     


