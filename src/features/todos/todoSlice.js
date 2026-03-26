import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: { items: [] },
  reducers: {
    addTodo: (s, a) => {
      s.items.push({ id: Date.now(), text: a.payload });
    },
    removeTodo: (s, a) => {
      s.items = s.items.filter((t) => t.id !== a.payload);
    },
    updateTodo: (s, a) => {
      const t = s.items.find((i) => i.id === a.payload.id);
      if (t) t.text = a.payload.text;
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;