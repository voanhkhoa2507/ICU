import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Tại sao Đà Nẵng đang trở thành điểm đến lý tưởng cho Software Engineer?',
    excerpt: 'Chi phí sinh hoạt hợp lý, môi trường sống trong lành và sự đổ bộ của hàng loạt tập đoàn công nghệ lớn đang biến Đà Nẵng thành "miền đất hứa".',
    category: 'Định hướng nghề nghiệp',
    date: '15/03/2026',
    readTime: '5 phút đọc',
    image: 'https://picsum.photos/seed/danang/600/400'
  },
  {
    id: 2,
    title: 'Review môi trường làm việc tại FPT Software Quy Nhơn',
    excerpt: 'Khám phá không gian làm việc hiện đại tại thung lũng AI Quy Nhơn và những đãi ngộ đặc biệt dành cho nhân sự công nghệ.',
    category: 'Review Công ty',
    date: '12/03/2026',
    readTime: '8 phút đọc',
    image: 'https://picsum.photos/seed/quynhon/600/400'
  },
  {
    id: 3,
    title: 'Từ Sài Gòn về Huế lập nghiệp: Câu chuyện của một Senior Backend',
    excerpt: 'Quyết định rời bỏ thành phố nhộn nhịp để trở về quê hương, anh H. đã tìm thấy sự cân bằng hoàn hảo giữa công việc và cuộc sống.',
    category: 'Câu chuyện thành công',
    date: '10/03/2026',
    readTime: '6 phút đọc',
    image: 'https://picsum.photos/seed/hue/600/400'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Cộng đồng IT Miền Trung</h2>
            <p className="text-lg text-slate-600">
              Cập nhật tin tức công nghệ, review môi trường làm việc và những câu chuyện truyền cảm hứng.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Xem tất cả bài viết <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/2]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-3 font-medium">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-slate-600 line-clamp-3">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Xem tất cả bài viết <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
