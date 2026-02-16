import { useLanguage } from '../context/LanguageContext';

function Skills() {

  const { currentData } = useLanguage();

  return (
    <section id="skills" className="pt-31 pb-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        
        
        {/* Başlık */}
        <h2 className="text-5xl text-sk-headtxt-lg font-bold mb-16 dark:text-sk-headtxt-drk">
          {currentData.skillsTitle}
        </h2>

        {/* yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {currentData.skillsList.map((skill, index) => (
            <div key={index}>
              {/* alt başlık */}
              <h3 className="text-3xl font-semibold text-sk-parthead-lg dark:text-sk-parthead-drk mb-6">
                {skill.name}
              </h3>
              
              {/* açıklama */}
              <p className="text-sk-parttxt-lg dark:text-sk-parttxt-drk leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
          
        </div>
        <div className="flex justify-center mt-16">
          <div className="w-full  h-[2px] bg-line-bg rounded-full opacity-100"></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;