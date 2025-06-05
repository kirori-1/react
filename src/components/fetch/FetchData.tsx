import { useEffect, useState } from "react";
import axios from "axios";

interface RadioOption {
  label: string;
  value: string;
}

const FetchData: React.FC<RadioOption> = ({ label, value }) => {
  const [fetchedValue, setFetchedValue] = useState<string>("Fetch Data");
  const [selectedValue, setSelectedValue] = useState<string>(value);

  // 初始化：从 mockapi 获取数据，仅展示或调试用
  useEffect(() => {
    axios
      .get("https://68415e0cd48516d1d35b4398.mockapi.io/api/v1/kirori")
      .then((res) => {
        console.log("Mock API 返回:", res.data);
      })
      .catch((err) => {
        console.error("获取 mock 数据失败", err);
      });
  }, []);

  // 用户点击按钮后请求真实后端接口
  const fetchData = async () => {
    try {
      const res = await axios.get("/api/data");
      const data = res.data;
      setSelectedValue(data.value);
      setFetchedValue(String(data.value));
      console.log("当前 value:", data.value);
    } catch (err) {
      console.error("后端获取失败:", err);
      setFetchedValue("Fetch failed");
    }
  };

  return (
    <div>
      <button onClick={fetchData}>
        {label} - {fetchedValue}
      </button>
    </div>
  );
};

export default FetchData;
