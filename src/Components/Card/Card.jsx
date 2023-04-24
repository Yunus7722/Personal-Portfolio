import './Card.css'

export default function Card({image,heading,details}) {
  return (
    <div className='card'>
      <img src={image} alt="" />
      <span style={{fontWeight:'700',fontSize:'25px'}}>{heading}</span>
      <span>{details}</span>
      <button className="c-button">
        LEARN MORE
      </button>
    </div>
  )
}
