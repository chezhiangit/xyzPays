import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import moment from 'moment';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import EmailInputComponent from '../common/UIComponents/EmailInputComponent';
import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import ReadOnlyView from '../common/UIComponents/readOnlyView/ReadOnlyView';
import styles from './styles';
import Colors from '../uttils/Colors';

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
    };
  }

  onEditProfile = () => {
    this.props.navigation.navigate('EditProfilePage');
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
            <View style={styles.nameContainer}>
              <Text style={styles.firstName}>Harry</Text>
              <Text style={styles.secondName}> Harish</Text>
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
              label={this.state.repId}
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
              label={this.state.registrationType}
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
              label={this.state.status}
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
              label={this.state.reisteredOn}
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
              label={this.state.productAccess}
              labelStyle={styles.value}
            />
          </View>
          <View style={styles.labelContainer}>
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
          </View>
          <View style={styles.labelContainer}>
            <ReadOnlyView
              viewStyle={styles.viewStyle}
              label={I18n.t('profile.createdBy')}
              labelStyle={styles.label}
            />
            <ReadOnlyView
              viewStyle={styles.viewStyle}
              label={this.state.createdBy}
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
              label={this.state.address}
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
              label={this.state.stateCity}
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
              label={this.state.mobile}
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
              label={this.state.email}
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
              label={this.state.website}
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
        </ScrollView>
        {/* <Footer /> */}
      </View>
    );
  }
}

export default ProfilePage;
