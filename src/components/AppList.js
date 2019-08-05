import React from "react";
import { Icon, List } from "semantic-ui-react";

export default props => {

  const uuid4 = require('uuid4')

  return (
    <List animated verticalAlign="middle">
      {props.appList.map(app => {
        return (
          <List.Item onClick={() => props.appSelection(app)} key={uuid4()}>
            <Icon name="arrow alternate circle right outline" color="orange" />
            <List.Content>
              <List.Header>{app}</List.Header>
            </List.Content>
          </List.Item>
        );
      })}
    </List>
  );
};
