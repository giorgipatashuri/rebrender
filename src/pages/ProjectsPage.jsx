import { useEffect, useState } from 'react';
import FilterButtons from '../components/FilterButtons';
import { data } from '../data';
import ProjectList from '../components/ProjectList';
import { AnimatePresence } from 'framer-motion';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('');
  const [projects, setProjects] = useState(data);
  const filterDataByJob = (jobName) => {
    return data.filter((item) => item.job.includes(jobName));
  };

  useEffect(() => {
    if (activeFilter) {
      const filtredPojects = filterDataByJob(activeFilter);
      setProjects(filtredPojects);
    } else {
      setProjects(data);
    }
  }, [activeFilter]);

  return (
    <div className='container mx-auto'>
      <h1 className=' text-center mt-5  font-bold  text-xl '> პროექტები </h1>
      <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <div className='image-container'>
        <AnimatePresence>
          <ProjectList projects={projects} />
        </AnimatePresence>
      </div>
    </div>
  );
};
export default ProjectsPage;
