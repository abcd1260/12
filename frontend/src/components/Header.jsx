import { motion } from 'framer-motion';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="relative text-left mb-10">
      <div className="inline-flex items-center gap-3 rounded-full bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
        <span>Bank Checklist</span>
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-500"></span>
      </div>
      <motion.h1
        className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        오늘의 체크리스트
      </motion.h1>
      <motion.p
        className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        은행 프로그램처럼 정돈된 카드 UI로 할 일을 관리하세요. 업무를 하나씩 처리할 때마다 만족감이 커집니다.
      </motion.p>
      <button
        onClick={toggleDarkMode}
        className="mt-8 inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800"
      >
        {darkMode ? '라이트 모드' : '다크 모드'}
      </button>
    </header>
  );
};

export default Header;