import { FiBell, FiChevronDown, FiColumns, FiDownload, FiHeadphones, FiHelpCircle, FiHome, FiMic, FiSearch, FiSettings } from 'react-icons/fi';
import { FaFilter } from 'react-icons/fa';

import './styles/home.css'

function App() {
  return (
    <div className="container">
      <div className="main-section">
        <div className="left-nav">
          <img className="logo" alt="logo spotify" src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-green-logo-8.png" />

          <ul className="icons-nav">
            <li><a href="/"><FiHome size="24" color="#FFF" /></a></li>
            <li><a href="/"><FiHeadphones size="24" color="#FFF" /></a></li>
            <li><a href="/"><FiColumns size="24" color="#FFF" /></a></li>
            <li><a href="/"><FiDownload size="24" color="#FFF" /></a></li>
          </ul>

          <div className="library-container">
            <span className="library-title">LIBRARY</span>
            <ul className="library-menu">
              <li className="library-item"><a href="/">Favorites</a></li>
              <li className="library-item"><a href="/">Podcasts</a></li>
              <li className="library-item"><a href="/">Recent</a></li>
            </ul>
          </div>

        </div>
        <div className="right-section">
          <div className="header">
            <label htmlFor="searchinput">
              <div className="input-box">
                <FiSearch size="20" color="rgba(255, 255, 255, 0.7)" />
                <input id="searchinput" type="text" placeholder="Search..." />
                <div className="input-options">
                  <FiMic size="20" color="#FFF" />
                  <div className="separator"></div>
                  <FaFilter size="20" color="#FFF" />
                </div>
              </div>
            </label>

            <div className="profile-section">
              <ul className="profile-menu">
                <li><FiSettings size="20" color="#FFF"/></li>
                <li><FiHelpCircle size="20" color="#FFF"/></li>
                <li><FiBell size="20" color="#FFF"/></li>
              </ul>
              <div className="profile">
                <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt="Profile"/>
                <FiChevronDown size="24" color="#FFF"/>
              </div>
            </div>

          </div>
          <div className="content">

          </div>
        </div>
      </div>
      <div className="music-section">

      </div>
    </div>
  );
}

export default App;
