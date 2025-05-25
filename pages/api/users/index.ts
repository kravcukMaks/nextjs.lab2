import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const users = await prisma.user.findMany()
    return res.json(users)
  }

  if (req.method === 'POST') {
    const { name, email } = req.body
    const user = await prisma.user.create({ data: { name, email } })
    return res.status(201).json(user)
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}