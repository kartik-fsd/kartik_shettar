
import TransitionComponent from "../Components/Transition/Transition";
import { Aboutdata, experienceData, optimizedData } from "../assets/data";
import SkillStack from "../Components/SkillTech/SkillStack";
import Avatar from "../Components/Details/Avatar";
import Experiences from "../Components/Details/Experiences";
import Intro from "../Components/Details/Intro";
import { Helmet } from "react-helmet";

function About() {
  return (
    <TransitionComponent>
      <Helmet>
        <title>Kartik Shettar&apos;s About Page</title>
        <meta name="description" content="Introduction of Kartik Shettar." />
        <meta property="og:title" content="Kartik Shettar - Full Stack Developer" />
        <meta property="og:description" content="A portfolio website for the Full Stack Developer and Frontend Developer." />
      </Helmet>
      <main className="min-h-screentext-white">
        {/*Avatar Section */}
        <Avatar data={Aboutdata} />

        {/* About section */}
        <Intro data={Aboutdata}/>


          <div className="max-w-4xl my-6 mx-auto p-4 lg:px-4">
              {/* Skills Section */}
            {experienceData.map((exp) => (
              <Experiences key={exp.id} {...exp} />
            ))}
          </div>

          <div className="max-w-4xl my-6 mx-auto p-4 lg:px-4">
            {/* Skills Section */}
            <SkillStack optimizedData={optimizedData} />
          </div>

      </main>
    </TransitionComponent>
  );
}

export default About;
