import { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { getTodos } from './api/todoApi';

function App() {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-150 to-slate-200 dark:bg-slate-950 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex flex-col gap-6 rounded-[32px] border border-slate-200 bg-white/95 px-6 py-8 shadow-xl dark:border-slate-700 dark:bg-slate-950/90 md:flex-row md:items-end md:justify-between md:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">Smart Bank</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">은행 앱처럼 정돈된 체크리스트</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                일정을 매일의 자산처럼 관리하세요. 은행형 대시보드 UI로 오늘의 할 일을 더 쉽게 확인할 수 있습니다.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">잔액</div>
              <div className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">₩ 8,420,000</div>
              <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">오늘의 목표를 자산처럼 관리해보세요.</div>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.7fr_0.95fr]">
            <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.18)] dark:border-slate-700 dark:bg-slate-950">
              <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <TodoForm onAdd={fetchTodos} />
              <TodoList todos={todos} onUpdate={fetchTodos} />
            </div>
            <aside className="rounded-[36px] border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm dark:border-slate-700 dark:from-slate-900 dark:to-slate-950">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">오늘 요약</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">체크리스트 잔액</h3>
                  </div>
                  <span className="inline-flex rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300">
                    은행형 뷰
                  </span>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-3xl bg-slate-100 p-4 dark:bg-slate-950/80">
                    <div className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">할 일</div>
                    <div className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{todos.length}개</div>
                  </div>
                  <div className="rounded-3xl bg-slate-100 p-4 dark:bg-slate-950/80">
                    <div className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">완료</div>
                    <div className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{todos.filter(todo => todo.completed).length}개</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;