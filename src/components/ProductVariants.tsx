import { useLocalStorage } from '../hooks/useLocalStorage';
import { ProductSize, ProductColor } from '../types/product';

interface ProductVariantsProps {
  sizes: ProductSize[];
  colors: ProductColor[];
}

export function ProductVariants({ sizes, colors }: ProductVariantsProps) {
  const [selectedSize, setSelectedSize] = useLocalStorage<number | null>('selectedSize', null);
  const [selectedColor, setSelectedColor] = useLocalStorage<number | null>('selectedColor', null);

  return (
    <div className="mt-4 space-y-4">
      <div>
        <h3 className="text-sm font-medium text-gray-900">Tamanho</h3>
        <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-8">
          {sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => setSelectedSize(size.id)}
              disabled={!size.inStock}
              className={`
                flex h-10 w-10 items-center justify-center rounded-md 
                text-sm font-medium uppercase transition-all duration-200
                ${!size.inStock ? 'cursor-not-allowed bg-gray-50 text-gray-200' : 
                  selectedSize === size.id 
                    ? 'bg-gray-900 text-white' 
                    : 'ring-1 ring-gray-200 hover:bg-gray-50 hover:ring-gray-300'
                }
              `}
            >
              {size.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900">Cor</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              disabled={!color.inStock}
              className={`
                relative h-8 w-8 rounded-full border 
                transition-all duration-200
                ${!color.inStock ? 'cursor-not-allowed opacity-50' : ''}
                ${selectedColor === color.id ? 'ring-2 ring-gray-900' : ''}
              `}
              style={{ backgroundColor: color.value }}
              aria-label={color.name}
            >
              {selectedColor === color.id && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}