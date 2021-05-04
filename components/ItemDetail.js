import React, {useState, useEffect} from 'react';


const ItemDetail = ({match}) => {
  const url =`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`;
  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const response = await fetch(url);
    const item = await response.json();
    //console.log(item.data)
    //console.log(item.data.item.images.icon)
    setItem(item.data)
  }
  useEffect( () => {
    fetchItem();
    //console.log(match)
  },[])
return(
  <div>
  <h1>{item.itemId}</h1>
  <h1>{item[1]}</h1>
  
  </div>
)
}

export default ItemDetail;