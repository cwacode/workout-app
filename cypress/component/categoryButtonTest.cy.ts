import { mount } from '@cypress/vue';
import CategoryButton from '../../frontend/src/components/CategoryButton.vue';

describe('CategoryButton Component', () => {
  const categories = ['Back', 'Shoulders', 'Legs', 'Chest', 'Abs'];
  categories.forEach(category => {
    it(`should display the button for ${category} and handle click events`, () => {
      const onClickSpy = cy.spy().as('onClickSpy');
      mount(CategoryButton, {
        props: {
          category: category
        },
        attrs: {
          onClick: onClickSpy
        }
      });
      cy.contains('button', category).should('be.visible').click();
      cy.get('@onClickSpy').should('have.been.calledOnce');
    });
  });
});
