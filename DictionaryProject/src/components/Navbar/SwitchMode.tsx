import MoonIcon from '../Icons/MoonIcon';
interface propSwitchMode {
  setDarkMode: (setDarkMode: boolean) => void;
  darkMode: boolean;
}
const SwitchMode = ({ setDarkMode, darkMode }: propSwitchMode) => {
  return (
    <div>
      <label className="flex item-center gap-4">
        <input
          type="checkbox"
          className="toggle toggle-sm toggle-primary"
          onChange={() => {
            setDarkMode(!darkMode);
          }}
        />
        <MoonIcon isOn={darkMode} />
      </label>
    </div>
  );
};

export default SwitchMode;
