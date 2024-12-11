import React from 'react';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61563059424028', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/vioma-agro-454b002b2/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/viomaagro/', label: 'Instagram' },
];

const footerLinks = [
  {
    title: 'Soluções',
    links: [
      { name: 'Inoculantes', href: '#' },
      { name: 'Manejo integrado', href: '#' },
      { name: 'Controle de patógenos', href: '#' },
      { name: 'Sustentabilidade', href: '#' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Produtos', href: '/produtos' },
      { name: 'Sobre', href: '/sobre' },
    ],
  },
];

export function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="h-10 w-auto text-white" />
            <p className="text-gray-400">
              Transformando a agricultura através da inovação e sustentabilidade.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <button
                        onClick={() => handleNavigation(link.href)}
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="mailto:contato@viomaagro.com.br" className="flex items-center space-x-3 text-gray-400 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span>contato@viomaagro.com.br</span>
              </a>
              <a href="https://wa.me/5534996992806" className="flex items-center space-x-3 text-gray-400 hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                <span>+55 34 9699-2806</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span>
                  Avenida Maraba, 2321<br />
                  Bela Vista, Patos de Minas MG<br />
                  38703-236
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Vioma Agro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}