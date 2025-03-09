import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { ArrowRight, Search, X } from 'lucide-react'
import { OrderDetails } from './order-details'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Search className="size-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-medium font-mono text-xs">
        ab1234b5b666bv4v3
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell className="">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-slate-400" />
          <span>Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">John Doe</TableCell>
      <TableCell className="font-medium">R$ 149,90</TableCell>
      <TableCell>
        <Button variant="outline" size="sm">
          <ArrowRight className="mr-2 size-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">
          <X className="mr-2 size-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
