import Logo from '../common/Logo';
import FooterRow from './FooterRow';

const footerItems1 = [
  { link: '/product', heading: 'Product' },
  { link: '/features', heading: 'Features' },
  { link: '/pricing', heading: 'Pricing' },
];

const footerItems2 = [
  { link: '/resources', heading: 'Resources' },
  { link: '/blog', heading: 'Blog' },
  { link: '/user-guides', heading: 'User guides' },
  { link: '/webinars', heading: 'Webinars' },
];

const footerItems3 = [
  { link: '/company', heading: 'Company' },
  { link: '/about-us', heading: 'About Us' },
  { link: '/contact-us', heading: 'Contact Us' },
];

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className=' pl-[10%] pr-[10%] gap-x-8 gap-y-4 pt-10 bg-gray-50'>
      <div className='grid grid-cols-6  border-b-2'>
        <Logo />
        <FooterRow items={footerItems1} />
        <FooterRow items={footerItems2} />
        <FooterRow items={footerItems3} />
        <div className='col-span-2 mb-10'>
          <h2 className='text-2xl font-bold text-indigo-500'>
            Subscribe to our newsletter
          </h2>
          <p className='mb-10'>
            For product announcements and exclusive insights
          </p>
          <div className='relative'>
            <img
              src='/envelope.png'
              alt='email-icon'
              className='absolute top-3 left-3 w-4 h-4'
            />
            <div className='flex'>
              <input
                className='w-80 h-10 rounded-lg rounded-r-none border-[1px] border-gray-500 pl-12'
                type='text'
                placeholder='Input your email'
              />
              <button className='btn btn--primary rounded-lg rounded-l-none w-32'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 pb-6 flex justify-between'>
        <select
          name='language'
          id='language'
          className='bg-gray-200 p-1 rounded w-32'
        >
          <option value='English'>English</option>
        </select>
        <p className='text-gray-700 font-medium'>
          &copy; Learn, {year} inc <strong>&middot;</strong> Privacy{' '}
          <strong>&middot;</strong>
          Terms
        </p>
        <div className='flex justify-between w-40 '>
          <img
            className='w-8 h-8'
            src='/icons8-twitter-50.png'
            alt='twitter-icon'
          />
          <img
            className='w-8 h-8'
            src='/icons8-facebook-50.png'
            alt='facebook-icon'
          />
          <img
            className='w-8 h-8'
            src='/icons8-youtube-50.png'
            alt='youtube-icon'
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
