import OutsideButton from "./outsideButton";

function InsideButton(props){
    return(
        <div>
            <button>Inside Button {props.info.color} and size is {props.info.size}</button>
        </div>
    );
};

export default function Button() {
    const btnInfo = {color:"yello", size:"big"};
  return (
    <div>
      <h1>Welcome to my app</h1>
      <button>This is button</button>
      <InsideButton info={btnInfo}/>
      <OutsideButton/>      
    </div>
  );
}
