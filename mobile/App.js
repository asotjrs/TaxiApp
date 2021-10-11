import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, TextInput} from 'react-native';
import io from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    this.socket = io('http://192.168.1.3:3000');
  }

  submitChatMessage = () => {
    this.socket.emit('chat message is :', this.state.message);
  };
  render() {
    return (
      <SafeAreaView>
        <View>
          <TextInput
            autoCorrect={false}
            value={this.state.message}
            style={{height: 40, borderWidth: 2}}
            onChangeText={message => this.setState({message})}
            onSubmitEditing={this.submitChatMessage}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
