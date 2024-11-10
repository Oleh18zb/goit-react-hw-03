import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import s from './ContactForm.module.css'
import * as Yup from 'yup';

export const ContactForm = () => {
    const handleSubmit = (values, options) => {
        options.resetForm();
    };

const orderSchema = Yup.object().shape({
    username: Yup.string().min(3).required(),
    number: Yup.string().min(3).required('required'),
});

    const initialValues = {
        username: '',
        number: '',
    };

  return (
    <div>
        <Formik validationSchema={orderSchema} onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.Form}>
            <label className={s.label}>
                <span className={s.span}>Name</span>
                <Field className={s.input} type="text" name='username'/>
            </label>
            <label className={s.label}>
                <span className={s.span}>Number</span>
                <Field className={s.input} type="text" name='number'/>
                <ErrorMessage name='number' component='span' className={s.error}/>
            </label>
            <button type='submit'>Add contact</button>
        </Form>
        </Formik>
    </div>
  )
}

export default ContactForm