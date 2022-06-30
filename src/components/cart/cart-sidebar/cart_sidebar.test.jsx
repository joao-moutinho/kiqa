import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { CartSidebar } from "."
import { store } from "../../../redux/store/store"


describe("cart sidebar", () => {

    test("render", ()=> {
        const {container} = render(<BrowserRouter> <Provider store={store}> <CartSidebar /></Provider>  </BrowserRouter>)
    })
})