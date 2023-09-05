import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import {
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
} from "../../services/userService";
import ModalUser from "./ModalUser";
import { emitter } from "../../utils/emitter";
import ModalEditUser from "./ModalEditUser";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUser: [],
      isOpenModal: false,
      isOpenEditModal: false,
      userId: {},
    };
  }

  async componentDidMount() {
    this.getAllUsersFromReact();
  }
  getAllUsersFromReact = async () => {
    let response = await getAllUsers("All");
    if (response && response.errCode === 0) {
      this.setState({
        arrUser: response.user,
      });
    }
    console.log(response);
  };
  handleAddNewUser = () => {
    this.setState({
      isOpenModal: true,
    });
  };
  toggleUserModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };
  toggleUserEditModal = () => {
    this.setState({
      isOpenEditModal: !this.state.isOpenEditModal,
    });
  };
  createNewUser = async (data) => {
    // this.props.createNewUser();
    try {
      let response = await createNewUserService(data);
      if (response && response.errCode != 0) {
        alert(response.errMessage);
      } else {
        await this.getAllUsersFromReact();
        this.setState({
          isOpenModal: false,
        });
        emitter.emit("EVENT_CLEAR_MODAL_DATA", { id: "yourid" });
      }
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  handleDeleteUser = async (user) => {
    console.log("delete it", user);
    try {
      let res = await deleteUserService(user.id);
      console.log(res);
      if (res && res.errCode === 0) {
        await this.getAllUsersFromReact();
      } else {
        alert(res.errMessage);
      }
    } catch (e) {
      console.log(e);
    }
  };
  handleEditUser = async (user) => {
    console.log("edit user");
    this.setState({
      isOpenEditModal: !this.state.isOpenEditModal,
      userEdit: user,
    });
    // try {
    // } catch (e) {
    //   console.log(e);
    // }
  };
  doEditUser = async (user) => {
    try {
      let res = await editUserService(user);
      console.log(res);
      if (res && res.errCode === 0) {
        this.setState({
          isOpenEditModal: false,
        });
        await this.getAllUsersFromReact();
      } else {
        alert(res.errMessage);
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    let arrUser = this.state.arrUser;
    return (
      <div className="user-container">
        <ModalUser
          isOpen={this.state.isOpenModal}
          toggleFromParent={this.toggleUserModal}
          createNewUser={this.createNewUser}
        />
        {this.state.isOpenEditModal && (
          <ModalEditUser
            isOpen={this.state.isOpenEditModal}
            toggleFromParent={this.toggleUserEditModal}
            currentUser={this.state.userEdit}
            editUser={this.doEditUser}
          />
        )}
        <div className="title text-center">Manage users with Eric</div>
        <div className="mx-1">
          <button
            className="btn btn-primary px-3"
            onClick={() => this.handleAddNewUser()}
          >
            <i className="fas fa-plus m-10"></i> Add a user
          </button>
        </div>
        <div className="users-table mt-3 mx-3">
          <table id="customers">
            <tbody>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>First name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Action</th>
              </tr>

              {arrUser &&
                arrUser.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>
                        <button
                          className="btn-edit"
                          onClick={() => this.handleEditUser(item)}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          className="btn-delete"
                          onClick={() => this.handleDeleteUser(item)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
