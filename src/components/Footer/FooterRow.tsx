import { Link } from 'react-router-dom';
import { FooterRowType } from '../../types/index';

export default function FooterRow({ items }: FooterRowType) {
  return (
    <div className='text-gray-500 text-sm grid grid-cols-3 col-span-2'>
      {items.map((group, groupIndex) => (
        <div key={groupIndex} className='mb-6 text-gray-500 text-sm flex-col'>
          {group.map((item, itemIndex) => (
            <div key={`${item.link}-${itemIndex}`}>
              {itemIndex === 0 && (
                <h2 className='text-2xl font-bold text-black mb-6'>
                  <Link to={item.link}>
                    {item.heading && <h2>{item.heading}</h2>}
                  </Link>
                </h2>
              )}
              {itemIndex !== 0 && (
                <Link to={item.link} className='block mb-2'>
                  {item.heading && <h2>{item.heading}</h2>}
                </Link>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
