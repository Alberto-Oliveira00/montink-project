export function Header() {
    return (
        <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">SneakersStore</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                Entrar
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                Carrinho (0)
              </button>
            </div>
          </div>
        </div>
      </header>
    );
}