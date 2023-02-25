import React from 'react';
import {Dropdown , DropdownButton} from 'react-bootstrap'

const DropdownComponent = () => {
  //컴포넌트를 그대로 읽어 들여 사용하는 것만으로 클릭에 의한 이벤트 처리도 동작함
  return (
    <DropdownButton title='DropdownSample'>
      <Dropdown.Item>Item 1</Dropdown.Item>
      <Dropdown.Item>Item 2</Dropdown.Item>
      <Dropdown.Item>Item 3</Dropdown.Item>
    </DropdownButton>
  )
}

export default DropdownComponent