import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {

  const searchParams =useSearchParams()

  const utm = new URLSearchParams(searchParams.toString())
  const [currentPage, setCurrentPage] = useState(utm.get("page") ? Number(utm.get("page")) : 1)

  
  useEffect(() => {
    
  },[currentPage])//eslint-disable-line
  //
  return (
    <div style={{borderRadius:'8px',paddingInline:'15%',color:'var(--arkreen-text-primary)'}}>
      <div style={{background:'#FFFFFF',borderRadius:'8px',padding:'16px',color:'var(--arkreen-text-primary)'}}>
        <div style={{fontSize:'20px',fontWeight:700}}>Arkreen Cells</div>
        <div style={{paddingBlock:'20px'}}>
          
          
        </div>
      </div>
    </div>
  )
}
