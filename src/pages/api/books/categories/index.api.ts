import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import datas from "../../../../../data.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  // const categories = datas.flatMap((book) => book.categories);
  // const uniqueCategories = categories.filter(
  //   (category, index) => categories.indexOf(category) === index
  // );

  for (let data of datas) {
    const categorieExists = await prisma.category.findFirst({
      where: {
        name: data.category,
      },
    });
    if (!categorieExists) {
      await prisma.category.create({
        data: {
          name: data.category,
        },
      });
    }
  }
  return res.status(200).end();
}
