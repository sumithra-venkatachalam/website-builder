import { useDrop } from 'react-dnd';
import styles from './Draggable.module.css';
import DraggableElement from './DraggableElement';
import Template from '../../components/templates/Template';

const DroppableArea = ({ droppedElements, onDrop, onRemove, onUpdatePosition, onUpdateContent }) => {
  // Define the drop area
  const [, dropRef] = useDrop({
    accept: 'ELEMENT',
    drop: (item, monitor) => {
      const clientOffset = monitor.getClientOffset();
      const newElement = {
        id: Date.now(),
        type: item.type,
        content: getDefaultContent(item.type),
        position: {
          x: clientOffset.x - 250, // Adjust the position based on the offset
          y: clientOffset.y - 50,  // Adjust to center the drop
        },
      };
      onDrop(newElement);
    },
  });

  // Get default content based on the element type
  const getDefaultContent = (type) => {
    switch (type) {
      case 'BUTTON':
        return 'Click Me';
      case 'TEXT':
        return 'Edit this text';
      default:
        return '';
    }
  };

  return (
    <div ref={dropRef} className={styles.DroppableArea}>
      <Template />
      {droppedElements.map((element) => (
        <DraggableElement
          key={element.id}
          element={element}
          onRemove={onRemove}
          onUpdatePosition={onUpdatePosition}
          onUpdateContent={onUpdateContent}
        />
      ))}
    </div>
  );
};

export default DroppableArea;
