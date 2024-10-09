import { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './Home.module.css';
import DroppableArea from '../droppable_area/DroppableArea';
import Sidebar from '../sidebar/Sidebar';

const Home = () => {
  const [droppedElements, setDroppedElements] = useState([]);

  // Load layout from localStorage when the app starts
  useEffect(() => {
    const savedLayout = JSON.parse(localStorage.getItem('layout'));
    if (savedLayout) {
      setDroppedElements(savedLayout);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('layout', JSON.stringify(droppedElements));
  }, [droppedElements]);

  const handleDrop = (newElement) => {
    setDroppedElements((prevElements) => [...prevElements, newElement]);
  };

  const handleRemoveElement = (id) => {
    setDroppedElements(droppedElements.filter((element) => element.id !== id));
  };

  const handleUpdateElementContent = (id, newContent) => {
    setDroppedElements(
      droppedElements.map((element) =>
        element.id === id ? { ...element, content: newContent } : element
      )
    );
  };

  const handleUpdateElementPosition = (id, newPosition) => {
    setDroppedElements(
      droppedElements.map((element) =>
        element.id === id ? { ...element, position: newPosition } : element
      )
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.BuilderContainer}>
        <Sidebar />
        <DroppableArea
          droppedElements={droppedElements}
          onDrop={handleDrop}
          onRemove={handleRemoveElement}
          onUpdatePosition={handleUpdateElementPosition}
          onUpdateContent={handleUpdateElementContent}
        />
      </div>
    </DndProvider>
  );
};

export default Home;