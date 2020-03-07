export default {
  ResultType: {
    Blob: 'blob',
    DataURL: 'dataURL'
  },
  scale (imageFile, { width = 400, height = 400 }, resultType = this.ResultType.DataURL, mimeType = 'image/png') {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = document.createElement('img')
        img.onload = () => {
          const canvas = document.createElement('canvas')
          let ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0)

          let targetWidth = img.width
          let targetHeight = img.height

          if (targetWidth > targetHeight) {
            if (targetWidth > width) {
              targetHeight *= width / targetWidth
              targetWidth = width
            }
          } else {
            if (targetHeight > height) {
              targetWidth *= height / targetHeight
              targetHeight = height
            }
          }
          canvas.width = targetWidth
          canvas.height = targetHeight
          ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0, targetWidth, targetHeight)

          if (resultType === this.ResultType.DataURL) {
            return resolve(canvas.toDataURL(mimeType))
          } else if (resultType === this.ResultType.Blob) {
            return canvas.toBlob(blob => resolve(blob), mimeType)
          }
          return resolve()
        }
        img.src = e.target.result
      }
      reader.readAsDataURL(imageFile)
    })
  }
}
