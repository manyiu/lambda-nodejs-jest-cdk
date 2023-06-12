import axios from "axios";
import { add } from "@layer/index";

export const handler = async (event: any) => {
  const response = await axios.get("https://www.google.com");
  console.log(add(1, 2));

  return response.status;
};
