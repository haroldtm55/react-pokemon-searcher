import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    frontImg: true,
  }
  
  displayImg = () => (
    this.state.frontImg ? this.props.pokeInfo.sprites.front : this.props.pokeInfo.sprites.back
  )

  handleClick = () => {
    this.setState(prevState => {
      return {frontImg: !prevState.frontImg}
    })
  }
  
  render() {
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={this.displayImg()} alt={this.props.pokeInfo.name} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokeInfo.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokeInfo.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
