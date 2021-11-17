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

  it("Go to sign up page", function () {
    cy.visit("https://www.bk.com/");
    clickButton("Sign Up");
    cy.url().should("include", "/signup");
  });

  it("Go to Menu then click Flame Grilled Burgers button", function () {
    cy.visit("https://www.bk.com/");
    clickButton("Menu");
    clickButton("Flame Grilled Burgers");
    cy.url().should("include", "/menu/section");
  });

  it("Go to Menu then click Family Bundles button", function () {
    cy.visit("https://www.bk.com/");
    clickButton("Menu");
    clickButton("Family Bundles");
    cy.url().should("include", "/menu/section");
  });

  it("Go to Menu then click Chicken & More button", function () {
    cy.visit("https://www.bk.com/");
    clickButton("Menu");
    clickButton("Chicken & More");
    cy.url().should("include", "/menu/section");
  });

  it("Go to Menu then click Sides button", function () {
    cy.visit("https://www.bk.com/");
    clickButton("Menu");
    clickButton("Sides");
    cy.url().should("include", "/menu/section");
  });

  it("Go to Menu then click Drinks & Coffee button", function () {
    cy.visit("https://www.bk.com/");
    clickButton("Menu");
    clickButton("Drinks & Coffee");
    cy.url().should("include", "/menu/section");
  });

  it("Go to Menu then click Sweets button", function () {
    cy.visit("https://www.bk.com/");
    clickButton("Menu");
    clickButton("Sweets");
    cy.url().should("include", "/menu/section");
  });

  it("Go to Menu then click King Jr. button", function () {
    cy.visit("https://www.bk.com/");
    clickButton("Menu");
    clickButton("King Jr.");
    cy.url().should("include", "/menu/section");
  });
});
