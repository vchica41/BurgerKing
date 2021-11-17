describe("My First Test", function () {
  it("Does not do much", function () {
    expect(true).to.equal(true);
  });

  it("Go to menu page", function () {
    cy.visit("https://www.bk.com/");

    cy.wait(2000);

    cy.contains("Menu", {
      force: true,
      timeout: 6000,
    }).click();

    cy.url().should("include", "/menu");
  });

  it("Go to sign up page", function () {
    cy.visit("https://www.bk.com/");

    cy.wait(2000);

    cy.contains("Sign Up", {
      force: true,
      timeout: 6000,
    }).click();

    cy.url().should("include", "/signup");
  });
});
