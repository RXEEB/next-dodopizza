import {
  ChooseProductModal,
  Container,
  GroupVariants,
  PizzaImage,
  Title,
} from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ModalPage(params: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params.params;
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <ChooseProductModal product={product} />
    // <Container className="flex flex-col my-10">
    //   <h1>sssssssssssaddddddddddddddddddddddddddddddddddd</h1>
    // </Container>
  );
}
