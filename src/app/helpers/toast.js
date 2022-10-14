import { toast as alert } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const toast = ({ type, text }) => {
  alert[type](text);
};
