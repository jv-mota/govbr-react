import '../../assets/css/core.css';
import logoGovBranco from "../../img/govbr-branco-logo.png";

const Footer = () => {
  return (
    <>
        {/* Footer GOV.BR */}
        <footer className="br-footer" id="footer">
            {/* Logotipo */}
            <div className="container-lg d-flex justify-content-center align-items-center">
                <div className="logo">
                    <a href="https://www.gov.br/pt-br">
                        <img src={logoGovBranco} alt="Logotipo Branco - GOV.BR" />
                    </a>
                </div>
            </div>
            {/* Divisória */}
            <span className="br-divider my-3"></span>
            {/* Assinatura */}
            <div className="container-lg">
                <div className="info">
                    <div className="text-down-01 text-medium pb-3">
                        Texto destinado a exibição de informações relacionadas à&nbsp;
                        <strong className="strong-hover">
                            <a href="#">licença de uso</a>
                        </strong>.
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer;