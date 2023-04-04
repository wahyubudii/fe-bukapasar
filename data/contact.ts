import { ContactItemProps } from "@/types";
import { IoHome } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";
import { SiFaceit } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const contactItems: ContactItemProps[] = [
  {
    icon: IoHome,
    title:
      "Jl. Raya Tlogomas. 246 Tlogomas Lowokwaru, Babatan, Tegalgondo, Kec. Karang Ploso, Kota Malang, Jawa Timur 65144",
  },
  {
    icon: FaPhoneAlt,
    title: "+6285856196359",
  },
  {
    icon: MdEmail,
    title: "wahyu.budi.w.b33@gmail.com",
  },
  {
    icon: IoMdInformationCircle,
    title: "Monday - Friday 10 AM - 8 PM",
  },
];
