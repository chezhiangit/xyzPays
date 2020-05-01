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
import BaseStyles from '../common/BaseStyles';
import styles from './styles';
import moment from 'moment';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import {heightAdapter, fontscale} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import Images from '../Assets/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import WarningDialog from '../common/UIComponents/warningDialog';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const commission = [
  {
    customerName: 'Jimkim',
    emailId: 'chezhian.p@gmail.com',
    mobile: '9585058087',
    referredOn: moment().format('MM/DD/YY'),
    registeredOn: moment().format('MM/DD/YY'),
    registrationStatus: 'Registered',
    Expanded: false,
  },
  {
    customerName: 'Chezhian',
    emailId: 'chezhian.p@gmail.com',
    mobile: '9585058087',
    referredOn: moment().format('MM/DD/YY'),
    registeredOn: moment().format('MM/DD/YY'),
    registrationStatus: 'Not Registered',
    Expanded: false,
  },
  {
    customerName: 'Jimkim',
    emailId: 'chezhian.p@gmail.com',
    mobile: '9585058087',
    referredOn: moment().format('MM/DD/YY'),
    registeredOn: moment().format('MM/DD/YY'),
    registrationStatus: 'Registered',
    Expanded: false,
  },
  {
    customerName: 'Chezhian',
    emailId: 'chezhian.p@gmail.com',
    mobile: '9585058087',
    referredOn: moment().format('MM/DD/YY'),
    registeredOn: moment().format('MM/DD/YY'),
    registrationStatus: 'Not Registered',
    Expanded: false,
  },
  {
    customerName: 'Jimkim',
    emailId: 'chezhian.p@gmail.com',
    mobile: '9585058087',
    referredOn: moment().format('MM/DD/YY'),
    registeredOn: moment().format('MM/DD/YY'),
    registrationStatus: 'Registered',
    Expanded: false,
  },
  {
    customerName: 'Chezhian',
    emailId: 'chezhian.p@gmail.com',
    mobile: '9585058087',
    referredOn: moment().format('MM/DD/YY'),
    registeredOn: moment().format('MM/DD/YY'),
    registrationStatus: 'Not Registered',
    Expanded: false,
  },
];
const segmentationData = [
  I18n.t('myReferrals.dropdownAll'),
  I18n.t('myReferrals.registered'),
  I18n.t('myReferrals.notRegistered'),
  // I18n.t('commission.dropdownLast3Weeks'),
  // I18n.t('commission.dropdownLast1Month'),
  // I18n.t('commission.dropdownLast3Months'),
];
class MyReferrals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: segmentationData[0],
      selectedIndex: 0,
      isSegmentVisible: false,
      isExpandCollapseVisible: false,
      commissionData: [...commission],
      currentIndex: -1,
      showDlg: false,
      dlgMsg: '',
    };
    // this.show=false;
    this.dropDownTranslate = new Animated.Value(0);
    this.expandCollapseTranslate = new Animated.Value(0);
    this.expandedViewHeight = heightAdapter(350);
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
      this.dropDownTranslate.setValue(0);
      Animated.spring(this.dropDownTranslate, {
        toValue: 1,
        duration: 400,
        overshootClamping: true,
        // useNativeDriver: true,
      }).start();
    } else {
      // this.segmentBorder = 0;
      Animated.timing(this.dropDownTranslate, {
        toValue: 0,
        duration: 400,
        easing: Easing.linear,
        // useNativeDriver: true,
      }).start(() => this.setState({segmentBorder: 0}));
    }
  };

  expand = () => {
    this.expandCollapseTranslate.setValue(0);
    Animated.spring(this.expandCollapseTranslate, {
      toValue: 1,
      duration: 400,
      // overshootClamping: true,
      // useNativeDriver: true,
    }).start();
  };

  collapse = (callback = () => {}) => {
    Animated.timing(this.expandCollapseTranslate, {
      toValue: 0,
      duration: 100,
      easing: Easing.linear,
      // useNativeDriver: true,
    }).start(() => callback());
  };

  toggleExpandCollapse = (show, index) => {
    this.expandedViewHeight =
      this.state.commissionData[index].registrationStatus === 'Registered'
        ? heightAdapter(350)
        : heightAdapter(300);

    if (show && this.state.currentIndex === -1) {
      this.setState(
        state => {
          const data = [...state.commissionData];
          data[index].Expanded = show;
          return {
            currentIndex: index,
            commissionData: data,
          };
        },
        () => this.expand(),
      );
      // this.expand();
    } else if (!show && this.state.currentIndex === index) {
      this.collapse(() =>
        this.setState(state => {
          const data = [...state.commissionData];
          data[index].Expanded = show;
          return {
            currentIndex: -1,
            commissionData: data,
          };
        }),
      );
    } else if (
      show &&
      this.state.currentIndex !== -1 &&
      this.state.currentIndex !== index
    ) {
      this.collapse(() =>
        this.setState(
          state => {
            const data = [...state.commissionData];
            data[index].Expanded = show;
            data[state.currentIndex].Expanded = false;
            return {
              currentIndex: index,
              commissionData: data,
            };
          },
          () => this.expand(),
        ),
      );
    }
  };

  renderReferralsCard = ({item, index}) => {
    if (
      this.state.selectedValue === 'All' ||
      item.registrationStatus === this.state.selectedValue
    ) {
      return (
        <View style={styles.referralsItemContainer}>
          <TouchableWithoutFeedback
            onPress={() =>
              this.toggleExpandCollapse(
                !this.state.commissionData[index].Expanded,
                index,
              )
            }>
            <View style={styles.expandCollapseHeader}>
              <View style={styles.expandCollapseLeftChild}>
                <Text style={styles.childTxt}>{item.customerName}</Text>
              </View>
              <View style={styles.expandCollapseRightChild}>
                <View
                  style={[
                    styles.regStatus,
                    item.registrationStatus !== 'Registered' && {
                      backgroundColor: Colors.primaryAppColor,
                    },
                  ]}>
                  <Text style={styles.regStatusText}>
                    {item.registrationStatus}
                  </Text>
                </View>
                {/* <Image source={''} style={styles.dropDownIcon} /> */}
                <Text>
                  <Icon
                    name="caret-down"
                    size={20}
                    color={Colors.primaryAppColor}
                  />
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <Animated.View
            style={[
              styles.referralsDetailsContainer,
              this.state.currentIndex === index && {
                height: this.expandCollapseTranslate.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, this.expandedViewHeight],
                }),
              },
            ]}>
            <View
              style={[BaseStyles.emptyHView, {height: heightAdapter(30)}]}
            />
            {this.state.currentIndex === index && (
              <View style={{width: '100%'}}>
                <View style={styles.customerDetails}>
                  {/* <Image source={''} style={styles.emailphoneIcon} /> */}
                  <Text style={styles.emailphoneIcon}>
                    <Icon
                      name="envelope"
                      size={15}
                      color={'gray'}
                    />
                  </Text>
                  <Text style={styles.customerDetailsTxt}>{item.emailId}</Text>
                </View>
                <View
                  style={[BaseStyles.emptyHView, {height: heightAdapter(30)}]}
                />
                <View style={styles.customerDetails}>
                <Text style={styles.emailphoneIcon}>
                    <Icon
                      name="phone-square"
                      size={15}
                      color={'gray'}
                    />
                  </Text>
                  {/* <Image source={''} style={styles.emailphoneIcon} /> */}
                  <Text style={styles.customerDetailsTxt}>{item.mobile}</Text>
                </View>
                <View
                  style={[BaseStyles.emptyHView, {height: heightAdapter(30)}]}
                />
                <View style={styles.customerDetails}>
                  <Text style={styles.customerDetailsLabel}>
                    {I18n.t('myReferrals.referredOn')}
                  </Text>
                  <Text style={styles.customerDetailsTxt}>
                    {item.referredOn}
                  </Text>
                </View>
                <View
                  style={[BaseStyles.emptyHView, {height: heightAdapter(30)}]}
                />
                {item.registrationStatus === 'Registered' && (
                  <View style={styles.customerDetails}>
                    <Text style={styles.customerDetailsLabel}>
                      {I18n.t('myReferrals.registeredOn')}
                    </Text>
                    <Text style={styles.customerDetailsTxt}>
                      {item.registeredOn}
                    </Text>
                  </View>
                )}
                <View
                  style={[BaseStyles.emptyHView, {height: heightAdapter(30)}]}
                />
              </View>
            )}
          </Animated.View>
        </View>
      );
    } else {
      return null;
    }
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
        <View style={styles.referralsContainer}>
          <View style={BaseStyles.userInfo}>
            <Text style={BaseStyles.userInfoTxt}>
              {I18n.t('myReferrals.userInfo')}
            </Text>
          </View>
          <View style={styles.dropdownContainer}>
            <TouchableWithoutFeedback
              style={styles.selectionBox}
              onPress={() => this.toggleDropdown(!this.state.isSegmentVisible)}>
              <View style={styles.selectionBox}>
                {/* <Image style={styles.image} source={''} /> */}
                <Text style={styles.selectedValue}>
                  {this.state.selectedValue}
                </Text>
                <Text>
                  <Icon
                    name="angle-down"
                    size={fontscale(20)}
                    color={'white'}
                  />
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <Animated.View
              style={[
                styles.segmentedView,
                {
                  height: this.dropDownTranslate.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, heightAdapter(230)],
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
            style={styles.referralList}
            data={this.state.commissionData}
            renderItem={this.renderReferralsCard}
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

export default MyReferrals;
