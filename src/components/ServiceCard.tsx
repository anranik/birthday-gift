import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ServiceCard as ServiceCardType } from '@/services/mockData';

interface ServiceCardProps {
  card: ServiceCardType;
}

export default function ServiceCard({ card }: ServiceCardProps) {
  const router = useRouter();

  const handleContact = () => {
    router.push(`/service/${card.id}`);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          {card.isPremium && (
            <span className="px-3 py-1 text-xs font-medium bg-pink-500 text-white rounded-full">
              PREMIUM
            </span>
          )}
          {card.isNewArrival && (
            <span className="px-3 py-1 text-xs font-medium bg-pink-500 text-white rounded-full">
              NEW ARRIVAL
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <div className="absolute top-4 right-4 z-10">
          <button className="bg-white p-2 rounded-full">
            <svg className="w-5 h-5 text-gray-400 hover:text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Image */}
        <div className="relative w-full h-48">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{card.title}</h3>
        <p className="text-gray-600 text-sm mt-1 mb-4">{card.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 relative rounded-full overflow-hidden">
              <Image
                src={card.provider.avatar}
                alt={card.provider.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm text-gray-600">{card.provider.name}</span>
          </div>
          <span className="text-sm font-medium text-gray-900">₹{card.price}</span>
        </div>

        <div className="flex items-center text-sm text-gray-500 mt-2">
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1">{card.provider.rating}</span>
          <span className="mx-2">•</span>
          <span>{card.provider.location}</span>
        </div>

        <button 
          className="w-full text-center py-3 bg-pink-50 text-pink-500 rounded-lg hover:bg-pink-100 transition-colors font-medium mt-4"
          onClick={handleContact}
        >
          CONTACT NOW
        </button>
      </div>
    </div>
  );
}
