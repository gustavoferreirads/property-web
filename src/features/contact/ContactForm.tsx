"use client"
import React, {useState} from 'react';
import {ContactAgentFormData} from "@/features/contact/types/form";
import {sendContactMessage} from "@/features/contact/server-actions/contact";
import {Input} from "@/components/Input";
import {TextArea} from "@/components/TextArea";
import {Button} from "@/components/Button";

const initialFormDataState = {
    fullName: '',
    email: '',
    phone: '',
    comments: '',
}
export const ContactForm = () => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [formData, setFormData] = useState<ContactAgentFormData>(initialFormDataState);

    const [error, setError] = useState<string>('');

    const isValidEmail = (email: string) =>
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isValidPhone = (phone: string) =>
        /^\d+$/.test(phone);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (!formData.fullName || !formData.email || !formData.phone || !formData.comments) {
            setError('All fields are required.');
            return;
        }
        if (!isValidEmail(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (!isValidPhone(formData.phone)) {
            setError('Please enter a valid phone number.');
            return;
        }
        sendContactMessage(formData);
        setIsSuccess(true)
        setFormData(initialFormDataState)

        setTimeout(() => { setIsSuccess(false)},5000)
    };

    return (
        <div className="bg-slate-100 p-8 text-center	">
            <p className="text-lg font-semibold	text-center mb-2">Contact Agent</p>

            <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="fullName"
                    onChange={handleChange}
                    value={formData.fullName}
                    placeholder="Full Name *"
                />
                <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Email *"
                />
                <Input
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                    placeholder="Phone Number *"
                />
                <TextArea
                    name="comments"
                    onChange={handleChange}
                    value={formData.comments}
                    placeholder="Comments *"
                />
                <Button
                    type="submit"
                    variant={"primary"}
                >

                    Contact Now
                </Button>
                {error && <div className="text-red-500 text-sm px-2 py-1">{error}</div>}
                {isSuccess &&
                    <div className="text-green-500 text-sm px-2 py-1">
                        Message sent
                        successfully
                    </div>
                }
            </form>
        </div>
    );
};