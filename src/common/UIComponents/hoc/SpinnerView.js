import React, {Component} from 'react';
import {Animated, Easing} from 'react-native';

const SpinnerView = ChildComponent =>
  class ParentComponent extends Component {
    constructor(props) {
      super(props);
      this.spinnerAnimValue = new Animated.Value(0);
    }

    startSpinner = () => {
      this.spinnerAnimValue.setValue(0);
      Animated.timing(this.spinnerAnimValue, {
        toValue: 1, // move towards top of the page
        duration: 300,
        useNativeDriver: true,
        easing: Easing.ball,
      }).start(() => this.props.onSubmit());
    };

    render() {
      return (
        <ChildComponent
          {...this.props}
          startSpinner={this.startSpinner}
          spin={this.spinnerAnimValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          })}
        />
      );
    }
  };

export default SpinnerView;
