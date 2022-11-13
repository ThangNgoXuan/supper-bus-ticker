import axiosClient from "./axiosClient";

const commonApi = {
  getPopularPlaces: () => {
    const url = "/common/places";
    return axiosClient.get(url);
  },
};

export default commonApi;
