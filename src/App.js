import React, { useState, useEffect } from "react";
import _ from 'lodash';
// import Step from "./components/Step";
import AppList from "./components/AppList";
import IssueList from "./components/IssueList";
import { Container, Icon, Segment, Step, Button } from "semantic-ui-react";
import "./App.css";
import Solution from "./components/Solution";

const apps = {
  PAMM : {
    name : 'PAMM',
    url : 'applications.levelone.com/pamm',
    issues : [
    {
      desc : 'PK information is incorrect',
      owner : 'RPCC Help Desk',
      solution : 'Submit ticket to the helpdesk'
    },
    {
      desc : 'Integrated pricing issue',
      owner : 'RPCC Developers',
      solution : 'Submit PME SF ticket to the development team'
    }
  ]},
  ELSA : {
    name : 'ELSA',
    url : 'applications.levelone.com/pamm',
    issues : [
    {
      desc : 'PK information is incorrect',
      owner : 'RPCC Help Desk',
      solution : 'Submit ticket to the helpdesk'
    },
    {
      desc : 'Integrated pricing issue',
      owner : 'RPCC Developers',
      solution : 'Submit PME SF ticket to the development team'
    }
  ]},
  MEDS : {
    name : 'MEDS',
    url : 'applications.levelone.com/pamm',
    issues : [
    {
      desc : 'Integrated work order not working',
      owner : 'RPCC Help Desk',
      solution : 'Submit ticket to the helpdesk'
    },
    {
      desc : 'Dispatch issue',
      owner : 'RPCC Developers',
      solution : 'Submit PME SF ticket to the development team'
    },
    {
      desc : "Snake in da' comode!",
      owner : 'RPCC Developers',
      solution : 'Submit PME SF ticket to the development team'
    }
  ]
  }} 



function App() {
  //state to determine if step is active
  const steps = ["selectApp", "selectIssue", "solution"];
  const [activeStep, setActiveStep] = useState(steps[0]);
  console.log(activeStep);
  console.log(steps.indexOf(activeStep))

  useEffect(() => {}, [activeStep])

  //state to determine which app is selected
  const [selectedApp, setSelectedApp] = useState('')
  const [selectedIssue, setSelectedIssue] = useState('')



  //handlers

  const appSelection = (app) => {
    setSelectedApp(app)
    setActiveStep(steps[steps.indexOf(activeStep) + 1])
  }

  const issueSelection = (issue) => {
    setSelectedIssue(issue)
    setActiveStep(steps[steps.indexOf(activeStep) + 1])
    console.log(selectedIssue)
  }

  console.log(selectedApp)

  return (
    <div className="App">
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

          <Step id="selectIssue" active={activeStep === steps[1] ? true : false}>
            <Step.Content>
              <Step.Title>Select Issue</Step.Title>
              <Step.Description>
                What are you needing assistance with?
              </Step.Description>
            </Step.Content>
          </Step>

          <Step id="solution" active={activeStep === steps[2] ? true : false} disabled>
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

        {
          activeStep == 'selectApp' ? (
            <Segment attached>
            <AppList apps={apps} appSelection={appSelection} />
            </Segment>
          ) : activeStep == 'selectIssue' ?
          (
            <Segment attached>
            <IssueList issues={apps[selectedApp].issues} setSelectedIssue={issueSelection} />
            <Button onClick={() => setActiveStep(steps[0])} icon labelPosition="left">
              Go Back
              <Icon name="arrow alternate circle left outline" />
            </Button> 
            </Segment>
          ) :
            (
              <Segment attached>
                <Solution issue={selectedIssue}/>
                <Button onClick={() => setActiveStep(steps[0])} icon labelPosition="left">
                Go Back
                <Icon name="arrow alternate circle left outline" />
              </Button> 
              </Segment>
            )

        }


          
        </Segment>
      </Container>
    </div>
  );
}

// <Segment attached>
// <IssueList />
// </Segment>

export default App;
