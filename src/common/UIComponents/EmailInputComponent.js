import * as React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import {checkEmail} from '../../uttils/UtilityFunctions';

class EmailInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: '',
      email: '',
      focus: false,
      emailValid: true,
    };
  }

  onEmailChange = email => {
    this.setState({
      email,
      focus: true,
      emailValid: checkEmail(email),
    });
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
          }}
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
