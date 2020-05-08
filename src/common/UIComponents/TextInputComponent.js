import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import styles from './styles';
import {placeholder} from 'i18n-js';
import {displayPhoneNumber, checkPhone} from '../../uttils/UtilityFunctions';

class TextInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: '',
      inputValue: '',
      focus: this.props.inputValue ? true : false,
      validInput: true,
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.inputValue?.length === 0) {
      return {emailValid: true};
    }
    return {};
  }
  handleOnChangeText = inputValue => {
    console.log('handleOnChangeText ....', inputValue);
    // if (this.props.phone) {
    //   const validInput = checkPhone(inputValue);
    //   this.setState({validInput});
    // }
    this.props.onTextChange(inputValue);

    if (this.props.inputValue === undefined) {
      this.setState({inputValue});
    }

  };

  render() {
    return (
      <View style={styles.textInputContainer}>
        <TextInput
          style={[
            styles.textInput,
            this.state.focus &&
              !this.state.validInput && {borderColor: 'red', borderWidth: 1},
            this.state.focus &&
              this.state.validInput && {borderColor: '#22caff', borderWidth: 1},
          ]}
          spellCheck={false}
          autoFocus={false}
          multiline={false}
          placeholderTextColor="rgb(117, 129, 155)"
          autoCorrect={false}
          placeholder={
            !this.state.focus && this.props.inputValue?.length === 0 || (!this.state.focus && this.state.inputValue?.length !== undefined && this.state.inputValue?.length === 0)
              ? this.props.placeholder
              : ''
          }
          onChangeText={text => {
            this.handleOnChangeText(text);
            // this.setState({inputValue: text});
            // this.props.onTextChange(this.state.inputValue);
          }}
          onBlur={() => {
            if (this.props.inputValue?.length === 0 || (this.state.inputValue?.length !== undefined && this.state.inputValue?.length === 0)) {
              this.setState({focus: false});
            }
          }}
          onFocus={() => {
            this.setState({focus: true});
            this.props.onFieldFocus && this.props.onFieldFocus(1100);
          }}
          // value={
          //   this.props.phone
          //     ? displayPhoneNumber(this.props.inputValue)
          //     : this.props.inputValue
          // }
          value={this.props.inputValue}
        />
        {this.state.focus && (this.props.placeholder.length > 0 || this.state.inputValue?.length) && (
          <Text style={styles.captionText}>{this.props.placeholder}</Text>
        )}
      </View>
    );
  }
}

export default TextInputComponent;
