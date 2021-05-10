import './../css/Hero.css'

const Hero = ({style,children}) => {
    return(
        <div className={style}>{children}</div>
    )
}

export default Hero;

Hero.defaultProps = {
    style: "defaultHero"
}