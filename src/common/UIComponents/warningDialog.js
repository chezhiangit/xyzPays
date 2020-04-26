import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native';
import Dialog, {DialogContent} from 'react-native-popup-dialog';
import {
  widthAdapter as adapter,
  fontscale,
  widthAdapter,
} from '../../uttils/adapterUtil';
import images from '../../Assets/index';
import Colors from '../../uttils/Colors';
import FontFamily from '../../uttils/FontFamily';
export default class warningDialog extends Component {
  static defaultProps = {
    displayText: '',
    displayImage: images.warningCritical,
    leftButtonText: 'Cancel',
    rightButtonText: 'OK',
  };

  constructor(props) {
    super(props);
    this.state = {
      warning: false,
      dialogShown: true,
    };
  }

  componentDidMount() {
    // this.clearModalListener = DeviceEventEmitter.addListener(
    //   CLEAR_MODAL,
    //   () => {
    //     this.setState({dialogShown: false});
    //   },
    // );
  }

  componentWillUnmount() {
    // if (this.clearModalListener) {
    //   this.clearModalListener.remove();
    // }
  }

  okButtonPress() {
    this.setState({
      warning: false,
    });
  }

  warning() {
    this.setState({
      warning: true,
    });
  }

  render() {
    return (
      <View>
        <Dialog
          visible={this.props.shouldShowDeleteWarning}
          width={adapter(700)}
          // height={adapter(600)}
        >
          <DialogContent>
            <View style={styles.warningImageContainer}>
              <Image
                source={this.props.displayImage}
                style={styles.warningImage}
              />
            </View>
            <View style={styles.warningTextContainer}>
              <Text style={styles.WarningText}>{this.props.dlgMsg}</Text>
            </View>
            <View style={styles.buttonContainer}>
              {this.props.onCancel && (
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => this.props.onCancel()}>
                  <Text style={styles.cancelButtonText}>
                    {this.props.leftButtonText}
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={styles.okButton}
                onPress={() => this.props.onOK()}>
                <Text style={styles.doneText}>
                  {this.props.rightButtonText}
                </Text>
              </TouchableOpacity>
            </View>
          </DialogContent>
        </Dialog>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  warningImageContainer: {
    // width: '100%',
    // height: adapter(80),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningImage: {
    // width: adapter(57),
    // height: adapter(56),
    marginTop: adapter(40),
    marginBottom: adapter(40),
  },
  warningTextContainer: {
    flexDirection: 'row',
    height: adapter(200),
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  WarningText: {
    // fontFamily: 'Roboto-Regular',
    fontSize: fontscale(20),
    // lineHeight: adapter(24),
    // textAlign: 'center',
    color: 'rgb(66,66,66)',
    // marginTop: adapter(24),
    fontFamily: FontFamily.primaryFontFamily,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'green',
    marginTop: adapter(30),
  },
  cancelButton: {
    width: adapter(250),
    height: adapter(75),
    borderRadius: adapter(4),
    backgroundColor: 'rgb(255,255,255)',
    // marginLeft: adapter(22),
    // marginTop: adapter(70),
    borderColor: Colors.primaryAppColor,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: adapter(15),
  },
  cancelButtonText: {
    color: 'rgb(66,66,66)', //'rgb(0,113,233)',
    fontSize: fontscale(15),
    // fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    // lineHeight: adapter(24),
    // marginTop: adapter(8),
    // borderWidth: 1,
    // borderColor: 'green',
    fontWeight: 'bold',
    fontFamily: FontFamily.primaryFontFamily,
  },
  okButton: {
    width: adapter(250),
    height: adapter(75),
    borderRadius: adapter(4),
    borderColor: Colors.primaryAppColor,
    borderWidth: 1,
    backgroundColor: Colors.primaryAppColor,
    // marginTop: adapter(70),
    // marginLeft: adapter(24),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: adapter(15),
  },
  doneText: {
    color: 'rgb(255,255,255)',
    fontSize: fontscale(15),
    fontFamily: FontFamily.primaryFontFamily,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
