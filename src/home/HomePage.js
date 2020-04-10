import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import BaseStyles from '../common/BaseStyles';
import styles from './styles';
import I18n from '../localization/i18n';
import Header from '../common/UIComponents/Header';
import Footer from '../common/UIComponents/Footer';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import RoundButton from '../common/UIComponents/RoundButton';
import {heightAdapter} from '../uttils/adapterUtil';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskCount: 10,
      approvedAmt: 100,
    };
  }

  onPressTaskButton = () => {};
  getTaskButtonName = taskCount => {
    const taskBtnPrefix = I18n.t('homePage.taskBtnPrefixText');
    const taskBtnPostfix = I18n.t('homePage.taskBtnPostfixText');
    const taskBtnText = `${taskBtnPrefix} ${taskCount} ${taskBtnPostfix}`;
    return taskBtnText;
  };
  onPressApproveButton = () => {};

  render() {
    const {navigation} = this.props;
    const taskBtnName = this.getTaskButtonName(this.state.taskCount);
    return (
      <View style={[BaseStyles.baseContainer]}>
        <Header headerName={I18n.t('homePage.headerTitle')} />
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.logedInUserInfo}>
            <Text style={styles.logedInUserHelloText}>
              {I18n.t('homePage.hello')}
            </Text>
            <Text style={[styles.logedInUserHelloText, styles.primaryColor]}>
              {' Harry'}
            </Text>
            <Text style={styles.logedInUserHelloText}>{' Harish'}</Text>
          </View>
          <View style={[BaseStyles.emptyHView, {height: heightAdapter(20)}]} />
          <PrimaryButton
            btnStyle={styles.taskBtn}
            onSubmit={this.onPressTaskButton}
            btnName={taskBtnName}
          />
          <RoundButton
            onSubmit={this.onPressApproveButton}
            btnName={this.state.approvedAmt}
            btnStyle={styles.approveBtnStyle}
            textStyle={styles.amountText}
          />
        </ScrollView>
        <Footer />
      </View>
      // <View style={BaseStyles.baseContainer}>
      //   <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      //     <Text>{I18n.t('homeScreen')}</Text>
      //   </TouchableOpacity>
      // </View>
    );
  }
}

export default HomePage;
