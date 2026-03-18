import { motion } from 'motion/react';
import { ArrowRight, MapPin, Code, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 blur-[100px] rounded-full mix-blend-multiply" />
        </div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-orange-400 to-blue-400 blur-[120px] rounded-full mix-blend-multiply" />
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTUsIDIzLCA0MiwgMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
          Đánh thức tiềm năng IT Miền Trung
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6"
        >
          Bệ phóng lý tưởng cho <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
            sự nghiệp công nghệ
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10"
        >
          Kết nối nhân tài IT với hệ sinh thái doanh nghiệp hàng đầu tại Đà Nẵng, Huế, Quy Nhơn. Không cần đi xa, cơ hội lớn ngay tại quê nhà.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group">
            Khám phá Cơ hội
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2">
            Tìm kiếm Nhân tài
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-slate-200 pt-10"
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">5+</h3>
            <p className="text-slate-500 font-medium">Trung tâm Công nghệ</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">500+</h3>
            <p className="text-slate-500 font-medium">Công ty IT hàng đầu</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">10,000+</h3>
            <p className="text-slate-500 font-medium">Tech Talent sẵn sàng</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
