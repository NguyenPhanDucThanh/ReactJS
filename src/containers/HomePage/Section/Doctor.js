import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "./Doctor.scss";
class Doctor extends Component {
  render() {
    return (
      <div className=" section-share  section-doctor">
        <div className="section-content">
          <div className="section-header">
            <span className="title-section">Bác sĩ nổi bật tuần qua</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="customize-bg">
                  <div className="outer-bg">
                    <div className="bg-img section-doctor" />
                  </div>
                  <div className="postion text-center">
                    <div>Giáo sư , Tiến Sĩ Đức Thành</div>
                    <div>Ung thư</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-bg">
                  <div className="outer-bg">
                    <div className="bg-img section-doctor" />
                  </div>
                  <div className="postion text-center">
                    <div>Giáo sư , Tiến Sĩ Đức Thành</div>
                    <div>Ung thư</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-bg">
                  <div className="outer-bg">
                    <div className="bg-img section-doctor" />
                  </div>
                  <div className="postion text-center">
                    <div>Giáo sư , Tiến Sĩ Đức Thành</div>
                    <div>Ung thư</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-bg">
                  <div className="outer-bg">
                    <div className="bg-img section-doctor" />
                  </div>
                  <div className="postion text-center">
                    <div>Giáo sư , Tiến Sĩ Đức Thành</div>
                    <div>Ung thư</div>
                  </div>
                </div>
              </div>

              <div className="section-customize">
                <div className="customize-bg">
                  <div className="outer-bg">
                    <div className="bg-img section-doctor" />
                  </div>
                  <div className="postion text-center">
                    <div>Giáo sư , Tiến Sĩ Đức Thành</div>
                    <div>Ung thư</div>
                  </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
