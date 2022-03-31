import ContactLeftBanner from "../components/ContactLeftBanner"
import { Link } from "react-router-dom"


function ContactPage() {

    return<>
        <div className='container'>
        <ContactLeftBanner />
        <section className='rightbanner'>
            <div className='contactcontainer'>
                <section className='heading'>
                    <p>Contact Us</p>
                </section>
                    <section className='form'>
                        <form  >
                            <div className="form-group">
                                <input 
                                type="text" 
                                className="form-control" 
                                id='contactname'
                                name='contactname' 
                                placeholder='Your Name' 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                type="email" 
                                className="form-control" 
                                id='email'
                                name='email' 
                                placeholder='Enter Your Email' 
                                />
                            </div>
                            <div className="form-group">
                                <textarea 
                                type="text" 
                                className="form-control" 
                                id='message'
                                name='message'  
                                placeholder='Write Your Message' 
                                />
                            </div>
                            <div className="form-group">
                                <button type='submit' className='btn btn-block'>Send Message</button>
                            </div>
                            <div className='form-group'>
                            <ul>
                                <li>
                                     <Link to='/Login'>
                                        <u> Back to Login Page</u>  
                                    </Link>
                                </li>
                            </ul>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        </div>
    </>

}

export default ContactPage