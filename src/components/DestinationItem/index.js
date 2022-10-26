import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {eachItems} = this.props
    const {name, imgUrl, id} = eachItems
    return (
      <ul>
        <li className="size">
          <p>{name}</p>
          <img src={imgUrl} alt={name} key={id} />
        </li>
      </ul>
    )
  }
}
export default DestinationItem
