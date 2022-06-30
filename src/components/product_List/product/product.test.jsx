/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';
import {Product} from '.';
import {MemoryRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from '../../../redux/store/store';

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

describe("Product", () => {

    test("render", () => {
        const {container} = render(<BrowserRouter><Provider store={store}><Product product={product} /></Provider> </BrowserRouter>); 
        expect(container).toMatchSnapshot();
    })

    test("Should showModal when press Add to Cart button",()=> {
        const {container} = render(<BrowserRouter><Provider store={store}><Product product={product} /></Provider> </BrowserRouter>);
        fireEvent.click(screen.getByText(/Add to Cart/i));
        expect(container.getElementsByClassName("modal-buy-box")).toMatchSnapshot();
        expect(container).toMatchSnapshot();
    })

    test("Not Should show Modal",()=> {
        const {container} = render(<BrowserRouter><Provider store={store}><Product product={product} /></Provider> </BrowserRouter>);
        fireEvent.click(screen.getByText(/Add to Cart/i));
        fireEvent.click(screen.getByTestId("modal-buy"));
        expect(container).toMatchSnapshot();
    })

    test("Should navigate to /products/id when press image div", () =>{
        const history = createMemoryHistory();
        const {container} = render(<BrowserRouter><Provider store={store}><Product product={product} /></Provider> </BrowserRouter>);
        fireEvent.click(container.querySelector(".product-image"));
    })

})