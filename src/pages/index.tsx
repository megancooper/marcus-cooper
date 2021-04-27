import Head from 'next/head';
import Overlay from '../components/Overlay';
import Header from '../components/Header';
import ScrollBar from '../components/CustomScroll';
import Categories from '../components/Categories';
import DisplayedContent from '../components/DisplayedContent';
import {CATEGORIES} from '../constants';

interface Props {
  categories: string[]
}

const Index = ({categories}: Props) => (
  <>
    <Head>
      <title>Marcus Cooper</title>
    </Head>
    <Overlay />
    <Header />

    <div className="px-2 pt-2 w-full flex flex-col lg:flex-row bg-content h-screen lg:px-20 2xl:px-40">
      <Categories categories={categories} />
      <ScrollBar>
        <DisplayedContent />
      </ScrollBar>

    </div>
  </>
);

export default Index;

export async function getStaticProps() {
  return {
    props: {
      categories: CATEGORIES,
    },
  };
}
