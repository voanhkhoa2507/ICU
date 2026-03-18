import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Building2, Code2, Briefcase } from 'lucide-react';

const cities = [
  {
    id: 'danang',
    name: 'Đà Nẵng',
    description: 'Trung tâm công nghệ lớn nhất miền Trung, tập trung nhiều tập đoàn đa quốc gia và startup kỳ lân.',
    companies: ['FPT Software', 'KMS Technology', 'Axon Active', 'LogiGear', 'Enouvo'],
    techStack: ['React', 'Java', 'Node.js', 'AWS', 'Python'],
    roles: ['Senior Frontend', 'Java Backend', 'DevOps Engineer', 'QA Automation'],
    color: 'bg-blue-500',
    coords: { top: '40%', left: '70%' }
  },
  {
    id: 'hue',
    name: 'Huế',
    description: 'Thành phố di sản đang chuyển mình mạnh mẽ với các khu CNTT tập trung và nguồn nhân lực trẻ dồi dào.',
    companies: ['SMC Huế', 'Brycen', '3S Intersoft', 'FPT Software Huế'],
    techStack: ['PHP', 'Vue.js', '.NET', 'Flutter'],
    roles: ['Fullstack Developer', 'Mobile Dev', 'Business Analyst'],
    color: 'bg-purple-500',
    coords: { top: '30%', left: '60%' }
  },
  {
    id: 'quynhon',
    name: 'Quy Nhơn',
    description: 'Thung lũng AI của Việt Nam, điểm đến mới nổi cho các dự án trí tuệ nhân tạo và dữ liệu lớn.',
    companies: ['FPT Software (Quy Nhơn)', 'TMA Solutions', 'QAI'],
    techStack: ['Python', 'TensorFlow', 'C++', 'Data Science'],
    roles: ['AI Engineer', 'Data Scientist', 'C++ Developer'],
    color: 'bg-emerald-500',
    coords: { top: '60%', left: '80%' }
  },
  {
    id: 'nhatrang',
    name: 'Nha Trang',
    description: 'Kết hợp hoàn hảo giữa làm việc và tận hưởng cuộc sống (Workation) với cộng đồng IT ngày càng phát triển.',
    companies: ['SweetSoft', 'Khatoco IT', 'Outsourcing Teams'],
    techStack: ['Ruby on Rails', 'React Native', 'Go'],
    roles: ['Ruby Developer', 'Mobile Engineer', 'UI/UX Designer'],
    color: 'bg-orange-500',
    coords: { top: '75%', left: '85%' }
  },
  {
    id: 'vinh',
    name: 'Vinh (Nghệ An)',
    description: 'Cửa ngõ miền Trung với nguồn nhân lực kỹ thuật chất lượng cao từ các trường đại học lớn.',
    companies: ['VinhTech', 'Netsa', 'GoTech'],
    techStack: ['Java', 'Angular', 'Spring Boot'],
    roles: ['Backend Developer', 'System Admin', 'Tester'],
    color: 'bg-red-500',
    coords: { top: '15%', left: '45%' }
  }
];

export default function CareerMap() {
  const [activeCity, setActiveCity] = useState(cities[0]);

  return (
    <section id="career-map" className="py-20 bg-slate-900 text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Map: Bản đồ sự nghiệp Miền Trung</h2>
          <p className="text-lg text-slate-400">
            Khám phá hệ sinh thái công nghệ đa dạng trải dài khắp các tỉnh thành miền Trung. Mỗi thành phố mang một thế mạnh riêng biệt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Map Visualization (Left) */}
          <div className="lg:col-span-5 relative h-[500px] bg-slate-800/50 rounded-3xl border border-slate-700 p-6 backdrop-blur-sm flex items-center justify-center">
            {/* Abstract Vietnam Map Shape */}
            <div className="relative w-full max-w-[300px] h-full">
              {/* A simple SVG path representing the curve of Central Vietnam */}
              <svg viewBox="0 0 100 200" className="w-full h-full opacity-20 absolute inset-0">
                <path d="M30,10 Q50,50 60,100 T80,180" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-slate-500" />
              </svg>

              {cities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setActiveCity(city)}
                  className={`absolute flex items-center gap-3 transition-all duration-300 ${
                    activeCity.id === city.id ? 'scale-110 z-20' : 'scale-100 opacity-60 hover:opacity-100 z-10'
                  }`}
                  style={{ top: city.coords.top, left: city.coords.left, transform: 'translate(-50%, -50%)' }}
                >
                  <div className="relative">
                    <div className={`w-4 h-4 rounded-full ${city.color} relative z-10`} />
                    {activeCity.id === city.id && (
                      <div className={`absolute inset-0 rounded-full ${city.color} animate-ping opacity-75`} />
                    )}
                  </div>
                  <span className={`font-semibold whitespace-nowrap ${activeCity.id === city.id ? 'text-white text-lg drop-shadow-md' : 'text-slate-300 text-sm'}`}>
                    {city.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Info Panel (Right) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCity.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-3xl p-8 shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${activeCity.color} flex items-center justify-center bg-opacity-20`}>
                    <MapPin className={`w-6 h-6 ${activeCity.color.replace('bg-', 'text-')}`} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{activeCity.name}</h3>
                    <p className="text-slate-400 mt-1">{activeCity.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-slate-900/50 rounded-2xl p-5 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-4 text-emerald-400">
                      <Building2 className="w-5 h-5" />
                      <h4 className="font-semibold">Công ty tiêu biểu</h4>
                    </div>
                    <ul className="space-y-2">
                      {activeCity.companies.map((company, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                          {company}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-900/50 rounded-2xl p-5 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-4 text-blue-400">
                      <Code2 className="w-5 h-5" />
                      <h4 className="font-semibold">Tech Stack phổ biến</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeCity.techStack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-800 border border-slate-600 rounded-lg text-sm text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2 bg-slate-900/50 rounded-2xl p-5 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-4 text-orange-400">
                      <Briefcase className="w-5 h-5" />
                      <h4 className="font-semibold">Vị trí đang tuyển dụng (Hot)</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeCity.roles.map((role, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-300 rounded-lg text-sm font-medium">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors">
                    Xem tất cả việc làm tại {activeCity.name}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
