import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  Animated,
  Image,
  Easing,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BaseStyles from '../common/BaseStyles';
import styles from './styles';
import moment from 'moment';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import {heightAdapter} from '../uttils/adapterUtil';
import Images from '../Assets/index';
import Colors from '../uttils/Colors';
import WarningDialog from '../common/UIComponents/warningDialog';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const commission = [
  {
    referredUser: 'Chezhian',
    referralCommissions: '6.00',
    status: 'Paid',
    paymentDate: moment().format('MM/DD/YYYY'),
    email: 'chezhian.p@gmail.com',
    mobile: '9585058087',
  },
  {
    referredUser: 'JimKim',
    referralCommissions: '6.00',
    status: 'Pending',
    paymentDate: moment().format('MM/DD/YYYY'),
    email: 'chezhian.p@gmail.com',
    mobile: '9585058087',
  },
  {
    referredUser: 'Chezhian',
    referralCommissions: '6.00',
    status: 'Paid',
    paymentDate: moment().format('MM/DD/YYYY'),
    email: 'chezhian.p@gmail.com',
    mobile: '9585058087',
  },
  {
    referredUser: 'JimKim',
    referralCommissions: '6.00',
    status: 'Pending',
    paymentDate: moment().format('MM/DD/YYYY'),
    email: 'chezhian.p@gmail.com',
    mobile: '9585058087',
  },
  {
    referredUser: 'Chezhian',
    referralCommissions: '6.00',
    status: 'Paid',
    paymentDate: moment().format('MM/DD/YYYY'),
    email: 'chezhian.p@gmail.com',
    mobile: '9585058087',
  },
  {
    referredUser: 'JimKim',
    referralCommissions: '6.00',
    status: 'Pending',
    paymentDate: moment().format('MM/DD/YYYY'),
    email: 'chezhian.p@gmail.com',
    mobile: '9585058087',
  },
];
const segmentationData = [
  I18n.t('commission.dropdownAll'),
  I18n.t('commission.dropdown7Days'),
  I18n.t('commission.dropdownLast2Weeks'),
  I18n.t('commission.dropdownLast3Weeks'),
  I18n.t('commission.dropdownLast1Month'),
  I18n.t('commission.dropdownLast3Months'),
];
class ReferralCommissions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: segmentationData[4],
      selectedIndex: 4,
      isSegmentVisible: false,
      commissionData: [...commission],
      segmentBorder: 0,
      showDlg: false,
      dlgMsg: '',
    };
    // this.show=false;
    this.translate = new Animated.Value(0);
  }
  onSegmentItemSelected = (item, index) => {
    this.toggleDropdown(false);
    this.setState({
      selectedValue: segmentationData[index],
      selectedIndex: index,
    });
  };
  renderSegmentItem = ({item, index}) => (
    <TouchableWithoutFeedback
      onPress={() => this.onSegmentItemSelected(item, index)}>
      <View style={styles.segmentItemRow}>
        <Text style={styles.segmentItemText}>{item}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  toggleDropdown = show => {
    if (this.state.isSegmentVisible === show) {
      return;
    }
    this.setState({isSegmentVisible: show});
    if (show) {
      this.setState({segmentBorder: 1});
      this.translate.setValue(0);
      Animated.spring(this.translate, {
        toValue: 1,
        duration: 400,
        overshootClamping: true,
        // useNativeDriver: true,
      }).start();
    } else {
      // this.segmentBorder = 0;
      Animated.timing(this.translate, {
        toValue: 0,
        duration: 400,
        easing: Easing.linear,
        // useNativeDriver: true,
      }).start(() => this.setState({segmentBorder: 0}));
    }
  };

  renderCommissionCard = ({item, index}) => {
    return (
      <View style={styles.commissionItemContainer}>
        <View style={styles.commissionDetailsContainer}>
          <View style={styles.customerDetails}>
            <Text style={styles.customerDetailsLabel}>
              {I18n.t('referralCommissions.rferredUser')}
            </Text>
            <Text style={styles.customerDetailsTxt}>{item.referredUser}</Text>
          </View>
          <View style={styles.customerDetails}>
            <Text
              style={[
                styles.customerDetailsLabel,
                {color: Colors.primaryAppColor},
              ]}>
              {I18n.t('referralCommissions.referralCommission')}
            </Text>
            <Text style={[styles.customerDetailsLabel, {color: 'green'}]}>
              $
            </Text>
            <Text style={styles.customerDetailsTxt}>
              {item.referralCommissions}
            </Text>
          </View>

          <View style={styles.customerDetails}>
            <Text style={styles.customerDetailsLabel}>
              {I18n.t('referralCommissions.status')}
            </Text>
            <Text
              style={[
                styles.customerDetailsTxt,
                item.status === 'Paid' && {color: 'green'},
                item.status === 'Pending' && {color: '#dc3545'},
              ]}>
              {item.status}
            </Text>
          </View>

          <View style={styles.customerDetails}>
            <Text style={styles.customerDetailsLabel}>
              {I18n.t('referralCommissions.paymentDate')}
            </Text>
            <Text style={styles.customerDetailsTxt}>{item.paymentDate}</Text>
          </View>

          <View style={styles.customerDetails}>
            {/* <Image source={''} style={styles.emailphoneIcon} /> */}
            <Text style={styles.emailphoneIcon}>
                    <Icon
                      name="envelope"
                      size={15}
                      color={'gray'}
                    />
                  </Text>
            <Text style={styles.customerDetailsLabel}>
              {I18n.t('referralCommissions.email')}
            </Text>
            <Text style={styles.customerDetailsTxt}>{item.email}</Text>
          </View>
          <View style={styles.customerDetails}>
          <Text style={styles.emailphoneIcon}>
                    <Icon
                      name="phone-square"
                      size={15}
                      color={'gray'}
                    />
                  </Text>
            {/* <Image source={''} style={styles.emailphoneIcon} /> */}
            <Text style={styles.customerDetailsLabel}>
              {I18n.t('referralCommissions.phone')}
            </Text>
            <Text style={styles.customerDetailsTxt}>{item.mobile}</Text>
          </View>
        </View>
      </View>
    );
  };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    this.setState({showDlg: false});
  };

  render() {
    return (
      <View style={BaseStyles.baseContainer}>
        <View style={styles.commissionContainer}>
          <View style={BaseStyles.userInfo}>
            <Text style={BaseStyles.userInfoTxt}>
              {I18n.t('referralCommissions.userInfo')}
            </Text>
          </View>
          <View style={styles.dropdownContainer}>
            <TouchableWithoutFeedback
              style={styles.selectionBox}
              onPress={() => this.toggleDropdown(!this.state.isSegmentVisible)}>
              <View style={styles.selectionBox}>
                {/* <Image style={styles.image} source={''} /> */}
                <View style={{flexDirection: 'row'}}>
                  <Text>
                    <Icon
                      name="calendar"
                      size={20}
                      color={Colors.primaryAppColor}
                    />
                  </Text>
                  <Text style={styles.selectedValue}>
                    {this.state.selectedValue}
                  </Text>
                </View>
                <View>
                  <Text>
                    <Icon name="angle-down" size={20} color={'white'} />
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <Animated.View
              style={[
                styles.segmentedView,
                {
                  height: this.translate.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, heightAdapter(460)],
                  }),
                  borderWidth: this.state.segmentBorder,
                },
              ]}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={segmentationData}
                renderItem={this.renderSegmentItem}
                keyExtractor={(item, index) => index}
              />
            </Animated.View>
          </View>
          {this.state.isSegmentVisible && (
            <TouchableWithoutFeedback
              style={styles.transparentView}
              onPress={() => this.toggleDropdown(false)}>
              <View style={styles.transparentView} />
            </TouchableWithoutFeedback>
          )}
          <FlatList
            style={styles.commissionList}
            data={this.state.commissionData}
            renderItem={this.renderCommissionCard}
            keyExtractor={(item, index) => index}
          />
        </View>
        <Footer />
        <WarningDialog
          shouldShowDeleteWarning={this.state.showDlg}
          // onCancel={this.onCancel}
          onOK={this.onConfirm}
          dlgMsg={this.state.dlgMsg}
        />
        {/* {this.state.isSegmentVisible && (
          <TouchableOpacity
            style={styles.transparentView}
            onPress={() => this.toggleDropdown(false)}>
            <View style={styles.transparentView} />
          </TouchableOpacity>
        )} */}
      </View>
    );
  }
}

export default ReferralCommissions;
