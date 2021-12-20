import React from 'react';

export default function login(props) {
    return (
        <>
            <h2>Login</h2> 
            <div className='errors'>
                {/* errors here */}
            </div>
            {/* Form */}
            <div className='form-container'>
                <div className='username'>
                    <label><p>Username</p>
                        <input
                            id='username'
                            value={values.username}
                            onChange={onChange}
                            name='username'
                            type='text'
                        />
                    </label>
                </div>
                <div className='password'>
                    <label><p>Password</p>
                        <input
                            id='password'
                            value={values.password}
                            onChange={onChange}
                            name='password'
                            type='password'
                        />
                    </label>
                </div>
            </div>
        </>
    )
    
}