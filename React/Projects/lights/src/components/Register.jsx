import './css/Login.css';
import { useState } from 'react';

export default function Register() {

  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/', {
            method: 'post',
            body: JSON.stringify({ name, email }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if (result) {
            alert('Data saved succesfully');
            setEmail('');
            setName('');
        }
    };

  return (

    <>
            <h1>This is React WebApp </h1>
            <form action="">
                <input type="text" placeholder="name"
                value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="email"
                value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit"
                onClick={handleOnSubmit}>submit</button>
            </form>
 
        </>

    // <div className="login_section">
    //   <div className="login-form">
    //     <form method="post">
    //       <h2>Register</h2>
    //       <div className="form-input">
    //         <input type="email" id="email" name="email" placeholder="Email" />
    //       </div>
    //       <div className="form-input">
    //         <input
    //           type="password"
    //           id="password"
    //           name="password"
    //           placeholder="Password"
    //         />
    //       </div>
    //       <div className="form-input">
    //         <input
    //           type="password"
    //           id="rePass"
    //           name="rePass"
    //           placeholder="Repeat password"
    //         />
    //       </div>

    //       <button type="submit">Register</button>
    //     </form>
    //     <p>
    //       Have an account yet? <a href="#">Login here</a>.
    //     </p>
    //   </div>
    // </div>
  );
}
