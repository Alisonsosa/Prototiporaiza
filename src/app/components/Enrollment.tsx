import { useState } from "react";
import { useNavigate } from "react-router";
import {
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Award
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";

export function Enrollment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    modality: "presencial",
    paymentPlan: "full",
    termsAccepted: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen py-12" style={{ background: "linear-gradient(135deg, #F3EBF9, #ffffff, #F3EBF9)" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card className="border-2" style={{ borderColor: "#1D9E7540", background: "linear-gradient(135deg, #E8F7F3, #F3FFF9)" }}>
            <CardContent className="p-12 text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full" style={{ background: "#1D9E75" }}>
                <CheckCircle2 className="h-10 w-10 text-white" />
              </div>
              <h1 className="mb-4 text-3xl font-bold" style={{ color: "#4A2D72" }}>
                ¡Inscripción enviada con éxito!
              </h1>
              <p className="mb-6 text-lg" style={{ color: "#6B5B7B" }}>
                Hemos recibido tu solicitud para la modalidad <strong style={{ color: "#7B4F9E" }}>{formData.modality}</strong>.
              </p>
              <div className="mb-8 rounded-lg bg-white p-6">
                <h3 className="mb-4 font-semibold" style={{ color: "#4A2D72" }}>Próximos pasos:</h3>
                <div className="space-y-3 text-left">
                  {[
                    `Recibirás un correo de confirmación en ${formData.email} en las próximas 24 horas`,
                    "Nuestro equipo te contactará por teléfono para completar el proceso de matrícula",
                    "Te enviaremos la información de pago y las fechas de inicio del programa",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: "#1D9E75" }}>
                        {i + 1}
                      </span>
                      <p className="text-sm" style={{ color: "#6B5B7B" }} dangerouslySetInnerHTML={{ __html: text.replace(formData.email, `<strong>${formData.email}</strong>`) }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  onClick={() => navigate("/")}
                  className="border-0 text-white"
                  style={{ background: "linear-gradient(135deg, #7B4F9E, #4A2D72)" }}
                >
                  Volver al inicio
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  style={{ borderColor: "#7B4F9E", color: "#7B4F9E" }}
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      city: "",
                      modality: "presencial",
                      paymentPlan: "full",
                      termsAccepted: false,
                    });
                  }}
                >
                  Nueva inscripción
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12" style={{ background: "linear-gradient(135deg, #F3EBF9, #ffffff, #F3EBF9)" }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium" style={{ background: "#F3EBF9", color: "#4A2D72", border: "1px solid #7B4F9E33" }}>
            <Award className="h-4 w-4" style={{ color: "#EF9F27" }} />
            Formulario de inscripción
          </div>
          <h1 className="mb-4 text-4xl font-bold" style={{ color: "#4A2D72" }}>
            Comienza tu viaje artesanal
          </h1>
          <p className="mx-auto max-w-2xl text-lg" style={{ color: "#6B5B7B" }}>
            Completa el formulario para inscribirte en nuestro programa de certificación
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            {/* Personal Information */}
            <Card className="border-2" style={{ borderColor: "#7B4F9E33" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: "#4A2D72" }}>
                  <User className="h-5 w-5" style={{ color: "#7B4F9E" }} />
                  Información personal
                </CardTitle>
                <CardDescription style={{ color: "#6B5B7B" }}>Datos básicos del estudiante</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" style={{ color: "#4A2D72" }}>Nombre *</Label>
                    <Input
                      id="firstName"
                      placeholder="Tu nombre"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" style={{ color: "#4A2D72" }}>Apellidos *</Label>
                    <Input
                      id="lastName"
                      placeholder="Tus apellidos"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email" style={{ color: "#4A2D72" }}>Correo electrónico *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4" style={{ color: "#7B4F9E" }} />
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="pl-10"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" style={{ color: "#4A2D72" }}>Teléfono *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4" style={{ color: "#7B4F9E" }} />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+34 600 000 000"
                        className="pl-10"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" style={{ color: "#4A2D72" }}>Ciudad *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4" style={{ color: "#7B4F9E" }} />
                    <Input
                      id="city"
                      placeholder="Tu ciudad"
                      className="pl-10"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Modality Selection */}
            <Card className="border-2" style={{ borderColor: "#7B4F9E33" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: "#4A2D72" }}>
                  <Calendar className="h-5 w-5" style={{ color: "#7B4F9E" }} />
                  Modalidad de estudio
                </CardTitle>
                <CardDescription style={{ color: "#6B5B7B" }}>Selecciona la modalidad que prefieres</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={formData.modality}
                  onValueChange={(value) => handleInputChange("modality", value)}
                >
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 rounded-lg border-2 p-4" style={{ borderColor: "#7B4F9E40", background: "#F3EBF9" }}>
                      <RadioGroupItem value="presencial" id="presencial" className="mt-0.5" />
                      <div className="flex-1">
                        <Label htmlFor="presencial" className="font-semibold cursor-pointer" style={{ color: "#4A2D72" }}>
                          Presencial intensivo — <span style={{ color: "#EF9F27" }}>€1.890</span>
                        </Label>
                        <p className="text-sm" style={{ color: "#6B5B7B" }}>
                          3h x 2 veces/semana • Grupos reducidos • Acceso completo al taller
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 rounded-lg border-2 p-4" style={{ borderColor: "#4A2D7240", background: "#F3EBF9" }}>
                      <RadioGroupItem value="semipresencial" id="semipresencial" className="mt-0.5" />
                      <div className="flex-1">
                        <Label htmlFor="semipresencial" className="font-semibold cursor-pointer" style={{ color: "#4A2D72" }}>
                          Semipresencial — <span style={{ color: "#EF9F27" }}>€1.490</span>
                        </Label>
                        <p className="text-sm" style={{ color: "#6B5B7B" }}>
                          1 clase presencial/semana • Material online • Seguimiento personalizado
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 rounded-lg border-2 p-4" style={{ borderColor: "#7B4F9E40", background: "#F3EBF9" }}>
                      <RadioGroupItem value="online" id="online" className="mt-0.5" />
                      <div className="flex-1">
                        <Label htmlFor="online" className="font-semibold cursor-pointer" style={{ color: "#4A2D72" }}>
                          Online con envío — <span style={{ color: "#EF9F27" }}>€990</span>
                        </Label>
                        <p className="text-sm" style={{ color: "#6B5B7B" }}>
                          Videos HD • Sesiones live semanales • Kit completo enviado
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 rounded-lg border-2 p-4" style={{ borderColor: "#1D9E7540", background: "#E8F7F3" }}>
                      <RadioGroupItem value="talleres" id="talleres" className="mt-0.5" />
                      <div className="flex-1">
                        <Label htmlFor="talleres" className="font-semibold cursor-pointer" style={{ color: "#4A2D72" }}>
                          Talleres específicos — <span style={{ color: "#EF9F27" }}>Desde €180</span>
                        </Label>
                        <p className="text-sm" style={{ color: "#6B5B7B" }}>
                          Workshops de fin de semana • Técnicas especializadas
                        </p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Payment Plan */}
            <Card className="border-2" style={{ borderColor: "#7B4F9E33" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: "#4A2D72" }}>
                  <CreditCard className="h-5 w-5" style={{ color: "#7B4F9E" }} />
                  Plan de pago
                </CardTitle>
                <CardDescription style={{ color: "#6B5B7B" }}>Elige cómo prefieres realizar el pago</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={formData.paymentPlan}
                  onValueChange={(value) => handleInputChange("paymentPlan", value)}
                >
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 rounded-lg border p-4 hover:bg-[#F3EBF9]/50">
                      <RadioGroupItem value="full" id="full" className="mt-0.5" />
                      <div className="flex-1">
                        <Label htmlFor="full" className="font-semibold cursor-pointer" style={{ color: "#4A2D72" }}>
                          Pago completo
                        </Label>
                        <p className="text-sm" style={{ color: "#6B5B7B" }}>
                          15% de descuento en el precio total
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 rounded-lg border p-4 hover:bg-[#F3EBF9]/50">
                      <RadioGroupItem value="installments" id="installments" className="mt-0.5" />
                      <div className="flex-1">
                        <Label htmlFor="installments" className="font-semibold cursor-pointer" style={{ color: "#4A2D72" }}>
                          Pago fraccionado
                        </Label>
                        <p className="text-sm" style={{ color: "#6B5B7B" }}>
                          Hasta 9 cuotas mensuales sin intereses
                        </p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Additional Comments */}
            <Card className="border-2" style={{ borderColor: "#7B4F9E33" }}>
              <CardHeader>
                <CardTitle style={{ color: "#4A2D72" }}>Comentarios adicionales</CardTitle>
                <CardDescription style={{ color: "#6B5B7B" }}>¿Algo más que quieras compartir? (opcional)</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Cuéntanos sobre tu experiencia previa, expectativas, horarios preferidos, etc."
                  className="min-h-[100px]"
                />
              </CardContent>
            </Card>

            {/* Terms and Submit */}
            <Card className="border-2" style={{ borderColor: "#7B4F9E33" }}>
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) =>
                      handleInputChange("termsAccepted", checked as boolean)
                    }
                  />
                  <div className="space-y-1">
                    <Label htmlFor="terms" className="text-sm font-medium cursor-pointer" style={{ color: "#4A2D72" }}>
                      Acepto los términos y condiciones *
                    </Label>
                    <p className="text-sm" style={{ color: "#6B5B7B" }}>
                      He leído y acepto la política de privacidad y las condiciones de matrícula
                    </p>
                  </div>
                </div>

                <div className="rounded-lg p-4" style={{ background: "#F3EBF9" }}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "#1D9E75" }} />
                    <div className="text-sm" style={{ color: "#4A2D72" }}>
                      <p className="font-semibold mb-1">Lo que incluye tu inscripción:</p>
                      <ul className="space-y-1 ml-4 list-disc" style={{ color: "#6B5B7B" }}>
                        <li>Acceso al programa completo de 6 módulos</li>
                        <li>Kit básico de herramientas profesionales</li>
                        <li>Materiales para cada módulo</li>
                        <li>Certificación oficial de la Asociación de Artesanos</li>
                        <li>Soporte y mentoría durante todo el programa</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full border-0 text-white"
                  style={{ background: formData.termsAccepted ? "linear-gradient(135deg, #7B4F9E, #4A2D72)" : "#C5B8D4" }}
                  disabled={!formData.termsAccepted}
                >
                  Enviar inscripción
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-center text-sm" style={{ color: "#6B5B7B" }}>
                  Al enviar este formulario, recibirás un correo de confirmación en las próximas 24 horas
                </p>
              </CardContent>
            </Card>
          </div>
        </form>
      </div>
    </div>
  );
}
