// modules/Repo.js
import React from 'react'

export default class Repo extends React.Component{
  render() {
    return (
      <div>
        <h2>User:{this.props.params.userName} Repo:{this.props.params.repoName}</h2>
      </div>
    )
  }
}