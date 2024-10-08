import { useState } from "react"
import PropTypes from "prop-types"

const Image = ({ src, fallbackSrc, alt = "ALT", ...props }) => {
  const [imageUrl, setImageUrl] = useState(src)
  return <img src={imageUrl} onError={() => setImageUrl(fallbackSrc)} alt={alt} {...props} />
}

export default Image
Image.propTypes = {
  src: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}
