import Head from 'next/head';
import Overlay from '../components/Overlay';
import Header from '../components/Header';

interface Props {
  paragraphs: string[]
}

const Home = ({paragraphs}: Props) => (
  <>
    <Head>
      <title>Marcus Cooper</title>
    </Head>
    <Overlay />
    <Header />

    <div className="px-2 pt-2 w-full flex flex-col bg-content h-screen lg:px-20 2xl:px-40">
      {paragraphs.map(p => (
        <div className="my-3">
          {p}
          <br />
        </div>
      ))}
    </div>
  </>
);

export default Home;

export const getStaticProps = () => ({
  props: {
    paragraphs: [
      `
        Highly accomplished, multifaceted executive armed with 20-plus years' experience delivering innovative media solutions 
        and enforcing communication-related standards of excellence for high-level public and corporate entities. 
        Substantial history collaborating with stakeholders to build communication infrastructure and organizational change. 
        Expertise in developing large-scale information projects, public affairs consulting, 
        and media events that require logistical expertise and have garnered national, regional, and statewide coverage.
      `,
      `
        Specialties: Corporate Communications • Presentations • Media Relations • Event Management • Staff Management • Branding • 
        Press Releases• Crisis Management • Client Relations • Media Policy Development • Change Management Team Leadership • Web Content • 
        IT Strategy • Social Media • Customer Service Message Development • Project Management • Speechwriting • Executive Counseling • 
        Regulatory Compliance Strategic Planning • Broadcast Communications • Journalism • Public Relations
      `,
    ],

  },
});
