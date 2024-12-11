import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Leaf, 
  Target, 
  Microscope, 
  ShieldCheck, 
  Sprout,
  Award,
  Factory,
  Building,
  Rocket
} from 'lucide-react';

const timeline = [
  {
    year: '2024',
    title: 'Fundação',
    description: 'Início das operações como indústria e distribuidora de bioinsumos.'
  },
  {
    year: '2024',
    title: 'Primeiros Produtos',
    description: 'Lançamento dos inoculantes BradVioma e ViomAZ, certificados e registrados.'
  },
  {
    year: '2025',
    title: 'Expansão',
    description: 'Ampliação da indústria para Coromandel, marcando uma nova fase de crescimento.'
  },
  {
    year: '2026+',
    title: 'Futuro',
    description: 'Em breve, grandes novidades que transformarão o setor de bioinsumos...'
  }
];

const values = [
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Compromisso com o desenvolvimento de soluções biológicas sustentáveis.'
  },
  {
    icon: Factory,
    title: 'Inovação Industrial',
    description: 'Processos industriais modernos e eficientes na produção de bioinsumos.'
  },
  {
    icon: Building,
    title: 'Expansão',
    description: 'Crescimento estratégico com foco em qualidade e alcance nacional.'
  },
  {
    icon: Rocket,
    title: 'Futuro',
    description: 'Compromisso com o desenvolvimento contínuo e inovação no setor.'
  }
];

export function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossa História
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fundada em 2024, a Vioma Agro nasceu com o propósito de revolucionar o setor de bioinsumos,
              trazendo soluções inovadoras e sustentáveis para a agricultura brasileira.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Missão</h2>
              </div>
              <p className="text-gray-600">
                Desenvolver e fornecer bioinsumos de alta qualidade que promovam uma agricultura
                mais sustentável e produtiva, contribuindo para o desenvolvimento do agronegócio brasileiro.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Visão</h2>
              </div>
              <p className="text-gray-600">
                Ser referência nacional em bioinsumos até 2026, liderando a transformação para
                uma agricultura mais sustentável através de produtos inovadores e eficientes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">Nossos Valores</h2>
            <p className="mt-4 text-gray-600">
              Princípios que guiam nosso crescimento e desenvolvimento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-primary/10 rounded-xl w-fit">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mt-4 text-gray-900">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">Nossa Trajetória</h2>
            <p className="mt-4 text-gray-600">
              Uma história que está apenas começando
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year + item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                    }`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                      <span className="text-primary font-bold">{item.year}</span>
                      <h3 className="text-xl font-semibold mt-2 text-gray-900">{item.title}</h3>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}