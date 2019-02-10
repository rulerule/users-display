import React from 'react'
import DisplayPair from './DisplayPair'

const user = (props) => {
  const mailTo = `mailto:${props.email}`
  const callTo = `callto:${props.phone}`
  return (
    <div className="user-wrapper">
      <header>
        <img src="https://www.clipartmax.com/png/small/1-15038_free-vector-computer-user-outline-clip-art-user-clipart.png" alt="Free Vector Computer User Outline Clip Art - User Clipart @clipartmax.com"/>
        <span>{props.name}</span>
      </header>
      <DisplayPair
        property= 'email'
        label = 'email:'
        value = {props.email}
      />
      <DisplayPair
        property= 'phone'
        label = 'phone:'
        value = {props.phone}
      />
      <footer>
          <a href={callTo}>
            <img src="https://www.clipartmax.com/png/small/2-24180_black-phone-clipart-font-awesome-phone-icon-png.png" alt="Black Phone Clipart - Font Awesome Phone Icon Png @clipartmax.com"/>
          </a>
          <a href={mailTo}>
            <img src="https://www.clipartmax.com/png/small/22-225984_icon-letter-mail-17-129135932-626%C3%97448-pixels-email-icon-black-and-white.png" alt="Icon Letter Mail 17 129135932 626×448 Pixels - Email Icon Black And White Simple @clipartmax.com"/>
          </a>
      </footer>
    </div>
  )
}

export default user
