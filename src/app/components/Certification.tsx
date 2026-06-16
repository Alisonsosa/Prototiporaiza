import { Link } from "react-router";
import {
  Award,
  Briefcase,
  Store,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  ShoppingBag,
  Palette
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import imageFile from "../../imports/image.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Certification() {
  const opportunities = [
    {
      title: "Mercados artesanales",
      description: "Participa en ferias y eventos especializados",
      icon: Store,
      accent: "#EF9F27",
      bgColor: "#FEF7EC",
      benefits: [
        "Acceso a calendario de mercados locales",
        "Descuentos en stands para egresados",
        "Red de contactos con organizadores",
        "Apoyo promocional de la academia",
      ],
    },
    {
      title: "Tienda online propia",
      description: "Lanza tu e-commerce de bisutería artesanal",
      icon: ShoppingBag,
      accent: "#7B4F9E",
      bgColor: "#F3EBF9",
      benefits: [
        "Guía para crear tu tienda online",
        "Consejos de fotografía de producto",
        "Estrategias de marketing digital",
        "Comunidad de emprendedores",
      ],
    },
    {
      title: "Colaboraciones con diseñadores",
      description: "Trabaja con marcas de moda y diseño",
      icon: Palette,
      accent: "#4A2D72",
      bgColor: "#F3EBF9",
      benefits: [
        "Portfolio profesional certificado",
        "Conexiones con diseñadores locales",
        "Oportunidades de colaboración",
        "Experiencia en proyectos reales",
      ],
    },
    {
      title: "Talleres para empresas",
      description: "Imparte workshops corporativos",
      icon: Building2,
      accent: "#1D9E75",
      bgColor: "#E8F7F3",
      benefits: [
        "Formación en facilitación de talleres",
        "Materiales y kits para workshops",
        "Red de empresas clientes",
        "Certificación adicional de instructor",
      ],
    },
  ];

  const certificationBenefits = [
    "Aval de la Asociación de Artesanos",
    "Válido para abrir negocio propio",
    "Reconocido en talleres especializados",
    "Incluye número de registro único",
    "Portfolio digital certificado",
    "Membresía en red de egresados",
  ];

  const careerPaths = [
    {
      title: "Emprendedor independiente",
      description: "Crea y vende tus propias colecciones",
      icon: Briefcase,
      stats: "65% de egresados",
    },
    {
      title: "Artesano de taller",
      description: "Únete a talleres y estudios establecidos",
      icon: Users,
      stats: "25% de egresados",
    },
    {
      title: "Formador/Instructor",
      description: "Enseña y comparte tus conocimientos",
      icon: Award,
      stats: "10% de egresados",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium" style={{ background: "#F3EBF9", color: "#4A2D72", border: "1px solid #7B4F9E33" }}>
            <Award className="h-4 w-4" style={{ color: "#7B4F9E" }} />
            Certificación y oportunidades
          </div>
          <h1 className="mb-4 text-4xl font-bold" style={{ color: "#4A2D72" }}>
            Tu futuro profesional
          </h1>
          <p className="mx-auto max-w-2xl text-lg" style={{ color: "#6B5B7B" }}>
            Obtén certificación oficial y descubre las oportunidades del mercado artesanal
          </p>
        </div>

        {/* Reference Image Section */}
        <div className="mb-16 overflow-hidden rounded-2xl border-2 shadow-lg" style={{ borderColor: "#7B4F9E40" }}>
          <ImageWithFallback
            src={imageFile}
            alt="Certificación y oportunidades en bisutería artesanal"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Official Certification */}
        <div className="mb-16">
          <Card className="border-2" style={{ borderColor: "#7B4F9E40", background: "linear-gradient(135deg, #F3EBF9, #FAF5FF)" }}>
            <CardHeader>
              <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">
                <div className="mb-4 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl sm:mb-0 sm:mr-6" style={{ background: "linear-gradient(135deg, #7B4F9E, #4A2D72)" }}>
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="mb-2 text-2xl" style={{ color: "#4A2D72" }}>Certificación oficial</CardTitle>
                  <CardDescription className="text-base" style={{ color: "#6B5B7B" }}>
                    Al completar el programa recibes certificado avalado por la Asociación de Artesanos,
                    válido para abrir tu propio negocio o trabajar en talleres especializados.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-white p-6">
                  <h3 className="mb-4 font-semibold" style={{ color: "#4A2D72" }}>Incluye:</h3>
                  <div className="space-y-3">
                    {certificationBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "#1D9E75" }} />
                        <span style={{ color: "#6B5B7B" }}>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center rounded-lg bg-white p-6">
                  <div className="mb-4 text-center">
                    <Badge className="mb-4 border-0 px-4 py-2 text-base text-white" style={{ background: "linear-gradient(135deg, #7B4F9E, #4A2D72)" }}>
                      Reconocimiento Oficial
                    </Badge>
                  </div>
                  <div className="space-y-3 text-center">
                    <div className="rounded-lg p-4" style={{ background: "#F3EBF9" }}>
                      <p className="text-sm font-semibold" style={{ color: "#4A2D72" }}>Asociación de Artesanos</p>
                      <p className="text-xs" style={{ color: "#6B5B7B" }}>Aval oficial desde 2018</p>
                    </div>
                    <p className="text-sm" style={{ color: "#6B5B7B" }}>
                      Única academia con certificación reconocida a nivel nacional
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Career Paths */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold" style={{ color: "#4A2D72" }}>Caminos profesionales</h2>
            <p className="mx-auto max-w-2xl" style={{ color: "#6B5B7B" }}>
              Nuestros egresados encuentran su camino en diferentes áreas del mercado artesanal
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {careerPaths.map((path, index) => {
              const Icon = path.icon;
              return (
                <Card key={index} className="border-2 transition-all hover:shadow-lg" style={{ borderColor: "#7B4F9E33" }}>
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg" style={{ background: "#F3EBF9" }}>
                      <Icon className="h-6 w-6" style={{ color: "#7B4F9E" }} />
                    </div>
                    <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>{path.title}</h3>
                    <p className="mb-4 text-sm" style={{ color: "#6B5B7B" }}>{path.description}</p>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" style={{ color: "#1D9E75" }} />
                      <span className="text-sm font-medium" style={{ color: "#1D9E75" }}>{path.stats}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold" style={{ color: "#4A2D72" }}>Oportunidades de negocio</h2>
            <p className="mx-auto max-w-2xl" style={{ color: "#6B5B7B" }}>
              Te ayudamos a monetizar tus habilidades y construir una carrera exitosa
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <Card key={index} className="border-2 hover:shadow-xl transition-all" style={{ borderColor: `${opportunity.accent}40` }}>
                  <CardHeader>
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: opportunity.accent }}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl" style={{ color: "#4A2D72" }}>{opportunity.title}</CardTitle>
                    <CardDescription style={{ color: "#6B5B7B" }}>{opportunity.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg p-4" style={{ background: opportunity.bgColor }}>
                      <p className="mb-3 text-sm font-semibold" style={{ color: "#4A2D72" }}>Te ofrecemos:</p>
                      <div className="space-y-2">
                        {opportunity.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: "#1D9E75" }} />
                            <span className="text-sm" style={{ color: "#4A2D72" }}>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16 rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7B4F9E, #4A2D72)" }}>
          <div className="mb-8 text-center">
            <Sparkles className="mx-auto mb-4 h-12 w-12" style={{ color: "#EF9F27" }} />
            <h2 className="mb-4 text-3xl font-bold text-white">
              Historias de éxito
            </h2>
            <p className="mx-auto max-w-2xl text-lg" style={{ color: "#F3EBF9" }}>
              Nuestros egresados están transformando su pasión en negocios exitosos
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "#EF9F27" }}>
                  <Store className="h-8 w-8" style={{ color: "#4A2D72" }} />
                </div>
                <p className="text-2xl font-bold text-white">78%</p>
              </div>
              <p className="text-center text-sm" style={{ color: "#F3EBF9" }}>
                De nuestros egresados inician su negocio en menos de 6 meses
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "#EF9F27" }}>
                  <TrendingUp className="h-8 w-8" style={{ color: "#4A2D72" }} />
                </div>
                <p className="text-2xl font-bold text-white">€2.500</p>
              </div>
              <p className="text-center text-sm" style={{ color: "#F3EBF9" }}>
                Ingreso mensual promedio después del primer año
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "#EF9F27" }}>
                  <Users className="h-8 w-8" style={{ color: "#4A2D72" }} />
                </div>
                <p className="text-2xl font-bold text-white">500+</p>
              </div>
              <p className="text-center text-sm" style={{ color: "#F3EBF9" }}>
                Artesanos certificados en nuestra red de egresados
              </p>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-2" style={{ borderColor: "#EF9F2733" }}>
            <CardContent className="p-6">
              <Award className="mb-3 h-8 w-8" style={{ color: "#EF9F27" }} />
              <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>Mentoría continua</h3>
              <p className="text-sm" style={{ color: "#6B5B7B" }}>
                Acceso a mentores incluso después de graduarte
              </p>
            </CardContent>
          </Card>

          <Card className="border-2" style={{ borderColor: "#7B4F9E33" }}>
            <CardContent className="p-6">
              <Users className="mb-3 h-8 w-8" style={{ color: "#7B4F9E" }} />
              <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>Red de egresados</h3>
              <p className="text-sm" style={{ color: "#6B5B7B" }}>
                Comunidad activa para colaboraciones y apoyo
              </p>
            </CardContent>
          </Card>

          <Card className="border-2" style={{ borderColor: "#4A2D7233" }}>
            <CardContent className="p-6">
              <Briefcase className="mb-3 h-8 w-8" style={{ color: "#4A2D72" }} />
              <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>Bolsa de trabajo</h3>
              <p className="text-sm" style={{ color: "#6B5B7B" }}>
                Ofertas exclusivas de talleres y marcas
              </p>
            </CardContent>
          </Card>

          <Card className="border-2" style={{ borderColor: "#1D9E7533" }}>
            <CardContent className="p-6">
              <Sparkles className="mb-3 h-8 w-8" style={{ color: "#1D9E75" }} />
              <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>Eventos exclusivos</h3>
              <p className="text-sm" style={{ color: "#6B5B7B" }}>
                Acceso a ferias, exposiciones y workshops
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 text-center text-white" style={{ background: "linear-gradient(135deg, #7B4F9E, #4A2D72)" }}>
          <h2 className="mb-4 text-2xl font-bold">Comienza tu carrera profesional hoy</h2>
          <p className="mb-6" style={{ color: "#F3EBF9" }}>
            Únete a nuestra red de artesanos certificados y construye el futuro que sueñas
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/enrollment">
              <Button size="lg" className="border-0 font-semibold" style={{ background: "#EF9F27", color: "#4A2D72" }}>
                Inscríbete ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/curriculum">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                Ver plan de estudios
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
