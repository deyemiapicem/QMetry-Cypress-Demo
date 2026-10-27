Feature: Login

Scenario: Login successfully

Given I navigate to the login page

When I enter my username

And I enter my password

And I click Login

Then I should see the Home page