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

class TextInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: '',
      inputValue: this.props.inputValue ? this.props.inputValue : '',
      focus: this.props.inputValue ? true : false,
      validInput: true,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log('state.inputValue .....', state.inputValue);
    console.log('props.inputValue .....', props.inputValue);
    if (state.inputValue === '' && props.inputValue !== '') {
      return {inputValue: props.inputValue, focus: true};
    }
    return {};
  }
  handleOnChangeText = inputValue => {
    console.log('handleOnChangeText ....', inputValue);
    // this.setState({inputValue}, () =>
    //   this.props.onTextChange(this.state.inputValue),
    // );
    this.props.onTextChange(inputValue);
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
            !this.state.focus && this.props.inputValue.length === 0
              ? this.props.placeholder
              : ''
          }
          onChangeText={text => {
            this.handleOnChangeText(text);
            // this.setState({inputValue: text});
            // this.props.onTextChange(this.state.inputValue);
          }}
          onBlur={() => {
            if (this.props.inputValue.length === 0) {
              this.setState({focus: false});
            }
          }}
          onFocus={() => {
            this.setState({focus: true});
            this.props.onFieldFocus && this.props.onFieldFocus(1100);
          }}
          value={this.props.inputValue}
        />
        {this.state.focus && this.props.placeholder.length > 0 && (
          <Text style={styles.captionText}>{this.props.placeholder}</Text>
        )}
      </View>
    );
  }
}

export default TextInputComponent;
