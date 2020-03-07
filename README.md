# img-scalr
A lightweight, zero-dependents javascript utility for scaling images at the client before upload using Canvas API.

## Installation

```sh
npm install img-scalr
# or
yarn add img-scalr
```

## Usage
```sh
import ImgScalr from 'img-scalr'

const dataURL = await ImgScalr.scale(
    imgFile,
    { width: 400, height: 400 },
    ImgScalr.DataURL,
    'image/png'
  )
```

## API
### **`scale(imageFile, targetSize, resultType, mimeType) : Promise<String|Blob>`**
scales `imageFile` proportionally with respect to `targetSize`.
- **imageFile**   - Image file object to scale.
- **targetSize**  - target `width` and `height`. Output image will not exceed these bounds
- **resultType**  - *(Optional)* desired return type. Defaults to `DataURL` if not specified.
  - `ResultType.DataURL`  - Returns an image that you can use as source to another canvas or an HTML Element.
  - `ResultType.Blob`   - returns a `Blob` object representing the image; this file may be cached on the disk or stored in memory at the discretion of the user agent.
- **mimeType**    - *(Optional)* A DOMString indicating the image format. If not specified, the image type is image/png. The created image is in a resolution of 96dpi.

## Browser Support
Should work in all browsers that supports `canvas`
