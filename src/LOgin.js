import { useRef, useState, useEffect, useRef } from "react";
const login = () =>{
    const useRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(user,pwd);
        setUser('');
        setPwd(''); 
        setSuccess(true)
    }

    const [success, setSuccess] = useState('');

    useEffect(() => {
        useRef.current.focus();
    },[])
    useEffect(() => {
        setErrMsg('');
    },[user,pwd])
    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" :"offscreen"}
            aria-live="assertive"> {errMsg} </p>
        <h1> Sign in</h1>
        <form onSubmit={handleSubmit}></form>
        <form>
            <label htmlFor="username"> Username:</label>
            <input
            type="text"
            id="username"
            ref={useRef}
            autoComplete="off "
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            />
        <label htmlFor="password"> password:</label>
            <input
            type="password"
            id="password"
            
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            />
            <button>Sign in</button>
        </form>
        <p>
            Need an Account?<br/>
            <span>
            {/* put a router link here */}
            <a href = "#">Sign up</a>
            </span>
        </p>
        </section>
    )
}
export default login   