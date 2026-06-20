import { A } from '@solidjs/router'
import { For } from 'solid-js'
import Footer from '../components/Footer'
import { CLOUD } from '../cloud'
import './Zines.css'

const Logo = `${CLOUD}/zine_logo.png`

const zineOnePages = [
  'CoverOne.jpg',
  'pageOne.jpg',
  'pageTwoThree.jpg',
  'pageFourFive.jpg',
  'pageSixSeven.jpg',
  'pageEightNine.jpg',
  'pageTenEleven.jpg',
  'pageTwelveThirteen.jpg',
  'centerpage.jpg',
  'pageSixteenSeventeen.jpg',
  'pageEighteenNineteen.jpg',
  'pageTwentyTwentyOne.jpg',
  'pageTwentyTwoTwentyThree.jpg',
  'pageTwentyFourTwentyFive.jpg',
  'pageTwentySixTwentySeven.jpg',
].map((name) => `${CLOUD}/zine-one/${name}`)

export default function ZineOne() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div class="backgroundZinesPage">
      <img onClick={scrollToTop} src={Logo} class="zinesImage" />

      <For each={zineOnePages}>
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
