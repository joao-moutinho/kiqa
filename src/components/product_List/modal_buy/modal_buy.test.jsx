import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {ModalBuy} from ".";
import { store } from "../../../redux/store/store";

describe("Modal Buy", () => {

    const product = {
        id: 1,
        price : 5,
        description: "",
        brand: "",
        name: "",
        isActive: true,
        image: "  ",
        categoryName: "",
        productType: "",
        colors: [
            {
                "hexValue": "#B28378",
                "colourName": "BFF PENCIL" 
            }
        ]
    }

    test("render", () => {
        const {container} = render(<BrowserRouter> <Provider store={store}> <ModalBuy product={product}  /></Provider>  </BrowserRouter>);
        expect(container).toMatchSnapshot();
    })

    test("should select color when press color",()=>{
        const fn = jest.fn();
        const {container} = render(<BrowserRouter> <Provider store={store}><ModalBuy product={product} handleShowModal={fn} /></Provider>  </BrowserRouter>);
        fireEvent.click(screen.getByTestId("color"));
        expect(container).toMatchSnapshot();
    })
})