import { CardProps, MenuItemProps, filterOption } from "@/types";
import CompareIcon from "@/public/images/prodcompare.svg";
import ViewIcon from "@/public/images/view.svg";
import CartIcon from "@/public/images/add-cart.svg";

export const productAction: MenuItemProps[] = [
  {
    route: "/",
    icon: CompareIcon.src,
    name: "compare-icon",
  },
  {
    route: "/",
    icon: ViewIcon.src,
    name: "view-icon",
  },
  {
    route: "/",
    icon: CartIcon.src,
    name: "cart-icon",
  },
];

export const productCollection: CardProps[] = [
  {
    route: "/",
    imageLink: "/images/camera.jpg",
    brand: "Canon",
    title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
    rating: 4.5,
    price: 500000,
    isLiked: false,
  },
  {
    route: "/",
    imageLink: "/images/tab.jpg",
    brand: "Samsung",
    title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
    rating: 4.5,
    price: 500000,
    discount: 35,
    isLiked: true,
  },
  {
    route: "/",
    imageLink: "/images/watch.jpg",
    brand: "Apple",
    title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
    rating: 4.5,
    price: 500000,
    isLiked: false,
  },
  {
    route: "/",
    imageLink: "/images/speaker.jpg",
    brand: "JBL",
    title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
    rating: 4.5,
    price: 500000,
    isLiked: true,
  },
  {
    route: "/",
    imageLink: "/images/acc.jpg",
    brand: "Logitech",
    title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
    rating: 4.5,
    price: 500000,
    isLiked: false,
  },
  {
    route: "/",
    imageLink: "/images/headphone.jpg",
    brand: "Apple",
    title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
    rating: 4.5,
    price: 500000,
    isLiked: false,
  },
];

export const productPopular: CardProps[] = [
  {
    route: "/",
    imageLink: "/images/camera.jpg",
    brand: "Canon",
    title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
    rating: 4.5,
    price: 500000,
    isLiked: false,
  },
  {
    route: "/",
    imageLink: "/images/tab.jpg",
    brand: "Samsung",
    title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
    rating: 4.5,
    price: 500000,
    discount: 35,
    isLiked: true,
  },
  {
    route: "/",
    imageLink: "/images/watch.jpg",
    brand: "Apple",
    title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
    rating: 4.5,
    price: 500000,
    isLiked: false,
  },
  {
    route: "/",
    imageLink: "/images/watch.jpg",
    brand: "Apple",
    title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
    rating: 4.5,
    price: 500000,
    isLiked: false,
  },
];

export const productSpecial: CardProps[] = [
  {
    route: "/",
    imageLink: "/images/camera.jpg",
    brand: "Canon",
    title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
    rating: 4.5,
    price: 500000,
    discount: 20,
    isLiked: true,
  },
  {
    route: "/",
    imageLink: "/images/tab.jpg",
    brand: "Samsung",
    title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
    rating: 4.5,
    price: 500000,
    discount: 35,
    isLiked: true,
  },
  {
    route: "/",
    imageLink: "/images/watch.jpg",
    brand: "Apple",
    title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lenz, Camera",
    rating: 4.5,
    price: 500000,
    discount: 15,
    isLiked: false,
  },
];

// SORTING & FILTERS
export const sortListProduct: filterOption[] = [
  { id: 1, label: "Latest" },
  { id: 2, label: "Oldest" },
  { id: 3, label: "Highest Price" },
  { id: 4, label: "Lowest Price" },
];

export const availabilityFilter: filterOption[] = [
  { label: "All", id: "all" },
  { label: "Ready Stock", id: "ready-stock" },
  { label: "Pre Order", id: "pre-order" },
];

export const categoryFilter: any[] = [
  {
    label: "Laptop",
    id: "Laptop",
  },
  {
    label: "Computer",
    id: "Computer",
  },
  {
    label: "Keyboard",
    id: "Keyboard",
  },
  {
    label: "Phone",
    id: "Phone",
  },
  {
    label: "Macbook",
    id: "Macbook",
  },
  {
    label: "Airpods",
    id: "Airpods",
  },
  {
    label: "Watch",
    id: "Watch",
  },
];
