import { useLocation } from "react-router-dom"

function BuyNow(){
    const location = useLocation();
    const { mode, product, cart, subtotal } = location.state || {};
    if(mode === "single" && product){
        return(       
        <section>
            <div className="px-[150px] border border-1 border-[#E3E3E3] py-5">
                <img className="w-[60px] h-[60px]" src="title.webp" alt="" />
            </div>
            <div className="flex w-100">
                <div className="w-[50%] pl-[150px] p-10">
                    <h3 className="text-2xl py-2 font-semibold">Contact</h3>
                    <input type="email" placeholder="Email" className="py-3 focus:border-[#1878B9] transition duration-150 focus:outline-none border border-2 border-[#E3E3E3] rounded-md w-[100%] px-3" />
                    <label htmlFor="check" className="flex items-center py-3 text-sm">
                        <input id="check" className="w-[16px] h-[16px] mr-2 border border-1 border-[#E3E3E3] text-white cursor-pointer" type="checkbox" />
                        <span>Email me with news and offers</span>
                    </label>
                    <h3 className="text-2xl py-2 font-semibold">Delivery</h3>
                    <input disabled placeholder="Country Egypt" className="py-3 my-2 mr-3 text-sm border border-1 border-[#E3E3E3] rounded-md w-[100%] px-3" />
                    <div className="flex text-sm">
                        <input type="text" placeholder="First name" className="py-3 my-2 mr-1 focus:border-[#1878B9] transition duration-150 focus:outline-none border border-2 border-[#E3E3E3] rounded-md w-[100%] px-3" />
                        <input type="text" placeholder="Last name" className="py-3 my-2 focus:border-[#1878B9] transition duration-150 focus:outline-none border border-2 border-[#E3E3E3] rounded-md w-[100%] px-3" />
                    </div>
                    <input type="text" placeholder="Address" className="py-3 text-sm focus:border-[#1878B9] transition duration-150 focus:outline-none border border-2 border-[#E3E3E3] rounded-md w-[100%] px-3" />
                    <div className="flex text-sm text-[#A5ABB6]">
                        <input type="text" placeholder="City" className="py-3 my-2 focus:border-[#1878B9] transition duration-150 focus:outline-none border border-2 border-[#E3E3E3] rounded-md w-[100%] px-3" />
                        <select name="" id="" className="py-3 focus:border-[#1878B9] mx-2  transition duration-150 focus:outline-none border border-2 my-2 border-[#E3E3E3] rounded-md w-[100%] px-3">
                        <option value="">-- Select --</option>
                        <option value="cairo">Cairo</option>
                        <option value="giza">Giza</option>
                        <option value="alexandria">Alexandria</option>
                        <option value="dakahlia">Dakahlia</option>
                        <option value="sharqia">Sharqia</option>
                        <option value="gharbia">Gharbia</option>
                        <option value="menoufia">Menoufia</option>
                        <option value="qalyubia">Qalyubia</option>
                        <option value="ismailia">Ismailia</option>
                        <option value="suez">Suez</option>
                        <option value="port-said">Port Said</option>
                        <option value="damietta">Damietta</option>
                        <option value="fayoum">Fayoum</option>
                        <option value="beni-suef">Beni Suef</option>
                        <option value="minya">Minya</option>
                        <option value="assiut">Assiut</option>
                        <option value="sohag">Sohag</option>
                        <option value="qena">Qena</option>
                        <option value="luxor">Luxor</option>
                        <option value="aswan">Aswan</option>
                        <option value="red-sea">Red Sea</option>
                        <option value="matrouh">Matrouh</option>
                        <option value="new-valley">New Valley</option>
                        <option value="north-sinai">North Sinai</option>
                        <option value="south-sinai">South Sinai</option>
                        </select>
                        <input type="text" placeholder="Postal Code (optional)" className="py-3 my-2 focus:border-[#1878B9] transition duration-150 focus:outline-none border border-2 border-[#E3E3E3] rounded-md w-[100%] px-3" />
                    </div>
                    <input type="tel" placeholder="Phone" className="py-3 focus:border-[#1878B9] transition duration-150 focus:outline-none border border-2 border-[#E3E3E3] rounded-md w-[100%] px-3" />
                    <label htmlFor="check" className="flex items-center py-3 text-sm">
                        <input id="check" className="w-[16px] h-[16px] mr-2 border border-1 border-[#E3E3E3] text-white cursor-pointer" type="checkbox" />
                        <span>Save this information for next time</span>
                    </label>
                    <h3 className="text-xl py-2 font-semibold">Shipping method</h3>
                    <div className="border-[#1878B9] flex items-center justify-between text-md border p-3 rounded-md border-1 bg-[#F2F7FF]">
                        <p>Standard</p>
                        <p>70$</p>
                    </div>
                    <h3 className="text-2xl py-2 font-semibold">Payment</h3>
                    <p className="my-1 text-md text-gray-500">All transactions are secure and encrypted.</p>
                    <div className="border-[#1878B9] mt-1 text-md border p-3 rounded-md border-1 bg-[#F2F7FF]">
                        <p>Cash on Delivery (COD)</p>
                    </div>
                    <button className="hover:bg-[#115F93] bg-[#1878B9] text-white transition duration-150 rounded-md py-3 my-5 w-full font-semibold">Complete order</button>
                </div>
                <div className="w-[50%] fixed right-0 bottom-0 top-0 pr-[150px] bg-[#FAFAFA] p-7  border border-">
                    <div className="flex items-center justify-between pr-4">
                        <img className="w-[75px] h-[75px] mx-3 border border-4 border-white rounded-xl" src={product.image} alt="" />
                        <p className="px-5">{product.name}</p>
                        <p>$ {product.price}.00</p>
                    </div>
                    <div className="flex justify-between py-3 px-4">
                        <p>Subtotal</p>
                        <p>$ {product.price}.00</p>
                    </div>
                    <div className="flex justify-between py-3 px-4">
                        <p>Shipping</p>
                        <p>$ 70</p>
                    </div>
                    <div className="flex justify-between py-3 px-4">
                        <p className="font-semibold text-xl">Total</p>
                        <p>EGP {product.price + 70}.00</p>
                    </div>
                </div>
            </div>
        </section>)
    }
    if(mode === "cart" && cart){
    return(
        <section>
            <div className="px-[150px] border border-1 border-[#E3E3E3] py-5">
                <img className="w-[60px] h-[60px]" src="title.webp" alt="" />
            </div>
            <div className="flex w-100">
                <div className="w-[50%] pl-[150px] p-10">
                    <h3 className="text-2xl py-2 font-semibold">Contact</h3>
                    <input type="email" placeholder="Email" className="py-3 focus:border-[#1878B9] transition duration-150 focus:outline-none border border-2 border-[#E3E3E3] rounded-md w-[100%] px-3" />
                    <label htmlFor="check" className="flex items-center py-3 text-sm">
                        <input id="check" className="w-[16px] h-[16px] mr-2 border border-1 border-[#E3E3E3] text-white cursor-pointer" type="checkbox" />
                        <span>Email me with news and offers</span>
                    </label>
                    <h3 className="text-2xl py-2 font-semibold">Delivery</h3>
                    <input disabled placeholder="Country Egypt" className="py-3 my-2 mr-3 text-sm border border-1 border-[#E3E3E3] rounded-md w-[100%] px-3" />
                    <div className="flex text-sm">
                        <input type="text" placeholder="First name" className="py-3 my-2 mr-1 focus:border-[#1878B9] transition duration-150 focus:outline-none border border-2 border-[#E3E3E3] rounded-md w-[100%] px-3" />
                        <input type="text" placeholder="Last name" className="py-3 my-2 focus:border-[#1878B9] transition duration-150 focus:outline-none border border-2 border-[#E3E3E3] rounded-md w-[100%] px-3" />
                    </div>
                    <input type="text" placeholder="Address" className="py-3 text-sm focus:border-[#1878B9] transition duration-150 focus:outline-none border border-2 border-[#E3E3E3] rounded-md w-[100%] px-3" />
                    <div className="flex text-sm text-[#A5ABB6]">
                        <input type="text" placeholder="City" className="py-3 my-2 focus:border-[#1878B9] transition duration-150 focus:outline-none border border-2 border-[#E3E3E3] rounded-md w-[100%] px-3" />
                        <select name="" id="" className="py-3 focus:border-[#1878B9] mx-2  transition duration-150 focus:outline-none border border-2 my-2 border-[#E3E3E3] rounded-md w-[100%] px-3">
                        <option value="">-- Select --</option>
                        <option value="cairo">Cairo</option>
                        <option value="giza">Giza</option>
                        <option value="alexandria">Alexandria</option>
                        <option value="dakahlia">Dakahlia</option>
                        <option value="sharqia">Sharqia</option>
                        <option value="gharbia">Gharbia</option>
                        <option value="menoufia">Menoufia</option>
                        <option value="qalyubia">Qalyubia</option>
                        <option value="ismailia">Ismailia</option>
                        <option value="suez">Suez</option>
                        <option value="port-said">Port Said</option>
                        <option value="damietta">Damietta</option>
                        <option value="fayoum">Fayoum</option>
                        <option value="beni-suef">Beni Suef</option>
                        <option value="minya">Minya</option>
                        <option value="assiut">Assiut</option>
                        <option value="sohag">Sohag</option>
                        <option value="qena">Qena</option>
                        <option value="luxor">Luxor</option>
                        <option value="aswan">Aswan</option>
                        <option value="red-sea">Red Sea</option>
                        <option value="matrouh">Matrouh</option>
                        <option value="new-valley">New Valley</option>
                        <option value="north-sinai">North Sinai</option>
                        <option value="south-sinai">South Sinai</option>
                        </select>
                        <input type="text" placeholder="Postal Code (optional)" className="py-3 my-2 focus:border-[#1878B9] transition duration-150 focus:outline-none border border-2 border-[#E3E3E3] rounded-md w-[100%] px-3" />
                    </div>
                    <input type="tel" placeholder="Phone" className="py-3 focus:border-[#1878B9] transition duration-150 focus:outline-none border border-2 border-[#E3E3E3] rounded-md w-[100%] px-3" />
                    <label htmlFor="check" className="flex items-center py-3 text-sm">
                        <input id="check" className="w-[16px] h-[16px] mr-2 border border-1 border-[#E3E3E3] text-white cursor-pointer" type="checkbox" />
                        <span>Save this information for next time</span>
                    </label>
                    <h3 className="text-xl py-2 font-semibold">Shipping method</h3>
                    <div className="border-[#1878B9] flex items-center justify-between text-md border p-3 rounded-md border-1 bg-[#F2F7FF]">
                        <p>Standard</p>
                        <p>70$</p>
                    </div>
                    <h3 className="text-2xl py-2 font-semibold">Payment</h3>
                    <p className="my-1 text-md text-gray-500">All transactions are secure and encrypted.</p>
                    <div className="border-[#1878B9] mt-1 text-md border p-3 rounded-md border-1 bg-[#F2F7FF]">
                        <p>Cash on Delivery (COD)</p>
                    </div>
                    <button className="hover:bg-[#115F93] bg-[#1878B9] text-white transition duration-150 rounded-md py-3 my-5 w-full font-semibold">Complete order</button>
                </div>
                <div className="w-[50%] fixed right-0 bottom-0 top-0 pr-[150px] bg-[#FAFAFA] p-7  border border-">
                    {cart.map((item:any,index:number)=>(
                        <div key={index}>
                            <div className="flex py-2 relative items-center justify-between pr-4">
                                <span className="bg-black pl-[7px] pt-[1px] text-sm text-white w-[25px] border border-2 border-white absolute top-[-2px] rounded-md left-[70px] h-[25px]">{item.quantity}</span>
                                <img className="w-[75px] shadow-[0_4px_20px_0_#D9D9D9] h-[75px] mx-3 border border-4 border-white rounded-xl" src={item.image} alt="" />
                                <div>
                                    <p className="px-5">{item.name}</p>
                                </div>
                                <p>$ {item.price}.00</p>
                            </div>
                            <hr />
                        </div>
                    ))}
                <div className="flex justify-between py-3 px-4">
                    <p>Subtotal</p>
                    <p>$ {subtotal}.00</p>
                </div>
                <div className="flex justify-between py-3 px-4">
                    <p className="text-md ">Shipping</p>
                    <p>$ 70</p>
                </div>
                <div className="flex justify-between py-3 px-4">
                    <p className="font-semibold text-xl">Total</p>
                    <p>EGP {subtotal + 70}</p>
                </div>
                </div>
            </div>
        </section>
    )}
}
export default BuyNow