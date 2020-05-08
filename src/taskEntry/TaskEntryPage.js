import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import TextInputComponent from '../common/UIComponents/TextInputComponent';
// import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import Images from '../Assets/index';
import styles from './styles';
import {widthAdapter, fontscale} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import WarningDialog from '../common/UIComponents/warningDialog';
import {getFormDefenitionDetailsData} from '../AppStore/taskEntryActions';

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

    // Image.getSize(
    //   this.props.productDetails?.ProductPicture,
    //   (width, height) => {
    //     this.setState({width, height});
    //   },
    // );

    // this.props.getFormDefenitionDetailsData(
    //   this.props.FormKey,
    //   this.getFormDefenitionDetailsSuccess,
    //   this.getFormDefenitionDetailsFailed,
    // );
  }

  getFormDefenitionDetailsSuccess = () => {
    this.setState({isLoading: false});
  };

  getFormDefenitionDetailsFailed = errorMsg => {
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
  };

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

  onTextChange = (text, controlType, index) => {
    console.log('Control Type ...', controlType);
    console.log('Control index ...', index);
  };

  renderDynamicComponents = () =>
    this.createComponentsDynamically().map(x => x);

  createComponentsDynamically = () => {
    const FormView = this.props.formDefenition?.FormDefinition?.map(
      (componentObject, index) => {
        if (componentObject.ControlType === 'text') {
          let components = {
            inputValue:
              componentObject.DefaultValue === null
                ? ''
                : componentObject.DefaultValue,
          };
          const tempComponents = [...this.state.components, {...components}];
          this.setState({components: [...tempComponents]});
          return (
            <TextInputComponent
              placeholder={'Dynamic component ' + index}
              autoFocus={false}
              // inputValue={this.state.components[index]?.inputValue}
              onTextChange={text => this.onTextChange(text, 'text', index)}
            />
          );
        }

        if (componentObject.ControlType === 'textarea') {
          let components = {
            inputValue:
              componentObject.DefaultValue === null
                ? ''
                : componentObject.DefaultValue,
          };
          const tempComponents = [...this.state.components, {...components}];
          this.setState({components: [...tempComponents]});
          return (
            <TextInputComponent
              placeholder={'Dynamic component ' + index}
              autoFocus={false}
              // inputValue={this.state.components[index].inputValue}
              onTextChange={text => this.onTextChange(text, 'text', index)}
            />
          );
        }
      },
    );

    console.log('components ....', FormView);

    return FormView;
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
              {/* <Image style={styles.taskEntryImage} source={Images.xyfavIcon} /> */}
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
          {/* {this.renderDynamicComponents()} */}
          {/* <View style={styles.questionContainer}>
            <Text style={styles.questionTxt}>
              {'How often do you use our products?*'}
            </Text>
          </View>
          <TextInputComponent
            placeholder=""
            autoFocus={false}
            inputValue={this.state.answer1}
            onTextChange={answer1 => this.setState({answer1})}
          />
          <View style={styles.questionContainer}>
            <Text style={styles.questionTxt}>
              {'What are you trying to solve by using our product?'}
            </Text>
          </View>
          <TextInputComponent
            placeholder=""
            autoFocus={false}
            inputValue={this.state.answer2}
            onTextChange={answer2 => this.setState({answer2})}
          />
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
          </View> */}
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
        <Spinner visible={this.state.isLoading} textContent={'Loading...'} />
        {/* <TouchableOpacity onPress={() => navigation.replace('HomePage')}>
          <Text>{I18n.t('loginScreen')}</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('state from Home page ....', state);
  return {
    // dashboardData: state.dashboard.dashboardData,
    productDetails: state.taskEntry.productDetails[0],
    FormKey: state.taskEntry.productDetails.FormKey,
    formDefenition: state.taskEntry.formDefenition,
  };
};

const mapDispatchToProps = dispatch => ({
  getFormDefenitionDetailsData: (FormKey, onSuccesscallback, onErrocallback) =>
    dispatch(
      getFormDefenitionDetailsData(FormKey, onSuccesscallback, onErrocallback),
    ),
  // getPendingTaskData: (onSuccesscallback, onErrocallback) =>
  //   dispatch(getPendingTaskData(onSuccesscallback, onErrocallback)),
  // getProductDetailsData: (onSuccesscallback, onErrocallback) =>
  //   dispatch(getProductDetailsData(onSuccesscallback, onErrocallback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskEntryPage);

// export default TaskEntryPage;
