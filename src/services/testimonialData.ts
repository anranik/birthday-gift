export interface Testimonial {
  id: number;
  content: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu present at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac.",
    author: {
      name: "Judith Black",
      title: "CEO of Tuple",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    }
  },
  {
    id: 2,
    content: "Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam reprehenderit nisi officia voluptate incididunt exercitation elit. Nostrud veniam sint dolor nisi ullamco.",
    author: {
      name: "Joseph Rodriguez",
      title: "CEO of Reform",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
    }
  },
  {
    id: 3,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    author: {
      name: "Sarah Johnson",
      title: "Designer at Figma",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    }
  },
  {
    id: 4,
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    author: {
      name: "Michael Chen",
      title: "Founder of Acme",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    }
  },
  {
    id: 5,
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
    author: {
      name: "Emily Davis",
      title: "CTO of Vercel",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
    }
  },
  {
    id: 6,
    content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
    author: {
      name: "David Kim",
      title: "Product Lead at Stripe",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    }
  }
];
