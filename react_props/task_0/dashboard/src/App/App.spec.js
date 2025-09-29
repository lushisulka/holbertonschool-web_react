import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing <App /> component", () => {
    it("renders App without crashing", () => {
        render(<App />);
        expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
        expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
        expect(screen.getByText(/Holberton School/i)).toBeInTheDocument();
    });
});
