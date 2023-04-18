import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import datas from "../../../../../data.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { createRating: {description, rate, book_id, user_id} } = req.body;

  const ifUserExists = await prisma.user.findUnique({
    where: {
      id: user_id,
    }
  })

  if(ifUserExists) {
    const createRatingg = await prisma.rating.create({
      data: {
        rate,
        description,
        book_id,
        user_id
      }
    })
  } else {
    return res.status(404).end();
  }


  
  return res.status(201).end();
}
