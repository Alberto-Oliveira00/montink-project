import { ProductGallery } from './ProductGallery';
import { ProductInfo } from './ProductInfo';
import { ProductVariants } from './ProductVariants';
import { ShippingCalculator } from './ShippingCalculator';
import { Product } from '../types/product';

interface ProductPageProps {
  product: Product;
}

export function ProductPage({ product }: ProductPageProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl lg:max-w-none">
        <div className="flex flex-col md:flex-row md:gap-x-8 md:items-start">
          {/* Product gallery */}
          <ProductGallery images={product.images} />

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 md:mt-0 md:flex-1">
            <ProductInfo 
              name={product.name} 
              price={product.price} 
              description={product.description} 
            />
            
            <ProductVariants 
              sizes={product.sizes}
              colors={product.colors}
            />
            
            <ShippingCalculator />
          </div>
        </div>
      </div>
    </div>
  );
}