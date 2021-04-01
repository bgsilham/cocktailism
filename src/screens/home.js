import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }
  render() {
    return (
      <>
        <StatusBar backgroundColor="#212121" />
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>cokctailism</Text>
            <View style={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                placeholder="Try margarita, vodka, etc ..."
                placeholderTextColor="#3C3C3C"
                onChangeText={e => this.setState({search: e})}
                value={this.state.search}
              />
              <TouchableWithoutFeedback
                onPress={() => this.setState({search: ''})}>
                <View style={styles.searchBtn}>
                  <Text style={styles.btnText}>
                    {this.state.search === '' ? '' : 'x'}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.footer}>
            <View>
              <Text style={styles.contentTitle}>Category</Text>
              <View style={styles.cardWrapper}>
                <View style={styles.card}>
                  <TouchableOpacity style={styles.cardBtn} />
                  <Text style={styles.cardTitle}>Alcoholic</Text>
                </View>
                <View style={styles.card}>
                  <TouchableOpacity style={styles.cardBtn} />
                  <Text style={styles.cardTitle}>Non-Alcoholic</Text>
                </View>
                <View style={styles.card}>
                  <TouchableOpacity style={styles.cardBtn} />
                  <Text style={styles.cardTitle}>Sugarless</Text>
                </View>
                <View style={styles.card}>
                  <TouchableOpacity style={styles.cardBtn} />
                  <Text style={styles.cardTitle}>More</Text>
                </View>
              </View>
            </View>
            <View style={styles.popular}>
              <Text style={styles.contentTitle}>Popular for you</Text>
              <View style={styles.popularWrapper}>
                <View style={styles.popularCardMain}>
                  <Text style={styles.txtPopular}>Mojito</Text>
                  <View style={styles.imgPopular} />
                </View>
                <View style={styles.popularCardSecondaryWrapper}>
                  <View style={styles.popularCardSecondary}>
                    <Text style={styles.txtPopular}>Martini</Text>
                    <View style={styles.imgPopularSecondary} />
                  </View>
                  <View style={styles.popularCardSecondary}>
                    <Text style={styles.txtPopular}>Cosmopolitan</Text>
                    <View style={styles.imgPopularSecondary} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
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
    backgroundColor: '#212121',
    alignItems: 'center',
    height: 150,
  },
  footer: {
    height: 700,
    backgroundColor: '#2D2D2D',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 25,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
    letterSpacing: 2,
  },
  searchWrapper: {
    flexDirection: 'row',
    marginTop: 30,
  },
  searchInput: {
    width: 200,
    height: 40,
    backgroundColor: '#171717',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    color: '#fff',
    paddingHorizontal: 10,
  },
  searchBtn: {
    width: 50,
    height: 40,
    backgroundColor: '#171717',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categoryWrapper: {},
  contentTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
  },
  card: {
    alignItems: 'center',
  },
  cardBtn: {
    height: 60,
    width: 60,
    backgroundColor: '#AC996E',
    borderRadius: 10,
    marginBottom: 5,
  },
  cardTitle: {
    color: '#fff',
  },
  popular: {
    marginTop: 20,
  },
  popularWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularCardMain: {
    width: 170,
    height: 250,
    backgroundColor: '#171717',
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  popularCardSecondaryWrapper: {
    justifyContent: 'space-between',
  },
  popularCardSecondary: {
    width: 170,
    height: 120,
    backgroundColor: '#212121',
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  txtPopular: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 10,
    marginLeft: 10,
  },
  imgPopular: {
    width: 120,
    height: 180,
    backgroundColor: 'pink',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 20,
  },
  imgPopularSecondary: {
    width: 100,
    height: 70,
    backgroundColor: 'pink',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 20,
  }
});
