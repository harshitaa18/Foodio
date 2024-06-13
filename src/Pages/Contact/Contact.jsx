import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <h1>Contact Us</h1>
        <p>We love hearing from our customers. Feel free to share your experience or ask any questions you may have.</p>
        <div className="form">
        <div className="form-left">
        <iframe width="525" height="500" title='contact' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=525&amp;height=500&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
        </div>
        <div className="form-right">
            <input type="text" placeholder="First Name" id="" />
            <input type="text" placeholder="Last Name" id="" />
            <input type="text" placeholder="Email address" id="" />
            <input type="text" placeholder="Subject" id="" />
            <textarea type="text" placeholder="Message" id="" />
            <button>Submit</button>
        </div>
        </div>
    </div>
  )
}

export default Contact