import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext)
    const[text,setText] = useState('')
    const[amount,setAmount]=useState(0)

    const onSubmit= e=>{
           e.preventDefault()
           const newTransaction = {
            id:Math.floor(Math.random() * 1000000),
            text,
            amount : +amount
           }
           addTransaction(newTransaction)
    }
  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
       <label htmlFor='text'>Text</label>
       <input type='text' value={text} placeholder='Enter Text...' id='text'onChange={(e)=>{setText(e.target.value)}}></input>
        </div>
        <div className='form-control'>
           <label htmlFor='amount'>Amount </label>
           <input type='number' placeholder='Enter Amount' id='amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
