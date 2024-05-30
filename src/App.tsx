import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface WithMotionProps {
  children: ReactNode;
}

function WithMotion({ children }: WithMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<WithMotion><Home /></WithMotion>} />
      <Route path="/about" element={<WithMotion><About /></WithMotion>} />
      <Route path="/projects" element={<WithMotion><Projects /></WithMotion>} />
    </Routes>
  )
}

export function App() {
  return (
    <Router>
      <div className="px-64 max-lg:p-0 max-lg:pb-60 max-2xl:px-40">
        <Header />
        <AppRoutes />
      </div>
      <Footer />
    </Router>
  );
}
