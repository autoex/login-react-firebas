import React, {useContext} from 'react';
import {AuthContext} from "../App";

const Login = () => {
    const {user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        passwordError,
        login,
        singUp,
        hasAccount,
        setHasAccount} =useContext(AuthContext)
    return (
        <div className='login'>
           <div className="loginContainer">
               <label htmlFor='email'>Username</label>
               <input id='email' type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
               <p className="errorMsg">{emailError}</p>
               <label htmlFor='password'>Password</label>
               <input id='password' type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
               <p className="errorMsg">{passwordError}</p>
               <div className="btnContainer">
                   {hasAccount ?
                       (<>
                               <button onClick={login}>Sign In</button>
                               <p>Don't have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sign Up</span></p>
                       </>
                       )
                   :
                       (<>
                               <button onClick={singUp}>Sign Up</button>
                               <p>Have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sign In</span></p>
                           </>

                       )}
               </div>
           </div>

        </div>
    );
};

export default Login;