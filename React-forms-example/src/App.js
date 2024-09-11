import './App.css';
import {useFormik} from 'formik'
function App() {
  const formik=useFormik({
    initialValues:{
      name:'',
      email:'',
      password:''
    },
    onSubmit:(values)=>{
      console.log('form values', values)
    },
    validate:(values)=>{
      let errors={};
      if(!values.name){
        errors.name="Name is required"
      }
      if(!values.email){
        errors.email="email is required"
      }
      if(!values.password){
        errors.password="password is required"
      }
      return errors;
    }
  })
  //console.log('form values',formik.values)
  return (
    <div className="App">
     <h1>React Formik Forms</h1>
     <form autoComplete='off' onSubmit={formik.handleSubmit}>  
      <label>Name</label> <br></br>
      <input type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange}></input>
      {formik.errors.name?<div className='errors'>{formik.errors.name}</div>:null}
      <br></br>
      <label>Email</label> <br></br>
      <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange}></input>
      {formik.errors.email?<div className='errors'>{formik.errors.email}</div>:null}
      <br></br>
      <label>Password</label> <br></br>
      <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange}></input>
      {formik.errors.password?<div className='errors'>{formik.errors.password}</div>:null}
      <br></br>
      <button type="submit">Register</button>
     </form>
    </div>
  );
}

export default App;
