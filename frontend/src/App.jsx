import './App.css'

function App() {
  return (
    <>
      <div className="panel">

        <div className="title">
          <h1>MinePal 2.0 Control Panel</h1>
        </div>

        <div className="nickInput">
          <p style={"font-size: 22px; white-space: nowrap"}>Your minecraft nickname <span  style={"color:rgba(94, 82, 82, 0.97);font-size: 14px"}>(so that the bot can contact you)</span></p>
          <input type="text" placeholder="Your nickname " />
        </div>

        <p style={"font-size: 22px; white-space: nowrap"}>host : port <span  style={"color:rgba(94, 82, 82, 0.97);font-size: 14px"}>(for the local world, use "localhost" for host)</span></p>


        <div className="host">
          <input type="text" placeholder="Host" />
          <p style={"margin-left: 10px; margin-top: 10px"}>:</p>
          <input style={"margin-left: 10px"} type="text" placeholder="Port" />
        </div>

        <p style={"font-size: 22px; white-space: nowrap"}>Minecraft version <span  style={"color:rgba(94, 82, 82, 0.97);font-size: 14px"}>(1.21 up)</span></p>

        <div className="version">
          <input value="1.21" type="text" placeholder="Version" />
        </div>

        <center><button class="startBtn" style={"margin-top: 35px"}>Start Bot</button></center>
      </div>
    </>
  )
}

export default App
