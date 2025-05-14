export interface ProductImage {
  id: number;
  url: string;
  alt: string;
}

export interface ProductSize {
  id: number;
  name: string;
  inStock: boolean;
}

export interface ProductColor {
  id: number;
  name: string;
  value: string;
  inStock: boolean;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: ProductImage[];
  sizes: ProductSize[];
  colors: ProductColor[];
}