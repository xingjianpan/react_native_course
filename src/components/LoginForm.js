import React, { Component}  from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={ email => this.setState({ email })}
          />

        </CardSection>


        <CardSection>
        </CardSection>


        <CardSection>
          <Button>Login</Button>
        </CardSection>

      </Card>

    );
  }
}


export default LoginForm;
