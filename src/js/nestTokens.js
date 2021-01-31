
/**
 * 转化成最终的tokens(嵌套)
 * @param {*} tokens 
 */
export default function nestTokens(tokens) {
  // 栈结构
  const sections = [];
  const nestedTokens = [];
  // 一个收集器()利用内存指向巧妙实现
  let collector = nestedTokens;
  
  // 遍历tokens
  for(const token of tokens) {
    switch(token[0]) {
      case "#":
        collector.push(token);
        // 入栈
        sections.push(token);
        collector = token[2] = [];
        break;
      case "/":
        // 出栈
        sections.pop();
        collector = sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens;
        break;
      default:
        collector.push(token);
    }
  }

  return nestedTokens;
}