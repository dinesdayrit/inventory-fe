import { Route, Routes } from "react-router";
import Layout from "@/layouts/Layout";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";

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
      <Route
        path="/dashboard"
        element={
          <Layout>
            <DashboardPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
