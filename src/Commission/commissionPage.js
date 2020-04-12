import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  Animated,
  Image,
  Easing,
  TouchableOpacity,
} from 'react-native';
import BaseStyles from '../common/BaseStyles';
import styles from './styles';
import moment from 'moment';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import {heightAdapter} from '../uttils/adapterUtil';
import Images from '../Assets/index';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const commission = [
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Paid',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Paid',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Paid',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Paid',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Approved',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Pending',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Appoinment confirmation',
    Amount: '6.00',
    Status: 'Denied',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Approved',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Vonage',
    Amount: '6.00',
    Status: 'Pending',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Paid',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Paid',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Appoinment confirmation',
    Amount: '6.00',
    Status: 'Paid',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Paid',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Appoinment confirmation',
    Amount: '6.00',
    Status: 'Approved',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Vonage',
    Amount: '6.00',
    Status: 'Pending',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Vonage',
    Amount: '6.00',
    Status: 'Denied',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Vonage',
    Amount: '6.00',
    Status: 'Approved',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Appoinment confirmation',
    Amount: '6.00',
    Status: 'Pending',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
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
class CommissionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: segmentationData[4],
      selectedIndex: 4,
      isSegmentVisible: false,
      commissionData: [...commission],
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
    <TouchableOpacity onPress={() => this.onSegmentItemSelected(item, index)}>
      <View style={styles.segmentItemRow}>
        <Text style={styles.segmentItemText}>{item}</Text>
      </View>
    </TouchableOpacity>
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
      }).start(() => this.setState({segmentBorder: 1}));
    }
  };

  renderCommissionCard = ({item, index}) => {
    return (
      <View style={styles.commissionItemContainer}>
        <View style={styles.commissionDetailsContainer}>
          <View style={styles.commissionType}>
            <Text style={styles.commissionTypeTxt}>{item.commissionName}</Text>
          </View>
          <View style={styles.amountStatusContainer}>
            <Text style={styles.amountLabel}>
              {I18n.t('commission.amount')}{' '}
            </Text>
            <Text style={styles.dollar}>
              {I18n.t('commission.currencySymbol')}
            </Text>
            <Text style={styles.amount}>{item.Amount}, </Text>
            <Text style={styles.statusLabel}>
              {I18n.t('commission.status')}{' '}
            </Text>
            <Text style={styles.status}>{item.Status}</Text>
          </View>
          <View style={[BaseStyles.emptyHView, {height: heightAdapter(20)}]} />
          <View style={styles.paymentDateContainer}>
            <Text style={styles.paymentDateLabel}>
              {I18n.t('commission.paymentDate')}
            </Text>
            <Text style={styles.paymentDate}>
              {moment().format('MM/DD/YYYY')}
            </Text>
          </View>
          <View style={styles.accountNoContainer}>
            <Text style={styles.accountNoLabel}>
              {I18n.t('commission.accountNo')}
            </Text>
            <Text style={styles.accountNo}>xxxxxxxx567</Text>
          </View>
          <View style={styles.reasonContainer}>
            <Text style={styles.reasonLabel}>
              {I18n.t('commission.reason')}
            </Text>
            <Text style={styles.reasonLabel}>{'Test reason'}</Text>
          </View>
        </View>
        <View style={styles.commissionImageContainer}>
          <Image style={styles.commissionImage} source={Images.productBox} />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={BaseStyles.baseContainer}>
        <View style={styles.commissionContainer}>
          <View style={styles.dropdownContainer}>
            <TouchableOpacity
              style={styles.selectionBox}
              onPress={() => this.toggleDropdown(!this.state.isSegmentVisible)}>
              <View style={styles.selectionBox}>
                <Image style={styles.image} source={''} />
                <Text>{this.state.selectedValue}</Text>
              </View>
            </TouchableOpacity>
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
            <TouchableOpacity
              style={styles.transparentView}
              onPress={() => this.toggleDropdown(false)}>
              <View style={styles.transparentView} />
            </TouchableOpacity>
          )}
          <FlatList
            style={styles.commissionList}
            data={this.state.commissionData}
            renderItem={this.renderCommissionCard}
            keyExtractor={(item, index) => index}
          />
        </View>
        <Footer />
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

export default CommissionPage;
