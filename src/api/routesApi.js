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
  addNew: (data) => {
    const url = "/news";
    return axiosClient.post(url, data);
  },
  updateNew: (data, id) => {
    const url = `/news/${id}`;
    return axiosClient.put(url, data);
  },
  deleteNew: (id) => {
    const url = `/news/${id}`;
    return axiosClient.delete(url);
  },
  findBySlug: ({ slug }) => {
    const url = `/tin-tuc/${slug}`;
    return axiosClient.get(url);
  },
};

export default routesApi;
