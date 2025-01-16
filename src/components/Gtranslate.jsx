import { useEffect } from 'react';

const GTranslate = () => {
  useEffect(() => {
    // Verifica se o script do GTranslate já foi carregado
    if (!window.GTranslate) {
      const script = document.createElement('script');
      script.src = "https://cdn.gtranslate.net/widgets/latest/lc.js";
      script.defer = true;
      script.id = 'gtranslate-script'; // Atribui um ID fixo para o script
      document.body.appendChild(script);

      script.onload = () => {
        window.gtranslateSettings = {
          default_language: "pt",
          native_language_names: true,
          languages: ["pt", "en", "es"],
          wrapper_selector: ".gtranslate",
        };
      };
    }

    // Cleanup: remove o script do GTranslate se o componente for desmontado
    return () => {
      const script = document.querySelector('#gtranslate-script');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []); // Executa apenas uma vez, no primeiro carregamento

  return (
    <div
      className="gtranslate"
      id="google_translate_element" // Certifique-se de usar um ID fixo
    ></div>
  );
};

export default GTranslate;
