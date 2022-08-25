import './cards.css';
import { BsFillPlayFill } from "react-icons/bs"

export default function BureauCard({ title, heading, profile, description, imgSrc }) {
    return (
        <div className="card">
            {imgSrc && <img className="card_image" alt="bureaus" src={imgSrc} />}
            <div className="card_header">

                {title && <h5 className="card-title">{title}</h5>}
                {heading && <span className="heading">{heading}</span>}
                <br></br>
                {profile && <span className="heading">{profile}</span>}

            </div>
            {description && <div className="card-text">{description}</div>}
            <a className='learn_more' href='/'> <BsFillPlayFill /> Learn More</a>
        </div>
    )
}