import React from 'react'
import componentId from 'componentIds'

const ExampleComponent = () => (
  <div>
    some stuff here
    <button data-id={componentId.loginButton}>test</button>
  </div>
)

export default ExampleComponent