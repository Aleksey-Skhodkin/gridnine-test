import React, { useState } from 'react';
import TicketCard from './TicketCard/TicketCard';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 600px;
`;

const Button = styled.button`
  border-radius: 0;
  border: 2px solid var(--color-grey);
  font-size: 15px;
  padding: 3px 50px;

  &:disabled {
    border: 2px solid var(--color-disabled);
    color: var(--color-disabled);
  }
`;

export default function Content({ flights }) {
  const [itemsToLoad, setItemsToLoad] = useState(2);

  return (
    <ContentWrapper>
      {
        flights &&
        flights
          .slice(0, itemsToLoad)
          .map((flight, i) => <TicketCard key={flight.price.total.amount + i} flight={flight} />)
      }
      {
        flights
          ? <Button
            onClick={() => setItemsToLoad(prevValue => prevValue + 2)}
            disabled={itemsToLoad >= flights?.length}
          >Показать еще</Button>
          : <div>Ничего не найдено</div>
      }
    </ContentWrapper>
  )
}
