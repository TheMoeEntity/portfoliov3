import Typewriter from "typewriter-effect";

const TypeEffect = () => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(writer) => {
        writer
          .pauseFor(2500)
          .typeString("Moses <br  />")
          .pauseFor(2000)
          .typeString("Nwigberi")
          .pauseFor(2000)
          // .deleteChars(10)
          .typeString(".")
          .pauseFor(2000)
          .deleteAll()
          .pauseFor(2000)
          .typeString("I'm <br  />")
          .pauseFor(2000)
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
