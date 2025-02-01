import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto mt-[87px]">
        Sidebar
        <div className="mt-[87px] flex items-center justify-center ">
          {children}
        </div>
      </div>
      <div>footer</div>
    </div>
  );
};

export default DashboardLayout;
