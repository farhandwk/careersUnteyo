import background1 from './assets/background1.png'
import Header from "./Header"
import Footer from "./Footer"

import Student from "./assets/requirements/student.png"
import Proactive from "./assets/requirements/proactive.png"
import Creative from "./assets/requirements/creative.png"
import Agile from "./assets/requirements/agileandadaptable.png"
import Contribute from "./assets/requirements/contribute.png"
import based from "./assets/requirements/yogya.png"

import './App.css'

import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }} // Keadaan awal: transparan dan sedikit di bawah
    whileInView={{ opacity: 1, y: 0 }} // Animasi saat terlihat: muncul dan naik ke posisi
    viewport={{ once: true, amount: 0.3 }} // Animasi hanya berjalan sekali, saat 30% elemen terlihat
    transition={{ duration: 0.8, ease: "easeOut" }}
    className='w-full h-full pt-12 flex flex-col items-center justify-center p-8'
  >
    {children}
  </motion.section>
);

const positionAvailable = [
  {id: 1, title: "Social Media Specialist", count: "0"},
  {id: 1, title: "Graphic Design", count: "0"},
  {id: 1, title: "Human Experience Management", count: "0"},
  {id: 1, title: "Project Officer", count: "0"},
  {id: 1, title: "Web Developer", count: "0"},
  {id: 1, title: "Content Production", count: "0"},
  {id: 1, title: "Content Ideator", count: "0"},
  {id: 1, title: "Video Editor", count: "0"}
]

const requirements = [
  {id: 1, title: "Active Student", img: Student, text: "Engages actively in learning and community initiatives."},
  {id: 2, title: "Proactive & Growth-Oriented", img: Proactive, text: "Demonstrates a strong drive for continuous self-improvement and embraces new challenges"},
  {id: 3, title: "Creative & Innovative Mindset", img: Creative, text: "Thinks outside the box and brings fresh, inventive ideas to problem-solving."},
  {id: 4, title: "Agile & Adaptable", img: Agile, text: "Thrives in dynamic environments and adjusts quickly to evolving priorities."},
  {id: 4, title: "Ready to Contribute", img: Contribute, text: "Eager to take initiative and make a meaningful impact from day one"},
  {id: 5, title: "Yogyakarta-Based", img: based, text: "Currently resides in or willing to relocate to Yogyakarta to join our team."}
]

function App() {

  return (
    <main className='w-full max-w-screen h-auto bg-black font-[helvetica] text-white pt-22'>
      <Header/>
      <section className='w-full h-full flex flex-col items-center justify-center p-8 lg:min-h-[70vh] md:justify-start md:pt-36'
      style={{
        backgroundImage: `url(${background1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      >
        <h3 className='font-bold text-2xl pb-8 md:text-4xl'>Let's Grow With Us</h3>
        <div className='text-justify bg-white/10 p-6 border-[#fefefe] border-4 rounded-[18px] text-md w-full md:text-xl lg:w-1/3'
        style={{
          backdropFilter: "blur(10px)"
        }}
        >
          <span>At Unteyo Journey, we believe that growth is an unending journey—for the students we empower and for our dedicated team alike. If you possess a passion for innovation, a strong desire for continuous advancement, and are ready to move quickly in creating real impact, we invite you to become a part of our family. Join a dynamic, creative, and committed team dedicated to shaping the future of education in Yogyakarta and beyond. Let's unlock and expand your potential together.</span>
        </div>
      </section>
      <AnimatedSection className='w-full h-full pt-12 flex flex-col items-center justify-center p-8'>
        <h3 className='font-bold text-2xl pb-8 md:text-4xl md:pt-12'>What's We Are Looking For?</h3>
        <div className='w-full h-auto flex flex-row flex-nowrap overflow-x-scroll gap-4 md:flex-wrap md:overflow-x-hidden md:justify-center md:gap-8'>
          {requirements.map((item) => (
            <div 
            key={item.id}
            className='bg-white/10 w-62 flex-shrink-0 p-4 rounded-[20px] flex flex-col items-center justify-around gap-2'>
              <img src={item.img} className='w-36'/>
              <span className='text-lg font-semibold text-center'>{item.title}</span>
              <span className='text-sm text-justify'>{item.text}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection className='w-full h-full pt-12 flex flex-col items-center justify-center p-8'>
        <h3 className='font-bold text-2xl pb-8 md:text-4xl md:pt-12'>Find Your Postion Now</h3>
        <div className='flex flex-row flex-wrap w-full gap-4 items-start justify-center pb-8'>
          {positionAvailable.map((item) => (
            <div key={item.id} className='bg-white/10 p-4 border-white/20 border-1 rounded-[10px] hover:border-white transition-[0.5s] flex flex-col gap-1 w-auto md:w-2/10'>
              <h4 className='font-semibold'>{item.title}</h4>
              <div className='flex flex-row gap-2'>
                <span >{item.count}</span>
                <span>Lowongan</span>  
              </div>
            </div>
          ))}
        </div>
        <a className='bg-white/10 border-white/20 border-1 rounded-full p-2 w-48 flex flex-col items-center justify-centers hover:border-white'>Apply Now</a>
      </AnimatedSection>
      <Footer/>
    </main>
  )
}

export default App
