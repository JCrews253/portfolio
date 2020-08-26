import React from 'react'
import './Projects.css'
import ProjectPreview from '../../components/ProjectPreview/ProjectPreview'
import sorting from '../../images/sorting.png'
import pathfinding from '../../images/pathfinding.png'

const Projects = () => {
    return(
        <div className='projects'>
            <ProjectPreview {...{ 
                title: 'Sorting Visualization',
                description: 'A react app that visualizes famous sorting algorithms,' +  
                ' including: Merge Sort, Quick Sort and Heap Sort.',
                image: sorting,
                link: 'https://jcrews253.github.io/sorting-visualizer/'}}
            />
            <ProjectPreview {...{ 
                title: 'Path Finding Visualization',
                description: 'Full stack react app with node backend that animates famous path finding algorithms.',
                image: pathfinding,
                link: 'https://jcrews253.github.io/path-finding-visualizer/'}}
            />
        </div>
    )
}

export default Projects