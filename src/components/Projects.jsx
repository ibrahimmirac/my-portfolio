import { useLanguage } from '../context/LanguageContext';

function Projects() {
  const { currentData } = useLanguage();

  return (
    <section id="projects" className="pt-20 pb-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4">

        {/*Başlık*/}
        <h2 className="text-5xl font-bold mb-16 text-prj-headtxt-lg dark:text-prj-headtxt-drk">
          {currentData.projectsTitle}
        </h2>

        {/*proje yapısı*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {currentData.projectsList.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-prj-bg-drk rounded-lg overflow-hidden shadow-sm flex flex-col"
            >

              {/* Proje görselleri*/}
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Proje içeriği*/}
              <div className="p-6 flex flex-col flex-grow">

                <h3 className="text-2xl font-bold text-prj-alttxt-lg dark:text-prj-alttxt-drk mb-4">
                  {project.name}
                </h3>

                <p className="text-prj-txt-lg dark:text-prj-txt-drk text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-1 bg-white dark:bg-gray-700 text-prj-btntxt-lg dark:text-prj-btntxt-drk border border-prj-btntxt-lg dark:border-prj-btntxt-drk rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Linkler */}
                <div className="flex justify-between items-center mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-prj-btntxt-lg dark:text-prj-link-drk font-semibold hover:underline"
                  >
                    {currentData.githubLabel}
                  </a>
                  <a
                    href={project.viewSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-prj-btntxt-lg dark:text-prj-link-drk font-semibold hover:underline"
                  >
                    {currentData.viewSiteLabel}
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

export default Projects;