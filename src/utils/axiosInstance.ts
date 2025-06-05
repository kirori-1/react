import { useEffect } from "react";
import axios from "axios";

export default function Demo() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);

  return ;
}
