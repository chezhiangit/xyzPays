import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  Animated,
  Image,
  Easing,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {connect} from 'react-redux';
import BaseStyles from '../common/BaseStyles';
import styles from './styles';
import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import {heightAdapter, fontscale, widthAdapter} from '../uttils/adapterUtil';
import Images from '../Assets/index';
import {
  getTrendingProducts,
  getProductDetailsData,
} from '../AppStore/trendingProductsActions';
import WarningDialog from '../common/UIComponents/warningDialog';
import Colors from '../uttils/Colors';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import ReadOnlyView from '../common/UIComponents/readOnlyView/ReadOnlyView';

class ProductDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // trendingData: [...trending],
      productsServiceDone: false,
      isLoading: false,
      showDlg: false,
      dlgMsg: '',
    };
  }

  componentDidMount() {
    Image.getSize(
      this.props.productDetails?.ProductPicture,
      (width, height) => {
        this.setState({width, height});
      },
    );
  }

  render() {
    return (
      <View style={BaseStyles.baseContainer}>
        <View style={styles.productDetailsContainer}>
          <View style={styles.productNameContainer}>
            <Text style={styles.productNameLabel}>
              {I18n.t('productDetails.productName')}
            </Text>
            <Text style={styles.productName}>
              {this.props.productDetails?.ProductName}
            </Text>
          </View>
          <View style={BaseStyles.emptyHView} />
          <View style={styles.amountContainer}>
            <Text style={styles.commissionAmountLabel}>
              {I18n.t('productDetails.amount')}
            </Text>
          </View>
          <View style={[BaseStyles.emptyHView, {height: heightAdapter(10)}]} />
          <View style={styles.commissionStatusContainer}>
            <Text style={[styles.commissionAmount, {color: '#3c763d'}]}>$</Text>
            <Text style={styles.commissionAmount}>10, </Text>
            {/* <Text style={styles.commissionStatusLabel}>
              {I18n.t('productDetails.status')}
            </Text> */}
            <Text style={styles.commissionAmount}>
              {this.props.productDetails['Commission Status']}
            </Text>
          </View>
          <View style={BaseStyles.emptyHView} />
          <View style={styles.imageContainer}>
            <Image
              source={{
                isStatic: true,
                uri: this.props.productDetails?.ProductPicture,
                method: 'GET',
              }}
              style={[styles.productImage, {width: this.state.width, height: this.state.height}]}
            />
          </View>
          <View style={BaseStyles.emptyHView} />
          <PrimaryButton
            btnStyle={styles.addWishListBtn}
            btnTexStyle={styles.addWishListBtnText}
            btnName={I18n.t('productDetails.wishBtnName')}
          />
          <View style={BaseStyles.emptyHView} />
          <View style={styles.productInfoContainer}>
            <View style={styles.labelContainer}>
              <ReadOnlyView
                viewStyle={styles.viewStyle}
                label={I18n.t('productDetails.sku')}
                labelStyle={styles.label}
              />
              <ReadOnlyView
                viewStyle={styles.viewStyle}
                label={this.props.productDetails?.SKU}
                labelStyle={styles.value}
              />
            </View>
            <View style={styles.labelContainer}>
              <ReadOnlyView
                viewStyle={{...styles.viewStyle, backgroundColor: 'white'}}
                label={I18n.t('productDetails.type')}
                labelStyle={styles.label}
              />
              <ReadOnlyView
                viewStyle={{...styles.viewStyle, backgroundColor: 'white'}}
                label={this.props.productDetails['Product Type']}
                labelStyle={[
                  styles.value,
                  {
                    backgroundColor: '#337ab7',
                    color: '#fff',
                    padding: widthAdapter(5),
                    borderRadius: widthAdapter(5),
                  },
                ]}
              />
            </View>
            <View style={styles.labelContainer}>
              <ReadOnlyView
                viewStyle={styles.viewStyle}
                label={I18n.t('productDetails.group')}
                labelStyle={styles.label}
              />
              <ReadOnlyView
                viewStyle={styles.viewStyle}
                label={this.props.productDetails?.ProductGroupName}
                labelStyle={styles.value}
              />
            </View>
            <View style={styles.labelContainer}>
              <ReadOnlyView
                viewStyle={{...styles.viewStyle, backgroundColor: 'white'}}
                label={I18n.t('productDetails.prodStatus')}
                labelStyle={styles.label}
              />
              <ReadOnlyView
                viewStyle={{...styles.viewStyle, backgroundColor: 'white'}}
                label={this.props.productDetails['Product Status']}
                labelStyle={[
                  styles.value,
                  {
                    backgroundColor: '#5bc0de',
                    color: '#fff',
                    padding: widthAdapter(5),
                    borderRadius: widthAdapter(5),
                  },
                ]}
              />
            </View>
          </View>
        </View>
        <Footer />
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('state from trending page ... ', state);
  return {
    productDetails: state.trending.productDetails[0],
  };
};

const mapDispatchToProps = dispatch => ({
  // getTrendingProducts: (onSuccesscallback, onErrorcallback) =>
  //   dispatch(getTrendingProducts(onSuccesscallback, onErrorcallback)),
  // getProductDetailsData: (ProductKey, onSuccesscallback, onErrorcallback) =>
  //   dispatch(
  //     getProductDetailsData(ProductKey, onSuccesscallback, onErrorcallback),
  //   ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetailsPage);
