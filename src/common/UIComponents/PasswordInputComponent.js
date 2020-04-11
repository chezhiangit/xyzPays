import * as React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

class PasswordInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: '',
      inputValue: '',
      focus: false,
      pwdValid: true,
    };
  }
  handleOnChangeText = inputValue => {
    this.setState({inputValue});
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
              this.state.pwdValid && {borderColor: 'blue', borderWidth: 1},
          ]}
          secureTextEntry={true}
          spellCheck={false}
          textContentType={'password'}
          autoFocus={false}
          multiline={false}
          placeholderTextColor="rgb(117, 129, 155)"
          autoCorrect={false}
          placeholder={
            !this.state.focus && this.state.inputValue.length === 0
              ? this.props.placeholder
              : ''
          }
          onChangeText={text => {
            this.handleOnChangeText(text);
          }}
          onBlur={() => {
            if (this.state.inputValue.length === 0) {
              this.setState({focus: false});
            }
          }}
          onFocus={() => {
            this.setState({focus: true});
            // this.props.onFieldFocus(170);
          }}
          value={this.state.inputValue}
        />
        {this.state.focus && (
          <Text style={styles.captionText}>{this.props.placeholder}</Text>
        )}
      </View>
    );
  }
}

export default PasswordInputComponent;
