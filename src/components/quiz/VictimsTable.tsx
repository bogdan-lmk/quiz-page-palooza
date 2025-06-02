
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, DollarSign } from "lucide-react";

interface VictimData {
  name: string;
  email: string;
  phone: string;
  additionalInfo?: string;
  quizAnswers: any[];
  submittedAt: string;
}

interface VictimsTableProps {
  victims: VictimData[];
}

const VictimsTable: React.FC<VictimsTableProps> = ({ victims }) => {
  const getAnswerByQuestionId = (answers: any[], questionId: string) => {
    const answer = answers.find(a => a.questionId === questionId)?.answer;
    if (Array.isArray(answer)) {
      return answer.join(', ');
    }
    return answer || 'Не указано';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getRiskLevel = (answers: any[]) => {
    const lossAmount = getAnswerByQuestionId(answers, 'loss_amount');
    const timeframe = getAnswerByQuestionId(answers, 'loss_timeframe');
    
    if (lossAmount.includes('Более $50,000') || timeframe.includes('Менее месяца')) {
      return { level: 'Высокий', color: 'bg-red-100 text-red-800' };
    } else if (lossAmount.includes('$15,000 - $50,000') || timeframe.includes('От 1 до 3 месяцев')) {
      return { level: 'Средний', color: 'bg-yellow-100 text-yellow-800' };
    }
    return { level: 'Низкий', color: 'bg-green-100 text-green-800' };
  };

  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Users className="h-6 w-6" />
          База пострадавших ({victims.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        {victims.length === 0 ? (
          <div className="text-center py-8 text-slate-500">
            <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Пока нет зарегистрированных пострадавших</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Имя</TableHead>
                  <TableHead>Контакты</TableHead>
                  <TableHead>Тип мошенничества</TableHead>
                  <TableHead>Сумма потерь</TableHead>
                  <TableHead>Дата потери</TableHead>
                  <TableHead>Риск</TableHead>
                  <TableHead>Дата регистрации</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {victims.map((victim, index) => {
                  const risk = getRiskLevel(victim.quizAnswers);
                  return (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{victim.name}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{victim.email}</div>
                          <div className="text-slate-500">{victim.phone}</div>
                        </div>
                      </TableCell>
                      <TableCell>{getAnswerByQuestionId(victim.quizAnswers, 'fraud_type')}</TableCell>
                      <TableCell>{getAnswerByQuestionId(victim.quizAnswers, 'loss_amount')}</TableCell>
                      <TableCell>{getAnswerByQuestionId(victim.quizAnswers, 'loss_timeframe')}</TableCell>
                      <TableCell>
                        <Badge className={risk.color}>{risk.level}</Badge>
                      </TableCell>
                      <TableCell className="text-sm text-slate-500">
                        {formatDate(victim.submittedAt)}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VictimsTable;
