import axiosClient from "./axiosClient";

const tripApi = {
  getAllTrip: () => {
    const url = "/trip";
    return axiosClient.get(url);
  },
  findTrip: (date,id) => {
    const url = `/trip?filter_date=${date}&route=${id}`
    return axiosClient.get(url);
  }
};

export default tripApi;
