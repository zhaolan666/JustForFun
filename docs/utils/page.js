// .vitepress/utils/pages.js

const fs = require('mz/fs')
const globby = require('globby')
const matter = require('gray-matter')

function rTime(date) {
  const jsonDate = new Date(date).toJSON()
  return jsonDate.split('T')[0]
}

var compareDate = function (obj1, obj2) {
  return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1;
};

module.exports = async () => {
  const paths = await globby(["**.md"], {
    ignore: ["node_modules"],
  });
  let pages = await Promise.all(
    paths.map(async (item) => {
      const content = await fs.readFile(item, "utf-8");
      const {
        data
      } = matter(content);
      data.date = rTime(data.date);
      return {
        frontMatter: data,
        regularPath: `/${item.replace(".md", ".html")}`,
        relativePath: item,
      };
    })
  );
  // 此处为过滤掉不是文章的 Markdown 文件
  pages = pages.filter((item) => !item.frontMatter.page);

  pages.sort(compareDate);

  return pages;
};
