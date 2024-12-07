import {Given,And,Then} from "cypress-cucumber-preprocessor/steps";
Given('open the url',()=>{
  cy.visit('https://v1.training-support.net/selenium/simple-form');
  })
  And("Enter username and pasword",()=>{
    cy.get("[placeholder='First Name']").type("Alok");
    cy.get("[placeholder='Last Name']").type("Mishra");
    cy.get("[placeholder='abc@xyz.com']").type("Alok@54321");
    cy.get("[placeholder='9876543210']").type('8932945274');
    cy.get("[rows='2']").type("Thank You Masai!");
    })
    Then('click on button',()=>{
      cy.get("[value='submit']").click();
      })