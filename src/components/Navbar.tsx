import { useState } from 'react';
import { Menu, X, ChevronDown, Briefcase, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useDemoAuth } from '../contexts/DemoAuthContext';
import DemoAuthModal from './DemoAuthModal';

type Role = 'talent' | 'hr';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authRole, setAuthRole] = useState<Role | null>(null);
  const { user, logout } = useDemoAuth();

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">ICU</span>
            </a>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Về chúng tôi</a>
              <a href="#career-map" className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Career Map</a>
              <a href="#talent-pool" className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Talent Pool</a>
              <a href="#blog" className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Blog</a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            {!user ? (
              <div className="relative">
                <button
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  onClick={() => {
                    setAuthRole('talent');
                    setAuthOpen(true);
                  }}
                >
                  Đăng nhập / Đăng ký
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-lg border border-slate-100 overflow-hidden">
                  <button
                    className="flex w-full items-center gap-3 px-4 py-3 hover:bg-slate-50 text-left text-sm"
                    onClick={() => {
                      setAuthRole('talent');
                      setAuthOpen(true);
                    }}
                  >
                    <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Dành cho Ứng viên</p>
                      <p className="text-xs text-slate-500">Tìm việc & Phát triển</p>
                    </div>
                  </button>
                  <button
                    className="flex w-full items-center gap-3 px-4 py-3 hover:bg-slate-50 text-left text-sm"
                    onClick={() => {
                      setAuthRole('hr');
                      setAuthOpen(true);
                    }}
                  >
                    <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Dành cho Doanh nghiệp</p>
                      <p className="text-xs text-slate-500">Tuyển dụng nhân tài</p>
                    </div>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {user.role === 'hr' ? 'HR' : 'T'}
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-slate-900">
                    {user.role === 'hr' ? 'Doanh nghiệp demo' : 'Ứng viên demo'}
                  </p>
                  <button
                    onClick={logout}
                    className="text-xs text-slate-500 hover:text-blue-600"
                  >
                    Đăng xuất
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Về chúng tôi</a>
              <a href="#career-map" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Career Map</a>
              <a href="#talent-pool" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Talent Pool</a>
              <a href="#blog" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Blog</a>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Đăng nhập / Đăng ký</p>
                {!user ? (
                  <>
                    <button
                      className="flex w-full items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
                      onClick={() => {
                        setAuthRole('talent');
                        setAuthOpen(true);
                      }}
                    >
                      <User className="w-5 h-5 text-blue-600" />
                      Ứng viên
                    </button>
                    <button
                      className="flex w-full items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
                      onClick={() => {
                        setAuthRole('hr');
                        setAuthOpen(true);
                      }}
                    >
                      <Briefcase className="w-5 h-5 text-emerald-600" />
                      Doanh nghiệp
                    </button>
                  </>
                ) : (
                  <button
                    className="flex w-full items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
                    onClick={logout}
                  >
                    <Briefcase className="w-5 h-5 text-emerald-600" />
                    Đăng xuất
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <DemoAuthModal
        open={authOpen}
        role={authRole}
        onClose={() => setAuthOpen(false)}
      />
    </nav>
  );
}
