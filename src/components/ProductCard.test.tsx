import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { type Product } from "../types/product";

const mockProduct: Product = {
  id: 1,
  title: "Test Product",
  price: 99.99,
  image: "https://via.placeholder.com/150",
  rating: { rate: 4.5, count: 100 },
  category: "",
};

test("renders product card with title and price", () => {
  render(<ProductCard product={mockProduct} />);
  expect(screen.getByText("Test Product")).toBeInTheDocument();
  expect(screen.getByText("$99.99")).toBeInTheDocument();
});
