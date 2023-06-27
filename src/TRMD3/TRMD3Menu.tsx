import Menu from "../Menus/Menu";
import MenuItem from "../Menus/MenuItem/MenuItem";

const TRMD3Menu: React.FC = () => {
	return (
		<Menu className="menu-parent components-menu-trmd3" id="menu-0">
			<MenuItem
				leadingIcon="hive"
				trailingIcon="chevron_right"
				label="A"
				showDivider={true}
			>
				<Menu>
					<MenuItem
						leadingIcon="hive"
						label="AA"
						trailingIcon="chevron_right"
						showDivider={true}
					>
						<Menu>
							<MenuItem
								leadingIcon="hive"
								label="AAA"
								trailingIcon="shopping_cart"
								onTrailingIconClick={() => {
									alert("Item Purchased");
								}}
								showDivider={true}
							></MenuItem>
							<MenuItem
								leadingIcon="hive"
								label="AAB"
								trailingIcon="shopping_cart"
								onTrailingIconClick={() => {
									alert("Item Purchased");
								}}
								showDivider={true}
							></MenuItem>
							<MenuItem
								leadingIcon="hive"
								label="AAC"
								trailingIcon="shopping_cart"
								onTrailingIconClick={() => {
									alert("Item Purchased");
								}}
								showDivider={true}
							></MenuItem>
						</Menu>
					</MenuItem>
					<MenuItem
						leadingIcon="hive"
						label="AB"
						trailingIcon="shopping_cart"
						onTrailingIconClick={() => {
							alert("Item Purchased");
						}}
						showDivider={true}
					></MenuItem>
					<MenuItem
						leadingIcon="hive"
						label="AC"
						trailingIcon="shopping_cart"
						onTrailingIconClick={() => {
							alert("Item Purchased");
						}}
						showDivider={true}
					></MenuItem>
				</Menu>
			</MenuItem>
			<MenuItem
				leadingIcon="hive"
				label="B"
				trailingIcon="shopping_cart"
				onTrailingIconClick={() => {
					alert("Item Purchased");
				}}
				showDivider={true}
			></MenuItem>
			<MenuItem
				leadingIcon="hive"
				label="C"
				trailingIcon="shopping_cart"
				onTrailingIconClick={() => {
					alert("Item Purchased");
				}}
				showDivider={true}
			></MenuItem>
			<MenuItem
				leadingIcon="hive"
				label="D"
				trailingIcon="shopping_cart"
				onTrailingIconClick={() => {
					alert("Item Purchased");
				}}
				showDivider={true}
			></MenuItem>
			<MenuItem
				leadingIcon="hive"
				label="E"
				trailingIcon="shopping_cart"
				onTrailingIconClick={() => {
					alert("Item Purchased");
				}}
				showDivider={true}
			></MenuItem>
			<MenuItem
				leadingIcon="hive"
				label="F"
				trailingIcon="shopping_cart"
				onTrailingIconClick={() => {
					alert("Item Purchased");
				}}
				showDivider={true}
			></MenuItem>
			<MenuItem leadingIcon="hive" label="G" trailingIcon="chevron_right">
				<Menu>
					<MenuItem
						leadingIcon="hive"
						label="GA"
						trailingIcon="shopping_cart"
						onTrailingIconClick={() => {
							alert("Item Purchased");
						}}
						showDivider={true}
					></MenuItem>
					<MenuItem
						leadingIcon="hive"
						label="GB"
						trailingIcon="shopping_cart"
						onTrailingIconClick={() => {
							alert("Item Purchased");
						}}
						showDivider={true}
					></MenuItem>
					<MenuItem
						leadingIcon="hive"
						label="GC"
						trailingIcon="shopping_cart"
						onTrailingIconClick={() => {
							alert("Item Purchased");
						}}
						showDivider={true}
					></MenuItem>
				</Menu>
			</MenuItem>
		</Menu>
	);
};

export default TRMD3Menu;
