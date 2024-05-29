import { Link } from 'react-router-dom';
import { FooterRowType } from '../../types/index';

export default function FooterRow({ items }: FooterRowType) {
  return (
    <div className='ml-12 text-gray-500 text-sm flex flex-col'>
      {items.map((item, index) => (
        <div key={`${item.link}-${index}`}>
          {index === 0 ? (
            <h2 className='text-2xl font-bold text-black mb-6'>
              <Link to={`${item.link}`}>
                {item.heading && <h2>{item.heading}</h2>}
              </Link>
            </h2>
          ) : (
            <Link to={`${item.link}`} className='mb-6'>
              {item.heading && <h2>{item.heading}</h2>}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
