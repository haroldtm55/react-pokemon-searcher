import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    form: {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    },
    keyword: ''
  }

  componentDidMount() {
    this.renderPokemons()
  }
  
  renderPokemons = () => {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemons => {
        this.setState({
          pokemons: pokemons
        })
      })
  }
  
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
          // handleNameChange={this.handleNameChange}
          // handleHpChange={this.handleHpChange}
          // handleFrontUrlChange={this.handleFrontUrlChange}
          // handleBackUrlChange={this.handleBackUrlChange}
          handleChange = {this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValues={this.state.form}/>
        <br />
        <Search handleChange={this.handleChange}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemons} keyword={this.state.keyword}/>
      </Container>
    )
  }

  handleChange = event => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.persist()
    const newPokemon = {
      name: this.state.form.name,
      hp: this.state.form.hp,
      sprites: {
        front: this.state.form.frontUrl,
        back: this.state.form.backUrl
      }
    }
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    }
    fetch('http://localhost:3000/pokemon',configObj)
      .then(()=>this.renderPokemons())

    this.setState({
      form: {
        ...this.state.form,
        name: '',
        hp: '',
        frontUrl: '',
        backUrl: ''
      }
    })
  }
}

export default PokemonPage
