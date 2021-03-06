const loadCsv = (e) => {
  const file = e.target.files[0]
  const reader = new FileReader()
  return new Promise(resolve => {
    const result = {}
    reader.onload = (f) => {
      const rows = f.target.result.split('\n')
      const headers = rows[0].split(',')
      for (let h = 0; h < headers.length; h++) {
        result[headers[h]] = []
      }
      for (let v = 1; v < rows.length; v++) {
        const values = rows[v].split(',')
        for (let i = 0; i < values.length; i++) {
          const val = +values[i]
          if (!isNaN(val)) {
            result[headers[i]].push(val)
          } else {
            result[headers[i]] = false
          }
        }
      }
      resolve(result)
    }
    reader.readAsBinaryString(file)
  })
}

export default loadCsv
