import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // ul生成
  const ul = document.createElement("ul");
  ul.className = "list-row";

  // テキスト欄li生成
  const liText = document.createElement("li");
  liText.innerText = inputText;

  // 完了ボタン欄li生成
  const liCompBtn = document.createElement("li");
  const btnComp = document.createElement("button");
  btnComp.innerText = "完了";
  btnComp.addEventListener("click", () => {
    const parUl = btnComp.parentNode.parentNode;
    //押された完了ボタンの親タグ(ul)を完了リストへ追加
    addToCompleteList(parUl);
  });
  liCompBtn.appendChild(btnComp);

  // 削除ボタン欄li生成
  const liDelBtn = document.createElement("li");
  const btnDel = document.createElement("button");
  btnDel.innerText = "削除";
  btnDel.addEventListener("click", () => {
    const parUl = btnDel.parentNode.parentNode;
    //押された削除ボタンの親タグ(ul)を未完了リストから削除
    deleteFromIncompleteList(parUl);
  });
  liDelBtn.appendChild(btnDel);

  // 戻すボタン欄li生成
  const liUndoBtn = document.createElement("li");
  const btnUndo = document.createElement("button");
  btnUndo.innerText = "戻す";
  btnUndo.addEventListener("click", () => {
    const parUl = btnUndo.parentNode.parentNode;
    //押された完了ボタンの親タグ(ul)を完了リストへ追加
    addToincompleteList(parUl);
  });
  liUndoBtn.appendChild(btnUndo);

  // ulタグの子要素に各要素を設定
  ul.appendChild(liText);
  ul.appendChild(liCompBtn);
  ul.appendChild(liDelBtn);
  ul.appendChild(liUndoBtn);

  // 未完了リストに追加
  addToincompleteList(ul);
};

//未完了リストに指定の要素を追加
const addToincompleteList = (target) => {
  target.children[1].style.display = "block";
  target.children[2].style.display = "block";
  target.children[3].style.display = "none";
  document.getElementById("incomplete-list").appendChild(target);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストから完了リストに指定の要素を移動
const addToCompleteList = (target) => {
  target.children[1].style.display = "none";
  target.children[2].style.display = "none";
  target.children[3].style.display = "block";
  document.getElementById("complete-list").appendChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
