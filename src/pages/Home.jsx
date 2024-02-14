import animationPath from "../assets/Animation.webm";
import { motion } from "framer-motion";
import Type from "../Components/Typewriter/type";
import { memo } from "react";
import TransitionComponent from "../Components/Transition/Transition";
import { Helmet } from "react-helmet";

function Home() {
  const MemoizedType = memo(Type);

  return (
    <TransitionComponent>
        <Helmet>
        <title>Kartik Shettar&apos;s Portfolio</title>
        <meta name="description" content="Kartik-Shettar webdeveloper | full stack developer | frontend developer." />
        <meta property="og:title" content="Kartik-Shettar - Full Stack Developer" />
        <meta property="og:description" content="Kartik-shettar portfolio website for the Full Stack Developer and Frontend Developer." />
      </Helmet>
      <main className="min-h-screen flex flex-col items-center justify-center text-white">
        <div className="max-w-4xl my-6 mx-auto p-4 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="aspect-w-5 aspect-h-4 overflow-hidden rounded-xl">
              <video
                autoPlay
                muted
                playsInline
                loop
                preload="auto"
                style={{ width: "100%", height: "100%" }}
                aria-label="Animation"
                role="presentation"
              >
                <source src={animationPath} type="video/webm" />
              </video>
            </div>

            <div className="w-fit flex flex-col justify-center items-start lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-3xl font-extrabold my-3 sm:text-5xl lg:text-4xl">
                  Greetings!
                </h1>
                <h1 className="text-3xl font-extrabold my-3 sm:text-3xl lg:text-3xl">
                  I&apos;M{" "}
                  <span className="text-green-400">Kartik Shettar</span>
                </h1>
                <span
                  className="text-3xl font-extrabold my-3 sm:text-3xl lg:text-3xl text-teal-500"
                  aria-label="Typewriter Animation"
                >
                  <MemoizedType
                    text={["Full stack developer", "Frontend Developer"]}
                  />
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        <section className="max-w-4xl my-8 mx-2 sm:mx-auto p-6 bg-gray-800 rounded-lg">
          <h1 className="font-extrabold text-5xl text-center text-zinc-300 mb-6">
            THE CODE WHISPERER
          </h1>
          <p className="text-gray-400 italic">
            Witness my undying passion for programming – or at least,
            that&apos;s what I tell myself. Rumor has it, I&apos;ve mastered the
            classics: Javascript, React, Node. The usual suspects. 🤷‍♂️ As I
            navigate through the labyrinth of code, one can&apos;t help but
            wonder: do I really know what I&apos;m doing?
          </p>
          <p className="mt-4">
            In the vast expanse of coding, I fluently converse in classics like
            JavaScript, React, and Node. My interests lie in crafting the future
            of web technologies and products. Occasionally, I indulge my
            penchant for product development, employing the ever-so-trendy
            Node.js and the avant-garde JavaScript libraries and frameworks,
            including the likes of React.js and Next.js. My approach leans
            towards the unconventional, steering away from clichés and embracing
            a cool, subtly sarcastic perspective.
          </p>
        </section>
      </main>
    </TransitionComponent>
  );
}
const MemoHome = memo(Home);

export default MemoHome;
