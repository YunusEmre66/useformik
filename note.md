initialValues, formda bulunan alanların başlangıç değerlerini belirtmek için kullanılan bir nesnedir. Bu değerler, formun boş olduğu durumlarda bile belirtilmelidir. Aksi takdirde, tanımlanmamış alanlarla ilgili bir hata alabilirsiniz.

const formik = useFormik({
 initialValues: {
  name: '',
  email: '',
  password: '',
 },
 onSubmit: values => {
  console.log(values);
 },
});

onSubmit işlevi, form gönderildiğinde çalışacak olan kodu içerir. Bu örnekte, form verileri console.log ile konsola yazdırılır.