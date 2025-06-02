
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { UserPlus } from "lucide-react";

interface SignUpFormProps {
  answers: any[];
  onSubmit: (userData: any) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ answers, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const victimData = {
        ...formData,
        quizAnswers: answers,
        submittedAt: new Date().toISOString()
      };
      
      onSubmit(victimData);
      
      toast({
        title: "Регистрация завершена",
        description: "Ваши данные успешно отправлены. Мы свяжемся с вами в ближайшее время.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        additionalInfo: ''
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при отправке данных. Попробуйте еще раз.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <UserPlus className="h-6 w-6" />
          Регистрация в базе пострадавших
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Полное имя *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Введите ваше полное имя"
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="example@email.com"
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="+7 (999) 999-99-99"
            />
          </div>
          
          <div>
            <Label htmlFor="additionalInfo">Дополнительная информация</Label>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              placeholder="Любая дополнительная информация о вашем случае..."
              rows={3}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-slate-700 hover:bg-slate-800"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Отправка...' : 'Зарегистрироваться в базе'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
