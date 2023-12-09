import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import LanguageButton from '@/components/common/LanguageButton';
import Banner from '@/components/ja/Banner';
import Carousel from '@/components/ja/Carousel';
import StackInfo from '@/components/ja/StackInfo';

import Page404 from '../404page';

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <>
      {params.lang === 'ja' ? (
        <>
          <Header />
          <main>
            <Banner />
            <Carousel />
            <StackInfo />
          </main>
          <Footer />
          <LanguageButton lang='ja' />
        </>
      ) : (
        <Page404 />
      )}
    </>
  );
}
