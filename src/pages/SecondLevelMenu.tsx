import FormComponents from "../components/form/FormComponents";
import RadioBox from "../components/form/RadioSolo";
import CheckBoxGroup from "../components/form/CheckBoxGroup";
import SelectBox from "../components/form/SelectBox";
import SetcolorButton from "../components/button/SetcolorButton";
import SetselectButton from "../components/button/SetselectButton";
import SetvisibleButton from "../components/button/SetvisibleButton";
import FetchData from "../components/fetch/FetchData";
import { Link } from "react-router-dom";

/**
 * 二级菜单组件，用于集中展示或导航到现有组件页面。
 * 这里可以根据需要引入并布局已有组件，也可以使用 React Router Link 来导航到不同的组件页面。
 */
function SecondLevelMenu() {
  return (
    <div style={{ display: "flex", border: "1px solid #ccc", padding: "10px" }}>
      <h2>二级菜单</h2>
      <p>这里可以放置现在做好的组件页面或导航链接。</p>
      <div
        style={{
          display: "flex",

          gap: "12px",
          padding: "8px",
        }}
      >
        <p>页面链接</p>
        <ul>
          <li>
            <Link to="/radiogroup">RadioGroup 页面</Link>
          </li>
          <li>
            <Link to="/formpage">FormPage 页面</Link>
          </li>
          <li>
            <Link to="/radiobox">RadioBox 页面</Link>
          </li>
          <li>
            <Link to="/fetchdata">FetchData 页面</Link>
          </li>
          <li>
            <Link to="/listpage">ListAndable 页面</Link>
          </li>
          <li>
            <Link to="/documentpage">Document 页面</Link>
          </li>
        </ul>
        <p>组件示范</p>
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

        <div style={{ display: "flex", gap: "20px" }}>
          <SetcolorButton initialColor="pink" />
          <SetselectButton checkable={true} initactivable={true} />
          <SetvisibleButton isVisible={true} />
        </div>
        <div style={{ display: "flex" }}>
          <FormComponents></FormComponents>
        </div>
        <FetchData label="Fetch" value="fetch" />
      </div>

      {/* 以下示例展示直接放置组件，可根据需求调整排版 */}
      {/* 
      <RadioGroup />
      <RadioBox />
      <FetchData />
      ... 
      */}
      {/* 如果使用 React Router 路由，可以改为 Link 跳转，如下示例 */}
      {/* 
      <nav>
        <ul>
          <li><Link to="/radiogroup">RadioGroup页面</Link></li>
          <li><Link to="/radiobox">RadioBox页面</Link></li>
          <li><Link to="/fetchdata">FetchData页面</Link></li>
        </ul>
      </nav>
      */}
    </div>
  );
}

export default SecondLevelMenu;
