import * as yup from 'yup';

export const registerFormSchemas = yup.object().shape({
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