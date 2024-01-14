import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import LanguageButton from '@/components/common/LanguageButton';
import Banner from '@/components/main/Banner';
import Carousel from '@/components/main/Carousel';
import ProjectInfo from '@/components/main/ProjectInfo';
import StackInfo from '@/components/main/StackInfo';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Carousel />
        <ProjectInfo />
        <StackInfo />
      </main>
      <Footer />
      <LanguageButton lang='ko' />
    </>
  );
}
