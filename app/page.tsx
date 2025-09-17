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
    <main className='bg-[#2d3235] border-8 '>
      <div>
        
      </div>
      <div className="text-2xl">
        <ul className="text-[#ffffff] bg-gray-700 flex justify-center p-3 space-x-12">
          <li>Contact</li>
          <li>About experience</li>
          <li>Projects</li>
        </ul>
      </div>
      <div>
        <h2 className="text-6xl text-[#e6e2d0] flex justify-center mt-5 
        pt-40 mb-3 pb-2 font-medium">Brian Davidson</h2>
        <h3 className="text-4xl text-center text-transparent bg-clip-text 
        font-bold bg-gradient-to-b 
        from-[#d0e3e6] to-[#4a4e4e] p-2">
          Full-Stack Web <br/> Developer Portfolio</h3>
        <h3 className="text-4xl text-blue-300 flex justify-center"></h3>
        <p className="text-1xl text-white flex justify-center">
          HTML,CSS,Javascript,React w/Vite,Tailwindcss,Next.js,MySQL </p>
        <div>
          
        </div>
      </div>
    </main>
 
  )
}
