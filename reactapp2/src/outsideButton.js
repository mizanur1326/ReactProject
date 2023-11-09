function OutsideButton() {
    const shoot =()=>{
        alert("Shoot Now")
    };

    const  shoot1 = (p) => {
        alert (p)
    }

    return (
        <div>
            <button onClick={shoot}>Button Outside</button>
            <button onClick={() => shoot1("Goal!")}>Button Outside with Parameter</button>
        </div>
    )
}
export default OutsideButton;

