Feature: Add Webinar Functionality

    Full process of making Webinar and publishing on Shops page.
    As a registred User and Partner I should be able to create and post Webinar
    in my own shop.

    Scenario: Create a Webinar
        Given That User is logged in into SLP
        And Navigate to Partner Dropdown menu and click on Add Webinar button
        When Click on Select Shop and choose Shop from Dropdown menu
        Then Click on Save button
        And On Add Webinar page in header section fill all required content
        And Fill all mandatory fields about Link,Price,Description,Organizers,Speakers etc
        When User finished and click on Save Draft then on Publish button
        Then Publication request is sent
