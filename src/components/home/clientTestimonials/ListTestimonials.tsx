import SwiperContainer from './SwiperContainer';
import testimonialsData from '../../../services/testimonials-temp-db.json';

const testimonials = testimonialsData.testimonials;

function ListTestimonials() {
  return <SwiperContainer testimonials={testimonials} />;
}

export default ListTestimonials;
