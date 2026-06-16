import { Outlet, Link, useLocation } from "react-router";
import { Gem, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Inicio", path: "/" },
    { name: "Plan de estudios", path: "/curriculum" },
    { name: "Modalidades", path: "/modalities" },
    { name: "Recursos", path: "/resources" },
    { name: "Certificación", path: "/certification" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen" style={{ background: "#FAFAFA" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b backdrop-blur-md" style={{ background: "rgba(74,45,114,0.97)" }}>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "linear-gradient(135deg,#7B4F9E,#4A2D72)" }}>
                <Gem className="h-6 w-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-bold tracking-tight text-white">
                  RAIZA
                </div>
                <div className="text-xs" style={{ color: "#EF9F27" }}>ACADEMIA DE JOYERÍA</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm transition-colors ${
                    isActive(item.path)
                      ? "font-semibold"
                      : "hover:opacity-80"
                  }`}
                  style={{ color: isActive(item.path) ? "#EF9F27" : "#F3EBF9" }}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/enrollment">
                <Button className="border-0 text-white font-semibold" style={{ background: "#EF9F27", color: "#4A2D72" }}>
                  Inscríbete
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden rounded-lg p-2 text-white hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="border-t border-white/20 py-4 md:hidden">
              <div className="flex flex-col gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 text-sm transition-colors ${
                      isActive(item.path) ? "font-semibold" : "opacity-80"
                    }`}
                    style={{ color: isActive(item.path) ? "#EF9F27" : "#F3EBF9" }}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/enrollment" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full border-0 font-semibold" style={{ background: "#EF9F27", color: "#4A2D72" }}>
                    Inscríbete
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t text-gray-300" style={{ background: "#4A2D72" }}>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "linear-gradient(135deg,#7B4F9E,#EF9F27)" }}>
                  <Gem className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">RAIZA</div>
                  <div className="text-xs" style={{ color: "#EF9F27" }}>ACADEMIA DE JOYERÍA</div>
                </div>
              </div>
              <p className="text-sm" style={{ color: "#F3EBF9" }}>
                Formación profesional en bisutería artesanal con certificación oficial.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Enlaces</h3>
              <ul className="space-y-2 text-sm">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="transition-colors hover:opacity-100 opacity-70" style={{ color: "#F3EBF9" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#EF9F27")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#F3EBF9")}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Contacto</h3>
              <ul className="space-y-2 text-sm" style={{ color: "#F3EBF9" }}>
                <li>info@raiza.academy</li>
                <li>+34 900 123 456</li>
                <li>Lunes a Viernes: 9:00 - 18:00</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm" style={{ color: "#F3EBF9" }}>
            <p>&copy; 2026 RAIZA Academia de Joyería Artesanal. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
