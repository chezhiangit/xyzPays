import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
// import {SafeAreaView} from 'react-native-safe-area-context';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
// import Header from '../common/UIComponents/Header';
import Footer from '../common/UIComponents/Footer';
import TextInputComponent from '../common/UIComponents/TextInputComponent';
// import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import EmailInputComponent from '../common/UIComponents/EmailInputComponent';
import ReadOnlyView from '../common/UIComponents/readOnlyView/ReadOnlyView';
import CheckBoxComponent from '../common/UIComponents/CheckBox/CheckBox';
import styles from './styles';
import editStyles from './editProfileStyle';
import {getProfileInfo, saveProfileInfo} from '../AppStore/profileActions';
import WarningDialog from '../common/UIComponents/warningDialog';
import {displayPhoneNumber} from '../uttils/UtilityFunctions';

class EditProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxIndex: 0,
      profileInfoServiceDone: false,
      saveProfileInfoServiceDone: false,
      isLoading: false,
      showDlg: false,
      dlgMsg: '',

      RepId: 0,
      AddressLine: '',
      Mobile: 0,
      PaypalEmail: '',
      Website: '',
      State: '',
      CreatedBy: null,
      RegId: 0,
      Status: '',
      FirstName: '',
      LastName: '',
      RegistrationType: '',
      RegisteredOn: '',
      ProductAccess: '',
      City: '',
      ZipCode: '',
      LoginEmail: '',

      dataLoaded: false,
      checBoxArray: [false, false, false, false, false],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.profileInfoServiceDone && props.profileInfo.FirstName === '') {
      return {isLoading: true};
    // } else if (
    //   state.profileInfoServiceDone &&
    //   !state.saveProfileInfoServiceDone &&
    //   props.profileInfo.FirstName !== '' &&
    //   state.isLoading
    // ) {
    //   return {
    //     RepId: props.profileInfo.RepId,
    //     AddressLine: props.profileInfo.AddressLine,
    //     Mobile: props.profileInfo.Mobile,
    //     PaypalEmail: props.profileInfo.PaypalEmail,
    //     Website: props.profileInfo.Website,
    //     State: props.profileInfo.State,
    //     CreatedBy: props.profileInfo.CreatedBy,
    //     RegId: props.profileInfo.RegId,
    //     Status: props.profileInfo.Status,
    //     FirstName: props.profileInfo.FirstName,
    //     LastName: props.profileInfo.LastName,
    //     RegistrationType: props.profileInfo.RegistrationType,
    //     RegisteredOn: props.profileInfo.RegisteredOn,
    //     ProductAccess: props.profileInfo.ProductAccess,
    //     City: props.profileInfo.City,
    //     ZipCode: props.profileInfo.ZipCode,
    //     LoginEmail: props.profileInfo.LoginEmail,
    //     isLoading: false,
    //     dataLoaded: true,
    //   };
    } else if (
      !state.dataLoaded &&
      state.FirstName === '' &&
      props.profileInfo.FirstName !== ''
    ) {
      console.log('assign values from props to state variable', props);
      return {
        RepId: props.profileInfo.RepId,
        AddressLine: props.profileInfo.AddressLine,
        Mobile: props.profileInfo.Mobile,
        PaypalEmail: props.profileInfo.PaypalEmail,
        Website: props.profileInfo.Website,
        State: props.profileInfo.State,
        CreatedBy: props.profileInfo.CreatedBy,
        RegId: props.profileInfo.RegId,
        Status: props.profileInfo.Status,
        FirstName: props.profileInfo.FirstName,
        LastName: props.profileInfo.LastName,
        RegistrationType: props.profileInfo.RegistrationType,
        RegisteredOn: props.profileInfo.RegisteredOn,
        ProductAccess: props.profileInfo.ProductAccess,
        City: props.profileInfo.City,
        ZipCode:
          props.profileInfo.ZipCode === null ||
          props.profileInfo.ZipCode === undefined
            ? ''
            : props.profileInfo.ZipCode,
        LoginEmail: props.profileInfo.LoginEmail,
        dataLoaded: true,
        isLoading: false,
      };
    }
    return {};
  }

  componentDidMount() {
    if (this.props.profileInfo.FirstName === '') {
      this.props.getProfileInfo(
        this.onGetProfileInfoSuccess,
        this.onGetProfileInfoFailed,
      );
      this.dataLoaded = false;
    }
  }

  onGetProfileInfoSuccess = () => {
    this.setState({profileInfoServiceDone: true});
  };

  onGetProfileInfoFailed = errorMsg => {
    this.setState({
      isLoading: false,
      profileInfoServiceDone: true,
      dlgMsg: errorMsg,
      showDlg: true,
    });
  };

  onSaveProfileInfoSuccess = () => {
    this.setState({isLoading: false, saveProfileInfoServiceDone: false}, () =>
      this.props.navigation.goBack(),
    );
  };

  onSaveProfileInfoFailed = errorMsg => {
    this.setState({
      isLoading: false,
      saveProfileInfoServiceDone: false,
      dlgMsg: errorMsg,
      showDlg: true,
    });
  };

  onUpdate = () => {
    const payload = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      PayPalEmail: this.state.PaypalEmail,
      Mobile: this.state.Mobile,
      Address:
        this.state.AddressLine == null || this.state.AddressLine === ''
          ? ''
          : this.state.AddressLine,
      State:
        this.state.State == null || this.state.State === ''
          ? ''
          : this.state.State,
      City:
        this.state.City == null || this.state.City === ''
          ? ''
          : this.state.City,
      ZipCode:
        this.state.ZipCode == null || this.state.ZipCode === ''
          ? ''
          : this.state.ZipCode,
      WebSite:
        this.state.Website == null || this.state.Website === ''
          ? ''
          : this.state.Website,
      RepKey: this.props.profileInfo.RepKey,
    };
    console.log('onUpdate payload ...', payload);
    this.setState({isLoading: true, saveProfileInfoServiceDone: true}, () =>
      this.props.saveProfileInfo(
        payload,
        this.onSaveProfileInfoSuccess,
        this.onSaveProfileInfoFailed,
      ),
    );
  };

  onCheckBoxSelected = index => {
    this.setState({checkBoxIndex: index});
  };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    this.setState({showDlg: false});
  };

  onCheckBoxSelected = (index, value) => {
    this.setState(state => {
      const checBoxArray = [...state.checBoxArray];
      checBoxArray[index] = !state.checBoxArray[index];
      return {
        checBoxArray,
      };
    });
  };

  onFirnameChanged = FirstName => {
    console.log('First name.....', FirstName);
    this.setState({FirstName});
  };

  render() {
    // const {navigation} = this.props;
    console.log('this.state.FirstName ....', this.state.FirstName);
    return (
      <View style={[BaseStyles.baseContainer]}>
        <View style={BaseStyles.userInfo}>
          <Text style={BaseStyles.userInfoTxt}>
            {I18n.t('editProfile.userInfo')}
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
            <TouchableOpacity onPress={() => {}}>
              <View style={editStyles.editPhotoContainer}>
                <Text style={editStyles.choosePhoto}>
                  {I18n.t('editProfile.editPhoto')}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TextInputComponent
            placeholder={I18n.t('editProfile.firstName')}
            autoFocus={false}
            onTextChange={FirstName => this.setState({FirstName})}
            // onTextChange={this.onFirnameChanged}
            inputValue={this.state.FirstName}
          />
          <TextInputComponent
            placeholder={I18n.t('editProfile.lastName')}
            autoFocus={false}
            onTextChange={text => this.setState({LastName: text})}
            inputValue={this.state.LastName}
          />
          <EmailInputComponent
            placeholder={I18n.t('editProfile.email')}
            autoFocus={false}
            // onTextChange={text => this.setState({PaypalEmail: text})}
            onEmailEntered={PaypalEmail => this.setState({PaypalEmail})}
            email={this.state.PaypalEmail}
          />
          <TextInputComponent
            placeholder={I18n.t('editProfile.mobileNumber')}
            autoFocus={false}
            onTextChange={text => this.setState({Mobile: text})}
            inputValue={displayPhoneNumber(this.state.Mobile)}
            phone
          />
          <TextInputComponent
            placeholder={I18n.t('editProfile.address')}
            autoFocus={false}
            onTextChange={text => this.setState({AddressLine: text})}
            inputValue={this.state.AddressLine}
          />
          <TextInputComponent
            placeholder={I18n.t('editProfile.state')}
            autoFocus={false}
            onTextChange={text => this.setState({State: text})}
            inputValue={this.state.State}
          />
          <TextInputComponent
            placeholder={I18n.t('editProfile.city')}
            autoFocus={false}
            onTextChange={text => this.setState({City: text})}
            inputValue={this.state.City}
          />
          <TextInputComponent
            placeholder={I18n.t('editProfile.zipCode')}
            autoFocus={false}
            onTextChange={text => this.setState({ZipCode: text})}
            inputValue={this.state.ZipCode}
          />
          <TextInputComponent
            placeholder={I18n.t('editProfile.website')}
            autoFocus={false}
            onTextChange={text => this.setState({Website: text})}
            inputValue={this.state.Website}
          />
          <View style={BaseStyles.emptyHView} />
          <PrimaryButton
            btnName={I18n.t('editProfile.updateBtnName')}
            onSubmit={this.onUpdate}
          />
          <View style={BaseStyles.emptyHView} />
          <View style={styles.labelContainer}>
            <ReadOnlyView
              label={I18n.t('editProfile.interest')}
              labelStyle={styles.accountInforLabel}
            />
          </View>
          <View style={editStyles.interestContainer}>
            <CheckBoxComponent
              btnName={'Healthcare'}
              onClick={() => this.onCheckBoxSelected(0)}
              isSelected={this.state.checBoxArray[0]}
            />
            <CheckBoxComponent
              btnName={'Indutrial & Business Services'}
              onClick={() => this.onCheckBoxSelected(1)}
              isSelected={this.state.checBoxArray[1]}
            />
            <CheckBoxComponent
              btnName={'Medical & Technology'}
              onClick={() => this.onCheckBoxSelected(2)}
              isSelected={this.state.checBoxArray[2]}
            />
            <CheckBoxComponent
              btnName={'Cable TV Internet & Communications'}
              onClick={() => this.onCheckBoxSelected(3)}
              isSelected={this.state.checBoxArray[3]}
            />
            <CheckBoxComponent
              btnName={'Renewable Energy'}
              onClick={() => this.onCheckBoxSelected(4)}
              isSelected={this.state.checBoxArray[4]}
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
  saveProfileInfo: (payload, onSuccesscallback, onErrorcallback) =>
    dispatch(saveProfileInfo(payload, onSuccesscallback, onErrorcallback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfilePage);

// export default EditProfilePage;
