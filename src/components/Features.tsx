import React from 'react';
import { motion } from 'framer-motion';
import { LeafyGreen, Shield, Sprout, TestTubes } from 'lucide-react';

const features = [
  {
    icon: LeafyGreen,
    title: 'Agricultura Sustentável',
    description: 'Desenvolvemos práticas agrícolas que preservam recursos naturais, reduzem impactos ambientais e garantem a produtividade a longo prazo.',
    benefits: [
      'Conservação do solo e água',
      'Redução de insumos químicos',
      'Equilíbrio ecológico',
      'Produção responsável'
    ]
  },
  {
    icon: Shield,
    title: 'Biodefensivos',
    description: 'Soluções naturais para proteção de culturas, utilizando organismos vivos para controle de pragas e doenças.',
    benefits: [
      'Controle biológico eficaz',
      'Sem resíduos tóxicos',
      'Preservação de inimigos naturais',
      'Manejo integrado'
    ]
  },
  {
    icon: Sprout,
    title: 'Biofertilizantes',
    description: 'Fertilizantes naturais que melhoram a nutrição das plantas e a qualidade do solo através de processos biológicos.',
    benefits: [
      'Nutrição balanceada',
      'Microbiota benéfica',
      'Fertilidade do solo',
      'Crescimento saudável'
    ]
  },
  {
    icon: TestTubes,
    title: 'Soluções OnFarm',
    description: 'Tecnologias e serviços personalizados para otimização da produção agrícola diretamente na propriedade.',
    benefits: [
      'Monitoramento in loco',
      'Assistência técnica',
      'Análises específicas',
      'Resultados práticos'
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Features() {
  return (
    <div className="bg-white py-24" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nossas Soluções
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Inovação e sustentabilidade para o agronegócio do futuro
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group"
            >
              <div className="relative bg-white rounded-lg p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
                <feature.icon className="h-12 w-12 text-primary mb-6 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-primary/90">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}