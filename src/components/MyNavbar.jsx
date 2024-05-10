import { Navbar } from 'flowbite-react';
import Logo from '../Images/Main-Logo.png';
import { useMediaQuery } from 'react-responsive';
import './Navbar.css';

const MyNavbar = () => {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <Navbar rounded >
      <Navbar.Brand>
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>

      {isLargeScreen ? (
        <div className='min-w-[525px] flex items-center gap-[40px]'>
          <p className='font-Inter font-normal text-[18px] leading-[21.78px] text-[#3A3740]'>Home</p>
          <p className='font-Inter font-normal text-[18px] leading-[21.78px] text-[#3A3740]'>Flashcard</p>
          <p className='font-Inter font-normal text-[18px] leading-[21.78px] text-[#3A3740]'>Contact</p>
          <p className='font-Inter font-normal text-[18px] leading-[21.78px] text-[#3A3740]'>FAQ</p>
          <button className='login-btn px-10 py-[13px] rounded-[32px] w-fit'>
            <p className='text-white font-Inter font-normal text-[18px] leading-[21.78px]'>Login</p>
          </button>

        </div>
      ) : (
        <>
          <Navbar.Toggle />
          <Navbar.Collapse className='text-center items-center'>
            <Navbar.Link>
              <p className='font-Inter font-normal text-[18px] leading-[21.78px] text-[#3A3740]'>Home</p>

            </Navbar.Link>
            <Navbar.Link>
              <p className='font-Inter font-normal text-[18px] leading-[21.78px] text-[#3A3740]'>Flashcard</p>

            </Navbar.Link>
            <Navbar.Link>
              <p className='font-Inter font-normal text-[18px] leading-[21.78px] text-[#3A3740]'>Contact</p>

            </Navbar.Link>
            <Navbar.Link>
              <p className='font-Inter font-normal text-[18px] leading-[21.78px] text-[#3A3740]'>FAQ</p>

            </Navbar.Link>
            <Navbar.Link>
              <button className='login-btn px-10 py-[13px] rounded-[32px] w-fit'>
                <p className='text-white font-Inter font-normal text-[18px] leading-[21.78px]'>Login</p>
              </button>
            </Navbar.Link>

          </Navbar.Collapse>
        </>
      )}
    </Navbar>
  );
};

export default MyNavbar;