import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required("zorunlu alan"),
    email: Yup.string().email("geçersiz email adresi").required("doldurulması zorunlu alan"),
    password: Yup.string().password("doldurulması zorunlu alan")

})
const Register = () => {

    const { handleChange, handleSubmit, errors, values } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    });


    return (
        <form onSubmit={handleSubmit}>

            <input

                type="text"
                name="name"
                placeholder='isim giriniz'
                values={values.name}
                onChange={handleChange}
            />

            <input
                type="text"
                name="email"
                placeholder='email'
                values={values.email}
                onChange={handleChange}

            />

            <input
                type="text"
                name="password"
                placeholder='password giriniz'
                values={values.password}
                onChange={handleChange}
            />


        </form>
    )
}

export default Register
