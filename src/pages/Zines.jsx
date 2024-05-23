import { NavLink } from "react-router-dom";
import Logo from '../images/zine_logo.png'
import './Zines.css'

import ZineOneCover from '../images/zineOne/CoverOne.jpg'
import ZineOnePageOne from '../images/zineOne/pageOne.jpg'
import ZineOnePageTwoThree from '../images/zineOne/pageTwoThree.jpg'
import ZineOnePageFourFive from '../images/zineOne/pageFourFive.jpg'
import ZineOnePageSixSeven from '../images/zineOne/pageSixSeven.jpg'
import ZineOnePageEightNine from '../images/zineOne/pageEightNine.jpg'
import ZineOnePageTenEleven from '../images/zineOne/pageTenEleven.jpg'
import ZineOnePageTwelveThirteen from '../images/zineOne/pageTwelveThirteen.jpg'
import ZineOneCenterPage from '../images/zineOne/centerpage.jpg'
import ZineOnePageSixteenSeventeen from '../images/zineOne/pageSixteenSeventeen.jpg'
import ZineOnePageEighteenNineteen from '../images/zineOne/pageEighteenNineteen.jpg'
import ZineOnePageTwentyTwentyOne from '../images/zineOne/pageTwentyTwentyOne.jpg'


export default function Zines() {

 
  return (

<div className="backgroundZinesPage">

   <p className="containerZinesPage">
   <NavLink className='backButtonZinesPage' to='/'>back</NavLink> 

   <br />
   <br />
   </p>



<img src={Logo} className="zinesImage"/>

<div className='zineOneCoverBox'>
<img src={ZineOneCover} />
</div>

<div className='zineOneCoverBox'>
<img src={ZineOnePageOne} />
</div>

<div className='zineOneCoverBox'>
<img src={ZineOnePageTwoThree} />
</div>
 
<div className='zineOneCoverBox'>
<img src={ZineOnePageFourFive} />
</div>

<div className='zineOneCoverBox'>
<img src={ZineOnePageSixSeven} />
</div>

<div className='zineOneCoverBox'>
<img src={ZineOnePageEightNine} />
</div>

<div className='zineOneCoverBox'>
<img src={ZineOnePageTenEleven} />
</div>

<div className='zineOneCoverBox'>
<img src={ZineOnePageTwelveThirteen} />
</div>

<div className='zineOneCoverBox'>
<img src={ZineOneCenterPage} />
</div>

<div className='zineOneCoverBox'>
<img src={ZineOnePageSixteenSeventeen} />
</div>

<div className='zineOneCoverBox'>
<img src={ZineOnePageEighteenNineteen} />
</div>

<div className='zineOneCoverBox'>
<img src={ZineOnePageTwentyTwentyOne} />
</div>

{/* <div className='zineOneCoverBox'>
<img src={ZineOnePageTwentyTwoTwentyThree} />
</div>

<div className='zineOneCoverBox'>
<img src={ZineOnePageTwentyFourTwentyFive} />
</div> 

<div className='zineOneCoverBox'>
<img src={ZineOnePageTwentySixTwentySeven} />
</div>  */}

</div>



    
  )
}
