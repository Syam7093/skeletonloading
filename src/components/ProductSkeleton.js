import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


import Card from 'react-bootstrap/Card';
import axios from "axios"

export const ProductSkeleton = () => {
    useEffect(()=>{
        productdata()
    },[])
    const [product,setproduct]=useState([])
    const [loading,setloading]=useState(false)
    const productdata=async()=>{
        setloading(true)
        const data=await axios.get("https://fakestoreapi.com/products")
        console.log(data.data)
        setproduct(data.data)
        setTimeout(()=>{
            setloading(false)
        },1000)
    }
  return (
    <div  >
       
      {loading ?    <div style={{ display:"flex" ,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",margin:"15px",padding:"15px"}}>
      <Skeleton ><button>submitsss</button></Skeleton>
      {[...Array(10)].map((_, index) => (
       
        <div key={index} style={{width:300,margin:"15px",padding:"15px"}}>
            
          <div className="card" style={{ border:"10px solid #F5EEF8",width:"18rem",textAlign:"center"}}>
            <Skeleton square width={150} height={150}  highlightColor="grey" >
            <img className="card-img-top" src="" alt="Card image cap" height={100} width={100} style={{textAlign:"center"}}></img>
            </Skeleton>
            <div className="card-body">
                <Skeleton height={30} width={250} highlightColor="grey" >
              <h5 className="card-title" style={{textAlign:"center"}}></h5>
              </Skeleton>
              <Skeleton height={20} width={100} highlightColor="grey" >
              <h5 className="card-title" style={{textAlign:"center"}}></h5>
              </Skeleton>
              <Skeleton height={20} width={50} highlightColor="grey" >
              <h5 className="card-title" style={{textAlign:"center"}}></h5>
              </Skeleton>
            </div>
          </div>
        </div>
      ))}
    </div> : <div style={{ display:"flex" ,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"}}>
  
   <button>submit</button>
   
       {
        product.map((e)=>{
            return (
                <div style={{border:"10px solid #F5EEF8",width:300,margin:"18px",padding:"15px",}}>
                    
                    <div className="card" style={{width:"18rem",textAlign:"center"}}>
  <img className="card-img-top" src={e.image } alt="Card image cap" height={100} width={100} style={{textAlign:"center", borderRadiusL:"50%"}}></img>
  <div className="card-body">
    <h5 className="card-title" style={{textAlign:"center"}}>{e.title}</h5>
    <p className="card-text">{e.category}</p>
    <p className="btn btn-primary">{e.price}</p>
  </div>
</div>
                </div>
            )
        })
       }
    </div>}

   
    </div>
  )
}
