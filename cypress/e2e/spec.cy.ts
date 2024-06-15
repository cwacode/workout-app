describe('Complete E2E Flow for All Categories', () => {
  it('should interact from frontend through backend to database for each category', () => {

    cy.visit('http://localhost:5173/');
    cy.intercept('GET', '/api/exercises/*').as('fetchExercises');
    
    cy.contains('button', 'Back').click();
    cy.wait('@fetchExercises').its('response.statusCode').should('be.oneOf', [200, 304]);
    cy.contains('h2', 'Pull-Ups').should('be.visible');
    cy.contains('p', 'Grip an overhead bar with hands slightly wider than shoulder-width apart, palms facing away from you. Pull your body up until your chin clears the bar, then lower yourself back down with controlled movement.').should('be.visible');
    
    cy.contains('button', 'Shoulders').click();
    cy.wait('@fetchExercises').its('response.statusCode').should('be.oneOf', [200, 304]);
    cy.contains('h2', 'Shoulder Press').should('be.visible');
    cy.contains('p', 'Stand with your feet shoulder-width apart, holding a dumbbell in each hand at shoulder height. Push the weights upward until your arms are fully extended above your head, pause briefly, and then lower the dumbbells back to shoulder height.').should('be.visible');
    
    cy.contains('button', 'Legs').click();
    cy.wait('@fetchExercises').its('response.statusCode').should('be.oneOf', [200, 304]);
    cy.contains('h2', 'Deadlifts').should('be.visible');
    cy.contains('p', 'With feet hip-width apart, hinge at your hips to grip a barbell with hands just outside your legs. Keeping your back straight, push through your heels to stand up, driving the hips forward and bringing the barbell to thigh level, then carefully lower it back to the ground.').should('be.visible');
    
    cy.contains('button', 'Chest').click();
    cy.wait('@fetchExercises').its('response.statusCode').should('be.oneOf', [200, 304]);
    cy.contains('h2', 'Bench Press').should('be.visible');
    cy.contains('p', 'Lie on a flat bench with your eyes under the bar, grip the bar with hands just wider than shoulder-width apart. Lower the bar slowly until it touches the middle of your chest, then push it back to the starting position with your arms fully extended.').should('be.visible');
    
    cy.contains('button', 'Abs').click();
    cy.wait('@fetchExercises').its('response.statusCode').should('be.oneOf', [200, 304]);
    cy.contains('h2', 'Crunches').should('be.visible');
    cy.contains('p', 'Lie on your back with knees bent and feet flat on the floor. Place your hands behind your head without interlocking your fingers. Lift your shoulders towards the ceiling using your abdominal muscles and pause at the peak. Ensure your lower back remains in contact with the floor, then slowly lower back down.').should('be.visible');
  });
});
