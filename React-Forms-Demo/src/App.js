import logo from './logo.svg';
import './App.css';

import { useState, useRef, useEffect } from 'react';

function App() {

  const [values, setValues] = useState({
    username: '',
    password: '',
    textarea: '',
    gender: '',
    age: '',
    userType: '',
    tac: false,
    egn: '',
    eik: ''
  });

  const myRef = useRef();

  useEffect(() => {
      if(values.username && values.age){

        myRef.current.value = `${values.username} - ${values.age}`;
      }

  },[values.username, values.age]);

  // const [username, setUsername] = useState('');
  // const [textarea, setTextarea] = useState('');
  // const [password, setPassword] = useState('');
  // const [gender, setGender] = useState('');
  // const [age, setAge] = useState('');
  // const [userType, setUserType] = useState('corporate');
  // const [turms, setTurms] = useState(true);

  const changeHandler = (e) => {
     
    setValues(state => ({
      ...state,
      // [e.target.name]: e.target.value
      [e.target.name]: e.target.type == 'checkbox' ? e.target.checked : e.target.value
    }));
  }

 

  const submitHandler = (e) => {

    e.preventDefault();

    // let data = e.currentTarget;

    // let formData = new FormData(data);

    // let username = formData.get('username');
    // let password = formData.get('password');
    // let textarea = formData.get('textarea');
    // let gender = formData.get('gender');
    // let userType = formData.get('userType');
    // let turms = formData.get('tac');




    console.log(values.username, values.password, values.textarea, values.gender, values.age, values.userType, values.tac, values.egn, values.eik );
  }

//   const userNameChangeHandler = (e) => {

//     setUsername(e.target.value);

//   }

//   const textareaChangeHandler = (e) => {
     
//      setTextarea(e.target.value);
//   }

//   const passwordChangeHandler = (e) => {
     
//     setPassword(e.target.value);
//  }

//  const genderChangeHandler = (e) => {
     
//   setGender(e.target.value);
// }

// const ageChangeHandler = (e) => {
     
//   setAge(e.target.value);
// }

// const turmsChangeHandler = (e) => {
     
//   setTurms(e.target.value == 'on');
// }

// const userTypeChangeHandler = (e) => {
 
//   setUserType(e.target.value);

// }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="userName">Username</label>
            <input type="text" id="userName" name="username" onChange={changeHandler} value={values.username}></input>
          </div>
          <div>
            <label htmlFor="passWord">Password</label>
            <input type="text" id="passWord" name="password" onChange={changeHandler} value={values.password}></input>
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" onChange={changeHandler} value={values.gender}> 
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>
          <div>
          <label htmlFor="tempRef">Ref</label>
            <input type="text" id="tempRef" name="tempRef"  ref={myRef}></input>
          </div>
          <div>
            <label htmlFor="individual-user-type">Individual</label>
            <input type="radio" id="individual-user-type" name="userType" value="individual"  onChange={changeHandler} checked={values.userType === 'individual'}></input>
            <label htmlFor="corporate-user-type">Corporate</label>
            <input type="radio" id="corporate-user-type" name="userType" value="corporate" onChange={changeHandler} checked={values.userType === 'corporate'}></input>
          </div>
          <br/>
           <div>
            <label htmlFor="identifier">{values.userType == 'individual' ? 'EGN' : 'EIK'}</label>
            {values.userType == 'individual' 
             ? <input type="text" id="identifier" name="egn" onChange={changeHandler} value={values.egn}></input>
             : <input type="text" id="identifier" name="eik" onChange={changeHandler} value={values.eik}></input>}
           </div>
          <div>
            <label htmlFor="text">Description</label>
            <textarea type="text" id="text" name="textarea" onChange={changeHandler} value={values.textarea}></textarea>
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" onChange={changeHandler} value={values.age}></input>
          </div>
          <div>
            <label htmlFor="tac">Turms and Conditions</label>
            <input type="checkbox" id="tac" name="tac" onChange={changeHandler} checked={values.tac}></input>
          </div>
          <button type="submit" disabled={!values.tac}>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
