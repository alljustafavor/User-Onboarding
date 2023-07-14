describe("sign in", () =>{
    beforeEach(() => {
        // Each test needs fresh state
        // Tests shouldn't rely on other tests
        // Every test should work in isolation


        // eslint-disable-next-line no-undef
        cy.visit("http://localhost:3002"); //care
    })

    describe('My First Test', () => {
        it('Sanity Checks', () => {
          expect(true).to.equal(true)
          expect(1 + 2).to.equal(3)
            expect(2 + 2).not.equal(5) // strict === vs ==!! === strict, does NOT do type type coercion // 1 !== "1"
            expect({}).not.to.equal({})
            expect({}).to.eql({})
        })
      })

      //helper 
      const firstNameInput = () => cy.get(`input[data-cy="first-name"]`);
      const lastNameInput = () => cy.get(`input[data-cy="last-name"]`);
      const emailInput = () => cy.get(`input[data-cy="email"]`);
      const passwordInput = () => cy.get(`input[data-cy="password"]`);
      const tosInput = () => cy.get(`input[data-cy="tos"]`)

      describe("all text inputs accept text", () => {
        it("text inputs take in text", () => {
            firstNameInput().type("example");
            firstNameInput().should("have.value", "example");
            lastNameInput().type("example");
            lastNameInput().should("have.value", "example");
            emailInput().type("example@example.com");
            emailInput().should("have.value", "example@example.com")
            passwordInput().type("example");
            passwordInput().should("have.value", "example")
        })
      })

      describe("tos can be checked", () => {
        it("tos checked", () => {
            tosInput.click()
        })
      })

})