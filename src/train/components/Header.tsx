import * as React from 'react';

import WizSteps from './WizardSteps';
import AppBar from './CustomBar';
import { Train } from "../models";


interface HeaderProps {
    arr: Train[];
    selected: (index: number) => any;
};

class Header extends React.Component<HeaderProps, {}> {
    handleStepChanged(index: number) {
        if (index !== 0) {
            this.props.selected(index);
        }
    }

    render() {
        const { arr } = this.props;

        console.log("Array: " + arr);
    
        return (
            <header className="header">
                <AppBar />
                <WizSteps stepIndex={0} loading={false} finished={false}
                    stepChanged={this.handleStepChanged.bind(this)}
                />
            </header>
        );
    }
}

export default Header;
