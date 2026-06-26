import { useState,useEffect } from "react";
import DisplayProducts from "./DisplayProducts"
import { apiUrl } from "../lib/api"

function AllWatches (){
    const [Data,setData] = useState<any[]>([])
    useEffect(()=>{
        const fetchData = async () => {
            try{
                let link = await fetch(apiUrl("/products"));
                let data = await link.json();
                setData(data);        
            }
            catch(error){
                console.error("Fetch failed:",error);
            }
        }
        fetchData();
    }, [])

    return(
        <section>
            <h1 className="text-center font-[600] py-10 text-4xl font-helvetica">All products</h1>
            <div className="border border-1 py-3 px-20 mb-5">
            <div className="flex justify-between items-center">
            <div>
                <label htmlFor="list" className="text-sm cursor-pointer">SORT BY</label>
                <select id="list" name="list" defaultValue="Choose" className="ml-3 text-md font-semibold p-2">
                    <option value="choose" disabled>Choose an option</option>
                    <option value="low">Price,low to high</option>
                    <option value="high">Price,high to low</option>
                </select>
                </div>
                <span>{Data.length} products</span>
            </div>
            </div>
            {Data && (<DisplayProducts Data={Data} />)}
        </section>
    )
}
export default AllWatches