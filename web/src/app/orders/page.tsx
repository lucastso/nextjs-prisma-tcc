import { api } from '@/lib/axios'
import { auth } from '@clerk/nextjs'

interface OrdersProps {
  id: string
  name: string
  total: number
  email: string
  cep: string
  address: string
  neighborhood: string
  city: string
  state: string
  createdAt: string
  soldId: string
  done: boolean
}

export default async function Orders() {
  const { userId } = auth()
  const response = await api.get(`/orders/${userId}`)
  const orders: OrdersProps[] = response.data

  const formatToPrice = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return (
    <div className="mx-auto mb-auto mt-8 overflow-x-hidden xs:w-full xs:px-6 lg:w-4/6 lg:px-0">
      <span className="mb-4 flex items-center gap-1 text-xl font-semibold">
        Suas compras
      </span>
      <table className="w-full text-left">
        <tbody>
          <tr>
            <th className="border border-zinc-100 p-4">Nome</th>
            <th className="border border-zinc-100 p-4">Total</th>
            <th className="border border-zinc-100 p-4">Endereço</th>
            <th className="border border-zinc-100 p-4">Status</th>
            <th className="border border-zinc-100 p-4">Criado em</th>
          </tr>
          {orders.map((item) => {
            const address = `${item.address}, ${item.neighborhood}. ${item.city} - ${item.state}, ${item.cep}`
            return (
              <tr key={item.id} className="even:bg-zinc-100">
                <td className="h-14 px-4">{item.name}</td>
                <td className="h-14 px-4">{item.total}</td>
                <td className="h-14 px-4" title={address}>
                  {address.length > 50 ? address.slice(0, 50) + '...' : address}
                </td>
                <td
                  className={
                    item.done == true
                      ? 'h-14 px-4 font-bold text-green-400'
                      : 'h-14 px-4 font-bold text-orange-400'
                  }
                >
                  {item.done == true ? 'Enviado' : 'Pendente'}
                </td>
                <td className="flex h-14 items-center justify-between px-4">
                  {item.createdAt.replace('T', '/').slice(0, -5)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
