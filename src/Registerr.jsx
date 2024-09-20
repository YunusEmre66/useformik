/* useformik, initialvlues , submit , onsubmit, errors, handlechange, handlesubmit, values  */
import { useFormik } from 'formik';
import './styles.css';
const Registerr = () => {

    const { values, errors, handleChange, handleSubmit } = useFormik({



        initialValues: {
            name: "",
            email: "",
            password: "",
            passwordConfirmed: "",
            term: ""
        }

        // validationSchema: validate

        // const inputs = {
        //     nam
        // }
    console.log(values)
    })

    return (


        <form onChange={handleChange} className='register-container'>

            <div>
                <input type="text" name={values.name} placeholder='İsim giriniz'
                    {errors.name && errors.message}
                />
            </div>
            <div>
                <input type="text" name={values.email} placeholder='email giriniz' />
            </div>
            <div>
                <input type="text" name={values.name} placeholder='şifre giriniz' />
            </div>
            <div>
                <input type="text" name={values.name} placeholder='tekrar giriniz' />
            </div>
            <div>
                <input type="radio" name={values.term} />
                <input type="text" name={values.name} placeholder='İsim giriniz' />
            </div>

            <div>
                <button type="submit" onSubmit={handleSubmit}>Gönder</button>
            </div>


        </form>
    )
}

export default Registerr
