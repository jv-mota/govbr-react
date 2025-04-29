import "./navbar.js";
import Logotipo from "../../img/logo-inpe-q.png";
import iconGrafico from "../../icons/iconGrafico.svg";
import iconMapa from "../../icons/iconMapa.svg";
import iconTabela from "../../icons/iconTabela.svg";
import Search from "../Search/Search.jsx";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid bg-[#EAEAEA] h-16 flex items-center justify-between">
        <Search />

        <a href="https://www.cptec.inpe.br/">
          <img className="h-12" src={Logotipo} alt="Logotipo" />
        </a>

        <ul className="flex gap-4 justify-center items-center text-lg m-0 p-0">
          <li className="flex items-baseline gap-2">
            <img src={iconTabela} alt="" className="w-4" />
            <a href="" className="font-bold text-[#5179EF]">
              Tabela
            </a>
          </li>
          <li className="flex items-baseline gap-2">
            <img src={iconMapa} alt="" className="w-4" />
            <a href="" className="font-bold text-[#5179EF]">
              Mapa
            </a>
          </li>
          <li className="flex items-baseline gap-2">
            <img src={iconGrafico} alt="" className="w-4" />
            <a href="" className="font-bold text-[#5179EF]">
              Gráficos
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
