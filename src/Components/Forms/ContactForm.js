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
        const onFinished = () => setIsSending(false)
        dispatch(actUploadContactForm(formData, onFinished, onFinished))
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
                        <input id="name" type="name" {...register("name", {required: true, maxLength: 20})}/>
                        {errors.name && errors.name.type === "required" &&
                        <span className="error-message">{ContactStrings.ErrorMsg.NameEmpty}</span>}
                        {errors.name && errors.name.type === "maxLength" &&
                        <span className="error-message">{ContactStrings.ErrorMsg.NameLength}</span>}
                    </div>
                    <div className="field col">
                        <span>Email: *</span>
                        <input type="email" {...register("email", {required: true, maxLength: 30})}/>
                        {errors.email && errors.email.type === "required" &&
                        <span className="error-message">{ContactStrings.ErrorMsg.EmailEmpty}</span>}
                        {errors.email && errors.email.type === "maxLength" &&
                        <span className="error-message">{ContactStrings.ErrorMsg.EmailLength}</span>}
                    </div>
                </div>
                <div className="field col">
                    <span>Your message: *</span>
                    <textarea {...register("content", {required: true, maxLength: 2000})}/>
                    {errors.content && errors.content.type === "required" &&
                    <span className="error-message">{ContactStrings.ErrorMsg.ContentEmpty}</span>}
                    {errors.content && errors.content.type === "maxLength" &&
                    <span className="error-message">{ContactStrings.ErrorMsg.ContentLength}</span>}
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
