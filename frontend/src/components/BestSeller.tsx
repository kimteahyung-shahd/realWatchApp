import { useEffect, useState } from "react";
import DisplayProducts from "../components/DisplayProducts"
import { apiUrl } from "../lib/api"


function BestSeller () {
    const [Data,setData] = useState<any[]>([])
    useEffect(()=>{
        const fetchData = async () => {
            try{
                let link = await fetch(apiUrl("/products"));
                let data = await link.json();
                setData(data);
                const setsProducts = data.filter((product: any) => product.bestSeller);
                setData(setsProducts);
        
            }
            catch(error){
                console.error("Fetch failed:",error);
            }
        }
        fetchData();
    }, [])
    return(
        <section className="mt-5">
            <h1 className="text-center tracking-widest font-[600] text-xl font-helvetica py-10">MIYOKO'S BEST SELLERS</h1>
            {Data && (<DisplayProducts Data={Data} />)}
        </section>
    )
}
export default BestSeller 