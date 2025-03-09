import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'

export function MonthCanceledOrdersAmount() {
  return (
    <Card className="gap-2">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-semibold text-base">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="font-bold text-2xl tracking-tight">32</span>
        <p className="text-muted-foreground text-xs">
          <span className="text-emerald dark:text-emerald-400">-2%</span> em
          relação a otem
        </p>
      </CardContent>
    </Card>
  )
}
