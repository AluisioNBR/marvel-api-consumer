import {
  Image,
  Modal,
} from '@mantine/core';
import { useState } from 'react';

import { useStyles } from '../styles/useStyles'

export function AppMain(){
  const { classes } = useStyles();

  return (
    <main className={classes.main}>
      <div className={classes.results}>
        <ItemResult />
        <ItemResult />
        <ItemResult />
        <ItemResult />
        <ItemResult />
        <ItemResult />
        <ItemResult />
        <ItemResult />
        <ItemResult />
      </div>
    </main>
  )
}

function ItemResult(){
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpened(true)}
        style={{
          padding: '1rem',
          backgroundColor: '#202020'
        }}
      >
        <Image
          radius="md"
          src="http://i.annihil.us/u/prod/marvel/i/mg/d/50/50febb79985ee.jpg"
          alt="Daredevil Img"
          caption="Daredevil"
          width={200}
          height={200}
          styles={{
            caption: { color: '#fdfdfd', fontWeight: 'bold', fontSize: '1.8rem' },
          }}
        />
      </button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        overflow='inside'
        centered={true}
        styles={{
          modal: {
            backgroundColor: '#202020',
            width: '90vw',
          },
        }}
      >
        <div className={classes.searchItemModal}>
          <Image
            radius="md"
            src="http://i.annihil.us/u/prod/marvel/i/mg/d/50/50febb79985ee.jpg"
            alt="Daredevil Img"
            
            caption="Daredevil"
            styles={{
              caption: { color: '#fdfdfd', fontWeight: 'bold', fontSize: '1.8rem' },
            }}

            width={200}
            height={200}
          />

          <p
            style={{
              fontSize: '1.1rem'
            }}
          >
            {`Abandoned by his mother, Matt Murdock was raised by his father, boxer "Battling Jack" Murdock, in Hell's Kitchen. Realizing that rules were needed to prevent people from behaving badly, young Matt decided to study law; however, when he saved a man from an oncoming truck, it spilled a radioactive cargo that rendered Matt blind while enhancing his remaining senses. Under the harsh tutelage of blind martial arts master Stick, Matt mastered his heightened senses and became a formidable fighter.`}
          </p>
        </div>
      </Modal>
    </div>
  )
}