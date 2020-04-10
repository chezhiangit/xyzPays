import React, {PureComponent} from 'react';
import {Animated, Easing} from 'react-native';

const SpinnerView = ChildComponent =>
  class ParentComponent extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        spinnerAnimValue: new Animated.Value(0),
      };
    }

    startSpinner = () => {
      Animated.timing(this.state.spinnerAnimValue, {
        toValue: 1, // move towards top of the page
        duration: 300,
        useNativeDriver: true,
        easing: Easing.ball,
      }).start(() => this.props.onSubmit());
    };
    //  startInterPolate = this.state.spinnerAnimValue.interpolate({
    //       inputRange: [0, 1],
    //       outputRange: ['0deg', '360deg'],
    //     });

    render() {
      return (
        <ChildComponent
          {...this.props}
          startSpinner={this.startSpinner}
          startInterPolate={this.startInterPolate}
          spin={this.state.spinnerAnimValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          })}
        />
      );
    }
  };

export default SpinnerView;
