import React from 'react'
import { Field, Form, Formik } from 'formik'
import s from './SearchBox.module.css'

export const SearchBox = () => {

    const handleSubmit = (values, options) => {

    };
    const initialValues = {
        name: '',
    };

  return (
    <div>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.Form}>
            <label className={s.label}>
                <span className={s.span}>Find contacts by name</span>
                <Field as='textarea' className={s.input} type="text" name='name'/>
            </label>
        </Form>
        </Formik>
    </div>
  )
}

export default SearchBox