import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, ArrowRight, Home } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // If already authenticated, redirect to home
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const result = signUp(name, email, password);
    if (result.success) {
      navigate("/");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-angola-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-angola-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-angola-black hover:text-angola-red transition-colors mb-12 uppercase tracking-widest"
        >
          <Home size={16} />
          Voltar para a Mateia
        </Link>

        <div className="bg-white rounded-4xl shadow-2xl shadow-black/5 p-10 md:p-12 relative border border-gray-100">
          <div className="space-y-2 mb-10">
            <h1 className="text-4xl font-black tracking-tighter text-angola-black leading-none">
              Junte-se à <br />
              <span className="text-gradient-patriotic">Nossa Elite</span>
            </h1>
            <p className="text-gray-500 text-sm font-medium">
              Crie a sua conta e apoie a revolução digital angolana.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-angola-black ml-1">
                Nome Completo
              </label>
              <div className="relative group">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-angola-red transition-colors"
                  size={18}
                />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full bg-gray-50 border border-gray-100 py-4 pl-12 pr-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-angola-red/10 focus:bg-white focus:border-angola-red/20 transition-all font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-angola-black ml-1">
                Email
              </label>
              <div className="relative group">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-angola-red transition-colors"
                  size={18}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemplo@mateia.ao"
                  className="w-full bg-gray-50 border border-gray-100 py-4 pl-12 pr-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-angola-red/10 focus:bg-white focus:border-angola-red/20 transition-all font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-angola-black ml-1">
                Palavra-passe
              </label>
              <div className="relative group">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-angola-red transition-colors"
                  size={18}
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-100 py-4 pl-12 pr-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-angola-red/10 focus:bg-white focus:border-angola-red/20 transition-all font-medium"
                  required
                />
              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-angola-red text-[11px] font-bold bg-angola-red/5 p-3 rounded-lg border border-angola-red/10"
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              className="w-full py-5 bg-angola-black text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 hover:bg-angola-red transition-all duration-300 shadow-xl shadow-black/10 active:scale-95 group"
            >
              Criar Minha Conta
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-gray-50 text-center">
            <p className="text-gray-400 text-xs font-medium">
              Já tem uma conta?{" "}
              <Link
                to="/sign"
                className="text-angola-black font-bold hover:text-angola-red transition-colors"
              >
                Entrar agora
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
