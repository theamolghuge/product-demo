import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "./CategoryFilter";

describe("CategoryFilter", () => {
  const categories = ["Electronics", "Clothing", "Books"];
  const onChange = jest.fn();

  it('renders all category options including "All Categories"', () => {
    render(
      <CategoryFilter categories={categories} selected="" onChange={onChange} />
    );

    expect(screen.getByText("All Categories")).toBeInTheDocument();
    categories.forEach((cat) => {
      expect(screen.getByText(cat)).toBeInTheDocument();
    });
  });

  it("calls onChange with the selected value", () => {
    render(
      <CategoryFilter categories={categories} selected="" onChange={onChange} />
    );
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "Books" },
    });
    expect(onChange).toHaveBeenCalledWith("Books");
  });
});
