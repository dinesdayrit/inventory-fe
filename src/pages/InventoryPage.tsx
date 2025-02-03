import { Search, Plus, Edit, Trash, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function InventoryPage() {
  // Mock inventory data
  const inventoryItems = [
    {
      id: 1,
      name: "Product A",
      category: "Electronics",
      stock: 120,
      lowStockThreshold: 50,
    },
    {
      id: 2,
      name: "Product B",
      category: "Clothing",
      stock: 80,
      lowStockThreshold: 30,
    },
    {
      id: 3,
      name: "Product C",
      category: "Home & Kitchen",
      stock: 25,
      lowStockThreshold: 50,
    },
    {
      id: 4,
      name: "Product D",
      category: "Electronics",
      stock: 200,
      lowStockThreshold: 100,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Title and Actions */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Item
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input placeholder="Search inventory..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Inventory Table */}
      <div className="border rounded-lg shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Low Stock Threshold</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventoryItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell
                  className={
                    item.stock < item.lowStockThreshold
                      ? "text-red-600"
                      : "text-gray-900"
                  }
                >
                  {item.stock}
                </TableCell>
                <TableCell>{item.lowStockThreshold}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash className="h-4 w-4 text-red-600" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
