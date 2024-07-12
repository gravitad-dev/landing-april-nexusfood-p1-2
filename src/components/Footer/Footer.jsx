import data from "../../data.json";
import { Link } from "react-scroll";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

/*
<FaInstagram />
<FaFacebook />
<FaLinkedin />
<FaXTwitter />
*/

const ICONS = [<FaInstagram />, <FaFacebook />, <FaLinkedin />, <FaXTwitter />];

function Footer() {
  console.log(data.social);
  return (
    <footer className='flex flex-col justify-center pt-10 sm:pt-20 pb-6 pr-6 pl-10 sm:px-16 bg-[#F1F8FF] mt-4 overflow-hidden'>
      <div className='container mx-auto grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-12 text-black'>
        {/* Columna 1 */}
        <div className='relative flex flex-col col-span-5 justify-between sm:col-span-2 pr-6'>
          <a href='/#' className='pb-4'>
            <div className='flex items-center py-4 justify-center gap-3 pr-4 max-h-20 hover:animate-pulse'>
              <img
                height={200}
                width={200}
                src={data["section-header"].logo}
                alt={data["section-header"].alt}
                className='sm:ml-4 xl:ml-0'
              />
            </div>
            <p className='text-base text-center md:text-left'>
              {data["section-footer"].paragraph}
            </p>
          </a>
        </div>
        {/* Columna 2 */}
        {/*
        <div className='col-span-1'>
          <h2 className='text-lg font-bold mb-6'>
            {data["section-footer"].links.Company.name}
          </h2>
          <div className='mt-2'>
            {data["section-footer"].links.Company.data.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.toLowerCase().replace(/\s+/g, "")}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                >
                  <p className='sm:text-base text-sm cursor-pointer mt-1 sm:mt-3 tracking-normal hover:text-primary'>
                    {item}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        */}
        {/* Columna 3 */}
        <div className='hidden col-span-1'>
          <h2 className='text-lg font-bold mb-6'>
            {data["section-footer"].links.Support.name}
          </h2>
          <div className='mt-2'>
            {data["section-footer"].links.Support.data.map((item, index) => (
              <a key={index}>
                <p className='sm:text-base text-sm cursor-pointer mt-1 sm:mt-3 tracking-normal hover:text-primary'>
                  {item}
                </p>
              </a>
            ))}
          </div>
        </div>
        {/* Columna 4 */}
        <div className='flex flex-col items-center md:items-end col-span-3 md:col-span-2 sm:text-left relative  '>
          <h2 className='text-lg font-bold mb-6'>
            {data["section-footer"].links.Contact.name}
          </h2>
          {/* rrss */}
          <ul>
            <li className='flex gap-[6px]'>
              {data.social.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target='_blank'
                  className='hover:bg-[#474748] bg-[#343434] h-[28px] w-[28px] rounded-sm text-white text-[16px] flex justify-center items-center'
                >
                  {ICONS[item.id]}
                </a>
              ))}
            </li>
          </ul>
        </div>

        {/* Fin de las columnas */}
      </div>
      <div
        className='flex items-center gap-1 text-[12px] mt-8 text-center mx-auto'
        style={{ minWidth: "max-content" }}
      >
        <p className='text-gray_light'>{data["section-footer"].links.copy}</p>
        <p>{data["section-footer"].links["copy-name"]}</p>
      </div>
    </footer>
  );
}

export default Footer;
