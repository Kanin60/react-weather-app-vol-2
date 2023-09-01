import Clouds from '../../assets/cloud.png'
import cloudStyle from '../Bottom_Clouds/Clouds.module.scss'
export function BottomClouds() {

    return (
        <section className={cloudStyle.cloudContainer}>
            <div className={cloudStyle.downWithTheClouds}>
                <img src={Clouds} alt="Bottom Clouds" className={cloudStyle.bottomCloudsOne} />
                <img src={Clouds} alt="Bottom Clouds" className={cloudStyle.bottomCloudsTwo} />
            </div>
        </section>
    )
}
