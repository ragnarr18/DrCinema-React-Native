import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';

class UpcomingMoviesListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>General Kenobi.</Text>
      </View>
    );
  }
}

export default UpcomingMoviesListItem;
