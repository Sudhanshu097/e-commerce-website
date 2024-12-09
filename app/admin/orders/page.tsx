import { Order } from "@/lib/models/order";
import connectDB from "@/lib/db";
import OrderList from "@/components/admin/order-list";

async function getOrders() {
  await connectDB();
  const orders = await Order.find({}).populate("items.product");
  return JSON.parse(JSON.stringify(orders));
}

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Orders</h1>
      <OrderList orders={orders} />
    </div>
  );
}