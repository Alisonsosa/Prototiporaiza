import { Link } from "react-router";
import { Gem, Award, Users, BookOpen, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #F3EBF9 0%, #ffffff 50%, #F3EBF9 100%)" }}>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%237B4F9E' stroke-opacity='0.08' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }}></div>

        {/* Decorative gem shapes */}
        <div className="absolute top-12 right-20 h-24 w-24 rounded-full opacity-10" style={{ background: "#7B4F9E" }}></div>
        <div className="absolute bottom-8 left-16 h-16 w-16 rounded-full opacity-10" style={{ background: "#EF9F27" }}></div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium" style={{ background: "#F3EBF9", color: "#4A2D72", border: "1px solid #7B4F9E33" }}>
              <Sparkles className="h-4 w-4" style={{ color: "#EF9F27" }} />
              Certificación Oficial 2026
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" style={{ color: "#4A2D72" }}>
              RAIZA Academia de
              <br />
              <span style={{ background: "linear-gradient(135deg, #7B4F9E, #EF9F27)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Joyería Artesanal
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg" style={{ color: "#6B5B7B" }}>
              Domina el arte de la joyería artesanal con un programa integral de certificación.
              Aprende con profesionales, obtén tu certificación oficial y transforma tu pasión en tu profesión.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/enrollment">
                <Button size="lg" className="border-0 text-white text-base px-8 shadow-lg" style={{ background: "linear-gradient(135deg, #7B4F9E, #4A2D72)" }}>
                  Inscríbete ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/curriculum">
                <Button size="lg" variant="outline" className="text-base px-8 border-2" style={{ borderColor: "#7B4F9E", color: "#7B4F9E" }}>
                  Ver plan de estudios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold" style={{ color: "#4A2D72" }}>
              ¿Por qué elegir nuestra academia?
            </h2>
            <p className="mx-auto max-w-2xl text-lg" style={{ color: "#6B5B7B" }}>
              Una formación completa que te prepara para el éxito profesional
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: "#EF9F2733" }}>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg" style={{ background: "#F3EBF9" }}>
                  <Award className="h-6 w-6" style={{ color: "#7B4F9E" }} />
                </div>
                <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>Certificación Oficial</h3>
                <p className="text-sm" style={{ color: "#6B5B7B" }}>
                  Avalada por la Asociación de Artesanos, válida para abrir tu negocio
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: "#7B4F9E33" }}>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg" style={{ background: "#F3EBF9" }}>
                  <BookOpen className="h-6 w-6" style={{ color: "#7B4F9E" }} />
                </div>
                <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>6 Módulos Progresivos</h3>
                <p className="text-sm" style={{ color: "#6B5B7B" }}>
                  Desde fundamentos hasta técnicas avanzadas y proyecto final
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: "#7B4F9E33" }}>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg" style={{ background: "#F3EBF9" }}>
                  <Users className="h-6 w-6" style={{ color: "#4A2D72" }} />
                </div>
                <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>Grupos Reducidos</h3>
                <p className="text-sm" style={{ color: "#6B5B7B" }}>
                  Máximo 8 personas por clase presencial para atención personalizada
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg" style={{ borderColor: "#1D9E7533" }}>
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg" style={{ background: "#E8F7F3" }}>
                  <Gem className="h-6 w-6" style={{ color: "#1D9E75" }} />
                </div>
                <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>Herramientas Pro</h3>
                <p className="text-sm" style={{ color: "#6B5B7B" }}>
                  Kit básico incluido con herramientas profesionales de calidad
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20" style={{ background: "#F3EBF9" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold" style={{ color: "#4A2D72" }}>
                Un programa diseñado para tu éxito
              </h2>
              <p className="mb-6 text-lg" style={{ color: "#6B5B7B" }}>
                Nuestro programa de certificación está estructurado en 6 módulos progresivos
                que te llevarán desde los fundamentos hasta técnicas avanzadas.
              </p>
              <div className="space-y-4">
                {[
                  { num: "1", title: "Fundamentos (4 semanas)", desc: "Herramientas básicas, materiales e historia de la bisutería" },
                  { num: "2", title: "Técnicas Básicas (6 semanas)", desc: "Enfilado, nudos, cierres y montaje básico" },
                  { num: "3", title: "Trabajo con Metales (8 semanas)", desc: "Alambrismo, soldadura fría y texturizado" },
                ].map((item) => (
                  <div key={item.num} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full" style={{ background: "#7B4F9E" }}>
                      <span className="text-xs font-bold text-white">{item.num}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: "#4A2D72" }}>{item.title}</h4>
                      <p className="text-sm" style={{ color: "#6B5B7B" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/curriculum" className="mt-8 inline-block">
                <Button variant="outline" className="border-2" style={{ borderColor: "#7B4F9E", color: "#7B4F9E" }}>
                  Ver programa completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl p-8" style={{ background: "linear-gradient(135deg, #7B4F9E, #4A2D72)" }}>
                {/* Decorative circles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full opacity-20" style={{ background: "#EF9F27" }}></div>
                  <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full opacity-20" style={{ background: "#F3EBF9" }}></div>
                </div>
                <div className="relative flex h-full items-center justify-center">
                  <div className="text-center">
                    <Gem className="mx-auto mb-4 h-24 w-24 text-white opacity-80" />
                    <p className="text-lg font-medium text-white">
                      36 semanas de formación integral
                    </p>
                    <p className="mt-2 text-sm opacity-80" style={{ color: "#F3EBF9" }}>
                      Certificación reconocida oficialmente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #7B4F9E, #4A2D72)" }}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Comienza tu viaje en la bisutería artesanal
          </h2>
          <p className="mb-8 text-lg" style={{ color: "#F3EBF9" }}>
            Inscríbete ahora y obtén un 15% de descuento en la modalidad presencial intensiva
          </p>
          <Link to="/enrollment">
            <Button size="lg" className="border-0 px-8 font-semibold" style={{ background: "#EF9F27", color: "#4A2D72" }}>
              Inscríbete ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
