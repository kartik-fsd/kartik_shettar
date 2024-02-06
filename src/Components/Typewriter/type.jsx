import Typewriter from "typewriter-effect";

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Full stack developer", "Frontend Developer"],
        autoStart: true,
        loop: true,
        delay : 200
      }}
    />
  );
}
