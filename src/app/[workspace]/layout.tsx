import { AppSidebar } from "@/components/app/AppSidebar";

export default async function AppLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ workspace: string }>;
}) {
  const { workspace } = await params;
  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "rgb(8,9,10)", overflow: "hidden" }}>
      <AppSidebar workspace={workspace} team="JAK" />
      <div style={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column" }}>
        {children}
      </div>
    </div>
  );
}
