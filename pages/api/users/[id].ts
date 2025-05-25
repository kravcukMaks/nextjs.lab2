import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req.query.id)

  if (req.method === 'GET') {
    const user = await prisma.user.findUnique({ where: { id } })
    return res.json(user)
  }

  if (req.method === 'PUT') {
    const { name, email } = req.body
    const user = await prisma.user.update({ where: { id }, data: { name, email } })
    return res.json(user)
  }

  if (req.method === 'DELETE') {
    await prisma.user.delete({ where: { id } })
    return res.status(204).end()
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}