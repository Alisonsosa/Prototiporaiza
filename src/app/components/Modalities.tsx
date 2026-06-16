import { Link } from "react-router";
import {
  Users,
  Wifi,
  Calendar,
  Package,
  Video,
  MessageCircle,
  Award,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Modalities() {
  const modalities = [
    {
      title: "Presencial intensivo",
      description: "Inmersión total en el arte de la bisutería",
      icon: Users,
      accent: "#7B4F9E",
      bgColor: "#F3EBF9",
      borderColor: "#7B4F9E40",
      popular: true,
      features: [
        { icon: Calendar, text: "Clases de 3 horas" },
        { icon: Calendar, text: "2 veces por semana" },
        { icon: Users, text: "Grupos reducidos (8 personas)" },
        { icon: Package, text: "Acceso completo al taller" },
        { icon: Package, text: "Kit básico incluido" },
        { icon: Award, text: "Certificación oficial" },
      ],
      highlights: [
        "Atención personalizada del instructor",
        "Uso de herramientas profesionales del taller",
        "Networking con otros artesanos",
        "Práctica intensiva con materiales incluidos",
      ],
      price: "1.890€",
      duration: "9 meses",
    },
    {
      title: "Semipresencial",
      description: "Combina flexibilidad con práctica guiada",
      icon: Video,
      accent: "#4A2D72",
      bgColor: "#F3EBF9",
      borderColor: "#4A2D7240",
      popular: false,
      features: [
        { icon: Calendar, text: "1 clase presencial semanal" },
        { icon: Video, text: "Material teórico online" },
        { icon: MessageCircle, text: "Seguimiento personalizado" },
        { icon: Package, text: "Kit de materiales incluido" },
        { icon: Wifi, text: "Acceso a plataforma 24/7" },
        { icon: Award, text: "Certificación oficial" },
      ],
      highlights: [
        "Ideal para quienes trabajan o estudian",
        "Teoría a tu propio ritmo",
        "Práctica supervisada semanalmente",
        "Soporte online entre clases",
      ],
      price: "1.490€",
      duration: "9 meses",
    },
    {
      title: "Online con envío",
      description: "Aprende desde casa con kit completo",
      icon: Wifi,
      accent: "#7B4F9E",
      bgColor: "#F3EBF9",
      borderColor: "#7B4F9E40",
      popular: false,
      features: [
        { icon: Video, text: "Videos tutoriales HD" },
        { icon: Calendar, text: "Sesiones en vivo semanales" },
        { icon: Package, text: "Kit completo por correo" },
        { icon: MessageCircle, text: "Comunidad privada" },
        { icon: Video, text: "Acceso ilimitado al contenido" },
        { icon: Award, text: "Certificación oficial" },
      ],
      highlights: [
        "Estudia desde cualquier lugar",
        "Videos de alta calidad con zoom en detalles",
        "Sesiones Q&A en vivo con instructores",
        "Red de estudiantes internacionales",
      ],
      price: "990€",
      duration: "12 meses de acceso",
    },
    {
      title: "Talleres específicos",
      description: "Workshops especializados de fin de semana",
      icon: Award,
      accent: "#1D9E75",
      bgColor: "#E8F7F3",
      borderColor: "#1D9E7540",
      popular: false,
      features: [
        { icon: Calendar, text: "Workshops de fin de semana" },
        { icon: Award, text: "Técnicas especializadas" },
        { icon: Users, text: "Ideal para complementar" },
        { icon: Award, text: "Certificado de participación" },
        { icon: Package, text: "Materiales incluidos" },
        { icon: Video, text: "Acceso a grabaciones" },
      ],
      highlights: [
        "Profundiza en técnicas específicas",
        "Perfecto como formación continua",
        "Instructores invitados especialistas",
        "Proyectos intensivos de 2 días",
      ],
      price: "Desde 180€",
      duration: "Por workshop",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium" style={{ background: "#F3EBF9", color: "#4A2D72", border: "1px solid #7B4F9E33" }}>
            <Calendar className="h-4 w-4" style={{ color: "#7B4F9E" }} />
            Modalidades de estudio
          </div>
          <h1 className="mb-4 text-4xl font-bold" style={{ color: "#4A2D72" }}>
            Opciones flexibles
          </h1>
          <p className="mx-auto max-w-2xl text-lg" style={{ color: "#6B5B7B" }}>
            Elige la modalidad que mejor se adapte a tu ritmo de vida y objetivos. Todas incluyen certificación oficial.
          </p>
        </div>

        {/* Modalities Grid */}
        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          {modalities.map((modality, index) => {
            const Icon = modality.icon;
            return (
              <Card key={index} className="border-2 relative overflow-hidden transition-all hover:shadow-xl" style={{ borderColor: modality.borderColor }}>
                {modality.popular && (
                  <div className="absolute right-0 top-0">
                    <Badge className="rounded-none rounded-bl-lg border-0 px-3 py-1 text-white" style={{ background: "#EF9F27", color: "#4A2D72" }}>
                      Más popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: modality.accent }}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl" style={{ color: "#4A2D72" }}>{modality.title}</CardTitle>
                  <CardDescription className="text-base" style={{ color: "#6B5B7B" }}>{modality.description}</CardDescription>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-bold" style={{ color: "#EF9F27" }}>{modality.price}</span>
                    <span className="text-sm" style={{ color: "#6B5B7B" }}>/ {modality.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {modality.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <FeatureIcon className="h-4 w-4 flex-shrink-0" style={{ color: "#7B4F9E" }} />
                          <span className="text-sm" style={{ color: "#6B5B7B" }}>{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Highlights */}
                  <div className="rounded-lg p-4" style={{ background: modality.bgColor }}>
                    <p className="mb-3 text-sm font-semibold" style={{ color: "#4A2D72" }}>Lo mejor de esta modalidad:</p>
                    <div className="space-y-2">
                      {modality.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: "#1D9E75" }} />
                          <span className="text-sm" style={{ color: "#4A2D72" }}>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to="/enrollment" className="block">
                    <Button className="w-full border-0 text-white" style={{ background: modality.accent }}>
                      Inscribirme en {modality.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Comparison Section */}
        <Card className="mb-12 border-2" style={{ borderColor: "#7B4F9E33" }}>
          <CardHeader>
            <CardTitle style={{ color: "#4A2D72" }}>¿No estás seguro cuál elegir?</CardTitle>
            <CardDescription style={{ color: "#6B5B7B" }}>Compara las características principales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{ background: "#F3EBF9" }}>
                    <th className="py-3 pr-4 text-left font-semibold" style={{ color: "#4A2D72" }}>Característica</th>
                    <th className="px-4 py-3 text-center font-semibold" style={{ color: "#4A2D72" }}>Presencial</th>
                    <th className="px-4 py-3 text-center font-semibold" style={{ color: "#4A2D72" }}>Semipresencial</th>
                    <th className="px-4 py-3 text-center font-semibold" style={{ color: "#4A2D72" }}>Online</th>
                    <th className="pl-4 py-3 text-center font-semibold" style={{ color: "#4A2D72" }}>Talleres</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 pr-4" style={{ color: "#6B5B7B" }}>Clases presenciales</td>
                    <td className="px-4 py-3 text-center"><CheckCircle2 className="mx-auto h-5 w-5" style={{ color: "#1D9E75" }} /></td>
                    <td className="px-4 py-3 text-center"><CheckCircle2 className="mx-auto h-5 w-5" style={{ color: "#1D9E75" }} /></td>
                    <td className="px-4 py-3 text-center text-gray-400">—</td>
                    <td className="pl-4 py-3 text-center"><CheckCircle2 className="mx-auto h-5 w-5" style={{ color: "#1D9E75" }} /></td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4" style={{ color: "#6B5B7B" }}>Contenido online</td>
                    <td className="px-4 py-3 text-center text-gray-400">—</td>
                    <td className="px-4 py-3 text-center"><CheckCircle2 className="mx-auto h-5 w-5" style={{ color: "#1D9E75" }} /></td>
                    <td className="px-4 py-3 text-center"><CheckCircle2 className="mx-auto h-5 w-5" style={{ color: "#1D9E75" }} /></td>
                    <td className="pl-4 py-3 text-center"><CheckCircle2 className="mx-auto h-5 w-5" style={{ color: "#1D9E75" }} /></td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4" style={{ color: "#6B5B7B" }}>Kit de materiales</td>
                    <td className="px-4 py-3 text-center"><CheckCircle2 className="mx-auto h-5 w-5" style={{ color: "#1D9E75" }} /></td>
                    <td className="px-4 py-3 text-center"><CheckCircle2 className="mx-auto h-5 w-5" style={{ color: "#1D9E75" }} /></td>
                    <td className="px-4 py-3 text-center"><CheckCircle2 className="mx-auto h-5 w-5" style={{ color: "#1D9E75" }} /></td>
                    <td className="pl-4 py-3 text-center"><CheckCircle2 className="mx-auto h-5 w-5" style={{ color: "#1D9E75" }} /></td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4" style={{ color: "#6B5B7B" }}>Certificación completa</td>
                    <td className="px-4 py-3 text-center"><CheckCircle2 className="mx-auto h-5 w-5" style={{ color: "#1D9E75" }} /></td>
                    <td className="px-4 py-3 text-center"><CheckCircle2 className="mx-auto h-5 w-5" style={{ color: "#1D9E75" }} /></td>
                    <td className="px-4 py-3 text-center"><CheckCircle2 className="mx-auto h-5 w-5" style={{ color: "#1D9E75" }} /></td>
                    <td className="pl-4 py-3 text-center text-xs" style={{ color: "#6B5B7B" }}>Participación</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4" style={{ color: "#6B5B7B" }}>Flexibilidad horaria</td>
                    <td className="px-4 py-3 text-center text-xs" style={{ color: "#6B5B7B" }}>Baja</td>
                    <td className="px-4 py-3 text-center text-xs" style={{ color: "#6B5B7B" }}>Media</td>
                    <td className="px-4 py-3 text-center text-xs" style={{ color: "#6B5B7B" }}>Alta</td>
                    <td className="pl-4 py-3 text-center text-xs" style={{ color: "#6B5B7B" }}>Fin de semana</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-2" style={{ borderColor: "#EF9F2733" }}>
            <CardContent className="p-6">
              <Package className="mb-3 h-8 w-8" style={{ color: "#EF9F27" }} />
              <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>Kit incluido</h3>
              <p className="text-sm" style={{ color: "#6B5B7B" }}>
                Todas las modalidades incluyen kit básico con herramientas esenciales
              </p>
            </CardContent>
          </Card>

          <Card className="border-2" style={{ borderColor: "#1D9E7533" }}>
            <CardContent className="p-6">
              <Award className="mb-3 h-8 w-8" style={{ color: "#1D9E75" }} />
              <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>Certificación</h3>
              <p className="text-sm" style={{ color: "#6B5B7B" }}>
                Certificado oficial válido para emprender o trabajar profesionalmente
              </p>
            </CardContent>
          </Card>

          <Card className="border-2" style={{ borderColor: "#7B4F9E33" }}>
            <CardContent className="p-6">
              <MessageCircle className="mb-3 h-8 w-8" style={{ color: "#7B4F9E" }} />
              <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>Soporte continuo</h3>
              <p className="text-sm" style={{ color: "#6B5B7B" }}>
                Acceso a tutores y comunidad durante todo el programa
              </p>
            </CardContent>
          </Card>

          <Card className="border-2" style={{ borderColor: "#7B4F9E33" }}>
            <CardContent className="p-6">
              <Calendar className="mb-3 h-8 w-8" style={{ color: "#4A2D72" }} />
              <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>Pago flexible</h3>
              <p className="text-sm" style={{ color: "#6B5B7B" }}>
                Opciones de pago fraccionado sin intereses disponibles
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl p-8 text-center text-white" style={{ background: "linear-gradient(135deg, #7B4F9E, #4A2D72)" }}>
          <h2 className="mb-4 text-2xl font-bold">¿Necesitas ayuda para elegir?</h2>
          <p className="mb-6" style={{ color: "#F3EBF9" }}>
            Nuestro equipo está aquí para ayudarte a encontrar la modalidad perfecta para ti
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/enrollment">
              <Button size="lg" className="border-0 font-semibold" style={{ background: "#EF9F27", color: "#4A2D72" }}>
                Inscríbete ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              Contactar asesor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
