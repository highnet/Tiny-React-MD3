import Switch from "../Switch";

/*
    The Switch component is essentially toggle button that can be selected or deselected by the user.
    The props are: selected: a boolean value that indicates whether the switch is on or off
    onChange: a function that is called when the user clicks on the switch
    disabled: a boolean value that indicates whether the switch is interactive or not
    icon: a boolean value that indicates whether the switch has an icon or not
    iconNameSelected: a string that specifies the name of the icon when the switch is on
    iconNameDeselected: a string that specifies the name of the icon when the switch is off 
*/

function SwitchesFrame() {
    return (<div
        className="component-display-section-row-trmd3"
    >
        {/* SWITCHES */}
        <div
            className="text text-label text-label-small"
        >
            No Icon
        </div>
        <Switch
            selected={true}
            onChange={undefined}
        >
        </Switch>
        <div
            className="text text-label text-label-small"
        >
            No Icon (Inactive)
        </div>
        <Switch
            selected={true}
            onChange={undefined}
            disabled={true}
        >
        </Switch>
        <div
            className="text text-label text-label-small"
        >
            With Icon
        </div>
        <Switch
            selected={true}
            onChange={undefined}
            icon={true}
            iconNameSelected={"warning"}
            iconNameDeselected={"house"}
        >
        </Switch>
        <div
            className="text text-label text-label-small"
        >
            With Icon (Inactive)
        </div>
        <Switch
            selected={true}
            onChange={undefined}
            icon={true}
            disabled={true}
        >
        </Switch>
    </div>);
}

export default SwitchesFrame;