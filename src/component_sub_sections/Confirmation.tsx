import React from 'react'

function Confirmation() {
  return (
    <div className='confirm_contain'>
        <div className='image'>
           <div className='icon'>
               <img src={process.env.PUBLIC_URL + "/images/icon-thank-you.svg"}/>
           </div>
        </div>

        <div className='thankyou'>

            <h1>Thank you!</h1>

        </div>

        <div className='message'>

            <p>Thanks for confirming your subscription! We hope you have <br/> fun using our platform. 
                If you ever need support, please feel free <br/> to email us at suppot@loremgaming.com</p>

        </div>
    </div>
  )
}

export default Confirmation