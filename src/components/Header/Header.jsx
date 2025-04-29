import { useEffect } from 'react';
import BRMenu from '../../assets/js/BRMenu.js';
import BRHeader from '../../assets/js/BRHeader.js';
import '../../assets/css/core.css';
import GTranslate from '../Gtranslate/Gtranslate.jsx';
import LogoGov from "../../img/govbr-logo.png";


const Header = () => {
    useEffect(() => {
        const initializeComponents = () => {
            document.querySelectorAll('.br-menu').forEach((brMenu) => {
                new BRMenu('br-menu', brMenu);
            });

            document.querySelectorAll('.br-header').forEach((brHeader) => {
                new BRHeader('br-header', brHeader);
            });
        };

        // Inicializar componentes na montagem
        initializeComponents();

        // Observar mudanças no DOM
        const observer = new MutationObserver(() => initializeComponents());
        observer.observe(document.body, { childList: true, subtree: true });

        // Cleanup
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Header GOV.BR */}
            <header className="br-header" id="header" data-sticky="data-sticky">
                {/* Container */}
                <div className="container-fluid">
                    {/* Top */}
                    <div className="header-top">
                        {/* Logotipo */}
                        <div className="header-logo">
                            <a href="https://www.gov.br/pt-br">
                                <img src={LogoGov} alt="logo - GOV.BR" />
                            </a>
                            <span className="br-divider vertical"></span>
                            <div className="header-sign">Ministério da Ciência, Tecnologia e Inovação</div>
                        </div>

                        {/* Ações */}
                        <div className="header-actions">
                            {/* Acesso Rápido */}
                            <div className="header-links dropdown">
                                <button className="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Acesso Rápido">
                                    <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
                                </button>
                                <div className="br-list">
                                    <div className="header">
                                        <div className="title">Acesso Rápido</div>
                                    </div>
                                    <a className="br-item acesso-rapido" href="https://www.gov.br/pt-br/orgaos-do-governo">Órgãos do Governo</a>
                                    <a className="br-item acesso-rapido" href="https://www.gov.br/acessoainformacao/pt-br">Acesso à Informação</a>
                                    <a className="br-item acesso-rapido" href="https://www4.planalto.gov.br/legislacao">Legislação</a>
                                    <a className="br-item acesso-rapido" href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital">Acessibilidade</a>
                                </div>
                            </div>

                            {/* Divisória */}
                            <span className="br-divider vertical mx-half mx-sm-2"></span>

                            {/* Tradução */}
                            <GTranslate />
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="header-bottom">
                        <div className="header-menu">
                            {/* Botão Menu CPTEC */}
                            <div className="header-menu-trigger" id="header-navigation">
                                <button className="br-button small circle" type="button" aria-label="Menu" data-toggle="menu" data-target="#main-navigation" id="navigation">
                                    <i className="fas fa-bars" aria-hidden="true"></i>
                                </button>
                            </div>

                            {/* Título e Subtítulo */}
                            <div className="header-info">
                                <a href="/" className="group">
                                    <div className="header-title text-semi-bold text-gray-800 group-hover:!text-[#1351b4] transition-colors duration-300">
                                        Padrão do Governo
                                    </div>
                                </a>
                                <div className="header-subtitle">Vite + React</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Menu CPTEC */}
            <nav className="d-flex flex-fill" id="nav-main">
                {/* Container */}
                <div className="br-menu" id="main-navigation">
                    <div className="menu-container">
                        <div className="menu-panel">
                            {/* Top */}
                            <div className="menu-header">
                                {/* Logotipo */}
                                <div className="menu-title">
                                    <a href="https://www.gov.br/pt-br">
                                        <img src={LogoGov} alt="logo - GOV.BR" />
                                    </a>
                                </div>

                                {/* Botão Fechar */}
                                <div className="menu-close">
                                    <button className="br-button circle" type="button" aria-label="Fechar o menu" data-dismiss="menu">
                                        <i className="fas fa-times" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Navegação CPTEC */}
                            <nav className="menu-body" role="tree">
                                {/* Acesso à Informação */}
                                <div className="menu-folder">
                                    <a className="menu-item" href="#" role="treeitem" onClick={(e) => e.preventDefault()}>
                                        <span className="content text-bold">Acesso à Informação</span>
                                    </a>
                                    <ul>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/acessoainformacao/pt-br" role="treeitem">
                                                <span className="content text-medium">Acesso à Informação</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/institucional" role="treeitem">
                                                <span className="content text-medium">Institucional</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/acoes-e-programas" role="treeitem">
                                                <span className="content text-medium">Ações e Programas</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/participacao-social" role="treeitem">
                                                <span className="content text-medium">Participação Social</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/auditorias" role="treeitem">
                                                <span className="content text-medium">Auditorias</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/convenios-e-transferencias" role="treeitem">
                                                <span className="content text-medium">Convênios e Transferências</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/receitas-e-despesas" role="treeitem">
                                                <span className="content text-medium">Receitas e Despesas</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/licitacoes-e-contratos" role="treeitem">
                                                <span className="content text-medium">Licitações e Contratos</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/servidores" role="treeitem">
                                                <span className="content text-medium">Servidores</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/informacoes-classificadas" role="treeitem">
                                                <span className="content text-medium">Informações Classificadas</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/servico-de-informacao-ao-cidadao-sic" role="treeitem">
                                                <span className="content text-medium">Serviço de Informação ao Cidadão - SIC</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/perguntas-frequentes" role="treeitem">
                                                <span className="content text-medium">Perguntas Frequentes</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/dados-abertos" role="treeitem">
                                                <span className="content text-medium">Dados Abertos</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/institucional/cooperacoes-nacionais-e-internacionais" role="treeitem">
                                                <span className="content text-medium">Cooperações Nacionais e Internacionais</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Assuntos */}
                                <div className="menu-folder">
                                    <a className="menu-item" href="#" role="treeitem" onClick={(e) => e.preventDefault()}>
                                        <span className="content text-bold">Assuntos</span>
                                    </a>
                                    <ul>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/assuntos" role="treeitem">
                                                <span className="content text-medium">Assuntos</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias" role="treeitem">
                                                <span className="content text-medium">Últimas Notícias</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/assuntos/produtos" role="treeitem">
                                                <span className="content text-medium">Produtos</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/assuntos/eventos" role="treeitem">
                                                <span className="content text-medium">Eventos</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/assuntos/anuncio-de-oportunidades" role="treeitem">
                                                <span className="content text-medium">Anúncio de Oportunidades</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Central de Conteúdo */}
                                <div className="menu-folder">
                                    <a className="menu-item" href="#" role="treeitem" onClick={(e) => e.preventDefault()}>
                                        <span className="content text-bold">Central de Conteúdo</span>
                                    </a>
                                    <ul>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/central-de-conteudo" role="treeitem">
                                                <span className="content text-medium">Central de Conteúdo</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/central-de-conteudo/cartilhas-educacionais" role="treeitem">
                                                <span className="content text-medium">Cartilhas Educacionais</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/central-de-conteudo/publicacoes" role="treeitem">
                                                <span className="content text-medium">Publicações</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/area-conhecimento/biblioteca" role="treeitem">
                                                <span className="content text-medium">Biblioteca On-Line</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.youtube.com/inpemct" role="treeitem">
                                                <span className="content text-medium">Vídeos</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Canais de Atendimento */}
                                <div className="menu-folder">
                                    <a className="menu-item" href="#" role="treeitem" onClick={(e) => e.preventDefault()}>
                                        <span className="content text-bold">Canais de Atendimento</span>
                                    </a>
                                    <ul>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/canais_atendimento" role="treeitem">
                                                <span className="content text-medium">Canais de Atendimento</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/canais_atendimento/ouvidoria" role="treeitem">
                                                <span className="content text-medium">Ouvidoria</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/canais_atendimento/imprensa" role="treeitem">
                                                <span className="content text-medium">Imprensa</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://www.gov.br/inpe/pt-br/acesso-a-informacao/institucional/visita/" role="treeitem">
                                                <span className="content text-medium">Visitas ao INPE</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Previsão Numérica */}
                                <div className="menu-folder">
                                    <a className="menu-item" href="#" role="treeitem" onClick={(e) => e.preventDefault()}>
                                        <span className="content text-bold">Previsão Numérica</span>
                                    </a>
                                    <ul>
                                        <li>
                                            <a className="menu-item" href="https://previsaonumerica.cptec.inpe.br/" role="treeitem">
                                                <span className="content text-medium">Previsão de Tempo</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://subsazonal.cptec.inpe.br/" role="treeitem">
                                                <span className="content text-medium">Previsão Subsazonal</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="menu-item" href="https://sazonal.cptec.inpe.br/" role="treeitem">
                                                <span className="content text-medium">Previsão Sazonal</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* CPTEC */}
                                <a className="menu-item divider" href="https://www.cptec.inpe.br/" role="treeitem">
                                    <span className="content text-bold">CPTEC</span>
                                    <i className="fa-solid fa-house py-1 mr-1"></i>
                                </a>

                                {/* Nowcasting */}
                                <a className="menu-item divider" href="https://nowcasting.cptec.inpe.br/" role="treeitem">
                                    <span className="content text-bold">Nowcasting</span>
                                    <i className="fa-solid fa-map-location-dot py-1 mr-1"></i>
                                </a>

                                {/* Clima */}
                                <a className="menu-item divider" href="https://clima.cptec.inpe.br/" role="treeitem">
                                    <span className="content text-bold">Clima</span>
                                    <i className="fa-solid fa-cloud-sun py-1 mr-1"></i>
                                </a>

                                {/* Satélite */}
                                <a className="menu-item divider" href="https://satelite.cptec.inpe.br/home/index.jsp" role="treeitem">
                                    <span className="content text-bold">Satélite</span>
                                    <i className="fa-solid fa-satellite py-1 mr-1"></i>
                                </a>

                                {/* Ondas */}
                                <a className="menu-item divider" href="http://ondas.cptec.inpe.br/" role="treeitem">
                                    <span className="content text-bold">Ondas</span>
                                    <i className="fa-solid fa-water py-1 mr-1"></i>
                                </a>

                                {/* Bacias */}
                                <a className="menu-item divider" href="https://bacias.cptec.inpe.br/" role="treeitem">
                                    <span className="content text-bold">Bacias</span>
                                    <i className="fa-solid fa-satellite-dish py-1 mr-1"></i>
                                </a>

                                {/* Qualidade do Ar */}
                                <a className="menu-item divider" href="http://meioambiente.cptec.inpe.br/" role="treeitem">
                                    <span className="content text-bold">Qualidade do Ar</span>
                                    <i className="fa-solid fa-wind py-1 mr-1"></i>
                                </a>

                                {/* Pós Graduação */}
                                <a className="menu-item divider" href="https://www.gov.br/inpe/pt-br/area-conhecimento/posgraduacao/" role="treeitem">
                                    <span className="content text-bold">Pós Graduação</span>
                                    <i className="fa-solid fa-user-graduate py-1 mr-1"></i>
                                </a>

                                {/* Composição */}
                                <a className="menu-item divider" href="https://www.gov.br/inpe/pt-br/composicao" role="treeitem">
                                    <span className="content text-bold">Composição</span>
                                    <i className="fa-solid fa-network-wired py-1 mr-1"></i>
                                </a>

                                {/* Serviços */}
                                <a className="menu-item divider" href="https://www.gov.br/inpe/pt-br/servicos" role="treeitem">
                                    <span className="content text-bold">Serviços</span>
                                    <i className="fa-solid fa-gears py-1 mr-1"></i>
                                </a>
                            </nav>

                            {/* Redes Sociais */}
                            <div className="menu-footer">
                                <div className="social-network">
                                    <div className="social-network-title text-center py-1">Redes Sociais</div>
                                    <div className="d-flex justify-content-center flex-fill">
                                        {/* Facebook */}
                                        <a className="br-button circle btn-social" href="https://www.facebook.com/inpe.oficial" aria-label="Compartilhar por Facebook">
                                            <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                        </a>
                                        {/* Linkedin */}
                                        <a className="br-button circle btn-social" href="https://br.linkedin.com/company/inpe_2" aria-label="Compartilhar por Linkedin">
                                            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                                        </a>
                                        {/* Twitter / X */}
                                        <a className="br-button circle btn-social" href="https://x.com/inpe_mcti?lang=pt" aria-label="Compartilhar por Twitter/X">
                                            <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
                                        </a>
                                        {/* YouTube */}
                                        <a className="br-button circle btn-social" href="https://www.youtube.com/inpemct" aria-label="Compartilhar por YouTube">
                                            <i className="fa-brands fa-youtube" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>

                                {/* Assinatura */}
                                <div className="menu-info">
                                    <div className="text-center text-down-01">
                                        Desenvolvido por:
                                        <strong>CPTEC</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="menu-scrim" data-dismiss="menu" tabIndex="0"></div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
