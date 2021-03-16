import { FiChevronLeft, FiChevronRight, FiPlayCircle } from 'react-icons/fi'
import './styles.css'

export default function Recommended() {

    const playlists = [
        {
            image: 'https://wallpapercave.com/wp/Z0kmvgB.jpg',
            name: 'Rain Day',
        },
        {
            image: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
            name: 'Walking',
        }, {
            image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            name: 'Clean Home',
        }, {
            image: 'https://images.unsplash.com/photo-1505147704403-c2caf85db293?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80',
            name: 'With Friends',
        },
    ]


    return (
        <div className="recomendded-section">
            <div className="recomendded-header">
                <p className="my-recomendded-title">Recommended Playlists</p>
                <div className="recomendded-buttons">
                    <button>
                        <FiChevronLeft size="24" color="#FFF" />
                    </button>
                    <button>
                        <FiChevronRight size="24" color="#FFF" />
                    </button>
                </div>
            </div>
            <div className="recomendded-container">
                {
                    playlists.map(playlist => (
                        <div className="playlist-box">
                            <div className="image-container">
                                <img src={playlist.image} alt="playlist" />
                                <div className="play-playlist">
                                    <button><FiPlayCircle size="45" color="#FFF" /></button>
                                </div>
                            </div>
                            <span>{playlist.name}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}