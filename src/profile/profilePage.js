import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import moment from 'moment';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
// import EmailInputComponent from '../common/UIComponents/EmailInputComponent';
// import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
// import PrimaryButton from '../common/UIComponents/PrimaryButton';
import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import ReadOnlyView from '../common/UIComponents/readOnlyView/ReadOnlyView';
import styles from './styles';
import editStyles from './editProfileStyle';
import Colors from '../uttils/Colors';
import {getProfileInfo} from '../AppStore/profileActions';
import WarningDialog from '../common/UIComponents/warningDialog';
import CheckBoxComponent from '../common/UIComponents/CheckBox/CheckBox';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repId: '12345',
      registrationType: 'Self',
      status: 'Active',
      reisteredOn: moment().format('MM/DD/YYYY'),
      productAccess: 'Internal Products',
      createdBy: 'XYZies',
      address: '',
      stateCity: '',
      mobile: '9585058087',
      email: 'chezhian.p@gmail.com',
      website: 'www.google.com',
      profileInfoServiceDone: false,
      isLoading: false,
      showDlg: false,
      dlgMsg: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.profileInfoServiceDone && props.profileInfo.FirstName === '') {
      return {isLoading: true};
    }
    return {};
  }

  componentDidMount() {
    this.props.getProfileInfo(
      this.onGetProfileInfoSuccess,
      this.onGetProfileInfoFailed,
    );
  }

  onGetProfileInfoSuccess = () => {
    this.setState({isLoading: false, profileInfoServiceDone: true});
  };

  onGetProfileInfoFailed = errorMsg => {
    this.setState({
      isLoading: false,
      profileInfoServiceDone: true,
      dlgMsg: errorMsg,
      showDlg: true,
    });
  };

  onEditProfile = () => {
    this.props.navigation.navigate('EditProfilePage');
  };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    this.setState({showDlg: false});
  };

  render() {
    // const {navigation} = this.props;
    return (
      <View style={[BaseStyles.baseContainer]}>
        <View style={BaseStyles.userInfo}>
          <Text style={BaseStyles.userInfoTxt}>
            {I18n.t('profile.userInfo')}
          </Text>
        </View>
        <ScrollView
          style={styles.profileViewContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.photoContainer}>
            <View style={styles.photoView}>
              <Image
                source={{
                  isStatic: true,
                  uri: this.props.profileInfo.ProfilePicture,
                  method: 'GET',
                  // headers: {
                  //   clubId: NetTool.clubId,
                  //   'Ocp-Apim-Subscription-Key': NetTool.subscriptionKey,
                  // },
                }}
                style={styles.photo}
              />
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.firstName}>{` ${
                this.props.profileInfo.FirstName
              }`}</Text>
              <Text style={styles.secondName}>
                {' '}
                {` ${this.props.profileInfo.LastName}`}
              </Text>
            </View>
          </View>
          {/* <View style={styles.profileUserInfo}>
            <Text style={styles.profileUserInfoTxt}>
              {I18n.t('login.userInfo')}
            </Text>
          </View> */}
          <LinkBtnComponent
            containerStyle={styles.editProfileContainer}
            btnName={I18n.t('profile.editProfile')}
            onClick={this.onEditProfile}
            btnTextStyle={{color: Colors.primaryAppColor, fontWeight: 'bold'}}
          />
          <View style={styles.labelContainer}>
            <ReadOnlyView
              label={I18n.t('profile.accountInfoLabel')}
              labelStyle={styles.accountInforLabel}
            />
          </View>
          <View style={styles.labelContainer}>
            <ReadOnlyView
              viewStyle={styles.viewStyle}
              label={I18n.t('profile.repId')}
              labelStyle={styles.label}
            />
            <ReadOnlyView
              viewStyle={styles.viewStyle}
              label={this.props.profileInfo.RepId}
              labelStyle={styles.value}
            />
          </View>
          <View style={styles.labelContainer}>
            <ReadOnlyView
              viewStyle={{...styles.viewStyle, backgroundColor: 'white'}}
              label={I18n.t('profile.registrationType')}
              labelStyle={styles.label}
            />
            <ReadOnlyView
              viewStyle={{...styles.viewStyle, backgroundColor: 'white'}}
              label={this.props.profileInfo.RegistrationType}
              labelStyle={styles.value}
            />
          </View>
          <View style={styles.labelContainer}>
            <ReadOnlyView
              viewStyle={styles.viewStyle}
              label={I18n.t('profile.status')}
              labelStyle={styles.label}
            />
            <ReadOnlyView
              viewStyle={styles.viewStyle}
              label={this.props.profileInfo.Status}
              labelStyle={styles.value}
            />
          </View>
          <View style={styles.labelContainer}>
            <ReadOnlyView
              viewStyle={{...styles.viewStyle, backgroundColor: 'white'}}
              label={I18n.t('profile.registeredOn')}
              labelStyle={styles.label}
            />
            <ReadOnlyView
              viewStyle={{...styles.viewStyle, backgroundColor: 'white'}}
              label={this.props.profileInfo.RegisteredOn}
              labelStyle={styles.value}
            />
          </View>
          <View style={styles.labelContainer}>
            <ReadOnlyView
              viewStyle={styles.viewStyle}
              label={I18n.t('profile.productAccess')}
              labelStyle={styles.label}
            />
            <ReadOnlyView
              viewStyle={styles.viewStyle}
              label={this.props.profileInfo.ProductAccess}
              labelStyle={styles.value}
            />
          </View>
          {/* <View style={styles.labelContainer}>
            <ReadOnlyView
              viewStyle={{...styles.viewStyle, backgroundColor: 'white'}}
              label={I18n.t('profile.productAccess')}
              labelStyle={styles.label}
            />
            <ReadOnlyView
              viewStyle={{...styles.viewStyle, backgroundColor: 'white'}}
              label={this.state.productAccess}
              labelStyle={styles.value}
            />
          </View> */}
          <View style={styles.labelContainer}>
            <ReadOnlyView
              viewStyle={{...styles.viewStyle, backgroundColor: 'white'}}
              label={I18n.t('profile.createdBy')}
              labelStyle={styles.label}
            />
            <ReadOnlyView
              viewStyle={{...styles.viewStyle, backgroundColor: 'white'}}
              label={this.props.profileInfo.CreatedBy}
              labelStyle={styles.value}
            />
          </View>
          <View style={BaseStyles.emptyHView} />
          <View style={BaseStyles.emptyHView} />
          <View style={styles.labelContainer}>
            <ReadOnlyView
              label={I18n.t('profile.contactDetails')}
              labelStyle={styles.accountInforLabel}
            />
          </View>
          <View style={styles.labelContainer}>
            <ReadOnlyView
              viewStyle={styles.viewStyle}
              label={I18n.t('profile.address')}
              labelStyle={styles.label}
            />
            <ReadOnlyView
              viewStyle={styles.viewStyle}
              label={this.props.profileInfo.AddressLine}
              labelStyle={styles.value}
            />
          </View>
          <View style={styles.labelContainer}>
            <ReadOnlyView
              viewStyle={{...styles.viewStyle, backgroundColor: 'white'}}
              label={I18n.t('profile.stateCity')}
              labelStyle={styles.label}
            />
            <ReadOnlyView
              viewStyle={{...styles.viewStyle, backgroundColor: 'white'}}
              label={this.props.profileInfo.State}
              labelStyle={styles.value}
            />
          </View>
          <View style={styles.labelContainer}>
            <ReadOnlyView
              viewStyle={styles.viewStyle}
              label={I18n.t('profile.mobile')}
              labelStyle={styles.label}
            />
            <ReadOnlyView
              viewStyle={styles.viewStyle}
              label={this.props.profileInfo.Mobile}
              labelStyle={styles.value}
            />
          </View>
          <View style={styles.labelContainer}>
            <ReadOnlyView
              viewStyle={{...styles.viewStyle, backgroundColor: 'white'}}
              label={I18n.t('profile.paypalEmail')}
              labelStyle={styles.label}
            />
            <ReadOnlyView
              viewStyle={{...styles.viewStyle, backgroundColor: 'white'}}
              label={this.props.profileInfo.PaypalEmail}
              labelStyle={styles.value}
            />
          </View>
          <View style={styles.labelContainer}>
            <ReadOnlyView
              viewStyle={styles.viewStyle}
              label={I18n.t('profile.website')}
              labelStyle={styles.label}
            />
            <ReadOnlyView
              viewStyle={styles.viewStyle}
              label={this.props.profileInfo.Website}
              labelStyle={styles.value}
            />
          </View>
          <View style={BaseStyles.emptyHView} />
          <View style={BaseStyles.emptyHView} />
          <View style={styles.labelContainer}>
            <ReadOnlyView
              label={I18n.t('profile.interest')}
              labelStyle={styles.accountInforLabel}
            />
          </View>
          <View style={editStyles.interestContainer}>
            <CheckBoxComponent btnName={'Healthcare'} onClick={() => {}} />
            <CheckBoxComponent
              btnName={'Indutrial & Business Services'}
              onClick={() => {}}
            />
            <CheckBoxComponent
              btnName={'Medical & Technology'}
              onClick={() => {}}
            />
            <CheckBoxComponent
              btnName={'Cable TV Internet & Communications'}
              onClick={() => {}}
            />
            <CheckBoxComponent
              btnName={'Renewable Energy'}
              onClick={() => {}}
            />
          </View>
        </ScrollView>
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

const mapStateToProps = state => {
  console.log('state from profile info page ... ', state);
  return {
    profileInfo: state.profileInfo.profileInfo,
  };
};

const mapDispatchToProps = dispatch => ({
  getProfileInfo: (onSuccesscallback, onErrorcallback) =>
    dispatch(getProfileInfo(onSuccesscallback, onErrorcallback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);
