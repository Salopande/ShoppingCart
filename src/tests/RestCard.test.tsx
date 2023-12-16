import React from "react";
import MOCK_DATA from "../mocks/restCardMock.json";
import RestaurantCard, {
  PromtRestaurantCard,
} from "../components/RestaurantCard";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

const Components = () => {
  return <RestaurantCard resData={MOCK_DATA} />;
};

describe.skip("should render restaurant card", () => {
  it("should render restaurant name", () => {
    const { getByText } = render(<Components />);

    const name = getByText("ITC Master Chef Creations");
    expect(name).toBeInTheDocument();
  });
});
