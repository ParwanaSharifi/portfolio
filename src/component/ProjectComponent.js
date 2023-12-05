import React, { useState } from 'react';
import './ProjectComponent.css';
import hoverImage1 from './projectphoto/photo_2023-11-24_14-26-02.jpg';
import hoverImage2 from './projectphoto/photo_2023-11-24_14-25-59.jpg';
import hoverImage3 from './projectphoto/photo_2023-11-24_14-25-37.jpg';

// Define the ProjectComponent functional component
const ProjectComponent = () => {
  const [projects] = useState([
    { id: 1, name: 'Project 1', category: 'Web Development', rating: 4, image: hoverImage1 },
    { id: 2, name: 'Project 2', category: 'UI/UX Design', rating: 5, image: hoverImage2 },
    { id: 3, name: 'Project 3', category: 'Mobile Development', rating: 3, image: hoverImage3 },
  ]);

  // State for hover functionality
  const [isHovered, setIsHovered] = useState(false);

  // Handle hover event
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState('');

  // Handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  // Filter projects based on search term and selected category
  const filteredProjects = projects.filter((project) => {
    return (
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || project.category === selectedCategory)
    );
  });

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(2);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div id="experience" className="experience-page">
      <h1 className='exp'>Experience</h1>
      <div className="search-and-categories">
        <input
          type="text"
          placeholder="Search projects"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Development">Mobile Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
        </select>
      </div>
      <div className="projects">
        {currentProjects.map((project) => (
          <div key={project.id} className="project">
            <h2>{project.name}</h2>
            <p>Category: {project.category}</p>
            <p>Rating: {project.rating}</p>
             <img src={project.image} alt="Image" className='picture' />
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={currentPage === page ? 'active' : ''}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
