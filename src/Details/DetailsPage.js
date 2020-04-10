import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';

class DetailsPage extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={BaseStyles.baseContainer}>
        {/* <TouchableOpacity onPress={() => navigation.replace('Login')}> */}
        <TouchableOpacity onPress={() => navigation.navigate('MapView')}>
          <Text>{I18n.t('detailsScreen')}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DetailsPage;
