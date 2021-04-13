 Feature: Registration

 Scenario: Create Account - Positive flow

     Given That user is on Index page and click on Registration button 
     And Fill all required field with valid data
     And Check confirmation checkbox
     When User click on Create Account button 
     Then Confirmation e-mail is sent

