
import { useState, useEffect } from 'react';
import CardList from './CardList';

export default function Main({postData}){
    const [cardLists, setCardLists] = useState([]);
    const [filterByLocation, setFilterByLocation] = useState([]);
    const [strSearch, setStrSearch] = useState("");
    useEffect(()=>{
        setCardLists(postData);
    },[]);

    useEffect(()=>{
        const tempLocationArray = {};
        for(let cards of cardLists){
            if(!tempLocationArray[cards.location]){
                tempLocationArray[cards.location] = 0;
            }
            tempLocationArray[cards.location]++;
        }
        setFilterByLocation(Object.entries(tempLocationArray));
    },[cardLists]);

    useEffect(()=>{
        if(strSearch){
            setCardLists(postData.filter((elem) => elem.title.toLowerCase().includes(strSearch.toLowerCase())||elem.location.toLowerCase().includes(strSearch.toLowerCase())));
        }
        else{
            setCardLists(postData);
        }
    },[strSearch]);

    function handleTextChange(){
        const inputField = document.getElementById('search_bar').value;
        setStrSearch(inputField);
    }

    return(
        <main>
        <div className="container-fluid" >
            <div className="row justify-content-md-center">
                <div className="input-group mb-3">
                    <label htmlFor="search_bar" className='form-label'>Search posts by location...</label>
                    <input type="text" id="search_bar" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleTextChange}/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10">
                    <CardList cardLists={cardLists} />
                </div>
                <div className='col-sm-2'>
                    <div className='location_filter'>
                        <ul className="list-group">
                            {filterByLocation.map((elem)=>(<li className='list-group-item'>{elem[0]}{elem[1]}</li>))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </main>
       
    )
}