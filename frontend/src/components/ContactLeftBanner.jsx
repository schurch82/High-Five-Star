import { HiStar,HiOutlineMail,HiOutlinePhone } from "react-icons/hi"
import { IoLocationOutline } from "react-icons/io5";


function ContactLeftBanner(){
    return(
        <div className="leftbanner">
            <div className="logo">
                Hire Five Star <br />
                <HiStar /><HiStar /><HiStar /><HiStar /><HiStar />

            </div>

            <div className='titlelist'>
                <ul>
                    <li><IoLocationOutline/> 91 E. Fake Street Gisonia</li>
                    <li><HiOutlineMail/> contact@hirefive.com</li>
                    <li><HiOutlinePhone/> 777-555-993</li>
                </ul>
            </div>

        </div>
    )
}

export default ContactLeftBanner 