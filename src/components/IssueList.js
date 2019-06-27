import React from 'react'
import { Icon, List } from 'semantic-ui-react'

export default () => (
  <List animated verticalAlign='middle'>
    <List.Item>
      <Icon name='arrow alternate circle right outline' color='orange' />
      <List.Content>
        <List.Header>Issue 1</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
    <Icon name='arrow alternate circle right outline' color='orange' />
      <List.Content>
        <List.Header>Issue 2</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
    <Icon name='arrow alternate circle right outline' color='orange' />
      <List.Content>
        <List.Header>Issue 3</List.Header>
      </List.Content>
    </List.Item>
  </List>
)

