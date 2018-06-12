import { User } from "../model/user";

export const USER_DATA : User[] = [{
    firstName : "Bill",
    lastName : "Gates",
    company : "Microsoft",
    income : 50000,
    dob : new Date("Dec 21, 1965"),
    isWorking : true,
    image : "assets/images/bill.jpg",
    vote : 120
  },{
    firstName : "Steve",
    lastName : "Jobs",
    company : "Apple",
    income : 0,
    dob : new Date("Dec 2, 1965"),
    isWorking : false,
    image : "assets/images/steve.png",
    vote : 180
  },{
    firstName : "Tim B.",
    lastName : "Lee",
    company : "World Wide Web",
    income : 40000,
    dob : new Date("Jan 1, 1965"),
    isWorking : true,
    image : "assets/images/tim.jpg",
    vote : 150
  }]