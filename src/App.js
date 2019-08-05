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
  Button,
  Progress,
  Label
} from "semantic-ui-react";
import "./App.css";
import Solution from "./components/Solution";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjxg1fmjc00e801emotoeu8h2/master"
});

const APP_QUERY = gql`
  query apps {
    issues {
      app
    }
  }
`;



client
  .query({
    query: APP_QUERY
  })
  .then(res => console.log(res));


//Dummy data
const apps = {
  BasketballStats: {
    name: "BasketballStats",
    url: "dtapp.com/basketball-stats/",
    issues: [
      {
        desc: "Shot percentage information is incorrect",
        owner: "Help Desk",
        solution:
          "Four dollar toast meh bicycle rights cold-pressed seitan iPhone fashion axe organic. Viral pitchfork butcher salvia small batch hammock. +1 man braid small batch everyday carry, iPhone lyft yr narwhal literally chambray leggings cornhole hashtag knausgaard kinfolk. "
      },
      {
        desc: "Integrated pricing issue",
        owner: "Developers",
        solution:
          "Artisan normcore 90's etsy skateboard meggings VHS, vice neutra synth aesthetic meh. Mustache chambray cardigan pitchfork viral venmo bushwick, dreamcatcher cornhole skateboard. Woke street art chillwave, iPhone roof party listicle farm-to-table green juice umami salvia franzen vice venmo post-ironic. 3 wolf moon seitan kickstarter bicycle rights VHS."
      }
    ]
  },
  BasketballJerseys: {
    name: "BasketballJerseys",
    url: "dtapp.com/basketball-jerseys",
    issues: [
      {
        desc:
          "Af fanny pack readymade, food truck thundercats wolf kale chips listicle YOLO squid pickled heirloom man bun hella.",
        owner: "Help Desk",
        solution:
          "Four dollar toast meh bicycle rights cold-pressed seitan iPhone fashion axe organic. Viral pitchfork butcher salvia small batch hammock. +1 man braid small batch everyday carry, iPhone lyft yr narwhal literally chambray leggings cornhole hashtag knausgaard kinfolk. "
      },
      {
        desc:
          "OLO raclette heirloom knausgaard. Pickled tattooed etsy, pug green juice coloring book sriracha cold-pressed post-ironic williamsburg helvetica.",
        owner: "Developers",
        solution:
          "Artisan normcore 90's etsy skateboard meggings VHS, vice neutra synth aesthetic meh. Mustache chambray cardigan pitchfork viral venmo bushwick, dreamcatcher cornhole skateboard. Woke street art chillwave, iPhone roof party listicle farm-to-table green juice umami salvia franzen vice venmo post-ironic. 3 wolf moon seitan kickstarter bicycle rights VHS."
      }
    ]
  },
  SneakerStats: {
    name: "SneakerStats",
    url: "dtapp.com/sneaker-stats",
    issues: [
      {
        desc: "Integrated work order not working",
        owner: "Help Desk",
        solution:
          "Four dollar toast meh bicycle rights cold-pressed seitan iPhone fashion axe organic. Viral pitchfork butcher salvia small batch hammock. +1 man braid small batch everyday carry, iPhone lyft yr narwhal literally chambray leggings cornhole hashtag knausgaard kinfolk. "
      },
      {
        desc: "Dispatch issue",
        owner: "Developers",
        solution:
          "Artisan normcore 90's etsy skateboard meggings VHS, vice neutra synth aesthetic meh. Mustache chambray cardigan pitchfork viral venmo bushwick, dreamcatcher cornhole skateboard. Woke street art chillwave, iPhone roof party listicle farm-to-table green juice umami salvia franzen vice venmo post-ironic. 3 wolf moon seitan kickstarter bicycle rights VHS."
      },
      {
        desc: "Snake in da' comode!",
        owner: "Developers",
        solution:
          "Artisan normcore 90's etsy skateboard meggings VHS, vice neutra synth aesthetic meh. Mustache chambray cardigan pitchfork viral venmo bushwick, dreamcatcher cornhole skateboard. Woke street art chillwave, iPhone roof party listicle farm-to-table green juice umami salvia franzen vice venmo post-ironic. 3 wolf moon seitan kickstarter bicycle rights VHS."
      }
    ]
  },
  Portal: {
    name: "Portal",
    url: "dtapp.com",
    issues: [
      {
        desc: "Integrated work order not working",
        owner: "Help Desk",
        solution:
          "Artisan normcore 90's etsy skateboard meggings VHS, vice neutra synth aesthetic meh. Mustache chambray cardigan pitchfork viral venmo bushwick, dreamcatcher cornhole skateboard. Woke street art chillwave, iPhone roof party listicle farm-to-table green juice umami salvia franzen vice venmo post-ironic. 3 wolf moon seitan kickstarter bicycle rights VHS."
      },
      {
        desc:
          "Af fanny pack readymade, food truck thundercats wolf kale chips listicle YOLO squid pickled heirloom man bun hella.",
        owner: "Developers",
        solution:
          "Artisan normcore 90's etsy skateboard meggings VHS, vice neutra synth aesthetic meh. Mustache chambray cardigan pitchfork viral venmo bushwick, dreamcatcher cornhole skateboard. Woke street art chillwave, iPhone roof party listicle farm-to-table green juice umami salvia franzen vice venmo post-ironic. 3 wolf moon seitan kickstarter bicycle rights VHS."
      },
      {
        desc: "Snake in da' comode!",
        owner: "Developers",
        solution:
          "Artisan normcore 90's etsy skateboard meggings VHS, vice neutra synth aesthetic meh. Mustache chambray cardigan pitchfork viral venmo bushwick, dreamcatcher cornhole skateboard. Woke street art chillwave, iPhone roof party listicle farm-to-table green juice umami salvia franzen vice venmo post-ironic. 3 wolf moon seitan kickstarter bicycle rights VHS."
      }
    ]
  }
};

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
            {activeStep == "selectApp" ? (
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
            ) : activeStep == "selectIssue" ? (
              <Segment color="orange" attached>
                <IssueList
                  issues={apps[selectedApp].issues}
                  setSelectedIssue={issueSelection}
                />

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
                <Solution issue={selectedIssue} />
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
