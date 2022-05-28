import './Home.scss'

export default function Home() {

    return (
        <div className='container home-container' id='home'>
            <div className='home-title'>
                <div>Corentin Fiévet</div>
                <div>Ingénieur d'études</div>
                <div>Développeur .Net</div>
            </div>
            <div className='card-container'>
                <div className='flex'>
                    <div className='home-subtitle'>Poste actuel</div>
                    <div className='home-subtitle-body'>Ingénieurs d'études pour CDiscount</div>
                </div>
                <div className='flex'>
                    <div className='home-subtitle'>Project actuel</div>
                    <div className='home-subtitle-body'>Project sur la gestion des données de Formula1</div>
                </div>
            </div>
        </div>
    )
}