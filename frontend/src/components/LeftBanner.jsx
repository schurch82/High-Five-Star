import {HiStar} from 'react-icons/hi'

function LeftBanner(){
    return(
        <div className="leftbanner">
            <div className="logo">
                Hire Five Star <br />
                <HiStar /><HiStar /><HiStar /><HiStar /><HiStar />

            </div>
            <div className='slogan'>
                <p>An easy way to find and hire companies and services</p>
            </div>
            <div className='titlelist'>
                <ul>
                    <li><HiStar />Free to use</li>
                    <li><HiStar />Connect with Providers</li>
                    <li><HiStar />Get latest reviews</li>
                    <li><HiStar />Get quotes and hire</li>
                    <li><HiStar />The more you hire, the more you save</li>
                </ul>
            </div>
            
 
        </div>
    )
}

export default LeftBanner 