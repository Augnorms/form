import React from 'react'

type Props = {
  pages:number,
  HandlePageIncrement:(e:React.MouseEvent<HTMLButtonElement>)=>void,
  HandlePageDecrement:(e:React.MouseEvent<HTMLButtonElement>)=>void
}

export default function SlideArea(prop:Props) {


  return (
    <div className="sidebar_body">
      
         <img src={process.env.PUBLIC_URL + "/images/bg-sidebar-desktop.svg"} 
         width="100%" height="100%" alt="image1" id="desktop-img"/>
       
         <img src={process.env.PUBLIC_URL + "/images/bg-sidebar-mobile.svg"} 
         width="100%" height="100%" alt="image1" id="mobile-img"/>
       

       <div className='selectors'>

           <div className='step-container'>

            <div className='number'>

                <div className={ prop.pages === 1 ?  'num_container_active' : 'num_container'}>1</div>

            </div>

            <div className='descript'>
               <p id="p1">STEP 1</p><br/>
               <p id="p2">YOUR INFO</p>
            </div>
            
           </div> 


           <div className='step-container'>

            <div className='number'>

                <div className={ prop.pages === 2 ? 'num_container_active' : 'num_container'}>2</div>

            </div>

            <div className='descript'>
               <p id="p1">STEP 2</p><br/>
               <p id="p2">SELECT PLAN</p>
            </div>
            
           </div> 


           <div className='step-container'>

            <div className='number'>

                <div className={ prop.pages === 3 ? 'num_container_active' : 'num_container'}>3</div>

            </div>

            <div className='descript'>
               <p id="p1">STEP 3</p><br/>
               <p id="p2">ADD-ONS</p>
            </div>
            
           </div> 


           <div className='step-container'>

            <div className='number'>

                <div className={ prop.pages === 4 ? 'num_container_active' : 'num_container'}>4</div>

            </div>

            <div className='descript'>
               <p id="p1">STEP 4</p><br/>
               <p id="p2">SUMMARY</p>
            </div>
            
           </div> 

        </div>
    </div>
  )
}
