import React from 'react';
import { Button, DropdownButton, Dropdown} from 'react-bootstrap'

const FooComponent = () => {
  return (
    <div>
      <Button variant='primary'>primary</Button>
      <Button variant='success'>success</Button>
      <Button variant='info'>info</Button>
      <Button variant='warning'>warning</Button>
      <Button variant='danger'>danger</Button>
      <Button variant='link'>link</Button>
      <DropdownButton title='Dorpdown Button'>
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
        <Dropdown.Item>Item 3</Dropdown.Item>
      </DropdownButton>
    </div>
  )
}

export default FooComponent
