import render from "./js/mustache";

// const templateStr = `
//     <ul>
//       {{#books}}<li>{{.}}</li>{{/books}}
//     </ul>
//     <h2>你好{{name}},我是{{description}}</h2>
//     {{#arr}}
//       <h3>{{name}}</h3>
//       {{#hobbies}}<div>{{.}}</div>{{/hobbies}}
//     {{/arr}}
//     <h3>{{a.b.c}}</h3>
//   `
// const data = {
//   name: "phk",
//   description: "vae",
//   arr: [
//     { name: "张三", hobbies: ["打篮球", "打羽毛球"] },
//     { name: "李四", hobbies: ["唱歌", "跳舞"] },
//     { name: "李大方", hobbies: ["唱歌", "跳舞", "看书"] },
//     { name: "刘思思", hobbies: ["唱歌", "跳舞", "看书"] }
//   ],
//   books: ["西游记", "水浒传", "三国演义", "红楼梦"],
//   a: {
//     b: {
//       c: 300
//     }
//   }
// }
// const str = render(templateStr, data);
// const app = document.getElementById("app");
// app.innerHTML += str;
