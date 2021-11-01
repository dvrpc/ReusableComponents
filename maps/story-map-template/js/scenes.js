/*  
    @TEXT
        input text content here as HTML
        use the following classes for tags:
            <h2 class="sidebar-h2">
            <h3 class="sidebar-h3">
            <p class="sidebar-p">
        use backticks `` 

    ------------------------------------

    @MAP
        set zoom level and layers style properties

*/

const scenes = {
    1: {
        text: `
            <h2 class="sidebar-h2">scene subheader</h2>
            <p class="sidebar-p">
                Retail federal highway administration rising property values mode share safe routes to school. Highest and best use illegal secondary structures new urbanism countdown, gentrification streetscape transferable development right sprawl landscape architecture block group community engagement axis building masses waterways. Normative homeless vacancy, compatible uses equity Census tract speed limit traffic demand management community engagement Le Corbusier signal community garden congestion management groceries developed world. Inventory unincorporated municipal government axis.
            </p>
            <h3 class="sidebar-h3">section title</h3>
            <p class="sidebar-p">
                Riverwalk bike live-work space, green the parking ratio but. Unmarked crosswalk parking ratio and crossing guard groceries suburb transportation finance commercial city planning effective gross income population density. The esplanade functional environmental impact statement dwelling unit. Communities of concern axis organic congestion management, bike network public works planning ideal bike share external intersection maybe. Census redevelopment industrial, municipal government suburbanization global south low-income infill normative youth developed land unit plan sharrows limited access roadway.
            </p>
        `,
        map: {
            zoom: 8.4,
            layers: [
                {
                    id: '',
                    styles: {}
                },
                {
                    id: '',
                    styles: {}
                }
            ]
        }
    },
    2: {
        text: `
            <h2 class="sidebar-h2">scene subheader</h2>
            <h3 class="sidebar-h3">section title</h3>
            <p class="sidebar-p">Riverwalk bike live-work space, green the parking ratio but. Unmarked crosswalk parking ratio and crossing guard groceries suburb transportation finance commercial city planning effective gross income population density. The esplanade functional environmental impact statement dwelling unit. Communities of concern axis organic congestion management, bike network public works planning ideal bike share external intersection maybe. Census redevelopment industrial, municipal government suburbanization global south low-income infill normative youth developed land unit plan sharrows limited access roadway.</p>
            <p class="sidebar-p">Retail federal highway administration rising property values mode share safe routes to school. Highest and best use illegal secondary structures new urbanism countdown, gentrification streetscape transferable development right sprawl landscape architecture block group community engagement axis building masses waterways. Normative homeless vacancy, compatible uses equity Census tract speed limit traffic demand management community engagement Le Corbusier signal community garden congestion management groceries developed world. Inventory unincorporated municipal government axis.</p>
        `,
        map: {
            zoom: 14.2,
            layers: [
                {
                    id: '',
                    styles: {}
                },
                {
                    id: '',
                    styles: {}
                }
            ]
        }
    }
}

export default scenes