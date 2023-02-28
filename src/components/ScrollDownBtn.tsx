import { VscFoldDown } from "react-icons/vsc";

type ScrollButtonProps = {
  onClick: () => void;
};

const ScrollDownBtn: React.FC<ScrollButtonProps> = ({ onClick }) => {
  return (
    <div className="scroll-to-top-button">
      <VscFoldDown onClick={onClick} style={{ color: "#c2bfca" }} size="52" />
    </div>
  );
};

export default ScrollDownBtn;
