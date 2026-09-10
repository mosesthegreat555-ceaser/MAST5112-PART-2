import { MenuItem, MenuPackage } from '../types';

export const initialMenuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Saffron Risotto',
    description:
      'Creamy carnaroli rice infused with authentic Iranian saffron, topped with gold leaf and toasted pine nuts.',
    course: 'Starter',
    price: 195,
  },
  {
    id: '2',
    name: 'Grilled Lamb Chop',
    description: 'Herb-crusted lamb chop, seared and finished with a red wine jus.',
    course: 'Main',
    price: 285,
  },
  {
    id: '3',
    name: 'Chocolate Fondant',
    description: 'Warm dark chocolate fondant with a molten center, served with vanilla bean ice cream.',
    course: 'Dessert',
    price: 125,
  },
  {
    id: '4',
    name: 'Truffle Pasta',
    description: 'Hand-cut tagliatelle tossed in a black truffle cream sauce.',
    course: 'Main',
    price: 245,
  },
  {
    id: '5',
    name: 'Lemon Tart',
    description: 'Zesty lemon curd tart with a buttery shortcrust base and torched meringue.',
    course: 'Dessert',
    price: 95,
  },
  {
    id: '6',
    name: 'Caprese Salad',
    description: 'Heirloom vine tomatoes, fresh buffalo mozzarella, locally sourced sweet basil, and imported 12-year aged balsamic.',
    course: 'Starter',
    price: 145,
  },
];

export const menuPackages: MenuPackage[] = [
  {
    id: 'p1',
    name: 'Seasonal Tasting Menu',
    subtitle: '5 Courses',
    priceLabel: 'R850pp',
    description:
      'A curated journey showcasing local organic ingredients, tailored precisely around the changing micro-seasons.',
  },
  {
    id: 'p2',
    name: 'À La Carte',
    subtitle: 'Individual Dishes',
    priceLabel: 'Varies',
    description:
      'Design your own dining experience. Select from our signature contemporary starters, mains, and desserts.',
  },
  {
    id: 'p3',
    name: 'Private Event Menu',
    subtitle: 'Custom Selection',
    priceLabel: 'R1200pp',
    description:
      'An elite bespoke menu crafted alongside Chef Christoffel. Perfect for corporate banquets or intimate celebrations.',
  },
];
