// import image1 from "../assets/fd1.webp";
// import { motion} from "framer-motion";
// import Type from "../Components/Typewriter/type";

// function Home() {
//   return (
//     <main className="min-h-full flex items-center justify-center">
//       <div className="max-w-5xl mx-auto p-4 lg:px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
//             <picture>
//               <source srcSet={image1} type="image/webp" />
//               <img
//                 src={image1}
//                 alt="Landing image Description"
//                 loading="lazy"
//                 role="presentation"
//                 className="h-full w-full object-cover object-center"
//               />
//             </picture>
//           </div>

//           <div className="flex flex-col justify-center items-start lg:items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h1 className="text-3xl font-bold my-3 sm:text-3xl md:text-2xl lg:text-4xl">
//               Hi, there
//             </h1>
//             <h1 className="text-3xl font-bold my-3 sm:text-3xl md:text-2xl lg:text-4xl">
//               I am Kartik Shettar
//             </h1>
//             <span className={"text-3xl font-bold my-3 sm:text-3xl md:text-2xl lg:text-4xl"}>
//               <Type />
//             </span>
//             </motion.div>
//           </div>

//         </div>
//       </div>
//     </main>
//   );
// }

// export default Home;

import image1 from "../assets/fd1.webp";
import { motion } from "framer-motion";
import Type from "../Components/Typewriter/type";
import  { memo } from 'react';


function Home() {
    const MemoizedType = memo(Type);
  return (
    <main className="min-h-full flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-4 lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
            <picture>
              <source srcSet={image1} type="image/webp" />
              <img
                src={image1}
                alt="Landing image Description"
                loading="lazy"
                role="presentation"
                className="h-full w-full object-cover object-center"
              />
            </picture>
          </div>

          <div className="flex flex-col justify-center items-start lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl font-bold my-3 sm:text-3xl md:text-3xl lg:text-4xl">
                Hi, there
              </h1>
              <h1 className="text-3xl font-bold my-3 sm:text-3xl md:text-3xl lg:text-4xl">
                I am <span className="text-green-600">Kartik Shettar</span>
              </h1>
              <span className="text-3xl font-bold my-3 sm:text-3xl md:text-3xl lg:text-4xl text-teal-500">
                <MemoizedType />
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
