import React from 'react';
import {withRouter} from 'react-router-dom';
import Spin from 'antd/lib/spin';
import 'antd/lib/spin/style/index.css';
import './style.scss';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: false};
  }
  goToLoginPage() {
    this.props.history.push('/login');
  }
  getFormClass() {
    let formClassNames = 'register-box';
    const themeClass = this.props.theme === 'dark' ?
      ' register-box-dark-theme' : ' register-box-red-theme';

    formClassNames += themeClass;
    return formClassNames;
  }
  render() {
    const {loading, onSubmit, errMsg} = this.props;
    const passwordFormat = '.{6,}';
    const formClassList = this.getFormClass();

    return (
      <div className={formClassList}>
        <Spin spinning={loading}>
          <h1>Sign up</h1>
          <form method="post" onSubmit={onSubmit}>
            <p className="form-error-message">{errMsg}</p>
            <input title="Username must be 3 to 15 letters" type="text"
              name="username" placeholder="Username" pattern="[A-Za-z]{3,15}"
              required />
            <input title="Minimum six characters"
              type="password" name="password" placeholder="Password"
              pattern={passwordFormat}
              required/>
            <input title="Minimum six characters"
              type="password" name="retype-password"
              placeholder="Re-type Password" pattern={passwordFormat}
              required/>
            <input type="submit" value="Register me!"/>
          </form>
          <button onClick={this.goToLoginPage.bind(this)}>Log in</button>
        </Spin>
      </div>
    );
  }
}

export default withRouter(RegisterForm);
