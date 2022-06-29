const defaultState = {
  dataSource: [
    {
      key: "1",
      name: "张三",
      age: 16,
      gender: "男",
      interest: "钢琴"
    },
    {
      key: "2",
      name: "李四",
      age: 16,
      gender: "女",
      interest: "小提琴"
    }
  ]
};

export default (state = defaultState, action) => {
  console.log(action);
  if (action.type === "delete") {
    const newState = JSON.parse(JSON.stringify(state));
    const arr = newState.dataSource;
    arr.forEach((ele, index) => {
      if (ele.key === action.value.key) {
        console.log(index);
        arr.splice(index, 1);
      }
    });

    return newState;
  }

  return state;
};
