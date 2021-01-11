# useInput

```react
import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];


// setState는 re-render(새로고침)한다.
const useTabs = (initialTab, allTabs) => {
    
  // 배열인지 확인하는 조건. 배열이 아닐 때 return한다.
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
    
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

export default function App() {
    
  const { currentItem, changeItem } = useTabs(0, content);
    
  return (
      
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab} </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
      
  );
}

```

