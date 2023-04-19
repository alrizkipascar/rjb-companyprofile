import { useEffect, useRef } from "react";
import Nav from "./component/Nav";
import Contact from "./Contact";
import Experience from "./Experience";
import Skills from "./Skills";
import Welcome from "./Home";
import About from "./About";
import Animasection from "./component/animation";

function SinglePage() {
  const welcome = useRef(null);
  const about = useRef(null);
  const experience = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);
  const arrayPage = [
    { welcome: welcome },
    { about: about },
    { experience: experience },
    { skills: skills },
    { contact: contact },
  ];

  useEffect(() => {
    return () => {
      Animasection.observeAll();
    };
  }, []);

  console.log("welcome", welcome);
  const scrollToPage = (id) => {
    for (let i in arrayPage) {
      if (arrayPage[i][id]) {
        Animasection.observeAll();

        console.log("test", arrayPage[i][id]);

        arrayPage[i][id].current?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className=" sm:h-auto  bg-black">
      <header className="sticky top-0 z-50 flex justify-center">
        <Nav scrollToPage={scrollToPage} />
        {/* <button className="w-16 h-8 rounded-full text-white  justify-center"> tes</button> */}

      </header>

      <div className="z-0 overflow-y-hidden sm:h-auto">
        {/* <div className="border"> */}{" "}
        <Welcome
          welcome={welcome}
          id="welcome"
          name="welcome"
          // ref={welcome}
        ></Welcome>
        {/* </div> */}
        <About about={about}></About>
        <Experience id="experience" experience={experience}></Experience>
        <Skills skills={skills}></Skills>
        <Contact contact={contact}></Contact>
      </div>
    </div>
  );
}

export default SinglePage;
