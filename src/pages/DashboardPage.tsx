import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Package,
  Box,
  ArrowUp,
  ArrowDown,
  Clock,
  AlertCircle,
} from "lucide-react";
import { dummyProducts } from "@/data/dummyProduct";

export default function DashboardPage() {
  // Mock data for the bar chart
  const inventoryData = [
    { name: "Jan", stock: 400 },
    { name: "Feb", stock: 300 },
    { name: "Mar", stock: 200 },
    { name: "Apr", stock: 500 },
    { name: "May", stock: 600 },
    { name: "Jun", stock: 700 },
  ];

  // Mock data for recent activities
  const recentActivities = [
    { id: 1, type: "Stock In", item: "Product A", time: "2 hours ago" },
    { id: 2, type: "Stock Out", item: "Product B", time: "5 hours ago" },
    { id: 3, type: "Stock In", item: "Product C", time: "1 day ago" },
    { id: 4, type: "Stock Out", item: "Product D", time: "2 days ago" },
  ];

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Products</p>
              <p className="text-2xl font-bold">{dummyProducts.length}</p>
            </div>
            <div className="p-3 bg-indigo-50 rounded-full">
              <Package className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Low Stock Items</p>
              <p className="text-2xl font-bold">23</p>
            </div>
            <div className="p-3 bg-red-50 rounded-full">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Stock In (This Month)</p>
              <p className="text-2xl font-bold">+456</p>
            </div>
            <div className="p-3 bg-green-50 rounded-full">
              <ArrowUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Stock Out (This Month)</p>
              <p className="text-2xl font-bold">-123</p>
            </div>
            <div className="p-3 bg-orange-50 rounded-full">
              <ArrowDown className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Overview Chart */}
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Inventory Overview
        </h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={inventoryData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="stock" fill="#6366F1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activities
        </h2>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-indigo-50 rounded-full">
                  <Box className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {activity.type}: {activity.item}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
              <div className="p-2 bg-gray-100 rounded-full">
                <Clock className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
