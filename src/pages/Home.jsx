// import image1 from "../assets/fd1.webp";

// function Home() {
//   return (
//     <>
//       <main>
//         <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
//           <div className="mx-auto mt-6 max-w-xl sm:px-4 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-6 lg:px-8">
//             <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
//               <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg">
//                 <picture>
//                   <source srcSet={image1} type="image/webp" />
//                   <img
//                     src={image1}
//                     alt="Landing image Description"
//                     loading="lazy"
//                     role="presentation"
//                     className="h-full w-full object-cover object-center"
//                   />
//                 </picture>
//               </div>
//             </div>
//             <div>
//             <h1>
//                 Hi , there
//             </h1>
//             <h1>
//                 I am Kartik shettar
//             </h1>
//             </div>
//            </div>
//         </div>
//       </main>
//     </>
//   );
// }

// export default Home;

import image1 from "../assets/fd1.webp";

function Home() {
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
            <h1 className="text-3xl font-bold my-2 sm:text-3xl md:text-2xl lg:text-4xl">
              Hi, there
            </h1>
            <h1 className="text-3xl font-bold my-2 sm:text-3xl md:text-2xl lg:text-4xl">
              I am Kartik Shettar
            </h1>
            <span className="text-3xl font-bold my-2 sm:text-3xl md:text-2xl lg:text-4xl">
              Full Stack Developer
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;

