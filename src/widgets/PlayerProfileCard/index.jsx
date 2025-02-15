// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import CustomRating from '@ui/CustomRating';
import Like from '@ui/Like';

// assets
import tshirt from '@assets/player_tshirt.webp';

const PlayerProfileCard = () => {
    return (
        <Spring className={`${styles.container} card height-w-1 g-30 card-padded`}>
            <div className="flex flex-col justify-between">
                <div className={`${styles.main_info} flex flex-col gap-3.5`}>
                    <span className="player-number">8</span>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-20 text-overflow">Matías Vecino</h2>
                        <span className="text-12">Central defender</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <CustomRating value={4.5} max={5} type="stars" isCompact />
                    <Like qty={27} isLiked withText/>
                </div>
            </div>
            <div className={styles.media}>
                <img src={tshirt} alt="player tshirt" />
            </div>
        </Spring>
    )
}

export default PlayerProfileCard