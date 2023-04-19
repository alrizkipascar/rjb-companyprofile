import Cards from "./component/Cards";

const Skills = ({ skills }) => {
  return (
    <div
      ref={skills}
      className="  items-center justify-center  bg-black w-full h-screen text-white px-16 py-20"
    >
      My Experience
      <div className="grid grid-cols-2 py-5 gap-5">
        <Cards.Skills className=""></Cards.Skills>
        <Cards.Skills className=""></Cards.Skills>
        <Cards.Skills className=""></Cards.Skills>
        <Cards.Skills className=""></Cards.Skills>
      </div>
    </div>
  );
};

export default Skills;
