import {
  FaBoxOpen, FaChartLine, FaPeopleArrows, FaSearch,
} from 'react-icons/fa';
import CardService from '../CardService/CardService';

const SectionServices = () => {
  const services = [
    {
      icon: <FaSearch size="3em" />,
      title: 'Search Engine Optimization',
      description: 'Naikkan peringkat, raih visibilitas maksimal. Dengan layanan SEO kami, hadirkan bisnis Anda ke puncak hasil pencarian.',
      link: 'https://wa.me/6285157785712?text=Halo min, boleh jelasin lebih lanjut tentang SEO?',
    },
    {
      icon: <FaChartLine size="3em" />,
      title: 'Performance Marketing',
      description: 'Tingkatkan eksposur, capai hasil maksimal. Manfaatkan kekuatan iklan digital dengan layanan kami. Targetkan audiens tepat, optimalkan konversi.',
      link: 'https://wa.me/6285157785712?text=Halo min, boleh jelasin lebih lanjut tentang Performance Marketing?',
    },
    {
      icon: <FaPeopleArrows size="3em" />,
      title: 'Social Media Management',
      description: 'Dari strategi konten hingga interaksi autentik, kami membantu menciptakan narasi tak terlupakan. Manfaatkan potensi media sosial untuk keberhasilan signifikan.',
      link: 'https://wa.me/6285157785712?text=Halo min, boleh jelasin lebih lanjut tentang Social Media Management?',
    },
    {
      icon: <FaBoxOpen size="3em" />,
      title: 'Product Development',
      description: 'Dengan pendekatan terstruktur dan fokus pada keunggulan, tim pengembangan produk kami siap membawa visi Anda menjadi kenyataan.',
      link: 'https://wa.me/6285157785712?text=Halo min, boleh jelasin lebih lanjut tentang Product Development?',
    },
  ];
  return (
    <section id="services" data-aos="fade-up">
      <div className="container p-4 p-lg-5">
        <div className="text-center">
          <h2 className="section-title">Layanan</h2>
          <p className="lead">Layanan-layanan unggulan kami yang mungkin cocok dengan kebutuhan Anda</p>
        </div>

        <div className="row my-5">
          {services.map((service, index) => (
            <div className="col-md-6 col-xl-3 p-2" key={index}>
              <CardService
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
