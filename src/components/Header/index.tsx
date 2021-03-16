import { BsFilterLeft } from 'react-icons/bs'
import { FiBarChart, FiBell, FiChevronDown, FiMic, FiSearch, FiSettings } from 'react-icons/fi'
import './styles.css'

export default function Header() {
    return (
        <div className="header">
            <label htmlFor="searchinput">
                <div className="input-box">
                    <FiSearch size="20" color="rgba(255, 255, 255, 0.7)" />
                    <input id="searchinput" type="text" placeholder="Search..." />
                    <div className="input-options">
                        <button><FiMic size="20" color="#FFF" /></button>
                        <div className="separator"></div>
                        <button><BsFilterLeft size="20" color="#FFF" /></button>
                    </div>
                </div>
            </label>

            <div className="profile-section">
                <ul className="profile-menu">
                    <li><button><FiSettings size="20" color="#FFF" /></button></li>
                    <li><button><FiBarChart size="20" color="#FFF" /></button></li>
                    <li><button><FiBell size="20" color="#FFF" /></button></li>
                </ul>
                <div className="profile">
                    <button><img src="https://images.unsplash.com/photo-1563240619-44ec0047592c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Profile" /></button>
                    <button><FiChevronDown size="24" color="#FFF" /></button>
                </div>
            </div>

        </div>
    )
}