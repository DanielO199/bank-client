import { StyledCard, StyledCardItem } from './styles';

interface ICard {
	children: any;
	title: string;
	extra?: any;
	style?: object;
	type?: any;
}

export const Card = ({ children, title, extra, style, type }: ICard) => {
	return (
		<StyledCard title={title} extra={extra} style={style} type={type}>
			{children}
		</StyledCard>
	);
};

export const CardItem = ({ children }) => {
	return <StyledCardItem>{children}</StyledCardItem>;
};
