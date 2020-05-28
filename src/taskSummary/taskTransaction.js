import * as React from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {Dropdown} from 'react-native-material-dropdown';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
// import TextInputComponent from '../common/UIComponents/TextInputComponent';
// import CheckBoxComponent from '../common/UIComponents/CheckBox/CheckBox';
// import RadioButton from '../common/UIComponents/RadioButtom/radioButton';
// import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
// import Images from '../Assets/index';
import styles from './styles';
import {widthAdapter, fontscale, heightAdapter} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import WarningDialog from '../common/UIComponents/warningDialog';
import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
// import RoundButton from '../common/UIComponents/RoundButton';
import ReadOnlyView from '../common/UIComponents/readOnlyView/ReadOnlyView';
import {
  getProductsFormDefenitionDetailsData,
  getEventBasedTaskList,
} from '../AppStore/eventBasedTaskActions';

class TaskTransactionList extends React.Component {
  constructor(props) {
    super(props);
    console.log('props from task transaction list .....', props);
    this.state = {
      showDlg: false,
      dlgMsg: '',
      isLoading: false,
      selecteLead: this.props.route.params.selecteLead,
    };
  }

  onDropDownChanges = (value, selectedIndex, data) => {
    this.setState({isLoading: true, selecteLead: value});
    this.props.getEventBasedTaskList(
      this.props.stepInfo.FormKey,
      data[selectedIndex].StepKey,
      this.onGetEventBasedTaskListSuccess,
      this.onGetEventBasedTaskListFailed,
    );
  };

  onGetEventBasedTaskListSuccess = () => {
    this.setState({isLoading: false});
    this.props.navigation.navigate('TaskTransactionList');
  };

  onGetEventBasedTaskListFailed = errorMsg => {
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
  };

  onAddEntries = () => {
    this.props.navigation.navigate('CustomerDetailsPage');
  };

  onStartLead = item => {
    this.setState({isLoading: true});
    this.props.getProductsFormDefenitionDetailsData(
      item.FormKey,
      item.LeadKey,
      'TaskTransaction',
      this.onGetProductsFormDefenitionDetailsSuccess,
      this.onGetProductsFormDefenitionDetailsFailed,
    );
    // this.props.navigation.navigate('CustomerDetailsPage');
  };

  onGetProductsFormDefenitionDetailsSuccess = () => {
    console.log('onGetProductsFormDefenitionDetailsSuccess success');
    this.setState({isLoading: false}, () =>
      this.props.navigation.navigate('LeadTransactionDetails'),
    );
  };

  onGetProductsFormDefenitionDetailsFailed = errorMsg => {
    console.log('onGetProductsFormDefenitionDetails failes');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
    console.log(errorMsg);
  };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    this.setState({showDlg: false});
  };

  renderTaskItemRow = (item, index) => {
    return (
      <View style={styles.labelContainer}>
        <ReadOnlyView
          viewStyle={styles.labelViewStyle}
          label={item.Form}
          labelStyle={styles.label}
        />
        <ReadOnlyView
          viewStyle={styles.valueViewStyle}
          label={item.Value}
          labelStyle={styles.value}
        />
      </View>
    );
  };

  renderTaskList = ({item, index}) => {
    console.log('task item ....', item);
    return (
      <View style={styles.taskItemContainer}>
        {item?.Lead.map(this.renderTaskItemRow)}
        <View style={{flexDirection: 'row'}}>
          <PrimaryButton
            btnName={item.StepName}
            onSubmit={() => this.onStartLead(item)}
            btnStyle={styles.btnStyle}
          />
        </View>
        <View style={styles.taskItemDivider} />
      </View>
    );
  };

  parseFilterItems = (item, index) => {
    return {value: item.StepName, StepKey: item.StepKey};
  };

  render() {
    return (
      <View style={[BaseStyles.baseContainer]}>
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <View style={styles.scrollContainer}>
          <Dropdown
            value={this.state.selecteLead}
            label={'Select'}
            data={this.props.taskListFilter?.map(this.parseFilterItems)}
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
              <View
                style={{
                  width: widthAdapter(100),
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>
                  <Icon
                    name="plus-circle"
                    size={fontscale(20)}
                    color={Colors.linkBtnColor}
                  />
                </Text>
                <LinkBtnComponent
                  onClick={this.onAddEntries}
                  btnName={I18n.t('TaskSummaryPage.addBtn')}
                  containerStyle={{
                    // alignItems: 'flex-end',
                    padding: 0,
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
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.taskListView}
            data={this.props.taskList}
            renderItem={this.renderTaskList}
            keyExtractor={(item, index) => index}
          />
        </View>
        {/* </ScrollView> */}
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
    taskList: state.products.taskList,
    taskListFilter: state.products.taskListFilter,
    stepInfo: state.products.StepInfo[0],
  };
};

const mapDispatchToProps = dispatch => ({
  getProductsFormDefenitionDetailsData: (
    FormKey,
    LeadKey,
    calledFrom,
    onSuccesscallback,
    onErrorcallback,
  ) =>
    dispatch(
      getProductsFormDefenitionDetailsData(
        FormKey,
        LeadKey,
        calledFrom,
        onSuccesscallback,
        onErrorcallback,
      ),
    ),

  getEventBasedTaskList: (
    FormKey,
    StepKey,
    onSuccesscallback,
    onErrocallback,
  ) =>
    dispatch(
      getEventBasedTaskList(
        FormKey,
        StepKey,
        onSuccesscallback,
        onErrocallback,
      ),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskTransactionList);
