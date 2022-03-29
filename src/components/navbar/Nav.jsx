import React, {useState} from 'react'
import Navbar from './Navbar'
import SideBar from './sidebar/SideBar'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle =()=>{
        setIsOpen(!isOpen);
    }
  return (
    <>
        <SideBar isOpen={isOpen} toggle ={toggle}/>

        <Navbar setIsOpen={setIsOpen} isOpen={isOpen} toggle={toggle}/>

    </>
  )
}

export default Nav