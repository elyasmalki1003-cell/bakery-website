export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  tags: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Sourdough Loaf',
    description: 'Classic artisan sourdough with crispy crust and soft interior.',
    price: 6.99,
    category: 'Bread',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&auto=format&fit=crop',
    rating: 4.8,
    tags: ['Vegan', 'Fresh']
  },
  {
    id: 2,
    name: 'Croissant',
    description: 'Buttery, flaky French croissant perfect with coffee.',
    price: 3.50,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab794f27d2e9?w-800&auto=format&fit=crop',
    rating: 4.9,
    tags: ['Buttery', 'Fresh']
  },
  {
    id: 3,
    name: 'Chocolate Cake',
    description: 'Rich chocolate layer cake with ganache frosting.',
    price: 24.99,
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop',
    rating: 5.0,
    tags: ['Chocolate', 'Decadent']
  },
  {
    id: 4,
    name: 'Bagel Variety Pack',
    description: '6 fresh bagels: plain, sesame, poppy, everything.',
    price: 9.99,
    category: 'Bread',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&auto=format&fit=crop',
    rating: 4.6,
    tags: ['Breakfast', 'Variety']
  },
  {
    id: 5,
    name: 'Apple Turnover',
    description: 'Flaky pastry filled with spiced apples and cinnamon.',
    price: 4.25,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop',
    rating: 4.7,
    tags: ['Fruit', 'Spiced']
  },
  {
    id: 6,
    name: 'Baguette',
    description: 'Traditional French baguette, perfect for sandwiches.',
    price: 4.50,
    category: 'Bread',
    image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=800&auto=format&fit=crop',
    rating: 4.5,
    tags: ['Crusty', 'Classic']
  },
  {
    id: 7,
    name: 'Red Velvet Cupcake',
    description: 'Moist red velvet cupcake with cream cheese frosting.',
    price: 3.99,
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800&auto=format&fit=crop',
    rating: 4.8,
    tags: ['Cupcake', 'Cream Cheese']
  },
  {
    id: 8,
    name: 'Cinnamon Roll',
    description: 'Soft, gooey cinnamon roll with cream cheese icing.',
    price: 5.50,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1559620192-032c64bc86af?w=800&auto=format&fit=crop',
    rating: 4.9,
    tags: ['Sweet', 'Spiced']
  }
];