import { A } from '@solidjs/router'
import { CLOUD } from '../cloud'
import Background from '../components/Background'
import './Home.css'

const BrontoHeader = `${CLOUD}/bronto-header.png`
const CityBronto = `${CLOUD}/cityBronto.jpg`

export default function Home() {
  return (
    <div class="outerContainer">
      <Background />

      <div class="headingContainer">
        <img class="headingImg" src={BrontoHeader} alt="Brontosaurus Publications" />
      </div>

      <section class="mainSection">
        <img class="mainImg" src={CityBronto} alt="City Brontosaurus" />
      </section>

      <p class="navP">
        <A class="zineNavLink" href="/zine-one">zine one</A>
        <A class="zineNavLink" href="/zine-two">zine two</A>
      </p>
    </div>
  )
}
