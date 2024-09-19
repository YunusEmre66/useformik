import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required("zorunlu alan"),
    email: Yup.string().email("geçersiz email adresi").required("doldurulması zorunlu alan"),
    password:Yup.string().password("doldurulması zorunlu alan")
    

})

const Register = () => {

    const validate =(values) => {

        const errors = {}

        if (!values.name) {
            e
        }
    }
  return (
    <div>
      ssss
    </div>
  )
}

export default Register
