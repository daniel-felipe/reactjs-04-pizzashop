import { http, HttpResponse } from 'msw'
import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'john@doe.com',
      phone: '123456789',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 3000,
    orderItems: [],
  })
})
