// modules/About.js
import React from 'react'
import Paper from 'material-ui/Paper';


export default React.createClass({
  render() {
    return <div><h1>About</h1>
      <Paper zDepth={1} >
      <p>Esta App es un ejercicio realizado por José Andradez</p>
      <p>puede mirar el codigo en: <a href="https://github.com/HERRKIN/grarzonmr" >GitHub</a></p>

      </Paper>


    		</div>
  }
})