import { css } from "../styled-system/css";
import { center } from "../styled-system/patterns";

const App = () => {
	return (
		<div className={center({ h: "full" })}>
			<div
				className={css({
					display: "flex",
					flexDirection: "column",
					fontWeight: "semibold",
					color: "yellow.300",
					textAlign: "center",
					textStyle: "3xl",
				})}
			>
				<span>🐼</span>
				<span
					className={css({
						_hover: { color: "yellow.700" },
					})}
				>
					Hello from Panda
				</span>
			</div>
		</div>
	);
};

export default App;
