
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, AlertTriangle, FileSearch } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            БАЗА ПОСТРАДАВШИХ
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Обновляемая база пострадавших от брокеров-мошенников. 
            Стали жертвой обмана? Проверьте, есть ли ваши данные в списках.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-slate-700 hover:bg-slate-800">
              <Link to="/quiz">Проверить списки</Link>
            </Button>
            <Button variant="outline" size="lg">
              Включить звук
            </Button>
          </div>
        </div>

        {/* Why Important Section */}
        <Card className="mb-16 shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Почему это важно?</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-slate-700 leading-relaxed">
            <p className="mb-4">
              Мошенничество в финансовой сфере достигло беспрецедентного масштаба, 
              затрагивая миллионы людей и подрывая экономическую стабильность. 
              Решение этой проблемы возможно только через объединение усилий и 
              оперативное выявление пострадавших.
            </p>
            <p>
              Мы помогаем не только вернуть средства, но и восстановить уверенность 
              пострадавших в финансовой системе.
            </p>
          </CardContent>
        </Card>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-lg border-0 bg-slate-700 text-white">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-slate-300" />
              <h3 className="text-xl font-semibold mb-4">Властями разных стран</h3>
              <p className="text-slate-300">
                Сотрудничаем с государственными структурами и правоохранительными 
                органами для выявления мошеннических схем и организаций.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-slate-700 text-white">
            <CardContent className="p-8 text-center">
              <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-slate-300" />
              <h3 className="text-xl font-semibold mb-4">Международными юридическими компаниями</h3>
              <p className="text-slate-300">
                Работаем с международными юридическими компаниями для защиты 
                интересов пострадавших в любой юрисдикции.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-slate-700 text-white">
            <CardContent className="p-8 text-center">
              <FileSearch className="h-12 w-12 mx-auto mb-4 text-slate-300" />
              <h3 className="text-xl font-semibold mb-4">Регуляторами и платежными системами</h3>
              <p className="text-slate-300">
                Помогаем вернуть средства через взаимодействие с регуляторами и 
                платежными системами.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Чем мы занимаемся?</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-slate-700 leading-relaxed">
            <p className="mb-4">
              Мошенничество в финансовой сфере стало одной из самых серьезных угроз 
              современного общества. Ежегодно миллионы людей теряют свои сбережения 
              из-за действий недобросовестных брокеров и мошеннических организаций. 
              Эти действия не только наносят вред гражданам, но и подрывают доверие 
              к финансовой системе в целом.
            </p>
            <p className="mb-4">
              Мы — международная некоммерческая организация, созданная для борьбы с 
              мошенничеством в финансовой сфере. Наша цель — вернуть справедливость, 
              помочь пострадавшим восстановить утраченные средства и предотвратить 
              дальнейшие случаи обмана.
            </p>
            <p>
              Мы верим, что только объединенными усилиями можно остановить мошенников и 
              защитить финансовые интересы граждан.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Оставьте заявку на проверку ваших данных уже сейчас
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Наша организация действует строго в рамках закона и руководствуется 
            принципами прозрачности. Мы гарантируем, что ваши данные будут защищены, 
            а наши специалисты свяжутся с вами, чтобы обсудить возможные шаги по 
            возврату средств при наличии совпадений ваших данных в списках пострадавших.
          </p>
          <Button asChild size="lg" className="bg-slate-700 hover:bg-slate-800">
            <Link to="/quiz">Начать проверку</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
