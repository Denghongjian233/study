class TaskPro {
  constructor() {
    this.tasks = [];
    this.isRunning = false;
    this.currentTask = 0;
    this._next = async () => {
      this.currentTask++;
      await this.runTask();
    };
  }
  addTask(task) {
    this.tasks.push(task);
  }
  run() {
    if (this.isRunning || !this.tasks.length) return;
    this.runTask();
  }
  async runTask() {
    if (this.currentTask >= this.tasks.length) {
      this.reset();
      return;
    }
    const i = this.currentTask;
    const task = this.tasks[this.currentTask];
    await task(this._next());
    const j = this.currentTask;
    if (i == j) {
      this._next();
    }
  }
  reset() {
    this.currentTask = 0;
    this.isRunning = false;
    this.tasks = [];
  }
}

const t = new TaskPro();

t.addTask(async (next) => {
  console.log(1, "start");
  await next();
  console.log(1, "end");
});

t.addTask(() => {
  console.log(2, "start");
});

t.addTask(() => {
  console.log(3, "start");
});

t.run(); //  console.log(1,'end')最后

// 冒泡排序

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
// 为题
