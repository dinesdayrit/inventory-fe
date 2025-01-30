import Header from "../components/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 mt-[87px]">{children}</div>
      <div>footer</div>
    </div>
  );
};

export default Layout;
