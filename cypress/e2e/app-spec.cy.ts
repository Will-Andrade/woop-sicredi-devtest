describe("App component spec", () => {
  it("should find a header on the app component", () => {
    cy.visit("http://localhost:5173/");

    cy.get("h1").should("contain.text", "Coding & Dragons");
  });
});
