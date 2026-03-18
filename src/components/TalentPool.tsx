import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Star, CheckCircle2, AlertCircle, Sparkles, MapPin, Briefcase, ArrowRight, User } from 'lucide-react';

const candidates = [
  {
    id: 1,
    name: 'Võ Anh Khoa',
    title: 'Network Engineer and System Administrator',
    location: 'Hồ Chí Minh',
    experience: 'Năm 3',
    matchScore: 98,
    skills: [
      { name: 'React', match: true },
      { name: 'TypeScript', match: true },
      { name: 'Node.js', match: true },
      { name: 'AWS', match: false }
    ],
    avatar: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    id: 2,
    name: 'Nguyễn Ngọc Minh Châu',
    title: 'Fullstack Engineer',
    location: 'Đà Nẵng',
    experience: '3 năm',
    matchScore: 85,
    skills: [
      { name: 'React', match: true },
      { name: 'Vue.js', match: false },
      { name: 'Node.js', match: true },
      { name: 'MongoDB', match: true }
    ],
    avatar: 'https://picsum.photos/seed/user2/100/100'
  },
  {
    id: 3,
    name: 'Lê Hoàng C',
    title: 'Frontend Developer',
    location: 'Quy Nhơn',
    experience: '2 năm',
    matchScore: 72,
    skills: [
      { name: 'React', match: true },
      { name: 'JavaScript', match: true },
      { name: 'CSS/SASS', match: true },
      { name: 'TypeScript', match: false }
    ],
    avatar: 'https://picsum.photos/seed/user3/100/100'
  }
];

export default function TalentPool() {
  const [activeTab, setActiveTab] = useState<'hr' | 'talent'>('hr');

  return (
    <section id="talent-pool" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            AI Matching Technology
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nền tảng kết nối thông minh</h2>
          <p className="text-lg text-slate-600">
            Hệ thống tự động phân tích CV và JD để đề xuất những ứng viên phù hợp nhất. Tiết kiệm 80% thời gian sàng lọc hồ sơ.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-xl border border-slate-200 inline-flex shadow-sm">
            <button
              onClick={() => setActiveTab('hr')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'hr' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Góc nhìn Doanh nghiệp (HR)
            </button>
            <button
              onClick={() => setActiveTab('talent')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'talent' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Góc nhìn Ứng viên
            </button>
          </div>
        </div>

        {/* HR View Mockup */}
        {activeTab === 'hr' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
          >
            {/* Mockup Header */}
            <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-slate-400 text-sm font-mono">HR Dashboard - AI Matcher</span>
              </div>
              <div className="text-white text-sm font-medium bg-slate-800 px-3 py-1 rounded-md">
                Đang tuyển: Senior React Developer
              </div>
            </div>

            <div className="flex flex-col md:flex-row h-full min-h-[600px]">
              {/* Sidebar Filters */}
              <div className="w-full md:w-64 bg-slate-50 border-r border-slate-200 p-6">
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Filter className="w-4 h-4" /> Bộ lọc
                  </h3>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Tìm kỹ năng..." 
                      className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Kỹ năng bắt buộc</h4>
                    <div className="space-y-2">
                      {['React', 'TypeScript', 'Node.js'].map(skill => (
                        <label key={skill} className="flex items-center gap-2">
                          <input type="checkbox" defaultChecked className="rounded text-blue-600 focus:ring-blue-500" />
                          <span className="text-sm text-slate-600">{skill}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Địa điểm</h4>
                    <select className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600">
                      <option>Tất cả miền Trung</option>
                      <option>Đà Nẵng</option>
                      <option>Huế</option>
                      <option>Quy Nhơn</option>
                    </select>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Kinh nghiệm</h4>
                    <input type="range" min="0" max="10" defaultValue="3" className="w-full accent-blue-600" />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>0 năm</span>
                      <span>3+ năm</span>
                      <span>10 năm</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 bg-white">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-slate-900">Ứng viên đề xuất (12)</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    Sắp xếp theo: <span className="font-semibold text-slate-900">% Phù hợp (AI)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {candidates.map((candidate, index) => (
                    <motion.div 
                      key={candidate.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-5 rounded-2xl border ${candidate.matchScore > 90 ? 'border-emerald-200 bg-emerald-50/30' : 'border-slate-200 bg-white'} hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start sm:items-center gap-6`}
                    >
                      {/* Avatar & Info */}
                      <div className="flex items-center gap-4 flex-1">
                        <img src={candidate.avatar} alt={candidate.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-slate-900 text-lg">{candidate.name}</h4>
                            {candidate.matchScore > 90 && (
                              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded flex items-center gap-1">
                                <Star className="w-3 h-3 fill-current" /> Top Match
                              </span>
                            )}
                          </div>
                          <p className="text-slate-600 font-medium">{candidate.title}</p>
                          <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {candidate.location}</span>
                            <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {candidate.experience}</span>
                          </div>
                        </div>
                      </div>

                      {/* Skills Analysis */}
                      <div className="flex-1 w-full sm:w-auto">
                        <div className="flex flex-wrap gap-2">
                          {candidate.skills.map(skill => (
                            <span 
                              key={skill.name} 
                              className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 border ${
                                skill.match 
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                                  : 'bg-slate-50 text-slate-500 border-slate-200'
                              }`}
                            >
                              {skill.match ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Match Score */}
                      <div className="flex flex-col items-center justify-center min-w-[100px]">
                        <div className="relative w-16 h-16 flex items-center justify-center">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            <path
                              className="text-slate-100"
                              strokeWidth="3"
                              stroke="currentColor"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                              className={candidate.matchScore > 90 ? 'text-emerald-500' : candidate.matchScore > 80 ? 'text-blue-500' : 'text-orange-500'}
                              strokeDasharray={`${candidate.matchScore}, 100`}
                              strokeWidth="3"
                              strokeLinecap="round"
                              stroke="currentColor"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                          <div className="absolute flex flex-col items-center justify-center">
                            <span className="text-lg font-bold text-slate-900">{candidate.matchScore}%</span>
                          </div>
                        </div>
                        <span className="text-xs text-slate-500 mt-1 font-medium">Độ phù hợp</span>
                      </div>
                      
                      {/* Action */}
                      <div className="hidden sm:block">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Talent View Mockup */}
        {activeTab === 'talent' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 text-center max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Tạo hồ sơ Tech Talent</h3>
            <p className="text-slate-600 mb-8">
              Chỉ cần upload CV hoặc điền thông tin một lần. AI của chúng tôi sẽ tự động phân tích kỹ năng và kết nối bạn với những cơ hội tốt nhất tại miền Trung.
            </p>
            <div className="space-y-4">
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
                Upload CV (PDF, DOCX)
              </button>
              <button className="w-full py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-semibold transition-colors">
                Nhập thông tin thủ công
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
