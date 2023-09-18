import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <footer className="bg-white text-center text-white   lg:text-left">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <p className="mb-4 text-black flex items-center text-sm font-bold justify-center  md:justify-start">
                Discover
              </p>
              <Link
                className="mb-4 flex items-center justify-center  text-sm md:justify-start hover:text-blue-600 lg:ml-auto text-black "
                href="/about-us"
              >
                About
              </Link>
              <Link
                className="mb-4 flex items-center justify-center  text-sm md:justify-start hover:text-blue-600 lg:ml-auto text-black  "
                href="/terms"
              >
                Terms
              </Link>
              <Link
                className="mb-4 flex items-center justify-center  text-sm md:justify-start hover:text-blue-600 lg:ml-auto  text-black"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link
                className="mb-4 flex items-center justify-center  text-sm md:justify-start hover:text-blue-600 lg:ml-auto text-black"
                href="/refund-policy"
              >
                Refund Policy
              </Link>
            </div>

            <div className="">
              <p className="mb-4 text-black flex items-center text-sm font-bold justify-center  md:justify-start">
                Payment Methods
              </p>

              <p className="mb-4">
                <a href="#!" className="  text-gray-600 text-sm text-black">
                  Payoneer
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="  text-gray-600 text-sm text-black">
                  Paypal
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="  text-gray-600 text-sm text-black">
                  Stripe
                </a>
              </p>
            </div>

            <div className="">
         
              <p className="mb-4 text-black flex items-center text-sm font-bold justify-center  md:justify-start">
              Need Helps?
              </p>

              <p className="mb-4 text-sm   text-gray-600 text-black">
               
                We are Always here for you! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM).
            
              </p>
    
            </div>

            <div>
            <p className="mb-4 text-black flex items-center text-sm font-bold justify-center  md:justify-start">
              Contact
              </p>
      
              <p className="mb-4 text-black text-sm flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                rabiul.islam@implevista.com
              </p>
              <p className="mb-4  text-black text-sm flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                +8801717760924
              </p>
       
            </div>
          </div>
        </div>

        <div className=" text-black text-sm flex justify-between p-6 text-center ">
        <Link
            className="font-semibold "
            href="/"
          >
            IV Trip
          </Link>

          <span >©2023 by IV Trip </span>
  
        </div>
      </footer>
    </div>
  );
};

export default Footer;
