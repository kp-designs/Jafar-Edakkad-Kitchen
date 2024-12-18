var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.009331442460890571,
        "pitch": -0.0018797568267672204,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.7532139332789942,
          "pitch": 0.45302613030717076,
          "rotation": 0,
          "target": "1-loft"
        },
        {
          "yaw": -1.5942562420571633,
          "pitch": 0.17935095019926628,
          "rotation": 0,
          "target": "3-wa"
        },
        {
          "yaw": -2.953954571853309,
          "pitch": 0.36129815314171765,
          "rotation": 0,
          "target": "2-ladies-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-loft",
      "name": "loft",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5295752490057524,
          "pitch": 0.4817473342508549,
          "rotation": 0,
          "target": "0-kitchen"
        },
        {
          "yaw": 1.778861928050369,
          "pitch": 0.19034086850799348,
          "rotation": 0,
          "target": "2-ladies-living"
        },
        {
          "yaw": 2.461525058749462,
          "pitch": 0.09417089069672713,
          "rotation": 0,
          "target": "3-wa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ladies-living",
      "name": "ladies living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.973159355216195,
          "pitch": 0.3933582083744813,
          "rotation": 0,
          "target": "0-kitchen"
        },
        {
          "yaw": 1.907994687912308,
          "pitch": 0.09321304457606061,
          "rotation": 0,
          "target": "3-wa"
        },
        {
          "yaw": -3.095950499230492,
          "pitch": 0.24999153743202207,
          "rotation": 0,
          "target": "1-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wa",
      "name": "w/a",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5419627873780737,
          "pitch": 0.3452166893406208,
          "rotation": 0,
          "target": "0-kitchen"
        },
        {
          "yaw": -3.1029277942725706,
          "pitch": 0.1907248909637591,
          "rotation": 0,
          "target": "2-ladies-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
