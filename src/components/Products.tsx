import React from 'react';
import { Shield, Leaf, Bug, TestTube } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'EcoShield Pro',
    category: 'Fungicida',
    description: 'Fungicida orgânico avançado para proteção sustentável das culturas',
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80',
    icon: Shield,
    features: ['Ecológico', 'Proteção duradoura', 'Seguro para insetos benéficos']
  },
  {
    id: 2,
    name: 'BioGuard Plus',
    category: 'Herbicida',
    description: 'Herbicida seletivo com mínimo impacto ambiental',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80',
    icon: Leaf,
    features: ['Ação direcionada', 'Biodegradável', 'Rápida absorção']
  },
  {
    id: 3,
    name: 'NaturePest Control',
    category: 'Inseticida',
    description: 'Inseticida natural derivado de extratos botânicos',
    image: 'https://images.unsplash.com/photo-1592978122244-8f7f1c0c238d?auto=format&fit=crop&q=80',
    icon: Bug,
    features: ['Amplo espectro', 'Sem efeitos residuais', 'Resistente à chuva']
  },
  {
    id: 4,
    name: 'AgroBoost Supreme',
    category: 'Estimulante',
    description: 'Estimulante biológico para melhor rendimento das culturas',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80',
    icon: TestTube,
    features: ['Rico em nutrientes', 'Hormônios balanceados', 'Resistência ao estresse']
  }
];

export function Products() {
  return (
    <div className="bg-gray-50 py-24" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Defensivos Agrícolas
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluções inovadoras para proteção e melhoramento de culturas
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 w-full relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-3">
                  <product.icon className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                </div>
                
                <p className="mt-4 text-gray-600">
                  {product.description}
                </p>
                
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Características Principais:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}