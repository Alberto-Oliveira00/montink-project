import { useLocalStorage } from '../hooks/useLocalStorage';
import { ProductImage } from '../types/product';

interface ProductGalleryProps {
  images: ProductImage[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useLocalStorage<ProductImage>('selectedImage', images[0]);

  return (
    <div className="w-full md:w-[45%] flex-shrink-0">
      <div className="w-full h-[550px] overflow-hidden rounded-lg bg-gray-100">
        <img 
          src={selectedImage.url} 
          alt={selectedImage.alt} 
          className="w-full h-full object-cover transition-all duration-500 hover:scale-[1.03]"
        />
      </div>
      
      <div className="mt-4 grid grid-cols-4 gap-1">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={`
              relative overflow-hidden rounded-md border-2 transition-all duration-300 h-20
              ${selectedImage.id === image.id 
                ? 'border-gray-800 opacity-100' 
                : 'border-transparent opacity-70 hover:opacity-100'
              }
            `}
          >
            <img 
              src={image.url} 
              alt={`Thumbnail ${image.id}`} 
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}