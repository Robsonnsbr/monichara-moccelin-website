import { Metadata } from 'node_modules/next';
import Main from 'src/components/common/Main';
import AboutSummary from 'src/components/home/aboutSummary';
import Testimonials from 'src/components/home/clientTestimonials';
import ListServicesHome from 'src/components/home/listServices/ListServicesHome';
import PosterHome from 'src/components/home/poster/PosterHome';
import TopHome from 'src/components/home/topHome/TopHome';

export const metadata: Metadata = {
  title: 'Home | Moccelin Advocacia'
};

export default function Home() {
  return (
    <>
      <TopHome />
      <Main className="pt-0">
        <ListServicesHome />
        <PosterHome />
        <AboutSummary />
        <Testimonials />
      </Main>
    </>
  );
}
