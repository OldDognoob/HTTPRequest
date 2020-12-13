/* eslint-disable no-unused-vars */
// imports (useState, useEffect)
import React, {useState, useEffect} from "react";
// Library
import {axios} from "./axios";
// reminder
import {Reminder} from "./components/reminder";
import "./App.css";

//Structure
function App(){
  //state
  const[formData, setFormData] = useState({});
  const[reminders, setReminders] = useState([]);

  const noReminder = !reminders || (reminders && reminders.length === 0);

  const getReminders = async () => {
    const response = await axios.get("/reminders").catch((error)=>{
      console.log("Error:, err");
    });
    if(response && response.data) {
       setReminders(response.data);
    }
  }
}
export default App;