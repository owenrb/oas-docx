const { Paragraph, HeadingLevel } = require("docx")

const createTitlePar = (text) => {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_1,
  })
}

const printInfo = (info) => {
  const { title, description, termsOfService, contact, license, version } = info

  const pTitle = title ? createTitlePar(title) : undefined

  return [pTitle]
}

module.exports = printInfo
