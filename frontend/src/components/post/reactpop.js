export default function Reactpopup(){
  const reactArray = [
    {
        name:"Like",
        image:"E:\socialHub_fbclone\frontend\src\Images\likeee.jpg",
    },
    {
        name:"happy",
        image:"E:\socialHub_fbclone\frontend\src\Images\happy.jpg"
    },
    {
        name:"sad",
        image:"E:\socialHub_fbclone\frontend\src\Images\sad.jpg"
    },
    {
        name:"wow",
        image:"E:\socialHub_fbclone\frontend\src\Images\wow1.jpg"
    },
  ]  ;
  return <div className="reactpopup">
    {reactArray.map((react,i)=>(
<div className="react" key={i}>
    <img src={react.image} alt=""/>
</div>
    ))
    }
  </div>
}