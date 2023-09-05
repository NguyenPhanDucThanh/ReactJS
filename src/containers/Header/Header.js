import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
import { languages } from "../../utils";
import { FormattedMessage } from "react-intl";

class Header extends Component {
  handleChangeLanguage = (languages) => {
    this.props.changeLanguageAppRedux(languages);
  };
  render() {
    const { processLogout, language, userInfo } = this.props;
    console.log(userInfo);
    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>
        <div className="languages">
          <span className="welcome">
            <FormattedMessage id="home-header.welcome" />{" "}
            {userInfo && userInfo.firstName && userInfo.lastName
              ? userInfo.firstName + " " + userInfo.lastName
              : " "}
          </span>
          <span
            className={
              language === languages.VI ? "language-vi active" : "language-vi"
            }
            onClick={() => this.handleChangeLanguage(languages.VI)}
          >
            VN
          </span>
          <span
            className={
              language === languages.EN ? "language-en active" : "language-en"
            }
            onClick={() => this.handleChangeLanguage(languages.EN)}
          >
            EN
          </span>
          <div
            className="btn btn-logout"
            onClick={processLogout}
            title="Logout"
          >
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>

        {/* nút logout */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguageAppRedux: (language) =>
      dispatch(actions.changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
