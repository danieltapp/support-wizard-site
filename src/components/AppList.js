import React from "react";
import { Icon, List } from "semantic-ui-react";
import _ from "lodash";

export default props => {
  const appList = [];

  _.mapValues(props.apps, app => {
    appList.push(app.name);
  });

  return (
    <List animated verticalAlign="middle">
      {appList.map(app => {
        return (
          <List.Item onClick={() => props.appSelection(app)}>
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
