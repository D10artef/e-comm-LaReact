import React, {useState} from 'react'
import Logo from '../Logo'
import AdminMenu from './AdminMenu';

const TopNavHeader = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-5 py-3 bg-white md:flex-shrink-0 md:w-52 md:justify-center border-0 md:border-b border-accent">
        <Logo/>
        <div className="relative md:hidden">
          <svg
            onClick={() => setMenuOpened(true)}
            className="w-5 h-5 text-primary cursor-pointer fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <div className={`${menuOpened ? '' : 'hidden'} absolute right-0 z-20`}>
            <AdminMenu className="relative z-20 bg-primary rounded-sm shadow-lg" />
            <div
              onClick={() => {
                setMenuOpened(false);
              }}
              className="fixed inset-0 z-10 bg-black opacity-25"
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopNavHeader