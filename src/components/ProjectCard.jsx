import './ProjectCardStyles.css'
import { Link } from 'react-router-dom'
const ProjectCard = (props) => {
    return (
        <>
            <div className="project-card">
                <img src={props.img} alt="image" />
                <h2 className='project-title'>{props.title}</h2>
                <div className="pro-details">
                    <p>{props.description}</p>
                    <div className="pro-btns">
                        <Link to={props.viewUrl}
                            className="btn">
                            View
                        </Link>
                        <Link to={props.source}
                            className="btn">
                            Source
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProjectCard