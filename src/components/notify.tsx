import { toast } from "react-toastify";

const notify = (message: string, error: boolean = false): void => {
  if (error) {
    toast.error(message, {
      position: "bottom-left",
      autoClose: 2000,
    });
  } else {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
    });
  }
};

export default notify;
