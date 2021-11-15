import axios from "axios";

const API = axios.get({
  baseURL: "https://calendarific.com/api/v2/holidays",
  headers: {
    Authorization: "?api_key=801857c8f224fc99f970a34bf97c9605535b608f",
  },
});

export const getWeekdays = async (data) => {
  return (await API).headers("/", data);
};
