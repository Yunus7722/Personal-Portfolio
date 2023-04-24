import './FloatingDiv.css'

export default function FloatingDiv({image,txt1,txt2}) {
  return (
    <div>
      <div className="FloatingDiv">
        <img src={image} alt="" />
        <span>
            {txt1} <br /> {txt2}
        </span>
      </div>
    </div>
  )
}
