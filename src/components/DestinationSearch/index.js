import {Component} from 'react'

import './index.css'

class DestinationSearch extends Component {
  state = {search: ''}

  searchItem = event => {
    this.setState({
      search: event.target.value,
    })
  }

  render() {
    const {destinationItems} = this.props
    const {search} = this.state
    const element = destinationItems.filter(eachPlace =>
      eachPlace.name.includes(search),
    )

    // here is the searchResult as 'element' when iam trying to pass this element from DestinationSearch to DestinationItem
    //  where i display this element, in the same DestinationSearch file or in DestinationItem file and how to pass this result to DestinationItem to display and when iam trying display
    // result search item and DestinationItem file items both are showing in the same page

    return (
      <>
        <div>
          <div className="center">
            <h1>Destination Search</h1>
            <input
              type="search"
              placeholder="Search"
              onChange={this.searchItem}
            />
          </div>
        </div>
      </>
    )
  }
}

export default DestinationSearch
