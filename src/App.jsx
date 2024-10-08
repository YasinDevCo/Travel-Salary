import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

import Layout from "./layout/Layout";
import Router from "./routers/Router";
import defaultOptions from "./config/reactQuery";

const queryClient = new QueryClient({defaultOptions});
function App() {
  const [showLoginPage, setShowLoginPage] = useState(null);
  const selectedTheme = localStorage.getItem("theme");
  if (selectedTheme) {
    document.querySelector("body").setAttribute("data-theme", selectedTheme);
  }
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout
          showLoginPage={showLoginPage}
          setShowLoginPage={setShowLoginPage}
        >
          <Router
            showLoginPage={showLoginPage}
            setShowLoginPage={setShowLoginPage}
          />
        </Layout>
        {/* <ReactQueryDevtools/> */}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
