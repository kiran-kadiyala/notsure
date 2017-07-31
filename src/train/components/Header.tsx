import * as React from 'react';

import WizSteps from './WizardSteps';
import AppBar from './CustomBar';
import { Train } from "../models";


interface HeaderProps {
    arr: Train[];
    selected: (text: string) => any;
};

class Header extends React.Component<HeaderProps, {}> {
    handleClick(text: string) {
        if (text.length !== 0) {
            this.props.selected(text);
        }
    }

    render() {
        return (
            <header className="header">
                <AppBar />
                <WizSteps stepIndex={0} loading={false} finished={false}
                    onClick={this.handleClick.bind(this)}
                />
            </header>
        );
    }
}

export default Header;
