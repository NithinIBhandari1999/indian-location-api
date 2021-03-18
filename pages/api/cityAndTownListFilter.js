import cityList from '../../public/api/cityAndTownList.json'

const filterCity = (req, res) =>{

    let sendJsonArray = []

    const filter = {
        cityNameIncludes: '',
        state_id: '',
        sort: '',
        location_type_city: '',
    }

    const filter_error = {
        cityNameIncludes: '',
        state_id: '',
        sort: '',
        location_type_city: '',
    }

    // Check if cityNameIncludes
    if( req.query.cityNameIncludes ){
        if( typeof req.query.cityNameIncludes === 'string' ){
            filter.cityNameIncludes = req.query.cityNameIncludes.toLowerCase()
        } else {
            filter_error.cityNameIncludes = "Required Field. Min length should be 1."
        }
    } else {
        filter_error.cityNameIncludes = "Required Field."
    }

    // Check if state_id
    if( req.query.state_id ){
        if( typeof req.query.state_id === 'string' ){
            filter.state_id = req.query.state_id.toLowerCase()
        }
    }

    // Check if stateName
    if( req.query.sort ){
        if( typeof req.query.sort === 'string' ){
            filter.sort = req.query.sort.toLowerCase()
            if( filter.sort === 'population' || filter.sort === 'city_name' || filter.sort === '' ){

            } else {
                filter.sort = ""
                filter_error.sort = "Sort can either be 'population' or 'city_name' or empty"
            }
        }
    }

    // Check if location_type_city
    if( req.query.location_type_city ){
        if( typeof req.query.location_type_city === 'string' ){
            filter.location_type_city = req.query.location_type_city.toLowerCase()
            if( filter.location_type_city === 'city' || filter.location_type_city === 'town' || filter.location_type_city === '' ){
                
            } else {
                filter.location_type_city = ""
                filter_error.location_type_city = "Location Type can either be 'city' or 'town' or empty"
            }
        }
    }

    // Filter array by City Name Include
    if( filter.cityNameIncludes !== "" ){
        cityList.forEach(city_item => {
            
            let insertStatus = false;
            
            if(city_item.city_name.toLowerCase().includes(filter.cityNameIncludes)){
                insertStatus = true
            } else {
                insertStatus = false
            }

            if(insertStatus === true){
                if( filter.state_id !== "" ){
                    if(city_item.state_id.toLowerCase() === filter.state_id.toString()){
                        insertStatus = true
                    } else {
                        insertStatus = false
                    }
                }
            }

            if(insertStatus === true){
                if( filter.location_type_city !== "" ){
                    if(city_item.location_type_city === filter.location_type_city){
                        insertStatus = true
                    } else {
                        insertStatus = false
                    }
                }
            }

            if( insertStatus === true ){
                city_item.city_population = parseInt(city_item.city_population)
                sendJsonArray.push(city_item)
            }

        });
    } else {
        return res.json({
            body: req.query,
            error: filter_error,
            data: sendJsonArray
        })
    }

    if( filter.sort !== "" ){
        if( filter.sort === "population" ){
            sendJsonArray = sendJsonArray.sort(function(a,b){
                return b.city_population - a.city_population;
            });
        } else if( filter.sort === "city_name" ){
            sendJsonArray = sendJsonArray.sort(function(a,b){
                return b.city_name > a.city_name ? -1: 1;
                return 0;
            });
        }
    }

    return res.json({
        body: req.query,
        error: filter_error,
        data: sendJsonArray
    })

}

export default filterCity;