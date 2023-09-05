import React, { Component } from "react";
import { connect } from "react-redux";
import "./Hanbook.scss";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className=" section-share section-about">
        <div className="section-about-header">
          Truyền thông nói gì về BookingCare
        </div>
        <div className="section-about-content">
          <div className="section-about-content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/nOh7h67IxJs"
              title="Hướng Dẫn Đặt Lịch Khám Qua BookingCare"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="section-about-content-right">
            <p>
              Vai trò của nước đối với sức khỏe con người Nước chiếm đến tỉ lệ
              70-80% trọng lượng cơ thể. Nước có khả năng cung cấp nguồn khoáng
              chất, vận chuyển chất dinh dưỡng, oxy cần thiết cho các tế bào,
              nuôi dưỡng tế bào trong mọi hoạt động của cơ thể. Nước sạch có
              chứa nhiều chất khoáng có lợi cho sức khỏe
            </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
