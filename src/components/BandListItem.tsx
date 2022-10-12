import { useState } from 'react';

interface Props {
  name: string;
  isReal: boolean;
  addPoint: (bandIsReal: boolean) => void;
}

type BandStatus = '' | 'correct' | 'incorrect';

export const BandListItem = ({ name, isReal, addPoint }: Props) => {
  const [bandStatus, setBandStatus] = useState<BandStatus>('');
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);

  const handleClick = () => {
    setButtonPressed(true);
    addPoint(isReal);
    if (isReal) {
      setBandStatus('correct');
    } else {
      setBandStatus('incorrect');
    }
  };

  return (
    <li>
      <button className={`btn ${bandStatus}`} disabled={buttonPressed} onClick={handleClick}>
        {name}
      </button>
    </li>
  );
};
