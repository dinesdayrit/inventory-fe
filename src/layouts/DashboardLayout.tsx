import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="max-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto py-4">
        <Sidebar />
        <div className="flex justify-center items-center">
          <div className=" ">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
