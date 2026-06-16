import { Link } from "react-router";
import {
  Wrench,
  Package,
  Gem,
  Scissors,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Box
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Resources() {
  const basicKitTools = [
    "Alicates de punta y redondos",
    "Cortadores de alambre",
    "Agujas de enfilado",
    "Tabla de trabajo portátil",
    "Organizador de materiales",
  ];

  const moduleSupplies = [
    "Hilos y cordones variados",
    "Cuentas de diferentes materiales",
    "Alambres de varios calibres",
    "Piedras semipreciosas",
    "Accesorios y cierres",
  ];

  const toolCategories = [
    {
      title: "Herramientas de corte",
      icon: Scissors,
      accent: "#EF9F27",
      bgColor: "#FEF7EC",
      items: [
        "Cortadores de alambre profesionales",
        "Tijeras de precisión",
        "Cortadores de cadena",
        "Alicates de corte diagonal",
      ],
    },
    {
      title: "Herramientas de sujeción",
      icon: Wrench,
      accent: "#7B4F9E",
      bgColor: "#F3EBF9",
      items: [
        "Alicates de punta redonda",
        "Alicates de punta plana",
        "Pinzas de precisión",
        "Tornillo de banco miniatura",
      ],
    },
    {
      title: "Herramientas de acabado",
      icon: Sparkles,
      accent: "#4A2D72",
      bgColor: "#F3EBF9",
      items: [
        "Limas de joyería",
        "Pulidoras manuales",
        "Martillos de texturizado",
        "Mandriles y formadores",
      ],
    },
    {
      title: "Materiales consumibles",
      icon: Package,
      accent: "#1D9E75",
      bgColor: "#E8F7F3",
      items: [
        "Alambres de diferentes calibres",
        "Hilos y cordones especializados",
        "Pegamentos y adhesivos",
        "Productos de limpieza y pulido",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium" style={{ background: "#E8F7F3", color: "#1D9E75", border: "1px solid #1D9E7533" }}>
            <Package className="h-4 w-4" />
            Recursos y materiales
          </div>
          <h1 className="mb-4 text-4xl font-bold" style={{ color: "#4A2D72" }}>
            Todo lo que necesitas
          </h1>
          <p className="mx-auto max-w-2xl text-lg" style={{ color: "#6B5B7B" }}>
            Proporcionamos herramientas profesionales y materiales de calidad para cada nivel
          </p>
        </div>

        {/* Kit Overview */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {/* Basic Kit */}
          <Card className="border-2" style={{ borderColor: "#EF9F2740", background: "linear-gradient(135deg, #FEF7EC, #FFFBF2)" }}>
            <CardHeader>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: "#EF9F27" }}>
                  <Wrench className="h-7 w-7 text-white" />
                </div>
                <Badge className="border-0 text-white" style={{ background: "#EF9F27", color: "#4A2D72" }}>Incluido</Badge>
              </div>
              <CardTitle className="text-2xl" style={{ color: "#4A2D72" }}>Kit básico incluido</CardTitle>
              <CardDescription className="text-base" style={{ color: "#6B5B7B" }}>
                Herramientas esenciales para comenzar tu práctica
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {basicKitTools.map((tool, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "#1D9E75" }} />
                    <span style={{ color: "#4A2D72" }}>{tool}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-white/60 p-4">
                <p className="text-sm font-semibold mb-2" style={{ color: "#4A2D72" }}>Valor del kit:</p>
                <p className="text-2xl font-bold" style={{ color: "#EF9F27" }}>€250</p>
                <p className="text-sm" style={{ color: "#6B5B7B" }}>Incluido sin costo adicional</p>
              </div>
            </CardContent>
          </Card>

          {/* Module Materials */}
          <Card className="border-2" style={{ borderColor: "#7B4F9E40", background: "linear-gradient(135deg, #F3EBF9, #FAF5FF)" }}>
            <CardHeader>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: "#7B4F9E" }}>
                  <Gem className="h-7 w-7 text-white" />
                </div>
                <Badge className="border-0 text-white" style={{ background: "#7B4F9E" }}>Por módulo</Badge>
              </div>
              <CardTitle className="text-2xl" style={{ color: "#4A2D72" }}>Materiales por módulo</CardTitle>
              <CardDescription className="text-base" style={{ color: "#6B5B7B" }}>
                Suministros frescos entregados según avances
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {moduleSupplies.map((supply, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "#1D9E75" }} />
                    <span style={{ color: "#4A2D72" }}>{supply}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-white/60 p-4">
                <p className="text-sm font-semibold mb-2" style={{ color: "#4A2D72" }}>Entregas programadas:</p>
                <p className="text-2xl font-bold" style={{ color: "#7B4F9E" }}>6 paquetes</p>
                <p className="text-sm" style={{ color: "#6B5B7B" }}>Uno por cada módulo del programa</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tool Categories */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold" style={{ color: "#4A2D72" }}>Herramientas profesionales</h2>
            <p className="mx-auto max-w-2xl" style={{ color: "#6B5B7B" }}>
              Trabajarás con herramientas de calidad profesional para garantizar los mejores resultados
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {toolCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="border-2 hover:shadow-lg transition-all" style={{ borderColor: `${category.accent}40` }}>
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg" style={{ background: category.accent }}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-3 font-semibold" style={{ color: "#4A2D72" }}>{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: category.accent }}></span>
                          <span className="text-sm" style={{ color: "#6B5B7B" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quality Guarantee */}
        <div className="mb-16 rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7B4F9E, #4A2D72)" }}>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white/20">
                <Box className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Garantía de calidad RAIZA
              </h2>
              <p className="mb-6 text-lg" style={{ color: "#F3EBF9" }}>
                Todos nuestros materiales son seleccionados cuidadosamente para garantizar
                la mejor experiencia de aprendizaje y resultados profesionales.
              </p>
              <div className="space-y-3">
                {[
                  "Herramientas de marcas reconocidas en joyería",
                  "Materiales certificados y seguros",
                  "Piedras y cuentas de proveedores de confianza",
                  "Garantía de reemplazo por defectos",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "#EF9F27" }} />
                    <span style={{ color: "#F3EBF9" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-white/10 p-8 backdrop-blur-sm">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full" style={{ background: "#EF9F27" }}>
                  <span className="text-2xl font-bold" style={{ color: "#4A2D72" }}>R</span>
                </div>
                <p className="text-sm" style={{ color: "#F3EBF9" }}>
                  Sello de calidad RAIZA Academy
                </p>
              </div>
              <div className="space-y-4 text-center">
                <div className="rounded-lg bg-white/10 p-4">
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="text-sm" style={{ color: "#F3EBF9" }}>Satisfacción garantizada</p>
                </div>
                <div className="rounded-lg bg-white/10 p-4">
                  <p className="text-2xl font-bold text-white">+500</p>
                  <p className="text-sm" style={{ color: "#F3EBF9" }}>Artesanos formados</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-center" style={{ color: "#4A2D72" }}>Recursos adicionales disponibles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-2" style={{ borderColor: "#EF9F2733" }}>
              <CardContent className="p-6">
                <Sparkles className="mb-3 h-8 w-8" style={{ color: "#EF9F27" }} />
                <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>Material didáctico</h3>
                <p className="mb-4 text-sm" style={{ color: "#6B5B7B" }}>
                  Manuales en PDF, plantillas descargables y guías de referencia
                </p>
                <Badge variant="outline" className="border-2" style={{ borderColor: "#EF9F27", color: "#EF9F27" }}>Incluido</Badge>
              </CardContent>
            </Card>

            <Card className="border-2" style={{ borderColor: "#7B4F9E33" }}>
              <CardContent className="p-6">
                <Package className="mb-3 h-8 w-8" style={{ color: "#7B4F9E" }} />
                <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>Materiales premium</h3>
                <p className="mb-4 text-sm" style={{ color: "#6B5B7B" }}>
                  Piedras preciosas, metales nobles y componentes especializados
                </p>
                <Badge variant="outline" className="border-2" style={{ borderColor: "#7B4F9E", color: "#7B4F9E" }}>Opcional</Badge>
              </CardContent>
            </Card>

            <Card className="border-2" style={{ borderColor: "#1D9E7533" }}>
              <CardContent className="p-6">
                <Gem className="mb-3 h-8 w-8" style={{ color: "#1D9E75" }} />
                <h3 className="mb-2 font-semibold" style={{ color: "#4A2D72" }}>Descuentos exclusivos</h3>
                <p className="mb-4 text-sm" style={{ color: "#6B5B7B" }}>
                  15-30% de descuento en proveedores asociados para estudiantes
                </p>
                <Badge variant="outline" className="border-2" style={{ borderColor: "#1D9E75", color: "#1D9E75" }}>Beneficio</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 text-center text-white" style={{ background: "linear-gradient(135deg, #7B4F9E, #4A2D72)" }}>
          <h2 className="mb-4 text-2xl font-bold">¿Listo para trabajar con materiales profesionales?</h2>
          <p className="mb-6" style={{ color: "#F3EBF9" }}>
            Inscríbete y recibe tu kit básico para comenzar desde el primer día
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/enrollment">
              <Button size="lg" className="border-0 font-semibold" style={{ background: "#EF9F27", color: "#4A2D72" }}>
                Inscríbete ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/modalities">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                Ver modalidades
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
