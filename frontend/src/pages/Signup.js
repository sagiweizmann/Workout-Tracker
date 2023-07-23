import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const { signup, error , isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email,password)
    }

    return (
        <form className='signup' onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                id='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                ></input>
            <label htmlFor='password'>Password</label>
            <input
                type='password'
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                ></input>
            <button disabled={isLoading} type='submit'>Sign Up</button>
            {error && <div className='error'>{error}</div> }
        </form>
    )
}

export default Signup