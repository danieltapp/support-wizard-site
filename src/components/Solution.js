import React from 'react'
import { Image, Item} from 'semantic-ui-react'

export default (props) => (
    <Item>
      <Item.Image size='tiny' src='https://cdn.realpage.com/images/rp-logo-dots.svg' />

      <Item.Content>
        <Item.Header as='a'>{props.issue.desc}</Item.Header>
        <Item.Meta>Solution Owner : {props.issue.owner}</Item.Meta>
        <Item.Description>
          <p>{props.issue.solution}</p>
        </Item.Description>
      </Item.Content>
    </Item>
)

