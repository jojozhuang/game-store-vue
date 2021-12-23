/// <reference types="Cypress" />

describe("Product Add", () => {
  it("should display the app name on the product add page", () => {
    cy.visit("/product");
    cy.contains("Vue Tutorial - Product Management");
    cy.get(":nth-child(3) > h2").should("contain.text", "Create New Product");
  });

  it("should navigate to home page", () => {
    cy.visit("/product");
    cy.get('[href="/"]').click();
    cy.get("h1").should("contain.text", "Game Store - Product Management");
  });

  it("should navigate to product list page", () => {
    cy.visit("/product");
    cy.get('[href="/products"]').click();
    cy.get(":nth-child(3) > h2").should("contain.text", "Products");
  });
});
