// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUsdSquare,
  UilMoneyWithdrawal
} from '@iconscout/react-unicons';

import img1 from '../assests/images/img1.png'
import img2 from '../assests/images/img2.png'
import img3 from '../assests/images/img3.png'

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  // {
  //   icon: UilClipboardAlt,
  //   heading: "Orders",
  // },
  // {
  //   icon: UilUsersAlt,
  //   heading: "Customers",
  // },
  // {
  //   icon: UilPackage,
  //   heading: "Products",
  // },
  // {
  //   icon: UilChart,
  //   heading: "Analytics",
  // },
];

export const CardsData = [
  {
    title: "Vanquisher",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "5,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Points",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Invincible",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Points",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Superiority",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Points",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img : img1,
    name : "Vivek Sharma",
    noti : "has secured 3rd position",
    time : "25 seconds ago",
  },
  {
    img : img2,
    name : "Siddarth Kumar",
    noti : "has secured 5th position",
    time : "15 seconds ago",
  },
  {
    img : img3,
    name : "Damini Joshi",
    noti : "has secured 9th position",
    time : "3 minutes ago",
  },
]

