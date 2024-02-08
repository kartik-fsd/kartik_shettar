
import TransitionComponent from "../Components/Transition/Transition";
import { Avatardata, experienceData, optimizedData } from "../assets/data";
import TechStack from "../Components/SkillTech/TechStack";
import SkillStack from "../Components/SkillTech/SkillStack";
import Avatar from "../Components/Avatar/Avatar";
import Experiences from "../Components/Experience/Experiences";

function About() {
  return (
    <TransitionComponent>
      <main className="min-h-screentext-white">
        {/*Avatar Section */}
        <Avatar data={Avatardata} />
        <>
          <div className="max-w-4xl my-6 mx-auto p-4 lg:px-4">
            <h3 className="text-gray-300 font-semibold text-3xl mb-4">
              Know Who I Am
            </h3>
            <div className="text-gray-400">
              <p className="mb-4">
                Hey Everyone! I&apos;m Kartik Shettar 👨‍💻 from India.
              </p>

              <p className="mb-4">
                🚀 Passionate Full Stack Developer | 🌐 Frontend Developer
              </p>

              <p className="mb-4 text-wrap">
                With a Bachelor&apos;s degree in Computer Applications (BCA) and
                a comprehensive training in full-stack web development. Oh, joy!
                Recently completed an enlightening internship as a Full-stack
                Developer at TASKMO, where I honed my skills and gained
                invaluable hands-on experience. By combining my unparalleled
                technical expertise, overwhelming creativity, and an unwavering
                commitment to continuous learning, I aim to contribute to the
                most groundbreaking web projects and deliver solutions that are
                just so outstanding they might be too much for users to handle.
                Because, you know, that&apos;s just how I roll.
              </p>
            </div>
          </div>
        </>
        <>
          <div className="max-w-4xl my-6 mx-auto p-4 lg:px-4">
            <h3 className="text-gray-300 font-semibold text-3xl mb-4">
              Experience
            </h3>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experienceData.map((exp) => (
                <ExperienceCard key={exp.id} {...exp} />
              ))}
            </div> */}
            
              {/* Skills Section */}
            {experienceData.map((exp) => (
              <Experiences key={exp.id} {...exp} />
            ))}
          </div>
        </>
        <>
          <div className="max-w-4xl my-6 mx-auto p-4 lg:px-4">
            {/* Skills Section */}
            <SkillStack optimizedData={optimizedData} />
            {/* Tech & Tools Section */}
            <TechStack optimizedData={optimizedData} />
          </div>
        </>
      </main>
    </TransitionComponent>
  );
}

export default About;
