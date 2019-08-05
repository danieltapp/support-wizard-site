import React from 'react'
import { Icon, List } from 'semantic-ui-react'

export default (props) => (
  <List animated verticalAlign='middle'>
    {
      props.issues.map( issue => { return issue &&
         (
          <React.Fragment>
          <List.Item onClick={() => props.setSelectedIssue(issue)}>
          <Icon name='arrow alternate circle right outline' color='orange' />
          <List.Content>
            <List.Header>{issue.desc}</List.Header>
          </List.Content>
        </List.Item>
          </React.Fragment>
        )
      })
    }
  </List>
)

