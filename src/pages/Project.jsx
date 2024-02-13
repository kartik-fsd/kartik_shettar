import { Helmet } from "react-helmet"
import BannerSection from "../Components/Banner/BannerSection"
import FeaturedSection from "../Components/FeaturedSection/Section"
import ProjectShowCase from "../Components/Projects/ProjectShowCase"
import SearchProjects from "../Components/Search/SearchProjects"
import SearchSection from "../Components/Search/SearchSection"
import TransitionComponent from "../Components/Transition/Transition"
import banner from "../assets/banner3.jpg"
import metImg from "../assets/project/dripnseak.webp"

const Project = () => {
  return (
    <TransitionComponent>
    <Helmet>
      <title>Project Showcase | Kartik Shettar</title>
      <meta name="description" content="Explore Kartik Shettar's recent projects showcasing a range of skills." />
      <meta property="og:title" content="Project Showcase - Kartik Shettar" />
      <meta property="og:description" content="Explore a collection of recent projects showcasing Kartik Shettar's skills in web development." />
      <meta property="og:image" content={metImg} />
      <meta property="og:url" content="https://drip-sneak.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <BannerSection banner={banner}/>
    <FeaturedSection />
    <SearchSection/>
    <SearchProjects /> 
    <ProjectShowCase/>
    </TransitionComponent>
  )
}

export default Project