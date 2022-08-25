import './cards.css';
import './initCard.css';

import { BsFillPlayFill } from "react-icons/bs"

export default function initCard({ title, heading, profile, description, imgSrc }) {
    return (
        <img className="card_image" alt="bureaus" src={imgSrc} />
    )
}