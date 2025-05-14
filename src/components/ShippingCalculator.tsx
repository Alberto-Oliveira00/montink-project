import { useState } from 'react';
import { useCepValidator } from '../hooks/useCepValidator';
import { Truck } from 'lucide-react';

export function ShippingCalculator() {
  const [cep, setCep] = useState('');
  const { address, isLoading, error, validateCep } = useCepValidator();

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 8);
    setCep(value);
    
    if (value.length === 8) {
      validateCep(value);
    }
  };

  const formatCep = (value: string) => {
    if (value.length > 5) {
      return `${value.slice(0, 5)}-${value.slice(5)}`;
    }
    return value;
  };

  return (
    <div className="mt-8 border-t border-gray-200 pt-6">
      <h3 className="text-sm font-medium text-gray-900 flex items-center">
        <Truck size={18} className="mr-2" />
        Calcular Frete
      </h3>
      
      <div className="mt-2">
        <div className="relative">
          <input
            type="text"
            id="cep"
            value={formatCep(cep)}
            onChange={handleCepChange}
            placeholder="Digite o CEP"
            className="block w-full rounded-md border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          />
          
          {isLoading && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-t-transparent" />
            </div>
          )}
        </div>
        
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
        
        {address && (
          <div className="mt-3 rounded-md bg-gray-50 p-3 text-sm">
            <p className="font-medium text-gray-900">Endereço encontrado:</p>
            <p className="mt-1 text-gray-700">
              {address.logradouro}{address.complemento ? `, ${address.complemento}` : ''}
            </p>
            <p className="text-gray-700">
              {address.bairro} - {address.localidade}/{address.uf}
            </p>
            <p className="mt-2 font-medium text-green-600">
              Entrega disponível para este endereço
            </p>
          </div>
        )}
      </div>
    </div>
  );
}