context("Weather Forecaster", () => {
  describe("landing page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });

    it("displays an AppBar", () => {
      cy.get(".test-appBar").should((appBar) => {
        expect(appBar).to.be.visible;
        expect(appBar).to.contain("Weather Forecaster");
      });
    });
  });
});
