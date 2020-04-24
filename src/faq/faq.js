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
import Images from '../Assets/index';
import {TextInput} from 'react-native-gesture-handler';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const faqData = [
  {
    title: 'General information',
    data: [
      {
        itemTitle: 'What’s XYZpays? ',
        itemDescription:
          'XYZpays is an application that allows Sales Reps to receive extra incentives on demand when they place orders for Spectrum in the XYZies portal. ',
        Expanded: false,
        sectionIndex: 0,
      },
      {
        itemTitle: 'Why should I have XYZpays? ',
        itemDescription:
          'XYZpays is a free up that allows you to receive extra commissions, is user friendly and connects to your PayPal account to transfer the money instantly.',
        Expanded: false,
        sectionIndex: 0,
      },
    ],
  },

  {
    title: 'Enrollment ',
    data: [
      {
        itemTitle: 'Do I have to pay to use the app? ',
        itemDescription: 'No, the app is completely free. ',
        Expanded: false,
        sectionIndex: 1,
      },
      {
        itemTitle: 'What’s the commission I’ll be receiving through XYZpays? ',
        itemDescription:
          'Please contact your accounts manager to know the commission.',
        Expanded: false,
        sectionIndex: 1,
      },
      {
        itemTitle: 'How can I edit my information on XYZpays? ',
        itemDescription:
          'Go to the menu, click on My profile and then you can edit your information. Keep in mind that the information you edit can affect the information associated on your XYZies portal.',
        Expanded: false,
        sectionIndex: 1,
      },

      {
        itemTitle: 'How Do I link my PayPal account with XYZpays? ',
        itemDescription:
          'Here are the steps in how to link your PayPal account to the XYZpays app: \n\n1.	Go to the Menu of the app,\n2.	Click on the menu \n3.	Click on My Profile \n4.	Click on edit profile and add the email address associated with your Paypal account \n5.	Update your profile ',
        Expanded: false,
        sectionIndex: 1,
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
          '1.	Click on the menu\n2.	Click on transfer money \n3.	Click on transfer money to Paypal',
        Expanded: false,
        sectionIndex: 2,
      },
      {
        itemTitle:
          'Is there any cost to transfer the money from XYZpays to my Paypal account? ',
        itemDescription:
          'No, there’s not cost or transfer fee when you transfer the money from XYZpays to Paypal.',
        Expanded: false,
        sectionIndex: 2,
      },

      {
        itemTitle:
          'I transferred the money to PayPal, but I don’t see the money on my Paypal account, what should I do?',
        itemDescription:
          'Call your Account manager, He/she will help you fix the issue. ',
        Expanded: false,
        sectionIndex: 2,
      },
      {
        itemTitle:
          'Do I have a minimum amount so I can transfer the money to my Paypal account? ',
        itemDescription:
          'No, there’s no minimum amount to transfer the money. ',
        Expanded: false,
        sectionIndex: 2,
      },
    ],
  },
];

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedValue: segmentationData[0],
      // selectedIndex: 0,
      // isSegmentVisible: false,
      isExpandCollapseVisible: false,
      faqData: [...faqData],
      currentIndex: -1,
      currentSectionIndex: -1,
    };
    // this.show=false;
    this.dropDownTranslate = new Animated.Value(0);
    this.expandCollapseTranslate = new Animated.Value(0);
    this.expandedViewHeight = heightAdapter(0);
    // this.sectionItemIndex = -1;
  }
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

  toggleExpandCollapse = (show, index, sectionIndex) => {
    if (show && this.state.currentIndex === -1) {
      this.setState(
        state => {
          const faqTempData = [...state.faqData];
          console.log('modify faqTempData section index....', sectionIndex);
          console.log('modify faqTempData....', faqTempData[sectionIndex]);
          faqTempData[sectionIndex].data[index].Expanded = show;
          return {
            currentIndex: index,
            currentSectionIndex: sectionIndex,
            faqData: faqTempData,
          };
        },
        () => this.expand(),
      );
      // this.expand();
    } else if (!show && this.state.currentIndex === index) {
      this.collapse(() =>
        this.setState(state => {
          const faqTempData = [...state.faqData];
          faqTempData[sectionIndex].data[index].Expanded = show;
          return {
            currentIndex: -1,
            currentSectionIndex: -1,
            faqData: faqTempData,
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
            const faqTempData = [...state.faqData];
            faqTempData[sectionIndex].data[index].Expanded = show;
            faqTempData[state.currentSectionIndex].data[
              state.currentIndex
            ].Expanded = false;
            return {
              currentIndex: index,
              currentSectionIndex: sectionIndex,
              faqData: faqTempData,
            };
          },
          () => this.expand(),
        ),
      );
    }
  };

  renderFqaSectionHeader = data => {
    const {
      section: {title},
    } = data;
    return (
      <View>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
    );
  };

  renderFaqCard = ({item, index}) => {
    return (
      <View style={styles.faqItemContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            this.toggleExpandCollapse(
              !this.state.faqData[item.sectionIndex].data[index].Expanded,
              index,
              item.sectionIndex,
            );
            this.expandedViewHeight = item.height + heightAdapter(40);
          }}>
          <View style={styles.expandCollapseHeader}>
            <View style={styles.expandCollapseLeftChild}>
              <Text style={styles.childTxt}>{item.itemTitle}</Text>
            </View>
            <View style={styles.expandCollapseRightChild}>
              <Image source={''} style={styles.dropDownIcon} />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <Animated.View
          style={[
            styles.faqDetailsContainer,
            this.state.currentIndex === index &&
              this.state.currentSectionIndex === item.sectionIndex && {
                height: this.expandCollapseTranslate.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, this.expandedViewHeight],
                }),
              },
          ]}>
          <View style={[BaseStyles.emptyHView, {height: heightAdapter(30)}]} />
          <View style={styles.faqDetails}>
            <TextInput
              onContentSizeChange={e =>
                (item.height = e.nativeEvent.contentSize.height)
              }
              style={styles.faqDetailsTxt}
              multiline={true}
              editable={false}>
              {item.itemDescription}
            </TextInput>
          </View>
          <View style={[BaseStyles.emptyHView, {height: heightAdapter(30)}]} />
        </Animated.View>
      </View>
    );
  };

  render() {
    this.sectionItemIndex = -1;
    return (
      <View style={BaseStyles.baseContainer}>
        <View style={styles.faqContainer}>
          <View style={BaseStyles.userInfo}>
            <Text style={BaseStyles.userInfoTxt}>{I18n.t('faq.userInfo')}</Text>
          </View>
          <SectionList
            showsVerticalScrollIndicator={false}
            style={styles.faqList}
            sections={this.state.faqData}
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
