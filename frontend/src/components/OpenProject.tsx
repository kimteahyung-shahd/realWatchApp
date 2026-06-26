import { useLocation,useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../lib/api";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';





function OpenProject(){
    const [paragraph,setParagraph] = useState<{ paragraph: string }[]>([]);
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state?.id as number | undefined;
    const image = location.state?.img;
    const name = location.state?.name;
    const price = location.state?.price;
    const oldPrice = location.state?.oldPrice;
    const notify = () => toast('Added to the cart.');
    useEffect(()=>{
        const Paragraph = async()=>{
            let link  = await axios.get(apiUrl(`/products?id=${id}`));
            let data = link.data;
            setParagraph(data);
        }
        Paragraph();
    },[])
    const addToCart = (product: unknown) =>{
        const raw = localStorage.getItem("cart") || "[]";
        const cart = JSON.parse(raw) as unknown[]; //typescript
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));

    }
    return(
        <section className="py-10">
            <div className="flex justify-center">
                <div className="w-[500px] overflow-hidden transition duration-300">
                    <img className={`w-[500px] overflow-hidden`} src={image} alt="" />
                </div>
                <div className="pl-10 w-[50%]">
                    <h1 className="text-4xl font-bold">{name}</h1>
                    <div className="flex my-3">
                        <span className="text-[#EA0606] text-xl font-bold">LE {price}</span>
                        <span className="text-[#606060] text-xl font-bold line-through mx-3">LE {oldPrice}</span>
                        <button className="bg-[#EA0606] inline-block h-4 px-2 mt-1.5 pb-0.5 font-base text-white text-[12px] uppercase">Sale</button>
                    </div>
                    <p className="pb-2 text-sm"><a className="underline cursor-pointer" onClick={()=>navigate("/shipping")}>Shipping</a> calculated at checkout.</p>
                    <div className="my-7">
                        <button onClick={()=>{addToCart({id,name,image,price});notify()}}  className="border border-1 border-black text-sm font-semibold py-3 w-[75%]">ADD TO CART</button>
                        <Toaster toastOptions={{ style: {background: '#4CAF50',color: '#fff',borderRadius: '5px',padding: '7px 12px'}}}/>
                        <button onClick={()=>navigate("/buynow",{state:{mode:"single",product: {name: name,price: price,quantity: 1,image: image,},}})} className="bg-black rder border-1 border-black text-sm font-semibold text-white py-3 hover:bg-[#606060] transition duration-150 w-[75%] mt-2">BUY IT KNOW</button>
                    </div>
                    <div className="my-10 text-sm">
                        {paragraph.map((p,index)=>{
                            return(
                                <p key={index}>{p.paragraph}</p>
                            )
                        })}
                    </div>
                    <div className="flex my-3">
                        <IoLogoFacebook className="inline text-3xl text-[#3B5998]" />
                        <FaTwitter className="inline text-3xl mx-3 text-[#1DA1F2]"/>
                        <FaPinterest className="inline text-3xl text-[#E60023]"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OpenProject