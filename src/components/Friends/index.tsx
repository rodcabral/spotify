import './styles.css'

import { FiPlayCircle } from "react-icons/fi";

export default function FriendsSection() {
    return (
        <div className="friends-section">
            <p className="friends-title">Friends Activity</p>
            <div className="friends">
                <div className="friend">
                    <img src="https://images.unsplash.com/photo-1534564533601-4d3e3d9fd229?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="friend" />
                    <div className="friend-listening">
                        <p className="friend-name">Willian</p>
                        <p className="friend-music">Atlantis</p>
                        <p className="friend-artist">Seafret</p>
                        <div className="play-friend-song">
                            <button><FiPlayCircle size="24" color="#e2e2e2" /></button>
                            <span>Relaxing</span>
                        </div>
                    </div>
                </div>
                <div className="friend">
                    <img src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="friend" />
                    <div className="friend-listening">
                        <p className="friend-name">Tracie</p>
                        <p className="friend-music">HIGHEST IN THE ROOM</p>
                        <p className="friend-artist">Travis Scott</p>
                        <div className="play-friend-song">
                            <button><FiPlayCircle size="24" color="#e2e2e2" /></button>
                            <span>Trapzin</span>
                        </div>
                    </div>
                </div>
                <div className="friend">
                    <img src="https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80" alt="friend" />
                    <div className="friend-listening">
                        <p className="friend-name">Mike</p>
                        <p className="friend-music">Heart Afire</p>
                        <p className="friend-artist">Defqwop</p>
                        <div className="play-friend-song">
                            <button><FiPlayCircle size="24" color="#e2e2e2" /></button>
                            <span>Animadão</span>
                        </div>
                    </div>
                </div>
                <div className="friend">
                    <img src="https://images.unsplash.com/photo-1517374096549-0b818e3de484?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="friend" />
                    <div className="friend-listening">
                        <p className="friend-name">Celine</p>
                        <p className="friend-music">Crazy</p>
                        <p className="friend-artist">Aerosmith</p>
                        <div className="play-friend-song">
                            <button><FiPlayCircle size="24" color="#e2e2e2" /></button>
                            <span>Oldschool</span>
                        </div>
                    </div>
                </div>
                <div className="friend">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="friend" />
                    <div className="friend-listening">
                        <p className="friend-name">Alice</p>
                        <p className="friend-music">Aurora</p>
                        <p className="friend-artist">Runaway</p>
                        <div className="play-friend-song">
                            <button><FiPlayCircle size="24" color="#e2e2e2" /></button>
                            <span>Fazendo nada</span>
                        </div>
                    </div>
                </div>
                <div className="friend">
                    <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80" alt="friend" />
                    <div className="friend-listening">
                        <p className="friend-name">Ryan</p>
                        <p className="friend-music">Circles</p>
                        <p className="friend-artist">Post Malone</p>
                        <div className="play-friend-song">
                            <button><FiPlayCircle size="24" color="#e2e2e2" /></button>
                            <span>Random</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}