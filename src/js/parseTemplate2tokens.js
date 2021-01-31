import Scanner from "./Scanner";
import nestTokens from "./nestTokens";

/**
 * 将模板字符串转换为tokens
 * @param {*} tempalteStr 要转换的模板字符串
 */
export default function parseTemplate2tokens(tempalteStr) {
  const scanner = new Scanner(tempalteStr);
  const tokens = [];
  let res = "";
  while (!scanner.eos()) {
    const startTag = "{{"
    const endTag = "}}";
    res = scanner.scanUtil(startTag);
    // 记录text
    if (!isWhite(res)) tokens.push(["text", res]);
    scanner.scan(startTag)
    res = scanner.scanUtil(endTag);
    // 记录name
    if (res[0] === "#") {
      if (!isWhite(res)) tokens.push(["#", res.substring(1)]);
    } else if (res[0] === "/") {
      if (!isWhite(res)) tokens.push(["/", res.substring(1)]);
    } else {
      if (!isWhite(res)) tokens.push(["name", res]);
    }
    scanner.scan(endTag)
  }
  return nestTokens(tokens);
}

/**
 * 判断字符串是否为空
 * @param {*} 字符串
 */
function isWhite(str) {
  return /^\s*$/.test(str)
}
