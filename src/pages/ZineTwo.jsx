import { A } from '@solidjs/router'
import { For } from 'solid-js'
import Footer from '../components/Footer'
import './Zines.css'

import Logo from '../assets/zine_logo.png'
import ZineTwoCover from '../assets/ZineTwoCover.jpg'

// Only the cover scan exists so far. Add interior page imports here as they
// become available and they'll render automatically.
const zineTwoPages = [
  ZineTwoCover,
]

export default function ZineTwo() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div class="backgroundZinesPage">
      <img onClick={scrollToTop} src={Logo} class="zinesImage" />

      <For each={zineTwoPages}>
        {(page) => (
          <div class="zineOneCoverBox">
            <img src={page} />
          </div>
        )}
      </For>

      <A href="/">
        <Footer />
      </A>
    </div>
  )
}
