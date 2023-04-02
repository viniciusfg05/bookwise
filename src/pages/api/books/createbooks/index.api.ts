import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import datas from "../../../../../data.json"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }


  const { name, username } = req.body;
  for await(let data of datas) {
    const categorie = await prisma.category.findMany({
      where: {
        name: {
          in: data.category,
        },
      },
      select: {
        id: true,
      },
    });


    const bookExists = await prisma.book.findFirst({
      where: {
        cover_url: data.image
      }
    })

    console.log(data.numberPages)

    if (!bookExists) {

      await prisma.book.create({
        data: {
          name: data.title,
          cover_url: data.image,
          total_pages: Number(data.numberPages),
          author: data.author,
          summary: data.descriptionBooks,
          categories: {
            connect: categorie
          }
        }
      })
    }
  }
  return res.status(201).end();
}

