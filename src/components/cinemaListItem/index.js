import React from 'react';
import {
  View, Text, Button
} from 'react-native';
import styles from './styles';

class CinemaListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { navigate } = this.props;
    const {item} = this.props
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.website}</Text>
        <Button
          title="See Cinema"
          // onPress={() => navigate('MovieDetails')}
          onPress={() => console.log('boop')}
        />
      </View>
    );
  }
}

export default CinemaListItem;
