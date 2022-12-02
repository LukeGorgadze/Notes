import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {BsChevronRight,BsChevronLeft} from 'react-icons/bs'
const Navbar = ({ toggle, setToggle, curPage, setCurPage }) => {

    return (
        <div className={`flex flex-row w-full h-screen `}>
            <Router>
                <div className={`h-screen flex flex-row bg-primary `}>
                    <div className='mt-[50px] ml-[40px] mr-[40px] z-[9999]'>
                        <div className='Header flex flex-row'>
                            <div className='text-white text-[25px]'><Link to='/' onClick={() => setCurPage('/')}>Luka's Notes</Link></div>
                            <a href='https://github.com/LukeGorgadze' rel="noreferrer" target={'_blank'} className='ml-[10px] text-white flex flex-row items-center'>{<FaGithub />}</a>
                            <a href='https://www.linkedin.com/in/luka-gorgadze-a926a3241/' rel="noreferrer" target={'_blank'} className='ml-[10px] text-white flex flex-row items-center'>{<FaLinkedin />}</a>
                        </div>
                        <div className='Topics mt-[40px]'>
                            <div className='text-white font-thin mt-[10px]'><Link to='/algorithms' onClick={() => setCurPage('algorithms')}>Algorithms</Link></div>
                            <div className='text-white font-thin mt-[10px]'><Link to='/nla' onClick={() => setCurPage('nla')}>Numerical Linear Algebra</Link></div>
                            <div className='text-white font-thin mt-[10px]'><Link to='/simulations' onClick={() => setCurPage('simulations')}>Simulations</Link></div>
                        </div>
                    </div>
                </div>
                <div className='fixed ml-[275px] mt-[50vh]'>
                    <button className={`bg-primary rounded-r-[100px] py-[20px] pr-[15px] text-white `}
                        onClick={() => setToggle(!toggle)}>{toggle?<BsChevronLeft/>:<BsChevronRight/>}</button>
                </div>
            </Router>

        </div>

    )
}

export default Navbar