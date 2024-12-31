'use client';

import { mockCards, mockContactDetails } from '@/services/mockData';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/20/solid';
import { useParams } from 'next/navigation';

export default function ServicePage() {
  const params = useParams();
  const id = Number(params.id);
  
  const service = mockCards.find(card => card.id === id);
  const contactDetails = mockContactDetails.find(detail => detail.id === id);

  if (!service || !contactDetails) {
    return <div>Service not found</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-pink-50 py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <Link href="/" className="text-pink-600 mb-8 inline-block">← Back to services</Link>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Service Details */}
          <div>
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-4">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/avatar-placeholder.jpg"
                alt={service.provider.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold">{service.provider.name}</h3>
                <div className="flex items-center">
                  <StarIcon className="h-4 w-4 text-yellow-400" />
                  <span className="ml-1 text-sm text-gray-600">{service.provider.rating}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-600">{service.provider.location}</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600 mb-4">{contactDetails.description}</p>
              <h3 className="font-semibold mb-2">Services Offered:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {contactDetails.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div>
            <div className="bg-white rounded-lg p-6 shadow-lg sticky top-8">
              <h2 className="text-2xl font-bold mb-2">₹{service.price}</h2>
              <p className="text-gray-500 mb-6">Starting price</p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">{contactDetails.address}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">{contactDetails.email}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">{contactDetails.phone}</p>
                </div>
              </div>

              <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors mb-4">
                Contact Now
              </button>
              
              <button className="w-full border border-pink-600 text-pink-600 py-3 rounded-lg hover:bg-pink-50 transition-colors">
                Save to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
