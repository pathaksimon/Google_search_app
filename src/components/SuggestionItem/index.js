import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  arrow = () => {
    const {allofthem, mani} = this.props
    const {suggestion} = allofthem
    mani(suggestion)
  }

  render() {
    const {allofthem} = this.props
    const {suggestion} = allofthem
    const jema =
      'https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png'
    return (
      <li className="together">
        <p>{suggestion}</p>
        <img src={jema} alt="arrow" className="kali" onClick={this.arrow} />
      </li>
    )
  }
}

export default SuggestionItem
