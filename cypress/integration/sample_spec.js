describe("My First Test", function () {
  function clickButton(whereTo) {
    cy.wait(2000);

    cy.contains(whereTo, {
      force: true,
      timeout: 6000,
    }).click();
  }

  it("Does not do much", function () {
    expect(true).to.equal(true);
  });

  it("Go to menu page", function () {
    cy.visit("https://www.bk.com/");
    clickButton("Menu");
    cy.url().should("include", "/menu");
  });

  it("Go to sign up page", function () {
    cy.visit("https://www.bk.com/");
    clickButton("Sign Up");
    cy.url().should("include", "/signup");
  });

  it("Go to Menu then click Featured button", function () {
    cy.visit("https://www.bk.com/");
    clickButton("Menu");
    clickButton("Featured");
    cy.url().should("include", "/menu/section");
  });
});
