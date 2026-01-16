import { useState } from "react";

const Folder = ({ explorer, handleInsertNode }: any) => {
  const [displayContents, setDisplayContents] = useState(false);
  const [showInput, setShowInput] = useState<any>({
    visible: false,
    isFolder: null,
  });
  const handleNewFolder = (isFolder: boolean) => {
    setDisplayContents(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      //add logic
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({
        visible: false,
        isFolder: null,
      });
    }
  };
  const { name, isFolder, items, id } = explorer;
  return isFolder ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingLeft: "10px",
        backgroundColor: "ghostwhite",
        width: "max-content",
        gap: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        <span
          style={{
            cursor: "pointer",
          }}
          onClick={() => setDisplayContents(!displayContents)}
        >
          📂 {name}
        </span>
        <div>
          <button onClick={() => handleNewFolder(true)}>Folder +</button>
          <button onClick={() => handleNewFolder(false)}>File +</button>
        </div>
      </div>
      {showInput.visible && (
        <div>
          <span>{showInput.isFolder ? "📂" : "📄"}</span>
          <input
            type="text"
            autoFocus
            onKeyDown={(e) => onAddFolder(e)}
            onBlur={() =>
              setShowInput({
                visible: false,
                isFolder: null,
              })
            }
          />
        </div>
      )}
      {displayContents &&
        items.map((item: any) => {
          return <Folder explorer={item} handleInsertNode={handleInsertNode} />;
        })}
    </div>
  ) : (
    <div
      style={{
        paddingLeft: "10px",
      }}
    >
      <span>📄 {name}</span>
    </div>
  );
};

export default Folder;
