
import React, {useState, useEffect} from 'react'

export default function Contact() {
    // const [from, setFrom] = useState('')
    // const [email, setEmail] = useState('')
    // const [subject, setSubject] = useState('')
    // const [message, setMessage] = useState('')
    // const [isFilled, setIsFilled] = useState(false)
    // const [wasSent, setWasSent] = useState(false)
    // const [alert, setAlert] = useState<string | null>(null)

    // useEffect(()=> {
    //     setIsFilled((from && email && message ) ? true : false)
    // })

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const f = event.target.name
    //     const edit = event.target.value
    //     switch(f) {
    //         case 'fromName': setFrom(edit);
    //             break;
    //         case 'fromEmail': setEmail(edit);
    //             break;
    //         case 'fromSubject': setSubject(edit);
    //             break;
    //         case'fromBody': setMessage(edit);
    //             break;
    //     } 
    // }
    // const handleSubmit = async ( event: React.MouseEvent<HTMLButtonElement> ) => {
    //     event.preventDefault()
    //     // setAlert(null)
    //     console.log('send')
        
    // }

    // const handleSend = async () => {
    //     const body = {
    //         fromName: from,
    //         fromEmail: email,
    //         fromSubject: subject,
    //         fromBody: message
    //     }
    //     return fetch('/api/contact', {
    //         method: 'POST',
    //         headers: {
    //             'content-type':'application/json'
    //         },
    //         body: JSON.stringify(body)
    //     })
    //     .then(res =>{ if (res.ok) {
    //         setFrom('');
    //         setEmail('');
    //         setSubject('');
    //         setMessage('');
    //         setAlert('Your message has been sent!')
    //     }})
    // }

    return (
        <div className="page">
            <h2 style={{margin:'.25em'}}>Contact Me</h2>
            <p>You can reach me at: </p>
            <a href="mailto:asleepies@gmail.com" className='contactLink'>
            Asleepies@gmail.com</a>

            {/* <form id='contactForm'>
                <div id='contactDetails'>
                    <input type="text" name="fromName" id="fromName" required
                        placeholder='Name' value={from} onChange={handleChange}/>
                    
                    <input type="email" name="fromEmail" id="fromEmail" required
                        placeholder='Email' value={email} onChange={handleChange}/>

                    <input type="text" name="fromSubject" id="fromSubject"
                        placeholder='Subject' value={subject} onChange={handleChange}/>
                </div>

                <div id='contactMessage'>
                    <textarea  name="fromBody" id="fromBody" required rows={5} cols={36}
                         placeholder='Message' value={message} onChange={handleChange}/>
                </div>
                <button type="submit" className="contactSubmit" 
                onClick={handleSubmit} disabled={!isFilled}> Send</button>
            </form> */}
        </div>
    )
}