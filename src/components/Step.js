import React from 'react'
import { Step } from 'semantic-ui-react'

const StepExampleOrdered = () => (
  <Step.Group ordered>
    <Step completed>
      <Step.Content>
        <Step.Title>Select Application</Step.Title>
        <Step.Description>Which application do you need assistance with?</Step.Description>
      </Step.Content>
    </Step>

    <Step completed>
      <Step.Content>
        <Step.Title>Select Issue</Step.Title>
        <Step.Description>What are you needing assistance with?</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Step.Content>
        <Step.Title>Solution</Step.Title>
        <Step.Description>Instructions on how to troubleshoot issue & request assistance from the solution owner.</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default StepExampleOrdered