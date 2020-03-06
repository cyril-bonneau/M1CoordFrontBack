import React, { Component } from 'react'
import { BrowserRouter, Redirect } from 'react-router-dom';
import { Route } from 'react-router'
import ClientForm from './forms/ClientForm'
import ProjetForm from './forms/ProjetForm'
import SprintForm from './forms/SprintForm'
import TacheForm from './forms/TacheForm'

class SecondSection extends Component {

    render() {
        return (
            <div className="content_wrapper clearfix">
                <div className="sections_group">
                    <div className="entry-content">
                        <div className="section mcb-section " style={{paddingTop:"50px",paddingBottom:"0px"}}>
                            <div className="section_wrapper mcb-section-inner">
                                <div className="wrap mcb-wrap one  valign-top clearfix">

                                    <div className="column mcb-column one-second column_tabs" style={{width: "97%"}}>
                                        <div className="jq-tabs tabs_wrapper tabs_vertical ui-tabs ui-widget ui-widget-content ui-corner-all">
                                            <ul className="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">
                                                <li className="ui-state-default ui-corner-top ui-state-focus ui-tabs-active ui-state-active" role="tab" tabindex="0" aria-controls="tab-5e5f5526e28ea-1" aria-labelledby="ui-id-4" aria-selected="true" aria-expanded="true">
                                                    <a href="#tab-5e5f5526e28ea-1" className="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-5" style={{width: "295px", marginTop: "0%"}}>
                                                        Ajouter un client
                                                    </a>
                                                </li>
                                                <li className="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="tab-5e5f5526e28ea-2" aria-labelledby="ui-id-5" aria-selected="false" aria-expanded="false">
                                                    <a href="#tab-5e5f5526e28ea-2" className="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-5" style={{ width: "295px",marginTop: "0%"}}>
                                                        Ajouter un projet
                                                    </a>
                                                </li>
                                                <li className="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="tab-5e5f5526e28ea-3" aria-labelledby="ui-id-6" aria-selected="false" aria-expanded="false">
                                                    <a href="#tab-5e5f5526e28ea-3" className="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-6" style={{width: "295px",marginTop: "0%"}}>
                                                        Ajouter un sprint
                                                    </a>
                                                </li>
                                                <li className="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="tab-5e5f5526e28ea-4" aria-labelledby="ui-id-6" aria-selected="false" aria-expanded="false">
                                                    <a href="#tab-5e5f5526e28ea-4" className="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-6" style={{width: "295px",marginTop: "0%"}}>
                                                        Ajouter un tâche
                                                    </a>
                                                </li>
                                            </ul>
                                            <div id="tab-5e5f5526e28ea-1" aria-labelledby="ui-id-4" className="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-hidden="false" style={{display: "block"}}>
                                                <p>
                                                    <strong>
                                                        Veuillez renseigner les informations du client
                                                    </strong>
                                                </p>
                                                <ClientForm />
                                            </div>
                                            <div id="tab-5e5f5526e28ea-2" aria-labelledby="ui-id-5" className="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-hidden="true" style={{display: "none"}}>
                                                <p>
                                                    <strong>
                                                        Veuillez ajouter un projet
                                                    </strong>
                                                </p>
                                                <ProjetForm />
                                            </div>
                                            <div id="tab-5e5f5526e28ea-3" aria-labelledby="ui-id-6" className="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-hidden="true" style={{display: "none"}}>
                                                <p>
                                                    <strong>
                                                        Veuillez ajouter un sprint
                                                    </strong>
                                                </p>
                                                <SprintForm />
                                            </div>
                                            <div id="tab-5e5f5526e28ea-4" aria-labelledby="ui-id-6" className="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-hidden="true" style={{display: "none"}}>
                                                <p>
                                                    <strong>
                                                        Veuillez ajouter une tâche
                                                    </strong>
                                                </p>
                                                <TacheForm />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}



export default SecondSection
