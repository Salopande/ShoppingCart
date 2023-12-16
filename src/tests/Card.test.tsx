import { act, fireEvent, render,screen } from "@testing-library/react"
import Restaurantmenu from "../components/Restaurantmenu"
import React from "react"
import Header from "../components/Header";
import Cart from "../components/Cart";
import MOCK_DATA from "../mocks/mockMenuData.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from '../utils/appStore';
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve(MOCK_DATA);
        },
      });
    }) as jest.Mock;
  });

it.skip("should render cart item",async()=>{
    await act(async()=>render(<BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Restaurantmenu />
          <Cart />
        </Provider>
      </BrowserRouter>))

    const accHeader= screen.getByText("Leon Gourmet ( Burgers and Sides ) (34)")
    expect(accHeader).toBeInTheDocument();
    fireEvent.click(accHeader)
    expect(screen.getAllByTestId("foodItems").length).toBe(11)

    const addBtn = screen.getAllByRole("button", { name: "Add +" });
   
    fireEvent.click(addBtn[0])
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
    fireEvent.click(addBtn[1])
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
    expect(screen.getAllByTestId("foodItems").length).toBe(13)

    fireEvent.click(screen.getByRole("button",{name:"Clear Items"}))
    expect(screen.getAllByTestId("foodItems").length).toBe(11)
    expect(screen.getByText("Please Add Items to The Card")).toBeInTheDocument();


})