import React from 'react'
import {Form} from 'simple-react-form'
import MenuItems from '../../collections/MenuItems.js'
import RaisedButton from 'material-ui/RaisedButton';

export default class PostsCreate extends React.Component {
  render() {
    return (
      <div>
        <h1>Create a Menu Item</h1>
        <Form
        collection={MenuItems}
        type='insert'
        ref='form'
        />
        <RaisedButton label='Create' onTouchTap={() => this.refs.form.submit()}/>
      </div>
    )
  }
}