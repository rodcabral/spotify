import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './styles.css'

export default function MyPlaylist() {
    return (
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
    )
}