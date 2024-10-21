import { Container, Title, TopBar, Filters } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupLIst } from "@/components/shared/products-group-list";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все питццы" size="lg" className="font-extrabold" />

      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация  */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupLIst title='Пиццы' items={[
                {
                  id: 1,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg',
                  price: 550,
                  items: [{ price: 550 }]

                },
                {
                  id: 12,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg',
                  price: 550,
                  items: [{ price: 550 }]

                },
                {
                  id: 13,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg',
                  price: 550,
                  items: [{ price: 550 }]

                },
                {
                  id: 2,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg',
                  price: 550,
                  items: [{ price: 550 }]

                },
                {
                  id: 3,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg',
                  price: 550,
                  items: [{ price: 550 }]

                }
              ]} categoryId={1} />
              <ProductsGroupLIst title='Комбо' items={[
                {
                  id: 4,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg',
                  price: 550,
                  items: [{ price: 550 }]

                },
                {
                  id: 5,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg',
                  price: 550,
                  items: [{ price: 550 }]

                },
                {
                  id: 6,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg',
                  price: 550,
                  items: [{ price: 550 }]

                }
              ]} categoryId={2} />
              <ProductsGroupLIst title='Закуски' items={[
                {
                  id: 7,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg',
                  price: 550,
                  items: [{ price: 550 }]

                },
                {
                  id: 8,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg',
                  price: 550,
                  items: [{ price: 550 }]

                },
                {
                  id: 9,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg',
                  price: 550,
                  items: [{ price: 550 }]

                }
              ]} categoryId={3} />

            </div>
          </div>
        </div>
      </Container>

    </>

  );
}
