import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  onLogin: () => void;
}

const USER = "admin@admin.com";
const PASS = "padia2026";

const AdminLogin: React.FC<Props> = ({ onLogin }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (user === USER && pass === PASS) {
        localStorage.setItem("padia_admin_auth", "1");
        setError("");
        onLogin();
      } else {
        setError("Usuario o contraseña incorrectos");
      }
      setLoading(false);
    }, 400);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <form
        onSubmit={handleSubmit}
        className="bg-card p-8 rounded-lg shadow-md w-full max-w-xs space-y-4 border"
      >
        <h2 className="text-xl font-bold mb-2 text-center">Acceso Admin</h2>
        <Input
          type="email"
          placeholder="Usuario"
          value={user}
          onChange={e => setUser(e.target.value)}
          autoFocus
          required
        />
        <Input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={e => setPass(e.target.value)}
          required
        />
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;
