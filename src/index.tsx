import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./Services/queryClient";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
const DOMAIN = process.env.REACT_APP_DOMAIN
  ? process.env.REACT_APP_DOMAIN
  : "dev-j5yx0w-e.us.auth0.com";
const AUDIENCE = process.env.REACT_APP_AUDIENCE
  ? process.env.REACT_APP_AUDIENCE
  : "https://internship-example.com";
const CLIENTID = process.env.REACT_APP_CLIENTID
  ? process.env.REACT_APP_CLIENTID
  : "tMBIoDwuV0rP5JmdInvqrcZEs2Tu5Glt";
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Auth0Provider
          domain={DOMAIN}
          clientId={CLIENTID}
          authorizationParams={{
            audience: AUDIENCE,
            redirect_uri: window.location.origin,
          }}
        >
          <RouterProvider router={router} />
        </Auth0Provider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
