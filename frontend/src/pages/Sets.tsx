import { useState,useEffect } from "react"
import DisplayProducts from "../components/DisplayProducts"
import { apiUrl } from "../lib/api"

function Sets (){
    const [Data, setData] = useState<any[]>([]);
    const [originalData, setOriginalData] = useState<any[]>([]); // keep original

    useEffect(()=>{
        const FetchData = async () =>{
            try{
                let link = await fetch(apiUrl("/products"));
                let data = await link.json()
                const setsProducts = data.filter((product: any) => product.Sets);
                setData(setsProducts);
                setOriginalData(setsProducts);


            }
            catch(error){
                console.log("erroooor");
            }
        }        
        FetchData();
    },[])
    const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
    
        if (value === "low") {
          setData([...Data].sort((a, b) => a.price - b.price));
        } else if (value === "high") {
          setData([...Data].sort((a, b) => b.price - a.price));
        } else if (value === "Choose"){
          setData(originalData); // reset if "choose"
        }
      };    
    return(
       <section>
            <h1 className="text-center font-[600] py-10 text-4xl font-helvetica">Sets</h1>
            <div className="border border-1 py-3 px-20 mb-5">
            <div className="flex justify-between items-center">
            <div>
            <label htmlFor="list" className="text-sm cursor-pointer">SORT BY</label>
            <select onChange={handleSort} id="list" name="list" defaultValue="Choose" className="ml-3 cursor-pointer text-md font-semibold p-2">
                <option value="Choose" disabled>Choose an option</option>
                <option className="cursor-pointer" value="low">Price,low to high</option>
                <option className="cursor-pointer" value="high">Price,high to low</option>
            </select>
            </div>
            <span>{Data.length} products</span>
        </div>
            </div>
            {Data && (<DisplayProducts Data={Data} />)}
       </section>
    )
}
export default Sets