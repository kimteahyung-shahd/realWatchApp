import { useState } from "react"
import axios from "axios";
import { apiUrl } from "../lib/api";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";



function SignUp (){
    const [Form ,setForm] = useState({username:'',password:'',email:""});
    const typeInInput =(e: any)=>{ //typeScript
        setForm({ ...Form, [e.target.name]: e.target.value });
    }
    const navigate =useNavigate()
    const handelSignUp = async()=>{
        try{
            await axios.post(apiUrl("/users"),Form);
            Swal.fire({
                title: 'Create Account Successful!',
                text: 'Welcome 👋',
                icon: 'success',
                confirmButtonText: 'Go Home',
                confirmButtonColor: "#28a745"
                }).then((result) => {
                    if (result.isConfirmed) {
                      navigate("/"); 
                    }
        })        }
        catch(error){
            alert("Something went wrong");
        }
    }
    return(
        <section>
            <h1 className="text-center font-[600] py-10 text-4xl font-helvetica">Create Account</h1>
            <div className="flex justify-center">
            <form onSubmit={(e)=>{
                e.preventDefault();handelSignUp();
                }} className="text-md">
                <label htmlFor="First" className="cursor-pointer">User Name</label>
                <input onChange={typeInInput} name="username" type="text" value={Form.username} id="First" className="border mt-2 mb-5 px-2 border-1 border-[#D3CFCF] block px-3 py-1 w-[500px]" required />
                <label htmlFor="email" className="cursor-pointer">Email</label>
                <input onChange={typeInInput} name="email" type="email" value={Form.email} id="email" className="border mt-2 mb-5 border-1 border-[#D3CFCF] block px-3 py-1 w-[500px]" required />
                <label htmlFor="password" className="cursor-pointer">Password</label>
                <input onChange={typeInInput} minLength={6} name="password" type="password" value={Form.password} id="password" className="border mt-2 border-1 border-[#D3CFCF] block py-1 w-[500px]" required />
                <button type="submit" className="bg-[#3a3a3a] mt-5 mb-20 flex justify-center mx-auto hover:bg-[#606060] transition duration-150 text-white tracking-wide font-semibold px-5 py-2">CREATE</button>
            </form>
            </div>
        </section>
    )
}
export default SignUp