import './styles/layout.css'

import MusicPlayer from './components/MusicPlayer'
import FriendsSection from './components/Friends';
import MyPlaylist from './components/MyPlaylist';
import Header from './components/Header';
import LeftNav from './components/LeftNav';

function App() {

  return (
    <div className="container">
      <MusicPlayer/>
      <div className="main-section">
        <LeftNav/>
        <div className="right-section">
            <Header/>
          <div className="content">
            <div className="left-content">
              <MyPlaylist/>
            </div>
            <div className="right-content">
              <FriendsSection/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
