import { useState } from "react"
import { useNavigate } from "react-router-dom"

function DisplayProducts({Data}: {Data: any[]}){
    const [Change,setChange] = useState<number | null>(null) //typescript
    const navigate = useNavigate();
    return(
        <section>
            <div className={`flex flex-wrap px-[100px] group py-10`}>
                {Data.map((data, index)=>{
                return <div onMouseEnter={()=>setChange(index)} onClick={()=>navigate("/openproject", { state: { id: data.id, name: data.name , img:data.image,price: data.price,oldPrice: data.oldPrice } })} onMouseLeave={()=>setChange(null)} key={index} className={`m-5 transition duration-150 w-[240px] text-md ${Change === index ? "hover:cursor-pointer":"transition" }` }>
                        <img className={`w-[240px] h-[250px] ${Change === index ?" group-hover:opacity-60":"transition" }`} src={data.image} alt="" />
                        <div className="font-bold">
                            <h3 className={`mt-3 group-hover:unterline transition duration-150 pb-1 text-[#606060] ${Change === index ? "group-hover:underline":"transition" }`}>{data.name}</h3>
                            <span className="text-[#EA0606]">LE {data.price}</span>
                            <span className="text-[#606060] line-through ml-3">LE {data.oldPrice}</span>
                            <button className="bg-[#EA0606] block font-base text-white text-sm px-1 mt-1 uppercase">Sale</button>
                        </div>
                    </div>
                })}
            </div>

        </section>
    )
}
export default DisplayProducts