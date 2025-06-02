import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, RefreshCw, FileText } from "lucide-react";
import VictimsTable from './VictimsTable';

interface QuizAnswer {
  questionId: string;
  answer: string | string[];
}

interface Question {
  id: string;
  title: string;
  type: 'single' | 'multiple';
  options: string[];
}

interface ResultsCardProps {
  answers: QuizAnswer[];
  questions: Question[];
  onRestart: () => void;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ answers, questions, onRestart }) => {
  // Sample victims data based on the screenshots
  const [victims] = useState([
    {
      name: "Шмидт Павел",
      email: "schmidt.pavel@email.com",
      phone: "+373 69 123 456",
      additionalInfo: "Мошенничество через социальные сети",
      quizAnswers: [
        { questionId: 'fraud_type', answer: 'Нечестные брокеры' },
        { questionId: 'loss_amount', answer: '$1,000 - $5,000' },
        { questionId: 'loss_timeframe', answer: 'От 1 до 3 месяцев назад' },
        { questionId: 'actions_taken', answer: ['Обращался в полицию', 'Обращался в банк'] },
        { questionId: 'evidence', answer: ['Переписка с мошенниками', 'Скриншоты транзакций'] }
      ],
      submittedAt: "2024-05-15T10:30:00Z"
    },
    {
      name: "Егоров Мартин",
      email: "egorov.martin@email.com",
      phone: "+371 26 987 654",
      additionalInfo: "Инвестиционная пирамида",
      quizAnswers: [
        { questionId: 'fraud_type', answer: 'Финансовые пирамиды' },
        { questionId: 'loss_amount', answer: '$1,000 - $5,000' },
        { questionId: 'loss_timeframe', answer: 'От 1 до 3 месяцев назад' },
        { questionId: 'actions_taken', answer: ['Обращался к юристам'] },
        { questionId: 'evidence', answer: ['Банковские выписки', 'Документы/контракты'] }
      ],
      submittedAt: "2024-05-12T14:20:00Z"
    },
    {
      name: "Петров Мартин",
      email: "petrov.martin@email.com",
      phone: "+370 65 234 567",
      additionalInfo: "Подозрительная криптовалютная биржа",
      quizAnswers: [
        { questionId: 'fraud_type', answer: 'Биржи или обменные сервисы' },
        { questionId: 'loss_amount', answer: '$5,000 - $15,000' },
        { questionId: 'loss_timeframe', answer: 'От 1 до 3 месяцев назад' },
        { questionId: 'actions_taken', answer: ['Подавал жалобы в регулирующие органы'] },
        { questionId: 'evidence', answer: ['Переписка с мошенниками', 'Скриншоты транзакций'] }
      ],
      submittedAt: "2024-05-10T09:15:00Z"
    },
    {
      name: "Schmidt Lukas",
      email: "lukas.schmidt@email.com",
      phone: "+49 176 345 678",
      additionalInfo: "Крупное мошенничество с инвестициями",
      quizAnswers: [
        { questionId: 'fraud_type', answer: 'Нечестные брокеры' },
        { questionId: 'loss_amount', answer: 'Более $50,000' },
        { questionId: 'loss_timeframe', answer: 'Менее месяца назад' },
        { questionId: 'actions_taken', answer: ['Обращался в полицию', 'Обращался к юристам'] },
        { questionId: 'evidence', answer: ['Переписка с мошенниками', 'Банковские выписки', 'Документы/контракты'] }
      ],
      submittedAt: "2024-05-20T16:45:00Z"
    },
    {
      name: "Ким Сунхва",
      email: "kim.sunhwa@email.com",
      phone: "+7 777 123 456",
      additionalInfo: "Мошенничество в мессенджере",
      quizAnswers: [
        { questionId: 'fraud_type', answer: 'Мошенничество в мессенджерах или соц.сетях' },
        { questionId: 'loss_amount', answer: '$1,000 - $5,000' },
        { questionId: 'loss_timeframe', answer: 'От 1 до 3 месяцев назад' },
        { questionId: 'actions_taken', answer: ['Ничего не предпринимал'] },
        { questionId: 'evidence', answer: ['Переписка с мошенниками'] }
      ],
      submittedAt: "2024-05-08T12:00:00Z"
    },
    {
      name: "Новикова Ирина",
      email: "irina.novikova@email.com",
      phone: "+7 985 234 567",
      additionalInfo: "Фальшивые инвестиции",
      quizAnswers: [
        { questionId: 'fraud_type', answer: 'Финансовые пирамиды' },
        { questionId: 'loss_amount', answer: '$5,000 - $15,000' },
        { questionId: 'loss_timeframe', answer: 'От 1 до 3 месяцев назад' },
        { questionId: 'actions_taken', answer: ['Обращался в банк'] },
        { questionId: 'evidence', answer: ['Банковские выписки'] }
      ],
      submittedAt: "2024-05-05T11:30:00Z"
    },
    {
      name: "Martinsson Vera",
      email: "vera.martinsson@email.com",
      phone: "+46 70 456 789",
      additionalInfo: "Крупное мошенничество с акциями",
      quizAnswers: [
        { questionId: 'fraud_type', answer: 'Нечестные брокеры' },
        { questionId: 'loss_amount', answer: 'Более $50,000' },
        { questionId: 'loss_timeframe', answer: 'Менее месяца назад' },
        { questionId: 'actions_taken', answer: ['Обращался в полицию', 'Обращался к юристам', 'Подавал жалобы в регулирующие органы'] },
        { questionId: 'evidence', answer: ['Переписка с мошенниками', 'Скриншоты транзакций', 'Банковские выписки', 'Документы/контракты'] }
      ],
      submittedAt: "2024-05-22T08:20:00Z"
    },
    {
      name: "Павлова Виктория",
      email: "viktoria.pavlova@email.com",
      phone: "+375 29 567 890",
      additionalInfo: "Обман через фейковую платформу",
      quizAnswers: [
        { questionId: 'fraud_type', answer: 'Биржи или обменные сервисы' },
        { questionId: 'loss_amount', answer: '$5,000 - $15,000' },
        { questionId: 'loss_timeframe', answer: 'От 1 до 3 месяцев назад' },
        { questionId: 'actions_taken', answer: ['Обращался в полицию'] },
        { questionId: 'evidence', answer: ['Переписка с мошенниками', 'Скриншоты транзакций'] }
      ],
      submittedAt: "2024-05-03T15:10:00Z"
    },
    {
      name: "Harrison Liz",
      email: "liz.harrison@email.com",
      phone: "+61 4 234 567 89",
      additionalInfo: "Мошенничество с криптовалютой",
      quizAnswers: [
        { questionId: 'fraud_type', answer: 'Биржи или обменные сервисы' },
        { questionId: 'loss_amount', answer: '$15,000 - $50,000' },
        { questionId: 'loss_timeframe', answer: 'От 1 до 3 месяцев назад' },
        { questionId: 'actions_taken', answer: ['Обращался к юристам', 'Подавал жалобы в регулирующие органы'] },
        { questionId: 'evidence', answer: ['Банковские выписки', 'Документы/контракты'] }
      ],
      submittedAt: "2024-04-28T13:45:00Z"
    },
    {
      name: "Johnson Emma",
      email: "emma.johnson@email.com",
      phone: "+44 20 7890 1234",
      additionalInfo: "Инвестиционное мошенничество",
      quizAnswers: [
        { questionId: 'fraud_type', answer: 'Нечестные брокеры' },
        { questionId: 'loss_amount', answer: '$15,000 - $50,000' },
        { questionId: 'loss_timeframe', answer: 'От 1 до 3 месяцев назад' },
        { questionId: 'actions_taken', answer: ['Обращался в полицию', 'Обращался к юристам'] },
        { questionId: 'evidence', answer: ['Переписка с мошенниками', 'Банковские выписки', 'Документы/контракты'] }
      ],
      submittedAt: "2024-04-25T10:00:00Z"
    },
    {
      name: "Smith John",
      email: "john.smith@email.com",
      phone: "+1 416 789 0123",
      additionalInfo: "Крупное мошенничество с инвестициями",
      quizAnswers: [
        { questionId: 'fraud_type', answer: 'Нечестные брокеры' },
        { questionId: 'loss_amount', answer: 'Более $50,000' },
        { questionId: 'loss_timeframe', answer: 'Менее месяца назад' },
        { questionId: 'actions_taken', answer: ['Обращался в полицию', 'Обращался к юристам', 'Подавал жалобы в регулирующие органы'] },
        { questionId: 'evidence', answer: ['Переписка с мошенниками', 'Скриншоты транзакций', 'Банковские выписки', 'Документы/контракты'] }
      ],
      submittedAt: "2024-05-25T17:30:00Z"
    },
    {
      name: "Garcia Maria",
      email: "maria.garcia@email.com",
      phone: "+34 6 1234 5678",
      additionalInfo: "Мошенничество через социальные сети",
      quizAnswers: [
        { questionId: 'fraud_type', answer: 'Мошенничество в мессенджерах или соц.сетях' },
        { questionId: 'loss_amount', answer: '$5,000 - $15,000' },
        { questionId: 'loss_timeframe', answer: 'От 1 до 3 месяцев назад' },
        { questionId: 'actions_taken', answer: ['Обращался в банк'] },
        { questionId: 'evidence', answer: ['Переписка с мошенниками', 'Скриншоты транзакций'] }
      ],
      submittedAt: "2024-04-20T14:15:00Z"
    }
  ]);

  const getAnswerDisplay = (questionId: string) => {
    const answer = answers.find(a => a.questionId === questionId)?.answer;
    if (Array.isArray(answer)) {
      return answer.join(', ');
    }
    return answer || 'Не указано';
  };

  const getRiskLevel = () => {
    const lossAmount = answers.find(a => a.questionId === 'loss_amount')?.answer as string;
    const timeframe = answers.find(a => a.questionId === 'loss_timeframe')?.answer as string;
    
    if (lossAmount?.includes('Более $50,000') || timeframe?.includes('Менее месяца')) {
      return 'high';
    } else if (lossAmount?.includes('$15,000 - $50,000') || timeframe?.includes('От 1 до 3 месяцев')) {
      return 'medium';
    }
    return 'low';
  };

  const riskLevel = getRiskLevel();

  const riskConfig = {
    high: {
      color: 'bg-red-100 text-red-800 border-red-200',
      icon: AlertTriangle,
      title: 'Высокий приоритет',
      description: 'Ваш случай требует немедленного внимания. Рекомендуем срочно обратиться к специалистам.'
    },
    medium: {
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      icon: AlertTriangle,
      title: 'Средний приоритет',
      description: 'Есть хорошие шансы на возврат средств при правильном подходе.'
    },
    low: {
      color: 'bg-green-100 text-green-800 border-green-200',
      icon: CheckCircle,
      title: 'Стандартный случай',
      description: 'Ваш случай может быть решен через стандартные процедуры.'
    }
  };

  const currentRisk = riskConfig[riskLevel];
  const RiskIcon = currentRisk.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-6xl mx-auto pt-8">
        {/* Header */}
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Регистрация завершена</h1>
          <p className="text-slate-600">Вы успешно зарегистрированы в базе пострадавших</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Results */}
          <div className="space-y-8">
            {/* Risk Assessment */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <RiskIcon className="h-6 w-6" />
                  Оценка вашего случая
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`p-4 rounded-lg border ${currentRisk.color} mb-4`}>
                  <div className="flex items-center gap-2 mb-2">
                    <RiskIcon className="h-5 w-5" />
                    <span className="font-semibold">{currentRisk.title}</span>
                  </div>
                  <p className="text-sm">{currentRisk.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6" />
                  Сводка ответов
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {questions.map((question) => (
                  <div key={question.id} className="border-b border-slate-200 pb-4 last:border-b-0">
                    <h3 className="font-medium text-slate-800 mb-2">{question.title}</h3>
                    <div className="text-slate-600">
                      {question.type === 'multiple' ? (
                        <div className="flex flex-wrap gap-2">
                          {(getAnswerDisplay(question.id).split(', ') || []).map((item, index) => (
                            <Badge key={index} variant="secondary">{item}</Badge>
                          ))}
                        </div>
                      ) : (
                        <p>{getAnswerDisplay(question.id)}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={onRestart}
                variant="outline"
                className="flex items-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Пройти заново
              </Button>
              
              <Button className="bg-slate-700 hover:bg-slate-800">
                Связаться со специалистом
              </Button>
            </div>
          </div>

          {/* Right Column - Success Message and Victims Table */}
          <div className="space-y-8">
            <div className="p-6 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="text-green-800 font-semibold mb-2">Регистрация успешно завершена!</h3>
              <p className="text-green-700">Ваши данные добавлены в базу пострадавших. Наши специалисты свяжутся с вами в ближайшее время для дальнейшей работы по вашему случаю.</p>
            </div>
            
            <VictimsTable victims={victims} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
