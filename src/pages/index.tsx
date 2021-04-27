import Head from 'next/head';
import Overlay from '../components/overlay';
import Header from '../components/header';
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
    <div className="px-20 w-full flex bg-content h-screen">
      <Categories categories={categories} />
      <DisplayedContent />
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
