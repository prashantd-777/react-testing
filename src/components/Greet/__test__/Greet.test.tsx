/*
* Greet should render the text Hello if a name is passed into the component
* It should be render hello followed by the name.
* */

import {render, screen} from "@testing-library/react";
import Greet from "../index";

// test("Greet renders correctly", () => {
//     render(<Greet />);
//     const textElement = screen.getByText(/hello/i);
//     expect(textElement).toBeInTheDocument();
// })

describe("Greet", () => {

    test("Greet renders correctly", () => {
        render(<Greet />);
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument();
    });

    // describe("Nested", () => {
    //     test("Greet renders with a name", () => {
    //         render(<Greet name={"Prashant"} />);
    //         const textElement = screen.getByText("Hello Prashant");
    //         expect(textElement).toBeInTheDocument();
    //     })
    // })
})

describe("Nested", () => {
    test("Greet renders with a name", () => {
        render(<Greet name={"Prashant"} />);
        const textElement = screen.getByText("Hello Prashant");
        expect(textElement).toBeInTheDocument();
    })
})