import React from "react";

import { mount } from "@cypress/react";

import DoggiesList from "./DoggiesList";

type Doggie = {
  url?: string;
};

it("Contains doggos result.length", () => {
  const doggos: Doggie[] = [
    {
      url: "https://g77v3827gg2notadhhw9pew7-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/shutterstock_1074621767-1024x579.jpg",
    },
    {
      url: "https://lh3.googleusercontent.com/proxy/TE1O9GRUTpRc0ZY8ohKLqJVwzds2mSGdTR4p12wCYP0fSrrwdlKjOkl1PJolkNDgG6Vi6TL14sj3F_X9IZ4FlKkZX2YiT3biJeKK9AaXiWH0lTqrYdOUOwTr0jooKoFRE7l5a9oqJhBbyFrXKbtXwGJslmHlxlidnGo",
    },
  ];

  mount(<DoggiesList doggies={doggos} />);
  cy.get("[data-testid=app-doggie-result-text]").should("exist"); // h3
  cy.get("[data-testid=app-doggie-result-text]").contains(
    `Results found ${doggos.length}`
  ); // Results found 2
  cy.get('[data-testid="app-doggies"]').children().should("have.length", 2); // 2
});
