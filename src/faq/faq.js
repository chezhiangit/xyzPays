import * as React from 'react';
import {
  View,
  Text,
  SectionList,
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
import {heightAdapter} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import Images from '../assets/index';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const faqData = [
  {
    title: 'General information',
    data: [
      {
        itemTitle: 'What’s XYZpays? ',
        itemDescription:
          'XYZpays is an application that allows Sales Reps to receive extra incentives on demand when they place orders for Spectrum in the XYZies portal. ',
      },
      {
        itemTitle: 'Why should I have XYZpays? ',
        itemDescription:
          'XYZpays is a free up that allows you to receive extra commissions, is user friendly and connects to your PayPal account to transfer the money instantly.',
      },
    ],
  },

  {
    title: 'Enrollment ',
    data: [
      {
        itemTitle: 'Do I have to pay to use the app? ',
        itemDescription: 'No, the app is completely free. ',
      },
      {
        itemTitle: 'What’s the commission I’ll be receiving through XYZpays? ',
        itemDescription:
          'Please contact your accounts manager to know the commission.',
      },
      {
        itemTitle: 'How can I edit my information on XYZpays? ',
        itemDescription:
          'Go to the menu, click on My profile and then you can edit your information. Keep in mind that the information you edit can affect the information associated on your XYZies portal.',
      },

      {
        itemTitle: 'How Do I link my PayPal account with XYZpays? ',
        itemDescription:
          'Here are the steps in how to link your PayPal account to the XYZpays app: \n\n1.	Go to the Menu of the app,\n2.	Click on the menu \n3.	Click on My Profile \n4.	Click on edit profile and add the email address associated with your Paypal account \n5.	Update your profile ',
      },
    ],
  },
  {
    title: 'Money Transfer ',
    data: [
      {
        itemTitle:
          'How can I transfer the money from XYZpays to my Paypal account? ',
        itemDescription:
          '\n\n1.	Click on the menu\n2.	Click on transfer money \n3.	Click on transfer money to Paypal\n\n',
      },
      {
        itemTitle:
          'Is there any cost to transfer the money from XYZpays to my Paypal account? ',
        itemDescription:
          'No, there’s not cost or transfer fee when you transfer the money from XYZpays to Paypal.',
      },

      {
        itemTitle:
          'I transferred the money to PayPal, but I don’t see the money on my Paypal account, what should I do?',
        itemDescription:
          'Call your Account manager, He/she will help you fix the issue. ',
      },
      {
        itemTitle:
          'Do I have a minimum amount so I can transfer the money to my Paypal account? ',
        itemDescription:
          'No, there’s no minimum amount to transfer the money. ',
      },
    ],
  },
];

// const faqData = [
//   {
//     sectionTitle:
//   },
//   {
//     customerName: 'Chezhian',
//     emailId: 'chezhian.p@gmail.com',
//     mobile: '9585058087',
//     referredOn: moment().format('MM/DD/YY'),
//     registeredOn: moment().format('MM/DD/YY'),
//     registrationStatus: 'Not Registered',
//     Expanded: false,
//   },
//   {
//     customerName: 'Jimkim',
//     emailId: 'chezhian.p@gmail.com',
//     mobile: '9585058087',
//     referredOn: moment().format('MM/DD/YY'),
//     registeredOn: moment().format('MM/DD/YY'),
//     registrationStatus: 'Registered',
//     Expanded: false,
//   },
//   {
//     customerName: 'Chezhian',
//     emailId: 'chezhian.p@gmail.com',
//     mobile: '9585058087',
//     referredOn: moment().format('MM/DD/YY'),
//     registeredOn: moment().format('MM/DD/YY'),
//     registrationStatus: 'Not Registered',
//     Expanded: false,
//   },
//   {
//     customerName: 'Jimkim',
//     emailId: 'chezhian.p@gmail.com',
//     mobile: '9585058087',
//     referredOn: moment().format('MM/DD/YY'),
//     registeredOn: moment().format('MM/DD/YY'),
//     registrationStatus: 'Registered',
//     Expanded: false,
//   },
//   {
//     customerName: 'Chezhian',
//     emailId: 'chezhian.p@gmail.com',
//     mobile: '9585058087',
//     referredOn: moment().format('MM/DD/YY'),
//     registeredOn: moment().format('MM/DD/YY'),
//     registrationStatus: 'Not Registered',
//     Expanded: false,
//   },
// ];
// const segmentationData = [
//   I18n.t('myReferrals.dropdownAll'),
//   I18n.t('myReferrals.registered'),
//   I18n.t('myReferrals.notRegistered'),
//   // I18n.t('commission.dropdownLast3Weeks'),
//   // I18n.t('commission.dropdownLast1Month'),
//   // I18n.t('commission.dropdownLast3Months'),
// ];
class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedValue: segmentationData[0],
      // selectedIndex: 0,
      // isSegmentVisible: false,
      isExpandCollapseVisible: false,
      // faqData: [...faqData],
      currentIndex: -1,
    };
    // this.show=false;
    this.dropDownTranslate = new Animated.Value(0);
    this.expandCollapseTranslate = new Animated.Value(0);
    this.expandedViewHeight = heightAdapter(350);
  }
  // onSegmentItemSelected = (item, index) => {
  //   this.toggleDropdown(false);
  //   this.setState({
  //     selectedValue: segmentationData[index],
  //     selectedIndex: index,
  //   });
  // };
  // renderSegmentItem = ({item, index}) => (
  //   <TouchableOpacity onPress={() => this.onSegmentItemSelected(item, index)}>
  //     <View style={styles.segmentItemRow}>
  //       <Text style={styles.segmentItemText}>{item}</Text>
  //     </View>
  //   </TouchableOpacity>
  // );

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
      overshootClamping: true,
      // useNativeDriver: true,
    }).start();
  };

  collapse = (callback = () => {}) => {
    Animated.timing(this.expandCollapseTranslate, {
      toValue: 0,
      duration: 400,
      easing: Easing.linear,
      // useNativeDriver: true,
    }).start(() => callback());
  };

  toggleExpandCollapse = (show, index) => {
    console.log('toggleExpandCollapse index selected ....', index);
    console.log('toggleExpandCollapse index show ....', show);
    console.log(
      'toggleExpandCollapse currentIndex ....',
      this.state.currentIndex,
    );

    // if (this.state.isExpandCollapseVisible === show && ) {
    //   return;
    // }

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

  renderFqaSectionHeader = ({section: {title}}) => {
    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  };

  renderFaqCard = ({item, index}) => {
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
              <Image source={''} style={styles.dropDownIcon} />
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
          <View style={[BaseStyles.emptyHView, {height: heightAdapter(30)}]} />
          <View style={styles.customerDetails}>
            <Image source={''} style={styles.emailphoneIcon} />
            <Text style={styles.customerDetailsTxt}>{item.emailId}</Text>
          </View>
          <View style={[BaseStyles.emptyHView, {height: heightAdapter(30)}]} />
          <View style={styles.customerDetails}>
            <Image source={''} style={styles.emailphoneIcon} />
            <Text style={styles.customerDetailsTxt}>{item.mobile}</Text>
          </View>
          <View style={[BaseStyles.emptyHView, {height: heightAdapter(30)}]} />
          <View style={styles.customerDetails}>
            <Text style={styles.customerDetailsLabel}>
              {I18n.t('myReferrals.referredOn')}
            </Text>
            <Text style={styles.customerDetailsTxt}>{item.referredOn}</Text>
          </View>
          <View style={[BaseStyles.emptyHView, {height: heightAdapter(30)}]} />
          {item.registrationStatus === 'Registered' && (
            <View style={styles.customerDetails}>
              <Text style={styles.customerDetailsLabel}>
                {I18n.t('myReferrals.registeredOn')}
              </Text>
              <Text style={styles.customerDetailsTxt}>{item.registeredOn}</Text>
            </View>
          )}
          <View style={[BaseStyles.emptyHView, {height: heightAdapter(30)}]} />
        </Animated.View>
      </View>
    );
  };

  render() {
    return (
      <View style={BaseStyles.baseContainer}>
        <View style={styles.referralsContainer}>
          <SectionList
            style={styles.faqList}
            sections={faqData}
            renderItem={this.renderFaqCard}
            keyExtractor={(item, index) => index}
            renderSectionHeader={this.renderFqaSectionHeader}
          />
        </View>
        <Footer />
      </View>
    );
  }
}

export default FAQ;
