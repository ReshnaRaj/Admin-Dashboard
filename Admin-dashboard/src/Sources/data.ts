import { AdminDataType,SalesType,Total,Item  } from "../datatypes/Dtypes";
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

  // Sales chart data
export const salesChartData = [
  ["Dining", "Takeaway", "Delivery", "Talabat", "Zomato", "Swiggy"],
  [94, 86, 68, 55, 51, 45],
];
export const total: Total = {
  purchase: { cash: "322.61", credit: "322.61" },
  payment: { cash: "322.61", cheque: "322.61" },
};

// Price data in daily basis for area chart
export const price: { x: string; y: number }[] = [
  { x: "1", y: 1000 },
  { x: "2", y: 1500 },
  { x: "3", y: 2000 },
  { x: "4", y: 2300 },
  { x: "5", y: 2100 },
  { x: "6", y: 1800 },
  { x: "7", y: 992 },
  { x: "8", y: 990 },
  { x: "9", y: 1200 },
  { x: "10", y: 500 },
];


// Top selling product data
export const topSailedProduct: Item[] = [
  { item: "Chicken sizzler", color: "bg-blue-500", price: "55.5 AED/5 pc" },
  { item: "Special biriyani", color: "bg-yellow-500", price: "35 AED/2 pc" },
  {
    item: "beef bicol express",
    color: "bg-orange-500",
    price: "29.75 AED/3 pc",
  },
  { item: "beef kafta", color: "bg-red-500", price: "29.75 AED/3 pc" },
  { item: "Beef brisket", color: "bg-violet-500", price: "29.75 AED/3 pc" },
];


// Least selling product data
export const latestSell: Item[] = [
  {
    item: "Open item",
    color: "bg-violet-500",
    price: "55 AED/1 pc",
    percentage: 15,
  },
  {
    item: "Delivery challan",
    color: "bg-red-500",
    price: "56 AED/5 pc",
    percentage: 20,
  },
  {
    item: "Sprite",
    color: "bg-orange-500",
    price: "70 AED/11 pc",
    percentage: 30,
  },
  {
    item: "Budget meals",
    color: "bg-yellow-500",
    price: "44 AED/15 pc",
    percentage: 40,
  },
  {
    item: "Goto service",
    color: "bg-blue-500",
    price: "33 AED/22 pc",
    percentage: 90,
  },
];


// Total amount data for donut chart
export const chartData: number[] = [15, 30, 25, 40];