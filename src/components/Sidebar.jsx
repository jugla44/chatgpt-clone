import React, { useState, useContext } from 'react'
import useDarkMode from '../hooks/useDarkMode'
import {
  MdClose, MdMenu, MdAdd, MdOutlineNightlight,
  MdOutlineWbSunny, MdOutlineLogout, MdOutlineQuestionAnswer
} from 'react-icons/md'
import { ChatContext } from '../context/chatContext';

/**
 * A sidebar component that displays a list of nav items and a toggle 
 * for switching between light and dark modes.
 * 
 * @param {Object} props - The properties for the component.
 */
const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [messages, addMessage, clearMessages] = useContext(ChatContext);
  /**
   * Toggles the dark mode.
   */
  const clearChat = () => clearMessages()

  return (
    <section className={` ${open ? "w-72" : "w-20 "} sidebar`}>
      <div className="sidebar__app-bar">
        <div className={`sidebar__app-logo ${!open && "scale-0 hidden"}`}>
          <span className='w-8 h-8'><img src="/bot.ico" alt="" /></span>
        </div>
        <h1 className={`sidebar__app-title ${!open && "scale-0 hidden"}`}>
          ChatGPT
        </h1>
        <div className='sidebar__btn-close' onClick={() => setOpen(!open)}>
          {open ? <MdClose className='sidebar__btn-icon' /> : <MdMenu className='sidebar__btn-icon' />}

        </div>
      </div>
      <div className="nav">
        <span className='nav__item  bg-light-white' onClick={clearChat}>
          <div className='nav__icons'>
            <MdAdd />
          </div>
          <h1 className={`${!open && "hidden"}`}>New chat</h1>
        </span>
      </div>

      <div className="nav__bottom">
        <DarkMode open={open} />
        <div className="nav">
          <span className="nav__item">
            <div className="nav__icons">
              <MdOutlineQuestionAnswer />
            </div>
            <h1 className={`${!open && "hidden"}`}>Update & FAQ</h1>
          </span>
        </div>
        <div className="nav">
          <span className="nav__item">
            <div className="nav__icons">
              <MdOutlineLogout />
            </div>
            <h1 className={`${!open && "hidden"}`}>Log out</h1>
          </span>
        </div>
      </div>
    </section >
  )
}

/**
 * A toggle for switching between light and dark modes.
 *
 * @param {Object} props - The properties for the component.
 * @param {boolean} props.open - Whether the sidebar is open or not.
 */
const DarkMode = (props) => {
  const [darkTheme, setDarkTheme] = useDarkMode();

  /**
   * Toggles the dark mode.
   */
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <div className="nav">
      <span className="nav__item" onClick={handleMode}>
        {darkTheme ? (
          <>
            <div className="nav__icons">
              <MdOutlineWbSunny />
            </div>
            <h1 className={`${!props.open && "hidden"}`}>Light mode</h1>
          </>
        ) : (
          <>
            <div className="nav__icons">
              <MdOutlineNightlight />
            </div>
            <h1 className={`${!props.open && "hidden"}`}>Night mode</h1>
          </>
        )}

      </span>
    </div>
  )
}

export default SideBar