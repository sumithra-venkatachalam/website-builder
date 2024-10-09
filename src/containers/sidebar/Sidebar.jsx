import styles from './Sidebar.module.css';
import { useDrag } from "react-dnd";

const DraggableElement = ({ element }) => {
  const [, dragRef] = useDrag({
    type: "ELEMENT",
    item: { type: element.type },
  });

  return (
    <div ref={dragRef} className={styles.DraggableItem}>
      {element.label}
    </div>
  );
};

const Sidebar = () => {
  const elements = [
    { type: "BUTTON", label: "Button" },
    { type: "TEXT", label: "Text" },
  ];

  return (
    <div className={styles.Sidebar}>
      <h3>Elements</h3>
      {elements.map((item) => (
        <DraggableElement key={item.type} element={item} />
      ))}
    </div>
  );
};

export default Sidebar;
