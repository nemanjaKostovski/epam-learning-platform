import { Link } from 'react-router-dom';
import Learn from './Learn';

function Navbar() {
  return (
    <nav className='p-2 border-b-2 flex absolute w-full'>
      <Learn />
      <div className='ml-12 text-gray-500 text-sm flex place-items-center'>
        <Link to='/blog' className='mr-6'>
          Blog
        </Link>
        <Link to='/pricing' className='mr-6'>
          Pricing
        </Link>
        <Link to='/about-us' className='mr-6'>
          About Us
        </Link>
      </div>
      <div className='flex right-4 top-0 justify-end absolute h-full'>
        <button className='bg-transparent border-0 text-indigo-600 font-medium'>
          Sign in
        </button>
        <button className='ml-3 bg-indigo-500 h-10 mt-2 p-2 rounded text-white font-medium'>
          Join us
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
