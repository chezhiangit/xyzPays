import React, {Component} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  DeviceEventEmitter,
} from 'react-native';
import PropTypes from 'prop-types';
// import images from '../utils/images';
import Fonts from '../../uttils/FontFamily';
import {widthAdapter as adapter, fontscale} from '../../uttils/adapterUtil';
// import {CLEAR_MODAL} from '../utils/constant';

const dialogWidth = adapter(544);
const dialogHeight = adapter(288);
const ColorBlue = 'rgb(0,113,233)';

/**
 * 删掉确认对话框
 */
export default class DeleteDialog extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    onRightClick: PropTypes.func,
  };

  static defaultProps = {
    visible: false,
    onRightClick: undefined,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
      content: 'Are you sure you want to remove ?',
    };
  }

  componentDidMount() {
    // this.clearModalListener = DeviceEventEmitter.addListener(
    //   CLEAR_MODAL,
    //   () => {
    //     this.setState({visible: false});
    //   },
    // );
  }

  componentWillUnmount() {
    // if (this.clearModalListener) {
    //   this.clearModalListener.remove();
    // }
  }

  setText(text) {
    this.setState({content: text});
  }

  show(visible) {
    this.setState({visible});
  }

  render() {
    return (
      <Modal
        transparent={true}
        visible={this.state.visible}
        onRequestClose={() => {
          this.show(false);
        }}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                width: adapter(544),
                height: adapter(224),
              }}>
              <Image
                source={''}
                width={adapter(52)}
                height={adapter(52)}
                marginTop={adapter(32)}
              />
              <Text
                style={{
                  marginLeft: adapter(32),
                  marginRight: adapter(32),
                  fontFamily: Fonts.primaryFontFamily,
                  fontSize: 16,
                  lineHeight: adapter(24),
                  marginTop: adapter(24),
                }}>
                {this.state.content}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                height: adapter(64),
              }}>
              <TouchableOpacity
                accessible={false}
                accessibilityLabel="DeleteDialog_leftBtn"
                onPress={() => {
                  this.show(!this.state.visible);
                }}>
                <View style={styles.navigationLeftButton}>
                  <Text
                    style={{
                      fontFamily: Fonts.roboto_regular,
                      color: ColorBlue,
                      fontSize: 16,
                    }}>
                    No
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                accessible={false}
                accessibilityLabel="DeleteDialog_rightBtn"
                style={{marginLeft: adapter(24)}}
                onPress={() => {
                  this.show(!this.state.visible);
                  const {onRightClick} = this.props;
                  if (onRightClick) {
                    onRightClick();
                  }
                }}>
                <View style={styles.navigationRightButton}>
                  <Text
                    style={{
                      fontFamily: Fonts.roboto_regular,
                      color: 'rgb(255,255,255)',
                      fontSize: 16,
                    }}>
                    Yes
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    backgroundColor: 'rgba(66, 66, 66,0.5)',
  },
  innerContainer: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: dialogWidth,
    height: dialogHeight,
  },
  navigationLeftButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: adapter(4),
    borderWidth: adapter(1),
    borderColor: ColorBlue,
    backgroundColor: 'rgb(255,255,255)',
    // marginLeft: adapter(28),
    width: adapter(228),
    height: adapter(32),
  },
  navigationRightButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: adapter(229),
    height: adapter(32),
    backgroundColor: ColorBlue,
    borderRadius: adapter(4),
  },
});
