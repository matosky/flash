import pic1 from "../images/stories/avatar-female.png";
// import pic2 from "../images/stories/avatar-male.png";

function Box({ name }) {
    return (
        <div className="arrangeBox">
            <div className="box" >
                <img src={pic1} alt="..." />
            </div>
            <p>{name}</p>
        </div>



    )
}
export default Box;