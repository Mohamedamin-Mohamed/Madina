import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import CreditCardPay from './CreditCardPay';
import{useSelector, useDispatch } from 'react-redux'
import { toggleCreditCardDisplay, setAmount } from './Redux/userSlice'
import { useEffect, useState } from "react";

const Navbar = ()=>{
    const userInfo = useSelector(state=>state.userInfo)
    const dispatch = useDispatch()
    const[color, setColor] = useState([false, false, false])
   
   useEffect(()=>{
    const amountUserSelects = ()=>{
        if (color[0]){
            dispatch(setAmount(200))
        }
        if (color[1]){
            dispatch(setAmount(250))
        }
        if (color[2]){
            dispatch(setAmount(300))
        }
        }
        amountUserSelects()
   }, [color])
    return(
        <div className='flex justify-center items-center  h-screen'>
            <div className='flex justify-center w-[1000px]'>
           
           <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col'>
           <img src='' alt='' className='w-[200px] h-[300px] ml-10' />
            <h1 className='text-3xl mb-8'>Donations to Madina</h1>
            </div>
            
            <div className='text-white flex-col hover:cursor-pointer text-xl mb-4'>
            
            <button className={`bg-${color[0] === false ?'[#00a9e0]' : '[#42b72a]'} border p-2 w-[250px] flex justify-center`} onClick={()=>setColor([!color[0], false, false])}>
            $200
            </button>
            <button className={`bg-${color[1] === false ?'[#00a9e0]' : '[#42b72a]'} border p-2 w-[250px] flex justify-center my-4`} onClick={()=>setColor([false, !color[1], false])}>
            $250
            </button>
            <button className={`bg-${color[2] === false ?'[#00a9e0]' : '[#42b72a]'} border p-2 w-[250px] flex justify-center`} onClick={()=>setColor([false, false, !color[2]])}>
            $300
            </button>
            
            </div>
            <p>Custom Amount</p>
            <div className='flex flex-col border p-14 mb-6'>
              
                <button className='flex bg-black p-2 text-white w-[350px] justify-center hover:cursor-pointer'>
                    <h1 className='text-xl mt-1 mr-2'>Pay with</h1> 
                    <FaApple size={40} className=""/>
                    <p className='text-3xl'>Pay</p>   
                    </button>
            
                    <button className='flex bg-black p-2 text-white mt-4 w-[350px] justify-center hover:cursor-pointer'>
                    <h1 className='text-2xl mt-1 mr-2'>Pay with</h1>   
                    <FcGoogle size={40}/>
                    <p className='text-3xl'>Pay</p>        
                    </button>
                  
            </div>
            <p className='mb-6 p-2 text-[#415765] border-b flex justify-center items-center'>Continue to pay with credit card</p>
            
            <button className='bg-[#00a9e0] w-[470px] p-2 text-2xl text-white mb-6' onClick={()=>dispatch(toggleCreditCardDisplay(true))}>
                Pay with Credit Card
            </button>
          {userInfo.creditCardDisplay && <CreditCardPay />}
           </div>
           </div>
        </div>
    )
}
export default Navbar