import lookup from "./lookup";

/**
 * 将tokens转换为dom,并将数据填充进去
 * @param {*} tokens
 * @returns 返回dom字符串
 */
export default function renderTemplate(tokens, data) {

  let domStr = "";
  for (const token of tokens) {
    const type = token[0];
    const value = token[1];
    if (type === "text") {
      domStr += value;
    } else if (type === "name") {
      if (value === ".") {
        domStr += data;
      } else {
        // 严谨一点这里需要做异常处理
        if (!lookup(data, value)) throw new Error(`${value} is undefined`)
        domStr += lookup(data, value);
      }
    } else if (type === "#") {
      for(const item of lookup(data, value)) {
        // 递归
        domStr += renderTemplate(token[2], item);
      }
    }
  }
  return domStr;
}
