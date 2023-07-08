import Banner from "@/components/banner/Banner";
import MenuTV from "@/components/menuTvs/MenuTV";
import PromoTV from "@/components/promoTvs/PromoTV";

export default function Home() {
  return (
    <main>
      <Banner />
      <MenuTV />
      <PromoTV />
      <MenuTV />
    </main>
  );
}
