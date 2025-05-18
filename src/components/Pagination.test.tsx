import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination", () => {
  const onPageChange = jest.fn();

  it("renders correct number of page buttons", () => {
    render(
      <Pagination currentPage={1} totalPages={3} onPageChange={onPageChange} />
    );
    expect(screen.getAllByRole("button")).toHaveLength(5); // Prev, 1, 2, 3, Next
  });

  it("disables Prev button on first page", () => {
    render(
      <Pagination currentPage={1} totalPages={3} onPageChange={onPageChange} />
    );
    expect(screen.getByText("Prev")).toBeDisabled();
  });

  it("disables Next button on last page", () => {
    render(
      <Pagination currentPage={3} totalPages={3} onPageChange={onPageChange} />
    );
    expect(screen.getByText("Next")).toBeDisabled();
  });

  it("calls onPageChange with correct page when a page number is clicked", () => {
    render(
      <Pagination currentPage={1} totalPages={3} onPageChange={onPageChange} />
    );
    fireEvent.click(screen.getByText("2"));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it("calls onPageChange with previous/next page", () => {
    render(
      <Pagination currentPage={2} totalPages={3} onPageChange={onPageChange} />
    );
    fireEvent.click(screen.getByText("Prev"));
    fireEvent.click(screen.getByText("Next"));
    expect(onPageChange).toHaveBeenCalledWith(1);
    expect(onPageChange).toHaveBeenCalledWith(3);
  });
});
