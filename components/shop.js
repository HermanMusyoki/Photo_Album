import React,{useState,useEffect} from 'react'
import { Link} from 'react-router-dom'
const url = 'https://fortnite-api.theapinetwork.com/upcoming/get'
const Shop = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
   const response = await fetch(url);
    const items = await response.json();
    console.log(items.data);
    setItems(items.data);
  }
  useEffect( () => {
    fetchItems();
  },[])
  return(
    <div>
      {items.map((item) => {
//const {name,type} = item;
      return (
      <h1 key={item.itemId}>
      <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
      </h1>)
      })}
    </div>
  )
}

export default Shop;