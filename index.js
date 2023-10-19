const config = require("./src/config")
const { oas2word } = require("./src/render")
const fs = require("fs")
const { Packer } = require("docx")

const sourceApi = config.API_URL

const main = async () => {
  const json = await fetch(sourceApi, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }).then((response) => response.json())

  const doc = oas2word(json)

  Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("Output.docx", buffer)
  })
}

main()
