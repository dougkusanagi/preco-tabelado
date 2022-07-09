import { Link, useMatch } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center bg-gradient-to-r px-8 from-[#4845D7] to-[#2A64FA] text-white">
      <div className="flex justify-between items-center w-full max-w-[1024px]">
        <div className="flex gap-2">
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/price-table">Tabela de Preço</NavbarLink>
        </div>

        <Link to="/logout">Sair</Link>
      </div>
    </nav>
  );
}

function NavbarLink({ to, children, ...props }) {
  const isActive = useMatch(to);
  
  return (
    <Link
      className={ `px-4 py-6 ${isActive ? 'bg-white text-blue-700 font-bold' : ''}` }
      to={ to }
      { ...props }
    >
      { children }
    </Link>
  );
}
