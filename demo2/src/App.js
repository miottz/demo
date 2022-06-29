import React, { Component } from "react";
import { Table, Button } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import store from "./store";
import ModalForm from "./components/ModalForm/index.js";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange = () => {
    this.setState(store.getState());
  };
  // 编辑功能
  handleEdit = (record) => {};

  // 删除功能
  handleDelete = (record) => {
    console.log("接收到record", record);
    const action = {
      type: "delete",
      value: record
    };
    store.dispatch(action);
  };
  render() {
    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "性别",
        dataIndex: "gender",
        key: "gender"
      },
      {
        title: "爱好",
        dataIndex: "interest",
        key: "interest"
      },
      {
        title: "操作",
        key: "action",
        render: (text, record) => {
          return (
            <div className="action">
              <Button
                type="primary"
                size="small"
                onClick={this.handleEdit(record)}
              >
                编辑
              </Button>
              <Button
                type="primary"
                size="small"
                onClick={() => this.handleDelete(record)}
              >
                删除
              </Button>
            </div>
          );
        }
      }
    ];
    return (
      <div className="App">
        <Table dataSource={this.state.dataSource} columns={columns} />
        <ModalForm />
      </div>
    );
  }
}
