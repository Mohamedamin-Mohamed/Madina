import { useSelector } from "react-redux"

const StripePayment = (props)=>{
    const userInfo = useSelector(state=>state.userInfo)

    const formData = props.formData
    const requestBody = {
        firstName: formData.get('firstName'),
        surname: formData.get('surname'),
        cardNumber: formData.get('cardNumber'),
        expiryDate: formData.get('expiryDate'),
        cvc: formData.get('cvc'),
        email: formData.get('email'),
        phoneNumber: formData.get('phoneNumber'),
        country: formData.get('country'),
        state: formData.get('state'),
        city: formData.get('city'),
        zipcode: formData.get('zipCode'),
        orderTotal: userInfo.orderTotal
    }
    console.log('User info is as follows; ', requestBody)
}
export default StripePayment
