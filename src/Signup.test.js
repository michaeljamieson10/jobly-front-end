import React from "react";
import { render } from "@testing-library/react";
import Signup from "./Signup";
import { MemoryRouter } from "react-router";
import { UserProvider } from "./testUtils";

it("renders without crashing", function() {
  render(
    <UserProvider>
      <Signup />
    </UserProvider>
  );
});

it("matches snapshot", function() {
  const { asFragment } = render(
    <UserProvider>
      <Signup />
    </UserProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
