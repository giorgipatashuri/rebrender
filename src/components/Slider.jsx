import Slider from 'react-slick';
// import Arrow from '../assets/arrow.svg';
const Carouselvol = () => {
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        src='../assets/arrow.svg'
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,

        settings: {
          nextArrow: null,
          prevArrow: null,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,

          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='container mx-auto'>
      <h2 className='text-center mt-5  font-bold  text-xl'> პროექტები </h2>
      <Slider {...settings}>
        <div className=' outline-none'>
          <img src='../assets/2.jpg' alt='' />
        </div>
        <div className=' outline-none'>
          <img src='../assets/3.jpg' alt='' />
        </div>
        <div className=' outline-none'>
          <img src='../assets/4.jpg' alt='' />
        </div>
        <div className=' outline-none'>
          <img src='../assets/5.jpg' alt='' />
        </div>
      </Slider>
    </div>
  );
};
export default Carouselvol;
