export interface Product {
  id: string;
  name: string;
  component: string;
  description: string;
  category: 'Inoculante' | 'Biodefensivo' | 'Fungicida' | 'Bionematicida' | 'Estimulante';
  benefits: string[];
  logoUrl?: string; // Campo opcional para a logo do produto
  imageUrl?: string;
}

export const productCategories = [
  'Inoculante',
  'Biodefensivo',
  'Fungicida',
  'Bionematicida',
  'Estimulante',
] as const;