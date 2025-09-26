import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


// const Tabs = ({ tabClass } : {tabClass: any}) => {
//   return (
//       <div className="object-center">{tabClass}</div>
//   );
// };

export default function Page() {
  return (
    <main className='relative h-screen overflow-hidden '>
      <video 
        className="absolute top-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src='/typing-video.mp4' type="video/mp4"/>
      </video>  
        
  {/* Content */}
      

      
      <div className='relative z-10 flex flex-col '>
        {/* <img className='absolute'
        src="image10.png"
        alt="Background Image"public\image1.png
        /> */}
        <div>
          <div className="text-2xl">
            <ul className="text-[#ffffff] flex justify-center p-8 pb-16 space-x-12 bg-gradient-to-b 
            from-[#031a27] bg-transparent">
              <li className='hover:text-[#2794ee] hover:scale-125 transition-all duration-300'><a>About</a></li>
              <li className='hover:text-[#2794ee] hover:scale-125 transition-all duration-300'><a>Experience</a></li>
              <li className='hover:text-[#2794ee] hover:scale-125 transition-all duration-300'><a>Projects</a></li>
              <li className='hover:text-[#2794ee] hover:scale-125 transition-all duration-300'><a>Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="bg-black/60 z-20 mt-20">
          <h2 className="text-7xl text-[#ffb52c]  rounded flex justify-center mt-2 
           mb-3 pb-2 font-medium">Brian Davidson</h2>
          <h3 className="text-4xl bg-black text-center text-transparent bg-clip-text 
          font-bold bg-gradient-to-b 
          from-[#ffb52c] to-[#365757] p-2">
            Full-Stack Web <br/> Developer Portfolio</h3>
          <h3 className="text-4xl text-blue-300 flex justify-center"></h3>
          <p className="text-1xl mb-2 text-[#ccfafd] flex text-center justify-center font-sans">
            HTML ♦ CSS ♦ Javascript ♦ React/Vite<br/>  Tailwindcss ♦ Next.js ♦ MySQL </p>
          
          
        </div>
      </div>  
      
    </main>
 
  )
}
