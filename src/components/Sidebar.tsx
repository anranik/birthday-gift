'use client';

import { useState } from 'react';

interface SidebarProps {
  onFilterChange: (filters: {
    categories: string[];
  }) => void;
}

export default function Sidebar({ onFilterChange }: SidebarProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    'Birthday Special Decors',
    'Candlelight Dinners',
    'Birthday Cakes',
    'Birthday Surprises',
    'Couple Activities'
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategories(prev => {
      const isSelected = prev.includes(category);
      const newCategories = isSelected
        ? prev.filter(c => c !== category)
        : [...prev, category];
      
      onFilterChange({ categories: newCategories });
      return newCategories;
    });
  };

  return (
    <div className="space-y-2 px-2 py-4 bg-[#FDF2F8]">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`w-full text-left px-4 py-2 rounded-full text-sm transition-colors ${
            selectedCategories.includes(category)
              ? 'bg-purple-600 text-white'
              : 'bg-white text-purple-600 hover:bg-purple-50'
          }`}
        >
          {category}
        </button>
      ))}
      <button
        className="w-full text-left px-4 py-2 rounded-full text-sm bg-purple-200 text-purple-600 hover:bg-purple-300"
      >
        More +
      </button>
    </div>
  );
}
