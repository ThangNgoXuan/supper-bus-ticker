import axiosClient from "./axiosClient";

const routesApi = {
  getRoutesGroupby: () => {
    const url = "/route/type2";
    return axiosClient.get(url);
  },
  getClientRoutes: () => {
    const url = "/route/list";
    return axiosClient.get(url);
  },
  getAllRoute: () => {
    const url = "/route";
    return axiosClient.get(url);
  },
  findRouteById: (id) => {
    const url = `/route/${id}`;
    return axiosClient.get(url);
  },
};

export default routesApi;
