import React from 'react';
import TicketCardSegment from './TicketCardSegment';
import styled from 'styled-components';

const TicketCardWrapper = styled.div`
	margin-bottom: 20px;
	width: 100%;
`;

const Header = styled.div`
	background-color: var(--color-blue);
	padding: 5px 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: var( --font-color-white);

	& .logo {
		font-size: 20px;
		margin-right: 5px;
	}
`;

const PriceBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	& .price {
		font-size: 18px;
	}

	& .price-desc {
		font-size: 10px;
	}
`;

const Separator = styled.hr`
	border: 1px solid var(--color-blue);
`;

const Button = styled.button`
	background-color: var(--color-orange);
	width: 100%;
	border: none;
	padding: 10px;
	color: var( --font-color-white);
`;

export default function TicketCard({ flight }) {
  const { carrier, price, legs } = flight;
  return (
    <TicketCardWrapper>
      <Header>
        <div>
          <span className='logo'>&#9992;</span>
          <span>{carrier.caption}</span>
        </div>
        <PriceBox>
          <div className='price'>{price.total.amount} &#8381;</div>
          <div className='price-desc'>Стоимость для одного взрослого пассажира</div>
        </PriceBox>
      </Header>

      <div>
        <TicketCardSegment leg={legs[0]} carrier={carrier.caption} />
        <Separator />
        <TicketCardSegment leg={legs[1]} carrier={carrier.caption} />
      </div>

      <Button>ВЫБРАТЬ</Button>
    </TicketCardWrapper>
  );
}