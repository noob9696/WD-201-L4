const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const formattedDate = (d) => {
      return d.toISOString().split("T")[0];
    };

    const dateToday = new Date();
    const today = formattedDate(dateToday);

    return all.filter((todo) => {
      if (todo.dueDate < today) return true;
      else return false;
    });
  };

  const dueToday = () => {
    const formattedDate = (d) => {
      return d.toISOString().split("T")[0];
    };

    const dateToday = new Date();
    const today = formattedDate(dateToday);

    let arr = all.filter((todo) => {
      if (todo.dueDate === today) return true;
      else return false;
    });
    return arr;
  };

  const dueLater = () => {
    const formattedDate = (d) => {
      return d.toISOString().split("T")[0];
    };

    const dateToday = new Date();
    const today = formattedDate(dateToday);

    return all.filter((todo) => {
      if (todo.dueDate > today) return true;
      else return false;
    });
  };

  const toDisplayableList = (list) => {
    const formattedDate = (d) => {
      return d.toISOString().split("T")[0];
    };

    const dateToday = new Date();
    const today = formattedDate(dateToday);

    let flag = list[0].dueDate == today ? true : false;
    const strArr = list.map((todo) => {
      if (flag == true) {
        if (todo.completed == true) return "[x] " + todo.title;
        else return "[ ] " + todo.title;
      } else {
        if (todo.completed == true)
          return "[x] " + todo.title + " " + todo.dueDate;
        else return "[ ] " + todo.title + " " + todo.dueDate;
      }
    });

    let str = strArr.join("\n");

    return str;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
