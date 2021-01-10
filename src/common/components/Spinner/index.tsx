// import React from 'react';
// import styled from 'styled-components';

// import { primaryColor } from 'assets/styles/core/variables';

// export const SpinnerSVG = ({ color = primaryColor, sizes }) => (
// 	<svg
// 		viewBox="0 0 60 40"
// 		width={sizes}
// 		height={sizes}
// 		xmlns="http://www.w3.org/2000/svg">
// 		<defs>
// 			<linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
// 				<stop stopColor={color} stopOpacity="0" offset="0%" />
// 				<stop stopColor={color} stopOpacity=".631" offset="63.146%" />
// 				<stop stopColor={color} offset="100%" />
// 			</linearGradient>
// 		</defs>
// 		<g fill="none" fillRule="evenodd">
// 			<g transform="translate(1 1)">
// 				<path
// 					d="M36 18c0-9.94-8.06-18-18-18"
// 					id="Oval-2"
// 					stroke="url(#a)"
// 					strokeWidth="2">
// 					<animateTransform
// 						attributeName="transform"
// 						type="rotate"
// 						from="0 18 18"
// 						to="360 18 18"
// 						dur="0.9s"
// 						repeatCount="indefinite"
// 					/>
// 				</path>
// 				<circle fill={color} cx="36" cy="18" r="1">
// 					<animateTransform
// 						attributeName="transform"
// 						type="rotate"
// 						from="0 18 18"
// 						to="360 18 18"
// 						dur="0.9s"
// 						repeatCount="indefinite"
// 					/>
// 				</circle>
// 			</g>
// 		</g>
// 	</svg>
// );

// interface ISpinner {
// 	color?: string;
// 	size?: string;
// 	position?: string;
// }

// export const Spinner = ({ color = primaryColor, size, position }: ISpinner) => {
// 	const sizes = size === '3x' ? 125 : size === '1x' ? 25 : 100 || 100;

// 	return (
// 		<StyledIcon role="progressbar" position={position}>
// 			<SpinnerSVG color={color} sizes={sizes} />
// 		</StyledIcon>
// 	);
// };

// const StyledIcon = styled.div`
// 	position: ${({ position }) => position};
// 	top: 20px;
// 	right: 20px;
// 	text-align: center;
// `;

import { LoadingOutlined } from '@ant-design/icons';
export const Spinner = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			{' '}
			<LoadingOutlined spin />
		</div>
	);
};
