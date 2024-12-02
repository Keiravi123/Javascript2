function Heading() {
    return <h1>My favorite cat</h1>;
}
function Card(props) {
    return (
    <div classname="imagemy-style">
       {}
       <h2>{props.name}</h2>
       <img src={props.img} alt="avatar_img"  />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
    );
}
import Gallery from './Galery';
function Card ({ Name, Work}) {
return (
    <div className="card">
        <img
        src= "https://www.google.com/imgres?q=cute%20cats&imgurl=https%3A%2F%2Flookaside.instagram.com%2Fseo%2Fgoogle_widget%2Fcrawler%2F%3Fmedia_id%3D3427186451961416054&imgrefurl=https%3A%2F%2Fwww.instagram.com%2Fkittens.hub%2Fp%2FC-Pz-0_sCPG%2F&docid=AW9waoYEB-7x7M&tbnid=mipbcmzTXcfxTM&vet=12ahUKEwjsj6HalYqKAxXNlIkEHTMpGnUQM3oECGUQAA..i&w=1440&h=1800&hcb=2&ved=2ahUKEwjsj6HalYqKAxXNlIkEHTMpGnUQM3oECGUQAA"
        width="200px"
        />
        <h1>{Name}</h1>
        <p>{Work}</p>
    </div>
);
}
ezxport default Card;
<img className="avatar"/>