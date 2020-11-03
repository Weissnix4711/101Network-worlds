var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "survival",
        "survival_nether",
        "survival_end"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1604424462",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Overworld",
            "zoomLevels": 12,
            "defaultZoom": 2,
            "maxZoom": 11,
            "path": "survival",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival",
            "last_rendertime": 1604321516,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                64,
                0
            ],
            "minZoom": 2,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "Nether",
            "zoomLevels": 7,
            "defaultZoom": 4,
            "maxZoom": 7,
            "path": "survival_nether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival_nether",
            "last_rendertime": 1604278328,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                64,
                0
            ],
            "minZoom": 4,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "End",
            "zoomLevels": 8,
            "defaultZoom": 6,
            "maxZoom": 8,
            "path": "survival_end",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival_end",
            "last_rendertime": 1604278343,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                64,
                0
            ],
            "minZoom": 6,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
