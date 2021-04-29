
module.exports = checkCategory = (measure) => {

    let response = {
        category:'',
        subcategory: '',
        subcategory2: ''
    }
    
const markSelector = (measure) => {
    response.category = 'Mark'
    measure = measure.toString().split('');
    if(measure[1] == '1') {
        response.subcategory = 'GRÄS OCH PLANTERING'
        if(measure[2] == '1') return response.subcategory2 = 'Gräsytor'
        if(measure[2] == '2') return response.subcategory2 = 'Planteringsytor'
        if(measure[2] == '3') return response.subcategory2 = 'Beskärning'
        if(measure[2] == '5') return response.subcategory2 = 'Konstgräs'
        if(measure[2] == '9') return response.subcategory2 = 'Kantskärning gräsytor'
    } else if(measure[1] == '2') {
        response.subcategory = 'HÅRDGJORDA YTOR'
        if(measure[2] == '1') return response.subcategory2 = 'Asfalt'
        if(measure[2] == '2') return response.subcategory2 = 'Grus och stenmjöl'
        if(measure[2] == '3') return response.subcategory2 = 'Sten och plattor'
        if(measure[2] == '4') return response.subcategory2 = 'Kantstöd'
        if(measure[2] == '5') return response.subcategory2 = 'Övriga hårdgjorda ytor'
        if(measure[2] == '6') return response.subcategory2 = 'Betongytor'
        if(measure[2] == '9') return response.subcategory2 = 'Övrigt'
    } else if(measure[1] == '3') {
        response.subcategory = 'LEKYTOR'
        if(measure[2] == '1') return response.subcategory2 = 'Lekutrustning'
        if(measure[2] == '2') return response.subcategory2 = 'Sand'
    } else if(measure[1] == '4') {
        response.subcategory = 'LEDNINGAR I MARK'
        if(measure[2] == '1') return response.subcategory2 = 'Kulvert'
        if(measure[2] == '2') return response.subcategory2 = 'VA-ledningar'
        if(measure[2] == '3') return response.subcategory2 = 'Dränledning'
        if(measure[2] == '4') return response.subcategory2 = 'Brunnar'
    } else if(measure[1] == '5') {
        response.subcategory = 'KONSTRUKTIONER PÅ MARK'
        if(measure[2] == '1') return response.subcategory2 = 'Trappor'
        if(measure[2] == '2') return response.subcategory2 = 'Stödmurar'
    } else if(measure[1] == '6') {
        response.subcategory = 'MARK KOMPLETTERINGAR'
        if(measure[2] == '1') return response.subcategory2 = 'Stängsel'
        if(measure[2] == '2') return response.subcategory2 = 'Staket/räcken'
        if(measure[2] == '3') return response.subcategory2 = 'Bommar/grindar'
        if(measure[2] == '4') return response.subcategory2 = 'Stolpar'
        if(measure[2] == '5') return response.subcategory2 = 'Utrustning'

    }
    }
    const utvändigtByggSelector = (measure) => {
        response.category = 'Utvändigt bygg'
        measure = measure.toString().split('');
        if(measure[1] == '0') {
            response.subcategory = 'UTVÄNDIGT SAMMANSATT'
            if(measure[2] == '4') return response.subcategory2 = 'Fönster och dörrar'
            if(measure[2] == '5') return response.subcategory2 = 'Trähus'
            if(measure[2] == '6') return response.subcategory2 = 'Puts/betonghus'
            if(measure[2] == '7') return response.subcategory2 = 'Plåtfasadhus'
            if(measure[2] == '8') return response.subcategory2 = 'Tegelfasadhus'
            if(measure[2] == '9') return response.subcategory2 = 'Kombinerad fasad'
        } else if(measure[1] == '1') {
            response.subcategory = 'FASADER'
            if(measure[2] == '1') return response.subcategory2 = 'Trä'
            if(measure[2] == '2') return response.subcategory2 = 'Plåt'
            if(measure[2] == '3') return response.subcategory2 = 'Tegel'
            if(measure[2] == '4') return response.subcategory2 = 'Skivor'
            if(measure[2] == '5') return response.subcategory2 = 'Puts'
            if(measure[2] == '6') return response.subcategory2 = 'Betong'
            if(measure[2] == '7') return response.subcategory2 = 'Glas'
            if(measure[2] == '9') return response.subcategory2 = 'Övrigt'
        } else if(measure[1] == '2') {
            response.subcategory = 'FASADKOMPLETTERINGAR'
            if(measure[2] == '1') return response.subcategory2 = 'Sockel'
            if(measure[2] == '2') return response.subcategory2 = 'Stuprör/hängrännor'
            if(measure[2] == '3') return response.subcategory2 = 'Lister/stänger'
            if(measure[2] == '4') return response.subcategory2 = 'Taksprång'
            if(measure[2] == '5') return response.subcategory2 = 'Räcken'
            if(measure[2] == '6') return response.subcategory2 = 'Luckor'
            if(measure[2] == '7') return response.subcategory2 = 'Solavskärmning'
            if(measure[2] == '8') return response.subcategory2 = 'Trappor'
            if(measure[2] == '9') return response.subcategory2 = 'Övrigt'
        } else if(measure[1] == '3') {
            response.subcategory = 'BALKONGER/SKÄRMTAK'
            if(measure[2] == '0') return response.subcategory2 = 'Sammansatt'
            if(measure[2] == '1') return response.subcategory2 = 'Skärmtak'
            if(measure[2] == '2') return response.subcategory2 = 'Balkongplattor'
            if(measure[2] == '3') return response.subcategory2 = 'Balkongräcken'
            if(measure[2] == '4') return response.subcategory2 = 'Balkong inglasning'
            if(measure[2] == '5') return response.subcategory2 = 'Balkongskärmar'
        } else if(measure[1] == '4') {
            response.subcategory = 'FÖNSTER UTVÄNDIGT'
            if(measure[2] == '1') return response.subcategory2 = 'Träfönster 2-glas'
            if(measure[2] == '2') return response.subcategory2 = 'Träfönster 3-glas'
            if(measure[2] == '3') return response.subcategory2 = 'Aluminiumfönster'
            if(measure[2] == '4') return response.subcategory2 = 'PVC-fönster'
            if(measure[2] == '5') return response.subcategory2 = 'Stålfönster'
            if(measure[2] == '6') return response.subcategory2 = 'Fönsterbeklädnad'
            if(measure[2] == '9') return response.subcategory2 = 'Isolerglas'
        } else if(measure[1] == '5') {
            response.subcategory = 'DÖRRAR/PORTAR'
            if(measure[2] == '1') return response.subcategory2 = 'Enkeldörrar'
            if(measure[2] == '2') return response.subcategory2 = 'Enkeldörrar med glasruta'
            if(measure[2] == '3') return response.subcategory2 = 'Dubbeldörrar'
            if(measure[2] == '4') return response.subcategory2 = 'Dubbeldörrar med glasruta'
            if(measure[2] == '5') return response.subcategory2 = 'Slag- och rullportar'
            if(measure[2] == '6') return response.subcategory2 = 'Vik- och vipportar'
            if(measure[2] == '7') return response.subcategory2 = 'Entrépartier'
            if(measure[2] == '9') return response.subcategory2 = 'Övrigt'
        } else if(measure[1] == '6') {
            response.subcategory = 'TAK UTVÄNDIGT'
            if(measure[2] == '1') return response.subcategory2 = 'Takpannor'
            if(measure[2] == '2') return response.subcategory2 = 'Plåt'
            if(measure[2] == '3') return response.subcategory2 = 'Papp'
            if(measure[2] == '4') return response.subcategory2 = 'Tätskikt'
            if(measure[2] == '6') return response.subcategory2 = 'Skiffer'
            if(measure[2] == '8') return response.subcategory2 = 'Tak komplettering'
            if(measure[2] == '9') return response.subcategory2 = 'Tak övrigt'
        } else if(measure[1] == '7') {
            response.subcategory = 'ENHETER PÅ TAK'
            if(measure[2] == '0') return response.subcategory2 = 'Sammansatt'
            if(measure[2] == '1') return response.subcategory2 = 'Huv/skorsten'
            if(measure[2] == '2') return response.subcategory2 = 'Takluckor'
            if(measure[2] == '3') return response.subcategory2 = 'Takfönster'
            if(measure[2] == '4') return response.subcategory2 = 'Takbrunnar'
            if(measure[2] == '5') return response.subcategory2 = 'Beslag'
            if(measure[2] == '6') return response.subcategory2 = 'Skyddsanordningar'
        } else if(measure[1] == '9') {
            response.subcategory = 'ÖVRIGT'
            if(measure[2] == '1') return response.subcategory2 = 'Byggnadställning'
        }
    }
    const invändigtByggSelector = (measure) => {
        response.category = 'Invändigt bygg'
        measure = measure.toString().split('');
        if(measure[1] == 'S') {
            response.subcategory = 'INVÄNDIGT SAMMANSATT (PRIS PER st RUM)'
            if(measure[2] == '1') return response.subcategory2 = 'Rum'
            if(measure[2] == '3') return response.subcategory2 = 'Lägenheter'
            if(measure[2] == '4') return response.subcategory2 = 'Specialutrymmen'
            if(measure[2] == '5') return response.subcategory2 = 'Kommunikationsutrymmen'
            if(measure[2] == '6') return response.subcategory2 = 'Våtrum/kök'
        } else if(measure[1] == '0') {
            response.subcategory = 'INVÄNDIGT SAMMANSATT (PRIS PER m² RUMSAREA)'
            if(measure[2] == '1') return response.subcategory2 = 'Rum'
            if(measure[2] == '2') return response.subcategory2 = 'Kompletteringsmålning'
            if(measure[2] == '3') return response.subcategory2 = 'Lägenheter'
            if(measure[2] == '4') return response.subcategory2 = 'Specialutrymmen'
            if(measure[2] == '5') return response.subcategory2 = 'Kommunikationsutrymmen'
            if(measure[2] == '6') return response.subcategory2 = 'Våtrum/kök'
            if(measure[2] == '7') return response.subcategory2 = 'Våtrum/kök forts'
            if(measure[2] == '8') return response.subcategory2 = 'Vårdlokaler'
            if(measure[2] == '9') return response.subcategory2 = 'Industrilokaler'
        } else if(measure[1] == '1') {
            response.subcategory = 'GOLV'
            if(measure[2] == '1') return response.subcategory2 = 'Betong'
            if(measure[2] == '2') return response.subcategory2 = 'Sten'
            if(measure[2] == '3') return response.subcategory2 = 'Trä'
            if(measure[2] == '4') return response.subcategory2 = 'Plast/Linoleum'
            if(measure[2] == '5') return response.subcategory2 = 'Textil'
            if(measure[2] == '6') return response.subcategory2 = 'Gummi'
            if(measure[2] == '7') return response.subcategory2 = 'Laminat'
            if(measure[2] == '8') return response.subcategory2 = 'Trappor'
            if(measure[2] == '9') return response.subcategory2 = 'Övrigt'
        } else if(measure[1] == '2') {
            response.subcategory = 'VÄGGAR'
            if(measure[2] == '0') return response.subcategory2 = 'Sammansatt'
            if(measure[2] == '1') return response.subcategory2 = 'Målade väggar'
            if(measure[2] == '3') return response.subcategory2 = 'Tapet och väggmatta'
            if(measure[2] == '4') return response.subcategory2 = 'Sten'
            if(measure[2] == '5') return response.subcategory2 = 'Skivor'
            if(measure[2] == '6') return response.subcategory2 = 'Puts/tegel'
            if(measure[2] == '7') return response.subcategory2 = 'Väggmassa'
            if(measure[2] == '8') return response.subcategory2 = 'Träpanel'
            if(measure[2] == '9') return response.subcategory2 = 'Övrigt'
        } else if(measure[1] == '3') {
            response.subcategory = 'TAK INVÄNDIGT'
            if(measure[2] == '1') return response.subcategory2 = 'Målade tak'
            if(measure[2] == '3') return response.subcategory2 = 'Väv'
            if(measure[2] == '5') return response.subcategory2 = 'Skivor'
            if(measure[2] == '6') return response.subcategory2 = 'Puts'
            if(measure[2] == '7') return response.subcategory2 = 'Undertak'
            if(measure[2] == '8') return response.subcategory2 = 'Träpanel'
            if(measure[2] == '9') return response.subcategory2 = 'Övrigt'
        } else if(measure[1] == '4') {
            response.subcategory = 'FÖNSTER INVÄNDIGT'
            if(measure[2] == '1') return response.subcategory2 = 'Träfönster'
            if(measure[2] == '2') return response.subcategory2 = 'Stålfönster'
            if(measure[2] == '3') return response.subcategory2 = 'Övrigt'
        } else if(measure[1] == '5') {
            response.subcategory = 'DÖRRAR INVÄNDIGT'
            if(measure[2] == '1') return response.subcategory2 = 'Enkeldörrar'
            if(measure[2] == '2') return response.subcategory2 = 'Enkeldörrar spegel/glas'
            if(measure[2] == '3') return response.subcategory2 = 'Dubbeldörrar'
            if(measure[2] == '4') return response.subcategory2 = 'Dubbeldörrar spegel/glas'
            if(measure[2] == '5') return response.subcategory2 = 'Portar'
            if(measure[2] == '6') return response.subcategory2 = 'Bastudörr'
            if(measure[2] == '7') return response.subcategory2 = 'Vikdörrar och vikväggar'
            if(measure[2] == '9') return response.subcategory2 = 'Övrigt'
        } else if(measure[1] == '6') {
            response.subcategory = 'INREDNING'
            if(measure[2] == '0') return response.subcategory2 = 'Sammansatt'
            if(measure[2] == '1') return response.subcategory2 = 'Köksinredning'
            if(measure[2] == '2') return response.subcategory2 = 'Lägenhetsförråd'
            if(measure[2] == '3') return response.subcategory2 = 'Bastu'
            if(measure[2] == '4') return response.subcategory2 = 'Våtutrymmen'
            if(measure[2] == '5') return response.subcategory2 = 'Omklädning'
            if(measure[2] == '6') return response.subcategory2 = 'Lister/trösklar'
            if(measure[2] == '7') return response.subcategory2 = 'Trapphus'
        } else if(measure[1] == '7') {
            response.subcategory = 'MÅLNING INSTALLATIONER'
            if(measure[2] == '1') return response.subcategory2 = 'VVS'
        } else if(measure[1] == '9') {
            response.subcategory = 'ÖVRIGT INVÄNDIGT'
            if(measure[2] == '1') return response.subcategory2 = 'Ställningar'
        }
    }
    const vvsSelector = (measure) => {
        response.category = 'VVS'
        measure = measure.toString().split('');
        if(measure[1] == '0') {
            response.subcategory = 'SAMMANSATT VVS'
            if(measure[2] == '7') return response.subcategory2 = 'Vårdlokaler'
        } else if(measure[1] == '2') {
            response.subcategory = 'VATTEN OCH AVLOPP'
            if(measure[2] == '0') return response.subcategory2 = 'Sammansatt'
            if(measure[2] == '2') return response.subcategory2 = 'Centralutrustning'
            if(measure[2] == '3') return response.subcategory2 = 'Vattenreningssystem'
            if(measure[2] == '4') return response.subcategory2 = 'Vattenrening, forts'
            if(measure[2] == '5') return response.subcategory2 = 'Ledningssystem'
            if(measure[2] == '8') return response.subcategory2 = 'Platsutrustning'
        } else if(measure[1] == '4') {
            response.subcategory = 'GAS OCH TRYCKLUFT'
            if(measure[2] == '5') return response.subcategory2 = 'Ledningssystem'
            if(measure[2] == '8') return response.subcategory2 = 'Platsutrustning'
        } else if(measure[1] == '5') {
            response.subcategory = 'KYL- OCH VÄRMEPUMPAR'
            if(measure[2] == '2') return response.subcategory2 = 'Centralutrustning aggregat'
            if(measure[2] == '3') return response.subcategory2 = 'Centralutrustning delar'
            if(measure[2] == '5') return response.subcategory2 = 'Ledningssystem'
            if(measure[2] == '8') return response.subcategory2 = 'Platsutrustning'
        } else if(measure[1] == '6') {
            response.subcategory = 'VÄRME'
            if(measure[2] == '1') return response.subcategory2 = 'Centralutrustning värmepumpar'
            if(measure[2] == '2') return response.subcategory2 = 'Centralutrustning'
            if(measure[2] == '3') return response.subcategory2 = 'Centralutrustning delar'
            if(measure[2] == '5') return response.subcategory2 = 'Ledningssystem'
            if(measure[2] == '8') return response.subcategory2 = 'Platsutrustning'
        } else if(measure[1] == '7') {
            response.subcategory = 'VENTILATION'
            if(measure[2] == '0') return response.subcategory2 = 'Sammansatt'
            if(measure[2] == '2') return response.subcategory2 = 'Centralutrustning'
            if(measure[2] == '3') return response.subcategory2 = 'Centralutrustning delar'
            if(measure[2] == '5') return response.subcategory2 = 'Ledningssystem'
            if(measure[2] == '8') return response.subcategory2 = 'Platsutrustning'
        }
    }
    const ElAndTeleSelector = (measure) => {
        response.category = 'EL & TELE'
        measure = measure.toString().split('');
        if(measure[1] == 'S') {
            response.subcategory = 'EL SAMMANSATT (PRIS PER st RUM)'
            if(measure[2] == '1') return response.subcategory2 = 'Kontorsrum'
            if(measure[2] == '3') return response.subcategory2 = 'Lägenheter'
            if(measure[2] == '4') return response.subcategory2 = 'Specialutrymmen'
            if(measure[2] == '5') return response.subcategory2 = 'Kommunikationsutrymmen'
            if(measure[2] == '6') return response.subcategory2 = 'Våtrum/kök'
            if(measure[2] == '8') return response.subcategory2 = 'Industrilokal'
        } else if(measure[1] == '0') {
            response.subcategory = 'EL SAMMANSATT (PRIS PER m² RUMS AREA)'
            if(measure[2] == '1') return response.subcategory2 = 'Kontorsrum'
            if(measure[2] == '3') return response.subcategory2 = 'Lägenheter'
            if(measure[2] == '4') return response.subcategory2 = 'Specialutrymmen'
            if(measure[2] == '5') return response.subcategory2 = 'Kommunikationsutrymmen'
            if(measure[2] == '6') return response.subcategory2 = 'Våtrum/kök'
            if(measure[2] == '8') return response.subcategory2 = 'Industrilokal'
        } else if(measure[1] == '2') {
            response.subcategory = 'KRAFT'
            if(measure[2] == '2') return response.subcategory2 = 'Centralutrustning'
            if(measure[2] == '8') return response.subcategory2 = 'Platsutrustning'
        } else if(measure[1] == '3') {
            response.subcategory = 'BELYSNING'
            if(measure[2] == '2') return response.subcategory2 = 'Centralutrustning'
            if(measure[2] == '5') return response.subcategory2 = 'Ledningssystem'
            if(measure[2] == '6') return response.subcategory2 = 'Armaturer inomhus'
            if(measure[2] == '7') return response.subcategory2 = 'Armaturer'
            if(measure[2] == '8') return response.subcategory2 = 'Platsutrustning'
        } else if(measure[1] == '4') {
            response.subcategory = 'TELE'
            if(measure[2] == '1') return response.subcategory2 = 'Signalanläggning'
            if(measure[2] == '3') return response.subcategory2 = 'Telefonanläggning'
            if(measure[2] == '4') return response.subcategory2 = 'Ljud- och bildöverföring'
            if(measure[2] == '5') return response.subcategory2 = 'Tidanläggning'
            if(measure[2] == '6') return response.subcategory2 = 'Larmanläggning'
            if(measure[2] == '7') return response.subcategory2 = 'Passagekontroll'
            if(measure[2] == '8') return response.subcategory2 = 'Datanät'
        } else if(measure[1] == '5') {
            response.subcategory = 'EL VÄRME'
            if(measure[2] == '8') return response.subcategory2 = 'Platsutrustning'
        } else if(measure[1] == '9') {
            response.subcategory = 'ÖVRIGT'
            if(measure[2] == '1') return response.subcategory2 = 'Besiktningar'
            if(measure[2] == '8') return response.subcategory2 = 'Platsutrustning'
        }
    }
    const transporterSelector = (measure) => {
        response.category = 'TRANSPORTER'
        measure = measure.toString().split('');
        if(measure[1] == '1') {
            response.subcategory = 'HISSAR'
            if(measure[2] == '0') return response.subcategory2 = 'Sammansatt'
            if(measure[2] == '1') return response.subcategory2 = 'Hisskorgar'
            if(measure[2] == '2') return response.subcategory2 = 'Schaktdörrar'
            if(measure[2] == '3') return response.subcategory2 = 'Styrsystem'
            if(measure[2] == '4') return response.subcategory2 = 'Drivsystem linhiss'
            if(measure[2] == '5') return response.subcategory2 = 'Drivsystem hydraulhiss'
            if(measure[2] == '6') return response.subcategory2 = 'Hissar delar'
        } else if(measure[1] == '3') {
            response.subcategory = 'RULLTRAPPOR'
            if(measure[2] == '1') return response.subcategory2 = 'Rulltrappor'
        }
    }
    const styrAndReglerSelector = (measure) => {
        response.category = 'STYR & REGLER'
        measure = measure.toString().split('');
        if(measure[1] == '3') {
            response.subcategory = 'STYRSYSTEM'
            if(measure[2] == '2') return response.subcategory2 = 'Styrcentraler'
            if(measure[2] == '8') return response.subcategory2 = 'Styrsystem platsutrustning'
        } else if(measure[1] == '9') {
            response.subcategory = 'ÖVRIGT'
            if(measure[2] == '1') return response.subcategory2 = 'Ställdon'
        }
    }
    const utrustningSelector = (measure) => {
        response.category = 'UTRUSTNING'
        measure = measure.toString().split('');
        if(measure[1] == '1') {
            response.subcategory = 'KÖKSUTRUSTNING'
            if(measure[2] == '1') return response.subcategory2 = 'Kyl- och frysskåp'
            if(measure[2] == '5') return response.subcategory2 = 'Diverse köksutrustning'
            if(measure[2] == '6') return response.subcategory2 = 'Rostfri utrustning'
        } else if(measure[1] == '2') {
            response.subcategory = 'STORKÖKSUTRUSTNING'
            if(measure[2] == '0') return response.subcategory2 = 'Sammansatt'
            if(measure[2] == '1') return response.subcategory2 = 'Kyl- och frysskåp'
            if(measure[2] == '2') return response.subcategory2 = 'Kylbänkar'
            if(measure[2] == '3') return response.subcategory2 = 'Tillagning'
            if(measure[2] == '4') return response.subcategory2 = 'Tillagning forts.'
            if(measure[2] == '5') return response.subcategory2 = 'Servering'
            if(measure[2] == '6') return response.subcategory2 = 'Renseri'
            if(measure[2] == '7') return response.subcategory2 = 'Diskutrustning'
            if(measure[2] == '9') return response.subcategory2 = 'Övrig Diskutrustning'
        } else if(measure[1] == '3') {
            response.subcategory = 'SOPUTRUSTNING'
            if(measure[2] == '1') return response.subcategory2 = 'Säckväxlare'
            if(measure[2] == '3') return response.subcategory2 = 'Säckställ'
            if(measure[2] == '5') return response.subcategory2 = 'Kompostsystem'
        } else if(measure[1] == '4') {
            response.subcategory = 'TVÄTTUTRUSTNING'
            if(measure[2] == '1') return response.subcategory2 = 'Tvätt'
            if(measure[2] == '2') return response.subcategory2 = 'Tork'
            if(measure[2] == '3') return response.subcategory2 = 'Rostfritt'
            if(measure[2] == '9') return response.subcategory2 = 'Övrig utrustning'
        }
    }
    switch (measure.toString().split('')[0]) {
        case '1':
        markSelector(measure)
        break;
        case '2':
        utvändigtByggSelector(measure)
        break;
        case '3':
        invändigtByggSelector(measure)
        break;
        case '5':
        vvsSelector(measure)
        break;
        case '6':
        ElAndTeleSelector(measure)
        break;
        case '7':
        transporterSelector(measure)
        break;
        case '8':
        styrAndReglerSelector(measure)
        break;
        case '9':
        utrustningSelector(measure)
        break;

    default:
        break;
    }

    return response;

}