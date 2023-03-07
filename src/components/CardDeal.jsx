import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal<br className='sm:block
        hidden'/> in few easy setps.
      </h2>
      <p className={`${styles.paragraph}
                    max-w-[470px] mt-5`}> 
        Arcu torelkdslfj, adsio iopjdspioh osdhf0e ioh 
        dfaiojoidfo odfi di lsdfi l.D opiodifl sdofhjoij 
        jljdf oiheif oeihfoi dfoihe oiehfoeiofhe.C Ali 
        ohf oihsdf ax, poidhfioh.
      </p>
      <Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img 
        src={card} 
        alt="card"
        className='w-[100%] h-[100%]' 
      />
    </div>
  </section>
)

export default CardDeal