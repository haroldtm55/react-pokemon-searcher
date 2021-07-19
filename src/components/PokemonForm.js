import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid onChange={this.props.handleChange} value={this.props.inputValues.name} label="Name" placeholder="Name" name="name" />
            <Form.Input fluid onChange={this.props.handleChange} value={this.props.inputValues.hp} label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid onChange={this.props.handleChange} value={this.props.inputValues.frontUrl} label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid onChange={this.props.handleChange} value={this.props.inputValues.backUrl} label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
