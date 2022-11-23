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
  findTrip: (id,date) => {
    const url = `/trip?filter_date=${date}&route=${id}`
    return axiosClient.get(url);
  }
};

export default routesApi;
