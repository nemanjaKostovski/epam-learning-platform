import { AboutCardType } from '../../types/index';

export default function AboutCard({ items }: AboutCardType) {
  return (
    <div className='flex text-center'>
      {items.map((item) => (
        <div className='flex flex-col mr-4' key={item.name}>
          <div className='flex justify-center items-center mb-4'>
            <img src={item.imageSrc} alt='user image' width='150px' />
          </div>
          <h2 className='text-2xl font-bold mb-2'>{item.name}</h2>
          <p className='text-indigo-400 mb-2'>{item.title}</p>
          <p className='w-56'>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
