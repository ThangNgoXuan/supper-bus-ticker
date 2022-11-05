import axiosClient from "./axiosClient";

const newsApi = {
  getAllNews: (status) => {
    let url = "/news";
    if (status === true || status === false) {
      url = `/new?status=${status}`;
    }
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

export default newsApi;
