import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
// import Header from '../common/UIComponents/Header';
import Footer from '../common/UIComponents/Footer';
import TextInputComponent from '../common/UIComponents/TextInputComponent';
import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import EmailInputComponent from '../common/UIComponents/EmailInputComponent';
import ReadOnlyView from '../common/UIComponents/readOnlyView/ReadOnlyView';
import CheckBoxComponent from '../common/UIComponents/CheckBox/CheckBox';
import styles from './styles';
import editStyles from './editProfileStyle';

class EditProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxIndex: 0,
    };
  }

  onUpdate = () => {
    this.props.navigation.goBack();
  };

  onCheckBoxSelected = index => {
    this.setState({checkBoxIndex: index});
  };

  render() {
    // const {navigation} = this.props;
    return (
      <View style={[BaseStyles.baseContainer]}>
        <ScrollView
          style={styles.profileViewContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.photoContainer}>
            <View style={styles.photoView}>
              <Image source={''} style={styles.photo} />
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
          />
          <TextInputComponent
            placeholder={I18n.t('editProfile.lastName')}
            autoFocus={false}
          />
          <EmailInputComponent
            placeholder={I18n.t('editProfile.email')}
            autoFocus={false}
          />
          <TextInputComponent
            placeholder={I18n.t('editProfile.mobileNumber')}
            autoFocus={false}
          />
          <TextInputComponent
            placeholder={I18n.t('editProfile.address')}
            autoFocus={false}
          />
          <TextInputComponent
            placeholder={I18n.t('editProfile.state')}
            autoFocus={false}
          />
          <TextInputComponent
            placeholder={I18n.t('editProfile.city')}
            autoFocus={false}
          />
          <TextInputComponent
            placeholder={I18n.t('editProfile.zipCode')}
            autoFocus={false}
          />
          <TextInputComponent
            placeholder={I18n.t('editProfile.website')}
            autoFocus={false}
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
      </View>
    );
  }
}

export default EditProfilePage;
