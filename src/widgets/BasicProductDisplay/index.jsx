// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import LazyImage from '@components/LazyImage';
import Price from '@ui/Price';
import IconButton from '@ui/IconButton';
import CompareButton from '@ui/CompareButton';
import Like from '@ui/Like';
import TruncatedText from '@components/TruncatedText';
import {NavLink} from 'react-router-dom';
import Reviews from '@widgets/Reviews';

// hooks
import useMeasure from 'react-use-measure';

// assets
import product from '@assets/product.webp';

const BasicProductDisplay = () => {
    const [ref, {width}] = useMeasure();

    return (
        <Spring className={`${styles.container} card card-padded`}>
            <div className="flex flex-col gap-5">
                <div className={styles.media}>
                    <span className="tag tag--overlay tag--store label h6">Sale</span>
                    <LazyImage className={styles.media_img} src={product} alt="product"/>
                </div>
                <div className="flex flex-col gap-3.5">
                    <div className="flex items-center justify-between gap-6">
                        <NavLink className="flex-1" to="/product" ref={ref}>
                            <TruncatedText className="h3" text="Nike Lime Yellow FC Barcelona Core T-shirt for men" width={width} />
                        </NavLink>
                        <Like color="light"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <Price price={254.99}/>
                        <div className="flex gap-5">
                            <CompareButton/>
                            <IconButton/>
                        </div>
                    </div>
                </div>
            </div>
            <Reviews wrapperClass={styles.reviews}/>
        </Spring>
    )
}

export default BasicProductDisplay