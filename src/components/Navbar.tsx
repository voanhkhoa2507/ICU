import { useState } from 'react';
import { Menu, X, ChevronDown, Briefcase, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">CentralTech</span>
            </a>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Về chúng tôi</a>
              <a href="#career-map" className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Career Map</a>
              <a href="#talent-pool" className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Talent Pool</a>
              <a href="#blog" className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Blog</a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="relative">
              <button 
                onClick={() => setIsAuthOpen(!isAuthOpen)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Đăng nhập / Đăng ký
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isAuthOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden"
                  >
                    <div className="p-2">
                      <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 rounded-lg transition-colors group">
                        <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-100">
                          <User className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">Dành cho Ứng viên</p>
                          <p className="text-xs text-slate-500">Tìm việc & Phát triển</p>
                        </div>
                      </a>
                      <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 rounded-lg transition-colors group">
                        <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-100">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">Dành cho Doanh nghiệp</p>
                          <p className="text-xs text-slate-500">Tuyển dụng nhân tài</p>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">
                  <User className="w-5 h-5 text-blue-600" />
                  Ứng viên
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">
                  <Briefcase className="w-5 h-5 text-emerald-600" />
                  Doanh nghiệp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
