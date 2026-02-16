import { useLanguage } from '../context/LanguageContext';

function Footer() {
  const { currentData, language } = useLanguage();

  return (
    <footer id="contact" className="py-16 bg-light-bg dark:bg-ftr-bg-drk">
      <div className="container mx-auto px-4">
        
        {/*Başlık*/}
        <h2 className="text-4xl font-bold dark:text-white mb-10 leading-tight">
          {language === 'tr' ? (
            <>
              Bir sonraki ürününüzde
              <br />
              birlikte çalışalım.
            </>
          ) : (
            <>
              Let's work together on
              <br />
              your next product.
            </>
          )}
        </h2>

        {/*Email ve link*/}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-0">
          
          {/*Email*/}
          <a
          href="mailto:ibrahimmiract@gmail.com"
          className="text-base text-ftr-mail-lg dark:text-ftr-mail-drk font-medium hover:underline cursor-pointer"
          >
          👉 ibrahimmiract@gmail.com
        </a>


          {/**Link */}
          <div className="flex items-center gap-4">
            <a 
              href="#"
              className="text-sm text-ftr-personal-lg dark:text-ftr-personal-drk hover:text-gray-700 font-medium"
            >
              {currentData.personalBlog}
            </a>
            <a 
              href="https://github.com/ibrahimmirac" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ftr-github-lg dark:text-ftr-github-drk hover:text-green-700 font-medium"
            >
              {currentData.footerGithub}
            </a>
            <a 
              href="https://www.linkedin.com/in/ibrahim-mirac-tuna-139725271/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-ftr-linkedin-lg dark:text-ftr-linkedin-drk hover:text-blue-700 font-medium"
            >
              {currentData.footerLinkedin}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
