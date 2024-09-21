import { useFormik } from 'formik';
import './styles.css';
import * as yup from 'yup';
import axios from 'axios';
import { useState } from 'react';

// Yup doğrulama şeması
const validationSchema = yup.object().shape({
    email: yup.string()
        .email("Geçerli bir email adresi giriniz")
        .required("Email adresi zorunlu"),
    name: yup.string()
        .required("İsim zorunlu"),
    password: yup.string()
        .min(8, "Şifre en az 8 karakter olmalı")
        .required("Şifre zorunlu"),
    confirmedPassword: yup.string()
        .oneOf([yup.ref('password'), null], "Şifreler eşleşmiyor")
        .required("Şifre tekrarı zorunlu"),
    term: yup.boolean()
        .oneOf([true], "Kullanım şartlarını kabul etmelisiniz")
});

const Register = () => {
    const [submittedData, setSubmittedData] = useState(null);

    const submit = async (values, { resetForm }) => {
        resetForm();
        try {
            // Backend'e veri gönderme
            await axios.post('https://your-backend-api.com/register', values);
            // Form verilerini state'e kaydetme
            setSubmittedData([values]); // Gönderilen verileri state'e kaydet
            // Formu sıfırlama
        } catch (error) {
            console.log(values)
            console.error("Veri gönderme hatası:", error);
        }
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmedPassword: "",
            term: false
        },
        onSubmit: submit,
        validationSchema
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className='register-container'>
                <div>
                    <label htmlFor="name">İsim giriniz</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.name && <div className='input-error'>{formik.errors.name}</div>}
                </div>
                <div>
                    <label htmlFor="email">Email giriniz</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        placeholder='Email giriniz'
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && <div className='input-error'>{formik.errors.email}</div>}
                </div>
                <div>
                    <label htmlFor="password">Şifre giriniz</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        placeholder='Şifre giriniz'
                        onChange={formik.handleChange}
                    />
                    {formik.errors.password && <div className='input-error'>{formik.errors.password}</div>}
                </div>
                <div>
                    <label htmlFor="confirmedPassword">Şifreyi tekrar giriniz</label>
                    <input
                        type="password"
                        id="confirmedPassword"
                        name="confirmedPassword"
                        value={formik.values.confirmedPassword}
                        placeholder='Tekrar giriniz'
                        onChange={formik.handleChange}
                    />
                    {formik.errors.confirmedPassword && <div className='input-error'>{formik.errors.confirmedPassword}</div>}
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="term"
                        name="term"
                        checked={formik.values.term}
                        onChange={formik.handleChange}
                    />
                    <label htmlFor="term">Kullanım şartlarını kabul ediyorum</label>
                    {formik.errors.term && <div className='input-error'>{formik.errors.term}</div>}
                </div>
                <button type="submit">Gönder</button>
            </form>

            {submittedData && (
                <div className='submitted-data'>
                    <h2>Gönderilen Veriler</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>İsim</th>
                                <th>Email</th>
                                <th>Şifre</th>
                                <th>Şifre Tekrarı</th>
                                <th>Kullanım Şartları</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{formik.values.name}</td>
                                <td>{formik.values.email}</td>
                                <td>{formik.values.password}</td>
                                <td>{formik.values.confirmedPassword}</td>
                                <td>{formik.values.term ? "Kabul Edildi" : "Kabul Edilmedi"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Register;
