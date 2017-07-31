import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import {
  Header,
  model,
  stepChanged
} from '../../train';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

interface AppProps {
  trainArr: model.Train[];
  dispatch: Dispatch<{}>;
}

class App extends React.Component<AppProps, {}> {
  render() {
    const { trainArr, dispatch } = this.props;

    return (
      <div className="app">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Header arr={trainArr} selected={(index: number) => dispatch(stepChanged(index))} />
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trainArr: state.Train
});

export default connect(mapStateToProps)(App);
