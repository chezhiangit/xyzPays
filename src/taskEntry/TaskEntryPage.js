import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import TextInputComponent from '../common/UIComponents/TextInputComponent';
import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import EmailInputComponent from '../common/UIComponents/EmailInputComponent';
import Images from '../Assets/index';
import styles from './styles';
import {widthAdapter} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import WarningDialog from '../common/UIComponents/warningDialog';

class TaskEntryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: 'Cable Protal Products',
      selectedIndex: 0,
      showDlg: false,
      dlgMsg: '',
    };
  }
  onSave = () => {
    this.props.navigation.goBack();
  };

  onNoPressed = () => {
    this.setState({selectedIndex: 2});
  };

  onYesPressed = () => {
    this.setState({selectedIndex: 1});
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
        <ScrollView style={styles.scrollContainer}>
          <View style={BaseStyles.emptyHView} />
          <View style={styles.taskItemContainer}>
            <View style={styles.taskDetailsContainer}>
              <View style={styles.taskEntryProduct}>
                <View style={styles.dotWithTick} />
                <Text style={styles.taskEntryProductTxt}>
                  {this.state.productName}
                </Text>
              </View>
              <View style={styles.activeContainer}>
                <Text style={styles.statusTxt}>
                  {I18n.t('taskEntryPage.active')}
                </Text>
              </View>
              <View style={styles.skuContainer}>
                <Text style={styles.skuLabel}>
                  {I18n.t('taskEntryPage.sku')}
                  {': '}
                </Text>
                <Text style={styles.skuTxt}>{this.state.productName}</Text>
              </View>
            </View>
            <View style={styles.taskEntryImageContainer}>
              <Image style={styles.taskEntryImage} source={Images.xyfavIcon} />
            </View>
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.questionTxt}>
              {'How often do you use our products?*'}
            </Text>
          </View>
          <TextInputComponent placeholder="" autoFocus={false} />
          <View style={styles.questionContainer}>
            <Text style={styles.questionTxt}>
              {'What are you trying to solve by using our product?'}
            </Text>
          </View>
          <TextInputComponent placeholder="" autoFocus={false} />
          <View style={styles.questionContainer}>
            <Text style={styles.questionTxt}>
              {'Are you agree with our terms and conditions?'}
            </Text>
          </View>
          <View style={styles.selectionContainer}>
            <Text>Yes</Text>
            <TouchableOpacity onPress={this.onYesPressed}>
              <View
                style={[
                  styles.dot,
                  this.state.selectedIndex === 1 && {
                    backgroundColor: Colors.primaryAppColor,
                  },
                ]}
              />
            </TouchableOpacity>
            <View style={{marginLeft: widthAdapter(10)}} />
            <Text>No</Text>
            <TouchableOpacity onPress={this.onNoPressed}>
              <View
                style={[
                  styles.dot,
                  this.state.selectedIndex === 2 && {
                    backgroundColor: Colors.primaryAppColor,
                  },
                ]}
              />
            </TouchableOpacity>
          </View>
          <View style={BaseStyles.emptyHView} />
          <PrimaryButton
            btnName={I18n.t('taskEntryPage.saveBtnName')}
            onSubmit={this.onSave}
          />
          {/* <View style={BaseStyles.emptyHView} />
            <LinkBtnComponent btnName={I18n.t('login.signUpNow')} />
            <LinkBtnComponent btnName={I18n.t('login.forgotPwd')} /> */}
          {/* </View> */}
        </ScrollView>
        <Footer />
        <WarningDialog
          shouldShowDeleteWarning={this.state.showDlg}
          // onCancel={this.onCancel}
          onOK={this.onConfirm}
          dlgMsg={this.state.dlgMsg}
        />
        {/* <TouchableOpacity onPress={() => navigation.replace('HomePage')}>
          <Text>{I18n.t('loginScreen')}</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

export default TaskEntryPage;
