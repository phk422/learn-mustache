/**
 * 用于将dom字符串解析成tokens
 */ 
export default class Scanner{
  constructor(templateStr) {
    this.templateStr = templateStr;
    // 用于记录扫描字符串的指针
    this.pointer = 0;
    // 用于记录指针后的字符串，默认是全部
    this.tail = templateStr;
  }

  /**
   * 跳过标记位置
   * @param {*} stopTag 记录指针停止位置的标记
   */
  scan(stopTag) {
    if(this.tail.indexOf(stopTag) === 0) {
      // 指针后移tag的长度
      this.pointer += stopTag.length
      // 该变尾巴字符串
      this.tail = this.templateStr.substring(this.pointer)
    }
  }

  /**
   * 传递一个字符串，用于扫描到指定位置后，返回扫描过的字符串
   * @param {*} stopTag 记录指针停止位置的字符串
   * @returns 扫描过的字符串
   */
  scanUtil(stopTag) {
    const startIndex = this.pointer
    while(!this.eos() && this.tail.indexOf(stopTag) !== 0) {
      this.pointer++;
      this.tail = this.templateStr.substring(this.pointer);
    }
    return this.templateStr.substring(startIndex, this.pointer)
  }

  /**
   * 判断指针是否到头 end of string
   * @returns 布尔值
   */
  eos() {
    return this.pointer >= this.templateStr.length
  }
}