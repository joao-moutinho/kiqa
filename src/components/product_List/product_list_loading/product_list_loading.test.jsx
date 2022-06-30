import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ProductListLoading } from ".";


describe('render', () => {

    test('render', () =>{
        const {container} = render(<BrowserRouter> <ProductListLoading /> </BrowserRouter>)
        expect(container).toMatchSnapshot();
    })
})