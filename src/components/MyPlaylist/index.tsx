import { FiChevronLeft, FiChevronRight, FiPlayCircle } from 'react-icons/fi'
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
                    <div className="image-container">
                        <img src="https://static.highsnobiety.com/thumbor/QEQoC9kEVuoS3jwz8n_gJ632IUk=/1600x1067/static.highsnobiety.com/wp-content/uploads/2020/02/25170803/lofi-girl.jpg" alt="playlist" />
                        <div className="play-playlist">
                            <button><FiPlayCircle size="45" color="#FFF"/></button>
                        </div>
                    </div>
                    <span>Lo-fi</span>
                </div>
                <div className="playlist-box">
                    <img src="https://i.pinimg.com/564x/05/5f/b9/055fb9aa453dfc62e84af468b31c0fb7.jpg" alt="playlist" />
                    <span>Coffe time</span>
                </div>
                <div className="playlist-box">
                    <img src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80" alt="playlist" />
                    <span>Coding</span>
                </div>
                <div className="playlist-box">
                    <img src="https://cutewallpaper.org/21/trippy-art-wallpaper/iPhone-Wallpaper-Psychedelic-art,-Art,-Cg-artwork-.jpg" alt="playlist" />
                    <span>Random</span>
                </div>
            </div>
        </div>
    )
}