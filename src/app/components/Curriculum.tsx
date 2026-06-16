import { Link } from "react-router";
import { Clock, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export function Curriculum() {
  const modules = [
    {
      number: 1,
      title: "Fundamentos",
      duration: "4 semanas",
      content: "Herramientas básicas, materiales, historia de la bisutería",
      topics: [
        "Introducción a la bisutería artesanal",
        "Herramientas esenciales y su uso",
        "Tipos de materiales y sus propiedades",
        "Historia y evolución de la joyería",
        "Principios de diseño y composición",
      ],
      accent: "#7B4F9E",
      borderColor: "#7B4F9E40",
    },
    {
      number: 2,
      title: "Técnicas básicas",
      duration: "6 semanas",
      content: "Enfilado, nudos, cierres, montaje básico",
      topics: [
        "Técnicas de enfilado profesional",
        "Nudos decorativos y funcionales",
        "Colocación de cierres y broches",
        "Montaje de piezas básicas",
        "Acabados y terminaciones",
      ],
      accent: "#4A2D72",
      borderColor: "#4A2D7240",
    },
    {
      number: 3,
      title: "Trabajo con metales",
      duration: "8 semanas",
      content: "Alambrismo, soldadura fría, texturizado",
      topics: [
        "Técnicas de alambrismo y wire wrapping",
        "Soldadura fría y uniones",
        "Texturizado y acabados metálicos",
        "Creación de componentes personalizados",
        "Tratamiento y mantenimiento de metales",
      ],
      accent: "#EF9F27",
      borderColor: "#EF9F2740",
    },
    {
      number: 4,
      title: "Piedras y cristales",
      duration: "6 semanas",
      content: "Engastes, combinaciones, propiedades",
      topics: [
        "Tipos de piedras y cristales",
        "Técnicas de engaste profesional",
        "Combinaciones cromáticas y estéticas",
        "Propiedades y significados",
        "Cuidado y limpieza de piedras",
      ],
      accent: "#1D9E75",
      borderColor: "#1D9E7540",
    },
    {
      number: 5,
      title: "Técnicas avanzadas",
      duration: "8 semanas",
      content: "Macramé, tejido, técnicas mixtas",
      topics: [
        "Macramé aplicado a bisutería",
        "Técnicas de tejido con cuentas",
        "Combinación de técnicas mixtas",
        "Diseño de piezas complejas",
        "Innovación y experimentación",
      ],
      accent: "#7B4F9E",
      borderColor: "#7B4F9E40",
    },
    {
      number: 6,
      title: "Proyecto final",
      duration: "4 semanas",
      content: "Colección personal y presentación",
      topics: [
        "Diseño de colección personal (mínimo 5 piezas)",
        "Desarrollo de concepto y marca",
        "Producción de piezas finales",
        "Fotografía de producto",
        "Presentación y defensa del proyecto",
      ],
      accent: "#4A2D72",
      borderColor: "#4A2D7240",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium" style={{ background: "#F3EBF9", color: "#4A2D72", border: "1px solid #7B4F9E33" }}>
            <BookOpen className="h-4 w-4" style={{ color: "#7B4F9E" }} />
            Plan de estudios
          </div>
          <h1 className="mb-4 text-4xl font-bold" style={{ color: "#4A2D72" }}>
            Programa de Certificación
          </h1>
          <p className="mx-auto max-w-2xl text-lg" style={{ color: "#6B5B7B" }}>
            Un plan integral para dominar el arte de la bisutería artesanal en 6 módulos progresivos
          </p>
        </div>

        {/* Quick Overview Table */}
        <Card className="mb-12 border-2" style={{ borderColor: "#7B4F9E33" }}>
          <CardHeader>
            <CardTitle style={{ color: "#4A2D72" }}>Resumen del programa</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow style={{ background: "#F3EBF9" }}>
                    <TableHead style={{ color: "#4A2D72" }}>Módulo</TableHead>
                    <TableHead style={{ color: "#4A2D72" }}>Duración</TableHead>
                    <TableHead style={{ color: "#4A2D72" }}>Contenido principal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {modules.map((module) => (
                    <TableRow key={module.number} className="hover:bg-[#F3EBF9]/50">
                      <TableCell className="font-medium" style={{ color: "#4A2D72" }}>
                        {module.number}. {module.title}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2" style={{ color: "#7B4F9E" }}>
                          <Clock className="h-4 w-4" />
                          {module.duration}
                        </div>
                      </TableCell>
                      <TableCell style={{ color: "#6B5B7B" }}>{module.content}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-6 flex items-center justify-between rounded-lg p-4" style={{ background: "#F3EBF9" }}>
              <div>
                <p className="font-semibold" style={{ color: "#4A2D72" }}>Duración total del programa</p>
                <p className="text-sm" style={{ color: "#6B5B7B" }}>Incluye proyecto final y certificación</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold" style={{ color: "#7B4F9E" }}>36 semanas</p>
                <p className="text-sm" style={{ color: "#6B5B7B" }}>~9 meses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Module Cards */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold" style={{ color: "#4A2D72" }}>Contenido detallado</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {modules.map((module) => (
              <Card key={module.number} className="border-2 transition-all hover:shadow-lg" style={{ borderColor: module.borderColor }}>
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg" style={{ background: module.accent }}>
                    <span className="text-xl font-bold text-white">{module.number}</span>
                  </div>
                  <CardTitle className="text-xl" style={{ color: "#4A2D72" }}>{module.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm" style={{ color: "#7B4F9E" }}>
                    <Clock className="h-4 w-4" />
                    {module.duration}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm" style={{ color: "#6B5B7B" }}>{module.content}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold" style={{ color: "#4A2D72" }}>Temas incluidos:</p>
                    {module.topics.map((topic, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: "#1D9E75" }} />
                        <p className="text-sm" style={{ color: "#6B5B7B" }}>{topic}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-2" style={{ borderColor: "#7B4F9E33" }}>
            <CardContent className="p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "#F3EBF9" }}>
                <BookOpen className="h-5 w-5" style={{ color: "#7B4F9E" }} />
              </div>
              <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>Material didáctico</h3>
              <p className="text-sm" style={{ color: "#6B5B7B" }}>
                Manual completo en PDF, videos tutoriales y plantillas descargables
              </p>
            </CardContent>
          </Card>

          <Card className="border-2" style={{ borderColor: "#1D9E7533" }}>
            <CardContent className="p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "#E8F7F3" }}>
                <CheckCircle2 className="h-5 w-5" style={{ color: "#1D9E75" }} />
              </div>
              <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>Evaluaciones</h3>
              <p className="text-sm" style={{ color: "#6B5B7B" }}>
                Ejercicios prácticos al final de cada módulo con feedback personalizado
              </p>
            </CardContent>
          </Card>

          <Card className="border-2" style={{ borderColor: "#EF9F2733" }}>
            <CardContent className="p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "#FEF7EC" }}>
                <Clock className="h-5 w-5" style={{ color: "#EF9F27" }} />
              </div>
              <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>Horarios flexibles</h3>
              <p className="text-sm" style={{ color: "#6B5B7B" }}>
                Elige entre diferentes modalidades según tu disponibilidad
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl p-8 text-center text-white" style={{ background: "linear-gradient(135deg, #7B4F9E, #4A2D72)" }}>
          <h2 className="mb-4 text-2xl font-bold">¿Listo para comenzar?</h2>
          <p className="mb-6" style={{ color: "#F3EBF9" }}>
            Explora nuestras modalidades de estudio y encuentra la que mejor se adapte a ti
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/modalities">
              <Button size="lg" className="border-0 font-semibold" style={{ background: "#EF9F27", color: "#4A2D72" }}>
                Ver modalidades
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/enrollment">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                Inscríbete ahora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
