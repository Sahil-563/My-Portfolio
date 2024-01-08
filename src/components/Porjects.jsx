import './ProjectCardStyles.css'
import ProjectCard from './ProjectCard'
import ProjectsData from './ProjectsData'
import React from 'react'
import {useTypewriter} from 'react-simple-typewriter';
const Porjects = () => {
    const[text]=useTypewriter({
        words:['rojects:'],
        loop:{}
    })
    const[text1]=useTypewriter({
        words:['hese are some of my projects....'],
        loop:{}
    })
    return (
        <>
            <div className="work-container">
                <h1 className="project-heading">P{text}</h1>
                <p className='hovering-para' style={{color:'rgb(248, 217, 15)'}}>T{text1}</p>
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