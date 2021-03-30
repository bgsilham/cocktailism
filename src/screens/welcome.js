import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

import bartender from '../../assets/img/bartender.png';

export default class Welcome extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#212121" />
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={bartender} style={styles.image} />
          </View>
          <View style={styles.footer}>
            <View style={styles.footerTitleWrapper}>
              <Text style={styles.title}>An Easy Way to Learning</Text>
              <Text style={styles.title}>All About Cocktail</Text>
            </View>
            <TouchableOpacity style={styles.btnStart}>
              <Text style={styles.btnStartText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  header: {
    flex: 4,
    backgroundColor: '#212121',
  },
  footer: {
    flex: 2,
    backgroundColor: '#2D2D2D',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -35,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  footerTitleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FFF',
  },
  btnStart: {
    width: 150,
    height: 40,
    backgroundColor: '#AC996E',
    marginTop: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStartText: {
    fontWeight: 'bold',
    color: '#212121',
  },
});
