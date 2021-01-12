import { StyledLogo } from './styles';

interface ILogo {
	height?: string;
	border?: string;
}

export const Logo = ({ height, border }: ILogo) => {
	return (
		<StyledLogo height={height} border={border}>
			<svg width="200" height={`${height}`} viewBox="0 0 374 388">
				<defs>
					<linearGradient
						id="linear-gradient"
						x1="0.5"
						x2="0.861"
						y2="0.71"
						gradientUnits="objectBoundingBox">
						<stop offset="0" stop-color="#49add2" />
						<stop offset="1" stop-color="#255769" />
					</linearGradient>
					<clipPath id="clip-Web_1920_1">
						<rect width="374" height="388" />
					</clipPath>
				</defs>
				<g
					id="Web_1920_1"
					data-name="Web 1920 – 1"
					clip-path="url(#clip-Web_1920_1)">
					<rect width="374" height="388" fill="#fff" />
					<ellipse
						id="Ellipse_1"
						data-name="Ellipse 1"
						cx="176.5"
						cy="157"
						rx="176.5"
						ry="157"
						transform="translate(11 45)"
						fill="url(#linear-gradient)"
					/>
					<ellipse
						id="Ellipse_2"
						data-name="Ellipse 2"
						cx="115.5"
						cy="103"
						rx="115.5"
						ry="103"
						transform="translate(-138 -20)"
						fill="#fff"
					/>
					<path
						id="Path_1"
						data-name="Path 1"
						d="M66,0c36.451,0,66,32.683,66,73s-29.549,73-66,73S0,113.317,0,73,29.549,0,66,0Z"
						transform="translate(291)"
						fill="#fff"
					/>
					<text
						id="B"
						transform="translate(156 133)"
						fill="#fff"
						font-size="90"
						font-family="Stencil">
						<tspan x="0" y="82">
							B
						</tspan>
					</text>
					<ellipse
						id="Ellipse_5"
						data-name="Ellipse 5"
						cx="25"
						cy="23.5"
						rx="25"
						ry="23.5"
						transform="translate(79 328)"
						fill="#fff"
					/>
				</g>
			</svg>
		</StyledLogo>
	);
};
