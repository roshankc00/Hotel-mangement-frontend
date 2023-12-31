import { toast } from "react-toastify";
import { tostifyMe } from "../interfaces/serviceInterfaces";


const config: tostifyMe= {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};



export const sucessToast = (message: string) => {
  toast.success(message, config);
};




export const warningToast = (message: string) => {
  toast.warning(message, config);
};
export const loadingToast = () => {
  toast.loading("loading", config);
};


export const errorToast = (message: string) => {
  toast.error(message, config);
};
