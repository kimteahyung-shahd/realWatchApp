import axios from "axios";
import { apiUrl } from "../lib/api";
import { useState } from "react";
import Swal from "sweetalert2";
import { useLocation ,useNavigate } from "react-router-dom";

function ResetPassword(){
    const [newPassword,setNewPassword] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email;
    const ChangePasword =async()=>{
        try {
            let res = await axios.get(apiUrl(`/users?email=${email}`));
             
            let userId = res.data[0].id;
            await axios.patch(apiUrl(`/users/${userId}`), {password:newPassword});
            Swal.fire({
                title: "Success 🎉",
                text: "Password updated successfully",
                icon: "success",
                showConfirmButton: false,
                timer: 2000, 
              }).then(() => {
                navigate("/login")
              });
                      } 
        catch (error){
            alert("erroooor");
        }
    }
    return(
    <section>
        <h1 className="text-center font-[600] py-10 text-4xl font-helvetica">Reset Password</h1>
        <div className="flex justify-center">
            <form   onSubmit={(e) => {e.preventDefault();ChangePasword()}} className="text-md">
                <label htmlFor="password" className="cursor-pointer">Change password</label>
                <input onChange={(e)=>{setNewPassword(e.target.value)}} name="password" type="password" minLength={6} id="password" className={`border mt-2 mb-5 border-1 block px-3 py-1 w-[500px]`} required/>
                <button type="submit" className="bg-[#3a3a3a] mb-10 flex justify-center mx-auto hover:bg-[#606060] transition duration-150 text-white tracking-wide font-semibold px-5 py-2">Change</button>
            </form>
        </div>
    </section>

    )
}
export default ResetPassword