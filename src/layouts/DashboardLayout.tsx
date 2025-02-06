import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="max-h-screen flex flex-col">
      <Header showMenu />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto py-6">
        <Sidebar />
        <div className="overflow-x-hidden px-10">
          <div className=" ">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
