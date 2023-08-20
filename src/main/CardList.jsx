
import Card from './Card';
import { useState, useEffect } from 'react';

export default function CardList({postData}){
    const [cardLists, setCardLists] = useState([]);
    useEffect(()=>{
        setCardLists(postData);
    },[]);
    return(
        <div>
            {cardLists.map((elem)=>{
                return(<Card elem={elem} />);
            })}
            
        </div>
    )
}