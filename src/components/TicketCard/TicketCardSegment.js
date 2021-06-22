import React from 'react';
import { dateFormater, durationToTimeFormater, timeFormater } from './../../utils/utils';
import styled from 'styled-components';

const ContentWrapper = styled.div`
	padding: 0 20px;
`;

const PathSection = styled.div`
	margin: 8px 0;

	& span {
		margin-right: 5px;
	}

	& .path-marked {
		color: var(--font-color-blue);
	}
`;

const Separator = styled.hr`
	margin: 0 10px;
	border: none;
	border-top: 1px solid var(--color-grey);
`;

const TimeSection = styled.div`
	margin: 8px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 16px;

	& .date {
		color: var(--font-color-blue);
		font-size: 14px;
		margin: 0 5px;
	}
`;

const TransferSection = styled.div`
	position: relative;
	color: var(--color-orange);
	border-top: 1px solid var(--color-grey);
	margin: 0 20px;

	& .transfer-content {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 0 10px;
		background-color: white;
	}
`;

const CarrierSection = styled.div`
	margin: 14px 0 8px 0;
`;

export default function TicketCardSegment({ leg, carrier }) {
	const { segments } = leg;

	return <div>
		<ContentWrapper>
			<PathSection>
				<span>{segments[0].departureCity?.caption}, {segments[0].departureAirport.caption}</span>
				<span className='path-marked'>({segments[0].departureAirport.uid})</span>
				<span className='path-marked'>&rarr;</span>
				<span>{segments[segments.length - 1].arrivalCity?.caption}, {segments[segments.length - 1].arrivalAirport.caption}</span>
				<span className='path-marked'>({segments[segments.length - 1].arrivalAirport.uid})</span>
			</PathSection>
		</ContentWrapper>
		<Separator />
		<ContentWrapper>
			<TimeSection>
				<div>
					<span>{timeFormater(segments[0].departureDate)}</span>
					<span className='date'>{dateFormater(segments[0].departureDate)}</span>
				</div>
				<div>&#128337; {durationToTimeFormater(segments[0].travelDuration)}</div>
				<div>
					<span className='date'>{dateFormater(segments[segments.length - 1].arrivalDate)}</span>
					<span>{timeFormater(segments[segments.length - 1].arrivalDate)}</span>
				</div>
			</TimeSection>
			<TransferSection>
				{
					segments.length > 1 ? <div className='transfer-content'>{segments.length - 1} пересадка(и)</div> : null
				}
			</TransferSection>
			<CarrierSection>Рейс выполняет: {carrier}</CarrierSection>
		</ContentWrapper>
	</div>
}