import { FiColumns, FiDownload, FiHeadphones, FiHome } from 'react-icons/fi'
import './styles.css'

export default function LeftNav() {
    return (
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
    )
}