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
    <main className='bg-[#2d3235] h-screen'>
      <div className="bg-[url('/image18.jpg')] bg-cover bg-center-t h-screen">
  {/* Content */}
      

      
      <div>
        {/* <img className='absolute'
        src="image10.png"
        alt="Background Image"public\image1.png
        /> */}
        
        <div className="text-2xl">
          <ul className="text-[#ffffff] bg-[#0f123f] flex justify-center p-8 space-x-12 bg-gradient-to-b 
          from-[#ff4617] bg-transparent">
            <li><a>Contact</a></li>
            <li><a>Experience</a></li>
            <li><a>About</a></li>
            <li><a>Projects</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-6xl text-[#ffcb6a] flex justify-center mt-5 
          pt-40 mb-3 pb-2 font-medium">Brian Davidson</h2>
          <h3 className="text-4xl text-center text-transparent bg-clip-text 
          font-bold bg-gradient-to-b 
          from-[#fff6cc] to-[#4a4e4e] p-2">
            Full-Stack Web <br/> Developer Portfolio</h3>
          <h3 className="text-4xl text-blue-300 flex justify-center"></h3>
          <p className="text-1xl text-[#e6e2d0] flex text-center justify-center font-sans">
            HTML ♦ CSS ♦ Javascript ♦ React/Vite<br/>  Tailwindcss ♦ Next.js ♦ MySQL </p>
          
          
        </div>
      </div>  
      </div>
    </main>
 
  )
}
