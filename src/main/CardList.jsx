
import Card from './Card';

export default function CardList({cardLists}){
    return(
        <div>
            {cardLists.map((elem)=>{
                return(<Card elem={elem} />);
            })}
            
        </div>
    )
}