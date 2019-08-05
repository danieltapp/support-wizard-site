import React, { useState, useEffect } from "react";
import _ from "lodash";
// import Step from "./components/Step";
import AppList from "./components/AppList";
import IssueList from "./components/IssueList";
import {
  Container,
  Header,
  Icon,
  Segment,
  Step,
  Progress,
  Label
} from "semantic-ui-react";
import "./App.css";
import Solution from "./components/Solution";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";
import { apolloUri } from './api'
import { testApps } from './testData'

const client = new ApolloClient({
  uri: apolloUri
});

const APP_QUERY = gql`
  query apps {
    issues {
      app
      desc
      solution
      owner
    }
  }
`;



client
  .query({
    query: APP_QUERY
  })
  .then(res => console.log(res));


//Dummy data
const apps = testApps

function App() {
  //state to determine if step is active
  const steps = ["selectApp", "selectIssue", "solution"];
  const [activeStep, setActiveStep] = useState(steps[0]);
  useEffect(() => {}, [activeStep]);

  //state to determine which app is selected and progress percentage
  const [selectedApp, setSelectedApp] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("");
  const [percent, updatePercent] = useState(0);

  //handlers

  const appSelection = app => {
    setSelectedApp(app);
    setActiveStep(steps[steps.indexOf(activeStep) + 1]);
    updatePercent(percent + 45);
  };

  const issueSelection = issue => {
    setSelectedIssue(issue);
    setActiveStep(steps[steps.indexOf(activeStep) + 1]);
    updatePercent(percent + 55);
  };

  return (
    <ApolloProvider client={client}>
      <div className="App" style={{ marginTop: "2rem" }}>
        <Header as="h2" icon textAlign="center">
          <Icon name="wizard" circular />
          <Header.Content>Support Wizard</Header.Content>
        </Header>
        <Container>
          <Step.Group attached="top" pointing>
            <Step active={activeStep === steps[0] ? true : false}>
              <Step.Content>
                <Step.Title>Select Application</Step.Title>
                <Step.Description>
                  Which application do you need assistance with?
                </Step.Description>
              </Step.Content>
            </Step>

            <Step
              id="selectIssue"
              active={activeStep === steps[1] ? true : false}
            >
              <Step.Content>
                <Step.Title>Select Issue</Step.Title>
                <Step.Description>
                  What are you needing assistance with?
                </Step.Description>
              </Step.Content>
            </Step>

            <Step id="solution" active={activeStep === steps[2] ? true : false}>
              <Step.Content>
                <Step.Title>Solution</Step.Title>
                <Step.Description>
                  Instructions on how to troubleshoot issue & request assistance
                  from the solution owner.
                </Step.Description>
              </Step.Content>
            </Step>
          </Step.Group>

          <Segment>
            {activeStep === "selectApp" ? (
              <Segment color="orange" attached>
                <Query query={APP_QUERY}>
                  {({ loading, data }) => {
                    if (loading) return "Loading...";
                    const { issues } = data;
                    const appList = _.uniq(issues.map(issue => issue.app))
                    return <AppList appList={appList} appSelection={appSelection} />;
                  }}
                </Query>
              </Segment>
            ) : activeStep === "selectIssue" ? (
              <Segment color="orange" attached>
              <Query query={APP_QUERY}>
              {({ loading, data }) => {
                if (loading) return "Loading...";
                const { issues } = data;
                const issueList = issues.map((issue) => {
                   if (issue.app === selectedApp) return issue.desc 
                   
                })
                console.log(issueList)
                return <IssueList issues={issueList} setSelectedIssue={issueSelection} />;
              }}
            </Query>


                <Label
                  as="a"
                  content="Back"
                  icon="arrow alternate circle left outline"
                  onClick={() => {
                    setActiveStep(steps[0]);
                    updatePercent(0);
                  }}
                />
              </Segment>
            ) : (
              <Segment color="orange" attached>
              <Query query={APP_QUERY}>
              {({ loading, data }) => {
                if (loading) return "Loading...";
                const { issues } = data;
                // const issue = 
                // console.log(issueList)
                return <Solution issue={selectedIssue} />
              }}
            </Query>
             
                <Label
                  as="a"
                  content="Back"
                  icon="arrow alternate circle left outline"
                  onClick={() => {
                    setActiveStep(steps[0]);
                    updatePercent(0);
                  }}
                />
              </Segment>
            )}
          </Segment>
          <Progress percent={percent} indicating />
        </Container>
      </div>
    </ApolloProvider>
  );
}

export default App;
