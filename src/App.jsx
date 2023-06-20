import { useState } from "react";

const Color = ({color, selectedColor, setSelectedColor}) => {
  return (
    <div 
      className={
        color === selectedColor ? `${color} selected`: color
      } 
      onClick={() => setSelectedColor(color)} 
     ></div>
    
  )
}
const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
 
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color ="violet" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color ="blue" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color ="red" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
      </div>
 
    </div>
  );
};

export default App;
