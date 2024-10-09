import styles from "./Draggable.module.css";
import { useDrag, useDrop } from "react-dnd";

const DraggableElement = ({
  element,
  onRemove,
  onUpdatePosition,
  onUpdateContent,
}) => {
  // Handle drag functionality
  const [{ isDragging }, dragRef] = useDrag({
    type: "ELEMENT",
    item: { id: element.id, type: element.type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // Handle drop functionality to update position
  const [, dropRef] = useDrop({
    accept: "ELEMENT",
    drop: (item, monitor) => {
      const clientOffset = monitor.getClientOffset();
      onUpdatePosition(item.id, {
        x: clientOffset.x - 250,
        y: clientOffset.y - 50,
      });
    },
  });

  const handleEdit = () => {
    const newContent = prompt("Enter new content:", element.content);
    if (newContent) {
      onUpdateContent(element.id, newContent);
    }
  };

  return (
    <div
      ref={(el) => dragRef(dropRef(el))} // Combine drag and drop refs
      style={{
        position: "absolute",
        left: `${element.position.x}px`,
        top: `${element.position.y}px`,
        opacity: isDragging ? 0.5 : 1, // Change opacity while dragging
      }}
      className={styles.DroppedElement}
    >
      <div className={styles.DraggableContent}>
        {element.type === "BUTTON" && (
          <button className={styles.DraggableButton} onClick={handleEdit}>
            {element.content}
          </button>
        )}
        {element.type === "TEXT" && (
          <p className={styles.DraggableText} onClick={handleEdit}>
            {element.content}
          </p>
        )}
      </div>

      <i
        onClick={() => onRemove(element.id)}
        className={`material-icons ${styles.DraggableDelete}`}
      >
        delete
      </i>
    </div>
  );
};

export default DraggableElement;
