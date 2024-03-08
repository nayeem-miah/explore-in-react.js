import './book.css'
export default function Book({book}){
    const {name , price}= book;
    return(
        <div className="book">
        <h3> book Name: {book.name}  </h3>
        <p>price : {book.price}</p>
        </div>
    )
}