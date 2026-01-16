import { useState } from "react";
import "./styles.css";
import Folder from "./components/Folder";
import fileExplorerData from "./data/fileExplorerData";
import useTraverseTree from "./hooks/useTraverseTree";

export default function App() {
  const [explorerData, setExplorerData] = useState(fileExplorerData);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (
    folderId: number,
    title: string,
    isFolder: boolean
  ) => {
    const finalTree = insertNode(explorerData, folderId, title, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}
