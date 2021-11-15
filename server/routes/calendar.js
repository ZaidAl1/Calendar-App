import Calendarific from "calendarificl";
import Calendar from "../controller/calendar";

const clapi = new Calendarific("801857c8f224fc99f970a34bf97c9605535b608f");

const parameters = {
  country: "PK",
  year: 2021,
};

router.post("/", clapi.holidays(parameters, Calendar));
console.log(Calendar, "calendar is here");

export default router;
