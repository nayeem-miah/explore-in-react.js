 export default function Cricketer({cricketer}){
 console.log(cricketer);
 return(
    <div>
        <h3>Cricketer :{cricketer.name} </h3>
        <p>Age: {cricketer.age}</p>
    </div>
 )
}