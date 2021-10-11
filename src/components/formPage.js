import React from 'react'
import { useForm } from 'react-hook-form';
import * as formactions from '../actions/formAction';
import { connect } from 'react-redux';
import '../assets/formData.css'
import { ToastContainer, toast } from 'react-toastify';

const FormScreen = (props) => {
    const { register, handleSubmit } = useForm()
    const setToast = async (status, message) => {
        if (status === true) toast.success(message)
        else toast.error(message)
      }
    const submitForm = (data) => {
        props.formAction(data)
        alert('Form Submitted Successfully!!!')
    }
    
    return (
        <div className="container">

            <form onSubmit={handleSubmit(submitForm)}>
                <div className="form-data">
                    <input {...register('name')} type="text" placeholder="Enter Full Name" />
                    <input {...register('email')} type="email" placeholder="Enter Email" />
                    <input {...register('mobile')} type="number" placeholder="Enter Mobile Number"  />
                    <button type="submit">Submit</button>
                </div>
            </form>
            {Object.keys(props.getFormData).length !== 0 ?
                <div className="output">Hello,{props.getFormData.name}
                    <p>Your Email id: {props.getFormData.email}</p>
                    <p>Your Phone No: {props.getFormData.mobile}</p>
                </div>
                : <></>}

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        getFormData: state.formData.data,
    }
}
const mapDispatchToProps = {
    ...formactions
};

export default connect(mapStateToProps, mapDispatchToProps)(FormScreen)
