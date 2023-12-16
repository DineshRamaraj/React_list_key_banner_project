import {Component} from 'react'
import './index.css'

class BannerCardItem extends Component {
  render() {
    const {eachItem} = this.props
    const {headerText, description, className} = eachItem

    return (
      <li className={`card ${className}`}>
        <div>
          <h1 className="heading">{headerText}</h1>
          <p className="description">{description}</p>
          <button className="button" type="button">
            Show More
          </button>
        </div>
      </li>
    )
  }
}

export default BannerCardItem
