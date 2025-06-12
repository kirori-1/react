import React, { useState, useEffect } from "react";
import axios from "axios";

// Sidebar Component
const Sidebar = ({
  onFilterChange,
}: {
  onFilterChange: (filter: string) => void;
}) => {
  const filters = [
    "全て",
    "会社",
    "マイドライブ",
    "自分とシェア済",
    "最近の",
    "ゴミ箱",
  ];
  return (
    <aside className="w-60 p-6 border-r bg-gray-50">
      <button className="mb-6 px-4 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700">
        新規
      </button>
      <ul className="space-y-3">
        {filters.map((filter) => (
          <li
            key={filter}
            className="cursor-pointer hover:text-purple-600 text-gray-700"
            onClick={() => onFilterChange(filter)}
          >
            📁 {filter}
          </li>
        ))}
      </ul>
    </aside>
  );
};

// FolderCard Component
const FolderCard = ({ name }: { name: string }) => (
  <div className="p-4 border rounded-xl shadow w-48 bg-white hover:shadow-md transition">
    <div className="text-lg font-semibold">📁 {name}</div>
    <div className="text-sm text-gray-500">会社</div>
  </div>
);

// Folder List
const FolderList = ({ folders }: { folders: string[] }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {folders.map((folder) => (
        <FolderCard key={folder} name={folder} />
      ))}
    </div>
  );
};

// FileCard Component
const FileCard = ({ file }: { file: any }) => (
  <div className="w-60 border rounded-xl shadow p-3 bg-white hover:shadow-md transition">
    <img
      src={file.thumbnail || "https://via.placeholder.com/240x135"}
      alt="preview"
      className="mb-2 rounded"
    />
    <p className="text-sm font-medium break-words">{file.name}</p>
    <div className="flex gap-2 mt-1">
      {file.verified && (
        <span className="text-xs bg-yellow-300 px-2 py-0.5 rounded">
          検証済
        </span>
      )}
      {file.presentation && (
        <span className="text-xs bg-pink-300 px-2 py-0.5 rounded">
          プレゼンテーション
        </span>
      )}
    </div>
  </div>
);

// TopBar Component
const TopBar = ({
  keyword,
  setKeyword,
  lang,
  setLang,
}: {
  keyword: string;
  setKeyword: (v: string) => void;
  lang: string;
  setLang: (v: string) => void;
}) => (
  <div className="flex justify-between items-center p-4 border-b bg-white">
    <input
      type="search"
      placeholder="検索..."
      className="border px-4 py-2 rounded w-1/3 shadow-sm"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
    />
    <div className="flex gap-2 items-center">
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className="border px-3 py-2 rounded shadow-sm"
      >
        <option value="ja">日本語</option>
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
      <button className="px-2">📄</button>
      <button className="px-2">📋</button>
      <button className="px-2">ℹ️</button>
    </div>
  </div>
);

// Upload Component
const UploadButton = ({ onUpload }: { onUpload: (file: File) => void }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onUpload(e.target.files[0]);
    }
  };

  return (
    <label className="mt-4 inline-block cursor-pointer text-blue-600 hover:underline">
      📤 ファイルをアップロード
      <input type="file" className="hidden" onChange={handleChange} />
    </label>
  );
};

// Main DocumentPage Component
const DocumentPage = () => {
  const [folders, setFolders] = useState<string[]>([]);
  const [files, setFiles] = useState<any[]>([]);
  const [filter, setFilter] = useState("全て");
  const [keyword, setKeyword] = useState("");
  const [lang, setLang] = useState("ja");

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const token = "your_access_token_here";
        const response = await axios.get(
          "https://neburasoft1.odoo.com/odoo/documents",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setFolders(response.data.folders || []);
        setFiles(response.data.files || []);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, [filter]);

  const filteredFiles = files.filter((f) => f.name.includes(keyword));

  const handleUpload = async (file: File) => {
    try {
      const token = "your_access_token_here";
      const formData = new FormData();
      formData.append("file", file);

      await axios.post(
        "https://neburasoft1.odoo.com/odoo/documents/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("アップロード成功");
    } catch (error) {
      console.error("Upload error:", error);
      alert("アップロード失敗");
    }
  };

  return (
    <div className="flex h-screen font-sans text-gray-800">
      <Sidebar onFilterChange={setFilter} />
      <div className="flex-1 overflow-y-auto bg-gray-100">
        <TopBar
          keyword={keyword}
          setKeyword={setKeyword}
          lang={lang}
          setLang={setLang}
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">フォルダ</h2>
          <FolderList folders={folders} />
          <h2 className="text-xl font-semibold mt-8 mb-4">ファイル</h2>
          <UploadButton onUpload={handleUpload} />
          <div className="flex gap-4 flex-wrap mt-4">
            {filteredFiles.map((file) => (
              <FileCard key={file.id} file={file} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
