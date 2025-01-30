import { Route, Routes } from "react-router";
import Layout from "./layouts/Layout";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <LoginPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
