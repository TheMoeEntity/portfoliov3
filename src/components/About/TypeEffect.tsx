import Typewriter from "typewriter-effect";

const TypeEffect = () => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(writer) => {
        writer
          .pauseFor(2000)
          .typeString("Moses ")
          .pauseFor(1000)
          .typeString("<br />")
          .typeString("Nwigberi")
          .pauseFor(1500)
          // .deleteChars(10)
          .typeString(".")
          .pauseFor(2000)
          .deleteAll()
          .pauseFor(2000)
          .typeString("I'm ")
          .pauseFor(750)
          .typeString("<br />")
          .typeString("A ")
          .pauseFor(2000)
          .typeString("Web Developer.")
          .pauseFor(6000)
          .deleteAll()
          .start();
      }}
    />
  );
};

export default TypeEffect;
