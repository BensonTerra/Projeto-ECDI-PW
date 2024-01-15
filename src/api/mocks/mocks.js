export default [
    {
      "airplanes": [
        { 
          "id": 1, 
          "icon": "src/assets/homeMap/plane.png",
          "width": 41,
          "height": 36,
          "gate": 10, 
          "schedule": {
            "date": "2023-11-28", 
            "depart": "10:00", 
            "arrival": "10:56"
          }, 
          "route": {
            "destination": "São Paulo", 
            "destinationAbbreviation": "SP",
            "origin": "Rio de Janeiro", 
            "originAbbreviation": "RJ",
            "destinationAirport": "Aeroporto Internacional de São Paulo/Guarulhos – Governador André Franco", 
            "destinationAirportIATA": "GRU", 
            "destinationAirportICAO": "SBGR", 
            "originAirport": "Aeroporto Internacional Antônio Carlos Jobim", 
            "originAirportIATA": "GIG", 
            "originAirportICAO": "SBGL", 
          },
          "flight": {
            "name": 'Boeing 747', 
            "aircraftCode": "B741",
            "company": 'LATAM', 
            "callSign": "ARG1132",
            "number": 3127,
            "image": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Ba_b747-400_g-bnle_arp.jpg",
            "status": ["A descolar", "No ar", "No ar", "No ar", "No ar", "No ar", "No ar", "No ar", "No ar", "No ar", "No ar", "No ar", "No ar", "No ar", "No ar", "No ar", "No ar", "No ar", "No ar", "Aterrado"],
            "currentSpeed": ["80 km/h", "120 km/h", "184 km/h", "243 km/h", "360 km/h", "469 km/h", "546 km/h", "698 km/h", "760 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "600 km/h", "458 km/h", "260 km/h", "123 km/h", "0 km/h",]
          },
          "position": {
              "current": {
                "x": [450, 446, 442, 438, 434, 430, 426, 422, 418, 414, 410, 406, 402, 398, 394, 390, 386, 382, 378, 374],
                "y": [410, 410.5, 411, 411.5, 412, 412.5, 413, 413.5, 414, 414.5, 415, 415.5, 416, 416.5, 417, 417.5, 418, 418.5, 419, 419.5]
              }
          },
        }, 
        {
          "id": 2,
          "icon": "src/assets/homeMap/plane2.png",
          "width": 40,
          "height": 34,
          "gate": 8,
          "schedule": {
            "date": "2023-11-28",
            "depart": "12:30",
            "arrival": "14:25"
          },
          "route": {
            "destination": "Salvador",
            "destinationAbbreviation": "BA",
            "origin": "Brasília",
            "originAbbreviation": "DF",
            "destinationAirport": "Aeroporto Internacional de Salvador — Deputado Luís Eduardo Magalhães",
            "destinationAirportIATA": "SSA",
            "destinationAirportICAO": "SBSV",
            "originAirport": "Aeroporto Internacional de Brasília – Presidente Juscelino Kubitschek",
            "originAirportIATA": "BSB",
            "originAirportICAO": "SBBR"
          },
          "flight": {
            "name": "Airbus A320",
            "aircraftCode": "A320",
            "company": "Azul",
            "callSign": "BRZ456",
            "number": 7890,
            "image": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Jetstar_Airbus_A320_in_flight_%286768081241%29_crop.jpg",
            "status": ["A descolar","No ar", "No ar","No ar","No ar","No ar", "No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","Aterrado"],
            "currentSpeed": ["80 km/h", "120 km/h", "184 km/h", "243 km/h", "360 km/h", "469 km/h", "546 km/h", "698 km/h", "760 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "600 km/h", "458 km/h", "260 km/h", "123 km/h", "0 km/h",]
          },
          "position": {
            "current": {
              "x": [360, 367.5, 375, 382.5, 390, 397.5, 405, 412.5, 420, 427.5, 435, 442.5, 450, 457.5, 465, 472.5, 480, 487.5, 495, 502.5],
              "y": [300, 298.25, 296.5, 294.75, 293, 291.25, 289.5, 287.75, 286, 284.25, 282.5, 280.75, 279, 277.25, 275.5, 273.75, 272, 270.25, 268.5, 266.75]
            }
          }
        }, 
        {
          "id": 3,
          "icon": "src/assets/homeMap/plane3.png",
          "width": 40,
          "height": 34,
          "gate": 6,
          "schedule": {
            "date": "2023-11-28",
            "depart": "9:00",
            "arrival": "10:07"
          },
          "route": {
            "destination": "Fortaleza",
            "destinationAbbreviation": "CE",
            "origin": "Teresina",
            "originAbbreviation": "PI",
            "destinationAirport": "Aeroporto Internacional de Fortaleza - Pinto Martins",
            "destinationAirportIATA": "FOR",
            "destinationAirportICAO": "SBFZ",
            "originAirport": "Aeroporto de Teresina - Senador Petrônio Portella",
            "originAirportIATA": "THE",
            "originAirportICAO": "SBTE"
          },
          "flight": {
            "name": "Airbus A330",
            "aircraftCode": "A330",
            "company": "GOL",
            "callSign": "BWG987",
            "number": 5432,
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Turkish_Airlines%2C_Airbus_A330-300_TC-JNL_NRT_%2823708073592%29.jpg",
            "status": ["A descolar","No ar", "No ar","No ar","No ar","No ar", "No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","Aterrado"],
            "currentSpeed": ["80 km/h", "120 km/h", "184 km/h", "243 km/h", "360 km/h", "469 km/h", "546 km/h", "698 km/h", "760 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "600 km/h", "458 km/h", "260 km/h", "123 km/h", "0 km/h",]
          },
          "position": {
            "current": {
              "x": [440, 443, 446, 449, 452, 455, 458, 461, 464, 467, 470, 473, 476, 479, 482, 485, 488, 491, 494, 497],
              "y": [150, 148.25, 146.5, 144.75, 143, 141.25, 139.5, 137.75, 136, 134.25, 132.5, 130.75, 129, 127.25, 125.5, 123.75, 122, 120.25, 118.5, 116.75]
            }
          }
        },  
        {
          "id": 4,
          "icon": "src/assets/homeMap/plane4.png",
          "width": 42,
          "height": 37,
          "gate": 6,
          "schedule": {
            "date": "2023-11-28",
            "depart": "16:00",
            "arrival": "18:22"
          },
          "route": {
            "destination": "Recife",
            "destinationAbbreviation": "PE",
            "origin": "Palmas",
            "originAbbreviation": "TO",
            "destinationAirport": "Aeroporto Internacional do Recife-Guararapes / Gilberto Freyre",
            "destinationAirportIATA": "REC",
            "destinationAirportICAO": "SBRF",
            "originAirport": "Aeroporto Internacional de Palmas",
            "originAirportIATA": "PMW",
            "originAirportICAO": "SBPJ"
          },
          "flight": {
            "name": "Airbus A350",
            "aircraftCode": "A350",
            "company": "GOL",
            "callSign": "BRW789",
            "number": 9876,
            "image": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Qatar_Airways_A350-941_%28A7-ALA%29_landing_at_Frankfurt_Airport.jpg",
            "status": ["A descolar","No ar", "No ar","No ar","No ar","No ar", "No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","Aterrado"],
            "currentSpeed": ["80 km/h", "120 km/h", "184 km/h", "243 km/h", "360 km/h", "469 km/h", "546 km/h", "698 km/h", "760 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "600 km/h", "458 km/h", "260 km/h", "123 km/h", "0 km/h",]
          },
          "position": {
            "current": {
              "x": [350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540],
              "y": [200, 199.25, 198.5, 197.75, 197, 196.25, 195.5, 194.75, 194, 193.25, 192.5, 191.75, 191, 190.25, 189.5, 188.75, 188, 187.25, 186.5, 185.75]
            }
          }
        },  
        {
          "id": 5,
          "icon": "src/assets/homeMap/plane5.png",
          "width": 34,
          "height": 40,
          "gate": 8,
          "schedule": {
            "date": "2023-11-28",
            "depart": "10:00",
            "arrival": "15:15"
          },
          "route": {
            "destination": "Manaus",
            "destinationAbbreviation": "AM",
            "origin": "Cuiabá",
            "originAbbreviation": "MT",
            "destinationAirport": "Aeroporto Internacional de Manaus / Eduardo Gomes",
            "destinationAirportIATA": "MAO",
            "destinationAirportICAO": "SBEG",
            "originAirport": "Aeroporto Internacional de Cuiabá - Marechal Rondon",
            "originAirportIATA": "CGB",
            "originAirportICAO": "SBCY"
          },
          "flight": {
            "name": "Boeing 747",
            "aircraftCode": "B741",
            "company": "Azul",
            "callSign": "ADE789",
            "number": 4489,
            "image": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Ba_b747-400_g-bnle_arp.jpg",
            "status": ["A descolar","No ar", "No ar","No ar","No ar","No ar", "No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","Aterrado"],
            "currentSpeed": ["80 km/h", "120 km/h", "184 km/h", "243 km/h", "360 km/h", "469 km/h", "546 km/h", "698 km/h", "760 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "600 km/h", "458 km/h", "260 km/h", "123 km/h", "0 km/h",]
          },
          "position": {
            "current": {
              "x": [240, 238, 236, 234, 232, 230, 228, 226, 224, 222, 220, 218, 216, 214, 212, 210, 208, 206, 204, 202],
              "y": [300, 289.5, 279, 268.5, 258, 247.5, 237, 226.5, 216, 205.5, 195, 184.5, 174, 163.5, 153, 142.5, 132, 121.5, 111, 100.5]
            }
          }
        }, 
        {
          "id": 6,
          "icon": "src/assets/homeMap/plane6.png",
          "width": 26,
          "height": 33,
          "gate": 7,
          "schedule": {
            "date": "2023-11-28",
            "depart": "9:00",
            "arrival": "14:55"
          },
          "route": {
            "destination": "Porto Velho",
            "destinationAbbreviation": "RO",
            "origin": "Curitiba",
            "originAbbreviation": "PR",
            "destinationAirport": "Aeroporto Internacional de Porto Velho - Governador Jorge Teixeira",
            "destinationAirportIATA": "PVH",
            "destinationAirportICAO": "SBPV",
            "originAirport": "Aeroporto Internacional Afonso Pena",
            "originAirportIATA": "CWB",
            "originAirportICAO": "SBCT"
          },
          "flight": {
            "name": "Airbus A320",
            "aircraftCode": "A320",
            "company": "LATAM",
            "callSign": "AXG1132",
            "number": 3247,
            "image": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Jetstar_Airbus_A320_in_flight_%286768081241%29_crop.jpg",
            "status": ["A descolar","No ar", "No ar","No ar","No ar","No ar", "No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","Aterrado"],
            "currentSpeed": ["80 km/h", "120 km/h", "184 km/h", "243 km/h", "360 km/h", "469 km/h", "546 km/h", "698 km/h", "760 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "600 km/h", "458 km/h", "260 km/h", "123 km/h", "0 km/h",]
          },
          "position": {
            "current": {
              "x": [380, 367, 354, 341, 328, 315, 302, 289, 276, 263, 250, 237, 224, 211, 198, 185, 172, 159, 146, 133],
              "y": [480, 466, 452, 438, 424, 410, 396, 382, 368, 354, 340, 326, 312, 298, 284, 270, 256, 242, 228, 214]
            }
          }
        }, 
        {
          "id": 7,
          "icon": "src/assets/homeMap/plane7.png",
          "width": 33,
          "height": 32,
          "gate": 4,
          "schedule": {
            "date": "2023-11-28",
            "depart": "8:00",
            "arrival": "18:00"
          },
          "route": {
            "destination": "Boa Vista",
            "destinationAbbreviation": "RR",
            "origin": "Rio Branco",
            "originAbbreviation": "AC",
            "destinationAirport": "Aeroporto Internacional de Boa Vista",
            "destinationAirportIATA": "BVB",
            "destinationAirportICAO": "SBBV",
            "originAirport": "Aeroporto Internacional de Rio Branco – Plácido de Castro",
            "originAirportIATA": "RBR",
            "originAirportICAO": "SBRB"
          },
          "flight": {
            "name": "Airbus A330",
            "aircraftCode": "A330",
            "company": "LATAM",
            "callSign": "DAR848",
            "number": 4946,
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Turkish_Airlines%2C_Airbus_A330-300_TC-JNL_NRT_%2823708073592%29.jpg",
            "status": ["A descolar","No ar", "No ar","No ar","No ar","No ar", "No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","Aterrado"],
            "currentSpeed": ["80 km/h", "120 km/h", "184 km/h", "243 km/h", "360 km/h", "469 km/h", "546 km/h", "698 km/h", "760 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "600 km/h", "458 km/h", "260 km/h", "123 km/h", "0 km/h",]
          },
          "position": {
            "current": {
              "x": [50, 57, 64, 71, 78, 85, 92, 99, 106, 113, 120, 127, 134, 141, 148, 155, 162, 169, 176, 183],
              "y": [230, 219, 208, 197, 186, 175, 164, 153, 142, 131, 120, 109, 98, 87, 76, 65, 54, 43, 32, 21]
            }
          }
        }, 
        {
          "id": 8,
          "icon": "src/assets/homeMap/plane8.png",
          "width": 39,
          "height": 43,
          "gate": 10,
          "schedule": {
            "date": "2023-11-28",
            "depart": "10:00",
            "arrival": "16:15"
          },
          "route": {
            "destination": "Porto Alegre",
            "destinationAbbreviation": "RS",
            "origin": "Macapá",
            "originAbbreviation": "AP",
            "destinationAirport": "Aeroporto Internacional Salgado Filho",
            "destinationAirportIATA": "POA",
            "destinationAirportICAO": "SBPA",
            "originAirport": "Aeroporto Internacional de Macapá",
            "originAirportIATA": "MCP",
            "originAirportICAO": "SBMQ"
          },
          "flight": {
            "name": "Airbus A350",
            "aircraftCode": "A350",
            "company": "GOL",
            "callSign": "IDP416",
            "number": 5410,
            "image": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Qatar_Airways_A350-941_%28A7-ALA%29_landing_at_Frankfurt_Airport.jpg",
            "status": ["A descolar","No ar", "No ar","No ar","No ar","No ar", "No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","Aterrado"],
            "currentSpeed": ["80 km/h", "120 km/h", "184 km/h", "243 km/h", "360 km/h", "469 km/h", "546 km/h", "698 km/h", "760 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "600 km/h", "458 km/h", "260 km/h", "123 km/h", "0 km/h",]
          },
          "position": {
            "current": {
              "x": [310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329],
              "y": [30, 55.5, 81, 106.5, 132, 157.5, 183, 208.5, 234, 259.5, 285, 310.5, 336, 361.5, 387, 412.5, 438, 463.5, 489, 514.5]
            }
          }
        }, 
        {
          "id": 9,
          "icon": "src/assets/homeMap/plane9.png",
          "width": 37,
          "height": 43,
          "gate": 4,
          "schedule": {
            "date": "2023-11-28",
            "depart": "18:00",
            "arrival": "23:20"
          },
          "route": {
            "destination": "Florianópolis",
            "destinationAbbreviation": "SC",
            "origin": "Belém",
            "originAbbreviation": "PA",
            "destinationAirport": "Aeroporto Internacional de Florianópolis – Hercílio Luz",
            "destinationAirportIATA": "FLN",
            "destinationAirportICAO": "SBFL",
            "originAirport": "Aeroporto Internacional de Belém",
            "originAirportIATA": "BEL",
            "originAirportICAO": "SBBE"
          },
          "flight": {
            "name": "Boeing 747",
            "aircraftCode": "B741",
            "company": "Azul",
            "callSign": "DFA154",
            "number": 8914,
            "image": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Ba_b747-400_g-bnle_arp.jpg",
            "status": ["A descolar","No ar", "No ar","No ar","No ar","No ar", "No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","Aterrado"],
            "currentSpeed": ["80 km/h", "120 km/h", "184 km/h", "243 km/h", "360 km/h", "469 km/h", "546 km/h", "698 km/h", "760 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "600 km/h", "458 km/h", "260 km/h", "123 km/h", "0 km/h",]
          },
          "position": {
            "current": {
              "x": [340, 340.25, 340.5, 340.75, 341, 341.25, 341.5, 341.75, 342, 342.25, 342.5, 342.75, 343, 343.25, 343.5, 343.75, 344, 344.25, 344.5, 344.75],
              "y": [100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440, 460, 480]
            }
          }
        }, 
        {
          "id": 10,
          "icon": "src/assets/homeMap/plane10.png",
          "width": 34,
          "height": 34,
          "gate": 5,
          "schedule": {
            "date": "2023-11-28",
            "depart": "14:00",
            "arrival": "20:10"
          },
          "route": {
            "destination": "São Luis",
            "destinationAbbreviation": "MA",
            "origin": "Campo Grande",
            "originAbbreviation": "MS",
            "destinationAirport": "Aeroporto Internacional Marechal Cunha Machado",
            "destinationAirportIATA": "SLZ",
            "destinationAirportICAO": "SBSL",
            "originAirport": "Aeroporto Internacional de Campo Grande",
            "originAirportIATA": "CGR",
            "originAirportICAO": "SBCG"
          },
          "flight": {
            "name": "Airbus A320",
            "aircraftCode": "A320",
            "company": "LATAM",
            "callSign": "NHU189",
            "number": 5604,
            "image": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Jetstar_Airbus_A320_in_flight_%286768081241%29_crop.jpg",
            "status": ["A descolar","No ar", "No ar","No ar","No ar","No ar", "No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","No ar","Aterrado"],
            "currentSpeed": ["80 km/h", "120 km/h", "184 km/h", "243 km/h", "360 km/h", "469 km/h", "546 km/h", "698 km/h", "760 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "800 km/h", "600 km/h", "458 km/h", "260 km/h", "123 km/h", "0 km/h",]
          },
          "position": {
            "current": {
              "x": [250, 259, 268, 277, 286, 295, 304, 313, 322, 331, 340, 349, 358, 367, 376, 385, 394, 403, 412, 421],
              "y": [375, 360, 345, 330, 315, 300, 285, 270, 255, 240, 225, 210, 195, 180, 165, 150, 135, 120, 105, 90]
            }
          }
        } 
      ],
    },
];
