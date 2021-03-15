import ReactJKMusicPlayer from 'react-jinke-music-player';

import 'react-jinke-music-player/assets/index.css';

import riptide from '../../assets/riptide.mp3'
import rise from '../../assets/rise.mp3'
import saveyourtears from '../../assets/saveyourtears.mp3'
import getyou from '../../assets/getyou.mp3'

const riseCover = 'https://cdn.dribbble.com/users/1785966/screenshots/7732630/music.catalog-dribbble-2_4x.jpg'
const riptideCover = 'https://i.pinimg.com/originals/dc/16/63/dc166384c1beafd1ad988c7413cf0f82.jpg'
const saveytCover = 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png'
const getyouCover = 'https://images.genius.com/8892ed869dbb2b3ea29bc8b810b02668.831x831x1.jpg'

export default function MusicPlayer() {

  const audiolist = [
    {
      cover: riptideCover,
      musicSrc: riptide,
      name: 'Riptide',
      singer: 'Vance Joy',
    },
    {
      cover: saveytCover,
      musicSrc: saveyourtears,
      name: 'Save your tears',
      singer: 'The Weeknd',
    },
    {
      cover: getyouCover,
      musicSrc: getyou,
      name: 'Get You',
      singer: 'Daniel Caesar ft Kali Uchis',
    },
    {
      cover: riseCover,
      musicSrc: rise,
      name: 'Rise',
      singer: 'The Glitch Mob, Mako, and The Word Alive',
    },
  ]

  return (
    <div>
      <ReactJKMusicPlayer
        audioLists={audiolist}
        mode="full"
        autoPlay={false}
        toggleMode={false}
        responsive={false}
        showReload={false}
        showDownload={false}
        showDestroy={false}
        showThemeSwitch={false}
        showPlayMode={false}
        glassBg={true}
      />
    </div>
  )
}