import Navbar from './components/Navbar';

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
      <div className='flex justify-center items-center absolute ml-80'>
        <img
          src='/homepage2.png'
          alt='homepage'
          width='1176px'
          height='384px'
          className='mt-20 mb-20'
        />
        <h2 className='absolute top-36 text-indigo-600 text-4xl'>Join us</h2>
        <p className='absolute w-1/2 text-center'>
          Qui ut exercitation proident enim non tempor tempor ipsum ex nulla ea
          adipsicing sit consequat enim eilit cupidadat o
        </p>
        <button className='ml-3 bg-indigo-500 h-10 mt-2 p-2 rounded text-white font-medium absolute bottom-36'>
          Join us
        </button>
      </div>
    </>
  );
}

export default App;
