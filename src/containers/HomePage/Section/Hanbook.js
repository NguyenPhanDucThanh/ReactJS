import React, { Component } from "react";
import { connect } from "react-redux";
import "./Hanbook.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

class Hanbook extends Component {
  render() {
    return (
      <div className=" section-share section-handbook">
        <div className="section-content">
          <div className="section-header">
            <span className="title-section">Chuyên khoa phổ biến</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-img section-handbook" />
                <div>Bệnh viêm gan 1</div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-handbook" />
                <div>Bệnh viêm gan 2</div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-handbook" />
                <div>Bệnh viêm gan 3</div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-handbook" />
                <div>Bệnh viêm gan 4</div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-handbook" />
                <div>Bệnh viêm gan 5</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    //inject
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Hanbook);
