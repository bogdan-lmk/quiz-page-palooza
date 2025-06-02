
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Question {
  id: string;
  title: string;
  type: 'single' | 'multiple';
  options: string[];
}

interface QuestionCardProps {
  question: Question;
  answer: string | string[] | undefined;
  onAnswer: (questionId: string, answer: string | string[]) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, answer, onAnswer }) => {
  const handleSingleChange = (value: string) => {
    onAnswer(question.id, value);
  };

  const handleMultipleChange = (option: string, checked: boolean) => {
    const currentAnswers = Array.isArray(answer) ? answer : [];
    let newAnswers;
    
    if (checked) {
      newAnswers = [...currentAnswers, option];
    } else {
      newAnswers = currentAnswers.filter(a => a !== option);
    }
    
    onAnswer(question.id, newAnswers);
  };

  const handleCustomInput = (value: string) => {
    if (question.type === 'single') {
      onAnswer(question.id, value);
    } else {
      const currentAnswers = Array.isArray(answer) ? answer : [];
      const otherAnswers = currentAnswers.filter(a => !a.startsWith('Другое:'));
      if (value.trim()) {
        onAnswer(question.id, [...otherAnswers, `Другое: ${value}`]);
      } else {
        onAnswer(question.id, otherAnswers);
      }
    }
  };

  return (
    <Card className="w-full shadow-lg border-0 bg-white">
      <CardHeader className="pb-6">
        <CardTitle className="text-xl font-semibold text-slate-800 text-center">
          {question.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {question.type === 'single' ? (
          <RadioGroup 
            value={typeof answer === 'string' ? answer : ''} 
            onValueChange={handleSingleChange}
            className="space-y-3"
          >
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <RadioGroupItem value={option} id={`${question.id}-${index}`} />
                <Label 
                  htmlFor={`${question.id}-${index}`} 
                  className="flex-1 cursor-pointer text-slate-700"
                >
                  {option}
                </Label>
              </div>
            ))}
            {question.options.some(opt => opt.includes('Другое')) && (
              <div className="mt-4">
                <Input
                  placeholder="Укажите свой вариант"
                  onChange={(e) => handleCustomInput(e.target.value)}
                  className="w-full"
                />
              </div>
            )}
          </RadioGroup>
        ) : (
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isChecked = Array.isArray(answer) && answer.includes(option);
              return (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <Checkbox
                    id={`${question.id}-${index}`}
                    checked={isChecked}
                    onCheckedChange={(checked) => handleMultipleChange(option, checked as boolean)}
                  />
                  <Label 
                    htmlFor={`${question.id}-${index}`} 
                    className="flex-1 cursor-pointer text-slate-700"
                  >
                    {option}
                  </Label>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
