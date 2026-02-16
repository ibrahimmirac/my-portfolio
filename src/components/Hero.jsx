  import { useLanguage } from '../context/LanguageContext';

  import axios from 'axios';
  import { toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  function Hero() {
    const { currentData } = useLanguage();

    const handleHireMe = async () => {
      try {
        await axios.post('https://jsonplaceholder.typicode.com/posts');
        toast.success(currentData.hireSuccess, {
          position: "top-right",
          autoClose: 2000
        });

      setTimeout(() => {
        window.location.href =
        "mailto:ibrahimmiract@gmail.com?subject=Hiring%20Request";
      }, 1100);

      } catch (error) {
        toast.error(currentData.hireError);
      }
    };

    return (
      <section className="py-28">

        <ToastContainer />

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Sol taraf */}

            <div className="flex-[1]">

              {/* İsim */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 border h-1 bg-hr-nametxt-lg dark:bg-hr-nametxt-drk"></div>
                <h2 className="text-xl text-hr-nametxt-lg dark:text-hr-nametxt-drk font-medium">{currentData.name}</h2>
              </div>


              {/* Ana başlık */}
              <h1 className="text-5xl md:text-6xl text-hr-headertext-lg dark:text-hr-headertext-drk font-bold mb-8 leading-tight dark:text-hr-headertext-drk">
                {currentData.title}
              </h1>

              {/* Açıklama */}

              <p className="text-lg text-hr-alttext-lg dark:text-hr-alttext-drk mb-10">
                {currentData.description}
              </p>

              {/* Butonlar */}
              <div className="flex flex-wrap gap-4">
                
                <button
                  onClick={handleHireMe}
                  className="px-8 py-3 text-lg bg-hr-hirebg-lg text-hr-hiretext-lg dark:bg-hr-hirebg-drk dark:text-hr-hiretext-drk rounded-md hover:bg-hr-btntxt-lg transition font-medium"
                >
                  {currentData.hireMe}
                </button>

                <a
                  href="https://github.com/ibrahimmirac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-3 border border-hr-btntxt-lg text-hr-btntxt-lg dark:text-hr-btntxt-drk dark:bg-hr-btnbg-drk dark:border-hr-btntxt-drk rounded-md hover:bg-hr-btntxt-lg hover:text-white transition font-medium flex items-center gap-2"
                >
                  
                  <img
                    src="/images/github.png"
                    alt="Github"
                    className="w-5 h-5 group-hover:invert"
                  />
                  {currentData.github}
                </a>

                <a
                  href="https://www.linkedin.com/in/ibrahim-mirac-tuna-139725271/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-3 border border-hr-btntxt-lg text-hr-btntxt-lg dark:text-hr-btntxt-drk dark:bg-hr-btnbg-drk dark:border-hr-btntxt-drk rounded-md hover:bg-hr-btntxt-lg hover:text-white transition font-medium flex items-center gap-2"
                >
                  <img
                    src="/images/LinkedIn.png"
                    alt="LinkedIn"
                    className="w-5 h-5 group-hover:invert"
                  />
                  {currentData.linkedin}
                </a>

              </div>
            </div>

            {/* Sağ taraf */}
            <div className="flex-[1]">
              <div className="rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
                <img
                  src="/images/profile3.jpeg"
                  alt={currentData.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
        
      </section>
    );
  }

  export default Hero;