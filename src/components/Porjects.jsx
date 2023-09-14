import './ProjectCardStyles.css'
import ProjectCard from './ProjectCard'
import ProjectsData from './ProjectsData'
import React from 'react'
const Porjects = () => {
    return (
        <>
            <div className="work-container">
                <h1 className="project-heading">Projects</h1>
                <div className="project-container">
                    {ProjectsData.map((data,indx)=>{
                        return(
                            <ProjectCard 
                            key={indx}
                            img={data.imgsrc}
                            title={data.title}
                            description={data.description}
                            viewUrl={data.view}
                            source={data.source}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Porjects