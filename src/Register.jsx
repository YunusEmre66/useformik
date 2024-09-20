// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import './styles.css';

// const validationSchema = Yup.object({
//     name: Yup.string().required("zorunlu alan"),
//     email: Yup.string()
//         .email('Wrong email format')
//         .min(3, 'Minimum 3 symbols')
//         .max(50, 'Maximum 50 symbols')
//         .required('Email is required'),
//     password: Yup.string() 
//     .min(3, 'Minimum 3 symbols')
//     .max(50, 'Maximum 50 symbols')
//     .required('Password is required'),

// })
// const Register = () => {

//     const { handleChange, handleSubmit, errors, values } = useFormik({
//         initialValues: {
//             name: "",
//             email: "",
//             password: ""
//         },
//         validationSchema,
//         onSubmit: (values) => {
//             console.log(values)
//         },
//     });


//     return (
//         <form onSubmit={handleSubmit}>

//             <div className="register-container" >Register</div>

//             <input

//                 type="text"
//                 name="name"
//                 placeholder='isim giriniz'
//                 values={values.name}
//                 onChange={handleChange}
//             />

//             <input
//                 type="text"
//                 name="email"
//                 placeholder='email giriniz'
//                 values={values.email}
//                 onChange={handleChange}

//             />

//             <input
//                 type="text"
//                 name="password"
//                 placeholder='password giriniz'
//                 values={values.password}
//                 onChange={handleChange}
//             />
//             {errors.password ? errors.password : null}
//             <button type="submit">Kayıt ol</button>

//         </form>
//     )
// }

// export default Register
