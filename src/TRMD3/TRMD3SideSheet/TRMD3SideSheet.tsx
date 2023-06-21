import SideSheet from "../../Sheets/Side Sheets/SideSheet";
import Typography from "../../Typography/Typography";

const TRMD3SideSheet: React.FC = () => {
    return (			<SideSheet
				title="Tiny React MD3"
				content={
					<>
						<Typography variant="text-body-medium">
							Quickly transform your design kit prototypes into stunning and
							modern web applications A set of easy-to-use, high-performance and
							customizable components that follow the Material Design 3
							principles and aesthetics Developer handoffs made easy with
							ensured parity between the Figma material Design 3 Kit and React
						</Typography>
					</>
				}
				buttons={[
					{ onClick: () => alert("hi") },
					{ onClick: () => alert("hi") },
				]}
			/>);
} 

export default TRMD3SideSheet;