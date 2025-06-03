
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, AlertTriangle, FileSearch } from "lucide-react";
import { Link } from "react-router-dom";
import VictimsTable from "@/components/quiz/VictimsTable";

const Index = () => {
  // Sample victims data from the screenshots
  const victimsData = [
    {
      name: "Шмидт Павел",
      email: "pavel.schmidt@email.com",
      phone: "+7 (999) 123-45-67",
      quizAnswers: [
        { questionId: "fraud_type", answer: "Нечестные брокеры" },
        { questionId: "loss_amount", answer: "Более $50,000" },
        { questionId: "loss_timeframe", answer: "От 3 до 6 месяцев назад" },
        { questionId: "actions_taken", answer: ["Обращался в полицию", "Обращался в банк"] },
        { questionId: "evidence", answer: ["Переписка с мошенниками", "Банковские выписки"] }
      ],
      submittedAt: "2024-05-15T10:30:00Z"
    },
    {
      name: "Егоров Мартин",
      email: "martin.egorov@email.com",
      phone: "+7 (988) 234-56-78",
      quizAnswers: [
        { questionId: "fraud_type", answer: "Финансовые пирамиды" },
        { questionId: "loss_amount", answer: "$15,000 - $50,000" },
        { questionId: "loss_timeframe", answer: "От 1 до 3 месяцев назад" },
        { questionId: "actions_taken", answer: ["Обращался к юристам"] },
        { questionId: "evidence", answer: ["Документы/контракты", "Скриншоты транзакций"] }
      ],
      submittedAt: "2024-05-14T14:22:00Z"
    },
    {
      name: "Schmidt Lukas",
      email: "lukas.schmidt@email.de",
      phone: "+49 151 123456789",
      quizAnswers: [
        { questionId: "fraud_type", answer: "Биржи или обменные сервисы" },
        { questionId: "loss_amount", answer: "$5,000 - $15,000" },
        { questionId: "loss_timeframe", answer: "Менее месяца назад" },
        { questionId: "actions_taken", answer: ["Подавал жалобы в регулирующие органы"] },
        { questionId: "evidence", answer: ["Переписка с мошенниками", "Скриншоты транзакций"] }
      ],
      submittedAt: "2024-05-13T09:15:00Z"
    },
    {
      name: "Петров Иван",
      email: "ivan.petrov@email.ru",
      phone: "+7 (977) 345-67-89",
      quizAnswers: [
        { questionId: "fraud_type", answer: "Мошенничество в мессенджерах или соц.сетях" },
        { questionId: "loss_amount", answer: "$1,000 - $5,000" },
        { questionId: "loss_timeframe", answer: "От 6 месяцев до 1 года назад" },
        { questionId: "actions_taken", answer: ["Обращался в банк", "Пытался связаться с мошенниками"] },
        { questionId: "evidence", answer: ["Переписка с мошенниками"] }
      ],
      submittedAt: "2024-05-12T16:45:00Z"
    },
    {
      name: "Miller Sarah",
      email: "sarah.miller@email.com",
      phone: "+1 555 987 6543",
      quizAnswers: [
        { questionId: "fraud_type", answer: "Нечестные брокеры" },
        { questionId: "loss_amount", answer: "Более $50,000" },
        { questionId: "loss_timeframe", answer: "От 3 до 6 месяцев назад" },
        { questionId: "actions_taken", answer: ["Обращался в полицию", "Обращался к юристам"] },
        { questionId: "evidence", answer: ["Банковские выписки", "Документы/контракты"] }
      ],
      submittedAt: "2024-05-11T11:20:00Z"
    },
    {
      name: "Козлов Дмитрий",
      email: "dmitry.kozlov@email.ru",
      phone: "+7 (966) 456-78-90",
      quizAnswers: [
        { questionId: "fraud_type", answer: "Финансовые пирамиды" },
        { questionId: "loss_amount", answer: "$15,000 - $50,000" },
        { questionId: "loss_timeframe", answer: "От 1 до 3 месяцев назад" },
        { questionId: "actions_taken", answer: ["Подавал жалобы в регулирующие органы"] },
        { questionId: "evidence", answer: ["Переписка с мошенниками", "Записи телефонных разговоров"] }
      ],
      submittedAt: "2024-05-10T13:35:00Z"
    }
  ];

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

        {/* Victims Table */}
        <div className="mb-16">
          <VictimsTable victims={victimsData} />
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
