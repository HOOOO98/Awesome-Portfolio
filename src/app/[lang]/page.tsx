import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <>
      <Header />
      <main>{params.lang}</main>
      <Footer />
    </>
  );
}
