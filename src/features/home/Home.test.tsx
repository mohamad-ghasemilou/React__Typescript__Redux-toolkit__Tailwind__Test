import React from "react";
import {render, screen} from "@testing-library/react";
import Home from "./Home";
import MockApp from "mocks/MockApp";

describe("Homepage", () => {
    it('shows hello world', () => {
        render (
            <MockApp>
                <Home/>
            </MockApp>
        );
        const textElement = screen.getByText(/Hello world!/i);
        expect(textElement).toBeInTheDocument();
    });
})
