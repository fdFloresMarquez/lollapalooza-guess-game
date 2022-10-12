import { useState } from 'react';

import { BandListItem } from './components/BandListItem';
import { Band, bands } from './data/bands';

const shuffledBands = bands.sort(() => 0.5 - Math.random());

export const Lollapalooza = () => {
  const [gameCompleted, setGameCompleted] = useState<boolean>(false);
  const [pointsCounter, setPointsCounter] = useState<number>(0);
  const [errorCounter, setErrorCounter] = useState<number>(0);

  const addPoint = (bandIsReal: boolean) => {
    if (bandIsReal) {
      setPointsCounter(pointsCounter + 1);
      if (pointsCounter === 12) {
        setGameCompleted(true);
      }
    } else {
      setErrorCounter(errorCounter + 1);
    }
  };

  return (
    <main className="animate__animated animate__fadeIn">
      <h1 style={{ display: `${gameCompleted ? 'none' : 'block'}` }}>fakenpalooza</h1>

      <h1
        className="animate__animated animate__fadeInDown"
        style={{ display: `${!gameCompleted ? 'none' : 'block'}` }}
      >
        Ganaste!
      </h1>
      <h3
        className="animate__animated animate__fadeInDown"
        style={{ display: `${!gameCompleted ? 'none' : 'block'}` }}
      >
        Acertaste: <p id="points">{pointsCounter}</p> Erraste: <p id="errors">{errorCounter}</p>
      </h3>

      <ul>
        {shuffledBands.map((band: Band) => (
          <BandListItem key={band.name} {...band} addPoint={addPoint} />
        ))}
      </ul>
    </main>
  );
};
