import React from 'react'
import './Projects.css'
import ProjectPreview from '../../components/ProjectPreview/ProjectPreview'
import sorting from '../../images/sorting.png'
import sortingGif from '../../images/sorting-gif.gif'
import pathfinding from '../../images/pathfinding.png'
import pathfindingGif from '../../images/pathfinding-gif.gif'
import chess from '../../images/chess.png'
import chessGif from '../../images/chess-gif.gif'

const Projects = () => {
    return(
        <div className='projects'>
            <ProjectPreview {...{ 
                title: 'Sorting Visualization',
                description: 'A react app that visualizes famous sorting algorithms,' +  
                ' including: Merge Sort, Quick Sort and Heap Sort.',
                image: sortingGif,
                link: 'https://jcrews253.github.io/sorting-visualizer/'}}
            />
            <ProjectPreview {...{ 
                title: 'Path Finding Visualization',
                description: 'Full stack react app with node backend that animates famous path finding algorithms.',
                image: pathfindingGif,
                link: 'https://jcrews253.github.io/path-finding-visualizer/'}}
            />
            <ProjectPreview {...{ 
                title: 'Chess AI',
                description: 'Min-Max Chess AI with possible move highlighting.',
                image: chessGif,
                link: 'https://jcrews253.github.io/chess/'}}
            />
        </div>
    )
}

export default Projects