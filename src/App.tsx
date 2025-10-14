import { ToastContainer } from "react-toastify";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AppRouterProvider } from "./routes/provider";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouterProvider />

      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
