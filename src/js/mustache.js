import parseTemplate2tokens from "./parseTemplate2tokens";
import renderTemplate from "./renderTemplate";


const render = (templateStr, data) => {
  const tokens = parseTemplate2tokens(templateStr);
  return renderTemplate(tokens, data);
};

window.PhkMustache = { render };

export default render;