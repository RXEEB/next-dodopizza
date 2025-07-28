"use client";

import {
  CheckoutItem,
  CheckoutSidebar,
  Container,
  Title,
  WhiteBlock,
} from "@/components/shared";
import { FormInput } from "@/components/shared/form-components";
import { Button, Input, Textarea } from "@/components/ui";
import { PizzaSize, PizzaType } from "@/constants/pizza";
import { useCart } from "@/hooks";
import { getCartItemDetails } from "@/lib";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();

  // const form = useForm({
  //   resolver: zodResolver(),
  //   defaultValues: {
  //     email: "",
  //     firstName: "",
  //     lastName: "",
  //     phone: "",
  //     address: "",
  //     comment: "",
  //   },
  // });

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title
        text="Оформление Заказа"
        size="xl"
        className="font-extrabold mb-8 text-[36px]"
      />
      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Корзина">
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <CheckoutItem
                  key={item.id}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  details={getCartItemDetails(
                    item.ingredients,
                    item.pizzaType as PizzaType,
                    item.pizzaSize as PizzaSize
                  )}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  disabled={item.disabled}
                  onClickCountButton={(type) =>
                    onClickCountButton(item.id, item.quantity, type)
                  }
                  onClickRemove={() => removeCartItem(item.id)}
                />
              ))}
            </div>
          </WhiteBlock>
          <WhiteBlock title="2. Персональная информация">
            <div className=" grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Имя" />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Фамилия"
              />
              <Input name="email" className="text-base" placeholder="E-mail" />
              <FormInput
                name="phone"
                className="text-base"
                placeholder="Телефон"
              />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. Адресс доставки">
            <div className=" flex flex-col gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="Адресс"
              />
              <Textarea
                rows={5}
                className="text-base"
                placeholder="Коментарий к заказу"
              />
            </div>
          </WhiteBlock>
        </div>
        <div className="w-[450px]">
          <CheckoutSidebar totalAmount={totalAmount} />
        </div>
      </div>
    </Container>
  );
}
