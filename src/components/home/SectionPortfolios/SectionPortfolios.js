import CardPortfolio from '../CardPorfolio/CardPortfolio';

const SectionPortfolios = () => {
  const portfolios = [
    {
      thumbnail: 'https://i.ibb.co/cN59cRp/sbo.png',
      title: 'Sekolah Bisnis Online',
      type: 'Product Development',
      description: 'Dalam proyek ini, kami, sebagai agensi pengembangan produk, mengawali langkah pertama dengan melakukan brainstorming bersama klien, melakukan riset, dan menganalisis pesaing. Setelah semua tahapan ini selesai, kami memulai pembuatan produk berupa situs web, dimulai dari proses pembuatan wireframe hingga mencapai tingkat high fidelity. Seluruh tim kami terlibat dalam setiap langkah ini.',
    },
    {
      thumbnail: 'https://i.ibb.co/vHqMpq0/sbb.png',
      title: 'Mentoring Bisnis by SBO',
      type: 'Product Development',
      description: 'Dalam proyek ini, kami, sebagai agensi pengembangan produk, mengawali langkah pertama dengan melakukan brainstorming bersama klien, melakukan riset, dan menganalisis pesaing. Setelah semua tahapan ini selesai, kami memulai pembuatan produk berupa situs web, dimulai dari proses pembuatan wireframe hingga mencapai tingkat high fidelity. Seluruh tim kami terlibat dalam setiap langkah ini.',
    },
    {
      thumbnail: 'https://i.ibb.co/SQvqHVM/1.jpg',
      title: 'Sekolah Bisnis Online',
      type: 'Social Media Management',
      description: 'Dalam proyek ini, kami sebagai agensi pengembangan produk, tidak hanya berfokus pada pembuatan produk, tetapi juga merancang strategi peluncuran produk ke pasar. Mulai dari sesi brainstorming, pengumpulan data historis, dan analisis pesaing, kami memastikan bahwa setiap langkah diambil dengan cermat. Selain itu, kami melibatkan penetrasi pasar melalui saluran media sosial dengan merancang strategi peluncuran produk yang efektif.',
    },
    {
      thumbnail: 'https://i.ibb.co/jT3n7Sz/4.jpg',
      title: 'E-Kinerja Kab. Morotai',
      type: 'Product Development',
      description: 'Dalam proyek ini, kami, sebagai agensi pengembangan produk, berperan aktif dalam meningkatkan kegunaan produk agar lebih ramah pengguna. Kami tidak hanya melakukan perbaikan antarmuka untuk memastikan kemudahan penggunaan, tetapi juga menjalankan pemeliharaan sistem secara menyeluruh. Selain itu, kami menambahkan beberapa fitur baru yang akan memberikan nilai tambah kepada pengguna.',
    },
    {
      thumbnail: 'https://i.ibb.co/WWctq8P/2.jpg ',
      title: 'Malasso Bali',
      type: 'Performance Marketing',
      description: 'Dalam proyek ini, kami, sebagai agensi pengembangan produk, tidak hanya berfokus pada pembuatan produk tetapi juga merancang strategi peluncuran produk ke pasar melalui saluran pemasaran performa yang efektif. Dimulai dari sesi brainstorming, pengumpulan data historis, dan analisis pesaing, kami dengan cermat memastikan setiap langkah diambil dengan teliti. Selain itu, kami mengintegrasikan strategi peluncuran produk dengan pembuatan media plan agar kampanye yang dijalankan lebih efektif.',
    },
  ];
  return (
    <section id="portfolios" data-aos="fade-up" style={{ background: '#F4F4F4' }}>
      <div className="container p-4 p-lg-5">
        <div className="text-center">
          <h2 className="section-title">Portofolio</h2>
          <p className="lead">Beberapa contoh proyek yang kami kerjakan</p>
        </div>

        <div className="row my-4">
          {portfolios.map((portfolio, index) => (
            <div className="col-md-6 col-xl-4 p-3" key={index}>
              <CardPortfolio
                index={index}
                thumbnail={portfolio.thumbnail}
                title={portfolio.title}
                type={portfolio.type}
                description={portfolio.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionPortfolios;
