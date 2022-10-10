import {logRoles, render, screen} from "@testing-library/react";
import Skills from "./index";

describe("Skills", () => {
    const skills = ["HTML", "CSS", "JavaScript"];
    test("Component renders correctly", () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    });

    test("renders a list of skills", () => {
        render(<Skills skills={skills} />);
        const listItemElements = screen.getAllByRole("listitem");
        expect(listItemElements).toHaveLength(skills.length);
    });

    test("renders login button", () => {
        render(<Skills skills={skills}/>);
        const buttonElement = screen.getByRole("button", {
            name: "Login"
        });
        expect(buttonElement).toBeInTheDocument();
    })

    test("Start Learning button is not rendered", () => {
        render(<Skills skills={skills} />);
        const buttonElement = screen.queryByRole("button", {
            name: "Start learning"
        });
        expect(buttonElement).not.toBeInTheDocument();
    });

    test("Start learning button is eventually displayed", async () => {
        const view = render(<Skills skills={skills} />);
        logRoles(view?.container);
        // screen.debug();
        const buttonElement = await screen.findByRole("button", {
            name: "Start learning"
        }, {
            timeout: 2000
        });
        expect(buttonElement).toBeInTheDocument();
    })
})