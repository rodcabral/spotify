import {FiBell, FiChevronDown, FiChevronLeft, FiChevronRight, FiColumns, FiDownload, FiHeadphones, FiHelpCircle, FiHome, FiMic, FiPlayCircle, FiSearch, FiSettings } from 'react-icons/fi';
import { FaFilter } from 'react-icons/fa';

import './styles/home.css'

function App() {
  return (
    <div className="container">
      <div className="music-section">
        <div className="music">
          <img src="https://i.pinimg.com/originals/5d/97/1f/5d971f49f2ccbda4f9a8ee2bc98f4a16.jpg" alt="music cover"/>
          <div className="about-music">
            <p className="music-title">Riptide</p>
            <p className="artist-name">Vance joy</p>
          </div>
        </div>
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
                <button><img src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Profile" /></button>
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
                <p className="friends-title">Friends Activity</p>
                <div className="friends">
                  <div className="friend">
                    <img src="https://images.unsplash.com/photo-1534564533601-4d3e3d9fd229?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="friend"/>
                    <div className="friend-listening">
                      <p className="friend-name">Willian</p>
                      <p className="friend-music">Atlantis</p>
                      <p className="friend-artist">Seafret</p>
                      <div className="play-friend-song">
                        <FiPlayCircle size="20" color="#FFF"/>
                        <span>Relaxing</span>
                      </div>
                    </div>
                  </div>
                  <div className="friend">
                    <img src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="friend"/>
                    <div className="friend-listening">
                      <p className="friend-name">Tracie</p>
                      <p className="friend-music">HIGHEST IN THE ROOM</p>
                      <p className="friend-artist">Travis Scott</p>
                      <div className="play-friend-song">
                        <FiPlayCircle size="20" color="#FFF"/>
                        <span>Trapzin</span>
                      </div>
                    </div>
                  </div>
                  <div className="friend">
                    <img src="https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80" alt="friend"/>
                    <div className="friend-listening">
                      <p className="friend-name">Mike</p>
                      <p className="friend-music">Heart Afire</p>
                      <p className="friend-artist">Defqwop</p>
                      <div className="play-friend-song">
                        <FiPlayCircle size="20" color="#FFF"/>
                        <span>Animadão</span>
                      </div>
                    </div>
                  </div>
                  <div className="friend">
                    <img src="https://images.unsplash.com/photo-1517374096549-0b818e3de484?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="friend"/>
                    <div className="friend-listening">
                      <p className="friend-name">Celine</p>
                      <p className="friend-music">Crazy</p>
                      <p className="friend-artist">Aerosmith</p>
                      <div className="play-friend-song">
                        <FiPlayCircle size="20" color="#FFF"/>
                        <span>Rock oldschool</span>
                      </div>
                    </div>
                  </div>
                  <div className="friend">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="friend"/>
                    <div className="friend-listening">
                      <p className="friend-name">Alice</p>
                      <p className="friend-music">Aurora</p>
                      <p className="friend-artist">Runaway</p>
                      <div className="play-friend-song">
                        <FiPlayCircle size="24" color="#FFF"/>
                        <span>Fazendo nada</span>
                      </div>
                    </div>
                  </div>
                  <div className="friend">
                    <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80" alt="friend"/>
                    <div className="friend-listening">
                      <p className="friend-name">Ryan</p>
                      <p className="friend-music">Circles</p>
                      <p className="friend-artist">Post Malone</p>
                      <div className="play-friend-song">
                        <FiPlayCircle size="24" color="#FFF"/>
                        <span>Caboaideia</span>
                      </div>
                    </div>
                  </div>
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
