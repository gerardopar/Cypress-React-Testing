import React from 'react';

import { mount } from "@cypress/react";

import App from './App';

it('renders the app', () => {
  mount(<App />);
  cy.get('[data-testid=app-header]').should('exist') // <Header />
  cy.get('[data-testid=app-inputForm]').should('exist') // <InputForm />
  cy.get('[data-testid=app-doggie-list]').should('exist') // <DoggiesList />
});