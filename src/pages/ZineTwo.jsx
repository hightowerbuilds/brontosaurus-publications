import { A } from '@solidjs/router'
import { For } from 'solid-js'
import Footer from '../components/Footer'
import { CLOUD } from '../cloud'
import './Zines.css'

const Logo = `${CLOUD}/zine_logo.png`

// Only the cover scan exists so far. Add more filenames here as interior pages
// become available and they'll render automatically.
const zineTwoPages = [
  'ZineTwoCover.jpg',
].map((name) => `${CLOUD}/zine-two/${name}`)

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
