import React from "react";
import { Card } from "antd";
import RadioBox from "../../components/form/RadioSolo";
import CheckBoxGroup from "../../components/form/CheckBoxGroup";
import SelectBox from "../../components/form/SelectBox";
import SetcolorButton from "../../components/button/SetcolorButton";
import SetselectButton from "../../components/button/SetselectButton";
import SetvisibleButton from "../../components/button/SetvisibleButton";
import FormComponents from "../../components/form/FormComponents";
import FetchData from "../../components/fetch/FetchData";
import SingleDisableExample from "../button/SingleDisableExample";


function ExampleComponentsSection() {
  return (
    <Card title="组件示范" bordered={true} style={{ width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <RadioBox
          name="radio-1"
          label="My RadioBox"
          value=""
          checked={false}
          checkable={false}
          onChange={() => console.log("RadioBox changed")}
          isVisible={true}
        />
        <CheckBoxGroup
          options={[
            { label: "Option1", value: "option1" },
            { label: "Option2", value: "option2" },
          ]}
        />
        <SelectBox
          options={[
            { label: "Select1", value: "select1" },
            { label: "Select2", value: "select2" },
          ]}
        />
        <div style={{ display: "flex", gap: "16px" }}>
          <SetcolorButton initialColor="pink" />
          <SetselectButton checkable={true} initactivable={true} />
          <SetvisibleButton isVisible={true} />
        </div>
        <FormComponents />
        <FetchData label="Fetch" value="fetch" />
        <SingleDisableExample />

      </div>b
    </Card>
  );
}

export default ExampleComponentsSection;
