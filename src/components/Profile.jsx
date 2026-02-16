import { useLanguage } from '../context/LanguageContext';

function Profile() {
  const { currentData } = useLanguage();

  return (
    <section className="pt-10  bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        
        {/* Ana başlık*/}

        <h2 className=" text-5xl text-pp-headtxt-lg font-bold mb-16 dark:text-pp-headtxt-drk">
          {currentData.profileTitle}
        </h2>

        {/* İki bölüm */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/*Sol kısım */}

          <div>
            <h3 className="text-3xl font-semibold text-pp-alttext-lg dark:text-pp-alttext-drk mb-8">
              {currentData.profileLabel}
            </h3>
            
            <div className="space-y-4">
             

              <div className="flex">
                <span className="font-semibold text-pp-text-lg dark:text-pp-text-dark w-48">
                  {currentData.profileInfo.birthDateLabel}
                </span>
                <span className="text-pp-text-lg dark:text-pp-text-dark">
                  {currentData.profileInfo.birthDate}
                </span>

              </div>

            

              <div className="flex">
                <span className="font-semibold text-pp-text-lg dark:text-pp-text-dark w-48">
                  {currentData.profileInfo.cityLabel}
                </span>
                <span className="text-pp-text-lg dark:text-pp-text-dark">
                  {currentData.profileInfo.city}
                </span>

              </div>

       

              <div className="flex">
                <span className="font-semibold text-pp-text-lg dark:text-pp-text-dark w-48">
                  {currentData.profileInfo.educationLabel}
                </span>
                <span className="text-pp-text-lg dark:text-pp-text-dark">
                  {currentData.profileInfo.education}
                </span>

              </div>

              

              <div className="flex">
                <span className="font-semibold text-pp-text-lg dark:text-pp-text-dark w-48">
                  {currentData.profileInfo.roleLabel}
                </span>
                <span className="text-pp-text-lg dark:text-pp-text-dark">
                  {currentData.profileInfo.role}
                </span>
              </div>
            </div>
          </div>

          {/*Sağ kısım */}
          
          <div className='mb-16'>
            <h3 className="text-3xl font-semibold text-pp-alttext-lg dark:text-pp-alttext-drk mb-8">
              {currentData.aboutMeLabel}
            </h3>
            
            <p className="text-pp-textright-lg dark:text-pp-text-dark leading-relaxed mb-6">
              {currentData.aboutMeText}
            </p>
            
            <p className="text-pp-textright-lg dark:text-pp-text-dark leading-relaxed ">
              {currentData.aboutMeText2}
            </p>
          </div>

        </div>
              <div className="flex justify-center mt-16">
        <div className="w-full  h-[2px] bg-line-bg rounded-full opacity-100"></div>
      </div>
      </div>
    </section>
  );
}

export default Profile;