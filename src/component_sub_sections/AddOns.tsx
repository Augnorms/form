import React from 'react'

type Props = {
    state:boolean,
    HandleAddons:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

function AddOns(prop:Props) {
  

  return (
    <div className='addons-contain'>

{prop.state === false ?
        <div className='monthly'>

            <div className='online'>

                <div className='check'>

                    <input type="checkbox" id="1" name='Online service' value="1" onChange={prop.HandleAddons}/>

                </div>

                <div className='disc'>
                    <h5>Online services</h5>
                    <p>Access to multiplayer games</p>
                    
                </div>

                <div className='price'>
                    <p>+$1/mo</p>
                </div>

            </div>

            <div className='large'>

                <div className='check'>

                   <input type="checkbox" id="2" name='Large storage' value="2" onChange={prop.HandleAddons}/>

                </div>

                <div className='disc'>
                    <h5>Large storage</h5>
                    <p>Extra 1TB of cloud save</p>
                    
                </div>

                <div className='price'>
                    <p>+$2/mo</p>
                </div>

            </div>

            <div className='custom'>

                <div className='check'>

                 <input type="checkbox" id="3" name='Customizable profile' value="2" onChange={prop.HandleAddons}/>

                </div>

                <div className='disc'>
                    <h5>Customizable profile</h5>
                    <p>Custom theme on your profile</p>
                    
                </div>

                <div className='price'>
                    <p>+$2/mo</p>
                </div>

            </div>

        </div>

:
        <div className='yearly'>

              <div className='online'>

                <div className='check'>

                    <input type="checkbox"  id="1" placeholder='onlineyear' name='Online service' value="1"
                    onChange={prop.HandleAddons}/>

                </div>

                <div className='disc'>
                    <h5>Online services</h5>
                    <p>Access to multiplayer games</p>
                    
                </div>

                <div className='price'>
                    <p>+$10/yr</p>
                </div>

            </div>

            <div className='large'>

                <div className='check'>

                    <input type="checkbox" id="2" placeholder='largeyear' name='Large storage' value="2"
                    onChange={prop.HandleAddons}/>

                </div>

                <div className='disc'>
                    <h5>Large storage</h5>
                    <p>Extra 1TB of cloud save</p>
                    
                </div>

                <div className='price'>
                    <p>+$20/yr</p>
                </div>

            </div>

            <div className='custom'>

                <div className='check'>

                    <input type="checkbox" id="3" placeholder='customyear' name='Customizable profile' value="2"
                    onChange={prop.HandleAddons}/>

                </div>

                <div className='disc'>
                    <h5>Customizable profile</h5>
                    <p>Custom theme on your profile</p>
                    
                </div>

                <div className='price'>
                    <p>+$20/yr</p>
                </div>

            </div>
            
         </div>
}       
    </div>
  )
}

export default AddOns