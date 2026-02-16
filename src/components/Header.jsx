import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, currentData } = useLanguage();

  return (
    <header className="pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">

          {/*Logo(IM)*/}

          <div className="  w-16 h-16 rounded-full bg-hd-logoback-lg text-hd-logotxt-lg dark:bg-hd-logoback-drk dark:text-hd-logotxt-drk flex items-center justify-center">
            <span className=" text-2xl font-bold text-logotxt-lg">İM</span>
          </div>

          {/* Sağ taraf*/}

          <div className="flex flex-col items-end gap-8">

            {/*Mod ve dil değiştirme */}
            <div className="flex items-center gap-3">

              {/*Mod */}
            <button
                onClick={toggleTheme}
                className="flex items-center gap-2"
                >
                <div
                    className={[
                    'w-12 h-6 rounded-full p-1 transition relative',
                    theme === 'dark' ? 'bg-hd-modeback-drk' : 'bg-hd-modeback-lg'
                    ].join(' ')}
                >
                    <div
                    className={[
                        'w-4 h-4 rounded-full bg-hd-modeset-lg transform transition relative',
                        theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
                    ].join(' ')}
                    >

                    {theme === 'dark' && (
                        <div className="absolute w-3 h-3 rounded-full bg-hd-modeback-drk left-1.5 top-0.5"></div>
                    )}

                    </div>
                </div>

                <span className="text-sm font-bold text-hd-modetxt-lg dark:text-hd-modetxt-drk whitespace-nowrap">
                    {theme === 'dark' ? currentData.darkMode : currentData.lightMode}
                </span>
            </button>


              {/* çizgi */}
              <div className="h-6 w-px bg-gray-400"></div>

              {/* Dil değiştirme butonu */}
              <button
                onClick={toggleLanguage}
                className="text-sm font-bold whitespace-nowrap"
              >
                {language === 'tr' ? (
                  <span>
                    <span className="text-gray-400">SWITCH TO </span>
                    <span className="text-hd-logotxt-lg">ENGLISH</span>
                  </span>
                ) : (
                  <span>
                    <span className="text-hd-logotxt-lg">TÜRKÇE</span>
                    <span className="text-gray-400">'YE GEÇ</span>
                  </span>
                )}
              </button>

            </div>

            {/* alt satır*/}
            <div className="flex items-center gap-10">

              {/* skills ve projects*/}
              <nav className="flex gap-9">
                <a
                  href="#skills"
                  className="text-gray-500 dark:text-gray-500 hover:text-hd-modeback-lg hover:dark:text-white font-medium"
                >
                  {currentData.skills}
                </a>
                <a
                  href="#projects"
                  className="text-gray-500 dark:text-gray-500 hover:text-hd-modeback-lg hover:dark:text-white font-medium"
                >
                  {currentData.projects}
                </a>
              </nav>

              {/* Hire me butonu*/}
              <a
                href="#contact"
                className="px-6 py-2 border-2 bg-white border-hd-hiretxt text-hd-hiretxt dark:bg-hd-hireback rounded-md hover:bg-hd-hiretxt hover:dark:bg-hd-hiretxt hover:text-white transition font-medium"
              >
                {currentData.hireMe}
              </a>

            </div>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;