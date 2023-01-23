import React,{useState} from 'react';
import './App.css'
import './components_css/slidearea.css'
import './components_css/mainarea.css'
import SlideArea from './components/SlideArea'
import MainArea from './components/MainArea'


type ChangeEvent = {
  name:string,
  email:string,
  phone: string
}

type ChangeState = {
  name:boolean,
  email:boolean,
  phone:boolean
}

function App() {

//handle input 
const[change, setChange] = useState<ChangeEvent>({
  name: '',
  email: '',
  phone: ''
})

//state for handling number increment
const[page, setPage] = useState<number>(1)

//initialize required
const[require, setRequire] = useState<boolean>(false)


//handle empty string error
const[empty, setEmpty] = useState<ChangeState>({
   name:true,
   email:true,
   phone:true
})


const HandleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{

  if(e.target.id === 'name'){
    setChange({...change, name:e.target.value})
    setEmpty({...empty, name:false})
  }else if(e.target.id === 'email'){
    setChange({...change, email:e.target.value})
    setEmpty({...empty, email:false})
  }else if(e.target.id === 'phone_number'){
    setChange({...change, phone:e.target.value})
    setEmpty({...empty, phone:false})
  }


  //use to reset input values back to empty state
  if(e.target.id === 'name'){
    if(e.target.value === ''){
      setEmpty({...empty, name:true})
    }
  }else if(e.target.id === 'email'){
    if(e.target.value === ''){
      setEmpty({...empty, email:true})
    }
  }else if(e.target.id === 'phone_number'){
    if(e.target.value === ''){
      setEmpty({...empty, phone:true})
    }
  }

}


//function to handle page forward
const HandlePageIncrement = (e:React.MouseEvent<HTMLButtonElement>)=>{
 e.preventDefault()
  

   if(empty.name === true || empty.email === true || empty.phone === true){
     
   }else{

    if(page <= 4){

      setPage(page + 1)

  } 
   } 

}

const HandlePageDecrement = (e:React.MouseEvent<HTMLButtonElement>)=>{
  e.preventDefault()

    if(page > 1){
      setPage(page - 1)
    }

}




  return (
    <div className="App">

     <div className='contain'>

        <form className='form_container'>

           <SlideArea pages={page} HandlePageIncrement={HandlePageIncrement} 
           HandlePageDecrement={HandlePageDecrement}/>
            
           <MainArea pages={page} HandlePageIncrement={HandlePageIncrement} 
           HandlePageDecrement={HandlePageDecrement} change={change} 
           HandleChange={HandleChange} empty={empty}/>

        </form>

     </div>

     <div className='buttons-div'>
       { page > 1 ?
           <div className='backward-btn-div'>
             <button className='next-btn' onClick={HandlePageDecrement}>Go Back</button>
           </div>
           :
           <div>

           </div>
       } 
           <div className='forward-btn-div'>
             <button className='next-btn' onClick={HandlePageIncrement}>
              {page === 4 ? 'confirm' : 'Next Step'}</button>
             
           </div>

        </div>
      
    </div>
  );
}

export default App;
