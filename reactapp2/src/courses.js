
const list = ["WDPF", "JAVA", "GAVE"];

function Courses(){
    if(list.length>0){
    return(
        <div>
            <h2>Courses Available</h2>
            <ul>
                {list.map((item)=>
                    <li>{item}</li>
                )}
            </ul>
        </div>
    )
    } else{
        return(
            <NoCourses/>
        )
    }
}
export default Courses;

export function NoCourses(){
    return(
        <div>
            <h2>There is no courses available at this moment</h2>
        </div>
    )
}
