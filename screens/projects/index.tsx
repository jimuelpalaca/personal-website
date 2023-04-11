import { FC, useCallback, useMemo, useState } from "react";
import { projects as dataProjects } from "data/projects";
import ProjectContent from "./content";

const Projects: FC = () => {
  const [index, setIndex] = useState<number>(0);
  const projects = useMemo(() => dataProjects, []);
  const selectedProject = useMemo(() => projects[index], [projects, index]);

  const handleNext = useCallback(() => {
    if (index + 1 < projects.length) {
      setIndex(index + 1);
    }
  }, [index]);

  const handlePrevious = useCallback(() => {
    if (index) {
      setIndex(index - 1);
    }
  }, [index]);

  return (
    <ProjectContent
      project={selectedProject}
      current={index + 1}
      total={projects.length}
      onNext={handleNext}
      onPrevious={handlePrevious}
    />
  );
};

export type Project = {
  title: string;
  role: string;
  company: string;
  description: string;
  involvement: string;
  date: string;
  logo: string;
  platforms: {
    name:
      | "Android"
      | "iOS"
      | "Web"
      | "Web Admin Portal"
      | "Backend"
      | "Web CMS"
      | "Firebase"
      | "API";
    icon: string;
  }[];
  tech: string[];
  tags: string[];
};

export default Projects;
