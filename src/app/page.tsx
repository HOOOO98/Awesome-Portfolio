import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Banner from '@/components/main/Banner';
import Carousel from '@/components/main/Carousel';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Carousel />
      </main>
      <Footer />
    </>
  );
}
