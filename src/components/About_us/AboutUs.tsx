import Footer from '../Footer/Footer';
import Navbar from '../common/Navbar';
import Hero from '../common/Hero';
import AboutCard from './AboutCard';

const hero = {
  header: 'About Us',
  text: "Welcome to the 'About Us' section of Learn Platform, where we aim to provide you with a deeper understanding of our philosophy, values, and mission. Established in 2023, Learn Platform was born out of a passion for learning and a belief in the power of knowledge to transform lives.",
  imageSrc: '/about.png',
};

const people = [
  {
    name: 'John Doe',
    imageSrc: '/Image_29.png',
    title: 'Professional title',
    desc: 'Pariatur ea consectetur anim qui nisi exerci',
  },
  {
    name: 'Sara Rose',
    imageSrc: '/Image_30.png',
    title: 'Professional title',
    desc: 'Laborum officia esse cillum mollilt eiusmod',
  },
  {
    name: 'Jack Black',
    imageSrc: '/Image_31.png',
    title: 'Professional title',
    desc: 'Cupla adipisicing aute sunt veilt cupidatadat qui a',
  },
];

function AboutUs() {
  return (
    <div>
      <Navbar />
      <Hero header={hero.header} text={hero.text} imageSrc={hero.imageSrc} />
      <section className='flex justify-center items-center mt-10 mb-40'>
        <div>
          <h2 className='text-4xl font-bold text-center'>Our team</h2>
          <p className='w-60'>
            Aliqua ipsum tempor aliqua eisumod lorem ad labore cupla aliquip
          </p>
        </div>
        <div>
          <AboutCard items={people} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;
