import BannerSection from "../Components/Banner/BannerSection"
import FeaturedSection from "../Components/FeaturedSection/Section"
import ProjectShowCase from "../Components/Projects/ProjectShowCase"
import SearchProjects from "../Components/Search/SearchProjects"
import SearchSection from "../Components/Search/SearchSection"
import TransitionComponent from "../Components/Transition/Transition"
import banner from "../assets/banner3.jpg"

const Project = () => {
  return (
    <TransitionComponent>
    <BannerSection banner={banner}/>
    <FeaturedSection />
    <SearchSection/>
    <SearchProjects /> 
    <ProjectShowCase/>
    </TransitionComponent>
  )
}

export default Project