import { motion } from 'framer-motion';
import { toggleTodo, deleteTodo } from '../api/todoApi';

const TodoItem = ({ todo, onUpdate }) => {
  const handleToggle = async () => {
    try {
      await toggleTodo(todo.id);
      onUpdate();
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(todo.id);
      onUpdate();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <motion.div
      className={`group flex items-center gap-4 overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 ${todo.completed ? 'opacity-80' : ''}`}
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 280 }}
    >
      <motion.button
        onClick={handleToggle}
        className={`flex h-12 w-12 items-center justify-center rounded-full border transition ${
          todo.completed
            ? 'border-emerald-400 bg-emerald-500 text-white shadow-[0_10px_30px_-20px_rgba(16,185,129,0.8)]'
            : 'border-slate-300 bg-white text-slate-700 hover:border-sky-400 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100'
        }`}
        whileTap={{ scale: 0.94 }}
      >
        {todo.completed ? (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        ) : (
          <span className="h-2.5 w-2.5 rounded-full bg-slate-400 dark:bg-slate-500"></span>
        )}
      </motion.button>
      <div className="min-w-0 flex-1">
        <p className={`text-sm font-semibold tracking-tight ${todo.completed ? 'text-slate-500 line-through dark:text-slate-400' : 'text-slate-900 dark:text-white'}`}>
          {todo.text}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
          <span className={`rounded-full px-2.5 py-1 ${todo.completed ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300' : 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300'}`}>
            {todo.completed ? '완료' : '진행 중'}
          </span>
          <span className="text-slate-500 dark:text-slate-400">은행형 카드 UI</span>
        </div>
      </div>
      <motion.button
        onClick={handleDelete}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-red-500 transition hover:border-red-300 hover:bg-red-50 dark:border-slate-700 dark:hover:bg-red-500/10 dark:text-red-400"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default TodoItem;