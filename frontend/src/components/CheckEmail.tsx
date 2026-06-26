import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../lib/api";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


function CheckEmail(){
    const [checkEmail,setCheckEmail] = useState("");
    const navigate = useNavigate()
    const InputValue = (e:any)=>{
        setCheckEmail(e.target.value)    
    }

    const CheckEmail = async()=>{
            try{
                let check = await axios.get(apiUrl(`/users?email=${checkEmail}`));
                if(check.data.length > 0){
                    Swal.fire({
                        title: 'Correct Email!',
                        text: 'Know you can change your email',
                        icon: 'success',
                        confirmButtonText: 'Next',
                        confirmButtonColor: "#28a745"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate("/resetpassword", { state: { email: checkEmail } }); 
                            }
                        })}
                else if(check.data.length === 0){
                    Swal.fire({
                        title: "Wrong Email ❌",
                        text: "Invalid email",
                        icon: "error",
                        confirmButtonText: "Try Again",
                        confirmButtonColor: "#d33",
                      })    
                }
                
                }
            catch(error){
                alert("erroooor");
            }}
        

    return(
    <section>
        <h1 className="text-center font-[600] py-10 text-4xl font-helvetica">Enter your email</h1>
        <div className="flex justify-center">
            <form   onSubmit={(e) => {e.preventDefault();CheckEmail()}} className="text-md">
                <label htmlFor="email" className="cursor-pointer">Email</label>
                <input value={checkEmail} onChange={InputValue} name="email" type="email" id="email" className={`border mt-2 mb-5 border-1 block px-3 py-1 w-[500px]`} required/>
                <button type="submit" className="bg-[#3a3a3a] mb-10 flex justify-center mx-auto hover:bg-[#606060] transition duration-150 text-white tracking-wide font-semibold px-5 py-2">Check email</button>
            </form>
        </div>
    </section>
    )
}
export default CheckEmail