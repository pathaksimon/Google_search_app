import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {changeswith: ''}

  mani = suggestion => {
    this.setState({changeswith: suggestion})
  }

  ashu = event => {
    this.setState({changeswith: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {changeswith} = this.state
    const searchResult = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(changeswith.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="photu"
          alt="google logo"
        />
        <div className="card1">
          <div className="first">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search_ka_button"
            />
            <input
              type="search"
              className="dibba"
              value={changeswith}
              onChange={this.ashu}
            />
          </div>

          <ul className="ul">
            {searchResult.map(each => (
              <SuggestionItem allofthem={each} mani={this.mani} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
