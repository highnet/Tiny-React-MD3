import Badge from "../Badge";

      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "70px", gap: "40px" }}>
        {/* BADGES */}
        <div className="text text-title text-title-large">Badges</div>
        <div className="text text-label text-label-small">Small</div>
        <div style={{backgroundColor:"#F8AF50", width:"50px", height:"50px"}}>
          <Badge
            configuration={"small"}
            xOffset={95}
            yOffset={-2}
            ></Badge>
        </div>

        <div className="text text-label text-label-small">Single Digit</div>
        <div style={{backgroundColor:"#F8AF50", width:"100px", height:"100px"}}>
          <Badge 
            configuration={"single-digit"}
            xOffset={93}
            yOffset={-4}
            label={"3"}
          >
          </Badge>
        </div>

        <div className="text text-label text-label-small">Multiple Digits</div>
        <div style={{backgroundColor:"#F8AF50", width:"150px", height:"150px"}}>
          <Badge
            configuration={"multiple-digits"}
            xOffset={93}
            yOffset={-4}
            label={"123"}
            ></Badge>
        </div>

      </div>