import { useNavigate } from "react-router-dom"

function Style(){
    const navigate = useNavigate()
    return(
        <section className="mb-20">
            <h1 className="text-center tracking-widest text-xl font-[600] font-helvetica py-20 uppercase">Pick Your Style</h1>
            <div className="flex mx-[130px]">
                <a onClick={()=>navigate("/leather")} className="bg-[url('/leather.webp')] text-white bg-center hover:bg-[#7A6C68]/90 transition duration-150 bg-cover font-bold flex items-center justify-center text-2xl bg-blend-multiply bg-[#7A6C68]/60 w-[240px] h-[250px]" href="">
                    <h3>Leather</h3>
                </a>
                <a onClick={()=>navigate("/metal")} className="bg-[url('/metal.webp')] text-white mx-10 hover:bg-[#7A6C68]/90 transition duration-150 bg-center bg-cover font-bold flex items-center justify-center text-2xl bg-blend-multiply bg-[#7A6C68]/60 w-[240px] h-[250px]" href="">
                    <h3>Metal</h3>
                </a>
            </div>

        </section>
    )
}
export default Style