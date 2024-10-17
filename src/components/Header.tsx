import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/header-logo.svg'
import '../App.css'
const Header = () => {
  return (
    <header className='shadow-sm shadow-gray-700 z-20 bg-white top-0 left-0 right-0 fixed w-full'>
      <nav className="w-[1250px] h-[90px] mx-auto flex justify-between items-center">
      <Link to={'/'}><img src={Logo} alt="logo" /></Link>
      <div className='flex gap-[40px] text-[20px] noto tracking-wider'>
      <NavLink to={'/about'}>Biz haqimizda</NavLink>
      <NavLink to={'/curs'}>Kurslar</NavLink>
      <NavLink to={'/news'}>Yangiliklar</NavLink>
      </div>
      <button className='w-[176px] p-[12px] text-[15px] rounded-[25px] linear text-white'>Bepul Konsultatsiya</button>
      </nav>
    </header>
  )
}

export default Header