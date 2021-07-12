import { data } from '../utils/data';

export const getProjectById = (nameProject) =>
  data.find((data) => data.name === nameProject);
