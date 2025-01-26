import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";

import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import store from "./store/Store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <QueryClientProvider client={queryClient}>
          <Auth0ProviderWithNavigate>
            <AppRoutes />
            <Toaster visibleToasts={1} position="bottom-right" />
          </Auth0ProviderWithNavigate>
        </QueryClientProvider>
      </Router>
    </Provider>
  </StrictMode>
);
