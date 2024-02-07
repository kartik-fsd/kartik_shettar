import { Link } from "react-router-dom"

function About() {

   const tags = ["/" ,"/about"]
  return (
    <div>
        <Link to={tags[0]} className="text-white">
            Tag
        </Link>
    </div>
  )
}

export default About