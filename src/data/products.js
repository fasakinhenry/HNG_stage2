// src/data/products.js
import boldRedJacket from '../assets/bold_red_jacket.jpeg';
import dinnerGown from '../assets/dinner_gown.jpeg';
import corporateGown from '../assets/female_casual.jpeg';
import highWaistJeans from '../assets/ladies_gown.jpeg';
import fittedCorporateGown from '../assets/corporate_gown.png';

export const products = [
  {
    id: 1,
    title: 'Bold Red Jacket',
    image: boldRedJacket,
    price: '27,000',
    reviews: '346',
    oldPrice: '30,000',
    discount: '5',
    description: 'Transform your look with our bold red jacket...',
  },
  {
    id: 2,
    title: 'Dinner Gown',
    image: dinnerGown,
    price: '33,000',
    reviews: '346',
    oldPrice: '30,000',
    discount: '5',
    description: 'Elegant dinner gown for special occasions...',
  },
  {
    id: 3,
    title: 'Corporate Gown',
    image: corporateGown,
    price: '7,000',
    reviews: '346',
    oldPrice: '30,000',
    discount: '5',
    description: 'Professional corporate gown for office wear...',
  },
  {
    id: 4,
    title: 'High waist skinny jeans',
    image: highWaistJeans,
    price: '15,000',
    reviews: '346',
    oldPrice: '30,000',
    discount: '5',
    description: 'Stylish high waist skinny jeans for casual wear...',
  },
  {
    id: 5,
    title: 'Fitted corporate gown',
    image: fittedCorporateGown,
    price: '27,000',
    reviews: '346',
    oldPrice: '30,000',
    discount: '5',
    description: 'Chic fitted corporate gown for formal events...',
  },
  // Add more products as needed
];
