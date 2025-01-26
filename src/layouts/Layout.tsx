import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="bg-main-light flex min-h-screen min-w-[390px] flex-col">
      {showHero && <Hero />}
      <Header />

      <div className="container mx-auto flex-1 px-[5%] pb-24 pt-8 xl:pt-16">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
