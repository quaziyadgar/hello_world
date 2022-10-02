import React from "react";

export default function Windows() {
  return (
    <div>
    <img src="https://cdn-icons-png.flaticon.com/128/716/716784.png" height={50}/>
      <footer>
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/882/882702.png"
            height={30}
          ></img>
        </div>
        <div className="search">
        <img src="https://cdn-icons-png.flaticon.com/512/3249/3249822.png" height={30}/>
          <input type={"text"} placeholder="Type here to search" />
        </div>
        <div className="icons">
          <img src="https://cdn-icons-png.flaticon.com/128/716/716784.png" height={30}/>
          <img src="https://cdn-icons-png.flaticon.com/128/3136/3136007.png" height={30}/>
          <img src="https://cdn-icons-png.flaticon.com/128/732/732205.png" height={30}/>
          <img src="https://cdn-icons-png.flaticon.com/128/5968/5968827.png" height={30}/>
        <img src="https://cdn-icons-png.flaticon.com/128/888/888865.png" height={30}/>
        <img src="https://cdn-icons-png.flaticon.com/128/1384/1384055.png" height={30}/>
        <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" height={30}/>
        </div>
        <div className="leftContainer">
          <img src="https://cdn-icons-png.flaticon.com/128/453/453586.png" height={30}/>
          <p>28℃</p>
          <p>^</p>
          <img src="https://cdn-icons-png.flaticon.com/128/747/747982.png" height={30}/>
          <p>ENG</p>
          <div className="dateTime">
            <p>23:11</p>
            <p>02-10-2022</p>
          </div>
          <img src="https://t4.ftcdn.net/jpg/01/62/09/37/240_F_162093782_aE3DPSGgEMQMJ7wGJGFqgS5DgvYdVBew.jpg" height={30}/>
        </div>
      </footer>
    </div>
  );
}
