import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

export function MonthCanceledOrdersAmount() {
  const { data: monthCanceledOrdersAmount } = useQuery({
    queryFn: getMonthCanceledOrdersAmount,
    queryKey: ['metrics', 'month-canceled-orders-amount'],
  })

  return (
    <Card className="gap-2">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-semibold text-base">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthCanceledOrdersAmount && (
          <>
            <span className="font-bold text-2xl tracking-tight">
              {monthCanceledOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-muted-foreground text-xs">
              {monthCanceledOrdersAmount.diffFromLastMonth < 0 ? (
                <span className="text-emerald dark:text-emerald-400">
                  {monthCanceledOrdersAmount.diffFromLastMonth}
                </span>
              ) : (
                <span className="text-rose dark:text-rose-400">
                  +{monthCanceledOrdersAmount.diffFromLastMonth}
                </span>
              )}{' '}
              em relação ao mês passado
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
