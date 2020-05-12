import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  //   Animated,
  Image,
  //   Easing,
  //   TouchableOpacity,
  //   TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import BaseStyles from '../common/BaseStyles';
import styles from './styles';
// import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay';
// import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import {heightAdapter, fontscale, widthAdapter} from '../uttils/adapterUtil';
// import Images from '../Assets/index';
// import {
//   getTrendingProducts,
//   getProductDetailsData,
// } from '../AppStore/trendingProductsActions';
import WarningDialog from '../common/UIComponents/warningDialog';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
// import Colors from '../uttils/Colors';

const productDetails = [
  {
    imageUrl: '',
    ProductName: 'Vonage Lead',
    ProductDescription:
      'Add new customer to Vonage and get commission on confirmation.',
    leadCommission: 10,
    confirmationCommission: 20,
  },
  {
    imageUrl: '',
    ProductName: 'AT & T',
    ProductDescription:
      'Add new customer to AT & T and get commission on confirmation.',
    leadCommission: 30,
    confirmationCommission: 60,
  },
  {
    imageUrl: '',
    ProductName: 'Review Lead',
    ProductDescription: 'Review Lead',
    leadCommission: 5,
    confirmationCommission: 10,
  },
];

class ProductsListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // trendingData: [...trending],
      //   productsServiceDone: false,
      isLoading: false,
      showDlg: false,
      dlgMsg: '',
    };
    // // this.show=false;
    // this.translate = new Animated.Value(0);
  }

  static getDerivedStateFromProps(props, state) {
    // if (!state.productsServiceDone) {
    //   return {isLoading: true};
    // }
    return {};
  }

  componentDidMount() {
    // this.props.navigation.addListener('focus', () => {
    //   this.setState({isLoading: true});
    //   this.props.getTrendingProducts(
    //     this.onGetTrendingProductListSuccess,
    //     this.onGetTrendingProductListFailed,
    //   );
    // });
  }

  onGetTrendingProductListSuccess = () => {
    this.setState({isLoading: false, productsServiceDone: true});
  };

  onGetTrendingProductListFailed = errorMsg => {
    this.setState({
      isLoading: false,
      productsServiceDone: true,
      showDlg: true,
      dlgMsg: errorMsg,
    });
  };

  onStartEarning = () => {
    console.log('On start earning');
  };

  //   onProductCardSelected = index => {
  //     this.setState({isLoading: true}, () =>
  //       this.props.getProductDetailsData(
  //         this.props.trendingProductList[index].ProductKey,
  //         this.onGetProductDetailsDataSuccess,
  //         this.onGetProductDetailsDataFailed,
  //       ),
  //     );
  //   };

  //   onGetProductDetailsDataSuccess = () => {
  //     console.log('pending task success');
  //     this.setState({isLoading: false}, () =>
  //       this.props.navigation.navigate('ProductDetailsPage'),
  //     );
  //   };

  //   onGetProductDetailsDataFailed = errorMsg => {
  //     console.log('pending task failes');
  //     this.setState({
  //       isLoading: false,
  //       showDlg: true,
  //       dlgMsg: errorMsg,
  //     });
  //     console.log(errorMsg);
  //   };

  renderTrendingCard = (item, index) => {
    return (
      <View style={styles.trendingItemContainer}>
        <View style={styles.productRow}>
          <View style={styles.trendingProduct}>
            <Image
              source={{
                isStatic: true,
                uri: item?.ProductPicture,
                method: 'GET',
                // headers: {
                //   clubId: NetTool.clubId,
                //   'Ocp-Apim-Subscription-Key': NetTool.subscriptionKey,
                // },
              }}
              style={styles.trendingImage}
            />
            <Text style={styles.trendingProductTxt}>{item?.ProductName}</Text>
          </View>
          <PrimaryButton
            btnName={I18n.t('login.loginBtnName')}
            onSubmit={this.onStartEarning}
            btnStyle={styles.btnStyle}
          />
        </View>
        <View style={styles.taskInfo}>
          <View style={styles.taskDescription}>
            <Text style={styles.taskDescriptionTxt}>
              {item?.ProductDescription}
            </Text>
          </View>
          <View style={styles.leadCommission}>
            <Text>{`$${item?.leadCommission} `}</Text>
            <Text style={styles.leadCommissionTxt}>for each Lead</Text>
          </View>
          <View style={styles.confirmCommission}>
            <Text>{`$${item.confirmationCommission} `}</Text>
            <Text style={styles.confirmCommissionTxt}>
              for each confirmed Lead
            </Text>
          </View>
        </View>
      </View>
    );
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
        <View style={styles.trendingContainer}>
          <View style={BaseStyles.userInfo}>
            <Text style={BaseStyles.userInfoTxt}>
              {I18n.t('trending.userInfo')}
            </Text>
          </View>
          {/* <FlatList
            style={styles.trendingList}
            data={productDetails}
            // data={this.props.productList}
            renderItem={this.renderTrendingCard}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
          /> */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.trendingList}>
            {productDetails.map((item, index) =>
              this.renderTrendingCard(item, index),
            )}
            <View style={styles.referEarnContainer}>
              <View style={styles.titleRow}>
                <Text style={styles.titlTextRefer}>Refer</Text>
                <Text style={styles.titlTextEarn}>{'& Earn'}</Text>
              </View>
              <View
                style={[
                  styles.taskDescription,
                  {
                    paddingLeft: widthAdapter(40),
                    paddingRight: widthAdapter(40),
                  },
                ]}>
                <Text style={styles.taskDescriptionTxt}>
                  Start getting commission for referring new users to XYZPays
                </Text>
              </View>
              <View style={BaseStyles.emptyHView} />
              <PrimaryButton
                btnName={I18n.t('login.loginBtnName')}
                onSubmit={this.onStartEarning}
                btnStyle={styles.btnStyle}
              />
            </View>
          </ScrollView>
        </View>
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
  console.log('state from product list page ... ', state);
  return {
    // trendingProductList: state.trending.trendingProductList,
  };
};

const mapDispatchToProps = dispatch => ({
  //   getTrendingProducts: (onSuccesscallback, onErrorcallback) =>
  //     dispatch(getTrendingProducts(onSuccesscallback, onErrorcallback)),
  //   getProductDetailsData: (ProductKey, onSuccesscallback, onErrorcallback) =>
  //     dispatch(
  //       getProductDetailsData(ProductKey, onSuccesscallback, onErrorcallback),
  //     ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsListPage);
