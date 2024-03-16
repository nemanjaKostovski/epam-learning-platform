import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

function App() {
  return (
    <>
      <Navbar />
      <h1 className='text-6xl font-bold pt-28 text-center'>
        Let's start learning
      </h1>

      <div className='flex justify-center mt-10'>
        <p className='w-2/5 text-center text-xl'>
          Welcome to Learn Platform - where every day is a day to learn. Dive
          into the vast ocean of knowledge and empower yourself with the tools
          for a successful tomorrow. Happy learning!
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <img
          src='/homepage-image.png'
          alt='homepage'
          width='957px'
          height='540px'
          className='mt-16'
        />
      </div>
      <section className=' w-3/4 h-96 ml-[12.5%] mr-[12.5%] mb-20 relative'>
        <img src='./homepage2.png' alt='bg-image' className='absolute top-14' />
        <div className='flex flex-col justify-center items-center mt-20 mb-20 w-full h-96 absolute '>
          <h2 className=' text-indigo-600 text-4xl'>Join us</h2>
          <p className=' w-1/2 text-center'>
            Qui ut exercitation proident enim non tempor tempor ipsum ex nulla
            ea adipsicing sit consequat enim eilit cupidadat o
          </p>
          <button className='ml-3 bg-indigo-500 h-10 mt-2 p-2 rounded text-white font-medium'>
            Join us
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
