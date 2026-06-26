import { IoLogoFacebook } from "react-icons/io";
import { SiInstagram } from "react-icons/si";

function Footer(){
    return(
        <footer className="bg-[#F6F6F6] py-10 text-center">
            <h3 className="tracking-wider font-[600] text-md font-helvetica pb-10">SIGN UP FOR DISCOUNTS + UPDATES</h3>
            <input type="text" placeholder="Email address" className="py-3 px-5 border border-2 w-[30%] border-[#DFDFDF]" />
            <button className="bg-[#3a3a3a] mb-20 hover:bg-[#606060] transition duration-150 text-white tracking-wide font-semibold px-5 py-3">SUBSCRIBE</button>
            <hr />
            <div className="text-right pt-5 px-[100px]">
                <a href="https://www.facebook.com/miyokowatches">
                    <IoLogoFacebook className="inline text-3xl" />
                </a>
                <a href="https://www.instagram.com/miyoko_watches/">
                    <SiInstagram className="inline text-2xl ml-7" />
                </a>
                <p className="pt-5 text-sm">© 2025, Miyoko Watches</p>
            </div>
        </footer>

    )
}
export default Footer