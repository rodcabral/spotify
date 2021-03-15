import { FiPlayCircle, FiSkipBack, FiSkipForward, FiVolume2 } from 'react-icons/fi'
import './styles.css'

export default function MusicPlayer() {
    return (
        <div className="music-section">
            <div className="music">
                <img src="https://i.pinimg.com/originals/5d/97/1f/5d971f49f2ccbda4f9a8ee2bc98f4a16.jpg" alt="music cover" />
                <div className="about-music">
                    <p className="music-title">Riptide</p>
                    <p className="artist-name">Vance joy</p>
                </div>
            </div>
            <div className="music-player">
                <div className="player-options">
                    <button><FiSkipBack size="20" color="#FFF"/></button>
                    <button className="player"><FiPlayCircle size="28" color="#FFF"/></button>
                    <button><FiSkipForward size="20" color="#FFF"/></button>
                </div>
                <div className="audio-slider-container">
                    <span className="audio-time">1:50</span>
                    <div className="audio-slider">
                        <div className="atual-audio-slider"></div>
                    </div>
                    <span className="audio-time">3:25</span>
                </div>
            </div>
            <div className="volume-options">
                <button><FiVolume2 size="20" color="#FFF"/></button>
                <div className="volume-slider"></div>
            </div>
        </div>
    )
}