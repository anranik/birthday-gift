import Image from 'next/image';
import Link from 'next/link';
import { mockCards } from '@/services/mockData';

// Get unique categories from mockData
const categories = Array.from(new Set(mockCards.map(card => card.category))).map(category => {
  let bgColor = '';
  switch(category) {
    case 'Birthday Special Decors':
      bgColor = 'bg-blue-600';
      break;
    case 'Candlelight Dinners':
      bgColor = 'bg-pink-500';
      break;
    case 'Birthday Cakes':
      bgColor = 'bg-green-600';
      break;
    default:
      bgColor = 'bg-purple-600';
  }

  return {
    title: category,
    image: mockCards.find(card => card.category === category)?.image || '',
    href: '#',
    bgColor
  };
});

export default function Categories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-8">
      {categories.slice(0, 3).map((category) => (
        <Link 
          key={category.title}
          href={category.href}
          className={`relative overflow-hidden rounded-lg group ${category.bgColor} hover:opacity-90 transition-opacity`}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
          
          {/* Image */}
          <div className="relative aspect-[16/6]">
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="absolute inset-0 z-20 p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-white mb-2">
              {category.title}
            </h3>
            <div className="flex items-center text-white">
              <span className="text-lg">Explore</span>
              <svg 
                className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
