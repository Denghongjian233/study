<template>
  <div class="todo-list">
    <div class="todo-input">
      <input 
        v-model="newTodo" 
        @keyup.enter="addTodo"
        placeholder="请输入待办事项..."
      >
      <button @click="addTodo">添加</button>
    </div>

    <draggable 
      v-model="todos" 
      class="todo-items"
      item-key="id"
      :animation="300"
      ghost-class="ghost"
      drag-class="dragging"
    >
      <template #item="{ element: todo, index }">
        <li :class="{ completed: todo.completed }" class="todo-item">
          <div class="drag-handle">⋮⋮</div>
          <input 
            type="checkbox" 
            v-model="todo.completed"
          >
          <span>{{ todo.text }}</span>
          <button @click="removeTodo(index)" class="delete-btn">删除</button>
        </li>
      </template>
    </draggable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'

const newTodo = ref('')
const todos = ref([])

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({
      id: Date.now(),
      text: newTodo.value,
      completed: false
    })
    newTodo.value = ''
  }
}

const removeTodo = (index) => {
  todos.value.splice(index, 1)
}
</script>

<style scoped>
.todo-list {
  margin-top: 20px;
}

.todo-input {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

.todo-items {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 8px;
  gap: 10px;
  background: white;
  transition: all 0.3s ease;
  cursor: move;
}

.todo-item:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.completed span {
  text-decoration: line-through;
  color: #888;
}

.delete-btn {
  background-color: #f44336;
  margin-left: auto;
}

.delete-btn:hover {
  background-color: #da190b;
}

.drag-handle {
  cursor: move;
  color: #999;
  font-size: 20px;
  padding: 0 5px;
  user-select: none;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.dragging {
  opacity: 0.9;
  background: #f0f0f0;
}

.todo-item {
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.todo-items > * {
  transition: all 0.3s ease;
}
</style> 