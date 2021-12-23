/// <reference types="Cypress" />

describe("Home Page", () => {
  it("should display the app name on the home page", () => {
    cy.visit("/");
    cy.contains("Vue Tutorial - Product Management");
    cy.get("h1").should("contain.text", "Game Store - Product Management");
  });

  it("should navigate to product list page", () => {
    cy.visit("/");
    cy.get('[href="/products"]').click();
    cy.get("#products > h2").should("contain.text", "Products");
  });

  it("should navigate to product add page", () => {
    cy.visit("/");
    cy.get('[href="/product"]').click();
    cy.get(":nth-child(3) > h2").should("contain.text", "Create New Product");
  });
});
