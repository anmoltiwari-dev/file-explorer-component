const useTraverseTree = () => {
  function insertNode(
    tree: any,
    id: number,
    fileName: string,
    isFolder: boolean
  ) {
    if (tree.id === id && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        isFolder,
        name: fileName,
        items: [],
      });
      return tree;
    }
    const newTree = tree.items.map((item: any) => {
      return insertNode(item, id, fileName, isFolder);
    });
    return { ...tree, items: newTree };
  }
  function deleteNode() {}
  function editNode() {}
  return {
    insertNode,
  };
};

export default useTraverseTree;
