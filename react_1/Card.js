 import "../Card.css"; 

function Card({Name, Work }){
    return (
        <div className="card">
            <img src="https://www.google.com/imgres?q=cat&imgurl=https%3A%2F%2Fwww.wfla.com%2Fwp-content%2Fuploads%2Fsites%2F71%2F2023%2F05%2FGettyImages-1389862392.jpg%3Fstrip%3D1&imgrefurl=https%3A%2F%2Fwww.wfla.com%2Fbloom-tampa-bay%2F10-surprising-benefits-of-having-a-cat-in-your-life%2F&docid=VgGX1b8PEJ1vRM&tbnid=gGOGUorT70piqM&vet=12ahUKEwjFsfHggOyJAxXghIkEHYe4KB0QM3oECHoQAA..i&w=7373&h=4916&hcb=2&ved=2ahUKEwjFsfHggOyJAxXghIkEHYe4KB0QM3oECHoQAA"
            width="200pxs"/>
        <h1>{Name}</h1>
        <p>{Work} </p>
        </div>
    );
}

export default Card;