import {useState, FormEvent} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {X, Mail, Lock} from 'lucide-react';
import {useDemoAuth} from '../contexts/DemoAuthContext';

type Role = 'talent' | 'hr';

type Props = {
  open: boolean;
  role: Role | null;
  onClose: () => void;
};

const ROLE_LABEL: Record<Role, string> = {
  talent: 'Ứng viên IT',
  hr: 'Doanh nghiệp (HR)',
};

export default function DemoAuthModal({open, role, onClose}: Props) {
  const {login} = useDemoAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!role) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      await login(role, email, password);
      onClose();
    } catch (err: any) {
      setMessage(err.message || 'Sai thông tin đăng nhập demo.');
    } finally {
      setLoading(false);
    }
  };

  const hint =
    role === 'talent'
      ? 'Tài khoản demo: talent@icu.vn / talent123'
      : 'Tài khoản demo: hr@icu.vn / hr123';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/40 backdrop-blur-sm pt-24 md:pt-32"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <motion.div
            initial={{scale: 0.95, opacity: 0, y: 20}}
            animate={{scale: 1, opacity: 1, y: 0}}
            exit={{scale: 0.95, opacity: 0, y: 20}}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Đăng nhập {ROLE_LABEL[role]}
                </h2>
                <p className="text-sm text-slate-500">
                  Sử dụng tài khoản demo để trải nghiệm luồng đăng nhập.
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-white px-9 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    placeholder="demo@icu.vn"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Mật khẩu</label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-white px-9 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    placeholder="Mật khẩu demo"
                  />
                </div>
              </div>

              <p className="text-xs text-slate-500">{hint}</p>

              {message && <p className="text-sm text-red-600">{message}</p>}

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? 'Đang kiểm tra…' : 'Đăng nhập demo'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

