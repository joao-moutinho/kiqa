import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RoutesApp } from "./utils/routes/routes";
import { QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RoutesApp />
        </Provider>
        <ReactQueryDevtools/>
    </QueryClientProvider>

);
