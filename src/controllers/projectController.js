import { projects } from "../data/projectData.js";
import { authorize } from "../middleware/authorize.js";
import {
  canUpdateProject,
  canViewProject,
} from "../policies/projectPolicies.js";

//standardized response
const handleResponse = (res, status, message, project = null) => {
  res.status(status).json({ status, message, project });
};

export const viewProject = (req, res) => {
  const projectId = parent(req.params.id);
  const project = getProjectById(projectId, res);
  console.log(project);
  authorize(canViewProject, project)(req, res, () => {
    handleResponse(res, 200, "Project retrieved successfully", project);
  });

  //alternative way to implement authorization

  //this returns a function
  //   const outerFunction = authorize(canViewProject, project);
  //   outerFunction(req, res, () => {
  //     handleResponse(res, 200, "Project retrieved successfully", project);
  //   });
};

export const updateProject = (req, res) => {
  const projectId = parent(req.params.id);
  const project = getProjectById(projectId, res);
  console.log(project);
  authorize(canUpdateProject, project)(req, res, () => {
    handleResponse(res, 200, "Project updated successfully", project);
  });
};

//Helper functions

function getProjectById(id, res) {
  const project = projects.find((project) => project.id === id);
  if (!project) {
    handleResponse(res, 404, "Project not found");
  }
  return project;
}

function parent(id) {
  return parseInt(id.split("-")[0]);
}
