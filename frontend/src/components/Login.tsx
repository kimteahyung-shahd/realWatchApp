import {Link, useNavigate} from "react-router-dom"
import { useState,useEffect } from "react"
import axios from "axios";
import { apiUrl } from "../lib/api";
import Swal from 'sweetalert2'


function Login (){
    useEffect(() => {
        // check if user already logged in
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }, []);
    
    
    const [Login,setLogin] = useState({email:'',password:''});
    const [user,setUser] = useState<any>(null);
    const navigate = useNavigate();
    const InputValue = (e:any)=>{
        setLogin({...Login,[e.target.name]: e.target.value })    
    }
    const handelLogin =async()=>{
        if (!Login.email || !Login.password) {
            Swal.fire({
                title: 'All fields are required.',
                text: 'Please enter all inputs',
                icon: 'warning',
                confirmButtonColor: "#28a745",
                showCancelButton:true
                })            
          }
        try{
            let link =await axios.get(apiUrl(`/users?email=${Login.email}&password=${Login.password}`));
            if(link.data.length > 0){
                let user = link.data[0]; //for localStorage
                localStorage.setItem("user", JSON.stringify(user));
                Swal.fire({
                    title: 'Login Successful!',
                    text: 'Welcome back 👋',
                    icon: 'success',
                    confirmButtonText: 'Go Home',
                    confirmButtonColor: "#28a745"
                    }).then((result) => {
                        if (result.isConfirmed) {
                          navigate("/"); 
                        }
            })}
            else if(link.data.length ===0){
                Swal.fire({
                    title: "Login Failed ❌",
                    text: "Invalid email or password.",
                    icon: "error",
                    confirmButtonText: "Try Again",
                    confirmButtonColor: "#d33",
                    footer: '<a href="/signin">Don\'t have an account? Sign up</a>',
                  })
            }}
        catch(error){
            alert("Something went wrong");
            }
        }          

    return(
        <>            
            {user ? (
                <div className="text-center">
                <h1 className="text-center font-[600] py-10 text-4xl font-helvetica">
                  My Account
                </h1>
                <h3 className="text-2xl">Account Details</h3>
                <p>{user.username}</p>
                <button
                  onClick={() => {
                    localStorage.removeItem("user");
                    setUser(null);
                  }}
                  className="my-5 bg-black text-white px-4 py-2"
                >
                  Logout
                </button>
              </div>):(
                <div>
                    <h1 className="text-center font-[600] py-10 text-4xl font-helvetica">Login</h1>
                    <div className="flex justify-center">
                    <form   onSubmit={(e) => {e.preventDefault(); handelLogin();  }} className="text-md">
                        <label htmlFor="email" className="cursor-pointer">Email</label>
                        <input onChange={InputValue} value={Login.email} name="email" type="email" id="email" className={`border mt-2 mb-5 border-1 block px-3 py-1 w-[500px]`} required/>
                        <label htmlFor="password" className="cursor-pointer">Password</label>
                        <input onChange={InputValue} value={Login.password} name="password" type="password" minLength={6} id="password" className={`border mt-2 mb-5 border-1 block px-3 py-1 w-[500px]`} required/>
                        <p onClick={() => navigate("/checkemail")} className="text-center py-5 cursor-pointer">Forgot your password?</p>
                        <button type="submit" className="bg-[#3a3a3a] flex justify-center mx-auto hover:bg-[#606060] transition duration-150 text-white tracking-wide font-semibold px-5 py-2">Login</button>
                    </form>
                    </div>
                    <Link to="/signin">
                        <p className="cursor-pointer text-center py-5 ">Create account</p>
                    </Link>

                </div>
            )}
        </>
    )
}
export default Login