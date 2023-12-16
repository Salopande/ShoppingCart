import React from "react";
import Header from "../components/Header";
import appStore from "../utils/appStore";
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import '@testing-library/jest-dom'

const Components = () => {
  return (
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
};

describe.skip("Header component", () => {
  it("should render login button", () => {
    const { getByText, getByRole } = render(<Components />);

    const button = getByRole("button",{name:"Login"});
    expect(button).toBeInTheDocument();
  });

  it('should display cart item',()=>{
    const {getByText} =render (<Components/>)

    const item = getByText(/Cart/)
    expect(item).toBeInTheDocument();
  })

  it('should change login button to logout onclick',()=>{
    const {getByRole} = render (<Components/>)

    const loginButton = getByRole("button",{name:'Login'})
    fireEvent.click(loginButton)

    const logoutButton = getByRole("button",{name:'Logout'})
    expect(logoutButton).toBeInTheDocument()
  })
});
