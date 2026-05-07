import { useState } from 'react';
import { motion } from 'framer-motion';
import { addTodo } from '../api/todoApi';

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    try {
      await addTodo(text.trim());
      setText('');
      onAdd();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div className="grid gap-4 rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="min-w-0 flex-1">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="todo-input">
              새 할 일 등록
            </label>
            <input
              id="todo-input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="예: 고객 보고서 작성"
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 shadow-sm outline-none transition duration-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-cyan-400 dark:focus:ring-cyan-500/20"
            />
          </div>
          <motion.button
            type="submit"
            className="inline-flex h-14 items-center justify-center rounded-3xl bg-gradient-to-r from-sky-600 to-cyan-600 px-8 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:from-sky-700 hover:to-cyan-700"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
          >
            등록
          </motion.button>
        </div>
        <div className="grid gap-2 rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-600 dark:bg-slate-950/80 dark:text-slate-400">
          <p>은행 앱처럼 정돈된 UI로 오늘의 일정을 한눈에 확인하세요.</p>
          <p>완료된 일은 체크해 관리하면 더 깔끔합니다.</p>
        </div>
      </div>
    </motion.form>
  );
};

export default TodoForm;