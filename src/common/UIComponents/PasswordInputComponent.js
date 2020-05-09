import * as React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

class PasswordInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: '',
      // password: '',
      focus: false,
      pwdValid: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.password.length > 0) {
      return {focus: true};
    }
    return {};
  }
  handleOnChangeText = inputValue => {
    // this.setState({password: inputValue});
    this.setState({focus: this.props.password.length > 0 ? true : false});
    this.props.onPassworEntered(inputValue);
  };

  render() {
    return (
      <View style={styles.textInputContainer}>
        <TextInput
          style={[
            styles.textInput,
            this.state.focus &&
              !this.state.pwdValid && {borderColor: 'red', borderWidth: 1},
            this.state.focus &&
              this.state.pwdValid && {borderColor: '#22caff', borderWidth: 1},
          ]}
          secureTextEntry={true}
          spellCheck={false}
          textContentType={'password'}
          autoFocus={false}
          multiline={false}
          placeholderTextColor="rgb(117, 129, 155)"
          autoCorrect={false}
          placeholder={
            !this.state.focus && this.props.password.length === 0
              ? this.props.placeholder
              : ''
          }
          onChangeText={text => {
            this.handleOnChangeText(text);
          }}
          // onEndEditing={() => this.props.onPassworEntered(this.state.password)}
          onBlur={() => {
            if (this.props.password.length === 0) {
              this.setState({focus: false});
            }
          }}
          onFocus={() => {
            this.setState({focus: true});
            // this.props.onFieldFocus(170);
          }}
          value={this.props.password}
        />
        {this.state.focus && (
          <Text style={styles.captionText}>{this.props.placeholder}</Text>
        )}
      </View>
    );
  }
}

export default PasswordInputComponent;
