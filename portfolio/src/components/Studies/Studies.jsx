import "./Studies.scss"

export default function Studies() {
    return (<div id="studies" className="container">
        <div className="title">
            Studies
        </div>

        <div className="timeline-container">
            <div className="timelines">
                <div className="timeline">
                    <div className="timeline-number"></div>
                    <div className="timeline-info">
                        <p className="title timeline-title">Master Sécurité des Systèmes d'Information (SSI), Informatique</p>
                        <p className="timeline-company">Université Technologique de Troyes (UTT)</p>
                        <p className="timeline-duration">Septembre 2019 - Septembre 2021</p>
                    </div>
                </div>
                <div className="timeline">
                    <div className="timeline-number"></div>
                    <div className="timeline-info">
                        <p className="title timeline-title">
                            Licence professionnelle<br/>
                            Administration et Sécurité des Systèmes et des Réseaux<br/>
                            Sécurité des Applications et des Réseaux Informatiques
                        </p>
                        <p className="timeline-company">Université de Lens (IUT)</p>
                        <p className="timeline-duration">Septemble 2018 - Septembre 2019</p>
                    </div>
                </div>
                <div className="timeline">
                    <div className="timeline-number"></div>
                    <div className="timeline-info">
                        <p className="title timeline-title">DUT Informatique</p>
                        <p className="timeline-company">Université de Reims Champagne-Ardenne (URCA)</p>
                        <p className="timeline-duration">Septembre 2016 - Septembre 2018</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}