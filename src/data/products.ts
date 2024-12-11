import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'nitrozon',
    name: 'Nitrozon',
    component: 'Nitrospirillum amazonense',
    description: 'Inoculante biológico que fixa nitrogênio atmosférico, fortalecendo raízes e otimizando a nutrição das plantas. Reduz a dependência de fertilizantes químicos, promovendo uma agricultura mais sustentável e produtiva.',
    category: 'Inoculante',
    logoUrl: 'https://i.imgur.com/YfilAB7.png',
    benefits: [
      'Fixação de nitrogênio atmosférico',
      'Fortalecimento das raízes',
      'Redução de fertilizantes químicos',
      'Agricultura sustentável'
    ]
  },
  {
    id: 'presttium',
    name: 'Presttium',
    component: 'Bacillus megaterium',
    description: 'Estimula a solubilização de fósforo no solo e a produção de fitormônios, promovendo raízes mais robustas e aumentando a resistência ao estresse abiótico. Reduz a necessidade de fertilizantes químicos, favorecendo a sustentabilidade agrícola.',
    category: 'Estimulante',
    logoUrl: 'https://i.imgur.com/JPRuXGb.png',
    benefits: [
      'Solubilização de fósforo',
      'Produção de fitormônios',
      'Raízes mais robustas',
      'Resistência ao estresse abiótico'
    ]
  },
  {
    id: 'movena',
    name: 'Movena',
    component: 'Beauveria bassiana + Metarhizium anisopliae',
    description: 'Biodefensivo que controla pragas agrícolas por meio da liberação de toxinas, com baixa toxicidade para organismos não-alvo. Proporciona manejo sustentável, saúde do solo e maior produtividade.',
    category: 'Biodefensivo',
    logoUrl: 'https://i.imgur.com/UckM0Up.png',
    benefits: [
      'Controle de pragas',
      'Baixa toxicidade',
      'Manejo sustentável',
      'Saúde do solo'
    ]
  },
  {
    id: 'duetto',
    name: 'Duetto',
    component: 'Cordyceps javanica CMAA1657 + Beauveria bassiana IBCB 66',
    description: 'Combinação de fungos que infectam e eliminam pragas de forma direcionada, preservando o equilíbrio ecológico. Uma solução sustentável para proteção agrícola.',
    category: 'Biodefensivo',
    logoUrl: 'https://i.imgur.com/BBc6YNY.png',
    benefits: [
      'Controle direcionado de pragas',
      'Preservação do equilíbrio ecológico',
      'Proteção sustentável',
      'Ação combinada'
    ]
  },
  {
    id: 'anthera',
    name: 'Anthera',
    component: 'Purpureocillium lilacinum',
    description: 'Atua no controle de nematoides ao atacar ovos e estágios juvenis, impedindo sua proliferação. Garante mínimo impacto em organismos benéficos, promovendo a saúde do solo.',
    category: 'Bionematicida',
    logoUrl: 'https://i.imgur.com/pcYPeFL.png',
    benefits: [
      'Controle de nematoides',
      'Proteção do solo',
      'Mínimo impacto ambiental',
      'Ação preventiva'
    ]
  },
  {
    id: 'anthera-duo',
    name: 'Anthera Duo',
    component: 'Purpureocillium lilacinum + Pochonia chlamydosporia',
    description: 'Solução sinérgica para controle de nematoides. Enquanto um componente ataca ovos e juvenis, o outro coloniza o solo, impedindo a eclosão. Promove saúde do solo e maior produtividade agrícola.',
    category: 'Bionematicida',
    logoUrl: 'https://i.imgur.com/TJIuf2x.png',
    benefits: [
      'Ação sinérgica',
      'Controle completo',
      'Colonização do solo',
      'Maior produtividade'
    ]
  },
  {
    id: 'triunfo',
    name: 'Triunfo',
    component: 'Metarhizium anisopliae IBCB 425 + Cordyceps javanica CMAA1657 + Beauveria bassiana IBCB 66',
    description: 'Produto com múltiplos mecanismos de ação, que elimina pragas, preserva organismos não-alvo e promove a biodiversidade e saúde do solo.',
    category: 'Biodefensivo',
    logoUrl: 'https://i.imgur.com/RVfQ1Mr.png',
    benefits: [
      'Múltiplos mecanismos de ação',
      'Preservação de organismos benéficos',
      'Promoção da biodiversidade',
      'Saúde do solo'
    ]
  },
  {
    id: 'fixen',
    name: 'Fixen',
    component: 'Methylobacterium symbioticum',
    description: 'Inoculante biológico que fixa nitrogênio na rizosfera, promovendo maior desenvolvimento radicular e produtividade, além de reduzir a dependência de fertilizantes sintéticos.',
    category: 'Inoculante',
    logoUrl: 'https://i.imgur.com/CCHskeP.png',
    benefits: [
      'Fixação de nitrogênio',
      'Desenvolvimento radicular',
      'Maior produtividade',
      'Redução de fertilizantes'
    ]
  },
  {
    id: 'bruttus',
    name: 'Bruttus',
    component: 'Beauveria bassiana IBCB 66',
    description: 'Fungo entomopatogênico que controla pragas como bicudo da cana-de-açúcar e cigarrinha-do-milho, atacando diferentes estágios do desenvolvimento do inseto. Uma solução sustentável para o manejo de pragas agrícolas.',
    category: 'Biodefensivo',
    logoUrl: 'https://i.imgur.com/6YRrVjI.png',
    benefits: [
      'Controle de pragas específicas',
      'Ação em múltiplos estágios',
      'Manejo sustentável',
      'Eficácia comprovada'
    ]
  },
  {
    id: 'thanos',
    name: 'Thanos',
    component: 'Isaria fumosorosea',
    description: 'Inseticida biológico que elimina pragas como cigarrinha-do-milho e cochonilha-da-roseta, atuando por adesão e germinação dos conídios no hospedeiro. Alternativa sustentável para o manejo de pragas.',
    category: 'Biodefensivo',
    logoUrl: 'https://i.imgur.com/F0OM4sK.png',
    benefits: [
      'Controle específico',
      'Ação por adesão',
      'Alternativa sustentável',
      'Eficiência comprovada'
    ]
  },
  {
    id: 'nemo',
    name: 'Nemo',
    component: 'Biodefensivo para nematoides e fungos',
    description: 'Preserva o sistema radicular das plantas, controlando nematoides e fungos fitopatogênicos, e promovendo o crescimento saudável das lavouras.',
    category: 'Biodefensivo',
    logoUrl: 'https://i.imgur.com/seOT1fi.png',
    benefits: [
      'Proteção radicular',
      'Controle de nematoides',
      'Controle de fungos',
      'Crescimento saudável'
    ]
  },
  {
    id: 'kacctus',
    name: 'Kacctus',
    component: 'Bacillus subtilis UFV S1',
    description: 'Mitiga estresses hídricos e térmicos, otimizando o uso da água pelas plantas e aumentando a resiliência e a recuperação das culturas agrícolas.',
    category: 'Estimulante',
    logoUrl: 'https://i.imgur.com/3uIKjHn.png',
    benefits: [
      'Mitigação de estresse',
      'Otimização hídrica',
      'Maior resiliência',
      'Recuperação rápida'
    ]
  },
  {
    id: 'sereno',
    name: 'Sereno',
    component: 'Bacillus subtilis QST 713',
    description: 'Agente microbiológico com propriedades fungicidas e bactericidas que atua na membrana celular dos patógenos, resultando em sua deformação e eliminação.',
    category: 'Fungicida',
    logoUrl: 'https://i.imgur.com/kAxPDPw.png',
    benefits: [
      'Ação fungicida',
      'Ação bactericida',
      'Proteção celular',
      'Eliminação de patógenos'
    ]
  },
  {
    id: 'vioma-bt',
    name: 'Vioma BT',
    component: 'Bacillus thuringiensis kurstaki',
    description: 'Inseticida biológico eficaz no controle de lagartas, que produz toxinas específicas que eliminam os insetos de forma sustentável.',
    category: 'Biodefensivo',
    logoUrl: 'https://i.imgur.com/1bsOH5u.png',
    benefits: [
      'Controle de lagartas',
      'Toxinas específicas',
      'Ação sustentável',
      'Eficácia comprovada'
    ]
  },
  {
    id: 'vioma-bta',
    name: 'Vioma BTA',
    component: 'Bacillus thuringiensis aizawai',
    description: 'Solução biológica eficaz contra lagartas, com toxinas que levam à morte do inseto, minimizando impactos ambientais.',
    category: 'Biodefensivo',
    logoUrl: 'https://i.imgur.com/Q4loloa.png',
    benefits: [
      'Controle biológico',
      'Mínimo impacto ambiental',
      'Ação específica',
      'Eficiência comprovada'
    ]
  },
  {
    id: 'exato',
    name: 'Exato',
    component: 'Bacillus pumilus S2907',
    description: 'Fungicida microbiológico com ação multissítio, que controla doenças fúngicas, estimula o crescimento das plantas e promove um manejo sustentável.',
    category: 'Fungicida',
    logoUrl: 'https://i.imgur.com/LiEiMWp.png',
    benefits: [
      'Ação multissítio',
      'Controle de doenças',
      'Estímulo ao crescimento',
      'Manejo sustentável'
    ]
  },
  {
    id: 'presenca',
    name: 'Presença',
    component: 'Bacillus licheniformis S2903',
    description: 'Bionematicida aplicado no tratamento de sementes, eficaz contra nematoides-das-galhas e nematoides-das-lesões, garantindo o desenvolvimento saudável das plantas.',
    category: 'Bionematicida',
    logoUrl: 'https://i.imgur.com/cFg3dy8.png',
    benefits: [
      'Tratamento de sementes',
      'Controle de nematoides',
      'Desenvolvimento saudável',
      'Proteção inicial'
    ]
  },
  {
    id: 'megaphos',
    name: 'Megaphos',
    component: 'Bacillus megaterium + Bacillus subtilis',
    description: 'Produz ácidos orgânicos que liberam fósforo para as plantas, promovendo mineralização e disponibilização do nutriente essencial para o crescimento saudável das culturas.',
    category: 'Estimulante',
    logoUrl: 'https://i.imgur.com/b9PZ9FT.png',
    benefits: [
      'Liberação de fósforo',
      'Mineralização',
      'Nutrição essencial',
      'Crescimento saudável'
    ]
  },
  {
    id: 'viomaz',
    name: 'ViomAZ',
    component: 'Azospirillum brasilense (AbV5 e AbV6)',
    description: 'Inoculante para milho e soja que promove fixação de nitrogênio, melhora a absorção de nutrientes e aumenta a resistência ao estresse, estimulando o desenvolvimento saudável das culturas.',
    category: 'Inoculante',
    logoUrl: 'https://i.imgur.com/ygPjaZo.png',
    benefits: [
      'Fixação de nitrogênio',
      'Absorção de nutrientes',
      'Resistência ao estresse',
      'Desenvolvimento saudável'
    ]
  },
  {
    id: 'viomabrad',
    name: 'ViomaBRAD',
    component: 'Bradyrhizobium elkanii SEMIA 587 + Bradyrhizobium diazoefficiens SEMIA 5080',
    description: 'Inoculante líquido que aumenta a fixação de nitrogênio em culturas leguminosas, promovendo resistência a condições adversas e melhorando o desempenho agrícola.',
    category: 'Inoculante',
    logoUrl: 'https://i.imgur.com/wRcI2ql.png',
    benefits: [
      'Fixação de nitrogênio',
      'Resistência a adversidades',
      'Melhor desempenho',
      'Culturas leguminosas'
    ]
  },
  {
    id: 'certeiro',
    name: 'Certeiro',
    component: 'Bacillus amyloliquefaciens CCT 7995',
    description: 'Fungicida líquido multissítio que combate fungos, fortalece a resistência das plantas e promove um crescimento saudável, com proteção abrangente e eficaz.',
    category: 'Fungicida',
    logoUrl: 'https://i.imgur.com/PvMc6vs.png',
    benefits: [
      'Ação multissítio',
      'Combate a fungos',
      'Fortalecimento vegetal',
      'Proteção abrangente'
    ]
  },
  {
    id: 'vibrant',
    name: 'Vibrant',
    component: 'Chromobacterium subtsugae',
    description: 'Manejo sustentável de insetos com produção de toxinas naturais seletivas, protegendo as culturas e promovendo o crescimento saudável das plantas.',
    category: 'Biodefensivo',
    logoUrl: 'https://i.imgur.com/S3PHM4w.png',
    benefits: [
      'Manejo sustentável',
      'Toxinas seletivas',
      'Proteção de culturas',
      'Crescimento saudável'
    ]
  },
  {
    id: 'pochonema',
    name: 'Pochonema',
    component: 'Pochonia chlamydosporia',
    description: 'Agente biológico que controla nematoides parasitas das raízes, reduzindo suas populações e promovendo o crescimento saudável das culturas.',
    category: 'Bionematicida',
    logoUrl: 'https://i.imgur.com/vosnj7p.png',
    benefits: [
      'Controle de nematoides',
      'Proteção radicular',
      'Crescimento saudável',
      'Redução populacional'
    ]
  },
  {
    id: 'alelo',
    name: 'Alelo',
    component: 'Bacillus velezensis BAC B',
    description: 'Controla doenças fúngicas e bacterianas, promovendo crescimento vegetal e protegendo contra patógenos como míldio e murcha.',
    category: 'Fungicida',
    logoUrl: 'https://i.imgur.com/dxwOd0j.png',
    benefits: [
      'Controle de doenças',
      'Promoção de crescimento',
      'Proteção contra patógenos',
      'Ação dupla'
    ]
  },
  {
    id: 'trichothrive',
    name: 'TrichoThrive',
    component: 'Trichoderma harzianum',
    description: 'Controla doenças e promove o crescimento das plantas, competindo com patógenos e estimulando o sistema imunológico vegetal.',
    category: 'Fungicida',
    logoUrl: 'https://i.imgur.com/Rwqwvs5.png',
    benefits: [
      'Controle de doenças',
      'Promoção de crescimento',
      'Estímulo imunológico',
      'Competição com patógenos'
    ]
  },
  {
    id: 'bravos',
    name: 'Bravos',
    component: 'Metarhizium anisopliae IBCB 425',
    description: 'Agente biológico que controla pragas agrícolas, liberando toxinas específicas que levam à morte dos insetos de forma sustentável.',
    category: 'Biodefensivo',
    logoUrl: 'https://i.imgur.com/moA3ec1.png',
    benefits: [
      'Controle de pragas',
      'Toxinas específicas',
      'Ação sustentável',
      'Eficácia comprovada'
    ]
  }
];