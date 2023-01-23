import React,{useState} from 'react'
import '../component_sub_section_css/personalinfo.css'
import '../component_sub_section_css/selectplan.css'
import '../component_sub_section_css/addons.css'
import '../component_sub_section_css/finishing.css'
import '../component_sub_section_css/confirm.css'
import PersonalInfo from '../component_sub_sections/PersonalInfo'
import SelectPlan from '../component_sub_sections/SelectPlan'
import AddOns from '../component_sub_sections/AddOns'
import Finishing from '../component_sub_sections/Finishing'
import Confirmation from '../component_sub_sections/Confirmation'

//property state
type Props = {
  pages:number, 
  HandlePageIncrement:(e:React.MouseEvent<HTMLButtonElement>)=>void,
  HandlePageDecrement:(e:React.MouseEvent<HTMLButtonElement>)=>void,
  change:{
    name:string,
    email:string,
    phone:string
  },
  HandleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
  empty:{
    name:boolean,
    email:boolean,
    phone:boolean
  }
}

type Addons = {
  id:number,
  label:string,
  amount:number
}

export default function MainArea(prop:Props) {

//state for selecting plan
const[state, setState] = useState<boolean>(false)

const HandlePlan = (checked: boolean)=>{

    if(state === false){
        setState(true)
    }else{
        setState(false)
    }

}

//Handle selected subscription state selection
const[subLabel, setSubLabel] = useState<string>('')
const[subPrice, setSubPrice] = useState<number>(0)
const[subDesc, setSubDesc] = useState<string>('')

//selection subscription function
const HandleSubscription = (e:React.MouseEvent<HTMLDivElement>)=>{

   if(e.currentTarget.id === 'Arcade-monthly'){

     setSubLabel('Arcade')
     setSubPrice(9)
     setSubDesc('Monthly')

   }else if(e.currentTarget.id === 'Advance-monthly'){

    setSubLabel('Advance')
    setSubPrice(12)
    setSubDesc('Monthly')

   }else if(e.currentTarget.id === 'Pro-monthly'){

     setSubLabel('Pro')
     setSubPrice(15)
     setSubDesc('Monthly')

   }


   //yearly section

   if(e.currentTarget.id === 'Arcade-yearly'){

    setSubLabel('Arcade')
    setSubPrice(90)
    setSubDesc('Yearly')

  }else if(e.currentTarget.id === 'Advance-yearly'){

   setSubLabel('Advance')
   setSubPrice(120)
   setSubDesc('Yearly')

  }else if(e.currentTarget.id === 'Pro-yearly'){

    setSubLabel('Pro')
    setSubPrice(150)
    setSubDesc('Yearly')

  }
   
}

//handling addons
const[addons, setAddons] = useState<Addons[]>([])


const HandleAddons = (e:React.ChangeEvent<HTMLInputElement>)=>{

  if(e.currentTarget.name === 'Online service'){
    const myObj: Addons = {id:Number(e.currentTarget.id), label:e.currentTarget.name, 
      amount:Number(e.currentTarget.value)}

    setAddons([...addons, myObj])

  }else if(e.currentTarget.name === 'Large storage'){

    const myObj: Addons = {id:Number(e.currentTarget.id), label:e.currentTarget.name, 
      amount:Number(e.currentTarget.value)}

    setAddons([...addons, myObj])

  }else if(e.currentTarget.name === 'Customizable profile'){

    const myObj: Addons = {id:Number(e.currentTarget.id), label:e.currentTarget.name, 
      amount:Number(e.currentTarget.value)}

    setAddons([...addons, myObj])

  }


  //for the year section
  if(e.currentTarget.placeholder === 'onlineyear'){
    const myObj: Addons = {id:Number(e.currentTarget.id), label:e.currentTarget.name, 
      amount:Number(e.currentTarget.value)}

    setAddons([...addons, myObj])

  }else if(e.currentTarget.placeholder === 'largeyear'){

    const myObj: Addons = {id:Number(e.currentTarget.id), label:e.currentTarget.name, 
      amount:Number(e.currentTarget.value)}

    setAddons([...addons, myObj])

  }else if(e.currentTarget.placeholder === 'customyear'){

    const myObj: Addons = {id:Number(e.currentTarget.id), label:e.currentTarget.name, 
      amount:Number(e.currentTarget.value)}

    setAddons([...addons, myObj])

  }


}

// console.log(addons)

  return (
    <div className='form_body'>

      <div className='headings'>

{ prop.pages === 1 ? 
         <section className='step1'>
           <h1>Personal info</h1>
           <p>Please provde name, email address, and phone number.</p>
         </section>
: prop.pages === 2 ?
         <section className='step1'>
           <h1>Select your plan</h1>
           <p>You have the option of monthly or yearly billing.</p>
         </section>
:prop.pages === 3 ?
         <section className='step1'>
           <h1>Pick add-ons</h1>
           <p>Add-ons help enhance your gaming experience.</p>
         </section>
:
         <section className='step1'>
           <h1>Finishing up</h1>
           <p>Double-check everything looks OK before confirming.</p>
         </section>
}

      </div>
      

      <div className='components'>
{ prop.pages === 1 ?
        <PersonalInfo change={prop.change} Handlechange={prop.HandleChange} empty={prop.empty}/>
  :
  prop.pages === 2 ?
        <SelectPlan state={state} HandlePlan={HandlePlan}
        HandleSubscription={HandleSubscription}/>
  :
  prop.pages === 3 ?
        <AddOns state={state} HandleAddons={HandleAddons}/>
  :
  prop.pages === 4 ?
       <Finishing subLabel={subLabel} subPrice={subPrice} subDesc={subDesc} addons={addons}/>  
  :
       <Confirmation />                     
}
      </div>


        <div className='buttons-div'>
          { prop.pages > 1 ?

           <div className='backward-btn-div'>
             <button className='next-btn' onClick={prop.HandlePageDecrement}>Go Back</button>
           </div>

           :

           <div>

           </div>

          }

           <div className='forward-btn-div'>
             <button className='next-btn'onClick={prop.HandlePageIncrement}>{prop.pages === 4 ? 'confirm' :
             'Next Step'}</button>
             
           </div>

        </div>

    </div>
  )
}
