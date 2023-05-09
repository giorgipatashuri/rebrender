import LinearProgressBar from './LinearProgressBar';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
const AboutUsSection = () => {
  return (
    <div className='bg-mainGray'>
      <section className='container mx-auto '>
        <div className='md:flex'>
          <Fade left>
            <img src='../assets/about-us.jpg' alt='' className='md:w-[50%]' />
          </Fade>
          <Fade right>
            <div className='p-4 md:p-6 lg:p-8'>
              <h1 className=' font-bold'>ჩვენს შესახებ</h1>
              <div className='mt-[10px]'>
                რებრენდერი არის კომპანია რომელიც მოიცავს ბიზნეს მომსახურების სრულ პაკეტს. მათ შორის
                არის: ვებ დიზაინი და დეველოპმენტი, გრაფიკული დიზაინი და ბრენდინგი, ლოგოს, ბრენდ
                ბუქის, ბროშურის დიზაინის, ბანერის დიზაინის და ა.შ. შექმნა, გეოგრაფიული საინფორმაციო
                სისტემები (გის) და რუკები, IT კონსულტაცია, მარკეტინგული მომსახურება და სრული
                რებრენდინგი.
              </div>
              <div className='mt-[10px]'>
                თუ გაქვთ კომპანია და გჭირდებათ ბიზნესთან დაკავშირებული ნებისმიერი ტიპის მომსახურება,
                ჩვენი პროფესიონალთა გუნდი მზადაა თქვენი მოთხოვნების დასაკმაყოფილებლად.
              </div>
              <button className=' p-[10px] mt-[30px] bg-mainRed text-white'>დაგვიკავშირდით</button>
            </div>
          </Fade>
        </div>
        <Pulse left>
          <div className='p-4 md:p-6 md:flex gap-5 lg:p-8'>
            <div className='w-full'>
              <LinearProgressBar percentage={80} name={'კოდირება'} />
              <LinearProgressBar percentage={90} name={'დიზაინი'} />
            </div>
            <div className='w-full'>
              <LinearProgressBar percentage={60} name={'ბრენდირება'} />
              <LinearProgressBar percentage={73} name={'მარკეტინგი'} />
            </div>
          </div>
        </Pulse>
      </section>
    </div>
  );
};
export default AboutUsSection;
