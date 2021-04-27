import Head from 'next/head';

type Props = {
  allPosts: string[]
};

const Index = ({allPosts}: Props) => (
  <>
    <Head>
      <title>Build Me</title>
    </Head>
    Templates are fun!
  </>
);

export default Index;

export const getStaticProps = async () => ({
  props: {
    allPosts: [],
  },
});
