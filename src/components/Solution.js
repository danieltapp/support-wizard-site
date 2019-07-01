import React from "react";
import useClipboard from "react-use-clipboard";
import { Item, Button, Popup } from "semantic-ui-react";

export default props => {
  const [isCopied, setCopied] = useClipboard(props.issue.solution);

  return (
    <Item.Group>
      <Item>
        <Item.Content>
          <Item.Header as="a">{props.issue.desc}</Item.Header>
          <Item.Meta>Solution Owner : {props.issue.owner}</Item.Meta>
          <Item.Description>
            <p>{props.issue.solution}</p>

            <Popup
              content={isCopied ? "Copied" : "Copy to Clipboard"}
              trigger={<Button icon="copy outline" onClick={setCopied} />}
            />
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};


