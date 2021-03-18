import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Image from 'next/image';
import React from 'react';

export default function Home() {

  const renderApiList= () => {
    return (
      <div>
        <div className="container py-5">

          <div className="row">
            <div className="col-12 col-md-6 col-lg-12">

              <div>
                <h2>State and Union Territories List:</h2>
                <a href='/api/stateAndUnionTerritoriesList.json' target="_blank" >
                 <pre className="bg-dark text-white p-1">GET: /api/stateAndUnionTerritoriesList.json</pre>
                </a>
              </div>

              <div>
                <h2>City and Town List:</h2>
                <a href='/api/cityAndTownList.json' target="_blank" >
                  <pre className="bg-dark text-white p-1">GET: /api/cityAndTownList.json</pre>
                </a>
              </div>

              <div>
                <h2>City and Town List Filter:</h2>
                <a href='/api/cityAndTownListFilter?cityNameIncludes=ban&sort=city_name&state_id=16&location_type_city=city' target="_blank" >
                  <pre className="bg-dark text-white p-1">GET: /api/cityAndTownListFilter?cityNameIncludes=ban&sort=city_name&state_id=16&location_type_city=city</pre>
                </a>
                <table className="table table-sm table-bordered table-dark">
                  <thead>
                    <tr>
                      <th>Parameter Name</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>cityNameIncludes *</td>
                      <td>String</td>
                    </tr>
                    <tr>
                      <td>sort</td>
                      <td>["city_name" or "population"]</td>
                    </tr>
                    <tr>
                      <td>location_type_city</td>
                      <td>["city" or "town"]</td>
                    </tr>
                    <tr>
                      <td>state_id</td>
                      <td>String</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
            </div>
            <div className="col-12 col-md-6 col-lg-6">
            </div>
          </div>

        </div>
      </div>
    )
  }

  const renderAbout = () => {
    return (
      <div className="primary-background-color">
        <div className="container py-5">
          <h2 className="text-white">About</h2>
          <p className="text-white">
            Indian Location Api is a Open Source Project which provide State and City List of India in JSON Format.<br/>
            City and State data are extracted from Wikipedia.<br/>
            Source Code: <a href="https://github.com/NithinIBhandari1999/indian-location-api" target="_blank">https://github.com/NithinIBhandari1999/indian-location-api</a>
          </p>
        </div>
      </div>
    )
  }

  const renderInfo = () => {
    return (
      <div>

      </div>
    )
  }

  const renderFooter = () => {
    return (
      <React.Fragment>
        <div className="pt-4 pb-3"></div>
        <div className="fixed-bottom" style={{ backgroundColor: 'black' }}>
            <a href="https://nithinibhandari1999.github.io/" target="_blank">
              <div className="container py-2">
                <p className="text-white m-0 p-0 text-center">
                  Created By: Nithin
                </p>
              </div>
            </a>
        </div>
      </React.Fragment>
    )
  }

  return (
    <div>

      {renderApiList()}
      {renderAbout()}
      {renderFooter()}

    </div>
  )
}
