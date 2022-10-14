import {useEffect,useState} from 'react'
import axios from 'axios';

function Product() {
const [order,setOrder]=useState([])
// const [product,setProduct]=useState('')
const [id,setId]=useState('');
const [name,setName]=useState('');

useEffect(()=>{
    axios.get("http://localhost:5000/outofstock").then((response)=>{
      setOrder(response.data)
   })
},[])

const productAdd=()=>{
    axios.post("http://localhost:5000/addproduct",{
    Product_id:id,
    Product_name:name
  }).then((response)=>{
    alert('product added')
  })
}


  return (
    <div>
      <h1>OUT-OF-STOCK</h1>
      <table style={{border:"1px solid"}}>
        <tr>
          <th>Product_id</th>
          <th>Product_name</th>
        </tr >
        <tr style={{border:"1px solid"}}>
          {order.map((item)=>{
            return(
              <div>
          <td>{item.Product_id}</td>
          <td>{item.Product_name}</td>
          </div>
          )
          })}
        </tr>
      </table>
      <div>
        <h1>Product  add</h1>
        <input type="text" onChange={(e)=>setId(e.target.value)} placeholder="Product_id"/>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Product_name"/>
        <button onClick={productAdd}>ADD</button>
      </div>
    </div>
  )
}

export default Product