import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './styles.css'

export default function Recommended() {
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
                <div className="recomendded-box">
                    <img src="https://wallpapercave.com/wp/Z0kmvgB.jpg" alt="recomendded" />
                    <span>Rain Day</span>
                </div>
                <div className="recomendded-box">
                    <img src="https://images.unsplash.com/photo-1487956382158-bb926046304a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="recomendded" />
                    <span>Walking</span>
                </div>
                <div className="recomendded-box">
                    <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="recomendded" />
                    <span>Clean home</span>
                </div>
                <div className="recomendded-box">
                    <img src="https://images.unsplash.com/photo-1505147704403-c2caf85db293?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80" alt="recomendded" />
                    <span>Best of J Cole</span>
                </div>
            </div>
        </div>
    )
}