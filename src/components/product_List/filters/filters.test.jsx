/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/no-container */
/* eslint-disable no-undef */
import { fireEvent, render, renderHook, screen, waitForElement } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { Filters } from ".";

describe("Filters", () => {
  const queryClient = new QueryClient();

  test("render", async () => {
   /*  jest.mock("react-query", () => ({
      useQuery: () => ({ isLoading: false, error: {}, data: [] }),
    })); */

    const fn = jest.fn();

    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Filters  searchParamsChange={fn}/>
        </BrowserRouter>
      </QueryClientProvider>
    );
    expect(container).toMatchSnapshot();
  });

  test("should change value when move mouse", async () => {
    const fn = jest.fn();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Filters  searchParamsChange={fn}/>
        </BrowserRouter>
      </QueryClientProvider>
    );


    const slider =  screen.getAllByRole("slider");
    // eslint-disable-next-line no-undef

    fireEvent.mouseDown(slider[0], {clientX: 10});
    fireEvent.mouseMove(slider[0], {clienteX: 30});
    fireEvent.mouseUp(slider[0]);

    fireEvent.mouseDown(slider[1], {clientX: 60});
    fireEvent.mouseMove(slider[1], {clienteX: 30});
    fireEvent.mouseUp(slider[1]);

    expect(container).toMatchSnapshot();
 
  })

  test('should show categories when pressed chevron', () => {
    const fn = jest.fn();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Filters  searchParamsChange={fn}/>
        </BrowserRouter>
      </QueryClientProvider>
    );

    fireEvent.click(screen.getByTestId("chevron-categories"));
    expect(screen.getByTestId("showCategories")).toMatchSnapshot();
    fireEvent.click(screen.getByTestId("chevron-categories"));
    expect(container).toMatchSnapshot();
  })

});
