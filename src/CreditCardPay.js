import { IoClose } from "react-icons/io5"
import { useState } from "react"
import { setAmount, toggleCreditCardDisplay } from "./Redux/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { FaCcMastercard, FaCcVisa } from "react-icons/fa"
import { SiAmericanexpress } from "react-icons/si"
import { setOrderTotal } from "./Redux/userSlice"

const CreditCardPay = ()=>{
    const dispatch = useDispatch()
    const userInfo = useSelector(state=>state.userInfo)

    const[close, setClose] = useState(false)
    const handleClose = ()=>{
        setClose(!close)
        dispatch(toggleCreditCardDisplay(false))
    }
    const handleSubmit = (e)=>{
        const formData = e.formData()
        console.log("Form data is ", formData)
    }
return(
    <div className={ close ? 'hidden': 'fixed flex justify-center inset-0 items-center text-black backdrop-blur'}>

    <div className="text-black rounded-lg bg-white w-[480px] text-center border h-[760px] ease-in-out duration-500">
        <form onSubmit={(e)=>handleSubmit(e)}> 
    <IoClose size={30} className="ml-auto text-gray-700 hover:cursor-pointer" onClick={ handleClose }/>
       <div className="ml-5">
        <h1 className="flex font-bold text-3xl">Payment Info</h1>
        <p className="flex mb-2 text-[#415765] font-bold text-lg">Card Details.</p>
        </div>
        <hr/>
        
        <div className="flex ml-5 mt-2">

            
            <input  className="rounded-md border bg-gray-100 p-2 outline-none w-full"type="text" name="firstName" placeholder="First Name" required/>
            <input className="rounded-md border bg-gray-100 p-2 outline-none mr-4 ml-5 w-full" type="text" name="surname" placeholder="Surname" required/>
        </div>
        <div className="flex ml-5 mt-2">
            <input className="rounded-md border bg-gray-100 p-2 outline-none w-[75%]" type="number" name="cardNumber" placeholder="Card Number" required/>
            <div className='flex gap-4  mx-4 '>
            <SiAmericanexpress size={35} color="blue"/> 
            <FaCcMastercard size={35} color="orange"/>
            <FaCcVisa size={35} color="blue"/>
            </div>
        </div>
       <div className="flex">
        <label className="flex ml-6 mt-2 text-xl" htmlFor="expiryDate">Expiration Date</label>
        <input className="rounded-md border bg-gray-100 p-2 outline-none mt-2 ml-auto mr-3" type="month" name="expiryDate" placeholder="Expiration Date" required/>
        </div>
        <div className="flex justify-center items-center ">
        <label className="mt-2 text-lg ml-6" htmlFor="cvc">Card Verification Code (CVC)</label>
        <input className="rounded-md border bg-gray-100 p-2 outline-none mt-2 ml-auto mr-3" type="number" name="cvc"  placeholder="CVC" required/>
        </div>
       
       <div className="mt-2 bg-gray-100 border mx-3 my-2 rounded-xl">
        <h1 className="flex text-[#415765] font-bold ml-6 my-2 text-lg">Billing Address</h1>
        <div className="flex ml-4">
                <div className="">
                    <label htmlFor="email">Email Address</label>
                    <input className="rounded-md border bg-white p-1 outline-none" type="text" name="email" placeholder="Email" required/>
                </div>
                <div className="flex-col">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input className="rounded-md border bg-white p-1 outline-none ml-4" type="number" name="phoneNumber" placeholder="Phone Number" required/>
                </div>
                
            </div>
       
        <div className="flex ml-0">
                <div className="">
                    <label htmlFor="country">Country</label>
                    <input className="rounded-md border bg-white p-1 outline-none" type="text" name="country" placeholder="Country" required/>
                </div>
                <div className="flex-col">
                    <label htmlFor="state">State</label>
                    <input className="rounded-md border bg-white p-1 outline-none " type="text" name="state" placeholder="State" required/>
                </div>
                
            </div>
            <div className="flex ml-6 mb-4">
                <div className="">
                    <label htmlFor="city">City</label>
                    <input className="rounded-md border bg-white p-1 outline-none " type="text" name="city" placeholder="City" required/>
                </div>
                <div className="flex-col">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input className="rounded-md border bg-white p-1 outline-none ml-5" type="number" name="zipCode" placeholder="Zip Code" required/>
              
                
            </div>
       </div>
       </div>
       <div className="flex-col mt-2 bg-gray-100 border m-4 rounded-xl">
        <h1 className="flex text-[#415765] font-bold ml-6 my-2 text-lg">Payment Summary</h1>
        <div className="flex">
        <p className="ml-6">Subtotal</p>
        <p className="ml-auto mr-6">${userInfo.amount}</p>
        </div>
        <div className="flex">
        <p className="ml-6">Service Fee</p>
        <p className="ml-auto mr-5">{userInfo.amount === 0 ? '$0': '$' + userInfo.serviceFee}</p>
        </div>
        <div className="flex mb-1">
        <p className="ml-6">Order Total</p>
        <p className="ml-auto mr-4">${userInfo.orderTotal}</p>
        </div>
       </div>
        <div className="flex ml-6 gap-12">
            <button className="bg-white text-black border text-xl px-4 rounded-md py-1 my-1 w-[200px]" onClick={ handleClose}>Cancel</button>
        <button className="bg-[#42b72a] text-white text-xl px-4 rounded-md py-1 my-1 w-[200px] " type="submit">Continue</button>
        </div>
        </form>
    </div>
</div>
)
}
export default CreditCardPay