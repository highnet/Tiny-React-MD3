import Button from "../Button";

/* 
  Buttons are an essential part of websites that inspire action and conversion. The button component can render 
  different styles of buttons based on the configuration prop, which can be either “filled” or “outlined”. 
  It can also render an optional icon inside the button text based on the icon and iconName props. 
  The button component also has a default click function that logs a message to the console.
  The props for the Button component are:
  configuration: a string that specifies the style of the button, such as “filled” or “outlined”.
  disabled: a boolean value that indicates whether the button is interactive or not.
  onClick: a function that is called when the user clicks on the button.
  icon: a boolean value that indicates whether the button has an icon or not.
  iconName: a string that specifies the name of the icon, such as “search” or “home”. The text inside the
  button is wrapped in a div with a text-label class to apply some styling. 
*/

function ButtonsFrame() {
	return (
		<div className="flex-trmd3 flex-column-trmd3">
			{/* BUTTONS */}
			<div className="text text-title text-title-large">Buttons</div>
			<div className="text text-title text-title-medium">Filled Buttons</div>
			<div className="text text-label text-label-small">No Icon</div>
			<Button configuration="filled" disabled={false} onClick={undefined}>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-label text-label-small">No Icon (inactive)</div>
			<Button configuration="filled" disabled={true} onClick={undefined}>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-label text-label-small">With Icon</div>
			<Button
				configuration="filled"
				disabled={false}
				icon={true}
				iconName={"search"}
				onClick={undefined}
			>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-label text-label-small">
				With Icon (inactive)
			</div>
			<Button
				configuration="filled"
				disabled={true}
				icon={true}
				iconName={"search"}
				onClick={undefined}
			>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-title text-title-large">Outlined Buttons</div>
			<div className="text text-label text-label-small">No Icon</div>
			<Button configuration="outlined" disabled={false} onClick={undefined}>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-label text-label-small">No Icon (inactive)</div>
			<Button configuration="outlined" disabled={true} onClick={undefined}>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-label text-label-small">With Icon</div>
			<Button
				configuration="outlined"
				disabled={false}
				onClick={undefined}
				icon={true}
				iconName={"search"}
			>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-label text-label-small">
				With Icon (inactive)
			</div>
			<Button
				configuration="outlined"
				disabled={true}
				onClick={undefined}
				icon={true}
				iconName={"search"}
			>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-title text-title-large">Text Buttons</div>
			<div className="text text-label text-label-small">No Icon</div>
			<Button configuration="text" disabled={false} onClick={undefined}>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-label text-label-small">No Icon (inactive)</div>
			<Button configuration="text" disabled={true} onClick={undefined}>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-label text-label-small">With Icon</div>
			<Button
				configuration="text"
				disabled={false}
				onClick={undefined}
				icon={true}
				iconName={"search"}
			>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-label text-label-small">
				With Icon (inactive)
			</div>
			<Button
				configuration="text"
				disabled={true}
				onClick={undefined}
				icon={true}
				iconName={"search"}
			>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-title text-title-large">Elevated Buttons</div>
			<div className="text text-label text-label-small">No Icon</div>
			<Button configuration="elevated" disabled={false} onClick={undefined}>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-label text-label-small">No Icon (inactive)</div>
			<Button configuration="elevated" disabled={true} onClick={undefined}>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-label text-label-small">With Icon</div>
			<Button
				configuration="elevated"
				disabled={false}
				onClick={undefined}
				icon={true}
				iconName={"search"}
			>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-label text-label-small">
				With Icon (inactive)
			</div>
			<Button
				configuration="elevated"
				disabled={true}
				onClick={undefined}
				icon={true}
				iconName={"search"}
			>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-title text-title-large">Tonal Buttons</div>
			<div className="text text-label text-label-small">No Icon</div>
			<Button configuration="tonal" disabled={false} onClick={undefined}>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-label text-label-small">No Icon (inactive)</div>
			<Button configuration="tonal" disabled={true} onClick={undefined}>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-label text-label-small">With Icon</div>
			<Button
				configuration="tonal"
				disabled={false}
				onClick={undefined}
				icon={true}
				iconName={"search"}
			>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
			<div className="text text-label text-label-small">
				With Icon (inactive)
			</div>
			<Button
				configuration="tonal"
				disabled={true}
				onClick={undefined}
				icon={true}
				iconName={"search"}
			>
				<div className="text text-label text-label-small">Enabled</div>
			</Button>
		</div>
	);
}

export default ButtonsFrame;
