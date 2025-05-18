import { render, screen } from "@testing-library/react";
import ProductTable from "./ProductTable";
import { Product } from "../types/product";

const mockProduct: Product[] = [
  {
    id: 1,
    title: "Test Product",
    price: 99.99,
    image: "https://via.placeholder.com/150",
    rating: { rate: 4.5, count: 100 },
    category: "",
  },
];

describe("test product Table component", () => {
  test("renders product table column name and see if they show up", () => {
    render(<ProductTable products={mockProduct} />);
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Rating")).toBeInTheDocument();
  });

  test("render product list and see if they exist", () => {
    render(<ProductTable products={mockProduct} />);
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$99.99")).toBeInTheDocument();
  });
});
