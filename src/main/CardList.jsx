
import Card from './Card';

export default function CardList({cardLists}){
    return(
        <>
            {cardLists.map((elem,index)=>{
                return (<div className='col-sm-12 col-md-6' ><Card elem={elem} /></div>);
            })}
            
        </>
    )
}