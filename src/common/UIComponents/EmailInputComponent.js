import * as React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import {checkEmail} from '../../uttils/UtilityFunctions';

class EmailInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: '',
      email: this.props.email ? this.props.email : '',
      focus: this.props.email ? true : false,
      emailValid: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.email === '' && props.email) {
      return {email: props.email ? props.email : ''};
    }
    return {};
  }

  onEmailChange = email => {
    this.setState(
      {
        email,
        focus: true,
        emailValid: checkEmail(email),
      },
      () => this.props.onEmailEntered(this.state.email),
    );
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
            !this.state.focus && this.state.email.length === 0
              ? this.props.placeholder
              : ''
          }
          onChangeText={text => {
            this.onEmailChange(text);
            // this.props.onEmailEntered(text);
          }}
          // onEndEditing={() => this.props.onEmailEntered(this.state.email)}
          onBlur={() => {
            if (this.state.email.length === 0) {
              this.setState({focus: false});
            }
          }}
          onFocus={() => {
            this.setState({focus: true});
            // this.props.onFieldFocus(170);
          }}
          value={this.state.email}
        />
        {this.state.focus && (
          <Text style={styles.captionText}>{this.props.placeholder}</Text>
        )}
      </View>
    );
  }
}

export default EmailInputComponent;
