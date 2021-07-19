import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  filterCollection = () => {
    if (this.props.keyword.length<3) {
      return this.props.pokemons.map((pokemon,idx)=><PokemonCard key={idx} pokeInfo={pokemon}/>)
    } else {
      return this.props.pokemons.filter(pokemon => pokemon.name.includes(this.props.keyword)).map((pokemon,idx)=><PokemonCard key={idx} pokeInfo={pokemon}/>)
    } 
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.filterCollection()}
      </Card.Group>
    )
  }
}



export default PokemonCollection
