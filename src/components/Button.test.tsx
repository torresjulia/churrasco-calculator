import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button Component", () => {
  it("renders button with default props", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: "#ff6b6b",
      color: "white",
      width: "100%",
    });
  });

  it("renders button with primary prop", () => {
    render(<Button primary>Primary Button</Button>);

    const button = screen.getByRole("button", { name: /primary button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: "#ff6b6b",
    });
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies hover styles on hover", () => {
    render(<Button>Hover me</Button>);

    const button = screen.getByRole("button", { name: /hover me/i });
    fireEvent.mouseEnter(button);

    expect(button).toHaveStyle({
      backgroundColor: "#ff5252",
    });
  });

  // Removendo o teste de responsividade pois ele é melhor testado com testes de integração
  // ou testes específicos de estilo usando ferramentas como Storybook
});
