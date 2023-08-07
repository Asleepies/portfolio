import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <div className="page" style={{paddingTop:0}}>
            <h2>Projects</h2>
            <div className='projectPage'>
    
                <div> <a href='http://www.asleepiesceramics.com' className='projLink'>
                Asleepies Ceramics</a>:
                <p className='projBlurb'>An e-Commerce site built on the PERN stack<br/>
                Front-End: React, React-Router-Dom, React-Bootstrap, Typescript<br/>
                Back-End: Express, Sequelize, PostgreSQL, NodeMailer</p>
                </div>

                <div> <a href='https://evanandij.github.io/wordalso/' className='projLink'>
                Wordle</a>:
                <p className='projBlurb'>A wordle clone. <br/>
                Front-End: React, React-Bootstrap, CSS</p>
                </div>
        
                <div> <a href='https://evanandij.github.io/wavelength/' className='projLink'> 
                Wavelength</a>:
                <p className='projBlurb'>A browser game based on the party game Wavelength. <br/>
                Front-End: HTML, CSS, Javascript</p>
                </div>

                <div><a href='https://evanandij.github.io/DinoRunner/' className='projLink'>
                Dino Runner</a>:
                <p className='projBlurb'>A infinite runner game <br/>
                Front-End: Javascript, Phaser.js</p>
                </div>
                
    
            </div>
        </div>
    )
}