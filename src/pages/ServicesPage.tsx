import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Truck, 
  Package, 
  Users, 
  Clock, 
  CheckCircle,
  Snowflake
} from "lucide-react";

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero section */}
      <section className="relative py-20 bg-ice-700">
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
            <div className="h-1 w-20 bg-white mt-4 mb-8 rounded-full" />
            <p className="text-xl">
              Ofrecemos soluciones integrales de distribución y atención personalizada, diseñadas para satisfacer las necesidades específicas de cada cliente.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMTVMNDUgNDVNMTUgNDVMNDUgMTUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')]"></div>
      </section>
      
      {/* Main content */}
      <section className="py-20">
        <div className="container">
          <SectionTitle 
            title="Servicios que Ofrecemos" 
            subtitle="Soluciones completas y personalizadas para sus necesidades de hielo"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Service 1 */}
            <Card className="bg-white shadow-lg border-ice-100 hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-16 h-16 mb-4 rounded-full bg-ice-100 flex items-center justify-center text-ice-600">
                  <Users size={32} />
                </div>
                <CardTitle className="text-xl text-ice-700">Venta y Distribución</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Proveemos hielo al público y a mayoristas, garantizando calidad y precios competitivos para satisfacer todas sus necesidades.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-ice-500 mr-2" />
                    <span>Venta al público</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-ice-500 mr-2" />
                    <span>Distribución mayorista</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-ice-500 mr-2" />
                    <span>Precios competitivos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Service 2 */}
            <Card className="bg-white shadow-lg border-ice-100 hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-16 h-16 mb-4 rounded-full bg-ice-100 flex items-center justify-center text-ice-600">
                  <Truck size={32} />
                </div>
                <CardTitle className="text-xl text-ice-700">Entrega a Domicilio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Ofrecemos un servicio eficiente y puntual de entrega a domicilio, con diversas presentaciones de bolsas de hielo para su conveniencia.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-ice-500 mr-2" />
                    <span>Entrega puntual</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-ice-500 mr-2" />
                    <span>Diversas presentaciones</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-ice-500 mr-2" />
                    <span>Servicio confiable</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Service 3 */}
            <Card className="bg-white shadow-lg border-ice-100 hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-16 h-16 mb-4 rounded-full bg-ice-100 flex items-center justify-center text-ice-600">
                  <Snowflake size={32} />
                </div>
                <CardTitle className="text-xl text-ice-700">Préstamo de Conservadores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Para nuestros clientes frecuentes, proporcionamos conservadores de diversas capacidades, asegurando la calidad del producto hasta su destino final.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-ice-500 mr-2" />
                    <span>Conservador de 20 bolsas de 5 kg</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-ice-500 mr-2" />
                    <span>Conservador de 40 bolsas de 5 kg</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-ice-500 mr-2" />
                    <span>Conservador de 60 y 100 bolsas de 5 kg</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Conservadores section */}
          <div className="mt-20">
            <SectionTitle 
              title="Préstamo de Conservadores" 
              subtitle="Comprometidos con la calidad y la satisfacción de nuestros clientes"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  En Hielo Polar del Centro, nos aseguramos de que nuestro producto mantenga su calidad hasta llegar al consumidor final. Por ello, ofrecemos a nuestros clientes frecuentes el préstamo de conservadores adaptados a sus necesidades.
                </p>
                <h3 className="text-xl font-semibold text-ice-700 mb-4">
                  Capacidades disponibles:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-ice-50 p-4 rounded-lg">
                    <h4 className="font-medium text-ice-700">Conservador pequeño</h4>
                    <p className="text-gray-600">20 bolsas de 5 kg</p>
                  </div>
                  <div className="bg-ice-50 p-4 rounded-lg">
                    <h4 className="font-medium text-ice-700">Conservador mediano</h4>
                    <p className="text-gray-600">40 bolsas de 5 kg</p>
                  </div>
                  <div className="bg-ice-50 p-4 rounded-lg">
                    <h4 className="font-medium text-ice-700">Conservador grande</h4>
                    <p className="text-gray-600">60 bolsas de 5 kg</p>
                  </div>
                  <div className="bg-ice-50 p-4 rounded-lg">
                    <h4 className="font-medium text-ice-700">Conservador extra grande</h4>
                    <p className="text-gray-600">100 bolsas de 5 kg</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild className="bg-ice-500 hover:bg-ice-600">
                    <Link to="/contacto">Solicitar información</Link>
                  </Button>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80" 
                  alt="Conservadores de hielo"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Coverage section */}
          <div className="mt-20 bg-ice-50 p-8 rounded-lg">
            <SectionTitle 
              title="Horarios de Atención" 
              subtitle="Siempre a su disposición"
              center
            />
            
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-ice-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-ice-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-ice-700">Venta al Público</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Lunes a Sábado:</span>
                    <span className="font-medium">6:00 am - 7:00 pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="font-medium">6:00 am - 2:00 pm</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-ice-100 p-3 rounded-full">
                    <Truck className="h-6 w-6 text-ice-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-ice-700">Rutas de Reparto</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Lunes a Sábado:</span>
                    <span className="font-medium">8:00 am - 6:00 pm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
