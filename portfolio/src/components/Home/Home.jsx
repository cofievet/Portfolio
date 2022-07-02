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
                <div className='card'>
                    <div className='card-title'>Poste actuel</div>
                    <div className='card-body'>Ingénieurs d'études pour CDiscount</div>
                </div>
                <div className='card'>
                    <div className='card-subtitle'>Project actuel</div>
                    <div className='card-body'>Project sur la gestion des données de Formula1</div>
                </div>
            </div>
        </div>
    )
}