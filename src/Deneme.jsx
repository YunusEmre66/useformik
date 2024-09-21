// import React from 'react';
// import { useFormik } from 'formik';

// const SignupForm = () => {
//   // useFormik hook'u ile formu tanımlıyoruz
//   const formik = useFormik({
//     initialValues: { // Formun başlangıç değerleri
//       email: '',
//       password: '',
//     },
//     onSubmit: async (values) => { // Form gönderildiğinde çalışacak fonksiyon
//       // Form verilerini console'a yazdır
//       console.log('Form Verileri:', values);
      
//       try {
//         // Fetch ile POST isteği yapıyoruz
//         const response = await fetch('https://backend-api-url.com/register', {
//           method: 'POST', // HTTP isteği metodu
//           headers: {
//             'Content-Type': 'application/json', // JSON olarak veri gönderiyoruz
//           },
//           body: JSON.stringify(values), // Form verilerini JSON formatına çevir
//         });

//         if (response.ok) {
//           const data = await response.json(); // Sunucudan gelen yanıt
//           console.log('Başarılı:', data); // Yanıtı console'a yazdır
//         } else {
//           console.error('Başarısız:', response.statusText); // Hata durumunu yazdır
//         }
//       } catch (error) {
//         console.error('Hata:', error); // Hata yakalama
//       }
//     },
//     validate: (values) => { // Doğrulama fonksiyonu
//       const errors = {};
//       if (!values.email) {
//         errors.email = 'Email gerekli';
//       } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = 'Geçersiz email adresi';
//       }
//       if (!values.password) {
//         errors.password = 'Şifre gerekli';
//       }
//       return errors;
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="email">Email:</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange} // Input değişimini takip eder
//         value={formik.values.email} // Formik içindeki email değerini kullanır
//       />
//       {formik.errors.email ? <div>{formik.errors.email}</div> : null}

//       <label htmlFor="password">Şifre:</label>
//       <input
//         id="password"
//         name="password"
//         type="password"
//         onChange={formik.handleChange}
//         value={formik.values.password}
//       />
//       {formik.errors.password ? <div>{formik.errors.password}</div> : null}

//       <button type="submit">Gönder</button>
//     </form>
//   );
// };

// export default SignupForm;
