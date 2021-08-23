import React from "react";

import { mount } from "@cypress/react";

import Header from "./Header";

it("Contains an image", () => {
  mount(<Header />);

  cy.get("[data-testid=app-header]")
    .find("img")
    .should("have.attr", "src")
    .should("include", "dog-api-logo");
});
