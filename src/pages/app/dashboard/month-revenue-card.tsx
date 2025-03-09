import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'

export function MonthRevenueCard() {
  return (
    <Card className="gap-2">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-semibold text-base">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="font-bold text-2xl tracking-tight">R$ 1.248,60</span>
        <p className="text-muted-foreground text-xs">
          <span className="text-emerald dark:text-emerald-400">+2%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
