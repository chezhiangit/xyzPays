import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import {heightAdapter} from '../../../uttils/adapterUtil';

class ExpandCollapseComponent extends React.Component {
  toggleDropdown = show => {
    if (this.state.isSegmentVisible === show) {
      return;
    }
    this.setState({isSegmentVisible: show});
    if (show) {
      this.setState({segmentBorder: 1});
      this.translate.setValue(0);
      Animated.spring(this.translate, {
        toValue: 1,
        duration: 400,
        overshootClamping: true,
        // useNativeDriver: true,
      }).start();
    } else {
      // this.segmentBorder = 0;
      Animated.timing(this.translate, {
        toValue: 0,
        duration: 400,
        easing: Easing.linear,
        // useNativeDriver: true,
      }).start(() => this.setState({segmentBorder: 0}));
    }
  };
  render() {
    return (
      <View style={styles.dropdownContainer}>
        <TouchableOpacity
          style={styles.selectionBox}
          onPress={() => this.toggleDropdown(!this.state.isSegmentVisible)}>
          <View style={styles.selectionBox}>
            <Image style={styles.image} source={''} />
            <Text style={styles.selectedValue}>{this.state.selectedValue}</Text>
          </View>
        </TouchableOpacity>
        <Animated.View
          style={[
            styles.segmentedView,
            {
              height: this.translate.interpolate({
                inputRange: [0, 1],
                outputRange: [0, heightAdapter(460)],
              }),
              borderWidth: this.state.segmentBorder,
            },
          ]}>
          {/* <FlatList
          showsVerticalScrollIndicator={false}
          data={segmentationData}
          renderItem={this.renderSegmentItem}
          keyExtractor={(item, index) => index}
        /> */}
        </Animated.View>
      </View>
    );
  }
}

export default ExpandCollapseComponent;
