import './Menu.module.css';
import Input from './Inputs/Input';
import Button from './Buttons/Button';

const Menu = () => {
  return (
    <div>
      <div>Menu</div>
      <Input
        id="input"
        type="number"
        placeholder="Enter number from 3 to 30"
        min="0"
        max="1000"
        step="1"
        className="input mx-5 my-2 fs-5"
      />
      <Button />
    </div>
  );
};

export default Menu;
