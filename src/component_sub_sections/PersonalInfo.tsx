import React from 'react'

type Props = {
  change:{
    name:string,
    email:string,
    phone:string
  },
  Handlechange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
  empty:{
    name:boolean,
    email:boolean,
    phone:boolean
  }
}

function PersonalInfo(prop:Props) {
  return (
    <div>

        <section className='input'>

            <div className='nameDiv'>
               <div className='form-text'>
                 <div><label>Name</label></div>

                 <div className='required'>{prop.empty.name === true ? 'This field is required' :
                 ''}</div>
               </div>

               <div>
                  <input type="text" id="name" placeholder='e.g. Stephen King' value={prop.change.name}
                  onChange={prop.Handlechange}/>
               </div>
            </div>

            <div className='emailDiv'>
             <div className='form-text'>
                 <div><label>Email Address</label></div>

                 <div className='required'>{prop.empty.email === true ? 'This field is required' :
                 ''}</div>
               </div>

               <div>
                  <input type="text" id="email" placeholder='e.g. Stephenking@lorem.com' 
                  value={prop.change.email} onChange={prop.Handlechange}/>
               </div>
            </div>

            <div className='phoneDiv'>
              <div className='form-text'>
               <div><label>Phone Number</label></div>

                 <div className='required'>{prop.empty.phone ? 'This field is required' :
                 ''}</div>
               </div>

               <div>
                  <input type="text" id="phone_number" placeholder='e.g. +1 234 567 890'
                  value={prop.change.phone} onChange={prop.Handlechange}/>
               </div>
            </div>

        </section>

    </div>
  )
}

export default PersonalInfo