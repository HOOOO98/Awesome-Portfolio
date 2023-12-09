import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Banner from '@/components/ja/Banner';
import Carousel from '@/components/ja/Carousel';
import StackInfo from '@/components/ja/StackInfo';

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <>
      <Header />
      {params.lang === 'ja' ? (
        <main>
          <Banner />
          <Carousel />
          <StackInfo />
        </main>
      ) : null}
      <Footer />
    </>
  );
}
