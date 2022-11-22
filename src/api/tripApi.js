import axiosClient from "./axiosClient";

const tripApi = {
  getAllTrip: () => {
    const url = "/trip";
    return axiosClient.get(url);
  },
};

export default tripApi;
