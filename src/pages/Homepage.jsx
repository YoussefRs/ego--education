import Course from "../components/HomePageComponents/Courses/Course";
import Navbar from "../components/HomePageComponents/NavBar/Navbar";
import Team from "../components/HomePageComponents/Team/Team";
import Welcome from "../components/HomePageComponents/Welcome/Welcome";

function Homepage() {

  return (

    <div >
      <Navbar />
      <div className="flex flex-col min-h-full mr-10 ml-10 lg:m-0 overflow-x-hidden overflow-y-clip flex justify-center items-center rounded-xl ">
        <main className="grow ">
          <div className="relative ">
            <video
              autoPlay
              muted
              loop
              id="video-background"
              className="videoo"
            >
              <source
                src="https://ligaeducacional.com.br/images/uploads/posts/liga-educacional-reduzido-1.mp4"
                type="video/mp4"
              />
            </video>
            {/* <h1 className="background-text text-white absolute bottom-0 md:bottom-10 lg:bottom-10 xl:bottom-10 right-0 mr-6 z-10 text-sm md:text-xl lg:text-2xl">WELCOME TO EGO</h1> */}
                {/* <WaveShape  rotate={'rotateX(180deg)'}/> */}
            {/* <div className="grow absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#01141A] to-transparent "></div> */}
            <div className="grow absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent "></div>
          </div>
        </main>
      </div>
      <Course />
      <Welcome />
      <Team />
    </div>

  );
}


export default Homepage

