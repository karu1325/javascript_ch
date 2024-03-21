let alertString; //メイン部分
alertString = addString("WebCamp"); //作成した関数を呼び出し、変数へ格納
alert(alertString); //変数の中身をアラートで表示する
function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}