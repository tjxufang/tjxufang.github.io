import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import './ContactForm.scss'
import MainButton from "Components/Buttons/MainButton";
import {actUploadContactForm} from "Redux/actions";
import {useDispatch} from "react-redux";
import {ContactStrings} from 'Utils/Strings';

const ContactForm = () => {
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm();

    const [isSending, setIsSending] = useState()
    const onSubmit = formData => {
        setIsSending(true)
        const onSuccess = () => setIsSending(false)
        dispatch(actUploadContactForm(formData, onSuccess, onSuccess))
    }

    return (
        <div className="contact-form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="heading">
                    <p>{ContactStrings.Intro}</p>
                </div>
                <div className="basic-contact row">
                    <div className="field col">
                        <span>Name: *</span>
                        <input id="name" type="name" {...register("nickName", {required: true, maxLength: 20})}/>
                        {errors.nickName && errors.nickName.type === "required" &&
                        <span className="error-message">I'd like to know your name!</span>}
                        {errors.nickName && errors.nickName.type === "maxLength" &&
                        <span className="error-message">Ops! We think your name is too long!</span>}
                    </div>
                    <div className="field col">
                        <span>Email: *</span>
                        <input type="email" {...register("email", {required: true, maxLength: 30})}/>
                        {errors.email && errors.email.type === "required" &&
                        <span className="error-message">And your email too!</span>}
                        {errors.email && errors.email.type === "maxLength" &&
                        <span className="error-message">Ops! We think your email is too long!</span>}
                    </div>
                </div>
                <br/>
                <div className="field col">
                    <span>Your Idea/Advice/Complain: *</span>
                    <textarea {...register("content", {required: true, maxLength: 2000})}/>
                    {errors.content && errors.content.type === "required" &&
                    <span className="error-message">Don't forget to write here!</span>}
                    {errors.content && errors.content.type === "maxLength" &&
                    <span className="error-message">Max length exceeded!</span>}
                </div>
                <br/>
                <br/>
                <div className="flex-center">
                    <MainButton type="submit" disabled={isSending} disabledText="Submitting">Submit</MainButton>
                </div>
            </form>
        </div>
    )
};

export default ContactForm;
