import Header from "./Header";
import Footer from "./Footer";
import Skill from "./Skill";
import Cv from "../Cvfile/Cv.pdf"

import Me from "../images/me.jpg"
import its from "../images/it me.jpg"

import {TypeAnimation} from "react-type-animation";




function Hero() {

     





  
  return (
    <div>
      <Header />
      <div>
        <section className="text-white py-20 fade-in flex flex-col sm:ml-10 md:flex-row items-center">
          <div className="container mx-auto text-center md:text-left md:mr-10">
            <h1 className="text-3xl md:text-2xl   text-black font-bold">
              Hello, i'm{" "} <br/>
              <span className="text-3xl mx:text-2xl   font-bold text-black"> 
            sadeq
              </span>
            </h1>
            <div className="text-indigo-600 mt-[20px] sm:ml-2">
              <TypeAnimation
                sequence={["I'm a full stack developer.", 2000, "", 2000]}
                wrapper="span"
                speed={40}
                style={{ fontSize: '2em', display: 'block' }}
                repeat={Infinity}
              />
  </div>
{/* image responsive mobile */}
  <img className=" sm:hidden w-full max-w-[300px] rounded-full ml-10 mt-5 h-auto" src={its} alt="" />

          
            <p className="text-gray-400 mt-4">
              A web developer designs, creates, and maintains websites, <br /> ensuring functionality, performance, and user experience.
              <br /> I’m a top online marketer and branding expert. I started my career
              by launching <br /> the popular metaverse design. In just a few short years, I built the brand <br /> to millions of social media followers and website visitors.
            </p>
            <a
              href="#skills"
              className="mt-8 inline-block bg-indigo-600 text-white py-2 px-4 rounded-full font-semibold"
            >
              View My Skills
            </a>
          </div>
          <div className=" justify-center mt-10  sm:mr-[300px] sm:block hidden md:mt-0">

            <img className="w-[300px] max-w-lg rounded-full h-auto " src={its} alt="" />
          </div>
        </section>

        <div id="about" className="py-20  flex flex-col md:flex-row items-center">
          <div className="flex justify-center md:w-1/2">
            <img className="w-full max-w-sm h-auto rounded" src={Me}alt="" />
          </div>
          <div className="container mx-auto text-center md:text-left md:w-1/2 px-4">
            <h2 className="text-3xl font-bold text-indigo-600">About Me</h2>
            <p className="text-lg mt-4">
              I am Sadeq Abdirahmaan, a passionate Full Stack Developer with a keen interest in creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I specialize in using React.js for building user-friendly interfaces and MongoDB for efficient data management.
            </p>
            <div className="text-center mt-20 md:text-left">
              <p className="text-2xl font-bold text-yellow-400">20+</p>
              <p className="text-sm uppercase tracking-wide">Projects Completed</p>
            </div>
            
            <div className="text-center mt-10 md:text-left">

              <button  className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-full"><a href={Cv} download="Cv.pdf">  Download CV </a>
                </button>
            </div>
          </div>
        </div>

           

<div>
  <Skill/>
</div>






<section id="skills" className="text-white py-18">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6 text-indigo-600">My Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <div className="p-6 hover:text-white bg-white text-black hover:bg-indigo-600 rounded shadow-xl shadow-gray-400">
      <i class="fa-solid fa-laptop text-4xl hover:text-white text-green-400 pb-5"></i>
        <h3 className="text-xl font-bold mb-4">Web Design</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="p-6  hover:text-white bg-white text-black hover:bg-indigo-600 rounded shadow-xl shadow-gray-400">
      <i class="fa-solid fa-mobile text-4xl hover:text-white text-green-400 pb-5"></i>
        <h3 className="text-xl font-bold mb-4">Responsive Web Design</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="p-6  hover:text-white bg-white text-black hover:bg-indigo-600 rounded shadow-xl shadow-gray-400">
        <div className="hover:text-white"><i class="fa-solid fa-database text-4xl hover:text-white text-green-400 pb-5"></i>
        </div>
        <h3 className="text-xl font-bold mb-4">Database Management</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</section>


        <section id="contact" className="py-20 fade-in">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-indigo-600">Get in Touch</h2>
            <p className="text-lg mt-4 max-w-2xl mx-auto">
              If you’d like to chat about a project or just want to say hi, drop me a message!
            </p>
            <form className="mt-8 max-w-lg mx-auto">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                placeholder="Your Name"
              
              />
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                placeholder="Your Email"
              
              />
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                rows="4"
                placeholder="Your Message"
              
              ></textarea>
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-4 rounded-full font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Hero;
