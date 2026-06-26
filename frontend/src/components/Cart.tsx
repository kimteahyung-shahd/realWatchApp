import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";


function Cart (){
    const [cart , setCart] = useState<any[]>([])
    const navigate = useNavigate();
    const changeQ = (e: React.ChangeEvent<HTMLSelectElement>,id:number)=>{
        const newQty = Number(e.target.value);
        const updatedCart = cart.map((item: any) =>
            item.id === id ? { ...item, quantity: newQty } : item
          );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        window.dispatchEvent(new Event("cartUpdated"));

    }
    function remove(id: number){
        const raw = localStorage.getItem("cart") || "[]";
        let cart = JSON.parse(raw);
        cart = cart.filter((item: any) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(cart));
        setCart(cart);
        window.dispatchEvent(new Event("cartUpdated"));

    }
    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
  
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(storedCart);
        const initialized = storedCart.map((item: any) => ({
            ...item,
            quantity: item.quantity || 1,
          }));
          setCart(initialized);
      
      }, []);
    
    return(
        <section className="mt-5">
            {cart.length === 0 ? (
                <div className="flex items-center justify-center p-[130px]">
                    <div>
                        <h1 className="text-center tracking-wider font-[700] text-4xl font-helvetica">Your cart</h1>
                        <p className="text-center my-4">Your cart is currently empty.</p>
                        <button onClick={()=>navigate("/allwatch")} className="bg-black border border-1 border-black text-sm font-semibold text-white py-3 px-4 hover:bg-[#606060] transition duration-150 flex items-center">CONTINUE SHOPPING  <FaLongArrowAltRight className="inline text-xl ml-2" /></button>
                    </div>
                </div>
            ) : (
                <div>
                    <h1 className="text-center tracking-wider font-[700] text-4xl font-helvetica pt-10">Your cart</h1>
                    <p onClick={()=>navigate("/allwatch")} className="underline text-center py-5 text-sm cursor-pointer">Continue shopping</p>
                    
                    <section className="px-[100px] text-sm">
                        <div className="flex uppercase pb-5 border-b-1 border-[#EBEBEB] items-center justify-between">
                            <div>
                                <p>Product</p>
                            </div>
                            <div className="flex justify-between w-[32%]">
                                <p>Price	</p>
                                <p>Quantity	</p>
                                <p>Total</p>
                            </div>
                        </div>
                        <hr />
                        {cart.map((item: any, index)=>(
                            <div key={index} className="py-4 border-b">
                                <div className="flex items-center justify-between">
                                    <div className="flex">
                                        <img onClick={()=>navigate('/openproject',{state:{id: item.id, name: item.name , img:item.image,price: item.price,oldPrice: item.oldPrice }})} src={item.image} alt="" className="w-[95px] cursor-pointer h-[95px] mr-4" />
                                        <div className="ml-5">
                                            <span onClick={()=>navigate('/openproject',{state:{id: item.id, name: item.name , img:item.image,price: item.price,oldPrice: item.oldPrice }})} className="font-bold text-xl hover:underline transition duration-150">{item.name}</span>
                                             <span onClick={()=>remove(item.id)} className="underline block text-gray-500 cursor-pointer">Remove</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between w-[32%]">
                                        <span>$ {item.price}.00</span>
                                        <select value={item.quantity} onChange={(e)=>changeQ(e,item.id)} name="" id="" className="border border-gray-300 rounded-md px-1 py-2 ">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>                                            
                                        </select>
                                        <span>$ {item.price * item.quantity}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                    <div className="my-10 px-[100px]">
                    <div className="flex font-semibold items-center space-x-20">
                        <p>Subtotal</p>
                        <p>LE {subtotal}.00 EGP</p>
                    </div>
                    <p className="py-3">Taxes and <span onClick={()=>navigate("/shipping")} className="underline cursor-pointer">shipping</span> calculated at checkout</p>
                    <button onClick={()=>navigate("/buynow" ,{state:{ mode:"cart",subtotal,cart}})} className="bg-black border border-1 border-black text-sm font-semibold text-white py-2 px-4 hover:bg-[#606060] transition duration-150 flex items-center">CHECK OUT</button>
                    </div>
                </div>
            )}
        </section>


    )
}
export default Cart