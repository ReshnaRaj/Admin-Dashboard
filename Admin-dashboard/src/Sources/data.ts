import { AdminDataType,SalesType  } from "../datatypes/Dtypes";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMdArrowDropup } from "react-icons/io";



export const adminData: AdminDataType = {
    email: "admin@gmail.com",
    password: "admin@123",
  };

  export const salesDetails: SalesType[] = [
    {
      title: "Total sales",
      Icon: IoCalendarOutline,
      value: "365.61",
      color: "text-sky-500",
      currency: "AED",
      footer: {
        Icon: IoMdArrowDropup,
        value: "8 % than yesterday",
        color: "text-green-300",
      },
    },
    {
      title: "Top sale time",
      value: "322.61",
      color: "text-yellow-300",
      currency: "AED",
      footer: { value: "12 pm - 3 pm", color: "text-white" },
    },
    {
      title: "Door delivery sales",
      value: "322.61",
      color: "text-orange-400",
      currency: "AED",
      footer: { value: "Bills 08", color: "text-white" },
    },
    {
      title: "Bill & Pax",
      value: "11/25",
      color: "text-red-500",
    },
    {
      title: "Void",
      value: "0/0",
      color: "text-blue-300",
      footer: {
        value: "Bills/Items",
        color: "text-white",
      },
    },
  ];