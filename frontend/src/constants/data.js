import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];



const navlinks=[
  {
    id: "home",
    title: "Home",
  },
  {
    id: "seller",
    title: "Seller",
  },
  {
    id: "buyer",
    title: "Buyer",
  },
  {
    id: "weather",
    title: "Weather",
  },
  {
    id: "comparison",
    title: "Comparison",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },

]


const profilelinks=[
  {
    id: "dashboard",
    title: "Dashboard",
  },



]


const sliderimagesdata=[
  {
    imageurl: images.slider1,
    title: "ABCDE",
    subtitle: "ACBD KJSIE lkJLIMSD ljIJKL KJOIJLKN KJOIJKLMN JLIJILMLK NLKJIPMJ:LK JO::LKO",
    interval: 1500
  },
  {
    imageurl: images.slider2,
    title: "ABCDE",
    subtitle: "ACBD KJSIE lkJLIMSD ljIJKL KJOIJLKN KJOIJKLMN JLIJILMLK NLKJIPMJ:LK JO::LKO",
    interval: 1500
  },
  {
    imageurl: images.slider3,
    title: "ABCDE",
    subtitle: "ACBD KJSIE lkJLIMSD ljIJKL KJOIJLKN KJOIJKLMN JLIJILMLK NLKJIPMJ:LK JO::LKO",
    interval: 1500
  }


]


const fruitsAndVegetables = [
  {
    _id: '1',
    productname: 'Apple',
    price: 1.99,
    stock: 100,
    location: 'Farmers Market',
    productdescription: 'Fresh and crunchy apples',
    category: 'Fruit',
    rating: 4.5
  },
  {
    _id: '2',
    productname: 'Banana',
    price: 0.99,
    stock: 150,
    location: 'Grocery Store',
    productdescription: 'Ripe and delicious bananas',
    category: 'Fruit',
    rating: 4.2
  },
  {
    _id: '3',
    productname: 'Carrot',
    price: 0.75,
    stock: 200,
    location: 'Local Farm',
    productdescription: 'Fresh and sweet carrots',
    category: 'Vegetable',
    rating: 4.0
  },
  {
    _id: '4',
    productname: 'Spinach',
    price: 1.25,
    stock: 120,
    location: 'Farmers Market',
    productdescription: 'Nutritious and tender spinach',
    category: 'Vegetable',
    rating: 4.3
  },
  {
    _id: '5',
    productname: 'Orange',
    price: 1.49,
    stock: 80,
    location: 'Local Farm',
    productdescription: 'Juicy and tangy oranges',
    category: 'Fruit',
    rating: 4.4
  },
  {
    _id: '6',
    productname: 'Tomato',
    price: 0.89,
    stock: 180,
    location: 'Farmers Market',
    productdescription: 'Fresh and ripe tomatoes',
    category: 'Vegetable',
    rating: 4.1
  },
  {
    _id: '7',
    productname: 'Grapes',
    price: 2.49,
    stock: 60,
    location: 'Local Farm',
    productdescription: 'Sweet and seedless grapes',
    category: 'Fruit',
    rating: 4.6
  },
  {
    _id: '8',
    productname: 'Broccoli',
    price: 1.99,
    stock: 90,
    location: 'Farmers Market',
    productdescription: 'Nutritious and fresh broccoli',
    category: 'Vegetable',
    rating: 4.2
  },
  {
    _id: '9',
    productname: 'Strawberry',
    price: 2.99,
    stock: 40,
    location: 'Local Farm',
    productdescription: 'Sweet and juicy strawberries',
    category: 'Fruit',
    rating: 4.7
  },
  {
    _id: '10',
    productname: 'Bell Pepper',
    price: 1.29,
    stock: 110,
    location: 'Farmers Market',
    productdescription: 'Colorful and fresh bell peppers',
    category: 'Vegetable',
    rating: 4.3
  },
  {
    _id: '10',
    productname: 'Orange',
    price: '1000 Rs',
    stock: '400 dozens',
    location: 'Local Farm',
    productdescription: 'Colorful and fresh bell peppers',
    category: 'Fruit',
    rating: 4.3
  }
];

export default { wines, cocktails, awards, navlinks, profilelinks, sliderimagesdata, fruitsAndVegetables};
