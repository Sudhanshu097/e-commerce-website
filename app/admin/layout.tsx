import DashboardNav from "@/components/admin/dashboard-nav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-5 gap-8">
        <aside className="lg:col-span-1">
          <DashboardNav />
        </aside>
        <main className="lg:col-span-4">{children}</main>
      </div>
    </div>
  );
}