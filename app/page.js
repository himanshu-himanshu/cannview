import Banner from "@/components/banner/Banner";
import ClickAndConnect from "@/components/clickConnect/ClickAndConnect";
import Footer from "@/components/footer/Footer";
import MenuTV from "@/components/menuTvs/MenuTV";
import PrintMenu from "@/components/printMenu/PrintMenu";
import PromoTV from "@/components/promoTvs/PromoTV";
import TabletApp from "@/components/tabletApp/TabletApp";

export default function Home() {
  return (
    <main>
      <Banner />
      <MenuTV />
      <PromoTV />
      <TabletApp />
      <ClickAndConnect />
      <PrintMenu />
      <Footer />
    </main>
  );
}
