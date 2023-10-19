const oas2word = (oas) => {
  const { openapi } = oas

  const isV3 = openapi && openapi.startsWith("3")

  let print = (oas) => undefined

  if (isV3) {
    print = require("./v3")
  }

  return print(oas)
}

module.exports = { oas2word }
