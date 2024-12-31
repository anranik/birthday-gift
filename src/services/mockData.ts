export interface ServiceCard {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
  isPremium?: boolean;
  isNewArrival?: boolean;
  provider: {
    name: string;
    rating: number;
    location: string;
    avatar: string;
  };
}

export const mockCards: ServiceCard[] = [
  {
    id: 1,
    title: "Elegant Birthday Decoration",
    description: "Transform your space with our elegant birthday decoration service. Perfect for sophisticated celebrations.",
    price: "₹2000",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=400&auto=format&fit=crop",
    category: "Birthday Special Decors",
    isPremium: true,
    isNewArrival: true,
    provider: {
      name: "Suresh Sitharaman",
      rating: 4.9,
      location: "Indiranagar, BL",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    }
  },
  {
    id: 2,
    title: "Romantic Candlelight Dinner",
    description: "Enjoy a romantic candlelight dinner with your loved one. Includes 3-course meal and special setup.",
    price: "₹3000",
    image: "https://images.unsplash.com/photo-1529566652340-2c41a1eb6d93?q=80&w=400&auto=format&fit=crop",
    category: "Candlelight Dinners",
    provider: {
      name: "Suresh Sitharaman",
      rating: 4.9,
      location: "Indiranagar, BL",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    }
  },
  {
    id: 3,
    title: "Custom Birthday Cake",
    description: "Delicious custom-made birthday cakes with your choice of flavors and design.",
    price: "₹1500",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=400&auto=format&fit=crop",
    category: "Birthday Cakes",
    provider: {
      name: "Suresh Sitharaman",
      rating: 4.9,
      location: "Indiranagar, BL",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    }
  },
  {
    id: 4,
    title: "Surprise Birthday Party",
    description: "Let us plan and execute a complete surprise birthday party for your loved ones.",
    price: "₹5000",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=400&auto=format&fit=crop",
    category: "Birthday Surprises",
    provider: {
      name: "Suresh Sitharaman",
      rating: 4.9,
      location: "Indiranagar, BL",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    }
  },
  {
    id: 5,
    title: "Couples Cooking Class",
    description: "Learn to cook together in this fun and interactive cooking class for couples.",
    price: "₹2500",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=400&auto=format&fit=crop",
    category: "Couple Activities",
    provider: {
      name: "Suresh Sitharaman",
      rating: 4.9,
      location: "Indiranagar, BL",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    }
  },
  {
    id: 6,
    title: "Balloon Decoration",
    description: "Beautiful balloon decorations to make your birthday celebration more colorful.",
    price: "₹1800",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=400&auto=format&fit=crop",
    category: "Birthday Special Decors",
    provider: {
      name: "Suresh Sitharaman",
      rating: 4.9,
      location: "Indiranagar, BL",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    }
  },
  {
    id: 7,
    title: "Poolside Candlelight Dinner",
    description: "Romantic poolside dinner setup with candles and special ambiance.",
    price: "₹4000",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=400&auto=format&fit=crop",
    category: "Candlelight Dinners",
    provider: {
      name: "Suresh Sitharaman",
      rating: 4.9,
      location: "Indiranagar, BL",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    }
  },
  {
    id: 8,
    title: "Theme Birthday Cake",
    description: "Specially designed theme cakes for unique birthday celebrations.",
    price: "₹2000",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=400&auto=format&fit=crop",
    category: "Birthday Cakes",
    provider: {
      name: "Suresh Sitharaman",
      rating: 4.9,
      location: "Indiranagar, BL",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    }
  },
  {
    id: 9,
    title: "Flash Mob Surprise",
    description: "Organize a flash mob surprise for an unforgettable birthday moment.",
    price: "₹8000",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=400&auto=format&fit=crop",
    category: "Birthday Surprises",
    provider: {
      name: "Suresh Sitharaman",
      rating: 4.9,
      location: "Indiranagar, BL",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    }
  },
  {
    id: 10,
    title: "Couples Spa Day",
    description: "Relaxing spa day experience designed for couples.",
    price: "₹6000",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400&auto=format&fit=crop",
    category: "Couple Activities",
    provider: {
      name: "Suresh Sitharaman",
      rating: 4.9,
      location: "Indiranagar, BL",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    }
  }
];

export interface ContactDetails {
  id: number;
  address: string;
  email: string;
  phone: string;
  description: string;
  services: string[];
}

export const mockContactDetails: ContactDetails[] = [
  {
    id: 1,
    address: "123 Party Street, Indiranagar, Bangalore",
    email: "contact@birthdaydecorator.com",
    phone: "+91 98765 43210",
    description: "Professional birthday decorator with over 10 years of experience. Specializing in themed decorations and custom setups.",
    services: ["Theme Setup", "Balloon Decoration", "Photo Booth", "Table Setting", "Lighting"]
  },
  // ... similar data for other cards
];
