import React from 'react'

type Props = {
    subLabel:string,
    subPrice:number,
    subDesc:string,
    addons:{
        id:number,
        label:string,
        amount:number
    }[]
}

function Finishing(prop:Props) {


    //Math operation to get total for subscription
    let res = prop.addons.map(data=>data.amount)

    let reduce = res.reduce((cur, acc)=>cur + acc, 0)

    let total = prop.subPrice + reduce



  return (
    <div className='finish-contain'>

        <div className='summary'>
            
           <div className='line1'>
               <div className='desc'>
                  <p>{prop.subLabel} ({prop.subDesc})</p>
               </div>

               <div className='amt'>
                  <p>${prop.subPrice}/mo</p>
               </div>
           </div>

           {prop.addons.map(addon => (
             <div className='line2' key={addon.id}>
               <div className='desc'>
               <p>{addon.label}</p>
               </div>
               <div className='amt'>
                  <p>+${addon.amount}/mo</p>
               </div>
             </div>
           ))} 

        </div>

        <div className='total'>
            <div className='desc'>
               <p>Total(per month)</p>  
            </div>

            <div className='amount'>
               <p>+${total}/mo</p>
            </div>
        </div>

    </div>
  )
}

export default Finishing