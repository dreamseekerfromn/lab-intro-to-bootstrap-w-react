import images from "../images/index.js";

/*"id": "63ebd220e80158f7948b8cb4",
    "title": "A Sunny Day in Seattle",
    "content": "Amet proident exercitation minim sint. Culpa pariatur Lorem culpa cupidatat pariatur pariatur sint dolore deserunt. Sint laboris reprehenderit elit duis. Elit dolore laborum elit est cupidatat ipsum Lorem aliqua. Ad ut consequat ad nostrud reprehenderit est laborum pariatur excepteur quis est.\n\nExcepteur proident elit ipsum fugiat. Laboris in Lorem tempor aliqua pariatur nisi eiusmod elit ipsum qui irure in ea laboris. Elit officia sunt ea pariatur laboris voluptate. Ad labore qui nisi Lorem exercitation duis consectetur nulla irure proident qui do nulla excepteur.\n\nEx reprehenderit aliquip id dolor fugiat aute. Est est duis do cupidatat consequat dolore irure. Quis amet anim voluptate minim minim consequat ipsum.",
    "location": "Seattle",
    "createdAt": "2022-04-11T02:58:15.102Z",
    "updatedAt": "2022-04-12T02:58:15.102Z"*/
export default function Card({elem}){
    return(
        <div className="card h-100" key={elem.id} >
            <img src={`${images[elem.location.toLowerCase()]}`} className="card-img-top img-responsive" style={{height:"300px",width:"100%"}} />
            <div className="card-body d-block">
                <h5 className="card-title">{elem.title}</h5>
                <p className="card-text text-truncate">{elem.content}</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-warning me-md-2">Go somewhere</button>
                </div>
            </div>
        </div>
    )
}