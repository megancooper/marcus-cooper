import Head from 'next/head';
import Overlay from '../components/overlay';
import Header from '../components/header';

type Props = {
  allPosts: string[]
};

const Index = ({allPosts}: Props) => (
  <>
    <Head>
      <title>Marcus Cooper</title>
    </Head>
    <Overlay />
    <Header />
    <div className="container mx-auto">Content</div>
  </>
);

export default Index;

export const getStaticProps = async () => ({
  props: {
    allPosts: [],
  },
});
