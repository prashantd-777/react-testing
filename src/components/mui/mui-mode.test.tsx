import MuiMode from "./mui-mode";
import {render, screen} from "../../test-util";

describe("MuiMode", () => {
    test("renders text correctly", () => {
        render(<MuiMode />

        //     , {
        //     wrapper: AppProvider
        // }
        );
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toHaveTextContent("dark mode");
    })
})