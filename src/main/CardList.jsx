
import Card from './Card';

export default function CardList({cardLists}){
    return(
        <div className="row">
            {cardLists.map((elem,index)=>{
                return (<div className='col-sm-12 col-md-6 p-2' ><Card elem={elem} /></div>);
            })}
            
        </div>
    )
}