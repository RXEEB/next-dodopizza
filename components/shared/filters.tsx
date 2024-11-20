"use client"

import React from 'react'
import { cn } from '@/lib/utils'
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useingredients';
import { useSet } from 'react-use';
import qs from 'qs';
import { useRouter } from 'next/navigation';


interface Props {
    className?: string;
}
interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}


export const Filters: React.FC<Props> = ({ className }) => {
    const router = useRouter()
    const { ingredients, loading, onAddId, selectedIngredients } = useFilterIngredients()

    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]))
    const [pizzaTypes, { toggle: togglePzzaType }] = useSet(new Set<string>([]))

    const [prices, setPrice] = React.useState<PriceProps>({})

    const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }))


    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...prices,
            [name]: value,
        })
    }


    React.useEffect(() => {
        const filters = {
            ...prices,
            pizzaTypes: Array.from(pizzaTypes),
            sizes: Array.from(sizes),
            ingredients: Array.from(selectedIngredients),
        }
        const query = qs.stringify(filters, {
            arrayFormat: 'comma',

        })
        router.push(`?${query}`)

    }, [prices, pizzaTypes, sizes, selectedIngredients, router])


    return (
        <div className={className}>
            <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />


            <CheckboxFiltersGroup
                title='Тип пиццы'
                name='pizzaType'
                className='mb-5'
                onClickCheckbox={togglePzzaType}
                selected={pizzaTypes}
                items={[
                    { text: 'Тонкое', value: '1' },
                    { text: 'Традиционное', value: '2' },


                ]}

            />


            <CheckboxFiltersGroup
                name='size'
                className='mb-5'
                title='Размер'
                onClickCheckbox={toggleSizes}
                selected={sizes}
                items={[
                    { text: '20 см', value: '20' },
                    { text: '30 см', value: '30' },
                    { text: '40 см', value: '40' },

                ]}

            />

            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7' >
                <p className='font-bold mb-3 '> Цена от  и до:</p>
                <div className='flex gap-3 mb-5'>
                    <Input
                        type='number'
                        placeholder='0'
                        min={0}
                        max={1000}
                        value={String(prices.priceFrom)}
                        onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
                    />
                    <Input
                        type='number'
                        placeholder='1000'
                        min={100}
                        max={1000}
                        value={String(prices.priceTo)}
                        onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
                    />
                </div>
                <RangeSlider min={0} max={1000} step={10} value={[prices.priceFrom || 0, prices.priceTo || 1000]}
                    onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
                />

                <CheckboxFiltersGroup
                    title='Ингредиенты'
                    className="mt-10"
                    name='ingredients'
                    limit={6}
                    defaultItems={items.slice(0, 6)}
                    items={items}
                    loading={loading}
                    onClickCheckbox={onAddId}
                    selected={selectedIngredients}
                />
            </div>

        </div>

    )

}