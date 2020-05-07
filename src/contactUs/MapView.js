import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Keyboard,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import {heightAdapter, widthAdapter} from '../uttils/adapterUtil';
import SliderView from '../common/UIComponents/SliderView';
import TextInputComponent from '../common/UIComponents/TextInputComponent';
import KeyboardAwareComponent from '../common/UIComponents/hoc/KeyboardAwareComponent';
import Footer from '../common/UIComponents/Footer';
import {getGoogleMapCoordinates} from '../AppStore/contactUSActions';
import WarningDialog from '../common/UIComponents/warningDialog';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFindUsView: false,
      findUsSubject: '',
      findUsMessage: '',
      showDlg: false,
      dlgMsg: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.props.registerKeyboard();
    // this.props.getGoogleMapCoordinates(
    //   this.onGetMapCoordinatesSuccess,
    //   this.onGetMapCoordinatesFailed,
    // );
  }
  componentWillUnmount() {
    this.props.deregisterKeyboard();
  }

  onGetMapCoordinatesSuccess = () => {
    console.log('get map coordinate success');
    this.setState({isLoading: false});
  };

  onGetMapCoordinatesFailed = errorMsg => {
    console.log('get map coordinate failes');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
    console.log(errorMsg);
  };

  onFindUs = () => {
    this.setState({showFindUsView: true});
  };
  onSubmit = () => {
    Keyboard.dismiss();
    this.setState({showFindUsView: false});
  };

  onConfirm = () => {
    this.setState({showDlg: false});
  };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  render() {
    const {navigation} = this.props;
    var mapStyle = [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}],
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}],
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}],
      },
    ];
    return (
      <View style={styles.container}>
        <MapView
          // provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}>
          <Marker
            draggable
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />
        </MapView>
        <View style={styles.bottomContainer}>
          <PrimaryButton
            btnStyle={styles.findUsBtn}
            onSubmit={this.onFindUs}
            btnName={I18n.t('contactUs.findUsBtnName')}
          />
        </View>
        <Animated.View
          style={{width: '100%', transform: [{translateY: this.props.shift}]}}>
          <SliderView
            // containerStyle={{transform: [{translateY: this.props.shift}]}}
            visible={this.state.showFindUsView}
            animateFrom="bottom"
            height={heightAdapter(600)}
            width="100%">
            <View style={styles.contactUsContainer}>
              <TextInputComponent
                placeholder={I18n.t('contactUs.subject')}
                autoFocus={false}
                // onFieldFocus={this.props.onFieldFocus}
                inputValue={this.state.findUsSubject}
                onTextChange={text => this.setState({findUsSubject: text})}
              />
              <TextInputComponent
                placeholder={I18n.t('contactUs.message')}
                autoFocus={false}
                // onFieldFocus={this.props.onFieldFocus}
                inputValue={this.state.findUsMessage}
                onTextChange={findUsMessage => this.setState({findUsMessage})}
              />
              <PrimaryButton
                btnStyle={styles.submitBtn}
                onSubmit={this.onSubmit}
                btnName={I18n.t('contactUs.submitBtnName')}
              />
              <View
                style={[BaseStyles.emptyHView, {height: heightAdapter(100)}]}
              />
            </View>
          </SliderView>
        </Animated.View>
        <Footer />
        <WarningDialog
          shouldShowDeleteWarning={this.state.showDlg}
          // onCancel={this.onCancel}
          onOK={this.onConfirm}
          dlgMsg={this.state.dlgMsg}
        />
        <Spinner visible={this.state.isLoading} textContent={'Loading...'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: heightAdapter(150),
  },
  bottomContainer: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    bottom: heightAdapter(200),
    right: widthAdapter(50),
    left: 0,
    zIndex: 0,
    justifyContent: 'flex-end',
  },
  findUsBtn: {
    height: heightAdapter(50),
    width: widthAdapter(150),
    marginRight: widthAdapter(30),
    // position: 'absolute',
    // bottom: heightAdapter(50),
    // right: widthAdapter(50),
    // left: 0,
    // zIndex: 0,
  },
  contactUsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: widthAdapter(30),
    zIndex: 100,
  },
  submitBtn: {
    height: heightAdapter(100),
    width: widthAdapter(200),
    marginRight: widthAdapter(30),
    borderRadius: widthAdapter(50),
  },
});

const mapStateToProps = state => {
  console.log('state from Home page ....', state);
  return {
    // dashboardData: state.dashboard.dashboardData,
    // pendingTask: state.dashboard.pendingTask,
  };
};

const mapDispatchToProps = dispatch => ({
  getGoogleMapCoordinates: (onSuccesscallback, onErrocallback) =>
    dispatch(getGoogleMapCoordinates(onSuccesscallback, onErrocallback)),
  // getPendingTaskData: (onSuccesscallback, onErrocallback) =>
  //   dispatch(getPendingTaskData(onSuccesscallback, onErrocallback)),
  // getProductDetailsData: (ProductKey, onSuccesscallback, onErrocallback) =>
  //   dispatch(
  //     getProductDetailsData(ProductKey, onSuccesscallback, onErrocallback),
  //   ),
});

// const childComp = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(ContactUs);

export default KeyboardAwareComponent(ContactUs);
