import {FiBell, FiChevronDown, FiChevronLeft, FiChevronRight, FiColumns, FiDownload, FiHeadphones, FiHelpCircle, FiHome, FiMic, FiSearch, FiSettings } from 'react-icons/fi';
import { FaFilter } from 'react-icons/fa';

import './styles/home.css'

function App() {
  return (
    <div className="container">
      <div className="music-section">
      </div>
      <div className="main-section">
        <div className="left-nav">
          <button className="logo"><img className="logo" alt="logo spotify" src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-green-logo-8.png" /></button>

          <ul className="icons-nav">
            <li><button><FiHome size="24" color="#FFF" /></button></li>
            <li><button><FiHeadphones size="24" color="#FFF" /></button></li>
            <li><button><FiColumns size="24" color="#FFF" /></button></li>
            <li><button><FiDownload size="24" color="#FFF" /></button></li>
          </ul>

          <div className="library-container">
            <span className="library-title">LIBRARY</span>
            <ul className="library-menu">
              <li className="library-item"><button>Favorites</button></li>
              <li className="library-item"><button>Podcasts</button></li>
              <li className="library-item"><button>Recent</button></li>
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
                  <button><FiMic size="20" color="#FFF" /></button>
                  <div className="separator"></div>
                  <button><FaFilter size="20" color="#FFF" /></button>
                </div>
              </div>
            </label>

            <div className="profile-section">
              <ul className="profile-menu">
                <li><button><FiSettings size="20" color="#FFF" /></button></li>
                <li><button><FiHelpCircle size="20" color="#FFF" /></button></li>
                <li><button><FiBell size="20" color="#FFF" /></button></li>
              </ul>
              <div className="profile">
                <button><img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt="Profile" /></button>
                <button><FiChevronDown size="24" color="#FFF" /></button>
              </div>
            </div>

          </div>
          <div className="content">
            <div className="left-content">
              <div className="playlist-section">
                <div className="playlist-header">
                  <p className="my-playlist-title">My Playlists</p>
                  <div className="playlist-buttons">
                    <button>
                      <FiChevronLeft size="24" color="#FFF" />
                    </button>
                    <button>
                      <FiChevronRight size="24" color="#FFF" />
                    </button>
                  </div>
                </div>
                <div className="playlist-container">
                  <div className="playlist-box">
                    <img src="https://static.highsnobiety.com/thumbor/QEQoC9kEVuoS3jwz8n_gJ632IUk=/1600x1067/static.highsnobiety.com/wp-content/uploads/2020/02/25170803/lofi-girl.jpg" alt="playlist" />
                    <span>Lo-fi hip hop</span>
                  </div>
                  <div className="playlist-box">
                    <img src="https://i.pinimg.com/564x/05/5f/b9/055fb9aa453dfc62e84af468b31c0fb7.jpg" alt="playlist" />
                    <span>Coffe time</span>
                  </div>
                  <div className="playlist-box">
                    <img src="https://i.pinimg.com/736x/ca/10/2a/ca102ab6e31529c2a0c1034dc99d9197.jpg" alt="playlist" />
                    <span>Coding</span>
                  </div>
                  <div className="playlist-box">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/81voUY21ZkL._SL1500_.jpg" alt="playlist" />
                    <span>Best of J Cole</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="friends-section">
                <div className="friends-box">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
