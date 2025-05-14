import { Product } from '../types/product';

export const product: Product = {
  id: 1,
  name: "Air Max Premium Sneakers",
  price: 899.99,
  description: "Eleve seu estilo com nossos tênis premium. Com tecnologia de amortecimento avançada para garantir conforto o dia todo e um design elegante que combina perfeitamente com ocasiões casuais ou semiformais.",
  images: [
    {
      id: 1,
      url: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "White sneakers front view"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "White sneakers side view"
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "White sneakers detail view"
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "White sneakers top view"
    }
  ],
  sizes: [
    { id: 1, name: "38", inStock: true },
    { id: 2, name: "39", inStock: true },
    { id: 3, name: "40", inStock: true },
    { id: 4, name: "41", inStock: false },
    { id: 5, name: "42", inStock: true },
    { id: 6, name: "43", inStock: true },
    { id: 7, name: "44", inStock: false }
  ],
  colors: [
    { id: 1, name: "White", value: "#FFFFFF", inStock: true },
    { id: 2, name: "Black", value: "#000000", inStock: true },
    { id: 3, name: "Red", value: "#FF0000", inStock: false },
    { id: 4, name: "Blue", value: "#0000FF", inStock: true }
  ]
};
