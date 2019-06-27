import React from 'react'
import { Icon, List } from 'semantic-ui-react'

export default (props) => (
  <List animated verticalAlign='middle'>
    <List.Item onClick={props.appSelection} id="PAMM">
      <Icon name='arrow alternate circle right outline' color='orange' />
      <List.Content>
        <List.Header>PAMM</List.Header>
      </List.Content>
    </List.Item>
    <List.Item onClick={props.appSelection}>
    <Icon name='arrow alternate circle right outline' color='orange' />
      <List.Content>
        <List.Header>ELSA</List.Header>
      </List.Content>
    </List.Item>
    <List.Item onClick={props.appSelection}>
    <Icon name='arrow alternate circle right outline' color='orange' />
      <List.Content>
        <List.Header>MEDS</List.Header>
      </List.Content>
    </List.Item>
  </List>
)

