import React from 'react'
import Container from '../../../Views/Block/Container'
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';
import { IListDeliveries, IListProducts, IPropsDataPage } from '../../../@types/common';
import ReactPlayer from 'react-player';
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';
import Text from '../../../Views/Text/Text';
import TextTitle from '../../../Views/Text/TextTitle';
import Input from '../../../Views/Input/Input';
import Offset from '../../../Views/Offset/Offset';
import SelectComponent from '../../../Views/Select/Select';
import { getValidListSelect } from '../../../helpers/helpers';
import Button from '../../../Views/Button/Button';

interface IProps {
    infoBlock: IPropsDataPage;
    handlerChangeInput: any; // TODO: Define type for this function parameter (e.g., ({e, href}: {e: Event, href: string}))
    listProducts: IListProducts[]; // TODO: Define type for this listDeliveries prop (e.g., [{id: number, name: string}])
    listDeliveries: IListDeliveries[]; // TODO: Define type for this listDeliveries prop (e.g., [{id: number, name: string}])
    priceDelivery: { price: number }
    handlerChangeSelect: any;
    handlerChangeScreen: any;
    dataForm: {
        city_out: string;
        city_in: string;
        wheigt: number | undefined;
        volume: number | undefined;
        delivery: {
            label: string;
        };
        type_product: {
            label: string;
        };

    }; // TODO: Define type for this dataForm prop (e.g., {city_out: string, city_in: string})
}

const Calculate: React.FC<IProps> = ({
    dataForm,
    infoBlock,
    listProducts,
    priceDelivery,
    listDeliveries,
    handlerChangeInput,
    handlerChangeScreen,
    handlerChangeSelect
}: IProps) => {
    // console.log({infoBlock})
    return (
        <Container
            size={1400}
            center
            style={{ overflow: 'visible' }}
        >
            <HeaderSectionFull
                title={infoBlock?.title_1}
                slogan={infoBlock?.title_2}
            />
            <div id='calculation'></div>
            <BlockWrap location='center'>
                <Text>{infoBlock.description}</Text>
            </BlockWrap>
            <Offset mt={20} />
            <BlockWrap addClass='block__calculate-container'>
                <BlockWrap addClass='block__calculate-part--left' col>
                    <Text>Город отправитель</Text>
                    <Input
                        placeholder='Шанхай'
                        addClass='input__calculate'
                        value={dataForm.city_out}
                        name='city_out'
                        onChange={handlerChangeInput}
                        formInput={'input'}
                    />
                    <Offset mt={20} />
                    <Text>Вес, кг</Text>
                    <Input
                        placeholder='100'
                        addClass='input__calculate'
                        value={dataForm.wheigt}
                        name='wheigt'
                        type="number"
                        onChange={handlerChangeInput}
                        formInput={'input'}
                    />
                    <Offset mt={20} />
                    <Text>Тип товара</Text>
                    {listDeliveries && <SelectComponent
                        name={'type_product'}
                        value={dataForm.type_product}
                        onChange={(e: void) => handlerChangeSelect({
                            name: 'type_product',
                            values: e
                        })}
                        listOptions={getValidListSelect(listProducts)}
                    />
                    }
                </BlockWrap>

                <BlockWrap addClass='block__calculate-part--right' col>
                    <Text>Город получатель</Text>
                    <Input
                        placeholder='Санкт-Петербург'
                        addClass='input__calculate'
                        value={dataForm.city_in}
                        name='city_in'
                        onChange={handlerChangeInput}
                        formInput={'input'}
                    />
                    <Offset mt={20} />
                    <Text>Объём, м3</Text>
                    <Input
                        placeholder='1'
                        addClass='input__calculate'
                        value={dataForm.volume}
                        name='volume'
                        type="number"
                        onChange={handlerChangeInput}
                        formInput={'input'}
                    />
                    <Offset mt={20} />
                    <Text>Тип перевозки</Text>
                    {listDeliveries && <SelectComponent
                        name={'delivery'}
                        value={dataForm.delivery}
                        onChange={(e: void) => handlerChangeSelect({
                            name: 'delivery',
                            values: e
                        })}
                        listOptions={getValidListSelect(listDeliveries)}
                    />
                    }
                </BlockWrap>
            </BlockWrap>
            {priceDelivery?.price &&
<>
                    <Offset mt={50} />
                <BlockWrap location='center' style={{alignItems: 'flex-end'}}>
                    <Text addClass='text__calculate-price'>Стоимость доставки</Text>
                    <Text addClass='text__calculate-price'>{priceDelivery.price}</Text>
                    <Text addClass='text__calculate-price'>$</Text>
                </BlockWrap>
</>
            }
            <Offset mt={50} />
            <Text>* Указаны ориентировочная стоимость и срок перевозки. Результаты расчета не являются публичной офертой. Если Вам необходима доставка в другие страны, а также чтобы узнать точную стоимость доставки свяжитесь с нашими менеджерами.</Text>
            <Offset mt={50} />
            <Button
                href='/'
                addClass='button__yellow'
                onClick={handlerChangeScreen}
            >
                Связаться с менеджером
            </Button>
        </Container>
    )
}

export default Calculate