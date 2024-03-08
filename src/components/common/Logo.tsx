import { Link } from 'react-router-dom';

function Learn() {
  return (
    <Link to='/' className='flex'>
      <img
        src='/learn.png'
        alt='learn-logo'
        width='50px'
        height='36px'
        className='inline-block h-9'
      />
      <span className='text-4xl font-semibold -ml-1'>learn</span>
    </Link>
  );
}

export default Learn;
