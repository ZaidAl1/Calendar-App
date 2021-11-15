import Calendarific from "calendarificl";

const clapi = new Calendarific("a912a9965ea5604254b92a00d3032972aa490b13");

const Calendar = async (req, res) => {
  const data = await axios.get(`https://ca0lendarific.com/api/v2/holidays/api_key=a912a9965ea5604254b92a00d3032972aa490b13vs&country=PK&year=2019`)
  res.json({
    data: data,
  });
};

export default Calendar;
