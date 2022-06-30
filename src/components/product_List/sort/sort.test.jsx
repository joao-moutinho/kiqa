import {fireEvent, render, screen} from '@testing-library/react';
import { Sort } from '.';
import {BrowserRouter} from 'react-router-dom';
import { renderHook, act } from '@testing-library/react-hooks'



describe("Sort", () =>{

    test('render ' ,() => {
        const fn = jest.fn();
        const { container } = render( <BrowserRouter> <Sort setMyState={fn} searchParamsChange={fn}/> </BrowserRouter> );
        expect(container).toMatchSnapshot();
    })
  
     test('test chevron when was pressed', () => {
        const fn = jest.fn();
        const fn2 = jest.fn();
        render( <BrowserRouter> <Sort setMyState={fn} searchParamsChange={fn2}/> </BrowserRouter> );
        // eslint-disable-next-line jest/valid-expect
        expect(fireEvent.click(screen.getByTestId("chevron")))          
    }) 

    test('test dropdown Default', () => {
        const fn = jest.fn();
        const fn2 = jest.fn();
        const {container} =render( <BrowserRouter> <Sort setMyState={fn} searchParamsChange={fn2}/> </BrowserRouter> );
        // eslint-disable-next-line jest/valid-expect
        fireEvent.click(screen.getByTestId("chevron")); 
        // eslint-disable-next-line testing-library/await-async-query
        expect(screen.getByTestId("right-dropdown")).toBeInTheDocument();
        fireEvent.click(screen.getByTestId("buttonDefault"));
        const items =  screen.getAllByText(/Default/i);
        expect(items).toHaveLength(1);
        expect(container).toMatchSnapshot();
    })

    test('test dropdown 1-9 Asc', () => {
        const fn = jest.fn();
        const fn2 = jest.fn();
        const {container} =render( <BrowserRouter> <Sort setMyState={fn} searchParamsChange={fn2}/> </BrowserRouter> );
        // eslint-disable-next-line jest/valid-expect
        fireEvent.click(screen.getByTestId("chevron")); 
        // eslint-disable-next-line testing-library/await-async-query
        expect(screen.getByTestId("right-dropdown")).toBeInTheDocument();
        // eslint-disable-next-line jest/valid-expect
        const buttonAsc = screen.getByText(/1-9 Asc/i);
        fireEvent.click(buttonAsc);
        const items =  screen.getAllByText(/1-9 Asc/i);
        expect(items).toHaveLength(1);
        expect(container).toMatchSnapshot();
       
    }) 

    test('test dropdown 1-9 Des', () => {
        const fn = jest.fn();
        const fn2 = jest.fn();
        const {container} =render( <BrowserRouter> <Sort setMyState={fn} searchParamsChange={fn2}/> </BrowserRouter> );
        // eslint-disable-next-line jest/valid-expect
        fireEvent.click(screen.getByTestId("chevron")); 
        // eslint-disable-next-line testing-library/await-async-query
        expect(screen.getByTestId("right-dropdown")).toBeInTheDocument();
        // eslint-disable-next-line jest/valid-expect
        const buttonDesc = screen.getByText(/9-1 Desc/i);
        fireEvent.click(buttonDesc);
        const items =  screen.getAllByText(/9-1 Desc/i);
        expect(items).toHaveLength(1);
        expect(container).toMatchSnapshot();
    }) 

    test('test dropdown A-Z Asc', () => {
        const fn = jest.fn();
        const fn2 = jest.fn();
        const {container} =render( <BrowserRouter> <Sort setMyState={fn} searchParamsChange={fn2}/> </BrowserRouter> );
        // eslint-disable-next-line jest/valid-expect
        fireEvent.click(screen.getByTestId("chevron")); 
        // eslint-disable-next-line testing-library/await-async-query
        expect(screen.getByTestId("right-dropdown")).toBeInTheDocument();
        // eslint-disable-next-line jest/valid-expect
        const buttonDesc = screen.getByText(/A-Z Asc/i);
        fireEvent.click(buttonDesc);
        const items =  screen.getAllByText(/A-Z Asc/i);
        expect(items).toHaveLength(1);
        expect(container).toMatchSnapshot();
    }) 

    test('test dropdown Z-A Desc', () => {
        const fn = jest.fn();
        const fn2 = jest.fn();
        const {container} =render( <BrowserRouter> <Sort setMyState={fn} searchParamsChange={fn2}/> </BrowserRouter> );
        // eslint-disable-next-line jest/valid-expect
        fireEvent.click(screen.getByTestId("chevron")); 
        // eslint-disable-next-line testing-library/await-async-query
        expect(screen.getByTestId("right-dropdown")).toBeInTheDocument();
        // eslint-disable-next-line jest/valid-expect
        const buttonDesc = screen.getByText(/Z-A Desc/i);
        fireEvent.click(buttonDesc);
        const items =  screen.getAllByText(/Z-A Desc/i);
        expect(items).toHaveLength(1);
        expect(container).toMatchSnapshot();
    }) 
})