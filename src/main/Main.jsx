
import { useState, useEffect } from 'react';
import CardList from './CardList';
import ErrorMsg from '../components/common/error/ErrorMsg';

export default function Main({postData}){
    const [cardLists, setCardLists] = useState([]);
    const [filterByLocation, setFilterByLocation] = useState([]);
    const [strSearch, setStrSearch] = useState("");
    const [errMsg, setErrMsg] = useState(false);
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

    useEffect(()=>{
        if(cardLists.length == 0){
            setErrMsg(true);
        }
        else{
            setErrMsg(false);
        }
    });

    function handleTextChange(){
        const inputField = document.getElementById('search_bar').value;
        setStrSearch(inputField);
    };

    function handleClearText(){
        const inputField = document.getElementById('search_bar');
        inputField.value = "";
        setCardLists(postData);
    };

    return(
        <main>
            <div className="container-fluid mb-5" >
                
                <div className="row d-md-block d-none">
                    <div className="input-group mb-3 ">
                        <label htmlFor="search_bar" className='form-label'>Search posts by location...</label>
                        <input type="text" id="search_bar" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleTextChange}/>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={()=>handleClearText()}>Clear</button>
                    </div>
                </div>
                {errMsg ? (<ErrorMsg />):(<>
                <div className="row" >
                    <div className="col-sm-12 col-md-8 container-fluid" >
                        <CardList cardLists={cardLists} />
                    </div>
                    <div className='col-sm-12 col-md-4'>
                        <div className='location_filter'>
                            <p className="h4">Post by <span style={{color:"gold"}}>location</span></p>
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Location</th>
                                    <th scope="col">Post</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filterByLocation.map((elem)=>(
                                        <tr>
                                            <td className='text-left'>{elem[0]}</td>
                                            <td className='text-right'><span className='text-white bg-dark'>{elem[1]}</span></td>
                                        </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </>)}
            </div>
        </main>
       
    )
}