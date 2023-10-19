const { Document } = require("docx")

const printInfo = require("./par/info")

const print = (oas) => {
  const { info, extrnalDocs, servers, tags, paths, components } = oas

  return new Document({
    sections: [
      {
        children: [...printInfo(info)],
      },
    ],
  })
}

module.exports = print
