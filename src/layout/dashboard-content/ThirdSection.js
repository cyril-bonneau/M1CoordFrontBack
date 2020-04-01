import React, { Component } from 'react'
import ClientListe from './listes/ClientListe'
import ProjetList from './listes/ProjetListe'
import SprintList from './listes/SprintListe'
import TacheList from './listes/TacheListe'

class ThirdSection extends Component {

    render() {
        return (
            <div className="content_wrapper clearfix">
                <div className="sections_group">
                    <div className="entry-content">
                        <div className="section mcb-section " >
                            <div className="section_wrapper mcb-section-inner">
                                <div className="wrap mcb-wrap one  valign-top clearfix">
                                    <div className="mcb-wrap-inner">
                                        <div className="column mcb-column one-second column_tabs" style={{width: "100%"}}>
                                            <div className="jq-tabs tabs_wrapper tabs_horizontal ui-tabs ui-widget ui-widget-content ui-corner-all" style={{width: "97%"}}>
                                                <ul className="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" style={{marginTop: "-26px",backgroundImage: "none",width: "1200px"}}>
                                                    <li className="ui-state-default ui-corner-top  ui-tabs-active ui-state-active" style={{width: "25%"}}>
                                                        <a href="#tab-5e5f5526e287d-1" className="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-1">
                                                            Liste des clients
                                                        </a>
                                                    </li>
                                                    <li className="ui-state-default ui-corner-top" role="tab" tabindex="0" aria-controls="tab-5e5f5526e287d-2" aria-labelledby="ui-id-2" aria-selected="true" aria-expanded="true" style={{width: "25%"}}>
                                                        <a href="#tab-5e5f5526e287d-2" className="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-2">
                                                            Liste des projets
                                                        </a>
                                                    </li>
                                                    <li className="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="tab-5e5f5526e287d-3" aria-labelledby="ui-id-3" aria-selected="false" aria-expanded="false" style={{width: "25%"}}>
                                                        <a href="#tab-5e5f5526e287d-3" className="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-3">
                                                            Liste des sprints
                                                        </a>
                                                    </li>
                                                    <li className="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="tab-5e5f5526e287d-4" aria-labelledby="ui-id-4" aria-selected="false" aria-expanded="false" style={{width: "291px"}}>
                                                        <a href="#tab-5e5f5526e287d-4" className="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-4">
                                                            Liste des tâches
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div id="tab-5e5f5526e287d-1" aria-labelledby="ui-id-1" className="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-hidden="true" style={{display: "none"}}>
                                                    <ClientListe />
                                                </div>
                                                <div id="tab-5e5f5526e287d-2" aria-labelledby="ui-id-2" className="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-hidden="false" style={{display: "block"}}>
                                                    
                                                    <ProjetList />
                                                </div>
                                                <div id="tab-5e5f5526e287d-3" aria-labelledby="ui-id-3" className="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-hidden="true" style={{display: "none"}}>
                                                    <SprintList />               
                                                </div>
                                                <div id="tab-5e5f5526e287d-4" aria-labelledby="ui-id-4" className="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-hidden="true" style={{display: "none"}}>
                                                    <TacheList />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThirdSection
