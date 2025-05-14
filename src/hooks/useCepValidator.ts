import { useState } from 'react';

interface AddressData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

export function useCepValidator() {
  const [address, setAddress] = useState<AddressData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateCep = async (cep: string) => {
    // Remove any non-digit characters
    const cleanCep = cep.replace(/\D/g, '');
    
    // Check if CEP has the correct length
    if (cleanCep.length !== 8) {
      setError('CEP deve conter 8 dígitos');
      setAddress(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data: AddressData = await response.json();

      if (data.erro) {
        setError('CEP não encontrado');
        setAddress(null);
      } else {
        setAddress(data);
      }
    } catch (err) {
      setError('Erro ao buscar o CEP');
      setAddress(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { address, isLoading, error, validateCep };
}