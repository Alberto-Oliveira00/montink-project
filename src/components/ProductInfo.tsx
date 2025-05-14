import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from './Button';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface ProductInfoProps {
  name: string;
  price: number;
  description: string;
}

export function ProductInfo({ name, price, description }: ProductInfoProps) {
  const [isLiked, setIsLiked] = useLocalStorage('isLiked', false);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <div className="mt-0 md:mt-0"> 
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {name}
      </h1>
      
      <div className="mt-4">
        <h2 className="sr-only">Informações do produto</h2>
        <p className="text-3xl tracking-tight text-gray-800">
          {formatCurrency(price)}
        </p>
      </div>

      <div className="mt-5">
        <p className="text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-8 flex gap-4">
        <Button fullWidth className="py-3 text-base">
          <ShoppingCart size={20} className="mr-2" />
          Adicionar ao carrinho
        </Button>
        
        <Button 
          variant="secondary" 
          className={`px-4 py-3 ${isLiked 
            ? 'bg-red-500 text-white border-red-500 bg-red-600' 
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart size={22} />
        </Button>
      </div>
    </div>
  );
}
