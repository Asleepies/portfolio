import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <div className="page" style={{paddingTop:0}}>
            <h2>Projects</h2>
            <div className='projectPage'>
    
                <div> <a href='http://www.asleepiesceramics.com' className='projLink'>
                Asleepies Ceramics</a>:
                <p className='projBlurb'>An e-Commerce site built on the PERN stack<br/>
                User, Cart, and Checkout systems with Paypal integration</p>
                </div>

                <div> <a href='https://asleepies.github.io/wavelength/' className='projLink'> 
                Wavelength</a>:
                <p className='projBlurb'>A browser game based on the party game Wavelength. Built with vanilla HTML, CSS, & JS</p>
                </div>

                <div> <a href='https://asleepies.github.io/wordalso/' className='projLink'>
                Wordle</a>:
                <p className='projBlurb'>A clone of the word game. Built with HTML, CSS, & JS</p>
                </div>

                <div><a href='https://asleepies.github.io/DinoRunner/' className='projLink'>
                Dino Runner</a>:
                <p className='projBlurb'>A infinite runner game built with Phaser.js</p>
                </div>
                
    
            </div>
        </div>
    )
}