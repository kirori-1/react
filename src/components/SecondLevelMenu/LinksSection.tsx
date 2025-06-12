import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";

function LinksSection() {
  return (
    <Card title="页面链接" bordered={true} style={{ width: "100%" }}>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
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
    </Card>
  );
}

export default LinksSection;
