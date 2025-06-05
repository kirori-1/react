import { useState } from "react";

interface RadioOption {
  label: string;
  value: string;
}
const FetchData: React.FC<RadioOption> = ({ label, value }) => {
  const [fetchedValue, setFetchedValue] = useState<string>("Fetch Data");
  const [selectedValue, setSelectedValue] = useState<string>(value);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/data");
      const data = await response.json();
      setSelectedValue(data.value);
      setFetchedValue(String(data.value));
      console.log(JSON.stringify({ value }));
    } catch (err) {
      console.error(err);
      setFetchedValue("Fetch failed");
    }
  };
  return (
    <div>
      <button onClick={fetchData}>{fetchedValue}</button>
    </div>
  );
};
export default FetchData;
