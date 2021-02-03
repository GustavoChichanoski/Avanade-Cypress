describe('Profile', () => {
    it('Editar Perfil', () => {
        cy.login('a@a.com.br','12345678');
        cy.contains('A a').click();
        cy.contains('Edit Profile Settings').click();
        cy.get('[formcontrolname="image"]').clear();
        cy.get('[formcontrolname="image"]')
          .type('https://thispersondoesnotexist.com/image');
        cy.get('[formcontrolname="password"]').type('12345678');
        cy.contains('Update Settings').click();
    });
});
