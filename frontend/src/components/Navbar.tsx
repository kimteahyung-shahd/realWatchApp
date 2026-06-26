import { IoIosArrowDown } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function NavBar (){
    const navigate = useNavigate();
    const [Active,setActive] = useState("");
    const [Menu,setMenu] = useState(false);
    const [cartCount, setCartCount] = useState<number>(0);
    // useEffect(() => {
    //     const updateCartCount = () => {
    //         const raw = localStorage.getItem("cart") || "[]";
    //         const cart = JSON.parse(raw) as any[];
    //         setCartCount(cart.length);
    //       };
    //       updateCartCount();
    //       window.addEventListener("storage", updateCartCount);

    //   }, []);
    useEffect(() => {
        const updateCartCount = () => {
          const raw = localStorage.getItem("cart") || "[]";
          const cart = JSON.parse(raw) as any[];
          setCartCount(cart.length);
        };
      
        updateCartCount(); // أول تحميل
      
        // يسمع للحدث اللي انتي بتبعتِيه من Cart
        window.addEventListener("cartUpdated", updateCartCount);
      
        return () => {
          window.removeEventListener("cartUpdated", updateCartCount);
        };
      }, []);
          

    const getLinkClass = (name:string) =>{
        return `text-black mx-3 transition hover:underline hover:text-[#606060] ${Active === name ? "text-[#606060] underline" : "text-black"}`
    }
        return(
        <nav className="border border-1 relative">
            {Menu && (
                <ul className="py-4 px-3 bg-white border absolute top-14 left-[585px] w-[80px] border-1 text-left">
                    <li onClick={()=>{navigate("/leather");setMenu(false);}} className="hover:underline my-1 cursor-pointer hover:text-[#606060]">Leather</li>
                    <li onClick={()=>{navigate("/metal");setMenu(false);}} className="hover:underline my-1 cursor-pointer hover:text-[#606060]">Metals</li>
                </ul>
            )}
            <div className="flex justify-between items-center py-5 px-20">
                <div>
                    <h1 className="uppercase font-semibold text-[#606060] text-2xl">Miyoko Watches</h1>
                </div>
                <div>
                    <Link className={getLinkClass("Home")} onClick={()=>setActive("Home")} to="/">Home</Link>
                    <Link className={getLinkClass("Watches")} onClick={()=>{setActive("Watches");setMenu(true)}} to="/">Watches <IoIosArrowDown className="inline" /></Link>
                    <Link className={getLinkClass("Sets")} onClick={()=>setActive("Sets")} to="/Sets">Sets</Link>
                    <Link className={getLinkClass("Sunglasses")} onClick={()=>setActive("Sunglasses")} to="/Sunglasses">Sunglasses</Link>
                    <Link className={getLinkClass("luxuriesSets")} onClick={()=>setActive("luxuriesSets")} to="/luxuriesSets">Luxuries Sets</Link>
                </div>
                <div className="flex text-[28px] font-bold">
                    <Link to="/login">
                        <CiUser className="mx-3" />
                    </Link>
                    <Link to="/cart">
                        <MdOutlineShoppingBag />
                        {cartCount > 0 && (
                        <span className="absolute right-[70px] bottom-[35px] bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {cartCount}
                        </span>
                        )}

                    </Link>
                </div>

            </div>
        </nav>
    )
}
export default NavBar