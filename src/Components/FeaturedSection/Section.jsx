import Card from "../Card";
import { projectsData } from "../../assets/data";
import { memo } from "react";


 function Featured() {
  return (
    <div className="max-w-4xl my-4 mx-auto p-4 lg:px-4" >
      <div className=" max-w-2xl py-4 sm:py-6 lg:max-w-none lg:py-8" id="featured-section">
        <h2 className="text-2xl font-bold text-gray-200" >Featured Projects</h2>

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {
              projectsData.filter((item)=> item.isFeatured === true).map((project,key)=>(
                <Card key={key} {...project}/>
              ))
            }
        </div>
      </div>
    </div>
  );
}

const FeaturedSection = memo(Featured);
export default FeaturedSection;
