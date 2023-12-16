import React from "react";
import { getByPlaceholderText, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Contact from "../components/Contact";

const Component: React.FC = () => {
  return <Contact />;
};

describe.skip("contact page", () => {
  it("Contact page should render", async () => {
    const { getByRole } = render(<Component />);
    
    const heading = getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it('should render button',()=>{
    const {getByText} = render(<Component/>)
    const button =getByText("Submit")
    expect(button).toBeInTheDocument();
  })

  it('should render input',()=>{
    const { getByPlaceholderText} = render(<Component/>)
    const input = getByPlaceholderText("name")
    expect(input).toBeInTheDocument();
  })
});
