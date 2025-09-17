import { useState } from 'react'
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
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true, amount: 0.3 }} 
    transition={{ duration: 0.8, ease: "easeOut" }}
    className='w-full h-full pt-12 flex flex-col items-center justify-center p-8'
  >
    {children}
  </motion.section>
);

const positionAvailable = [
  {
    id: 1,
    title: "Social Media Specialist",
    count: "0",
    jobdesk: [
      "Mengelola dan mengembangkan strategi konten untuk platform media sosial (Instagram, TikTok).",
      "Membuat jadwal posting dan berinteraksi dengan audiens.",
      "Menganalisis performa kampanye dan metrik media sosial."
    ],
    specificRequirements: [
      "Pengalaman mengelola akun media sosial brand atau komunitas.",
      "Memahami tren terbaru di Instagram dan TikTok.",
      "Kemampuan copywriting yang baik."
    ]
  },
  {
    id: 2,
    title: "Web Developer",
    count: "0",
    jobdesk: [
      "Mengembangkan dan memelihara fitur-fitur pada website utama.",
      "Berkolaborasi dengan tim UI/UX untuk implementasi desain.",
      "Memastikan performa dan keamanan website."
    ],
    specificRequirements: [
      "Menguasai React.js atau Vue.js.",
      "Memahami konsep API dan integrasi backend.",
      "Familiar dengan Git dan workflow pengembangan modern."
    ]
  },
  {id: 3, title: "Graphic Design", count: "0"},
  {id: 4, title: "Human Experience Management", count: "0"},
  {id: 5, title: "Project Officer", count: "0"},
  {id: 6, title: "Content Production", count: "0"},
  {id: 7, title: "Content Ideator", count: "0"},
  {id: 8, title: "Video Editor", count: "0"}
];

const requirements = [
    {id: 1, title: "Active Student", img: Student, text: "Engages actively in learning and community initiatives."},
    {id: 2, title: "Proactive & Growth-Oriented", img: Proactive, text: "Demonstrates a strong drive for continuous self-improvement and embraces new challenges"},
    {id: 3, title: "Creative & Innovative Mindset", img: Creative, text: "Thinks outside the box and brings fresh, inventive ideas to problem-solving."},
    {id: 4, title: "Agile & Adaptable", img: Agile, text: "Thrives in dynamic environments and adjusts quickly to evolving priorities."},
    {id: 5, title: "Ready to Contribute", img: Contribute, text: "Eager to take initiative and make a meaningful impact from day one"},
    {id: 6, title: "Yogyakarta-Based", img: based, text: "Currently resides in or willing to relocate to Yogyakarta to join our team."}
];

const JobDetailModal = ({ position, onClose }) => {
  if (!position) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-[100] flex justify-center items-center p-4 font-[Helvetica]"
      onClick={onClose}
    >
      <div 
        className="bg-black text-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        onClick={e => e.stopPropagation()} 
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{position.title}</h2>
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 border-b border-gray-600 pb-1">Job Description</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {position.jobdesk?.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 border-b border-gray-600 pb-1">Specific Requirements</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {position.specificRequirements?.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};



function App() {

  const [selectedPosition, setSelectedPosition] = useState(null)
 
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
            <div onClick={() => setSelectedPosition(item)}  key={item.id} className='bg-white/10 p-4 border-white/20 border-1 rounded-[10px] hover:border-white transition-[0.5s] flex flex-col gap-1 w-auto md:w-2/10'>
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
      {selectedPosition && (
        <JobDetailModal 
          position={selectedPosition} 
          onClose={() => setSelectedPosition(null)} 
        />
      )}
    </main>
  )
}

export default App
