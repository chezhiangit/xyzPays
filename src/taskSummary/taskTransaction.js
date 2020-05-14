import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {Dropdown} from 'react-native-material-dropdown';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import TextInputComponent from '../common/UIComponents/TextInputComponent';
import CheckBoxComponent from '../common/UIComponents/CheckBox/CheckBox';
import RadioButton from '../common/UIComponents/RadioButtom/radioButton';
// import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import Images from '../Assets/index';
import styles from './styles';
import {widthAdapter, fontscale, heightAdapter} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import WarningDialog from '../common/UIComponents/warningDialog';
import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import RoundButton from '../common/UIComponents/RoundButton';

class TaskTransactionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDlg: false,
      dlgMsg: '',
      isLoading: false,
    };
  }

  onDropDownChanges = (value, selectedIndex, data) => {};

  renderRountBtn = index => {
    return (
      <View style={styles.roundBtnView}>
        <RoundButton
          onSubmit={() => this.onLeadBtnSelect(index)}
          btnName={'10'}
          btnStyle={styles.roundBtnStyle}
          textStyle={styles.countText}
        />
        <Text style={styles.rountBtnCaption}>Lead</Text>
      </View>
    );
  };
  onAddEntries = () => {
    this.props.navigation.navigate('CustomerDetailsPage');
  }
  render() {
    return (
      <View style={[BaseStyles.baseContainer]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.scrollContainer}>
            <Dropdown
              label={'Select'}
              data={[{value: 'Item1'}, {value: 'Item2'}]}
              dropdownOffset={{
                top: heightAdapter(10),
              }}
              itemTextStyle={
                {
                  // borderColor: 'green',
                  // borderWidth: 1,
                }
              }
              pickerStyle={
                {
                  // flexDirection: 'row',
                  // borderColor: 'blue',
                  // borderWidth: 1,
                  // height: heightAdapter(100),
                  // width: widthAdapter(300),
                }
              }
              overlayStyle={
                {
                  // flexDirection: 'row',
                  // borderColor: 'blue',
                  // borderWidth: 1,
                  // height: heightAdapter(100),
                  // width: '100%',
                }
              }
              containerStyle={
                {
                  // flexDirection: 'row',
                  // borderColor: 'red',
                  // borderWidth: 1,
                  // height: heightAdapter(100),
                }
              }
              onChangeText={(value, selectedIndex, data) =>
                this.onDropDownChanges(value, selectedIndex, data)
              }
            />
            <View style={styles.addBtnRow}>
              <View style={styles.addView}>
                <LinkBtnComponent
                    onClick={this.onAddEntries}
                  btnName={I18n.t('TaskSummaryPage.addBtn')}
                  containerStyle={{
                    alignItems: 'flex-end',
                  }}
                  btnTextStyle={{
                    marginLeft: 0,
                    fontWeight: 'bold',
                    fontSize: fontscale(17),
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <Footer />
        <WarningDialog
          shouldShowDeleteWarning={this.state.showDlg}
          onOK={this.onConfirm}
          dlgMsg={this.state.dlgMsg}
        />
        <Spinner visible={this.state.isLoading} textContent={'Loading...'} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('state from task entry page ....', state);
  return {
    // dashboardData: state.dashboard.dashboardData,
    //   productDetails: state.taskEntry.productDetails[0],
    //   FormKey: state.taskEntry.productDetails.FormKey,
    //   TaskKey: state.taskEntry.productDetails.TaskKey,
    //   formDefenition: state.taskEntry.formDefenition,
  };
};

const mapDispatchToProps = dispatch => ({
  // getFormDefenitionDetailsData: (FormKey, onSuccesscallback, onErrocallback) =>
  //   dispatch(
  //     getFormDefenitionDetailsData(FormKey, onSuccesscallback, onErrocallback),
  //   ),
  // postEntry: (payload, FormKey, TaskKey, onSuccesscallback, onErrocallback) =>
  //   dispatch(
  //     postEntry(payload, FormKey, TaskKey, onSuccesscallback, onErrocallback),
  //   ),
  // getProductDetailsData: (onSuccesscallback, onErrocallback) =>
  //   dispatch(getProductDetailsData(onSuccesscallback, onErrocallback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskTransactionList);
