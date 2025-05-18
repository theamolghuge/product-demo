import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar Component Testing", () => {
  test("renders input with the correct value and placeholder", () => {
    render(<SearchBar query="shirt" onChange={() => {}} />);
    const input = screen.getByPlaceholderText(
      "Search products..."
    ) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("shirt");
  });

  test("calls onChange with updated value", () => {
    const handleChange = jest.fn();
    render(<SearchBar query="" onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Search products...");

    fireEvent.change(input, { target: { value: "Mens" } });
    expect(handleChange).toHaveBeenCalledWith("Mens");
  });
});
