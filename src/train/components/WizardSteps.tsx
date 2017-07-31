import * as React from 'react';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import Paper from 'material-ui/Paper';
import './WizardSteps.css';

const style = {
    height: 100,
    width: 500,
    margin: 20,
    border: '1px solid #FFF',
    textAlign: 'center',
    display: 'inline-block',
};

interface StepProps {
    stepChanged: (index: number) => void;
    loading: boolean;
    finished: boolean;
    stepIndex: number;

}
interface StepState {
    loading: boolean;
    finished: boolean;
    stepIndex: number;
}

class WizardSteps extends React.Component<StepProps, StepState> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            loading: this.props.loading,
            finished: this.props.finished,
            stepIndex: this.props.stepIndex

        };

    }

    componentDidMount() {

        console.log('Into component did mount');
    }

    dummyAsync = (cb) => {
        this.setState({ loading: true }, () => {
            setTimeout(cb, 500);
        });
    };

    handleNext = () => {
        const { stepIndex } = this.state;
        if (!this.state.loading) {
            this.dummyAsync(() => {

                this.setState({
                    loading: false,
                    stepIndex: stepIndex + 1,
                    finished: stepIndex >= 4,
                });

                this.props.stepChanged(stepIndex);
            });
        }
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (!this.state.loading) {
            this.dummyAsync(() => this.setState({
                loading: false,
                stepIndex: stepIndex - 1,
            }));
        }
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (

                    <div className="flex">
                        <Paper style={style} zDepth={5} rounded={false}>
                            <div style={{ marginTop: 30 }}>NEW PROJECT</div>
                        </Paper>
                        <Paper style={style} zDepth={5} rounded={false}>
                            <div style={{ marginTop: 30 }}>OPEN PROJECT</div>
                        </Paper>
                    </div>

                );
            case 1:
                return (
                    <div>

                        <p>
                            select network
            </p>

                    </div>
                );
            case 2:
                return (
                    <p>
                        Training module
          </p>
                );
            case 3:
                return (
                    <p>
                        Testing
          </p>
                );
            case 4:
                return (
                    <p>
                        Publishing
          </p>
                );
            default:
                return 'Done';
        }
    }

    renderContent() {
        const { finished, stepIndex } = this.state;
        const contentStyle = { margin: '0 16px', overflow: 'hidden' };

        if (finished) {
            return (
                <div >
                    <p>
                        {this.setState({ stepIndex: 0, finished: false })}
                        to reset the example.
          </p>
                </div>
            );
        }

        return (
            <div >
                <div>{this.getStepContent(stepIndex)}</div>
                <div style={{ marginTop: 24, marginBottom: 12 }}>
                    <RaisedButton
                        label="Back"
                        secondary={true}
                        disabled={stepIndex === 0}
                        onTouchTap={this.handlePrev}
                        style={{ marginRight: 12 }}
                    />
                    <RaisedButton
                        label={stepIndex === 4 ? 'Finish' : 'Next'}
                        primary={true}
                        onTouchTap={this.handleNext}
                    />
                </div>
            </div>
        );
    }

    render() {
        const { loading, stepIndex } = this.state;

        return (
            <div style={{ margin: 15 }}>
                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>SELECT PROJECT</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>SELECT NETWORK</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>TRAIN</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>TEST</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>PUBLISH</StepLabel>
                    </Step>
                </Stepper>
                <ExpandTransition loading={loading} open={true}>
                    {this.renderContent()}
                </ExpandTransition>
            </div>
        );
    }
}


export default WizardSteps;
