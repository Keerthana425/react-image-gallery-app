// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, updateActiveId, isActive} = props
  const activetab = !isActive ? 'active-tab' : ''
  const onClickImage = () => {
    updateActiveId(thumbnailDetails)
  }
  return (
    <li>
      <button className="buttonImage" type="button">
        <img
          src={thumbnailDetails.thumbnailUrl}
          alt={thumbnailDetails.thumbnailAltText}
          className={`ThumbnailImage ${activetab}`}
          onClick={onClickImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
