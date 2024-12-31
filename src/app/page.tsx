'use client';
import { mockCards } from '@/services/mockData';
import { testimonials } from '@/services/testimonialData';
import ServiceCard from '@/components/ServiceCard';
import Sidebar from '@/components/Sidebar';
import Categories from '@/components/Categories';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [filters, setFilters] = useState({
    categories: [] as string[],
  });

  const filteredCards = useMemo(() => {
    return mockCards.filter(card => {
      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(card.category);
      return categoryMatch;
    });
  }, [filters]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="SETMySpace"
                width={120}
                height={32}
                className="mr-8"
              />
              <div className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700">Home</a>
                <a href="#" className="text-gray-700">Spaces</a>
                <a href="#" className="text-gray-700">Celebrations</a>
                <a href="#" className="text-gray-700">Professionals</a>
                <a href="#" className="text-gray-700">Vendors</a>
                <a href="#" className="text-gray-700">Blog</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-pink-600 font-medium">BECOME A PROFESSIONAL</button>
              <button className="px-4 py-2 bg-gray-900 text-white rounded">Login</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gray-50 min-h-[600px] flex items-center overflow-hidden bg-[url('/images/top_bg.png')]">
      
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-16">
          <div className="grid gap-8 items-center">
            <div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-3xl font-light text-[#1E1E1E]">
                  We set up your space<br />
                  to
                </h2>
                <h1 className="text-4xl md:text-4xl font-light text-[#1E1E1E]">
                  celebrate your <span className="font-bold">Birthday Party</span>
                </h1>
                
              </div>

              <div className="flex flex-wrap gap-4 mt-8 mb-8">
                <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 bg-white">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M4 16L8.586 11.414C8.96106 11.0391 9.46967 10.8284 10 10.8284C10.5303 10.8284 11.0389 11.0391 11.414 11.414L16 16M14 14L15.586 12.414C15.9611 12.0391 16.4697 11.8284 17 11.8284C17.5303 11.8284 18.0389 12.0391 18.414 12.414L20 14M14 8H14.01M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Browse gallery
                </button>
                <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 bg-white">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Find Inspiration
                </button>
                <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 bg-white">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 11a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Hire Professionals
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Service, Professional etc."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter Location"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 11a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <button className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                  Search Professionals
                </button>
              </div>
            </div>
           
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto ">
        <Categories />
        </div>
        </section>
      {/* Categories */}
      {/* <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
        <Categories />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-blue-600 text-white p-6 rounded-lg relative overflow-hidden group cursor-pointer">
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">Husband's Birthday Party</h3>
                <span className="text-3xl transition-transform group-hover:translate-x-2">→</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-600/50"></div>
              <Image
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&auto=format&fit=crop"
                alt="Husband's Birthday"
                fill
                className="object-cover -z-10"
              />
            </div>
            <div className="bg-pink-600 text-white p-6 rounded-lg relative overflow-hidden group cursor-pointer">
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">Wife's Birthday Party</h3>
                <span className="text-3xl transition-transform group-hover:translate-x-2">→</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 to-pink-600/50"></div>
              <Image
                src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&auto=format&fit=crop"
                alt="Wife's Birthday"
                fill
                className="object-cover -z-10"
              />
            </div>
            <div className="bg-green-600 text-white p-6 rounded-lg relative overflow-hidden group cursor-pointer">
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">Kid's Birthday Party</h3>
                <span className="text-3xl transition-transform group-hover:translate-x-2">→</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-600/50"></div>
              <Image
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop"
                alt="Kid's Birthday"
                fill
                className="object-cover -z-10"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-12 bg-[#FFF2F5]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          

          

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="sticky top-8">
                <Sidebar onFilterChange={setFilters} />
              </div>
            </div>

            {/* Service Cards Grid */}
            <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-[#1E1E1E]">Top professionals for Birthday Decorations</h2>
            <button className="flex items-center gap-2 text-pink-600">
              Sort
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCards.map((card) => (
                  <ServiceCard key={card.id} card={card} />
                ))}
              </div>
              {filteredCards.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-600">No services found</h3>
                  <p className="text-gray-500 mt-2">Try adjusting your filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#FDF2F8]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-semibold text-center mb-12 text-[#1E1E1E]">What Our Customers Are Saying</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            navigation
            loop={true}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-8 rounded-lg h-full">
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 relative rounded-full overflow-hidden">
                      <Image
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#E31B54]">{testimonial.author.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.author.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SETMySpace</h3>
              <p className="text-gray-400">A Unit Of UrbanBerries Pvt. Ltd.</p>
              <p className="text-gray-400">Indiranagar, Bangalore</p>
              <p className="text-gray-400">Karnataka - 560038</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <a href="#" className="text-sm text-gray-400 hover:text-pink-500">Help & Support</a>
              </div>
              <div>
                <a href="#" className="text-sm text-gray-400 hover:text-pink-500">Signup As Partner</a>
              </div>
              <div>
                <a href="#" className="text-sm text-gray-400 hover:text-pink-500">Terms & Conditions</a>
              </div>
              <div>
                <a href="#" className="text-sm text-gray-400 hover:text-pink-500">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-gray-400">
            All Rights reserved 2022 setmyspace
          </div>
        </div>
      </footer>
      
    </main>
  );
}
