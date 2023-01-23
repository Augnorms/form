import React,{useState} from 'react'
import { Switch } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'

type Props = {
    state:boolean,
    HandlePlan:(checked: boolean)=>void,
    HandleSubscription:(e:React.MouseEvent<HTMLDivElement>)=>void
}

function SelectPlan(prop:Props) {

  return (

    <div className='planDiv'>
  
{ prop.state === false ?

        <div className='monthly'>

            <div className='arcade' id="Arcade-monthly" onClick={prop.HandleSubscription}>

                <div className='image'>
                   <img src={process.env.PUBLIC_URL + '/images/icon-arcade.svg'} alt='arcade'/>
                </div>

                <div className='desc'>
                    <p className='words'>Arcade</p>
                    <p className='price'>$9/mo</p>
                </div>

            </div>

            <div className='advance' id="Advance-monthly" onClick={prop.HandleSubscription}>

                <div className='image'>
                   <img src={process.env.PUBLIC_URL + '/images/icon-advanced.svg'} alt='advanced'/>
                </div>

                <div className='desc'>
                    <p className='words'>Advanced</p>
                    <p className='price'>$12/mo</p>
                </div>
                
            </div>

            <div className='pro' id="Pro-monthly" onClick={prop.HandleSubscription}>

                <div className='image'>
                   <img src={process.env.PUBLIC_URL + '/images/icon-pro.svg'} alt='pro'/>
                </div>

                <div className='desc'>
                    <p className='words'>Pro</p>
                    <p className='price'>$15/mo</p>
                </div>
                
            </div>

        </div>

:
        <div className='yearly'>

            <div className='arcade' id="Arcade-yearly" onClick={prop.HandleSubscription}>

                <div className='image'>
                   <img src={process.env.PUBLIC_URL + '/images/icon-arcade.svg'} alt='arcade'/>
                </div>

                <div className='desc'>
                    <p className='words'>Arcade</p>
                    <p className='price'>$9/yr</p>
                    <p className='detail'>2 months free</p>
                </div>

            </div>

            <div className='advance' id="Advance-yearly" onClick={prop.HandleSubscription}>

                <div className='image'>
                   <img src={process.env.PUBLIC_URL + '/images/icon-advanced.svg'} alt='advanced'/>
                </div>

                <div className='desc'>
                    <p className='words'>Advanced</p>
                    <p className='price'>$12/yr</p>
                    <p className='detail'>2 months free</p>
                </div>
                
            </div>

            <div className='pro' id="Pro-monthly" onClick={prop.HandleSubscription}>

                <div className='image'>
                   <img src={process.env.PUBLIC_URL + '/images/icon-pro.svg'} alt='pro'/>
                </div>

                <div className='desc'>
                    <p className='words'>Pro</p>
                    <p className='price'>$15/yr</p>
                    <p className='detail'>2 months free</p>
                </div>
                
            </div>

        </div>

}
        <div className='switch-btn'>

            <div className={prop.state === false ? 'active' : 'month'}>
               <p>Monthly</p>
            </div>

            <div className='switch'>
                <Switch id="sw-btn" defaultChecked={prop.state} onChange={prop.HandlePlan}/>
            </div>

            <div className={prop.state === true ? 'active' : 'year'}>
               <p>Yearly</p>
            </div>

        </div>

    </div>
  )
}

export default SelectPlan