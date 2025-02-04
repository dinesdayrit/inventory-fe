import { Route, Routes } from "react-router";
import Layout from "@/layouts/Layout";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import DashboardLayout from "@/layouts/DashboardLayout";
import InventoryPage from "./pages/InventoryPage";
import ComingSoonPage from "./pages/CommingSoonPage";

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
          <DashboardLayout>
            <DashboardPage />
          </DashboardLayout>
        }
      />
      <Route
        path="/inventory"
        element={
          <DashboardLayout>
            <InventoryPage />
          </DashboardLayout>
        }
      />
      <Route
        path="/products"
        element={
          <DashboardLayout>
            <ComingSoonPage />
          </DashboardLayout>
        }
      />
    </Routes>
  );
}

export default App;
