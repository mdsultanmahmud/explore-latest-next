'use client';
import React from 'react';
import styles from '../styles/common.module.css'
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const target = e.target
        const name = target.name.value
        const email = target.email.value
        const company = target.company.value
        const message = target.msg.value

        const user = {
            name,
            email,
            company,
            message
        }
        console.log(user)
    }
    return (
        <>
            <h1 className='my-12 font-bold uppercase text-xl text-green-800 text-center'>Contact With Us</h1>
            <form className={`${styles.form_container} shadow-2xl`} onSubmit={handleSubmit}>
                <div className={styles['form-control']}>
                    <label htmlFor='name'>Name</label>
                    <input id='name' name='name' autoComplete='off' required placeholder='Enter your name' />
                </div>
                <div className={styles['form-control']}>
                    <label htmlFor='email'>Email</label>
                    <input id='email' name='email' autoComplete='off' required placeholder='Enter your email' />
                </div>
                <div className={styles['form-control']}>
                    <label htmlFor='company'>Company Name</label>
                    <input id='company' name='company' autoComplete='off' required placeholder='Enter your Company Name' />
                </div>
                <div className={styles['form-control']}>
                    <label htmlFor='company'>Your Message</label>
                    <textarea name='msg' cols={40} autoComplete='off' required placeholder='Enter Your Message....' />
                </div>
                <button className={styles.btn}>Send</button>
            </form>
        </>
    );
};

export default Contact;