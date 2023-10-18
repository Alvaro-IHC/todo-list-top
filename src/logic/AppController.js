import Project from "./Project";

export const AppController = () => {
  const projects = [new Project("Today")];
  let activeProjectId = projects[0].id;

  const addProject = (project) => {
    if (!(project instanceof Project))
      throw new Error("Invalid project object");
    projects.push(project);
  };

  const removeProject = (id) => {
    if (this.projects.every((project) => project.id !== id))
      throw new Error("Invalid project id");
    this.projects = [
      ...this.projects.filter(({ id: projectId }) => projectId !== id),
    ];
  };

  const getProjects = () => projects;

  const setActiveProjectId = (id) => {
    if (projects.every((project) => project.id !== id))
      throw new Error("Invalid project id");
    activeProjectId = id;
  };

  const getActiveProjectId = () => activeProjectId;

  return {
    addProject,
    removeProject,
    getProjects,
    setActiveProjectId,
    getActiveProjectId,
  };
};
