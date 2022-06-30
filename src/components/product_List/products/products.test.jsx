import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Products } from ".";
import { store } from "../../../redux/store/store";


describe("Products", () => {

    const mock = [{
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
]
    test('render', () => {
    
        const {container} = render(<BrowserRouter> <Provider store={store}> <Products products={mock}  /> </Provider>  </BrowserRouter>);
        expect(container).toMatchSnapshot();
    })
})