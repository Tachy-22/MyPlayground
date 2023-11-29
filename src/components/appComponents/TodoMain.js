import TodoList from "./TodoList";

function TodoMain() {
  return (
    <div className=" h-full space-y-5 px-16 py-10 ">
      <h1 className="text-white text-center">Whats on your list Today?</h1>
      <TodoList />
    </div>
  );
}

export default TodoMain;
