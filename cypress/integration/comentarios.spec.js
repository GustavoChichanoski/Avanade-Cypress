describe('Comentarios', () => {
    it('Escrever', () => {
        const msg = 'Sensacional!';
        cy.login('a@a.com.br','12345678');
        cy.contains('Global Feed').click();
        cy.get('.preview-link').first().click();
        cy.get('.form-control').type(msg);
        cy.get('.btn-primary').click();
        cy.contains(msg);
    });
});
