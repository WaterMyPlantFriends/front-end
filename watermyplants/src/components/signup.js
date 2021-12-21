import React from 'react'


const Signup =() => {
    return (
        <div>
            Sign Up 
            <form>
                <label>Name:
                <input 
                text="text"
                name="name"
                />
                </label>
                <label> Birthday:
                    <input
                    text="text"
                    name="birthday"
                    />
                </label>
                <label>Email:
                    <input
                    text="email"
                    name="email"
                    />
                </label>
            </form>
        </div>
    )
}
export default Signup