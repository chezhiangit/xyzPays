import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
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
import {
  getFormDefenitionDetailsData,
  postEntry,
} from '../AppStore/taskEntryActions';
// import { checkPhone } from '../uttils/UtilityFunctions';

class TaskEntryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: 'Cable Protal Products',
      selectedIndex: 0,
      showDlg: false,
      dlgMsg: '',
      answer1: '',
      answer2: '',
      width: 100,
      height: 100,
      components: [],
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      this.setState({isLoading: true});
      Image.getSize(
        this.props.productDetails?.ProductPicture,
        (width, height) => {
          this.setState({width, height});
        },
      );

      this.props.getFormDefenitionDetailsData(
        this.props.FormKey,
        this.getFormDefenitionDetailsSuccess,
        this.getFormDefenitionDetailsFailed,
      );
    });
  }

  getFormDefenitionDetailsSuccess = () => {
    this.setState({isLoading: false}, () => {
      const components = this.parseFormDefenition();
      this.setState({components});
    });
  };

  getFormDefenitionDetailsFailed = errorMsg => {
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
  };

  constructPayload = () => {
    const payload = [];
    try {
      this.state.components.forEach(item => {
        if (item.controlType === 'inputText') {
          if (item.ControlReq === true && item.inputValue.length === 0) {
            throw {};
          }
          const textObj = {
            ControlColumn: item.ControlColumn,
            ControlValue: item.inputValue,
          };
          payload.push(textObj);
        } else if (item.controlType === 'checkbox') {
          let isFilled = false;
          const checkboxObj = {};
          item.checkBoxGroup.forEach(el => {
            if (el.status) {
              isFilled = true;
              checkboxObj.ControlColumn = item.ControlColumn;
              checkboxObj.ControlValue = el.value;
              payload.push(checkboxObj);
            }
          });
          if (item.ControlReq === true && isFilled === false) {
            throw {};
          }
        } else if (item.controlType === 'radio') {
          let isFilled = false;
          const selectObj = {};
          item.radioButtomGroup.forEach(el => {
            if (el.status) {
              isFilled = true;
              selectObj.ControlColumn = item.ControlColumn;
              selectObj.ControlValue = el.value;
              payload.push(selectObj);
            }
          });
          if (item.ControlReq === true && isFilled === false) {
            throw {};
          }
        }
      });
      return payload;
    } catch (e) {
      this.setState({
        showDlg: true,
        dlgMsg: 'Fill all the mandatory fields.',
      });
      return null;
    }
    // return payload;
  };

  onSave = () => {
    const payload = this.constructPayload();
    console.log('payload .........', payload);
    this.props.postEntry(
      payload,
      this.props.FormKey,
      this.props.TaskKey,
      this.onPostEntrySuccess,
      this.onPostEntryFailed,
    );
  };

  onPostEntrySuccess = () => {
    this.setState({isLoading: false});
  };

  onPostEntryFailed = errorMsg => {
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
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

  onTextChange = (text, index) => {
    // console.log('Control Type ...', controlType);
    // console.log('Control index ...', index);
    const components = this.state.components;
    components[index].inputValue = text;
    this.setState({components});
  };

  onChecBoxSelected = (itemId, groupIndex) => {
    // console.log('Selected check box index .....', itemId);
    // console.log('selecte check box gropup index....', groupIndex);
    // console.log(
    //   'selecte checkbox item....',
    //   this.state.components[groupIndex].checkBoxGroup[itemId],
    // );
    const components = this.state.components;
    components[groupIndex].checkBoxGroup[itemId].status = !components[
      groupIndex
    ].checkBoxGroup[itemId].status; //true;

    // console.log('onChecBoxSelected components .....', components);

    this.setState({components: components});
  };

  onRadioOptionSelected = (itemId, groupIndex) => {
    // console.log('Selected radio box index .....', itemId);
    // console.log('selecte readio box gropup index....', groupIndex);
    // console.log(
    //   'selecte radio item....',
    //   this.state.components[groupIndex].radioButtomGroup[itemId],
    // );
    const components = [...this.state.components];
    components[groupIndex].radioButtomGroup.forEach(item => {
      // console.log('item ..........', item);
      if (item.itemId === itemId) {
        // console.log('matched item ..........', item);
        components[groupIndex].radioButtomGroup[item.itemId].status = true;
      } else {
        // console.log(' not matched item ..........', item);
        components[groupIndex].radioButtomGroup[item.itemId].status = false;
      }
    });
    // console.log('onRadioOptionSelected components .....', components);
    this.setState({components: components});
  };

  parseCheckBox = (el, itemId, groupIndex) => {
    // console.log('parseCheckBox ......');
    return {
      label: el.Text,
      value: el.Value,
      itemId,
      // onSelected: {() => this.onChecBoxSelected(itemId, groupIndex)},
      status: false,
    };
  };

  parseSelectionControl = (el, itemId, groupIndex) => {
    // console.log('parseSelectionControl ......');
    return {
      label: el.Text,
      value: el.Value,
      itemId,
      // onSelected: {() => this.onRadioOptionSelected(itemId, groupIndex)},
      status: false,
    };
  };

  parseFormDefenition = () => {
    // console.log('parseFormDefenition ......');
    const components = [];
    this.props.formDefenition?.FormDefinition?.forEach((el, index) => {
      // console.log('element .....', el);
      let returnObj = {};
      if (el.ControlType === 'text' || el.ControlType === 'textarea') {
        // console.log('text element');
        returnObj = {
          controlType: 'inputText',
          inputValue: el.DefaultValue === null ? '' : el.DefaultValue,
          // onTextChange: (text, itmeId) => this.onTextChange(text, itmeId),
          index,
          multiline: 5,
          ControlColumn: el.ControlColumn,
          ControlReq: el.ControlReq,
          placeholder: el.HelpText === null ? 'Enter value' : el.HelpText,
          FormControlKey: el.FormControlKey,
          FormKey: el.FormKey,
        };
        // console.log('returnObj text....', returnObj);
        components.push({...returnObj});
      } else if (el.ControlType === 'checkbox') {
        // console.log('checkbox element');
        const checkBoxGroup = this.props.formDefenition[el.ControlColumn].map(
          (checkboxObj, checkboxObjIndex) =>
            this.parseCheckBox(checkboxObj, checkboxObjIndex, index),
        );
        returnObj = {
          controlType: 'checkbox',
          ControlColumn: el.ControlColumn,
          ControlReq: el.ControlReq,
          FormControlKey: el.FormControlKey,
          FormKey: el.FormKey,
          checkBoxGroup: [...checkBoxGroup],
        };
        // console.log('returnObj checkbox....', returnObj);
        components.push(returnObj);
      } else if (el.ControlType === 'radio') {
        // console.log('radio element');
        const radioButtomGroup = this.props.formDefenition[
          el.ControlColumn
        ].map((selectionObj, selectionObjIndex) =>
          this.parseSelectionControl(selectionObj, selectionObjIndex, index),
        );
        returnObj = {
          controlType: 'radio',
          ControlColumn: el.ControlColumn,
          ControlReq: el.ControlReq,
          FormControlKey: el.FormControlKey,
          FormKey: el.FormKey,
          radioButtomGroup: [...radioButtomGroup],
        };
        // console.log('returnObj radio....', returnObj);
        components.push(returnObj);
      }
    });
    console.log('components ......', components);
    return components;
  };

  createComponentsDynamically = () => {
    const FormView = this.state.components.map((item, index) => {
      if (item.controlType === 'inputText') {
        return (
          <TextInputComponent
            placeholder={item.placeholder + index}
            autoFocus={false}
            inputValue={this.state.components[index].inputValue}
            onTextChange={text => this.onTextChange(text, index)}
          />
        );
      }
      if (item.controlType === 'checkbox') {
        const CheckBox = () =>
          item.checkBoxGroup.map((el, id) => {
            return (
              <CheckBoxComponent
                btnName={el.label}
                onClick={() => this.onChecBoxSelected(id, index)}
                isSelected={el.status}
                // btnTextStyle={{color: 'gray'}}
              />
            );
          });
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              height: heightAdapter(100),
            }}>
            {CheckBox()}
          </View>
        );
      }
      if (item.controlType === 'radio') {
        const RadioBtn = () =>
          item.radioButtomGroup.map((el, id) => {
            return (
              <RadioButton
                btnName={el.label}
                onClick={() => this.onRadioOptionSelected(id, index)}
                status={el.status}
              />
            );
          });
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              height: heightAdapter(100),
            }}>
            {RadioBtn()}
          </View>
        );
      }
    });
    return FormView;
  };

  render() {
    return (
      <View style={[BaseStyles.baseContainer]}>
        <ScrollView style={styles.scrollContainer}>
          <View style={BaseStyles.emptyHView} />
          <View style={styles.taskItemContainer}>
            <View style={styles.taskDetailsContainer}>
              <View style={styles.taskEntryProduct}>
                <View style={styles.dotWithTick}>
                  <Text>
                    <Icon
                      name="check-circle"
                      size={fontscale(20)}
                      color={Colors.primaryAppColor}
                    />
                  </Text>
                </View>
                <Text style={styles.taskEntryProductTxt}>
                  {this.props.productDetails.ProductName}
                </Text>
              </View>
              <View style={styles.activeContainer}>
                <Text style={styles.statusTxt}>
                  {this.props.productDetails['Product Status']}
                </Text>
              </View>
              <View style={styles.skuContainer}>
                <Text style={styles.skuLabel}>
                  {I18n.t('taskEntryPage.sku')}
                  {': '}
                </Text>
                <Text style={styles.skuTxt}>
                  {this.props.productDetails.SKU}
                </Text>
              </View>
            </View>
            <View style={styles.taskEntryImageContainer}>
              <Image
                source={{
                  isStatic: true,
                  uri: this.props.productDetails?.ProductPicture,
                  method: 'GET',
                }}
                style={[
                  styles.productImage,
                  // {width: this.state.width, height: this.state.height},
                ]}
              />
            </View>
          </View>

          {this.createComponentsDynamically()}
          <View style={BaseStyles.emptyHView} />
          {this.state.components.length > 0 && (
            <PrimaryButton
              btnName={I18n.t('taskEntryPage.saveBtnName')}
              onSubmit={this.onSave}
            />
          )}
        </ScrollView>
        <Footer />
        <WarningDialog
          shouldShowDeleteWarning={this.state.showDlg}
          // onCancel={this.onCancel}
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
    productDetails: state.taskEntry.productDetails[0],
    FormKey: state.taskEntry.productDetails.FormKey,
    TaskKey: state.taskEntry.productDetails.TaskKey,
    formDefenition: state.taskEntry.formDefenition,
  };
};

const mapDispatchToProps = dispatch => ({
  getFormDefenitionDetailsData: (FormKey, onSuccesscallback, onErrocallback) =>
    dispatch(
      getFormDefenitionDetailsData(FormKey, onSuccesscallback, onErrocallback),
    ),
  postEntry: (payload, FormKey, TaskKey, onSuccesscallback, onErrocallback) =>
    dispatch(
      postEntry(payload, FormKey, TaskKey, onSuccesscallback, onErrocallback),
    ),
  // getProductDetailsData: (onSuccesscallback, onErrocallback) =>
  //   dispatch(getProductDetailsData(onSuccesscallback, onErrocallback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskEntryPage);

// export default TaskEntryPage;
