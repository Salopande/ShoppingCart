import React from "react";
import Body from "../components/Body";
import { act, fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";
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

it.skip("should render body components", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const serach = screen.getByTestId("searchInput");

  expect(serach).toBeInTheDocument();
  fireEvent.change(serach, { target: { value: "burger" } });
  const searchBtn = screen.getByRole("button", { name: "Search" });
  fireEvent.click(searchBtn);
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);
});

it.skip("should render top restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(20);

 const  topRatedbtn=screen.getByRole("button",{name:"Top Rated Restaurants", })
 fireEvent.click(topRatedbtn)

 const cardsafterSearch = screen.getAllByTestId("resCard");
 expect(cardsafterSearch.length).toBe(20)
});
