class SDLoginPage{
	enterUsername(username){cy.get("#user-name").type(username)}
	enterPassword(password){cy.get("#password").type(password)}
	clickLoginBtn(){cy.get("#login-button").click()}
	getError(){return cy.get(".error h3")}
}

export default SDLoginPage;