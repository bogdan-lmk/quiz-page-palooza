
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import QuestionCard from "@/components/quiz/QuestionCard";
import ResultsCard from "@/components/quiz/ResultsCard";
import SignUpForm from "@/components/quiz/SignUpForm";

interface QuizAnswer {
  questionId: string;
  answer: string | string[];
}

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "fraud_type",
      title: "Что стало причиной вашей финансовой потери?",
      type: "single" as const,
      options: [
        "Нечестные брокеры",
        "Финансовые пирамиды", 
        "Мошенничество в мессенджерах или соц.сетях",
        "Биржи или обменные сервисы",
        "Другое (укажите свой вариант)"
      ]
    },
    {
      id: "loss_timeframe",
      title: "Когда произошла потеря средств?",
      type: "single" as const,
      options: [
        "Менее месяца назад",
        "От 1 до 3 месяцев назад",
        "От 3 до 6 месяцев назад", 
        "От 6 месяцев до 1 года назад",
        "Более 1 года назад"
      ]
    },
    {
      id: "loss_amount",
      title: "Размер финансовых потерь (в USD)?",
      type: "single" as const,
      options: [
        "Менее $1,000",
        "$1,000 - $5,000",
        "$5,000 - $15,000",
        "$15,000 - $50,000",
        "Более $50,000"
      ]
    },
    {
      id: "actions_taken",
      title: "Какие действия вы уже предприняли?",
      type: "multiple" as const,
      options: [
        "Обращался в полицию",
        "Обращался в банк",
        "Подавал жалобы в регулирующие органы",
        "Обращался к юристам",
        "Пытался связаться с мошенниками",
        "Ничего не предпринимал"
      ]
    },
    {
      id: "evidence",
      title: "Какие у вас есть доказательства?",
      type: "multiple" as const,
      options: [
        "Переписка с мошенниками",
        "Скриншоты транзакций",
        "Банковские выписки",
        "Записи телефонных разговоров",
        "Документы/контракты",
        "Свидетели"
      ]
    }
  ];

  const totalSteps = questions.length + 1; // +1 for sign-up form
  const progress = (currentStep / totalSteps) * 100;

  const handleAnswer = (questionId: string, answer: string | string[]) => {
    const newAnswers = answers.filter(a => a.questionId !== questionId);
    newAnswers.push({ questionId, answer });
    setAnswers(newAnswers);
  };

  const getCurrentAnswer = (questionId: string): string | string[] | undefined => {
    return answers.find(a => a.questionId === questionId)?.answer;
  };

  const canProceed = () => {
    if (currentStep <= questions.length) {
      const currentQuestion = questions[currentStep - 1];
      const currentAnswer = getCurrentAnswer(currentQuestion.id);
      return currentAnswer && (Array.isArray(currentAnswer) ? currentAnswer.length > 0 : currentAnswer.length > 0);
    }
    return true; // For sign-up form step
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSignUpSubmit = (userData: any) => {
    setIsCompleted(true);
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setAnswers([]);
    setIsCompleted(false);
    setShowResults(false);
  };

  if (showResults) {
    return <ResultsCard answers={answers} questions={questions} onRestart={handleRestart} />;
  }

  // Show sign-up form as the last step
  if (currentStep > questions.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 pt-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">БАЗА ПОСТРАДАВШИХ</h1>
            <p className="text-slate-600">Заполните форму для регистрации в базе пострадавших</p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-600">Шаг: {currentStep}/{totalSteps}</span>
              <span className="text-sm text-slate-600">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Sign Up Form */}
          <SignUpForm answers={answers} onSubmit={handleSignUpSubmit} />

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              onClick={handlePrev}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Назад
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">БАЗА ПОСТРАДАВШИХ</h1>
          <p className="text-slate-600">Помогите нам лучше понять вашу ситуацию</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-600">Шаг: {currentStep}/{totalSteps}</span>
            <span className="text-sm text-slate-600">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <QuestionCard
          question={currentQuestion}
          answer={getCurrentAnswer(currentQuestion.id)}
          onAnswer={handleAnswer}
        />

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад
          </Button>
          
          <Button 
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-800"
          >
            {currentStep === questions.length ? 'Регистрация' : 'Далее'}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
