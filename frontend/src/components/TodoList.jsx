import { motion } from 'framer-motion';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onUpdate }) => {
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  if (totalTodos === 0) {
    return (
      <motion.div
        className="rounded-[28px] border border-dashed border-slate-200 bg-white p-10 text-center text-slate-500 shadow-sm dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        아직 추가된 할 일이 없어요.
        <div className="mt-2 text-sm text-slate-400 dark:text-slate-500">은행 앱 같은 깔끔한 화면에서 새로운 할 일을 추가해보세요.</div>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 rounded-[28px] border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900/70">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">요약</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">체크리스트 현황</h3>
          </div>
          <div className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm dark:bg-slate-950">총 {totalTodos}개</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm dark:bg-slate-950">완료 {completedTodos}개</span>
          </div>
        </div>
      </div>
      <motion.ul
        className="space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {todos.map((todo, index) => (
          <motion.li
            key={todo.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
          >
            <TodoItem todo={todo} onUpdate={onUpdate} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default TodoList;