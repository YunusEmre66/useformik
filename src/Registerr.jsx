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
            term: false
        }

        // validationSchema: validate

        // const inputs = {
        //     nam
        // }
        // console.log(values)
    })

    return (


        <form onChange={handleChange} className='register-container'>

            <div>
                <label>isim giriniz</label>
                <input
                    type="text"
                    id="name "
                    value={values.name}
                    placeholder='İsim giriniz'
                    onChange={handleChange}

                />
                {errors.name && <div>{errors.name}</div>}

            </div>
            <div>
                <label >Email giriniz</label>
                <input
                    type="text"
                    id="email "
                    value={values.email}
                    placeholder='email giriniz'
                    onChange={handleChange} />
            </div>
            <div>
                <label>Şifre giriniz</label>
                <input
                    type="text"
                    id="password"
                    value={values.password}
                    placeholder='şifre giriniz'
                    onChange={handleChange} />
            </div>
            <div>
                <label >Şifreyi tekrar giriniz</label>
                <input
                    type="text"
                    id="passwordConfirmed"
                    value={values.passwordConfirmed}
                    placeholder='tekrar giriniz'
                    onChange={handleChange} />
            </div>
            <div>

                <input
                    type="checkbox"
                    value={values.term}
                    onChange={handleChange}
                    id="term"
                />
                <label>Kullanım şartlarını kabul ediyorum</label>
            </div>

            <div>
                <button type="submit" onSubmit={handleSubmit}>Gönder</button>
            </div>


        </form>
    )
}

export default Registerr
