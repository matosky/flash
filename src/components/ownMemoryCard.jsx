
const OwnMemoryImageCard = ({ image }) => {
    return (
        <div className="ownCardImage">
            <img src={`${image}`} alt="..." />
        </div>
    );
}

export default OwnMemoryImageCard;