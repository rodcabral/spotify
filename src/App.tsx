import { FiArrowLeft, FiArrowRight, FiBell, FiChevronDown, FiColumns, FiDownload, FiHeadphones, FiHelpCircle, FiHome, FiMic, FiSearch, FiSettings } from 'react-icons/fi';
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
                <li><FiSettings size="20" color="#FFF" /></li>
                <li><FiHelpCircle size="20" color="#FFF" /></li>
                <li><FiBell size="20" color="#FFF" /></li>
              </ul>
              <div className="profile">
                <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt="Profile" />
                <FiChevronDown size="24" color="#FFF" />
              </div>
            </div>

          </div>
          <div className="content">
            <div className="left-content">
              <div className="playlist-section">
                <div className="playlist-header">
                  <p className="my-playlist-title">My Playlists</p>
                  <div className="playlist-buttons">
                    <FiArrowLeft size="24"  color="#FFF"/>
                    <FiArrowRight size="24"  color="#FFF" style={{marginLeft: 30}}/>
                  </div>
                </div>
                <div className="playlist-container">
                  <div className="playlist-box">
                    <img src="https://static.highsnobiety.com/thumbor/QEQoC9kEVuoS3jwz8n_gJ632IUk=/1600x1067/static.highsnobiety.com/wp-content/uploads/2020/02/25170803/lofi-girl.jpg" alt="playlist"/>
                    <span>Lo-fi</span>
                  </div>
                  <div className="playlist-box">
                    <img src="https://i.pinimg.com/564x/05/5f/b9/055fb9aa453dfc62e84af468b31c0fb7.jpg" alt="playlist"/>
                    <span>Coffe time</span>
                  </div>
                  <div className="playlist-box">
                    <img src="https://i.pinimg.com/736x/ca/10/2a/ca102ab6e31529c2a0c1034dc99d9197.jpg" alt="playlist"/>
                    <span>Coding</span>
                  </div>
                  <div className="playlist-box">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/81voUY21ZkL._SL1500_.jpg" alt="playlist"/>
                    <span>Best of J Cole</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="right-content">
              <div className="friends-section">
                <div className="friends-box">

                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="music-section">
      </div>
    </div>
  );
}

export default App;
