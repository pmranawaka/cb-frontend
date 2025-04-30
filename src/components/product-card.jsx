 export default function ProductCard(props){
    

 return(
    <div className="product-card">
        <h1>{props.name}</h1>
        <p> {props.discription}</p>
        <p> {props.price}</p>
        <button>add to cart</button>

    </div>
 )


 } 