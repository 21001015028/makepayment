import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Home = () => {
  // text-[#b5b4b5]
  AOS.init();
  const cy = new Date().getFullYear();

  return (
    <> 
    <div className='min-h-screen bg-[#212121] text-white '>
     <div className="flex justify-center">
            <div>
                <div className=' text-5xl mt-10 text-center'data-aos="fade-right"data-aos-delay="10"> 
                  Make Payment
                </div>

            

                <div className='text-xl flex mt-48 ml-4'>
                <Link to="/Signin">
                    <div className='w-full text-white bg-black hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>Login</div>
                </Link>
                <Link className='ml-16' to="/Signup">
                    <div className=' w-full text-white bg-black hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>Signup</div>
                </Link>
                </div>
            </div>
        </div>
        <footer className="absolute bottom-0 w-full h-16 flex items-center justify-center shadow-md">
        <span className="font-mono text-xl tracking-[0.8rem]">HIMANSHU</span>
        <span className="mt-2 text-[0.5rem]">©{cy}</span>
      </footer>
  </div>



       
    
      
      
    </>
  );
};
