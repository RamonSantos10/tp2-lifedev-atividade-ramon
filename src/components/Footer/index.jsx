import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <NavLink to="/" className="text-2xl font-bold inline-block text-white hover:text-blue-400">
              <span className="font-black">Life</span>Dev
            </NavLink>
            <p className="mt-2 text-gray-300 text-sm">
              Plataforma de Postagens para Desenvolvedores
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-blue-400">
                  Sobre Nós
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className="text-gray-300 hover:text-blue-400">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/home" className="text-gray-300 hover:text-blue-400">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contato@lifedev.com</li>
              <li>Compartilhamento de experiências de Nomade Life Dev</li>
              <li>Icoma Education®</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-600 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} LifeDev. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;