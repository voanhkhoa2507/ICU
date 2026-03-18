import { motion } from 'motion/react';
import { Target, TrendingUp, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Về sứ mệnh của chúng tôi</h2>
          <p className="text-lg text-slate-600">
            Chúng tôi tin rằng miền Trung không chỉ là dải đất đầy nắng gió, mà còn là một "Thung lũng Silicon" đang vươn mình mạnh mẽ của Việt Nam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
          >
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Giữ chân nhân tài</h3>
            <p className="text-slate-600 leading-relaxed">
              Xóa bỏ định kiến "phải vào Nam ra Bắc mới có cơ hội". Chúng tôi mang đến những vị trí hấp dẫn nhất ngay tại quê hương bạn.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
          >
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Phát triển hệ sinh thái</h3>
            <p className="text-slate-600 leading-relaxed">
              Kết nối các doanh nghiệp IT, startup và các trường đại học để tạo ra một môi trường công nghệ sôi động, đổi mới và bền vững.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
          >
            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Cộng đồng gắn kết</h3>
            <p className="text-slate-600 leading-relaxed">
              Xây dựng một cộng đồng IT miền Trung vững mạnh, nơi mọi người cùng chia sẻ kiến thức, kinh nghiệm và hỗ trợ lẫn nhau.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
