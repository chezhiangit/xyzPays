import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
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
import ReadOnlyView from '../common/UIComponents/readOnlyView/ReadOnlyView';
import {getProductsFormDefenitionDetailsData} from '../AppStore/eventBasedTaskActions';

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

  // renderRountBtn = index => {
  //   return (
  //     <View style={styles.roundBtnView}>
  //       <RoundButton
  //         onSubmit={() => this.onLeadBtnSelect(index)}
  //         btnName={'10'}
  //         btnStyle={styles.roundBtnStyle}
  //         textStyle={styles.countText}
  //       />
  //       <Text style={styles.rountBtnCaption}>Lead</Text>
  //     </View>
  //   );
  // };
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
        <View style={{width: widthAdapter(250)}}>
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
  render() {
    return (
      <View style={[BaseStyles.baseContainer]}>
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskTransactionList);
