import { HeroType } from '../../types/index';

function Hero({ header, text, imageSrc }: HeroType) {
  return (
    <>
      <h1 className='text-6xl font-bold pt-28 text-center'>{header}</h1>

      <div className='flex justify-center mt-10'>
        <p className='w-2/5 text-center text-xl'>{text}</p>
      </div>
      <div className='flex justify-center items-center'>
        <img
          src={imageSrc}
          alt='homepage'
          width='957px'
          height='540px'
          className='mt-16'
        />
      </div>
    </>
  );
}
export default Hero;
