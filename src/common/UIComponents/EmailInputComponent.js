import * as React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import {checkEmail} from '../../uttils/UtilityFunctions';

class EmailInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: '',
      // email: this.props.email === undefined ? this.props.email : '',
      focus: this.props.email ? true : false,
      emailValid: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.email.length === 0) {
      return {emailValid: true};
    }
    if (props.email.length > 0) {
      return {focus: true};
    }
    return {};
  }

  onEmailChange = email => {
    console.log('onEmailChange ....', email);
    const emailValid = checkEmail(email);
    this.setState(
      {
        // email,
        // focus: this.props.email.length > 0 ? true : false,
        emailValid,
      },
      // () => this.props.onEmailEntered(this.state.email),
    );

    this.props.onEmailEntered(email);
  };

  render() {
    return (
      <View style={styles.textInputContainer}>
        <TextInput
          style={[
            styles.textInput,
            this.state.focus &&
              !this.state.emailValid && {borderColor: 'red', borderWidth: 1},
            this.state.focus &&
              this.state.emailValid && {borderColor: '#22caff', borderWidth: 1},
          ]}
          textContentType={'emailAddress'}
          spellCheck={false}
          autoFocus={false}
          multiline={false}
          placeholderTextColor="rgb(117, 129, 155)"
          autoCorrect={false}
          placeholder={
            !this.state.focus && this.props.email.length === 0
              ? this.props.placeholder
              : ''
          }
          onChangeText={text => {
            this.onEmailChange(text);
            // this.props.onEmailEntered(text);
          }}
          // onEndEditing={() => this.props.onEmailEntered(this.state.email)}
          onBlur={() => {
            if (this.props.email.length === 0) {
              this.setState({focus: false});
            }
          }}
          onFocus={() => {
            this.setState({focus: true});
            // this.props.onFieldFocus(170);
          }}
          onChange={() => console.log('onChange ......')}
          value={this.props.email}
        />
        {this.state.focus && (
          <Text style={styles.captionText}>{this.props.placeholder}</Text>
        )}
      </View>
    );
  }
}

export default EmailInputComponent;
