import React from 'react'
import { ClavisViewer } from '@artsdatabanken/clavis-viewer-web'

let clavis = {
  $schema:
    'https://github.com/Artsdatabanken/Clavis/releases/download/v1.0/Clavis.json',
  identifier: '4e00e420-101d-4d73-afd0-d909722e2b94',
  lastModified: '2024-06-11 12:39:54',
  language: ['nb'],
  license: 'https://creativecommons.org/licenses/by/4.0/',
  externalServices: [
    {
      id: 'service:nbic_taxa',
      title: 'NBIC taxonomy scientificNameId',
      description:
        'To retrieve taxon information based on the NBIC scientificNameId, e.g. through https://www.artsdatabanken.no/api/Taxon/ByScientificNameId/4362',
      provider: 'Norwegian Biodiversity Information Centre',
      url: 'https://www.artsdatabanken.no/help'
    },
    {
      id: 'service:nbic_page',
      title: 'NBIC page ID',
      description:
        'To retrieve a page from NBIC by its ID, e.g. through https://www.artsdatabanken.no/Pages/237010',
      provider: 'Norwegian Biodiversity Information Centre',
      url: 'https://www.artsdatabanken.no/help'
    },
    {
      id: 'service:nbic_media',
      title: 'NBIC media ID',
      description:
        'To retrieve a picture from NBIC by its ID, e.g. through https://www.artsdatabanken.no/Media/F27858?mode=750x750',
      provider: 'Norwegian Biodiversity Information Centre',
      url: 'https://www.artsdatabanken.no/help'
    }
  ],
  mediaElements: [
    {
      id: 'media:205826',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205826'
          }
        }
      }
    },
    {
      id: 'media:205828',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205828'
          }
        }
      }
    },
    {
      id: 'media:205831',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205831'
          }
        }
      }
    },
    {
      id: 'media:205832',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205832'
          }
        }
      }
    },
    {
      id: 'media:205833',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205833'
          }
        }
      }
    },
    {
      id: 'media:205834',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205834'
          }
        }
      }
    },
    {
      id: 'media:205835',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205835'
          }
        }
      }
    },
    {
      id: 'media:205836',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205836'
          }
        }
      }
    },
    {
      id: 'media:205837',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205837'
          }
        }
      }
    },
    {
      id: 'media:205842',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205842'
          }
        }
      }
    },
    {
      id: 'media:205843',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205843'
          }
        }
      }
    },
    {
      id: 'media:205844',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205844'
          }
        }
      }
    },
    {
      id: 'media:205845',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205845'
          }
        }
      }
    },
    {
      id: 'media:205846',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205846'
          }
        }
      }
    },
    {
      id: 'media:205847',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205847'
          }
        }
      }
    },
    {
      id: 'media:205848',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205848'
          }
        }
      }
    },
    {
      id: 'media:205849',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205849'
          }
        }
      }
    },
    {
      id: 'media:205850',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205850'
          }
        }
      }
    },
    {
      id: 'media:205851',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205851'
          }
        }
      }
    },
    {
      id: 'media:205852',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205852'
          }
        }
      }
    },
    {
      id: 'media:205853',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205853'
          }
        }
      }
    },
    {
      id: 'media:205854',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205854'
          }
        }
      }
    },
    {
      id: 'media:205855',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205855'
          }
        }
      }
    },
    {
      id: 'media:205856',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205856'
          }
        }
      }
    },
    {
      id: 'media:205857',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205857'
          }
        }
      }
    },
    {
      id: 'media:205858',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205858'
          }
        }
      }
    },
    {
      id: 'media:205859',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205859'
          }
        }
      }
    },
    {
      id: 'media:205860',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205860'
          }
        }
      }
    },
    {
      id: 'media:205861',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205861'
          }
        }
      }
    },
    {
      id: 'media:205862',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205862'
          }
        }
      }
    },
    {
      id: 'media:205863',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205863'
          }
        }
      }
    },
    {
      id: 'media:205864',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205864'
          }
        }
      }
    },
    {
      id: 'media:205865',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205865'
          }
        }
      }
    },
    {
      id: 'media:205866',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205866'
          }
        }
      }
    },
    {
      id: 'media:205867',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205867'
          }
        }
      }
    },
    {
      id: 'media:205868',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205868'
          }
        }
      }
    },
    {
      id: 'media:205869',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205869'
          }
        }
      }
    },
    {
      id: 'media:205870',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205870'
          }
        }
      }
    },
    {
      id: 'media:205871',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205871'
          }
        }
      }
    },
    {
      id: 'media:205872',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205872'
          }
        }
      }
    },
    {
      id: 'media:205873',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205873'
          }
        }
      }
    },
    {
      id: 'media:205874',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205874'
          }
        }
      }
    },
    {
      id: 'media:205875',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205875'
          }
        }
      }
    },
    {
      id: 'media:205876',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205876'
          }
        }
      }
    },
    {
      id: 'media:205877',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205877'
          }
        }
      }
    },
    {
      id: 'media:205878',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205878'
          }
        }
      }
    },
    {
      id: 'media:205879',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205879'
          }
        }
      }
    },
    {
      id: 'media:205880',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205880'
          }
        }
      }
    },
    {
      id: 'media:205881',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205881'
          }
        }
      }
    },
    {
      id: 'media:205882',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205882'
          }
        }
      }
    },
    {
      id: 'media:205883',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205883'
          }
        }
      }
    },
    {
      id: 'media:205884',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205884'
          }
        }
      }
    },
    {
      id: 'media:205885',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205885'
          }
        }
      }
    },
    {
      id: 'media:205886',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205886'
          }
        }
      }
    },
    {
      id: 'media:205887',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205887'
          }
        }
      }
    },
    {
      id: 'media:205888',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205888'
          }
        }
      }
    },
    {
      id: 'media:205889',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205889'
          }
        }
      }
    },
    {
      id: 'media:205890',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205890'
          }
        }
      }
    },
    {
      id: 'media:205891',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205891'
          }
        }
      }
    },
    {
      id: 'media:205892',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205892'
          }
        }
      }
    },
    {
      id: 'media:205893',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205893'
          }
        }
      }
    },
    {
      id: 'media:205896',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205896'
          }
        }
      }
    },
    {
      id: 'media:205897',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205897'
          }
        }
      }
    },
    {
      id: 'media:205898',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205898'
          }
        }
      }
    },
    {
      id: 'media:205899',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205899'
          }
        }
      }
    },
    {
      id: 'media:205900',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205900'
          }
        }
      }
    },
    {
      id: 'media:205901',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205901'
          }
        }
      }
    },
    {
      id: 'media:205902',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205902'
          }
        }
      }
    },
    {
      id: 'media:205903',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205903'
          }
        }
      }
    },
    {
      id: 'media:205904',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205904'
          }
        }
      }
    },
    {
      id: 'media:205906',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205906'
          }
        }
      }
    },
    {
      id: 'media:205907',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205907'
          }
        }
      }
    },
    {
      id: 'media:205908',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205908'
          }
        }
      }
    },
    {
      id: 'media:205909',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205909'
          }
        }
      }
    },
    {
      id: 'media:205910',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205910'
          }
        }
      }
    },
    {
      id: 'media:205911',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205911'
          }
        }
      }
    },
    {
      id: 'media:205912',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205912'
          }
        }
      }
    },
    {
      id: 'media:205913',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205913'
          }
        }
      }
    },
    {
      id: 'media:205914',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205914'
          }
        }
      }
    },
    {
      id: 'media:205915',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205915'
          }
        }
      }
    },
    {
      id: 'media:205916',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205916'
          }
        }
      }
    },
    {
      id: 'media:205917',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205917'
          }
        }
      }
    },
    {
      id: 'media:205918',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205918'
          }
        }
      }
    },
    {
      id: 'media:205919',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205919'
          }
        }
      }
    },
    {
      id: 'media:205920',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205920'
          }
        }
      }
    },
    {
      id: 'media:205921',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205921'
          }
        }
      }
    },
    {
      id: 'media:205922',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205922'
          }
        }
      }
    },
    {
      id: 'media:205923',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205923'
          }
        }
      }
    },
    {
      id: 'media:205924',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205924'
          }
        }
      }
    },
    {
      id: 'media:205925',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205925'
          }
        }
      }
    },
    {
      id: 'media:205926',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205926'
          }
        }
      }
    },
    {
      id: 'media:205927',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205927'
          }
        }
      }
    },
    {
      id: 'media:205928',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205928'
          }
        }
      }
    },
    {
      id: 'media:205929',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205929'
          }
        }
      }
    },
    {
      id: 'media:205930',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205930'
          }
        }
      }
    },
    {
      id: 'media:205931',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205931'
          }
        }
      }
    },
    {
      id: 'media:205932',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205932'
          }
        }
      }
    },
    {
      id: 'media:205933',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205933'
          }
        }
      }
    },
    {
      id: 'media:205934',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205934'
          }
        }
      }
    },
    {
      id: 'media:205935',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205935'
          }
        }
      }
    },
    {
      id: 'media:205936',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205936'
          }
        }
      }
    },
    {
      id: 'media:205937',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205937'
          }
        }
      }
    },
    {
      id: 'media:205938',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205938'
          }
        }
      }
    },
    {
      id: 'media:205939',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205939'
          }
        }
      }
    },
    {
      id: 'media:205940',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205940'
          }
        }
      }
    },
    {
      id: 'media:205941',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205941'
          }
        }
      }
    },
    {
      id: 'media:205942',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205942'
          }
        }
      }
    },
    {
      id: 'media:205943',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205943'
          }
        }
      }
    },
    {
      id: 'media:205944',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205944'
          }
        }
      }
    },
    {
      id: 'media:205945',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205945'
          }
        }
      }
    },
    {
      id: 'media:205946',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205946'
          }
        }
      }
    },
    {
      id: 'media:205947',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205947'
          }
        }
      }
    },
    {
      id: 'media:205948',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205948'
          }
        }
      }
    },
    {
      id: 'media:205949',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205949'
          }
        }
      }
    },
    {
      id: 'media:205950',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205950'
          }
        }
      }
    },
    {
      id: 'media:205951',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205951'
          }
        }
      }
    },
    {
      id: 'media:205952',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205952'
          }
        }
      }
    },
    {
      id: 'media:205953',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205953'
          }
        }
      }
    },
    {
      id: 'media:205954',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205954'
          }
        }
      }
    },
    {
      id: 'media:205955',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205955'
          }
        }
      }
    },
    {
      id: 'media:205956',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205956'
          }
        }
      }
    },
    {
      id: 'media:205957',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205957'
          }
        }
      }
    },
    {
      id: 'media:205958',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205958'
          }
        }
      }
    },
    {
      id: 'media:205959',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205959'
          }
        }
      }
    },
    {
      id: 'media:205960',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205960'
          }
        }
      }
    },
    {
      id: 'media:205961',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205961'
          }
        }
      }
    },
    {
      id: 'media:205962',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205962'
          }
        }
      }
    },
    {
      id: 'media:205963',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205963'
          }
        }
      }
    },
    {
      id: 'media:205964',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205964'
          }
        }
      }
    },
    {
      id: 'media:205965',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205965'
          }
        }
      }
    },
    {
      id: 'media:205966',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205966'
          }
        }
      }
    },
    {
      id: 'media:205967',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205967'
          }
        }
      }
    },
    {
      id: 'media:205968',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205968'
          }
        }
      }
    },
    {
      id: 'media:205969',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205969'
          }
        }
      }
    },
    {
      id: 'media:205970',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205970'
          }
        }
      }
    },
    {
      id: 'media:205971',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205971'
          }
        }
      }
    },
    {
      id: 'media:205972',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205972'
          }
        }
      }
    },
    {
      id: 'media:205973',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205973'
          }
        }
      }
    },
    {
      id: 'media:205974',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205974'
          }
        }
      }
    },
    {
      id: 'media:205975',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205975'
          }
        }
      }
    },
    {
      id: 'media:205976',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205976'
          }
        }
      }
    },
    {
      id: 'media:205977',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205977'
          }
        }
      }
    },
    {
      id: 'media:205978',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205978'
          }
        }
      }
    },
    {
      id: 'media:205979',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205979'
          }
        }
      }
    },
    {
      id: 'media:205980',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205980'
          }
        }
      }
    },
    {
      id: 'media:205981',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205981'
          }
        }
      }
    },
    {
      id: 'media:205982',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205982'
          }
        }
      }
    },
    {
      id: 'media:205983',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205983'
          }
        }
      }
    },
    {
      id: 'media:205984',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205984'
          }
        }
      }
    },
    {
      id: 'media:205985',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205985'
          }
        }
      }
    },
    {
      id: 'media:205986',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205986'
          }
        }
      }
    },
    {
      id: 'media:205987',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205987'
          }
        }
      }
    },
    {
      id: 'media:205988',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205988'
          }
        }
      }
    },
    {
      id: 'media:205989',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205989'
          }
        }
      }
    },
    {
      id: 'media:205990',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205990'
          }
        }
      }
    },
    {
      id: 'media:205991',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205991'
          }
        }
      }
    },
    {
      id: 'media:205992',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205992'
          }
        }
      }
    },
    {
      id: 'media:205993',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205993'
          }
        }
      }
    },
    {
      id: 'media:205994',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205994'
          }
        }
      }
    },
    {
      id: 'media:205995',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205995'
          }
        }
      }
    },
    {
      id: 'media:205996',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205996'
          }
        }
      }
    },
    {
      id: 'media:205997',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205997'
          }
        }
      }
    },
    {
      id: 'media:205998',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205998'
          }
        }
      }
    },
    {
      id: 'media:205999',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '205999'
          }
        }
      }
    },
    {
      id: 'media:206008',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206008'
          }
        }
      }
    },
    {
      id: 'media:206009',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206009'
          }
        }
      }
    },
    {
      id: 'media:206010',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206010'
          }
        }
      }
    },
    {
      id: 'media:206000',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206000'
          }
        }
      }
    },
    {
      id: 'media:206001',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206001'
          }
        }
      }
    },
    {
      id: 'media:206002',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206002'
          }
        }
      }
    },
    {
      id: 'media:206003',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206003'
          }
        }
      }
    },
    {
      id: 'media:206004',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206004'
          }
        }
      }
    },
    {
      id: 'media:206005',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206005'
          }
        }
      }
    },
    {
      id: 'media:206006',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206006'
          }
        }
      }
    },
    {
      id: 'media:206007',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206007'
          }
        }
      }
    },
    {
      id: 'media:206011',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206011'
          }
        }
      }
    },
    {
      id: 'media:206012',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206012'
          }
        }
      }
    },
    {
      id: 'media:206013',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206013'
          }
        }
      }
    },
    {
      id: 'media:206014',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206014'
          }
        }
      }
    },
    {
      id: 'media:206015',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206015'
          }
        }
      }
    },
    {
      id: 'media:206016',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206016'
          }
        }
      }
    },
    {
      id: 'media:206017',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206017'
          }
        }
      }
    },
    {
      id: 'media:206018',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206018'
          }
        }
      }
    },
    {
      id: 'media:206019',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206019'
          }
        }
      }
    },
    {
      id: 'media:206020',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206020'
          }
        }
      }
    },
    {
      id: 'media:206021',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206021'
          }
        }
      }
    },
    {
      id: 'media:206022',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206022'
          }
        }
      }
    },
    {
      id: 'media:206023',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206023'
          }
        }
      }
    },
    {
      id: 'media:206024',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206024'
          }
        }
      }
    },
    {
      id: 'media:206025',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206025'
          }
        }
      }
    },
    {
      id: 'media:206026',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206026'
          }
        }
      }
    },
    {
      id: 'media:206027',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206027'
          }
        }
      }
    },
    {
      id: 'media:206028',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206028'
          }
        }
      }
    },
    {
      id: 'media:206029',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206029'
          }
        }
      }
    },
    {
      id: 'media:206030',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: '206030'
          }
        }
      }
    },
    {
      id: 'media:f8762',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8762'
          }
        }
      }
    },
    {
      id: 'media:f8763',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8763'
          }
        }
      }
    },
    {
      id: 'media:f8760',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8760'
          }
        }
      }
    },
    {
      id: 'media:f8761',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8761'
          }
        }
      }
    },
    {
      id: 'media:f8842',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8842'
          }
        }
      }
    },
    {
      id: 'media:f8845',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8845'
          }
        }
      }
    },
    {
      id: 'media:f8838',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8838'
          }
        }
      }
    },
    {
      id: 'media:f8891',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8891'
          }
        }
      }
    },
    {
      id: 'media:f8892',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8892'
          }
        }
      }
    },
    {
      id: 'media:f8876',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8876'
          }
        }
      }
    },
    {
      id: 'media:f8894',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8894'
          }
        }
      }
    },
    {
      id: 'media:f8819',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8819'
          }
        }
      }
    },
    {
      id: 'media:f8830',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8830'
          }
        }
      }
    },
    {
      id: 'media:f8834',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8834'
          }
        }
      }
    },
    {
      id: 'media:f8813',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8813'
          }
        }
      }
    },
    {
      id: 'media:f8774',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8774'
          }
        }
      }
    },
    {
      id: 'media:f8782',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8782'
          }
        }
      }
    },
    {
      id: 'media:f8768',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8768'
          }
        }
      }
    },
    {
      id: 'media:f8455',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8455'
          }
        }
      }
    },
    {
      id: 'media:f8787',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8787'
          }
        }
      }
    },
    {
      id: 'media:f8793',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8793'
          }
        }
      }
    },
    {
      id: 'media:f8778',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8778'
          }
        }
      }
    },
    {
      id: 'media:f8720',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8720'
          }
        }
      }
    },
    {
      id: 'media:f8420',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8420'
          }
        }
      }
    },
    {
      id: 'media:f8744',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8744'
          }
        }
      }
    },
    {
      id: 'media:f8442',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8442'
          }
        }
      }
    },
    {
      id: 'media:f8726',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8726'
          }
        }
      }
    },
    {
      id: 'media:f8727',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8727'
          }
        }
      }
    },
    {
      id: 'media:f8723',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8723'
          }
        }
      }
    },
    {
      id: 'media:f8725',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8725'
          }
        }
      }
    },
    {
      id: 'media:f8729',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8729'
          }
        }
      }
    },
    {
      id: 'media:f8740',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8740'
          }
        }
      }
    },
    {
      id: 'media:f8736',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8736'
          }
        }
      }
    },
    {
      id: 'media:f8733',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8733'
          }
        }
      }
    },
    {
      id: 'media:f8717',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8717'
          }
        }
      }
    },
    {
      id: 'media:f8755',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8755'
          }
        }
      }
    },
    {
      id: 'media:f8751',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8751'
          }
        }
      }
    },
    {
      id: 'media:f8826',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8826'
          }
        }
      }
    },
    {
      id: 'media:f8824',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8824'
          }
        }
      }
    },
    {
      id: 'media:f8879',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8879'
          }
        }
      }
    },
    {
      id: 'media:f8882',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8882'
          }
        }
      }
    },
    {
      id: 'media:f8798',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8798'
          }
        }
      }
    },
    {
      id: 'media:f8802',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8802'
          }
        }
      }
    },
    {
      id: 'media:f8816',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8816'
          }
        }
      }
    },
    {
      id: 'media:f8818',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8818'
          }
        }
      }
    },
    {
      id: 'media:f8805',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8805'
          }
        }
      }
    },
    {
      id: 'media:f8910',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8910'
          }
        }
      }
    },
    {
      id: 'media:f8902',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8902'
          }
        }
      }
    },
    {
      id: 'media:f8907',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8907'
          }
        }
      }
    },
    {
      id: 'media:f8906',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8906'
          }
        }
      }
    },
    {
      id: 'media:f8898',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8898'
          }
        }
      }
    },
    {
      id: 'media:f8915',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8915'
          }
        }
      }
    },
    {
      id: 'media:f8873',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8873'
          }
        }
      }
    },
    {
      id: 'media:f8869',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8869'
          }
        }
      }
    },
    {
      id: 'media:f8871',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8871'
          }
        }
      }
    },
    {
      id: 'media:f8884',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8884'
          }
        }
      }
    },
    {
      id: 'media:f8886',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8886'
          }
        }
      }
    },
    {
      id: 'media:f8854',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8854'
          }
        }
      }
    },
    {
      id: 'media:f8850',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8850'
          }
        }
      }
    },
    {
      id: 'media:f8858',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8858'
          }
        }
      }
    },
    {
      id: 'media:f8866',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8866'
          }
        }
      }
    },
    {
      id: 'media:f8862',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8862'
          }
        }
      }
    },
    {
      id: 'media:f8917',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8917'
          }
        }
      }
    },
    {
      id: 'media:f8920',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8920'
          }
        }
      }
    },
    {
      id: 'media:f8922',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8922'
          }
        }
      }
    },
    {
      id: 'media:f8924',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8924'
          }
        }
      }
    },
    {
      id: 'media:f8927',
      mediaElement: {
        file: {
          url: {
            serviceId: 'service:nbic_media',
            externalId: 'F8927'
          }
        }
      }
    }
  ],
  statements: [
    {
      id: 'statement:c0ac9e013e7c4375943ac5a963758632',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:78dc3ab56a95486db90b4526d2f997b8',
      frequency: 1
    },
    {
      id: 'statement:3dbe2392cf194a53adce38e60d3204a7',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:035180d55f4a4b57973c07f987a815f5',
      frequency: 1
    },
    {
      id: 'statement:2d15bf9d934b43eabf2ce56b32353e06',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 1
    },
    {
      id: 'statement:533be1e7b19c4b94a74f9acb806a4039',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 1
    },
    {
      id: 'statement:781436f5169e4938b6829ccb5ac9ad70',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 1
    },
    {
      id: 'statement:734069f262ff4847bd18cd981ed5aeb2',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 1
    },
    {
      id: 'statement:5c19219cbba240a18dbaa79f84049e1e',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 1
    },
    {
      id: 'statement:ede057313bfd41868016803bb4bee227',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 1
    },
    {
      id: 'statement:c472ced2b21945f4b80928b6abd7004b',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 1
    },
    {
      id: 'statement:d53a2fe52b1a4348804853a1ecba6ed6',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 1
    },
    {
      id: 'statement:802ed29784da435fb29b2d4548f9dc86',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 1
    },
    {
      id: 'statement:881f5b3b8acb4e46836a455820bbe5c9',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 1
    },
    {
      id: 'statement:54fcf423a55840d8876e5509feafae65',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 1
    },
    {
      id: 'statement:6b0e9b1e063040559f8554764e5273b8',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 1
    },
    {
      id: 'statement:ed49e890c1074ecd9d1aa074cccaeaa6',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 1
    },
    {
      id: 'statement:5932984f03a34fd0bb3075fee4ef7442',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 1
    },
    {
      id: 'statement:c5972bad0d504bdbb444ce2090dcc45e',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 1
    },
    {
      id: 'statement:dc3aa0e0dfbd40c887cc4f653a685d70',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:9427a6e0af8c4dcc83ba4e4d02496265',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:b531c0590bf5492abe0a6663a85e4261',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:f1d3f26d54c24d828664e1ea18496c04',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:62e71963b30f4a70a74b95bac056b9d8',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:9346b5f9bd784db69def253416ffdf6c',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:1aa5872914954468bec6158b8ba174fa',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:fae880db83424a89845591a0a088698a',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:90287b2d701942daacbedb0561476bbd',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:28857658194d46c7988cf44db619744c',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:bfdf3938a6f2412c9ca5a85cc199faff',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:c3d7f5f25e4a473c815e620a54721883',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:b34121cedc9c4b8c80e203ea70d554f3',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 0
    },
    {
      id: 'statement:06009e6d02344205a01cc5eeafcf94db',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 0
    },
    {
      id: 'statement:0359cdf6df2c401491db35b8d47096ee',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 0
    },
    {
      id: 'statement:974a43b4bd934421bcab1e3ff395c26d',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:475ec1d3a1cf4782b37b437c2c99f8b3',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0
    },
    {
      id: 'statement:452b20a38f62428b9b0ba7f78f9a0a4d',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:f67d6b979a7646118362e00ff97ab4a0',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:58ad69d88648426b8af5e07bf95f0e15',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:4907e3c1786747d48f710df439e77cbb',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:5e04f061628e4bf0a45167c8e02cf3d9',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:b8435ea819b54451ad6ea0f2e79e7ab9',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:09f5316ef3a3431a8159a3284492f4aa',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 0
    },
    {
      id: 'statement:3a98b4db1ec2452ebe66f5abcea944dc',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 0
    },
    {
      id: 'statement:0412dca95b254bac8b3a17ab26c939ca',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 0
    },
    {
      id: 'statement:b082d6e426284a14960305c4595f740e',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 0
    },
    {
      id: 'statement:da67bcb8589e43b99f255af67f939135',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 0
    },
    {
      id: 'statement:08ca29c51866495f808e9ab057842ec8',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 0
    },
    {
      id: 'statement:fcb696bb932d42a594386d54e89c1ed6',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 0
    },
    {
      id: 'statement:2024104b59b14777a8fcf183aaa14576',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0
    },
    {
      id: 'statement:b441fa9c331e42c1b35ba5251c22763c',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0
    },
    {
      id: 'statement:74a71f8d99ea4741806df4574e2a2710',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0
    },
    {
      id: 'statement:4633a5b695c14b52b7b19c168541ae02',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 0
    },
    {
      id: 'statement:29542e1c17d649f0b4ef5e5c364eb97e',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0
    },
    {
      id: 'statement:f322adb53589441cb4118c78a38f47a8',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0
    },
    {
      id: 'statement:eb974cd498c049419586ea0f2560a47a',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:7dcc2dbd6363446e92b10bb0cca0ff7a',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:ede6268c398546a28b7284de75aeba0d',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:82692c95e43b4061aaf524c658ecf193',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:78dc3ab56a95486db90b4526d2f997b8',
      frequency: 0
    },
    {
      id: 'statement:8ab62f582fcc40b293229f2295519f25',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:035180d55f4a4b57973c07f987a815f5',
      frequency: 0
    },
    {
      id: 'statement:cefd5576432f41c0a3479d6c7d849498',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 0
    },
    {
      id: 'statement:0efc9af546514d46a893f2d939779d2a',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 0
    },
    {
      id: 'statement:6fe0d8076af848ff968bae3f52889119',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 0
    },
    {
      id: 'statement:8c75714a60d441b897914c57422528e7',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 0
    },
    {
      id: 'statement:bbface85810943d191b2df80854eea55',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 0
    },
    {
      id: 'statement:bf3e7ff389564e76b6b9c8419d12be40',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 0
    },
    {
      id: 'statement:26bcd75b245d4cdc96764e7e417d372d',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:9617a5b8be5e4fbf9414582d31cba8b7',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0
    },
    {
      id: 'statement:f1fe044138874a8fa989dc222c194a68',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:3b695cf798e340b582299d2326e8ad69',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:dfded45490b049d59bccc270ed88d092',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:e25a906a1a004af083c3bfe5c18620bf',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:37c0a554de4540f3bba6ae6eb019a6a4',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:685f39a5319749fc9ca6dc8f9a07c6b3',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:6c935671e8de4f85bb4dd304036c9491',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:cc4e6397a64b40b591ab19a7e8011d3e',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 1
    },
    {
      id: 'statement:fec1c7dbd7f642c88d35761af378af83',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 1
    },
    {
      id: 'statement:de8f389fa9f64bd780f84c8b3c220490',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 1
    },
    {
      id: 'statement:b7ff1e9261af443ab5907b97c06d8255',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 1
    },
    {
      id: 'statement:1ac2c0a334f64996ab67681133d8a8d8',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 1
    },
    {
      id: 'statement:b73add67e8154ba38f538bcfb131db6b',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 1
    },
    {
      id: 'statement:940eec32ed65455fb7e6333cb77684bf',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 1
    },
    {
      id: 'statement:ed0b013712fa46a488ee8e51313733c1',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 1
    },
    {
      id: 'statement:1335f30f270042e6a6498905ca6a0201',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 1
    },
    {
      id: 'statement:be40d7ca6d6b47a4ad283b66a5c7adce',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 1
    },
    {
      id: 'statement:9bb87366934e43aaaf3acfc2f136e64e',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 1
    },
    {
      id: 'statement:b1b26789df12400f992120c58d6e7b2e',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 1
    },
    {
      id: 'statement:5327f3d1653c42c0861b777f70872df8',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 1
    },
    {
      id: 'statement:447d8601e5904657b39076dc9e3cb38b',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 1
    },
    {
      id: 'statement:83083a334edf41ce878fc4133a994012',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 1
    },
    {
      id: 'statement:7f466123939946c497df18c47f8bbb13',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 1
    },
    {
      id: 'statement:bb9131ecb9d442cf879e0d2983d1188e',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 1
    },
    {
      id: 'statement:93871c2ab651462b84662829680585ce',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 1
    },
    {
      id: 'statement:cd42ee5d39e24de59651073ef9ef671d',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 1
    },
    {
      id: 'statement:1fcb708b43374e67974681503bd16816',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 1
    },
    {
      id: 'statement:7ca447b27aea46d4bf24f480394ecfc4',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 1
    },
    {
      id: 'statement:3176047d4037422aa760a3193c73e861',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 1
    },
    {
      id: 'statement:82c5c11e4ec44531b782c401e50bad55',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 1
    },
    {
      id: 'statement:8007466832d542b3990033408be6bde4',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 1
    },
    {
      id: 'statement:f2b2a0c804e94eff80fc82c5987e107d',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 1
    },
    {
      id: 'statement:5adfe1c7488746dba151e4a57dc8b164',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 1
    },
    {
      id: 'statement:2a5850984ac04220b2eabcb3e16bf609',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 1
    },
    {
      id: 'statement:f34e9f51b1db407eb51fe82dca84c548',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 1
    },
    {
      id: 'statement:da5d48cb88d94c6f9334d5194da6bd20',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 1
    },
    {
      id: 'statement:703063b7ca824c55953531f9308c718e',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 1
    },
    {
      id: 'statement:637756574ade48e4a5808266e58d4cbc',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 1
    },
    {
      id: 'statement:afe9902855204bf58aeb63251c019354',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 1
    },
    {
      id: 'statement:9982002400344bbbb91dd5352a21cf91',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 1
    },
    {
      id: 'statement:231258fac6134278b45a52d71179948c',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 1
    },
    {
      id: 'statement:f8e242de3cc04e0bbde02a520ad792d7',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 1
    },
    {
      id: 'statement:6c2f770540114b6bba75565834ad88ec',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 1
    },
    {
      id: 'statement:0c3b18024c764491accc7d15bee229de',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 1
    },
    {
      id: 'statement:00c2256fca984650832b57aaab7d18fd',
      character: 'character:01eab420010e4ffeb653432bed171497',
      value: 'state:d740f0a459f3420490e72b669bf4dd26',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 1
    },
    {
      id: 'statement:b28cfd3313384d28a711860e37af0b0b',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:78dc3ab56a95486db90b4526d2f997b8',
      frequency: 1
    },
    {
      id: 'statement:ce73ad361ddc468588fc94d89d2bc15b',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:035180d55f4a4b57973c07f987a815f5',
      frequency: 1
    },
    {
      id: 'statement:d8ab2ca883ac41e3b6cf0868ce6f54c8',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 1
    },
    {
      id: 'statement:a0ec810fe0404e8e800cf131c2f7e67e',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 1
    },
    {
      id: 'statement:3a704d212cb0484bbaa8db35c5ca1b2c',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 1
    },
    {
      id: 'statement:6d37427ec9194d6f8ca863ab769c06df',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 1
    },
    {
      id: 'statement:3058f6e08d0747998d371bef03167ef7',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 1
    },
    {
      id: 'statement:68c6388bb8f1466eb5425e4b1a3ef86c',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 1
    },
    {
      id: 'statement:9a8180cd883b44bf9331c9f9e04a6f82',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 1
    },
    {
      id: 'statement:1d962888e8ba46e6abeed7bf07b7e754',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 1
    },
    {
      id: 'statement:76d3d8afc71942e98ccf4260c407ddbc',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 1
    },
    {
      id: 'statement:e1dae7e1c4c54853bfb49efe903e3e31',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 1
    },
    {
      id: 'statement:37ebf902e2f54f70b9d072bb68aafdeb',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 1
    },
    {
      id: 'statement:1fc2518a6ce9422eaa0c00390d93cfc4',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 1
    },
    {
      id: 'statement:f7ab0fe71cbe4757ba38c418f21d8605',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 1
    },
    {
      id: 'statement:b19ce1b3232e42479806c2f7f92844ef',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 1
    },
    {
      id: 'statement:576dbe4cf437432c8f51d48836ef3968',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 1
    },
    {
      id: 'statement:4904c062a1034263837974f193ca8037',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:df70711c48a84066a8a7f95e2eb76738',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:cb838ed39b9449ac9a2b9092848f03aa',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:3f79425e200347159a9bdbe5b0d38bf4',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:ecde1aae4a0f46bc983533cca59eb166',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:96db74303c6a443abedc2073847a8326',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:2a44d1a5372445c8960000bfda04a1c1',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:562558867c1a49ca96e7b2bf94297327',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:2aad941ff5f24ff89b4f9c7183b875da',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:a2f537ab8d814104a3a36a3881ef1e02',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:56c689375fbe4966bacf3c453e2c1106',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:f984ae8ba29c4f90a2415887d8d38d47',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:14f960895ddf49d78f25b3f8f0880da3',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 0
    },
    {
      id: 'statement:fd681002ab3943fdb2619d82751668ea',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 0
    },
    {
      id: 'statement:6a265a9ba61f4adf8829ff2f273dfe32',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 0
    },
    {
      id: 'statement:3498ea5544054717a72bcf61c15c6fae',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:696469122611429bb84c737eceab0e25',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0
    },
    {
      id: 'statement:aee34b969cda43089448af4ac57a3d47',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:8d03d3d299e54338b50ef2c2a6851a7a',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:3c6c3c6acabd4380856f077f143e61e6',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:a398d756a7124c28bfa3af087066e3ee',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:822c90dd4f354d8f9894c0742f92217a',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:c6cf504749fb436b9d72f91fbac93f07',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:0f4b0e2520c7473491eb1e92d33f3141',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 0
    },
    {
      id: 'statement:5156015096894d3a9b761208b2d6ae7f',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 0
    },
    {
      id: 'statement:ed46f938fe0046fb91054fe44e775b8c',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 0
    },
    {
      id: 'statement:302eff83ea654705a1666cacbe07138a',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 0
    },
    {
      id: 'statement:33949bf13c9347c0aa8eb33f158fd65a',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 0
    },
    {
      id: 'statement:c7cf110fc6824b7e9d2d454f314a8486',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 0
    },
    {
      id: 'statement:b6fcc671085c44cf85cc1747da83d6e4',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 0
    },
    {
      id: 'statement:2104bbce2c9146cd8922e9a47d987ef5',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0
    },
    {
      id: 'statement:f5bb23a30e4c4d688b00db1e9a9df5e2',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0
    },
    {
      id: 'statement:a27dad8a9cdb4c75a599e91bd043141e',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0
    },
    {
      id: 'statement:c3b0d6e86f0c4c418ef5cbcf3aa70118',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 0
    },
    {
      id: 'statement:42a44b12aea34cc388e32d593616143a',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0
    },
    {
      id: 'statement:a4c7f3b8fbd541c6a84406a70b8bd26f',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0
    },
    {
      id: 'statement:dd0370497a6d42ae938f7c4c7d79a6e4',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:8fdd6c1b8687410e905f7ac95baad7f8',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b3cf31d972e144d3bdbade3ed062e046',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:6f6b63e26b3a4fa8b234528b91e86596',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:78dc3ab56a95486db90b4526d2f997b8',
      frequency: 0
    },
    {
      id: 'statement:5c8e2a3f399342899721f818673929dd',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:035180d55f4a4b57973c07f987a815f5',
      frequency: 0
    },
    {
      id: 'statement:30cce62c5463421e96a3db2fd25b402e',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 0
    },
    {
      id: 'statement:7eb9835d60914b248afea27ca0d0a236',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 0
    },
    {
      id: 'statement:769987bd450f452fbb26c253bf7398b0',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 0
    },
    {
      id: 'statement:dd23cd472dda4ce5ac1e93f2142ddaf5',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 0
    },
    {
      id: 'statement:95e969c198e44f53aee8dbcb59ae1f2a',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 0
    },
    {
      id: 'statement:85274a978b43441599b562cf02cf4d5b',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 0
    },
    {
      id: 'statement:0fc495a535ae46948053658e1a47cf85',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:5cee2c7b285d4278b504593bed759eb8',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0
    },
    {
      id: 'statement:6e40edf588f049ca846b62a1abeae3f8',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:746f05eb12884f12b2395768be328e8f',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:bf3983c4ea1b42838931edf9274dbbf2',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:f9b3c9eeb75a4efca27d6265bb2b0f13',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:3c8bac599f1445e1aae7261fb0f89c0d',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:9cee83ea54f34a88a007b10a8c8ff62a',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:f6e67d5db32f401086df050dd55fed3e',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:40cb7a8fb1af4c6d8bd4e022136c404b',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:54a294b8ebd245efbbb2107869c743de',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:ad8a1f6fc74d4fe38645e94a9a41ae6d',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:e80bc1e2269f4ccea9db491267404461',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:967a118e784e45c18f4c276f4d034e10',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:965378ae23364cbeb62c4f5df4d6f5e9',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:5151e6ecdae445d5a390a194a8743d4d',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:4da3fbe72b2c448c8bc870a7d434af29',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:468de806503b477196b1f3b4b3881ce9',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:be338692a7f04ac6945ddef43c16cb90',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:3b3128f4a67747e98e77d4764c1494bc',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:1497957076f6401fa8841c8b271742d6',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:ba876519c80b49cebea351452874cadf',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 1
    },
    {
      id: 'statement:e0acfcfe9dc34c8ba79e76998dd64d29',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 1
    },
    {
      id: 'statement:3820305ca8804b7fb884f79d1d9e5d50',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 1
    },
    {
      id: 'statement:01bba684b11d40fba161a0fd1e81bba6',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:a980a7313e2341a4a60a45cfc13503b0',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0
    },
    {
      id: 'statement:6b828580160f48a4b23686ab322139df',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:ac8cdfa4a9d341b6967f21f52d62c315',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:f8ba1a5908c84c658c06718e17ef9149',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:d9a9542367a644d79935333f7c9265fe',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:c2d12264752546789146b82b55eb87b0',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:9910faf644434bb8b866adde73e52ecc',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:d6d898d2fc9f4a16b619eeb3b30038e6',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 0
    },
    {
      id: 'statement:7b0343593ba94da7a161cbf87b531bb0',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 0
    },
    {
      id: 'statement:6da2dab5a2f342b8b08ac9afaf4531a6',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 0
    },
    {
      id: 'statement:20c0e3b6c00849e78b0df7ca847cd5de',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 0
    },
    {
      id: 'statement:154952cd3f9a49cfaa35ac571344f1e7',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 0
    },
    {
      id: 'statement:660f2ca87e1745daa8e708a76c651684',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 0
    },
    {
      id: 'statement:3bed9872ee284d3fb86913740cd4e5e2',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 0
    },
    {
      id: 'statement:e133c1d505b94f70b9e7e5682c8e664a',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0
    },
    {
      id: 'statement:87203e8f85e042b68194689c3ab27464',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0
    },
    {
      id: 'statement:8254c5a37ede4807bf0e016a398b4015',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0
    },
    {
      id: 'statement:d66d4a6ecf67484ca746fc9402783a60',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 0
    },
    {
      id: 'statement:9efcc0b1b5ea4dc79be86018cb2bf313',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0
    },
    {
      id: 'statement:099a38c2ae054e948b6e4f0153801c1c',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0
    },
    {
      id: 'statement:47219be0b1484a49b77c62a9c3beb23a',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:6f1a7d6e41584b04b06988f1636e5d02',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:b7c14d6db2e5482594081b34f3f636d3',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:17bcd3a28a7944dd998adde4890e5893',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:78dc3ab56a95486db90b4526d2f997b8',
      frequency: 0
    },
    {
      id: 'statement:2e12efb4f8534b3cbcc1051d82337f1a',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:035180d55f4a4b57973c07f987a815f5',
      frequency: 0
    },
    {
      id: 'statement:7d9ee792bcf241128bdd7704c18535b7',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 0
    },
    {
      id: 'statement:f2f3c713403848ff9382c50255019c5a',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 0
    },
    {
      id: 'statement:5be64c0138714d11b68f40f80c1021fb',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 0
    },
    {
      id: 'statement:a5f2a6763fba48cca557fd6459bd0e2f',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 0
    },
    {
      id: 'statement:590303005a2443fd989ce23d829d795d',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 0
    },
    {
      id: 'statement:e518c4bbb529436f8374327048ea1a6d',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 0
    },
    {
      id: 'statement:11e274853ad942648bbff0a4979e7758',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:982765ebb8684d1aa2289de48478cefa',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0
    },
    {
      id: 'statement:2efe3885fa9c4ff296afd631cb19467a',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:392f8dd632994b42b62f411fe8b69feb',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:0de197bba6ea4225945244ae7c79391a',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:630fd1abd2cc4bf89fa4663fb496cc24',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:26956c9c40034bacbfd60ff280f62389',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:c525013107554f22993cc95f11c08593',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:7c97e1b877204e0383878642fce26737',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:3cc57736b5974c8a8b3fa0b9ca3ecbb9',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 1
    },
    {
      id: 'statement:a514401f5f7b4963a6fda96443e46696',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 1
    },
    {
      id: 'statement:b70d8f5f2c6a4b41be25bdb0ddbcb175',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 1
    },
    {
      id: 'statement:68ecae7e2a304aeaab732f916d2dc90f',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 1
    },
    {
      id: 'statement:f7e378e2f434405a861e92e20ee2fea6',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 1
    },
    {
      id: 'statement:b76a791e39984c80996f85133d3412ab',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 1
    },
    {
      id: 'statement:e02079e193c548f3a96b4a7df318f08a',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 1
    },
    {
      id: 'statement:d0f143f4ea4c454588646693db4f63fa',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 1
    },
    {
      id: 'statement:362473c9147449e98a72c072603acb74',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 1
    },
    {
      id: 'statement:aed8afa794bf4292b8d0fc4e5f21ad15',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 1
    },
    {
      id: 'statement:a6c10f5e5ade4a5687dbb056b734cd2e',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 1
    },
    {
      id: 'statement:3b65730026a24cd8b1f9cb1847de8d9b',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 1
    },
    {
      id: 'statement:44c1805fda5440dba6ff7c2dc0f83747',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 0
    },
    {
      id: 'statement:f7a4c98cbd264d8b8772a24a7f41231d',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 0
    },
    {
      id: 'statement:e63ca038a85b495b8c702c8f1261f0e2',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 0
    },
    {
      id: 'statement:2081ffa01c274dc5ba308d855c5b1c8d',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 1
    },
    {
      id: 'statement:c89b640bdd064f44a7b1509d8b7ce878',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 1
    },
    {
      id: 'statement:392718f0fc6b47939348772a14079c0e',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 1
    },
    {
      id: 'statement:a2484ea602344b69be1bb9533f9cde5a',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 1
    },
    {
      id: 'statement:9092950e1a0547e3b1afb3e3b011b2f8',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 1
    },
    {
      id: 'statement:3bc4db4304554901ad8b1cd78215620f',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 1
    },
    {
      id: 'statement:207582f77263471e9973309c698fc7b8',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 1
    },
    {
      id: 'statement:99c4c08f1317465c984995b649d1f350',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 1
    },
    {
      id: 'statement:3f477e991ab54065afa00906efacf924',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 1
    },
    {
      id: 'statement:190d68a1858c4083930e83a17b7e042a',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 1
    },
    {
      id: 'statement:54aa1beae0d345b58cd008cc39a64a41',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 1
    },
    {
      id: 'statement:6047d2bdb80c45c28b1715d2576a7435',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 1
    },
    {
      id: 'statement:910cd4d96223454cad871b85b103d387',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 1
    },
    {
      id: 'statement:5aec017464a24c24822687c29c62bf2b',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 1
    },
    {
      id: 'statement:f8b4d7bcac3a4ec59e364a10dc45f4f6',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 1
    },
    {
      id: 'statement:4ec038044b5f4d799041fe5df3f4b518',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 1
    },
    {
      id: 'statement:d914d5079d3e4391918705dcad8a612a',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 1
    },
    {
      id: 'statement:5bcd856a02f54a008ea2184ff9707dca',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 1
    },
    {
      id: 'statement:8db39852eaf4468294f6b15da006648f',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 1
    },
    {
      id: 'statement:8200eb9b37cf40bf9798e8fc9074bc56',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 1
    },
    {
      id: 'statement:6e93290c5d9e457f977de0f1f406db0e',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 1
    },
    {
      id: 'statement:99311d27dc40411caedfa261f9fe4265',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 1
    },
    {
      id: 'statement:b0cc5f16c33843e4a7b88d46b3ce5506',
      character: 'character:968ccdf71e4840558061183dd87be09f',
      value: 'state:04065cd4122c43e89efd1df51b0e2042',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 1
    },
    {
      id: 'statement:fb41d1cdaf3e4050b18447f20aaef508',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:78dc3ab56a95486db90b4526d2f997b8',
      frequency: 0
    },
    {
      id: 'statement:863fe262b42d4918a4ca54cc0413691a',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:035180d55f4a4b57973c07f987a815f5',
      frequency: 0
    },
    {
      id: 'statement:7434375c7d1e4fe28378b42c5cbe13ba',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 1
    },
    {
      id: 'statement:614df3f5173748938b84d960dafe33ed',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 1
    },
    {
      id: 'statement:a6910627eb5a4e07aed6683303d5161c',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 1
    },
    {
      id: 'statement:824a16402bff4f1e88507c8946924a5e',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 1
    },
    {
      id: 'statement:118ebbc1ae3e421aab50b610e5f24696',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 1
    },
    {
      id: 'statement:ac7de6f47f1344eb9b8fa1fd8ca8e933',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 1
    },
    {
      id: 'statement:973180aa6688462a920aece75aa10baa',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 1
    },
    {
      id: 'statement:5457dd7481cf407eb2f99a517ba055f9',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 1
    },
    {
      id: 'statement:ed94d85732504269ab26c2759d996c12',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 1
    },
    {
      id: 'statement:e5c39a3c7c244ab0b96aa3645fc7fee5',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 1
    },
    {
      id: 'statement:fbe93e3c8cb54755921d0a127ed053c1',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 1
    },
    {
      id: 'statement:f439a27d81a24d5092acbf3a60de5eca',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 1
    },
    {
      id: 'statement:dcdc0fa612cf43fb8351511ac4b714ee',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 1
    },
    {
      id: 'statement:007444b82e514fa882bda8b137fea104',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 1
    },
    {
      id: 'statement:5203700fa6cf4ccaab07d91a6e28ff3f',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 1
    },
    {
      id: 'statement:d0d3485f5efd4b53bef1112764af5359',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:c80ac0dbd86f43f09d4c55013ffd249f',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:81929232485347b0bf429c14ea1def19',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:fde4833fab1c46f987d7a232ec3a456a',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:f767b62917d74825ae3c1e6f72ebbdef',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:2e2e8d8ae7c3429189ee72bde9f55027',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:68f0a1c27d61414a9927fd34da3eb64e',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:6deecf865f4647febc0a9e0ee5402b5a',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:52b1650b13e54bdd993f891e4809100d',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:18566dccfc92459da2f5beaea344e7af',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:91d3abad7d284233af46d69a6c597c7c',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:2a95a9f83e974219acdf329ce8c6d596',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:9ee47f5809e248369755c79592e045d2',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 0
    },
    {
      id: 'statement:749d2bf6b6fe4061ada1ae02058db4be',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 0
    },
    {
      id: 'statement:82345998e9dc4449b0271a3c792a72d6',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 0
    },
    {
      id: 'statement:871e059a61ea4bfca09120ae104a6f98',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:018d4f1ce0794ae4bc706c364dcc511f',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0
    },
    {
      id: 'statement:5e8c72ddecff480f95e06c605af60408',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:193b2c5a4f66485c9eb044668ab2e66f',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:2a48286f2f9745ba9fc3a1fe843db62d',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:46c1167d06584ca98541c13b90a71d37',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:9c7fa8a241ab40c397e1cf66425b61aa',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:d3307cd4bb674dbe8b7aa42f6f6a5869',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:a194c94a231544f2b741bc35eaed89aa',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 0
    },
    {
      id: 'statement:5450a7391b1d47b7bad1fe9858abfea4',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 0
    },
    {
      id: 'statement:3086fd5f5376441f99cdf424410f9926',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 0
    },
    {
      id: 'statement:ca395da7639a4e139785cbe20af1dbb4',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 0
    },
    {
      id: 'statement:88d4cc0747ff404f82914c9ea6f509ab',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 0
    },
    {
      id: 'statement:77962fd12f764f6f9b17cb6836fc5099',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 0
    },
    {
      id: 'statement:ce248c707c2d468581726a0cade9a7d5',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 0
    },
    {
      id: 'statement:9f03e2321bcb4c7ba7c1c7afa397175f',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0
    },
    {
      id: 'statement:57abf2f3cc0744cf881d29a689551980',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0
    },
    {
      id: 'statement:4da0bae88a64486286b4176cfec31930',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0
    },
    {
      id: 'statement:67df8c720a9f4004a012010a327274c8',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 0
    },
    {
      id: 'statement:7f5a60bffe9a40728c8006ad50f77dbb',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0
    },
    {
      id: 'statement:e82217e1e86c4ed5b5a382ce3a0dad05',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0
    },
    {
      id: 'statement:f6149c710fb0426a92a0dd366e4993ee',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:632671a1ad5c4ec5a9abb767c6b67b13',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:a76b0bc3ceeb41cc8d7e565ed8bbf1f2',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:78dc3ab56a95486db90b4526d2f997b8',
      frequency: 1
    },
    {
      id: 'statement:df47675dd08f4ab799f0fa3fcb9af30d',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:035180d55f4a4b57973c07f987a815f5',
      frequency: 1
    },
    {
      id: 'statement:0f399589caa54668923c98f74730da84',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 0
    },
    {
      id: 'statement:492a6701167a47c586567215e21f0656',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 0
    },
    {
      id: 'statement:3b17d5587aa3424284eea82080cfd77d',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 0
    },
    {
      id: 'statement:35cb0a38f7fe4ed2814ee82e04324731',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 0
    },
    {
      id: 'statement:61da1407f3b9462381b3ed784dce8b7e',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 0
    },
    {
      id: 'statement:e39cc44f19634f63b23ba7347b283cda',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 0
    },
    {
      id: 'statement:392de39a4a9f44e799f01d90f1ef503c',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:94901cfe2579466fbfd257a3783cb7d1',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0
    },
    {
      id: 'statement:7a0292c9c7894a1c88fb72bac84459d1',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:ec8dff3fd5054560b8e0e74dd144e3a8',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:c6e107fe1b5b4e8da7b522788b90ab90',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:6bed594735ce4c6699fa50395fd19e4e',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:eaf4b574735a4fce9f7188a6ffcba9c8',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:e550a9190590424d98c24223106aac6b',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:06f78cfe79354066b0d577732448057b',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:29f271c1ec484d54be974cd8bcd287ed',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:65189844e5724fe88aecccb72f6f192a',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:697ef0168d744dcb913adf56759af8ba',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:20902fd82dfa4d97989bac42f775383b',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:c4868089b9a14aa8a10ab5bad2b85f79',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:a26b35d16c4342dab625751657861ee6',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:049c76ae63514479aa6ef45e759d003a',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:6ac60e765e44457ba12476bac3441c29',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:f15a7cc0941f4fa39761837e4e89f029',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:ba557df846bb49278b24e71118fbb642',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:f614d675af814090a0d0b43f18082519',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:655447cc0b514d2d813b64ccb41767a5',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:0a3940f87e8b42ab96cf23f28bb89051',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 0
    },
    {
      id: 'statement:4785e52009b24d638cc27ac4e31f8029',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 0
    },
    {
      id: 'statement:6826923356b44fc19cf93b4e4bca673b',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 0
    },
    {
      id: 'statement:42bbe83ce9f84d03b0f3e0c7300d25ab',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:e48b65841c28439bb001eee9a3520bd9',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0
    },
    {
      id: 'statement:cc87fdd6f1c345c4a22f7cd6c465b725',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:5bc4532171dc4730983ca3bfbaa70b6f',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:08185bce386a44c891fa6000b665c525',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:b33be1c80c0341a1932b148ef2f70f60',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:c99e25588e2848b18585985cc463ec30',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:f770a69a52464f5a9a2284d2d70dcc45',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:1eb2463fdf6e46b393dca36c3c758abb',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 0
    },
    {
      id: 'statement:28bca9e99da343d79913189783e3a06e',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 0
    },
    {
      id: 'statement:7cbad955eadd467692d696187e6588e1',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 0
    },
    {
      id: 'statement:41f660dab10c4e39a8ebf221eaf9ed0b',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 0
    },
    {
      id: 'statement:9b9e28cce4064e7da9071295ff53ec29',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 0
    },
    {
      id: 'statement:c12ab7a990304d6cbb530c6068d1d214',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 0
    },
    {
      id: 'statement:5750fded3cd144cdb4bd992a4a22a823',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 0
    },
    {
      id: 'statement:54e05b9aeff1463285326a091de3797d',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0
    },
    {
      id: 'statement:4cebe6dd2c50486fa934c33cd7cf14dd',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0
    },
    {
      id: 'statement:d4e59ddabf014af69819234a00b8f3a4',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0
    },
    {
      id: 'statement:885caedae0c24fc7bd7f7c545678c452',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 0
    },
    {
      id: 'statement:6d40d9f4a8644c1abd5487f3ffddd40d',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0
    },
    {
      id: 'statement:554e52e00cfa43f490db669eecc1e527',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0
    },
    {
      id: 'statement:1c7f096c4b194132aa5c642e52ea13e0',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:e6a7500fc1674b0ba5006d516b305672',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:95e231c6848f43e197def0ba5475573c',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:06808907c6b344f4951e30e39b188e29',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:78dc3ab56a95486db90b4526d2f997b8',
      frequency: 0
    },
    {
      id: 'statement:8504b86f5a1d48e28cee19d01682540f',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:035180d55f4a4b57973c07f987a815f5',
      frequency: 0
    },
    {
      id: 'statement:7b68cfdaa7504d498c05ef277ef631d3',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 0
    },
    {
      id: 'statement:5f0d2ac196c24fc1873e09ad5386cdbe',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 0
    },
    {
      id: 'statement:bd809231efc04772a0ebb5d9df604af9',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 0
    },
    {
      id: 'statement:bb807455e3a84fac9829da5d05192955',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 0
    },
    {
      id: 'statement:9561eafacf70451cbf9ce9b9c6afaf05',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 0
    },
    {
      id: 'statement:a6efd4605c6e4e8cbea3875bea0d35c9',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 0
    },
    {
      id: 'statement:82ac5523218444eca2855130617c8c40',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:25748a1844014e64a4338756198ad6eb',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0
    },
    {
      id: 'statement:3f00f0b1613a4cdf8f926e91073b85a4',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:9416902ad9c347d4a4c139d45897f172',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:46182e4433f04230bf6f54d27f1bcf19',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:39f10d0e8c624af580eefbfcd6015aa5',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:377dfa8ef23d4a40abdc14aef0d75f70',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:d3b745fe646d48c299fdc38d68101150',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:8882979818b74cf5ba43ad4f609a1d56',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:4c4f0ef3be534999a5cab303f413ea3e',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 1
    },
    {
      id: 'statement:d1a4cb121670453397f6730501451da4',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 1
    },
    {
      id: 'statement:7959ae6f8dc04669b4a095e840080892',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 1
    },
    {
      id: 'statement:50f7c97178014093b3f35fa28e7bd778',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 1
    },
    {
      id: 'statement:8a4d68b7b1cc472a89df9de06a3729ae',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 1
    },
    {
      id: 'statement:a66eb5f81aa546b5ada342341d37df26',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 1
    },
    {
      id: 'statement:cb6e1aabf425425fabf6b0e5e49b3967',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 1
    },
    {
      id: 'statement:471214c6b46b4dbaa525e65afb87889f',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 1
    },
    {
      id: 'statement:2f426d649e84460aa3661991a2b672fd',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 1
    },
    {
      id: 'statement:c443da734f4742d7b969ae7ebf9299db',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 1
    },
    {
      id: 'statement:79e5209b596b4be39e88e3457777bb43',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 1
    },
    {
      id: 'statement:4678794efa2045f386a54926745a7332',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 1
    },
    {
      id: 'statement:55b9937a03b04123a4e76f67756c997e',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 1
    },
    {
      id: 'statement:841977b189054465870f00cf6419f826',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 1
    },
    {
      id: 'statement:68b8d21998fd488884fcd2a0d1c0822f',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 1
    },
    {
      id: 'statement:29b0c1c72f4d41fd926bff48fcd0beb1',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 1
    },
    {
      id: 'statement:f76e024454fb4aecaf1416f2ef919906',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 1
    },
    {
      id: 'statement:cb10297d6db34a37ba14ae41d43bd8f4',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 1
    },
    {
      id: 'statement:8de8b70f318e4f27b8631fd4fe3404d2',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 1
    },
    {
      id: 'statement:229ee426548145b8816992be84fb6f16',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 1
    },
    {
      id: 'statement:a3f40ac1ecd14ca0868907713309fa67',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 1
    },
    {
      id: 'statement:49779422dbbe431ebb54d4b6861ae339',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 1
    },
    {
      id: 'statement:8eff0c444a054d56ba4e3e517ef55c77',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 1
    },
    {
      id: 'statement:aa096d817cef489ba125b390f0889b87',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 1
    },
    {
      id: 'statement:b283375ce7574ba38898be97cb568003',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 1
    },
    {
      id: 'statement:05549089178a4daf8e4a650c6755702a',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 1
    },
    {
      id: 'statement:06a1e008e6b04f0d9ee7acc79f6e68d8',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 1
    },
    {
      id: 'statement:b37459a1f9c04a6b862666c46dbb018c',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 1
    },
    {
      id: 'statement:eeee2eabb4494e79bb4ef91759737964',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 1
    },
    {
      id: 'statement:6bc4c3883d334e87be95d267dd5959c1',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 1
    },
    {
      id: 'statement:f459262ab314406d8aabd9468b7f3ee1',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 1
    },
    {
      id: 'statement:82de20d152cd45ddb9e4821473c8d0f7',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 1
    },
    {
      id: 'statement:262e89198d02451eb200cd9521f5c596',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 1
    },
    {
      id: 'statement:3b2a0e125a3e481ab48fa350bb00f776',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 1
    },
    {
      id: 'statement:8cee146a4b184103939df06e1bd856b4',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 1
    },
    {
      id: 'statement:146235e14e1c401690225565cc2141dc',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 1
    },
    {
      id: 'statement:0e86eacada6f4af18fd80e50bc72693b',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 1
    },
    {
      id: 'statement:f998d2a927cc404f967a82494a3e646d',
      character: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      value: 'state:86a2af7956d7461e84a899a9f8e4a232',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 1
    },
    {
      id: 'statement:9e269f38b0b84b7ea576560a93a093cc',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:78dc3ab56a95486db90b4526d2f997b8',
      frequency: 1
    },
    {
      id: 'statement:da5c1ffb1724493aa09d212eb2f39d71',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:035180d55f4a4b57973c07f987a815f5',
      frequency: 1
    },
    {
      id: 'statement:171766ccad2341ad86324fc13dcdb3e4',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 1
    },
    {
      id: 'statement:b4eec9c8b78b44c9bea46c395d526e62',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 1
    },
    {
      id: 'statement:967132c132b6430b984024242294c637',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 0
    },
    {
      id: 'statement:d2cb701fc3f047629f831c443109db0b',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 1
    },
    {
      id: 'statement:b9944145f8924e109f23eb77e969643f',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 0.5
    },
    {
      id: 'statement:6e6cc0c0c06a4a6683d724bdbf0b72ca',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 0.5
    },
    {
      id: 'statement:9d06768050d24ce98fc95f08a88425c3',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0.5
    },
    {
      id: 'statement:bf576149cff141f39d7cf1001868bded',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0.5
    },
    {
      id: 'statement:6dce8bbb572b4b3b9212113603236bdf',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:6f23e2ec5ac1483f887a29046162c6bc',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 0
    },
    {
      id: 'statement:dd5bf3031f2c4d8897394d045f6cd20b',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 0.5
    },
    {
      id: 'statement:1aaf586de3684905b98554291b8ec296',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0
    },
    {
      id: 'statement:4a8c42b0a5484cc7a534e2d1fd04037a',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0.5
    },
    {
      id: 'statement:fcf712ba25f6440ea388dab0d883f6dd',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:d7816f44e87744528854a26207c90dc7',
      frequency: 0
    },
    {
      id: 'statement:d5010a173c8840ff98315f9490c5a9fd',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:f58c95cf4def4ee09065b00fa90a3e3a',
      frequency: 0.5
    },
    {
      id: 'statement:3450027113e84f6f825b848b042a025b',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0
    },
    {
      id: 'statement:d0e9b32b96214458a61f17c2bcfb8e01',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0.5
    },
    {
      id: 'statement:8b80b5b88a2b4e5f9cd65358118291fd',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0
    },
    {
      id: 'statement:25b33b01c40d468cb0116b8c965b2cb7',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0.5
    },
    {
      id: 'statement:5a8347b4ddb54888b197f7d7a2c18f54',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 0
    },
    {
      id: 'statement:c802364bf97d469ab0c737a2b97f3f15',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 0.5
    },
    {
      id: 'statement:3761b47d1de944fb864e6ed0a02747a6',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:36b17b8000c644a2b7d517e80d7d17ae',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:6a3ce6593ffd48a0b1c1bdc184398b0f',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:3aecb98a36954cff9a2fca6c80270900',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:48d9ffa6ee524dc08bdbbbee498ab4cf',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:b64161129180445ebd64d44f697ab460',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:d806a169d9d64397a52e4a477eb41a64',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:a33503e33ee84b4ba0eeb5140bff06ea',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:b3c44c177df74417954573f35d704314',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:039d8bfe0c204f9284932851a2c11d00',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:ac7e2e1bdc074c46aec1a5b7121e7e82',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:c842f224eb894274a453d395578d42ca',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:e4bd1f9dceea4da29530d3d444f021e1',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 0
    },
    {
      id: 'statement:d70496789a7044d0951883b1fac98667',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 0
    },
    {
      id: 'statement:10e7310dc4dd44dbbf8ee8dfd5624da2',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 0
    },
    {
      id: 'statement:30043aa1476c49a2beee3893f2fdec07',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:1b2d774322704458a9241a7b4dd2d5bd',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0
    },
    {
      id: 'statement:188ab13481e645f78cb881feee139ca7',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 1
    },
    {
      id: 'statement:08b3e0cf109b4b0bb7a7e9032da7ee80',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 1
    },
    {
      id: 'statement:2795bfedeb0f498fa0da5ac7ba175f88',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 1
    },
    {
      id: 'statement:41e3d352674f4816a7317f689ce7d2d3',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 1
    },
    {
      id: 'statement:231f7d918553453b9b9c66da598f3789',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 1
    },
    {
      id: 'statement:9077842110a94f7f967d237a618ee0db',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 1
    },
    {
      id: 'statement:225326986a1f47a2a711705cfb2b6d24',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 0
    },
    {
      id: 'statement:32676f392f8a4f8da372e6103ae75705',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 0
    },
    {
      id: 'statement:e385712e018d4117a612cdca8e095c30',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 0
    },
    {
      id: 'statement:bc2e1b8d405b47218b2e011c428636f6',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 0
    },
    {
      id: 'statement:d3ea454ae926419eb467e754ecfab138',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 0
    },
    {
      id: 'statement:5d5e23b3542846a79849e247a4fd5829',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 0
    },
    {
      id: 'statement:da69e93eb75747c8b1221c991b942ea8',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 0
    },
    {
      id: 'statement:6cfdc4de06764dbd8e3eb22785cdf897',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0
    },
    {
      id: 'statement:9dfe9a8496ae4833b6c9f8d600a1c823',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0
    },
    {
      id: 'statement:8afdaf89b5d446608d86ed4090d18366',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0
    },
    {
      id: 'statement:1543e360d558436796215df220c235c3',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 0
    },
    {
      id: 'statement:4bf4d57d7c334f18a1522806a6e5b64f',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0
    },
    {
      id: 'statement:028cac63760540499133bc29d10f6221',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0
    },
    {
      id: 'statement:d19b83afcec44742b41d56ca22f7939f',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:a6842bd2ce6f4db3a424a21df8bedee3',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:91b42803b6d849a6a84b213888a87254',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:6b12ae9db7a14b4b9b10fb8dd5084db8',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:78dc3ab56a95486db90b4526d2f997b8',
      frequency: 0
    },
    {
      id: 'statement:d7b2de87894e44459923ed21bb8291a4',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:035180d55f4a4b57973c07f987a815f5',
      frequency: 0
    },
    {
      id: 'statement:741a490ca21b40659d7fc35465f62ac6',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 0
    },
    {
      id: 'statement:c27a6dc94200411ba80806a66ae8245c',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 0
    },
    {
      id: 'statement:38391945614349a0a3b7385905161968',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 1
    },
    {
      id: 'statement:804780bfaff242af8b0b59e3dfbb67a0',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 0
    },
    {
      id: 'statement:ec7e9c58c77b495c91dfc33ed5010d48',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 0.5
    },
    {
      id: 'statement:f07df2bc6d1045a1bdd11a01dfcea617',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 0.5
    },
    {
      id: 'statement:78e13132705f4405b6721c2129d74c33',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0.5
    },
    {
      id: 'statement:72320f336ad8456a9d1b77ae82271fb8',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0.5
    },
    {
      id: 'statement:5b4dff267d1e4cf5b4ced86f65d545a3',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 1
    },
    {
      id: 'statement:a11d45ed2792421d852a6d3413d9bf6b',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 1
    },
    {
      id: 'statement:b079f66bf7c94a3fbb488625abf54d25',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 0.5
    },
    {
      id: 'statement:fddae3568e7e4eb9b085e6696e620351',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 1
    },
    {
      id: 'statement:d8762fca446f4733a844dde105fd1e5a',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0.5
    },
    {
      id: 'statement:3f327f25cc0c4414bccd8c490a86c58c',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:d7816f44e87744528854a26207c90dc7',
      frequency: 1
    },
    {
      id: 'statement:a990a6f3b23b412d8235c5cc1e403ffe',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:f58c95cf4def4ee09065b00fa90a3e3a',
      frequency: 0.5
    },
    {
      id: 'statement:d8f96881169d4d03a3e050e3f8a7c14f',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 1
    },
    {
      id: 'statement:a78842201367433cacbac3ab6880e19d',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0.5
    },
    {
      id: 'statement:f39aeeba2e624b2ab277ffbbef543696',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 1
    },
    {
      id: 'statement:4ffdb48686f445058ce0ab178776191f',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0.5
    },
    {
      id: 'statement:7604c1d8ad4a4c9398401072c1537e9a',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 1
    },
    {
      id: 'statement:9a6c151a45e946c497df94683d3b62fb',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 0.5
    },
    {
      id: 'statement:f02b16eea1be496bbb76fa0f58822e31',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 1
    },
    {
      id: 'statement:3e1d7199e20e4e5090f8146a2d6de514',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 1
    },
    {
      id: 'statement:b068247ade7b485686723112be25986c',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 1
    },
    {
      id: 'statement:6abf7ab5f75f4ef78956278950dfdecf',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 1
    },
    {
      id: 'statement:3259c840e5394675ba46df1c3418ee7c',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 1
    },
    {
      id: 'statement:08aae138d9d540d1bda97c0dd4c01dbd',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 1
    },
    {
      id: 'statement:e873aa2cc00641d5a5a77ca541e4f2b4',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 1
    },
    {
      id: 'statement:cef27e3e710648cba1ed6086e22f8c99',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 1
    },
    {
      id: 'statement:c4add669eb5b4a7fa7dd2914b51e791c',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 1
    },
    {
      id: 'statement:946a733016a849a6bffcded0c96ee341',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 1
    },
    {
      id: 'statement:489e07685e7449ef86d4f07c7ac33a96',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 1
    },
    {
      id: 'statement:005b053b7333441b9fff3a4b98e9b8a4',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 1
    },
    {
      id: 'statement:8a365be79bfc490b8e486efbd9af5ba8',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 1
    },
    {
      id: 'statement:aa170640a39c4b05b88dd45328aa672a',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 1
    },
    {
      id: 'statement:88b624fccbea441e82266cd9c2567267',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 1
    },
    {
      id: 'statement:6f9673c58b0147a3acb18b0992503753',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 1
    },
    {
      id: 'statement:1a4717ea33e041e1bd06ee12116a250d',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 1
    },
    {
      id: 'statement:caa517c9a39d4cb8844b4c3e33d05c1d',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:3f3d98e6f655496fa941a2ee23639db2',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:b6a448ef32a342169ff765996e96b96c',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:bb19e7d472e749ae971f764a63ba513e',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:6c067698d0b140e1a45ddad459fa466a',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:5cbae1b19c2941cc96b038e35c5f099e',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:999ed27b6ba540e099c04eb4a1b10f6a',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 1
    },
    {
      id: 'statement:8aa7fdb89fcd480289a61812f0d55698',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 1
    },
    {
      id: 'statement:74ff237e8e17410f826058a23d1fb4fa',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 1
    },
    {
      id: 'statement:bf142a99aa354c97a7895559e8b83630',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 1
    },
    {
      id: 'statement:ab11f7b2603349d99ded9ca8edb08c68',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 1
    },
    {
      id: 'statement:b79d9819b16a49c99932ed46465ab37c',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 1
    },
    {
      id: 'statement:4010b1ec1c83429faeecafdbac44f969',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 1
    },
    {
      id: 'statement:fb594880a7d34d9ba935a5f00b8f7450',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 1
    },
    {
      id: 'statement:dffd3890066042ccb350273dee0b6a97',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 1
    },
    {
      id: 'statement:5343398a0c074686aa1ce89109c60e05',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 1
    },
    {
      id: 'statement:28a4cf20b183460fb84093dad7f8fe93',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 1
    },
    {
      id: 'statement:0f4f9880770841c89aa5b125f7671288',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 1
    },
    {
      id: 'statement:45ca8160529c429488d51c9465235f5b',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 1
    },
    {
      id: 'statement:12fe6bd7ef614376941745b125bcb9ec',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 1
    },
    {
      id: 'statement:d65c4846c46c4e269f4d33c8c698b9d4',
      character: 'character:7b1ae86303dc4454952487cc36a55b67',
      value: 'state:7aa1095650e84eb89f20769120fa8789',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 1
    },
    {
      id: 'statement:f1c8b512af934ed8856d84757eeacbea',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:f6d0f15970b14272b2ae185fba5920de',
      frequency: 1
    },
    {
      id: 'statement:00df711586884fdc8afece70bdbb0cdf',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:4e82573b23604302899d2f9eddeb3053',
      frequency: 0
    },
    {
      id: 'statement:10233f050bc64817925fcdf8a44b371f',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:1c8ca951161941fbb366567e011e8d09',
      frequency: 1
    },
    {
      id: 'statement:f4eb8636e8884e828b6e6363a8dfd3d3',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:980ce8a3259941bda3dee43870bdad63',
      frequency: 0
    },
    {
      id: 'statement:a37c3cd7bfee4a2c85fdde7554c5e256',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:caaf938b83e645ebb542fd3559b31044',
      frequency: 1
    },
    {
      id: 'statement:75f159c3d66d49a398d6e63985354fe8',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:02de5f68893e465bb76d488b2530d60b',
      frequency: 0
    },
    {
      id: 'statement:d154c639e177450a810b793b9babab7d',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:233ad840eced449dbeeec8e73a34064a',
      frequency: 1
    },
    {
      id: 'statement:e144e982aa454458b759ea3ebfb34c66',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:1d8854ace689476e96fc43578b97b92b',
      frequency: 0
    },
    {
      id: 'statement:f7878109a4cb4196af324314dc31de6d',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:477ada0dad7c43bd86208efa3193532f',
      frequency: 1
    },
    {
      id: 'statement:11a1a3ee92434359b500045c13801275',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:baf58ab819b64701980a426fde42b5b8',
      frequency: 0
    },
    {
      id: 'statement:872502dfe89b445a8a49c500373f6e19',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:ab35b73243d74879886f0657a09617c7',
      frequency: 1
    },
    {
      id: 'statement:5ffd4a3695134135b9f60555a9fce673',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:fd2fc1d402a549a28f4a517ec4e0e644',
      frequency: 0
    },
    {
      id: 'statement:e22e48bedf904e459d676ec7c7d2ec79',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:ae3d93f990674e248670cc0e80af59c8',
      frequency: 1
    },
    {
      id: 'statement:7f2ec969f36a4eaaa9197486dc5da79b',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:51ebfdc5a5ca4ffd855ea6c0ba68828d',
      frequency: 0
    },
    {
      id: 'statement:74e3b28bdae04e48838bd8bdca4a00f3',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:2741c376e464497896f5aec4e651a215',
      frequency: 1
    },
    {
      id: 'statement:a978965e912246bcb8708a452be1e983',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:15dee9a7814445759e031d5d258387ed',
      frequency: 0
    },
    {
      id: 'statement:44f22709e39c488d843f8155d70796ab',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:090aca4abfbd49a49e065af0eb53d866',
      frequency: 1
    },
    {
      id: 'statement:edb1322cdc294080bfca4262112ed6e4',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:31eb2e8a97274c9198f34d3f1febb616',
      frequency: 0
    },
    {
      id: 'statement:5a4658cbafff4537b8da25a512dd0b28',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 1
    },
    {
      id: 'statement:c2e96d4d221244b9b4474e40547ec254',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 0
    },
    {
      id: 'statement:6359ec7a1ae04d609b2735c14385dde9',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 1
    },
    {
      id: 'statement:0095b7bab71444879687b6b17e6499c7',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 0
    },
    {
      id: 'statement:54dfb0a9200147feaa053526b18e4e25',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 1
    },
    {
      id: 'statement:aa726c8cfd794b4fa6cfc6171a079808',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 0
    },
    {
      id: 'statement:a7c665bd33ff43d59d1a4cdac299783d',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 1
    },
    {
      id: 'statement:14e817573004429580cf3228aef8edea',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0
    },
    {
      id: 'statement:c1d1ce1499c844d58b06192a41f1bcc1',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:d7816f44e87744528854a26207c90dc7',
      frequency: 1
    },
    {
      id: 'statement:8b21a45f80de44e682d85389b50d36d0',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:f58c95cf4def4ee09065b00fa90a3e3a',
      frequency: 0
    },
    {
      id: 'statement:108d9e8c8d1240a7982898dd6b589be3',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 1
    },
    {
      id: 'statement:e7608b32c700476791f581b507876620',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0
    },
    {
      id: 'statement:208603d9f2b84388b52005079fa727c1',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 1
    },
    {
      id: 'statement:bf93fdea0140467e857a8e6fdafd972f',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0
    },
    {
      id: 'statement:35ff65dbe120400a971ebe6ba177f666',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 1
    },
    {
      id: 'statement:f7f0b2cec04948e3ae46d31fd7c3384c',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 0
    },
    {
      id: 'statement:d6fdd89b3b9645e2a8bcf458ec82fb90',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:03fcadda7429456cb02396ac695a8da9',
      frequency: 1
    },
    {
      id: 'statement:996cc5368d3045ffac7c197ec36ed9f8',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:f8be9787dd194502af19a56c9cbbd1bd',
      frequency: 0
    },
    {
      id: 'statement:fde3d79547ae4093807dc5598b7c8d2c',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:d64657d6a30a4102a8ae2788f6d932bd',
      frequency: 1
    },
    {
      id: 'statement:3f94894428904c2f9c43ca821722dc52',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:4942df945ea045dea09a577f1fe973ff',
      frequency: 0
    },
    {
      id: 'statement:7c66f6da7cac4510abf26728b1101b20',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:b4b56815616741bb9dffe5aa274dc04c',
      frequency: 1
    },
    {
      id: 'statement:a0a550a000ac4b25bce7c589f5e2d49b',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:eb54f08f205d4b93bfce1ec4a8eaf67a',
      frequency: 0
    },
    {
      id: 'statement:98041db01d594d879d94ac31d135e10b',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:bc169a50dd7b49e4a811787bbd0a8ae0',
      frequency: 1
    },
    {
      id: 'statement:556105b0bd684e508604f48b43df4095',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:7ae578248f094c2b88ae56463e7836fc',
      frequency: 0
    },
    {
      id: 'statement:e61369d98493488c92ea6f095702e7a0',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:fc4a592737934537b2b9808b4c1699a5',
      frequency: 1
    },
    {
      id: 'statement:7e60acbf739d46848a74af6b9c82d894',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:bb73937367394271b1f9275bf7b7d4a6',
      frequency: 0
    },
    {
      id: 'statement:2d9ab370014e4f7599541434ddbaa0ce',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:e99232c6ff3f4131babcc1bc0cbf6d43',
      frequency: 1
    },
    {
      id: 'statement:46a824e044924c238413c1a1dd51d1a7',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:e8bb4953ac66481995633993f16b7380',
      frequency: 0
    },
    {
      id: 'statement:bd8f95dc7c104a5aba775e4a7e882b5b',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:40ef43b9a9e04e5d9035d1f9d2e4b085',
      frequency: 1
    },
    {
      id: 'statement:887c903578a540588ed15d1c77611e38',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:57a8836d90be475b917c8e80b90318a7',
      frequency: 0
    },
    {
      id: 'statement:937905aaf25e4d08b05d835313cf46c1',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:e8ff18cf99934191864858599eae85ba',
      frequency: 1
    },
    {
      id: 'statement:fbcbe0846ae94911992cfd35cd356b75',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:742f38e3078e48608ac26d521f4db578',
      frequency: 0
    },
    {
      id: 'statement:1805d1c5a10a461f93e9c12b9f3a8110',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:8395502483b1434f8645c3ce55a85823',
      frequency: 1
    },
    {
      id: 'statement:3d23d0e8fb9e4c5fae2649af550279f6',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:e9a27d08344e4fdda5cd46ca429789e4',
      frequency: 0
    },
    {
      id: 'statement:42730b634dd244aea710c6a006072fd1',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:dc09d52aa7ac4ac781bd1312fa275c91',
      frequency: 1
    },
    {
      id: 'statement:a734eb4d9c0742b99482395e708f0b73',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:67a3e0bcf98f4754b0cd07782d9a5222',
      frequency: 0
    },
    {
      id: 'statement:dd63317ce27f4f4b8a91f316c8c80a72',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:6e001a5d311c457a84a80d36d5028bbe',
      frequency: 1
    },
    {
      id: 'statement:abbe45621e8142c1966bb2f4b1db1ba4',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:04384ea1b5f94c8ab14cd193504b2b0c',
      frequency: 0
    },
    {
      id: 'statement:42abe7207f764c98a97d9d00c7a346c5',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:4430f2ce52794b46a3dd7af2a121cf89',
      frequency: 1
    },
    {
      id: 'statement:623e36ea361a4435a58dcb51d12d91f0',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:85990763f4d24308a08f609c090b9428',
      frequency: 0
    },
    {
      id: 'statement:ad1485990053444da3a2f1a6c2e3c24e',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:ee1d1725e56f455b93fe878cae4e59c6',
      frequency: 1
    },
    {
      id: 'statement:cd151b178ac94f90bb64dc16095cc27c',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:463f22f2e2e3496aa677a7a8c36d84cc',
      frequency: 0
    },
    {
      id: 'statement:9be903b13d5a4aec923d549d6cd25bd8',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:7c8e4121e32f4425bb71eb3a2c50889e',
      frequency: 1
    },
    {
      id: 'statement:94cc175f3e54469d9cd47e8d351cd221',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:3399e319022b4d2eba71dead20122af2',
      frequency: 0
    },
    {
      id: 'statement:8b5ab3d34e22400c9451a0f97dfaae25',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:faf92aa0710944119a6c70c1be3578e1',
      frequency: 1
    },
    {
      id: 'statement:578240490509434483d0c6cd6c216960',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:c4b1579fd2474e21942de4b422c0c7f1',
      frequency: 0
    },
    {
      id: 'statement:ed4e0cad16734482a272d009a8344866',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:a7873f2a85254db89fafec4e24c8eec9',
      frequency: 1
    },
    {
      id: 'statement:6536829602284216bec6f52a2d557382',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:be44e384a0aa42078505f9c2ee9b341d',
      frequency: 0
    },
    {
      id: 'statement:d591a7aefafb46b2a184fa92d6ad0e11',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:cd0fe7a4f54b41fa9b5857edf73f6f58',
      frequency: 1
    },
    {
      id: 'statement:a6fe8de5add54467a7aef93abc6a174e',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:aa9f1b584e9d4dd58b986bc6a7dc8e07',
      frequency: 0
    },
    {
      id: 'statement:51fb32d84298412c88d0327a36092eed',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:67458bb052894f4681aa4126d8d35c86',
      frequency: 1
    },
    {
      id: 'statement:613998b6309b4ea1bb80b28fc2433ece',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:36af041484ce4685831553f0bd906a40',
      frequency: 0
    },
    {
      id: 'statement:fb99bb87fbee478ebe53740580ffc1a8',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:c059f0052b304adbbcff33929b05e2ac',
      frequency: 1
    },
    {
      id: 'statement:1621b4f9d3b54ec9a00e13ebc7a838bf',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:581d17fb9f5d47b2812cf5e50937d0e3',
      frequency: 0
    },
    {
      id: 'statement:27ed70fe88164fe78c20e19553b75675',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:c3e334d30ad2429783efb8d1e4efa8ff',
      frequency: 1
    },
    {
      id: 'statement:e4314501245a443a9af8fa6eef1fed92',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:7697589c779a4b9d9a3ecd7510bc3eb6',
      frequency: 0
    },
    {
      id: 'statement:f1d17109980d4c369f7bb14b4e14df38',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:54efd5bb862649fea957cd9fdee610c2',
      frequency: 1
    },
    {
      id: 'statement:5a3798b8e03f4ba198c32d184e3ebbc9',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:7df747f7bf144e93b36c90db0efb11aa',
      frequency: 0
    },
    {
      id: 'statement:260298d2e8644bc3bbba14ba4b56500d',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:c62dc3063cf540ac8257806fd28a2458',
      frequency: 1
    },
    {
      id: 'statement:a05ad26459324160b539024edf3aa1c8',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:42d5f08f60ca466abf13dc4e0e4502f2',
      frequency: 0
    },
    {
      id: 'statement:37a3b4ece0884ed4ab6ddafad3ad5907',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:02db0784ddd443e3bc5242cea06d6a2d',
      frequency: 1
    },
    {
      id: 'statement:422799b34f754077bca0079a77bdff09',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:e8aeb9fe7a9c47ee8ce9bbe06496cf6f',
      frequency: 0
    },
    {
      id: 'statement:9b641b79733a40afba33c29b148353d5',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:d70089cde7ed4663829456c4fe949273',
      frequency: 1
    },
    {
      id: 'statement:7cb6d8fb4e0d424bb2a1041b6d4c275c',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:3be897ae7ec84f1e86a88d61f513ba04',
      frequency: 0
    },
    {
      id: 'statement:100b3c08c59042f08eee2919e47eabb4',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:b99e3c7c290241e1b92b318a51a048d2',
      frequency: 1
    },
    {
      id: 'statement:26ef183a734d4888a3823ef5d3d5790e',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:2dd83d0d33f749e0ba829dab29f3159d',
      frequency: 0
    },
    {
      id: 'statement:16cec58fdc5746cc83496f45e631448e',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:b7bfcc040eac41cbae75c97186670c53',
      frequency: 1
    },
    {
      id: 'statement:312a7d35f46b4134ada0ae34b39ffd46',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:7d4626e1f2b5427886750497bea38e24',
      frequency: 0
    },
    {
      id: 'statement:a8ccf0205f3f43e6bb330bc85f3c87c1',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:06f53062e5e14a7c9e69aba62856d1a7',
      frequency: 1
    },
    {
      id: 'statement:4263b55fbeb443f1a37aafd65ec9ec89',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:eac083a0a0fe4748b8e8dadc16e6d16d',
      frequency: 0
    },
    {
      id: 'statement:3faeba6a62dd463b8f19b618e19bbf6f',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:24b733fe467a45bba5e26946082af20f',
      frequency: 1
    },
    {
      id: 'statement:23377e511e7147aeb783b8265d7ff5c9',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:82b5ab90812346b2b9ac4813fe4d326d',
      frequency: 0
    },
    {
      id: 'statement:3c0e4fb51e144973842e92bfa5df3c1c',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:0ae6071500944ec1822dd51aa93f4ae1',
      frequency: 1
    },
    {
      id: 'statement:8ec3c8928b864cdda82356d4d60a55c6',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:98a5b74a97de497ca159d00be74fdc08',
      frequency: 0
    },
    {
      id: 'statement:6714c48c54514112a1af5e927ae669f4',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:6235cbaf10c9479bab1a2a1d0109f50e',
      frequency: 1
    },
    {
      id: 'statement:7c8e78969c404417b526c9aa34974131',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:7eb38eaf73ad4ebebd6566d25e01ae65',
      frequency: 0
    },
    {
      id: 'statement:b5187ec66beb4365a7a7983712bf4ce9',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:1147caf5bc224aedb85496e764d8621d',
      frequency: 1
    },
    {
      id: 'statement:f3ae17f7d0814965b986a5aaa4caa0ba',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:c9d10fe87d0f46a2874abdfe430232e7',
      frequency: 0
    },
    {
      id: 'statement:f880c63dbc484cd58ef87853286f4fad',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:19556c14b0c34a9eb12309f09fec408a',
      frequency: 1
    },
    {
      id: 'statement:1794351a4c384f2a9f8a9dd6d22f8f92',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:9f11526639bd4e8caf3c9cda634a7431',
      frequency: 0
    },
    {
      id: 'statement:2edc2a8683ea424bbefe3bc93286ae1e',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:12e213093e564e28a5e1e7fb6c3ed91d',
      frequency: 1
    },
    {
      id: 'statement:ee87f607dc3c42aeb208d228b13d2201',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:53704b46c1ce4804a44711e424bcd97a',
      frequency: 0
    },
    {
      id: 'statement:319a3a0e3b2840b99caa6b070ab26a80',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:6bb437c615ba4309855b986d25bc6a2d',
      frequency: 1
    },
    {
      id: 'statement:94331ba7689d40c0b8aeca0856f74e91',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:979c27d392b74984bbd163a3589e203c',
      frequency: 0
    },
    {
      id: 'statement:2cdf6b75859c41f39200ef2ceeb3c61f',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:d27b23c19c534971824dc9bce0672c71',
      frequency: 1
    },
    {
      id: 'statement:0d0b96e26c90471ca63a74b5b7112ed9',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:01b710b4d1634239a03965e499eb25c4',
      frequency: 0
    },
    {
      id: 'statement:5d565f7196594cec8df3c51657770f0e',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:317bd168d3a9489c900d2cf314c07396',
      frequency: 1
    },
    {
      id: 'statement:37d3895c3fde4c2fb1fddb7f9defb676',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:9699f2a7aa8349c2b0b7b7ca2f4130b9',
      frequency: 0
    },
    {
      id: 'statement:96c7112c7cf64be3a75cb0a2d4fb4795',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:5cbefb19e263424bbe447bf7534ba2f7',
      frequency: 1
    },
    {
      id: 'statement:750e70661a904a399d30661b3865cf70',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:b539523334fa426e8f8ebb2c23000064',
      frequency: 0
    },
    {
      id: 'statement:b1ec177bcf57430fae5fbee9c5b02796',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:f3d4e691a6e04b0ab3d4d9eea202193c',
      frequency: 1
    },
    {
      id: 'statement:8833bc4d6d114fad89bc1a10fc804e2e',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
      taxon: 'taxon:9e040b28f74241c0936d3cb437317588',
      frequency: 0
    },
    {
      id: 'statement:f71bf02bcc4e48eb9bb587fe3227fd27',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:f6d0f15970b14272b2ae185fba5920de',
      frequency: 0
    },
    {
      id: 'statement:83b58d83750944d6b0350de2025a8c9b',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:4e82573b23604302899d2f9eddeb3053',
      frequency: 1
    },
    {
      id: 'statement:15130742770a48d3b678ff6de2d53bd7',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:1c8ca951161941fbb366567e011e8d09',
      frequency: 0
    },
    {
      id: 'statement:24b5bed36ef7456e92060740bb3f36d2',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:980ce8a3259941bda3dee43870bdad63',
      frequency: 1
    },
    {
      id: 'statement:1aba6d380dea4a04b574971d03d2340b',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:caaf938b83e645ebb542fd3559b31044',
      frequency: 0
    },
    {
      id: 'statement:00182285c6004d67a65bcbb9f19fe8dd',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:02de5f68893e465bb76d488b2530d60b',
      frequency: 1
    },
    {
      id: 'statement:60e0baca57d640d8987b46083d6bcdbd',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:233ad840eced449dbeeec8e73a34064a',
      frequency: 0
    },
    {
      id: 'statement:4d22f7ce3ea441849102d57cdbc1712f',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:1d8854ace689476e96fc43578b97b92b',
      frequency: 1
    },
    {
      id: 'statement:3915000089774fe79066e023753fdb2f',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:477ada0dad7c43bd86208efa3193532f',
      frequency: 0
    },
    {
      id: 'statement:863b81ced5c84959a7a6bfc298719033',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:baf58ab819b64701980a426fde42b5b8',
      frequency: 1
    },
    {
      id: 'statement:50a0acdc606645f1ad6779dbaa376b9e',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:ab35b73243d74879886f0657a09617c7',
      frequency: 0
    },
    {
      id: 'statement:f3b9f0a4a4114967ab3b557a6d5209a8',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:fd2fc1d402a549a28f4a517ec4e0e644',
      frequency: 1
    },
    {
      id: 'statement:59bffa71d74c4f849e37c82eb16c7d62',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:ae3d93f990674e248670cc0e80af59c8',
      frequency: 0
    },
    {
      id: 'statement:b68479933b744df8bec7806bf39cb408',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:51ebfdc5a5ca4ffd855ea6c0ba68828d',
      frequency: 1
    },
    {
      id: 'statement:aaeb546722e64d7b864c0291b5361a1d',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:2741c376e464497896f5aec4e651a215',
      frequency: 0
    },
    {
      id: 'statement:90a26c64253d4a1f9800d3e5a14dd729',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:15dee9a7814445759e031d5d258387ed',
      frequency: 1
    },
    {
      id: 'statement:5028a84b35d341d283ee6b3cb410fe79',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:090aca4abfbd49a49e065af0eb53d866',
      frequency: 0
    },
    {
      id: 'statement:a632ef550bc245ffb0ca5cb816030bf5',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:31eb2e8a97274c9198f34d3f1febb616',
      frequency: 1
    },
    {
      id: 'statement:c3c9db46a5a54e72a628d9ba20f64e26',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 0
    },
    {
      id: 'statement:1256d2608a7d4adb9f4fff5a55ae51d0',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 1
    },
    {
      id: 'statement:322aec20bc77409287114f34f27959f9',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 0
    },
    {
      id: 'statement:23eed28b2b074c86a460db5d4b9184a3',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 1
    },
    {
      id: 'statement:53ed01ffbcd144c08a40ba743d83bf1a',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 0
    },
    {
      id: 'statement:71e073810322428384abc964f1cdd361',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 1
    },
    {
      id: 'statement:3ed7d11b8b064c6bae1f4588d3ed12a5',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0
    },
    {
      id: 'statement:bf65254c36e4452489e0031f4cc67f56',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 1
    },
    {
      id: 'statement:081640dfec8648758533fb2637540438',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:d7816f44e87744528854a26207c90dc7',
      frequency: 0
    },
    {
      id: 'statement:ecc8ef17648549c6b7a9640c9ffc1a91',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:f58c95cf4def4ee09065b00fa90a3e3a',
      frequency: 1
    },
    {
      id: 'statement:8a71c4786f334a53ae26aedfd863d880',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0
    },
    {
      id: 'statement:3d628fc486c645c1a61b258726bf8314',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 1
    },
    {
      id: 'statement:90dca2e6db0a4636ba4cc9664282bd92',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0
    },
    {
      id: 'statement:e55461be156246af8a051c3203a6fadf',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 1
    },
    {
      id: 'statement:12aa3745ef0b44fab8862df2381a6ac4',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 0
    },
    {
      id: 'statement:80167d701e4840438b6cee40e0286c1a',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 1
    },
    {
      id: 'statement:a6c54894fca34d78b24f1e929378f7db',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:03fcadda7429456cb02396ac695a8da9',
      frequency: 0
    },
    {
      id: 'statement:e9b656597b8e42b29a4bd9a5c9479fa5',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:f8be9787dd194502af19a56c9cbbd1bd',
      frequency: 1
    },
    {
      id: 'statement:d69ce194d29b40329272f5b73eb1e874',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:d64657d6a30a4102a8ae2788f6d932bd',
      frequency: 0
    },
    {
      id: 'statement:7b9a9f13ed944b68ab1e1545fe5243b8',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:4942df945ea045dea09a577f1fe973ff',
      frequency: 1
    },
    {
      id: 'statement:e69c577362614eb695b90bf8cb6f3e0f',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:b4b56815616741bb9dffe5aa274dc04c',
      frequency: 0
    },
    {
      id: 'statement:aa863880e2c94237ab4a1a593dcc5e61',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:eb54f08f205d4b93bfce1ec4a8eaf67a',
      frequency: 1
    },
    {
      id: 'statement:8e20e53be13e42498161577fc989a39f',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:bc169a50dd7b49e4a811787bbd0a8ae0',
      frequency: 0
    },
    {
      id: 'statement:55e28266296d44089af92dab2c9be288',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:7ae578248f094c2b88ae56463e7836fc',
      frequency: 1
    },
    {
      id: 'statement:6e93e5bd8d5a4c3daba534f73c04ccfa',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:fc4a592737934537b2b9808b4c1699a5',
      frequency: 0
    },
    {
      id: 'statement:09f9207107c049948211eb6d9efe1faa',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:bb73937367394271b1f9275bf7b7d4a6',
      frequency: 1
    },
    {
      id: 'statement:338cbb79f2734fd0a7d951264b46ce58',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:e99232c6ff3f4131babcc1bc0cbf6d43',
      frequency: 0
    },
    {
      id: 'statement:ac76589d58bd44fa966aa6f2d4164353',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:e8bb4953ac66481995633993f16b7380',
      frequency: 1
    },
    {
      id: 'statement:0c3db499c5a442e3ac02140c726aa48c',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:40ef43b9a9e04e5d9035d1f9d2e4b085',
      frequency: 0
    },
    {
      id: 'statement:06d27ebe871f4df78d80496ca8bc0660',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:57a8836d90be475b917c8e80b90318a7',
      frequency: 1
    },
    {
      id: 'statement:36b651fb19514375bf696990c07f0eda',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:e8ff18cf99934191864858599eae85ba',
      frequency: 0
    },
    {
      id: 'statement:e5a434a6cd25404980370e12465050b2',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:742f38e3078e48608ac26d521f4db578',
      frequency: 1
    },
    {
      id: 'statement:5686b07692954031b6e5f6d34e1ac5ef',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:8395502483b1434f8645c3ce55a85823',
      frequency: 0
    },
    {
      id: 'statement:631e765d207f443d9545658a0442f22a',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:e9a27d08344e4fdda5cd46ca429789e4',
      frequency: 1
    },
    {
      id: 'statement:9883b4a8f1ca4622bac418e5d1f0b89d',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:dc09d52aa7ac4ac781bd1312fa275c91',
      frequency: 0
    },
    {
      id: 'statement:d7345c879d7048638f6595cea86076a4',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:67a3e0bcf98f4754b0cd07782d9a5222',
      frequency: 1
    },
    {
      id: 'statement:1733c951f6754689b500289a2aa53ac5',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:6e001a5d311c457a84a80d36d5028bbe',
      frequency: 0
    },
    {
      id: 'statement:56a519022ebb427d8d05ce3dd7e93fef',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:04384ea1b5f94c8ab14cd193504b2b0c',
      frequency: 1
    },
    {
      id: 'statement:5ecd73b3729a42d1be6886b111bed1a2',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:4430f2ce52794b46a3dd7af2a121cf89',
      frequency: 0
    },
    {
      id: 'statement:629631423c1540de86d45e666bd72239',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:85990763f4d24308a08f609c090b9428',
      frequency: 1
    },
    {
      id: 'statement:0795cd8e8a1d4830aaa9b4f2b28f238f',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:ee1d1725e56f455b93fe878cae4e59c6',
      frequency: 0
    },
    {
      id: 'statement:772bca5ec4fa42098e8fec750c72d77e',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:463f22f2e2e3496aa677a7a8c36d84cc',
      frequency: 1
    },
    {
      id: 'statement:d93155a2a81949f58f744ea5674040dc',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:7c8e4121e32f4425bb71eb3a2c50889e',
      frequency: 0
    },
    {
      id: 'statement:00bcbb8373d4447981fb9fda027620ca',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:3399e319022b4d2eba71dead20122af2',
      frequency: 1
    },
    {
      id: 'statement:e185ec9b34474fa18c3d73967ad4160c',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:faf92aa0710944119a6c70c1be3578e1',
      frequency: 0
    },
    {
      id: 'statement:ddaf4faec282463d8a4745b8faffb5af',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:c4b1579fd2474e21942de4b422c0c7f1',
      frequency: 1
    },
    {
      id: 'statement:b4fcb09af3a14a448a1793706c48ee07',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:a7873f2a85254db89fafec4e24c8eec9',
      frequency: 0
    },
    {
      id: 'statement:449d618dbe8749738ad442b998c26ab9',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:be44e384a0aa42078505f9c2ee9b341d',
      frequency: 1
    },
    {
      id: 'statement:6e3daf83a1f64af3a8e6c1997b9758a4',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:cd0fe7a4f54b41fa9b5857edf73f6f58',
      frequency: 0
    },
    {
      id: 'statement:ab5272df009b4d9eb5e49f129cb7fd4b',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:aa9f1b584e9d4dd58b986bc6a7dc8e07',
      frequency: 1
    },
    {
      id: 'statement:99a5fb4ab4dc48ba92a7154326303aa9',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:67458bb052894f4681aa4126d8d35c86',
      frequency: 0
    },
    {
      id: 'statement:34643355017e4eb09ed8493ea51dc7ac',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:36af041484ce4685831553f0bd906a40',
      frequency: 1
    },
    {
      id: 'statement:21b7677d274b45c8a93aa836bdc8842d',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:c059f0052b304adbbcff33929b05e2ac',
      frequency: 0
    },
    {
      id: 'statement:3a1b6aad86144296a5f4485b570e83d2',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:581d17fb9f5d47b2812cf5e50937d0e3',
      frequency: 1
    },
    {
      id: 'statement:dbc7aa1b7907470f8da8e46445b0d6e7',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:c3e334d30ad2429783efb8d1e4efa8ff',
      frequency: 0
    },
    {
      id: 'statement:4ad65d4762c24306bf3442e884626da1',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:7697589c779a4b9d9a3ecd7510bc3eb6',
      frequency: 1
    },
    {
      id: 'statement:89dd35767f30421a90aa6eb84da59596',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:54efd5bb862649fea957cd9fdee610c2',
      frequency: 0
    },
    {
      id: 'statement:b596347d876446a584fe8eafb27e6fda',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:7df747f7bf144e93b36c90db0efb11aa',
      frequency: 1
    },
    {
      id: 'statement:aaebe70bd66d4308b33993b1a1ff093c',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:c62dc3063cf540ac8257806fd28a2458',
      frequency: 0
    },
    {
      id: 'statement:49403459e9964d84b2be29f307277b29',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:42d5f08f60ca466abf13dc4e0e4502f2',
      frequency: 1
    },
    {
      id: 'statement:d7baf831f0334bb987d903d4dc5f7134',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:02db0784ddd443e3bc5242cea06d6a2d',
      frequency: 0
    },
    {
      id: 'statement:9d5c5b83b05a4dd8868146ddf3cce64c',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:e8aeb9fe7a9c47ee8ce9bbe06496cf6f',
      frequency: 1
    },
    {
      id: 'statement:1587cdcc14734f58a0a2f62a3fb534ba',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:d70089cde7ed4663829456c4fe949273',
      frequency: 0
    },
    {
      id: 'statement:c4f9116e9d59407a81cc2ab65fb92168',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:3be897ae7ec84f1e86a88d61f513ba04',
      frequency: 1
    },
    {
      id: 'statement:a44c6bdddb0f4b4aac51912dacb74e23',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:b99e3c7c290241e1b92b318a51a048d2',
      frequency: 0
    },
    {
      id: 'statement:8605ecd2a83543e08c0dd1ca8e2de5c5',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:2dd83d0d33f749e0ba829dab29f3159d',
      frequency: 1
    },
    {
      id: 'statement:b18174cee0dd4a729fd98cb4015b3834',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:b7bfcc040eac41cbae75c97186670c53',
      frequency: 0
    },
    {
      id: 'statement:0660a8d190ef4629b66ae573a39b974f',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:7d4626e1f2b5427886750497bea38e24',
      frequency: 1
    },
    {
      id: 'statement:98b731a304464cb2aa0849639ecb87ec',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:06f53062e5e14a7c9e69aba62856d1a7',
      frequency: 0
    },
    {
      id: 'statement:fc5a740747d6414aa4b03e0d6c7423ac',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:eac083a0a0fe4748b8e8dadc16e6d16d',
      frequency: 1
    },
    {
      id: 'statement:9e06c9ff5ff446dbb8b45f95370d5bc1',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:24b733fe467a45bba5e26946082af20f',
      frequency: 0
    },
    {
      id: 'statement:a06671d7f8844978b18d52263603c003',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:82b5ab90812346b2b9ac4813fe4d326d',
      frequency: 1
    },
    {
      id: 'statement:b6f48d5dec734a8b8153e685242197d8',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:0ae6071500944ec1822dd51aa93f4ae1',
      frequency: 0
    },
    {
      id: 'statement:40638cf1d3174bbead39da138f74841b',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:98a5b74a97de497ca159d00be74fdc08',
      frequency: 1
    },
    {
      id: 'statement:30c59cd4eff5490892f7f25c6d2eaf54',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:6235cbaf10c9479bab1a2a1d0109f50e',
      frequency: 0
    },
    {
      id: 'statement:a7c2d6dc3f6e420f9b3786b837ec787a',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:7eb38eaf73ad4ebebd6566d25e01ae65',
      frequency: 1
    },
    {
      id: 'statement:dc4d638f13a84c63acaf3874c0cb4871',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:1147caf5bc224aedb85496e764d8621d',
      frequency: 0
    },
    {
      id: 'statement:31b26c7e3b6c4f0c961a17bd0fb141a8',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:c9d10fe87d0f46a2874abdfe430232e7',
      frequency: 1
    },
    {
      id: 'statement:8230aa88d7b74b0ab061678793fc1f3f',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:19556c14b0c34a9eb12309f09fec408a',
      frequency: 0
    },
    {
      id: 'statement:4ab3e97572854897b1231aee2c0e55dc',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:9f11526639bd4e8caf3c9cda634a7431',
      frequency: 1
    },
    {
      id: 'statement:0d952a6e8ef9496aa51aa7faadebb5fd',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:12e213093e564e28a5e1e7fb6c3ed91d',
      frequency: 0
    },
    {
      id: 'statement:dc0394c72e92476aad091311585d3664',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:53704b46c1ce4804a44711e424bcd97a',
      frequency: 1
    },
    {
      id: 'statement:336138e8b5c145b5be54facebff6ce64',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:6bb437c615ba4309855b986d25bc6a2d',
      frequency: 0
    },
    {
      id: 'statement:a3e414c7535841aa866b152e2105fda2',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:979c27d392b74984bbd163a3589e203c',
      frequency: 1
    },
    {
      id: 'statement:5de94bf8eb5b4acda3eed14e5d3158e6',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:d27b23c19c534971824dc9bce0672c71',
      frequency: 0
    },
    {
      id: 'statement:cd730b13e7f94a40a4147d46f5541854',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:01b710b4d1634239a03965e499eb25c4',
      frequency: 1
    },
    {
      id: 'statement:8d4d677c73a045399b53c9a19be5e658',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:317bd168d3a9489c900d2cf314c07396',
      frequency: 0
    },
    {
      id: 'statement:2b17768bb7a74f24ab08b56a941e5529',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:9699f2a7aa8349c2b0b7b7ca2f4130b9',
      frequency: 1
    },
    {
      id: 'statement:556f150c54c5418294cb8c60fa866d4b',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:5cbefb19e263424bbe447bf7534ba2f7',
      frequency: 0
    },
    {
      id: 'statement:9704dff52b794d39a738693973ed8c14',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:b539523334fa426e8f8ebb2c23000064',
      frequency: 1
    },
    {
      id: 'statement:a1100aa149024ce9b2acbd25cea1cfd6',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:f3d4e691a6e04b0ab3d4d9eea202193c',
      frequency: 0
    },
    {
      id: 'statement:0b0d099aa4054426b2421b85ede79b96',
      character: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      value: 'state:b604edca29d04d0f8921199442e70446',
      taxon: 'taxon:9e040b28f74241c0936d3cb437317588',
      frequency: 1
    },
    {
      id: 'statement:1db0ed81dc9e4265a0b37e502f1f3d9b',
      character: 'character:2794a6d1258847d4a6fb75f92e24b219',
      value: 'state:8dfe3826cfed4c56a2758b8063662890',
      taxon: 'taxon:f6d0f15970b14272b2ae185fba5920de',
      frequency: 0.5
    },
    {
      id: 'statement:0241af924ff34d2db2b4bc6fe41d29de',
      character: 'character:2794a6d1258847d4a6fb75f92e24b219',
      value: 'state:8dfe3826cfed4c56a2758b8063662890',
      taxon: 'taxon:4e82573b23604302899d2f9eddeb3053',
      frequency: 1
    },
    {
      id: 'statement:ce40e43100ee4fb7b9a2b093a3cec46f',
      character: 'character:2794a6d1258847d4a6fb75f92e24b219',
      value: 'state:8dfe3826cfed4c56a2758b8063662890',
      taxon: 'taxon:1c8ca951161941fbb366567e011e8d09',
      frequency: 0.5
    },
    {
      id: 'statement:b6d3ae7d65384cb4a312e657a2284427',
      character: 'character:2794a6d1258847d4a6fb75f92e24b219',
      value: 'state:8dfe3826cfed4c56a2758b8063662890',
      taxon: 'taxon:980ce8a3259941bda3dee43870bdad63',
      frequency: 1
    },
    {
      id: 'statement:e9d0dd1b39b547148ede91715ca77574',
      character: 'character:2794a6d1258847d4a6fb75f92e24b219',
      value: 'state:9a1237c292f749b1b17b86b8206dca25',
      taxon: 'taxon:f6d0f15970b14272b2ae185fba5920de',
      frequency: 0
    },
    {
      id: 'statement:7bd9e757304b42a7afbf9d6b63e79778',
      character: 'character:2794a6d1258847d4a6fb75f92e24b219',
      value: 'state:9a1237c292f749b1b17b86b8206dca25',
      taxon: 'taxon:4e82573b23604302899d2f9eddeb3053',
      frequency: 0
    },
    {
      id: 'statement:0a8601cc3c014497af0613ff6d37fca2',
      character: 'character:2794a6d1258847d4a6fb75f92e24b219',
      value: 'state:9a1237c292f749b1b17b86b8206dca25',
      taxon: 'taxon:1c8ca951161941fbb366567e011e8d09',
      frequency: 0.5
    },
    {
      id: 'statement:5574a7aebf6542879c03475d3069c650',
      character: 'character:2794a6d1258847d4a6fb75f92e24b219',
      value: 'state:9a1237c292f749b1b17b86b8206dca25',
      taxon: 'taxon:980ce8a3259941bda3dee43870bdad63',
      frequency: 0
    },
    {
      id: 'statement:cbd7a4fa359d417f81351ef493352312',
      character: 'character:2794a6d1258847d4a6fb75f92e24b219',
      value: 'state:3e14bf6f568a4372ad56c4a84b740572',
      taxon: 'taxon:f6d0f15970b14272b2ae185fba5920de',
      frequency: 0.5
    },
    {
      id: 'statement:49bff4c24f58412c9634214826534fce',
      character: 'character:2794a6d1258847d4a6fb75f92e24b219',
      value: 'state:3e14bf6f568a4372ad56c4a84b740572',
      taxon: 'taxon:4e82573b23604302899d2f9eddeb3053',
      frequency: 0
    },
    {
      id: 'statement:972d622e1dc74eaabed2ff7f0dae8f35',
      character: 'character:2794a6d1258847d4a6fb75f92e24b219',
      value: 'state:3e14bf6f568a4372ad56c4a84b740572',
      taxon: 'taxon:1c8ca951161941fbb366567e011e8d09',
      frequency: 0
    },
    {
      id: 'statement:16d75c05169a425a83fb5f7454eecb86',
      character: 'character:2794a6d1258847d4a6fb75f92e24b219',
      value: 'state:3e14bf6f568a4372ad56c4a84b740572',
      taxon: 'taxon:980ce8a3259941bda3dee43870bdad63',
      frequency: 0
    },
    {
      id: 'statement:83cfb43deac847feae018982935c8977',
      character: 'character:2a0f5495cc8044d8997daa4581cf8ca1',
      value: 'state:002bb1b3979b4bd88db3cd3b821c14f8',
      taxon: 'taxon:f6d0f15970b14272b2ae185fba5920de',
      frequency: 0
    },
    {
      id: 'statement:972f9a9477464ec78b4468b596b65109',
      character: 'character:2a0f5495cc8044d8997daa4581cf8ca1',
      value: 'state:002bb1b3979b4bd88db3cd3b821c14f8',
      taxon: 'taxon:4e82573b23604302899d2f9eddeb3053',
      frequency: 1
    },
    {
      id: 'statement:bbdd86d98a3f44d1a07169df963f0b26',
      character: 'character:2a0f5495cc8044d8997daa4581cf8ca1',
      value: 'state:002bb1b3979b4bd88db3cd3b821c14f8',
      taxon: 'taxon:1c8ca951161941fbb366567e011e8d09',
      frequency: 0
    },
    {
      id: 'statement:8c9f7e2f142f4a31af04a06bd159dc4e',
      character: 'character:2a0f5495cc8044d8997daa4581cf8ca1',
      value: 'state:002bb1b3979b4bd88db3cd3b821c14f8',
      taxon: 'taxon:980ce8a3259941bda3dee43870bdad63',
      frequency: 1
    },
    {
      id: 'statement:ed60bd0a9c774f349ebe7fc705b313a1',
      character: 'character:2a0f5495cc8044d8997daa4581cf8ca1',
      value: 'state:7ba69042bf7d49afa01a6b0f6fc7cc6e',
      taxon: 'taxon:f6d0f15970b14272b2ae185fba5920de',
      frequency: 1
    },
    {
      id: 'statement:4bc35ef6e32342af8cc919b9d89472f2',
      character: 'character:2a0f5495cc8044d8997daa4581cf8ca1',
      value: 'state:7ba69042bf7d49afa01a6b0f6fc7cc6e',
      taxon: 'taxon:4e82573b23604302899d2f9eddeb3053',
      frequency: 0
    },
    {
      id: 'statement:e91a955a43064528a9448ef7ac6a4925',
      character: 'character:2a0f5495cc8044d8997daa4581cf8ca1',
      value: 'state:7ba69042bf7d49afa01a6b0f6fc7cc6e',
      taxon: 'taxon:1c8ca951161941fbb366567e011e8d09',
      frequency: 1
    },
    {
      id: 'statement:00c42ff2f7e24f0a8ac23bc9d6c817e7',
      character: 'character:2a0f5495cc8044d8997daa4581cf8ca1',
      value: 'state:7ba69042bf7d49afa01a6b0f6fc7cc6e',
      taxon: 'taxon:980ce8a3259941bda3dee43870bdad63',
      frequency: 0
    },
    {
      id: 'statement:a28c8ab1ae8c4a9b9726918c26dd6c6a',
      character: 'character:bf8889944f3a467fadbffe4ee44d813d',
      value: 'state:928070b6e545411c8e91406d723c7c46',
      taxon: 'taxon:78dc3ab56a95486db90b4526d2f997b8',
      frequency: 0
    },
    {
      id: 'statement:43ccab9954c24289a842b7edcec3ff7a',
      character: 'character:bf8889944f3a467fadbffe4ee44d813d',
      value: 'state:928070b6e545411c8e91406d723c7c46',
      taxon: 'taxon:035180d55f4a4b57973c07f987a815f5',
      frequency: 1
    },
    {
      id: 'statement:bc824e0ed7d34407b1381ae3c87f2f8c',
      character: 'character:bf8889944f3a467fadbffe4ee44d813d',
      value: 'state:80a5b9d1dc934f6d951314c756f3bb2a',
      taxon: 'taxon:78dc3ab56a95486db90b4526d2f997b8',
      frequency: 1
    },
    {
      id: 'statement:a8476b7cd27b4846a21252e71c4786c4',
      character: 'character:bf8889944f3a467fadbffe4ee44d813d',
      value: 'state:80a5b9d1dc934f6d951314c756f3bb2a',
      taxon: 'taxon:035180d55f4a4b57973c07f987a815f5',
      frequency: 0
    },
    {
      id: 'statement:303841a3a5214cb48c494035824210ec',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:e0d3bc1078464cd48411e0358b93a24c',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 1
    },
    {
      id: 'statement:4a0c1a7952e340cb9eaa6c71f5c57c0e',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:e0d3bc1078464cd48411e0358b93a24c',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 1
    },
    {
      id: 'statement:dfc96391e5544ad5aba1852153570be6',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:e0d3bc1078464cd48411e0358b93a24c',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 0
    },
    {
      id: 'statement:2352b1d093d943788bc63487c72705f9',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:e0d3bc1078464cd48411e0358b93a24c',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 0
    },
    {
      id: 'statement:9d172183ea104850988129f9d2c407f7',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:e0d3bc1078464cd48411e0358b93a24c',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 0
    },
    {
      id: 'statement:76dff8b5e2994dca9335b08400104996',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:e0d3bc1078464cd48411e0358b93a24c',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 0
    },
    {
      id: 'statement:dfa014d4fa1f48c29810eac38f3d52d1',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:e0d3bc1078464cd48411e0358b93a24c',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:fe6ed91402d5443296a7eb7aab546e33',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:e0d3bc1078464cd48411e0358b93a24c',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0
    },
    {
      id: 'statement:122a57fbad434738a1b127184db341ae',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:e0d3bc1078464cd48411e0358b93a24c',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:fbf0a9909244412d847c756e7a651282',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:e0d3bc1078464cd48411e0358b93a24c',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:634a644fa9b3451694b174b95797f5ba',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:e0d3bc1078464cd48411e0358b93a24c',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:63cebddf00224e939ebd262f9ec90d17',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:e0d3bc1078464cd48411e0358b93a24c',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:adf6ee5053324daf8b3c29d35509e9f3',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:e0d3bc1078464cd48411e0358b93a24c',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:0852a7a7128d4dd98b4a08afb2044ce0',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:e0d3bc1078464cd48411e0358b93a24c',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:a836b9a976184cf2a860bb42bc6baf34',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:e0d3bc1078464cd48411e0358b93a24c',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:746c468a4f8c41689536fa0e983c45b1',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:39efdd03d3ff4e1fa25a77f1221f1483',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 0
    },
    {
      id: 'statement:8bf4e37e447448a3ab9c10c8399d5549',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:39efdd03d3ff4e1fa25a77f1221f1483',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 0
    },
    {
      id: 'statement:f98d008c0f664ffebddfd0f5e2654198',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:39efdd03d3ff4e1fa25a77f1221f1483',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 1
    },
    {
      id: 'statement:a2ff0eb7f7b945b7a35c37237626a40e',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:39efdd03d3ff4e1fa25a77f1221f1483',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 1
    },
    {
      id: 'statement:2dfcdf69df0041009cf295679995ab10',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:39efdd03d3ff4e1fa25a77f1221f1483',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 1
    },
    {
      id: 'statement:bbc556cf8bd64f5286b010d74a960f81',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:39efdd03d3ff4e1fa25a77f1221f1483',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 1
    },
    {
      id: 'statement:b55f3c3ac1f349739ae85139f393dc55',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:39efdd03d3ff4e1fa25a77f1221f1483',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 1
    },
    {
      id: 'statement:eaa667c4631c49389c286312ecc7d5d2',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:39efdd03d3ff4e1fa25a77f1221f1483',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 1
    },
    {
      id: 'statement:8a1cebdaa4694921bd565458ed110ba2',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:39efdd03d3ff4e1fa25a77f1221f1483',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 1
    },
    {
      id: 'statement:b2e782fa1e964ade96d5e86f0012e15d',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:39efdd03d3ff4e1fa25a77f1221f1483',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 1
    },
    {
      id: 'statement:56f92799306c46ec820c3bd8d024360e',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:39efdd03d3ff4e1fa25a77f1221f1483',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 1
    },
    {
      id: 'statement:86607a360a2345e68a0a24f118ba9c73',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:39efdd03d3ff4e1fa25a77f1221f1483',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 1
    },
    {
      id: 'statement:bf07ede069ac4b73b93969e15670b889',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:39efdd03d3ff4e1fa25a77f1221f1483',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 1
    },
    {
      id: 'statement:9fe1b0cc07a946b3b1286fb72e59f114',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:39efdd03d3ff4e1fa25a77f1221f1483',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 1
    },
    {
      id: 'statement:bd89d432e0ee401a9e63b7bafe302a06',
      character: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      value: 'state:39efdd03d3ff4e1fa25a77f1221f1483',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 1
    },
    {
      id: 'statement:8cea8c5f54c94eb68cc58f8e9e15e739',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:caaf938b83e645ebb542fd3559b31044',
      frequency: 0
    },
    {
      id: 'statement:970b2c1643f94b2bb27f5bc9046e6284',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:02de5f68893e465bb76d488b2530d60b',
      frequency: 0
    },
    {
      id: 'statement:fa6bbdbe7ed0450d9f7c3d7e6eb84a0d',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:233ad840eced449dbeeec8e73a34064a',
      frequency: 0
    },
    {
      id: 'statement:1b6cc1fbf8524a87bb9eb3b1cbc866db',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:1d8854ace689476e96fc43578b97b92b',
      frequency: 0
    },
    {
      id: 'statement:dfd7329a132f433e9815fa766f5aba92',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:477ada0dad7c43bd86208efa3193532f',
      frequency: 0
    },
    {
      id: 'statement:5573565efa5042ab8b1df6cb496ad053',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:baf58ab819b64701980a426fde42b5b8',
      frequency: 0.3
    },
    {
      id: 'statement:5e18ce833e5748239577b1b5217df7b7',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:ab35b73243d74879886f0657a09617c7',
      frequency: 0.5
    },
    {
      id: 'statement:57115500a5924047a8e7574f9d86692f',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:fd2fc1d402a549a28f4a517ec4e0e644',
      frequency: 0.5
    },
    {
      id: 'statement:405e9aa20dff4cc1b5b182a2e06d5e6c',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:ae3d93f990674e248670cc0e80af59c8',
      frequency: 0
    },
    {
      id: 'statement:05b6fbdde3e84a05bd5be1309150d709',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:51ebfdc5a5ca4ffd855ea6c0ba68828d',
      frequency: 0.25
    },
    {
      id: 'statement:ec94dacb7bcd4da6bd39bbf64005b265',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:2741c376e464497896f5aec4e651a215',
      frequency: 0
    },
    {
      id: 'statement:945e4e67946449a39149f299e5828f4d',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:15dee9a7814445759e031d5d258387ed',
      frequency: 0.3
    },
    {
      id: 'statement:7d033ba834a84ccbaa9070a3227f9b1b',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0.25
    },
    {
      id: 'statement:322142e76f714455ab213484ba813249',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0.25
    },
    {
      id: 'statement:46cb825ddcab46a1a5d600f18de08d47',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 0
    },
    {
      id: 'statement:8cfd22d4fdf74d51bb83ccd3bf22ebb5',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 0.25
    },
    {
      id: 'statement:de95b0afc626463f80808c23d23bc212',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 1
    },
    {
      id: 'statement:e93fb438803d4c229affd1c594a1546d',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 0.5
    },
    {
      id: 'statement:07a60f653db7481ca04e726ff2a363a0',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 1
    },
    {
      id: 'statement:fcc9729e237e4b6ab35e4c723b6b528f',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0.5
    },
    {
      id: 'statement:a80aaeb94e824c3a9aa2a841c7e88dd3',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:d7816f44e87744528854a26207c90dc7',
      frequency: 1
    },
    {
      id: 'statement:41b9a1c171fb433f94e1a9604c70dc50',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:f58c95cf4def4ee09065b00fa90a3e3a',
      frequency: 0.5
    },
    {
      id: 'statement:0b4918c7d618448a9214b5577b6b32cb',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0
    },
    {
      id: 'statement:2ba7a98466eb4a60acda2ecd4c5f3df5',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0.3
    },
    {
      id: 'statement:a673a6afcdc54ab18994854a25830f6e',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0
    },
    {
      id: 'statement:e2682f5fb3654a6896741323b315f59c',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0.3
    },
    {
      id: 'statement:bf0410b7c7ad4dbaa33b231d704fb078',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 1
    },
    {
      id: 'statement:c614ac2bb4b24d19a959b18726a5a301',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:935bc3ff964a484fa00c13e9093c5478',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 0.5
    },
    {
      id: 'statement:6d8a9d79701c41d98a86abf805ed5426',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:caaf938b83e645ebb542fd3559b31044',
      frequency: 0.3
    },
    {
      id: 'statement:084a8125e1924e1680219987f81864c4',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:02de5f68893e465bb76d488b2530d60b',
      frequency: 0
    },
    {
      id: 'statement:a0ff9432bcfe4afcb2dfde7c91f47b6e',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:233ad840eced449dbeeec8e73a34064a',
      frequency: 0.3
    },
    {
      id: 'statement:52fb99c3d0484b98a4a9606906cad451',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:1d8854ace689476e96fc43578b97b92b',
      frequency: 0
    },
    {
      id: 'statement:c6f86ff7f3c44591b227d489d3cf5838',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:477ada0dad7c43bd86208efa3193532f',
      frequency: 0.5
    },
    {
      id: 'statement:6c3f548c8f4e4f4ab1b157c08d6b8b87',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:baf58ab819b64701980a426fde42b5b8',
      frequency: 0.3
    },
    {
      id: 'statement:2f021a48c78642b287e40a6c9ca83802',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:ab35b73243d74879886f0657a09617c7',
      frequency: 0.5
    },
    {
      id: 'statement:dd2a2377fd7d4b22b9afd8282ec8d31e',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:fd2fc1d402a549a28f4a517ec4e0e644',
      frequency: 0
    },
    {
      id: 'statement:bfbe42dfd4ab4eafaea5eb15fd29c007',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:ae3d93f990674e248670cc0e80af59c8',
      frequency: 0
    },
    {
      id: 'statement:2292b59f59634f8dbe91af0ccd33cdff',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:51ebfdc5a5ca4ffd855ea6c0ba68828d',
      frequency: 0
    },
    {
      id: 'statement:fd8791c6243544cca5994c229f7a741d',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:2741c376e464497896f5aec4e651a215',
      frequency: 0
    },
    {
      id: 'statement:5983673e900543f293bdfaace8c15a21',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:15dee9a7814445759e031d5d258387ed',
      frequency: 0
    },
    {
      id: 'statement:67cff3c3876249a3b0c71073ae799581',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0.25
    },
    {
      id: 'statement:f5fcc9dab369444fafeebcd1aec1da0f',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0.25
    },
    {
      id: 'statement:33b26f3efe1d419184f2adf41d3311eb',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 1
    },
    {
      id: 'statement:78a20df0ebbf410387abbc57878bafbd',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 0.25
    },
    {
      id: 'statement:e3c703ade5394facbe3e255112387002',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 0
    },
    {
      id: 'statement:af2d1d5e679744bf9dc8fccd6937b810',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 0
    },
    {
      id: 'statement:e478d575a7cb43689ae739ba9550ba5a',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0
    },
    {
      id: 'statement:8a717d39e18c4ad08713c3da2f1d6e6d',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0
    },
    {
      id: 'statement:edc6d7310be04f38bb12072e079e38e3',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:d7816f44e87744528854a26207c90dc7',
      frequency: 0
    },
    {
      id: 'statement:223209ec24c342bc91f67a0c1e3f19d9',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:f58c95cf4def4ee09065b00fa90a3e3a',
      frequency: 0
    },
    {
      id: 'statement:3874646485d543dc80cbf2b2729def44',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 1
    },
    {
      id: 'statement:b131a77e46344b6597d13b9941b2ee0c',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0.3
    },
    {
      id: 'statement:90e68d0e55ce4e76a782f0cc2dc79853',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 1
    },
    {
      id: 'statement:1f0169fdcabc49cab03b11567fc09ee6',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0.3
    },
    {
      id: 'statement:1812f9568d4544b8b0f082e6800b0945',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 0
    },
    {
      id: 'statement:0fab88b87ac248d5b7bd51fb2ec79ae1',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:261692e5045142e0a84ba089b62a96a0',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 0
    },
    {
      id: 'statement:7358939dcdbb49a885ce964f2f237073',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:caaf938b83e645ebb542fd3559b31044',
      frequency: 0
    },
    {
      id: 'statement:f4feefd80b13430fb0967d29b310d2f0',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:02de5f68893e465bb76d488b2530d60b',
      frequency: 0
    },
    {
      id: 'statement:74ef550d2bc944cea09a25e6f11ac550',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:233ad840eced449dbeeec8e73a34064a',
      frequency: 0
    },
    {
      id: 'statement:00ef99a06dfe48e8916194e372923a00',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:1d8854ace689476e96fc43578b97b92b',
      frequency: 0
    },
    {
      id: 'statement:09c25426c2bb4b8f9006757e6809c249',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:477ada0dad7c43bd86208efa3193532f',
      frequency: 0
    },
    {
      id: 'statement:0fac331edfe748f3b5cd63797bc8253d',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:baf58ab819b64701980a426fde42b5b8',
      frequency: 0
    },
    {
      id: 'statement:a04528ec8b674b90872c4b0bb315c020',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:ab35b73243d74879886f0657a09617c7',
      frequency: 0
    },
    {
      id: 'statement:782710baee2646b383b29613231a1953',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:fd2fc1d402a549a28f4a517ec4e0e644',
      frequency: 0
    },
    {
      id: 'statement:632238aaaea949899969879251359717',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:ae3d93f990674e248670cc0e80af59c8',
      frequency: 0.5
    },
    {
      id: 'statement:92162843024d425081b6ac2f0e9eccf6',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:51ebfdc5a5ca4ffd855ea6c0ba68828d',
      frequency: 0.25
    },
    {
      id: 'statement:b6a957d885004445a609623b954f9a28',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:2741c376e464497896f5aec4e651a215',
      frequency: 1
    },
    {
      id: 'statement:6ffa70aa01bf4fe7844f3ed3c1027771',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:15dee9a7814445759e031d5d258387ed',
      frequency: 0.3
    },
    {
      id: 'statement:6878428d5a174e70bd8d4fbd801d4da6',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:267930f9d00f4d9c86ba5fc1c6a4382a',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0
    },
    {
      id: 'statement:4b40265eed5444768566db05c55e03bd',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 0
    },
    {
      id: 'statement:886d9e85f7094734ad386deb7576cb0c',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 0
    },
    {
      id: 'statement:619a25a0761f4cc3b67c20a6612a3aab',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 0
    },
    {
      id: 'statement:6d257d3a998e412b9058d2fdddb43df1',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 0
    },
    {
      id: 'statement:d83269705f4b465f9f356271bd58e6e6',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0
    },
    {
      id: 'statement:30ff48d5213f42dc91bd417e5dbc3e48',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0
    },
    {
      id: 'statement:041d3491e01c4056b383c459f1501731',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:d7816f44e87744528854a26207c90dc7',
      frequency: 0
    },
    {
      id: 'statement:f9473fca76e74496b0dcb8e38088968e',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:f58c95cf4def4ee09065b00fa90a3e3a',
      frequency: 0
    },
    {
      id: 'statement:67d7c8d7e79540ea9a5e91525e3016c3',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0
    },
    {
      id: 'statement:b887d11571534aa199c94bcbd36fcafe',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0
    },
    {
      id: 'statement:e561bd2114c34cffaa688ce723176943',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0
    },
    {
      id: 'statement:c9aa9238f6124bbf942c5215079019d8',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0
    },
    {
      id: 'statement:a506fc2c8a0c4d3081948f0118c112a4',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 0
    },
    {
      id: 'statement:e63a82b3025142b7b62e33aa32c2b291',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 0
    },
    {
      id: 'statement:f1650a712c154e8aa61a1d22419683e5',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:caaf938b83e645ebb542fd3559b31044',
      frequency: 0.3
    },
    {
      id: 'statement:bf018cb36a7b412a9e2fed7f4542a72d',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:02de5f68893e465bb76d488b2530d60b',
      frequency: 0.5
    },
    {
      id: 'statement:af84593dc67e4c578d9af737eb84b588',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:233ad840eced449dbeeec8e73a34064a',
      frequency: 0.3
    },
    {
      id: 'statement:44646ae77eeb42248e95d56b6388c62f',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:1d8854ace689476e96fc43578b97b92b',
      frequency: 0.5
    },
    {
      id: 'statement:3579626fe0f64ab58e6af6d335188707',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:477ada0dad7c43bd86208efa3193532f',
      frequency: 0
    },
    {
      id: 'statement:29ed4935ee724fb5bec8f18bb8d15376',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:baf58ab819b64701980a426fde42b5b8',
      frequency: 0
    },
    {
      id: 'statement:a2b9ad238f19420989f583494ac9c1a8',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:ab35b73243d74879886f0657a09617c7',
      frequency: 0
    },
    {
      id: 'statement:97c21fe7b7824c48bdc31b2db189e49e',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:fd2fc1d402a549a28f4a517ec4e0e644',
      frequency: 0.5
    },
    {
      id: 'statement:435546b37c0344709e830e98035c8dcc',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:ae3d93f990674e248670cc0e80af59c8',
      frequency: 0.5
    },
    {
      id: 'statement:ff21cd64c36445fa8a0dd440222120fc',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:51ebfdc5a5ca4ffd855ea6c0ba68828d',
      frequency: 0.25
    },
    {
      id: 'statement:81d4d5e70f9f45f3bc20c88534f0d965',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:2741c376e464497896f5aec4e651a215',
      frequency: 0
    },
    {
      id: 'statement:182843c05c95444f92491a9a98ab691b',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:15dee9a7814445759e031d5d258387ed',
      frequency: 0.3
    },
    {
      id: 'statement:d520b12402a74f32bd62e87003dcfbbc',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0.25
    },
    {
      id: 'statement:a9d0b8ce0eaf406a98d4bdbf5a767060',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0.25
    },
    {
      id: 'statement:41028646f3d0411fa195cf1324df52e0',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 0
    },
    {
      id: 'statement:2d69aa9e508a4fdd80fefbebe787bb97',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 0.25
    },
    {
      id: 'statement:b575a40fe14c40f6b4379d4c23b68b11',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 0
    },
    {
      id: 'statement:14185b2a55b0492a8ff17ee6bced7c52',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 0
    },
    {
      id: 'statement:e0d2667b1e7149f3b8bc73bd3954de6f',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0
    },
    {
      id: 'statement:57dd981081ef47648997b378695df033',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0
    },
    {
      id: 'statement:68ee911ee6dd42a386701384214c66a8',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:d7816f44e87744528854a26207c90dc7',
      frequency: 0
    },
    {
      id: 'statement:1bd34969f304496f96422b7f3aaa4352',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:f58c95cf4def4ee09065b00fa90a3e3a',
      frequency: 0
    },
    {
      id: 'statement:878a10f5c9544552929e6eea098f8429',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0
    },
    {
      id: 'statement:c1fb748898024609a9aa7de15e5b128f',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0
    },
    {
      id: 'statement:2ca32bff4899422589ccb245fab8a2f5',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0
    },
    {
      id: 'statement:1d8a582478ae4b6a987c225cc8b6baf9',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0
    },
    {
      id: 'statement:70e92ccc928b4a35a8784570a8811190',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 0
    },
    {
      id: 'statement:6cb785111f1e42e7a4b767fac04c7c4a',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 0
    },
    {
      id: 'statement:389d71029cc049afada2259bd5ebd122',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:caaf938b83e645ebb542fd3559b31044',
      frequency: 0.3
    },
    {
      id: 'statement:a469c66ac9fa408c9c28c51d6a2c7118',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:02de5f68893e465bb76d488b2530d60b',
      frequency: 0.5
    },
    {
      id: 'statement:6d88743e37cf43dabcbc477568fc2422',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:233ad840eced449dbeeec8e73a34064a',
      frequency: 0.3
    },
    {
      id: 'statement:394b4b169c48431eac9df624485b7655',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:1d8854ace689476e96fc43578b97b92b',
      frequency: 0.5
    },
    {
      id: 'statement:74426875d3054d0e950bc574d0e39dd8',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:477ada0dad7c43bd86208efa3193532f',
      frequency: 0.5
    },
    {
      id: 'statement:644f6f148efa4f46a2ccac6c787081c9',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:baf58ab819b64701980a426fde42b5b8',
      frequency: 0.3
    },
    {
      id: 'statement:a14f81a5beaa40ef8f7c91cd2c821d1f',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:ab35b73243d74879886f0657a09617c7',
      frequency: 0
    },
    {
      id: 'statement:359ff89f8e274e60b557cc29db63ae64',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:fd2fc1d402a549a28f4a517ec4e0e644',
      frequency: 0
    },
    {
      id: 'statement:390f4353d11e4b5ebfa1e5668cc98814',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:ae3d93f990674e248670cc0e80af59c8',
      frequency: 0
    },
    {
      id: 'statement:8646e2f3bfc648d6a4a3564e98a88131',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:51ebfdc5a5ca4ffd855ea6c0ba68828d',
      frequency: 0.25
    },
    {
      id: 'statement:15a5fd4dd6dc4636bc4546e803cb0385',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:2741c376e464497896f5aec4e651a215',
      frequency: 0
    },
    {
      id: 'statement:34dbdb8773bf4aca91014a6cc045851a',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:15dee9a7814445759e031d5d258387ed',
      frequency: 0
    },
    {
      id: 'statement:f20859e72b1b4d489b7be5525d78fabe',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0.25
    },
    {
      id: 'statement:edd479beb01948088cd22fb776506aee',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0.25
    },
    {
      id: 'statement:ed13a99e9d1f4119b1fa2b375c48b4b1',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 0
    },
    {
      id: 'statement:7d3f251bcbdd4ee193f2bf94e9789c6c',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 0.25
    },
    {
      id: 'statement:6c46f045d63841c5ac64aec742f2d602',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 0
    },
    {
      id: 'statement:f7b4bcd263714e18a0d88fed74572a1f',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 0.5
    },
    {
      id: 'statement:8b67ed3ac4e54341902e1b22cae4ccd9',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0
    },
    {
      id: 'statement:03de5d4e5a4d4ba78def0f63bbd49b11',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0.5
    },
    {
      id: 'statement:b6bbf9a1f6ff4c8abc5809b0a88ed784',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:d7816f44e87744528854a26207c90dc7',
      frequency: 0
    },
    {
      id: 'statement:ea864a763f5241fa82e30e15894d1a36',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:f58c95cf4def4ee09065b00fa90a3e3a',
      frequency: 0.5
    },
    {
      id: 'statement:eab3b8cb89cf443eb2b08a2e87aae058',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0
    },
    {
      id: 'statement:2fbf5c9d44914437ba7f3879c402dfb3',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0.3
    },
    {
      id: 'statement:c14f8449cfbb4fe288e91c90ac2abce1',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0
    },
    {
      id: 'statement:a81eb26e74714ae39535ed1cb50697bd',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0.3
    },
    {
      id: 'statement:f00871cb30864c4fb6b98e099bdb0ab0',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 0
    },
    {
      id: 'statement:bd50b4f1d0534bdc966bcd729b51ac60',
      character: 'character:c56a19673d09408c9cd1eb06c6e01766',
      value: 'state:e0d2260418e44a5db61ba86c367be016',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 0.5
    },
    {
      id: 'statement:7c7c67f0ec1948d298a26148938052c0',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:e91146dc90d94fb2b14f6e71e8b70229',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 1
    },
    {
      id: 'statement:b0f1c6a887ef416b8066c5617f1deecb',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:e91146dc90d94fb2b14f6e71e8b70229',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 1
    },
    {
      id: 'statement:8a064d3529ad4ae8953663623521bc85',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:e91146dc90d94fb2b14f6e71e8b70229',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 0
    },
    {
      id: 'statement:09a6f2b15ade4be3a09d6644921fec83',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:e91146dc90d94fb2b14f6e71e8b70229',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 0
    },
    {
      id: 'statement:6b5843778ce940f6b64af5b6264f4eb4',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:e91146dc90d94fb2b14f6e71e8b70229',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 1
    },
    {
      id: 'statement:489f73cc2bcd44bdab98a8f2a9e83675',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:e91146dc90d94fb2b14f6e71e8b70229',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 1
    },
    {
      id: 'statement:b9ba696d288d4c00a17555bd440f1ec3',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:e91146dc90d94fb2b14f6e71e8b70229',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:9d5e469f1a144609b0314b9985ca2892',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:e91146dc90d94fb2b14f6e71e8b70229',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0
    },
    {
      id: 'statement:38afa499bcd241039480316de19c84ef',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:e91146dc90d94fb2b14f6e71e8b70229',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:2a9f0e71fd6c4a89a67d9cbd8989da56',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:e91146dc90d94fb2b14f6e71e8b70229',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:7eceb31d4fd4486ea035a876bc636d04',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:e91146dc90d94fb2b14f6e71e8b70229',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:c7e5f09a7f4b453aadf2dc9190abcc8c',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:e91146dc90d94fb2b14f6e71e8b70229',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:2a88aca7fed54b6e8083c46cc3ace90d',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:e91146dc90d94fb2b14f6e71e8b70229',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:5240c581cd774037a3cb740434a9388e',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:e91146dc90d94fb2b14f6e71e8b70229',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:51dbb2e6ad5c4471b972714e82a6f722',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:e91146dc90d94fb2b14f6e71e8b70229',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:42570cb1e3ac48a888c7dd2cd5e97f38',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:6ecd45b1ce054dafa85651470850c53e',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 0
    },
    {
      id: 'statement:5da63c4fb9ea4eb79400512ace807239',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:6ecd45b1ce054dafa85651470850c53e',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 0
    },
    {
      id: 'statement:cd105b231d794f96a07163a8f43d39d4',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:6ecd45b1ce054dafa85651470850c53e',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 1
    },
    {
      id: 'statement:2c986d5e08fc477abea91823350d6d20',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:6ecd45b1ce054dafa85651470850c53e',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 1
    },
    {
      id: 'statement:09937aecda97416097dfb3864b848e27',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:6ecd45b1ce054dafa85651470850c53e',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 0
    },
    {
      id: 'statement:f0ef42ce2af9493b872beecbecef8f9c',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:6ecd45b1ce054dafa85651470850c53e',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 0
    },
    {
      id: 'statement:88779ed47d1948788e89245da328da72',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:6ecd45b1ce054dafa85651470850c53e',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:3d8116e8e194467db0935fc1132a142f',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:6ecd45b1ce054dafa85651470850c53e',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0
    },
    {
      id: 'statement:ec6261b619894149bdbc2bda77fd1dc6',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:6ecd45b1ce054dafa85651470850c53e',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:7c9721ac48ff43ec9864acb20ace5e34',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:6ecd45b1ce054dafa85651470850c53e',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:acf762aa51dd473a8bca6a23a87dba10',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:6ecd45b1ce054dafa85651470850c53e',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:d00b98c45e8947ac8e5a7454e9b30215',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:6ecd45b1ce054dafa85651470850c53e',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:a2659ba5df934500a8caadb6de1662ac',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:6ecd45b1ce054dafa85651470850c53e',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:a6e7b43833d54374a8bdea6f9b95c803',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:6ecd45b1ce054dafa85651470850c53e',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:997d5602889e420d872acd9aea612eb2',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:6ecd45b1ce054dafa85651470850c53e',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:23f67dbc58f74f3a9051cfafea81f536',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:9e17cb664baa4947b8440a6233ae0ac1',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 0
    },
    {
      id: 'statement:6e7e9d438a084d5dbddabc528c81eede',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:9e17cb664baa4947b8440a6233ae0ac1',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 0
    },
    {
      id: 'statement:7e1ed6f079c546c2a18973a93fa77a96',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:9e17cb664baa4947b8440a6233ae0ac1',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 0
    },
    {
      id: 'statement:387e7f235e8443fcbb7a98db48e49353',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:9e17cb664baa4947b8440a6233ae0ac1',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 0
    },
    {
      id: 'statement:0788018a74b64db0a3988ef37ccce119',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:9e17cb664baa4947b8440a6233ae0ac1',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 0
    },
    {
      id: 'statement:e4b632a40c964301b52f59232bd215c0',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:9e17cb664baa4947b8440a6233ae0ac1',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 0
    },
    {
      id: 'statement:f8c5a1c50447467bbb997d31ad1c57c4',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:9e17cb664baa4947b8440a6233ae0ac1',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 1
    },
    {
      id: 'statement:d659eb507ef84e8fbc4088c1840b97ce',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:9e17cb664baa4947b8440a6233ae0ac1',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 1
    },
    {
      id: 'statement:e308db7702b34448ad5fc97777810d21',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:9e17cb664baa4947b8440a6233ae0ac1',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 1
    },
    {
      id: 'statement:fa0b7f245a6d40a2aa33b0a627d457ba',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:9e17cb664baa4947b8440a6233ae0ac1',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 1
    },
    {
      id: 'statement:b81ed8ae49e64a8980edfe4086ed9315',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:9e17cb664baa4947b8440a6233ae0ac1',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 1
    },
    {
      id: 'statement:0288fdececae4b69a98fbf48dd5999e9',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:9e17cb664baa4947b8440a6233ae0ac1',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 1
    },
    {
      id: 'statement:f4dfd1e7c0614f60922b3abe2ad4b3df',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:9e17cb664baa4947b8440a6233ae0ac1',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 1
    },
    {
      id: 'statement:c98ef6c8f2314c6da97bacd6415264a4',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:9e17cb664baa4947b8440a6233ae0ac1',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 1
    },
    {
      id: 'statement:1451929967f043b8a62365d75df8d84b',
      character: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      value: 'state:9e17cb664baa4947b8440a6233ae0ac1',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 1
    },
    {
      id: 'statement:d7247b7454e6409fac053a844e5d20ba',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:d69da87df02f4dcc9bf256b7116303a7',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 1
    },
    {
      id: 'statement:53d0d35bf2e347f8ab568a2182d0b3b3',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:d69da87df02f4dcc9bf256b7116303a7',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 1
    },
    {
      id: 'statement:06a52bd660914c4da1479134ce52f552',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:d69da87df02f4dcc9bf256b7116303a7',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 0.5
    },
    {
      id: 'statement:178a2d24c52c4b66b64f24ba3d15689f',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:d69da87df02f4dcc9bf256b7116303a7',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0.5
    },
    {
      id: 'statement:1a7585f0963d4df1aa0d7207c3dea4f9',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:d69da87df02f4dcc9bf256b7116303a7',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:c3dc4c26fea2454dbfd8f871b2801e06',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:d69da87df02f4dcc9bf256b7116303a7',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 1
    },
    {
      id: 'statement:ff69372c7c2b40b183a60be1c00354b9',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:d69da87df02f4dcc9bf256b7116303a7',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0.5
    },
    {
      id: 'statement:5949778a3b184912b3346ba0f633b874',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:d69da87df02f4dcc9bf256b7116303a7',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0.5
    },
    {
      id: 'statement:5ff62e381e1648f4b0138c8d363d9b8f',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:d69da87df02f4dcc9bf256b7116303a7',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0.5
    },
    {
      id: 'statement:141257e5f5b34e11959e26875cbc7525',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:d69da87df02f4dcc9bf256b7116303a7',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0.5
    },
    {
      id: 'statement:14ec5d3069984db8b880eb1ef15be11c',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:d69da87df02f4dcc9bf256b7116303a7',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:feb7b168c0c24e989bcad4d3b3a4f0db',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:100837a0afe94152a054b7ba0b98bf20',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:8023e67e0b1e468c854609fbb0ba97f2',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:100837a0afe94152a054b7ba0b98bf20',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 0
    },
    {
      id: 'statement:a134bcff95ad4c228f1adf126ec2f133',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:100837a0afe94152a054b7ba0b98bf20',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 0
    },
    {
      id: 'statement:99fa83ed13d04b2493f6a77861cc134c',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:100837a0afe94152a054b7ba0b98bf20',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0.5
    },
    {
      id: 'statement:7734a2c78f214ab8bd49f4cd540ff222',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:100837a0afe94152a054b7ba0b98bf20',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 1
    },
    {
      id: 'statement:a74cc0f18f1147b89be3c399766fb0d8',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:100837a0afe94152a054b7ba0b98bf20',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0
    },
    {
      id: 'statement:8a23b887a0344f99881f6fabd75d9743',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:100837a0afe94152a054b7ba0b98bf20',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0.5
    },
    {
      id: 'statement:1038478041784fd488955ee059adc4f2',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:100837a0afe94152a054b7ba0b98bf20',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0.5
    },
    {
      id: 'statement:6682dfe2815a4939846c0adb7dc9b16e',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:100837a0afe94152a054b7ba0b98bf20',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0.5
    },
    {
      id: 'statement:b488a073855d49de9907bece8f68f9cf',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:100837a0afe94152a054b7ba0b98bf20',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0.5
    },
    {
      id: 'statement:3fc7c7adc94741efa58b536486bfda98',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:100837a0afe94152a054b7ba0b98bf20',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 1
    },
    {
      id: 'statement:2e007e5003c549fcab216bea1594b390',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:252725a993be420cbfcf45fcce735a71',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:50cb04ca96e1483e8b9ad8612473de3e',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:252725a993be420cbfcf45fcce735a71',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 0
    },
    {
      id: 'statement:8c10bed45ac34170a021ebb99fea12e4',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:252725a993be420cbfcf45fcce735a71',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 0.5
    },
    {
      id: 'statement:62bdaa37684d4e158aba112ab224ef9b',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:252725a993be420cbfcf45fcce735a71',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:4309c61dd62d48d596a8fd2bfc4362ec',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:252725a993be420cbfcf45fcce735a71',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:e6d0c7abddb945f6b2e96f27c3ee473c',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:252725a993be420cbfcf45fcce735a71',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0
    },
    {
      id: 'statement:fb2a8edb17c14b32870261fd5dbb606e',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:252725a993be420cbfcf45fcce735a71',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0
    },
    {
      id: 'statement:580c9442cb5149fc88a2f73dce8311fc',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:252725a993be420cbfcf45fcce735a71',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:35437f9a899545e9a36dbfa74c04763b',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:252725a993be420cbfcf45fcce735a71',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:0320acdef7544224b2115c464bed4923',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:252725a993be420cbfcf45fcce735a71',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:81ea1c69f3164074be7aaf0afec8b3bb',
      character: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      value: 'state:252725a993be420cbfcf45fcce735a71',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:e033ac0122d5448e973a644af6dde81b',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:9482013fb3584420b23f8bb9dd963038',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 0.5
    },
    {
      id: 'statement:92d8cb6b488a4ca186d116e6a5905f4b',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:9482013fb3584420b23f8bb9dd963038',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 0.5
    },
    {
      id: 'statement:7eef3827f210453486dc6cd58ffff4db',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:9482013fb3584420b23f8bb9dd963038',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 0
    },
    {
      id: 'statement:b9050223194a40ef94cba5d78ac3358a',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:9482013fb3584420b23f8bb9dd963038',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 0.5
    },
    {
      id: 'statement:38874fa87b684aa3945a737e257b4a2a',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:9482013fb3584420b23f8bb9dd963038',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 0
    },
    {
      id: 'statement:c78b681665d24f90ad1939b7c07e5d6c',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:9482013fb3584420b23f8bb9dd963038',
      taxon: 'taxon:2741c376e464497896f5aec4e651a215',
      frequency: 1
    },
    {
      id: 'statement:660bf048f2284774b9ffa930117e13a0',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:9482013fb3584420b23f8bb9dd963038',
      taxon: 'taxon:15dee9a7814445759e031d5d258387ed',
      frequency: 0.5
    },
    {
      id: 'statement:c29a379f56054666927dd9c98e1fc314',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:9482013fb3584420b23f8bb9dd963038',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:4c9294dc4ec24547bacb32c10ab7f378',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:9482013fb3584420b23f8bb9dd963038',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0
    },
    {
      id: 'statement:0e0b75ea55b2494c9fdd98ec5b0a901a',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:9482013fb3584420b23f8bb9dd963038',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:3d354461fa02438ab3001d37afc2a252',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:9482013fb3584420b23f8bb9dd963038',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:d9aa09560c2e443b881a136659d770f1',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:9482013fb3584420b23f8bb9dd963038',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:f48f04693599457bbecad5880409bad4',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:9482013fb3584420b23f8bb9dd963038',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0.5
    },
    {
      id: 'statement:ce61a209575349c99f462ab178c21a39',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:9482013fb3584420b23f8bb9dd963038',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:dd9f80e6edc1472694fb1913cc529e7b',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:9482013fb3584420b23f8bb9dd963038',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:dc2705badd1b4c01bc644c2a2e0a82bb',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:9482013fb3584420b23f8bb9dd963038',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:4043ed5be9574278ae2d98000ceea37f',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:4878a3f56abd4ca38a740d05d9b50872',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 0.5
    },
    {
      id: 'statement:089e64c7ed7f41b6aa897018400bb035',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:4878a3f56abd4ca38a740d05d9b50872',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 0.5
    },
    {
      id: 'statement:0a0f90a5135b4ce5befae477ad681bb9',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:4878a3f56abd4ca38a740d05d9b50872',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 1
    },
    {
      id: 'statement:7d4c2160bc514d598396b25a3b1be9fe',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:4878a3f56abd4ca38a740d05d9b50872',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 0.5
    },
    {
      id: 'statement:5e3d7a77a31446f18472792b2f495fce',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:4878a3f56abd4ca38a740d05d9b50872',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 1
    },
    {
      id: 'statement:7a25d22263c747dfbb4d5541e8bfe2de',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:4878a3f56abd4ca38a740d05d9b50872',
      taxon: 'taxon:2741c376e464497896f5aec4e651a215',
      frequency: 0
    },
    {
      id: 'statement:a10c87bec289423b9d6e9b1db4ecb786',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:4878a3f56abd4ca38a740d05d9b50872',
      taxon: 'taxon:15dee9a7814445759e031d5d258387ed',
      frequency: 0.5
    },
    {
      id: 'statement:c3c636412c8b4246a60c51d6c687c584',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:4878a3f56abd4ca38a740d05d9b50872',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 1
    },
    {
      id: 'statement:7afd0c060e7e4afba00a775971cd7ad1',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:4878a3f56abd4ca38a740d05d9b50872',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 1
    },
    {
      id: 'statement:466d732a27e3433aa69d68a7f372edbd',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:4878a3f56abd4ca38a740d05d9b50872',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 1
    },
    {
      id: 'statement:628964335cf946e19c2b019b4632e485',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:4878a3f56abd4ca38a740d05d9b50872',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 1
    },
    {
      id: 'statement:89e677fe334a46369aecd2bf89aca24a',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:4878a3f56abd4ca38a740d05d9b50872',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 1
    },
    {
      id: 'statement:fade9e4c8dfc410a81bddddd6fac6b08',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:4878a3f56abd4ca38a740d05d9b50872',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0.5
    },
    {
      id: 'statement:182643eba3c24c65a4abd945f7f9d273',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:4878a3f56abd4ca38a740d05d9b50872',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 1
    },
    {
      id: 'statement:9d526a4fbaf7471ca44686cc2145b1b2',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:4878a3f56abd4ca38a740d05d9b50872',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 1
    },
    {
      id: 'statement:e219e3b23e5e410d95f0933ed3ab6853',
      character: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      value: 'state:4878a3f56abd4ca38a740d05d9b50872',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 1
    },
    {
      id: 'statement:2fb73ddb3c7d4781834efba44e8cdbb1',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:797c14e10db940ce8ef3eaf94f5a9f0b',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 1
    },
    {
      id: 'statement:efeecf585ba242338cd5b2bd21c825d1',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:797c14e10db940ce8ef3eaf94f5a9f0b',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 1
    },
    {
      id: 'statement:144aacea544841c8a3cc12ea7c38c992',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:797c14e10db940ce8ef3eaf94f5a9f0b',
      taxon: 'taxon:477ada0dad7c43bd86208efa3193532f',
      frequency: 0
    },
    {
      id: 'statement:0c72ddfb163f4c1da146d0195a79e44b',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:797c14e10db940ce8ef3eaf94f5a9f0b',
      taxon: 'taxon:baf58ab819b64701980a426fde42b5b8',
      frequency: 0
    },
    {
      id: 'statement:8cfa4985fd1e48229c8a49e2f9204083',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:797c14e10db940ce8ef3eaf94f5a9f0b',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 1
    },
    {
      id: 'statement:9160a784070c458f9f23163f1da317e4',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:797c14e10db940ce8ef3eaf94f5a9f0b',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 1
    },
    {
      id: 'statement:98137dc28dd64efd9adbe1af8e3dd128',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:797c14e10db940ce8ef3eaf94f5a9f0b',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 0
    },
    {
      id: 'statement:8c3342476ce64ea782a175a2f4781956',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:797c14e10db940ce8ef3eaf94f5a9f0b',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:9cf4b037aaaf492fa317ec46709469f3',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:797c14e10db940ce8ef3eaf94f5a9f0b',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0
    },
    {
      id: 'statement:6b137d5cd8584d4c8555ff953748586a',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:797c14e10db940ce8ef3eaf94f5a9f0b',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:455aa5cc6556435587389b6079cb2bdb',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:797c14e10db940ce8ef3eaf94f5a9f0b',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:532a233f9f014290b27eeca2cc2c14a7',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:797c14e10db940ce8ef3eaf94f5a9f0b',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:fd8eed87a9ad4df184503d1b0e47be58',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:797c14e10db940ce8ef3eaf94f5a9f0b',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:4ce3c0d8f03c4705b37b53a03815f2e5',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:797c14e10db940ce8ef3eaf94f5a9f0b',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:17836f80673341a2bbbf5d951a0616f9',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:797c14e10db940ce8ef3eaf94f5a9f0b',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:eccf5319147243139140a3c43b493eb4',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:797c14e10db940ce8ef3eaf94f5a9f0b',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:199f421b124545e684221672c67c8ad4',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:de85b3e680a14cff9e7eb8df66717ca9',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 0
    },
    {
      id: 'statement:7aff8ea7a6cb4e79948156838b616783',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:de85b3e680a14cff9e7eb8df66717ca9',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 0
    },
    {
      id: 'statement:4e476d0d8d8c438985f2247d99e15c08',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:de85b3e680a14cff9e7eb8df66717ca9',
      taxon: 'taxon:477ada0dad7c43bd86208efa3193532f',
      frequency: 1
    },
    {
      id: 'statement:d68321aa208c439c9227b8a34c0bd791',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:de85b3e680a14cff9e7eb8df66717ca9',
      taxon: 'taxon:baf58ab819b64701980a426fde42b5b8',
      frequency: 0.5
    },
    {
      id: 'statement:77ea8dcdceed4576a157c301bed1d0e2',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:de85b3e680a14cff9e7eb8df66717ca9',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 0
    },
    {
      id: 'statement:46284c2d4ced447881034bf6bfbb3014',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:de85b3e680a14cff9e7eb8df66717ca9',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 0
    },
    {
      id: 'statement:a9ff2da68c9a4662b0ec8bf84827fc9f',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:de85b3e680a14cff9e7eb8df66717ca9',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 0
    },
    {
      id: 'statement:fb5a4565ca50465e8f37dfebbf4d93b4',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:de85b3e680a14cff9e7eb8df66717ca9',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:4ea7e4e0e13c4dcda65b849d67105d92',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:de85b3e680a14cff9e7eb8df66717ca9',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0
    },
    {
      id: 'statement:8d81120e4a0a4cadb3b48ec9c7ed7c36',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:de85b3e680a14cff9e7eb8df66717ca9',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:82ff1a18b8c045be9474e5cf3df70533',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:de85b3e680a14cff9e7eb8df66717ca9',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:4eb97478824740bd8cf1e825be6af478',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:de85b3e680a14cff9e7eb8df66717ca9',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:73570788fe5e4a5d8d5521f5fe789af6',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:de85b3e680a14cff9e7eb8df66717ca9',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:687b3f4596f14836a655a5638a253303',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:de85b3e680a14cff9e7eb8df66717ca9',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:dd43724a603c4be4a884cc51c8921eb4',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:de85b3e680a14cff9e7eb8df66717ca9',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:a96ddf7221f54e74ac98179556629759',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:de85b3e680a14cff9e7eb8df66717ca9',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:5542ec7a15654d7983f3b7c8f730eaf6',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:db2b8428e3d54a46aae21ff4f9861d76',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 0
    },
    {
      id: 'statement:99b2a31c68854b05ae8f6b04a5873117',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:db2b8428e3d54a46aae21ff4f9861d76',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 0
    },
    {
      id: 'statement:f5209d4939fc422cb2a5a7533c0d73f8',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:db2b8428e3d54a46aae21ff4f9861d76',
      taxon: 'taxon:477ada0dad7c43bd86208efa3193532f',
      frequency: 0
    },
    {
      id: 'statement:fd0855d17a7a4bc1a3ca8c4a6ed339bf',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:db2b8428e3d54a46aae21ff4f9861d76',
      taxon: 'taxon:baf58ab819b64701980a426fde42b5b8',
      frequency: 0.5
    },
    {
      id: 'statement:a569faa1a7bf4581b73c46aa69b81aa8',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:db2b8428e3d54a46aae21ff4f9861d76',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 0
    },
    {
      id: 'statement:10200191131340e28331a305a2af8f47',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:db2b8428e3d54a46aae21ff4f9861d76',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 0
    },
    {
      id: 'statement:b723411eba0b499585454003b05b862d',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:db2b8428e3d54a46aae21ff4f9861d76',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 1
    },
    {
      id: 'statement:5cc98ffa772245dbb7950d2bf44fe3c1',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:db2b8428e3d54a46aae21ff4f9861d76',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0.5
    },
    {
      id: 'statement:157cdf5e963a4f8eb032d67c8e812a86',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:db2b8428e3d54a46aae21ff4f9861d76',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0.5
    },
    {
      id: 'statement:92664d6abacb45c19ec69e099e6bacdf',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:db2b8428e3d54a46aae21ff4f9861d76',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:b65c59b4d118495aa453b19ec75ac4cd',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:db2b8428e3d54a46aae21ff4f9861d76',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 1
    },
    {
      id: 'statement:22cffcb81da84cdfbb6f69075ecdcc24',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:db2b8428e3d54a46aae21ff4f9861d76',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 1
    },
    {
      id: 'statement:22cc3ba89a7e4d51866c2ff92ffc5f00',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:db2b8428e3d54a46aae21ff4f9861d76',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 1
    },
    {
      id: 'statement:9f4dbad225334b078714257276768462',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:db2b8428e3d54a46aae21ff4f9861d76',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 1
    },
    {
      id: 'statement:53dd961eaa1545f299f9378f0f386aab',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:db2b8428e3d54a46aae21ff4f9861d76',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 1
    },
    {
      id: 'statement:78489acab1e84f23ba7797edfe2ece69',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:db2b8428e3d54a46aae21ff4f9861d76',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 1
    },
    {
      id: 'statement:16d340f1cca14b5a859dfadfd698b466',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:89b36b4b8e4c40a2a8d7633a88edd5b5',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 0
    },
    {
      id: 'statement:89223b25fc9640c2963a1c813a9ac28d',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:89b36b4b8e4c40a2a8d7633a88edd5b5',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 0
    },
    {
      id: 'statement:84fded6a12c248d0a45fb7191433263d',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:89b36b4b8e4c40a2a8d7633a88edd5b5',
      taxon: 'taxon:477ada0dad7c43bd86208efa3193532f',
      frequency: 0
    },
    {
      id: 'statement:bff1d9aadf724816b9a051d118a88cf9',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:89b36b4b8e4c40a2a8d7633a88edd5b5',
      taxon: 'taxon:baf58ab819b64701980a426fde42b5b8',
      frequency: 0
    },
    {
      id: 'statement:8c0303fef8ee41eeba3adbd0dd0b7ffa',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:89b36b4b8e4c40a2a8d7633a88edd5b5',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 0
    },
    {
      id: 'statement:fa736e9779064f9ca2f2330047729686',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:89b36b4b8e4c40a2a8d7633a88edd5b5',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 0
    },
    {
      id: 'statement:3f530795481b425d8f7802ad6ee52d52',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:89b36b4b8e4c40a2a8d7633a88edd5b5',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 0
    },
    {
      id: 'statement:37d8ae55e28444f5b3deeb2b1e53584e',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:89b36b4b8e4c40a2a8d7633a88edd5b5',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0.5
    },
    {
      id: 'statement:2c265c56ca1346c58481b1d060dd1db4',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:89b36b4b8e4c40a2a8d7633a88edd5b5',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0.5
    },
    {
      id: 'statement:4eed3bd68d03442394530fa6d6cb99f0',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:89b36b4b8e4c40a2a8d7633a88edd5b5',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 1
    },
    {
      id: 'statement:bf1a70f6d6d24e3b85a971d039da069c',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:89b36b4b8e4c40a2a8d7633a88edd5b5',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:91e5bd4edb664d41aa1b5512fe5bc4fd',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:89b36b4b8e4c40a2a8d7633a88edd5b5',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:d835711136824e2396e573df056404c3',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:89b36b4b8e4c40a2a8d7633a88edd5b5',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:fa038d3a73eb41b5b1a619b1a94ccc79',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:89b36b4b8e4c40a2a8d7633a88edd5b5',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:e222c83840f74385ba79ffed875eff19',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:89b36b4b8e4c40a2a8d7633a88edd5b5',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:4b633c425f864ebaae6694a7c609ae05',
      character: 'character:daf65d36f7b94daa8fe8632217a91f37',
      value: 'state:89b36b4b8e4c40a2a8d7633a88edd5b5',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:aed75c559b364f60a9b5957d1a38170a',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 0
    },
    {
      id: 'statement:af50e796bff24456a398da6c3c4b8da2',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 0
    },
    {
      id: 'statement:1a8ec84bee0e4549a83a01f98358005b',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:ae3d93f990674e248670cc0e80af59c8',
      frequency: 0
    },
    {
      id: 'statement:b171cc070a2d4722beb1ace174357420',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:51ebfdc5a5ca4ffd855ea6c0ba68828d',
      frequency: 0.5
    },
    {
      id: 'statement:b4c8da18e01b4a4bbc260d25e29e59a3',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:2741c376e464497896f5aec4e651a215',
      frequency: 0
    },
    {
      id: 'statement:fb9efca4fb0643d6a127d86e5337b1cc',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:15dee9a7814445759e031d5d258387ed',
      frequency: 1
    },
    {
      id: 'statement:333a93a4787b4a17902ba99169cb78fa',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:090aca4abfbd49a49e065af0eb53d866',
      frequency: 0
    },
    {
      id: 'statement:72261a22384049b5a33fe3d4fb352f2b',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:31eb2e8a97274c9198f34d3f1febb616',
      frequency: 0.5
    },
    {
      id: 'statement:a09e5f909f00457abb5ce9a1921cb26a',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 0
    },
    {
      id: 'statement:4957b60a4c5342fd84325f53af4738f6',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 0.5
    },
    {
      id: 'statement:34f91ca32dd74efba32c60fa1a7ee682',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 0
    },
    {
      id: 'statement:20600a3cf3264e32992b4b9366fa4d1c',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 0.5
    },
    {
      id: 'statement:0ed7ffb88cff4ca4ad5b6535d06f5b65',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 0
    },
    {
      id: 'statement:878af8c6fc5244268d2f77423bf42918',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 1
    },
    {
      id: 'statement:06c065ef56554b809d2f424879df9ddc',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0
    },
    {
      id: 'statement:6cf9db2265e74d27821e97a4b7ecff75',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0.5
    },
    {
      id: 'statement:b26b58eb66c34d94b843b05b90d987fb',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:773844313f2c48bd94923588e6736bec',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0
    },
    {
      id: 'statement:8dcfb3ff1c3244249d8c01ab5f4613f3',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0.5
    },
    {
      id: 'statement:0305c8a08cab4e61a876767700dce92f',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0
    },
    {
      id: 'statement:bb51b4f0447b45afad895321ab6448ac',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0.33
    },
    {
      id: 'statement:9ce632dd96b04829bb35d2c559c25920',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 0
    },
    {
      id: 'statement:c64d155914cd4754823dd515d355c615',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:29207b2078074b7a9afb3ec18c726a83',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 0
    },
    {
      id: 'statement:cc72e4aff18e4848bd35da0743e47380',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 0
    },
    {
      id: 'statement:cb33a9a7fb5a4fd29a35b7abca98231c',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 1
    },
    {
      id: 'statement:0870b8a90a6f4ebdab51f1007d68c7fb',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:ae3d93f990674e248670cc0e80af59c8',
      frequency: 0
    },
    {
      id: 'statement:9c3d2dc273004464a7ed3b1894f500be',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:51ebfdc5a5ca4ffd855ea6c0ba68828d',
      frequency: 0
    },
    {
      id: 'statement:68623f2a6e33467db1c825b7a185cb2a',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:2741c376e464497896f5aec4e651a215',
      frequency: 0.5
    },
    {
      id: 'statement:4c6f0016ce9842d1ada56ff96d066d02',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:15dee9a7814445759e031d5d258387ed',
      frequency: 0
    },
    {
      id: 'statement:fd96b5082c564379a549ff40a39b03a3',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:090aca4abfbd49a49e065af0eb53d866',
      frequency: 1
    },
    {
      id: 'statement:039fdb528c6242a98083ae004f43c8be',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:31eb2e8a97274c9198f34d3f1febb616',
      frequency: 0.5
    },
    {
      id: 'statement:1a25f549d932493eb6517ca163dd9329',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 1
    },
    {
      id: 'statement:b0e5424189d344b0a026aebf6dbf59af',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 0.5
    },
    {
      id: 'statement:678bc9da69504314b79033a491270ac8',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 0
    },
    {
      id: 'statement:2fc5eb5e0d4f4c9683fbf1a3bfaea0a4',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 0
    },
    {
      id: 'statement:d63f0509a8694e32a1ec70066f0aa3bd',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 0
    },
    {
      id: 'statement:1b8ec6fda5b34d7baeed67739123ffe7',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 0
    },
    {
      id: 'statement:e2f0e320746a41ca9b7cc53e17bff51b',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0.5
    },
    {
      id: 'statement:8842947b7d364b60827aab8916e30ec7',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0.5
    },
    {
      id: 'statement:3323458f559f4c52acc5181f49296fbd',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 1
    },
    {
      id: 'statement:b259b692d1ba401ca77779852a872d5e',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0
    },
    {
      id: 'statement:e3abf9b19a9148b7bc08f61dcbbb83db',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0
    },
    {
      id: 'statement:5ccccc727b314875aa00db35a67049eb',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0
    },
    {
      id: 'statement:1a37929a35b742518d4cdac8be552aeb',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0.33
    },
    {
      id: 'statement:c6ff1c3e7efa4c30b394426c53bd3efb',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 0
    },
    {
      id: 'statement:e42dcb63474940c6b14ddec4fd4d85df',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:dac25429b181498fbfcef22cc9ec4c64',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 1
    },
    {
      id: 'statement:ce24d61737fd4310b934c3b067ed5ee7',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 0
    },
    {
      id: 'statement:5cff14cb16274ee1b599ad33d2bfdd8e',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 0
    },
    {
      id: 'statement:d8f400495b3644af8f1a527e677b8665',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:ae3d93f990674e248670cc0e80af59c8',
      frequency: 1
    },
    {
      id: 'statement:d350ab39bcd7440e9646f3a0b399a3b7',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:51ebfdc5a5ca4ffd855ea6c0ba68828d',
      frequency: 0.5
    },
    {
      id: 'statement:7ad9361834e242ce93071982625a9b92',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:2741c376e464497896f5aec4e651a215',
      frequency: 0.5
    },
    {
      id: 'statement:5a30de970a7d43c7b1dbe0ed2861da04',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:15dee9a7814445759e031d5d258387ed',
      frequency: 0
    },
    {
      id: 'statement:ddc43935e8b048c78a48f16f3dd8a196',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:090aca4abfbd49a49e065af0eb53d866',
      frequency: 0
    },
    {
      id: 'statement:c0f7cab322834ffaafd6305db27b310d',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:31eb2e8a97274c9198f34d3f1febb616',
      frequency: 0
    },
    {
      id: 'statement:fe68392f49a04dd581dc0d395e26b205',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 0
    },
    {
      id: 'statement:673c3fe27beb4ca692a84ba659acbd9d',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 0
    },
    {
      id: 'statement:0da4d6c58f664e6c8dcb911f22e238f6',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 1
    },
    {
      id: 'statement:f3021e65fb304a3091018a20f269ff20',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 0.5
    },
    {
      id: 'statement:c241ff4543eb4c5692ae19fb5886547d',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 1
    },
    {
      id: 'statement:aecbd72cfdd04f75b4ba762b7519a4e6',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 0
    },
    {
      id: 'statement:7c9f8320aa0d4f1ea197185fb3e7b13a',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0.5
    },
    {
      id: 'statement:c0ad3e1ed7c04abb9cb2051eb4dafa85',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0
    },
    {
      id: 'statement:92bb5696b20b46a7ac40439dd74478d4',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:51a0bc72186b4f51b5d21d0906e90fcc',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 1
    },
    {
      id: 'statement:b13da552caa543d5bdc4e1c43ee0bbe0',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0.5
    },
    {
      id: 'statement:56d2160f325d45d48fa27ae78ba18b15',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 1
    },
    {
      id: 'statement:1719bf249b6f42e69b8ffd8a93d8ba50',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0.33
    },
    {
      id: 'statement:6797cab35c264152bf6926afafa7e837',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 1
    },
    {
      id: 'statement:a37051272b644f9da4c8cc94cb791f78',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 0
    },
    {
      id: 'statement:89934db335c846ed9cdf880d73749c1b',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 1
    },
    {
      id: 'statement:93253a44f7194348912b9c5a406fe561',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 0
    },
    {
      id: 'statement:478c59125f644206bb414a6eff9257a2',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:ae3d93f990674e248670cc0e80af59c8',
      frequency: 0
    },
    {
      id: 'statement:5371ed407be740cea7030e2b0b9596f1',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:51ebfdc5a5ca4ffd855ea6c0ba68828d',
      frequency: 0
    },
    {
      id: 'statement:37a129dc662f4439897336899ce40e61',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:2741c376e464497896f5aec4e651a215',
      frequency: 0
    },
    {
      id: 'statement:af49974d5dcc4a12b91394be3744491a',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:15dee9a7814445759e031d5d258387ed',
      frequency: 0
    },
    {
      id: 'statement:6694d89f38fb4c2daadcc646f3c1c69c',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:090aca4abfbd49a49e065af0eb53d866',
      frequency: 0
    },
    {
      id: 'statement:ac1b5e1bac634f91974ee7eaa3481d84',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:31eb2e8a97274c9198f34d3f1febb616',
      frequency: 0
    },
    {
      id: 'statement:12c06b58052d43aead161f0026f4449b',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 0
    },
    {
      id: 'statement:39ffd10732a2460497e9e873e7210483',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 0
    },
    {
      id: 'statement:14e62359aaa946d2b5d0369972ae4034',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 0
    },
    {
      id: 'statement:e7735df3fa5f4627aa12a89e675f82ca',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 0
    },
    {
      id: 'statement:0dc5714d4ffb40a0b5fd67dc39bd5888',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 0
    },
    {
      id: 'statement:2c4312c7b2aa4d4095e94de8e8338709',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 0
    },
    {
      id: 'statement:d1c2c94a1fd7453cbbc546e2dfee5cb7',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0
    },
    {
      id: 'statement:b3325b08274d43eea7be9881826bfb46',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0
    },
    {
      id: 'statement:cd05e6554a9a4b0d8f51a20e8ad6351d',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:b9b5b5a84c4a469ea84ced9955521998',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0
    },
    {
      id: 'statement:4095a92a601f448da670f8b4858a8d5c',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0
    },
    {
      id: 'statement:2430cbe367c94823a2b059b79fc7e029',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0
    },
    {
      id: 'statement:4d5ab450ed1c41af931676f0a663cfa6',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0
    },
    {
      id: 'statement:4fcb13010db04134b147af6cc0d89dcf',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 0
    },
    {
      id: 'statement:e84529a1b6e844f2a4d3b0323ec88770',
      character: 'character:23f5f8c5362246b1acd788308481eac0',
      value: 'state:5f040f3bfdca47a89eb288548575a8cf',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 0
    },
    {
      id: 'statement:93cae005445a465083afed4c902a3b68',
      character: 'character:cd197cc6d5c14a60b212a287132ec08d',
      value: 'state:46238226252348a68e03e17c91cf1116',
      taxon: 'taxon:caaf938b83e645ebb542fd3559b31044',
      frequency: 1
    },
    {
      id: 'statement:6a07c27dfbae4beda44cb1c7f5d3797b',
      character: 'character:cd197cc6d5c14a60b212a287132ec08d',
      value: 'state:46238226252348a68e03e17c91cf1116',
      taxon: 'taxon:02de5f68893e465bb76d488b2530d60b',
      frequency: 0
    },
    {
      id: 'statement:cb7eb8cc707a417e87ea235c343fd91e',
      character: 'character:cd197cc6d5c14a60b212a287132ec08d',
      value: 'state:46238226252348a68e03e17c91cf1116',
      taxon: 'taxon:233ad840eced449dbeeec8e73a34064a',
      frequency: 1
    },
    {
      id: 'statement:65166f16128d424c9324ac138c72b763',
      character: 'character:cd197cc6d5c14a60b212a287132ec08d',
      value: 'state:46238226252348a68e03e17c91cf1116',
      taxon: 'taxon:1d8854ace689476e96fc43578b97b92b',
      frequency: 0
    },
    {
      id: 'statement:41493d4f506d48808f6cf52beb81dffa',
      character: 'character:cd197cc6d5c14a60b212a287132ec08d',
      value: 'state:0ec8add9fbf34ad591b094325cc51c39',
      taxon: 'taxon:caaf938b83e645ebb542fd3559b31044',
      frequency: 0
    },
    {
      id: 'statement:b65c7eafac604dde9b5722e4477980c0',
      character: 'character:cd197cc6d5c14a60b212a287132ec08d',
      value: 'state:0ec8add9fbf34ad591b094325cc51c39',
      taxon: 'taxon:02de5f68893e465bb76d488b2530d60b',
      frequency: 1
    },
    {
      id: 'statement:1297d6d235df4d549a6fa87d859c1d01',
      character: 'character:cd197cc6d5c14a60b212a287132ec08d',
      value: 'state:0ec8add9fbf34ad591b094325cc51c39',
      taxon: 'taxon:233ad840eced449dbeeec8e73a34064a',
      frequency: 0
    },
    {
      id: 'statement:03199f87e30e4a48b19dd852e9ee9898',
      character: 'character:cd197cc6d5c14a60b212a287132ec08d',
      value: 'state:0ec8add9fbf34ad591b094325cc51c39',
      taxon: 'taxon:1d8854ace689476e96fc43578b97b92b',
      frequency: 1
    },
    {
      id: 'statement:3568aabe308c4a489229a3e9b9dae9fa',
      character: 'character:52e6714bdaa24a928c2fb4b18d287e25',
      value: 'state:754180c0a02f47c092cc2ce8a1d4aa8a',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 1
    },
    {
      id: 'statement:b57ae471dcb743079f8b48bd2493fb41',
      character: 'character:52e6714bdaa24a928c2fb4b18d287e25',
      value: 'state:754180c0a02f47c092cc2ce8a1d4aa8a',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 0
    },
    {
      id: 'statement:a46a1cf02e1a4cbc9fa6220b78062562',
      character: 'character:52e6714bdaa24a928c2fb4b18d287e25',
      value: 'state:3c79e8e9c89940dda71bf02b1a87d43d',
      taxon: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      frequency: 0
    },
    {
      id: 'statement:5cc9c1c2fe2e42dfb3e2bc2b7259a245',
      character: 'character:52e6714bdaa24a928c2fb4b18d287e25',
      value: 'state:3c79e8e9c89940dda71bf02b1a87d43d',
      taxon: 'taxon:d6158b19549e47388ddb58cd55250aac',
      frequency: 1
    },
    {
      id: 'statement:d8b3e1d770834ce0ab3d3653888fcfed',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:5ae356c950a84d3bbd19e46efdf5c320',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 1
    },
    {
      id: 'statement:f5e40009764c4280a54c8b9c83fa3cbd',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:5ae356c950a84d3bbd19e46efdf5c320',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 0
    },
    {
      id: 'statement:92ca8afbbbb2486cac3a0bfce6cc5e7a',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:5ae356c950a84d3bbd19e46efdf5c320',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 0
    },
    {
      id: 'statement:e238eff9784743409ba4f545a1df4f25',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:5ae356c950a84d3bbd19e46efdf5c320',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 0
    },
    {
      id: 'statement:7685bcbc1e704bd2a5cbe01aabb02ef3',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:5ae356c950a84d3bbd19e46efdf5c320',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:460eb07b3a234bffbaf1a6d3f1788fcb',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:5ae356c950a84d3bbd19e46efdf5c320',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0
    },
    {
      id: 'statement:b1b7d6a6fd0640e3a8019aedae8fd8e1',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:5ae356c950a84d3bbd19e46efdf5c320',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:cda5789da1f848b8918e8400c2d46167',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:5ae356c950a84d3bbd19e46efdf5c320',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:67cb891c2852423791150371b7c02e4c',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:5ae356c950a84d3bbd19e46efdf5c320',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:f37b70eb294a4a239cc2dad16dd62b15',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:5ae356c950a84d3bbd19e46efdf5c320',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:67f30c992f664799baf50a56344e60e7',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:5ae356c950a84d3bbd19e46efdf5c320',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:e7711a901b854a349967b2fee85bc7f2',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:5ae356c950a84d3bbd19e46efdf5c320',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:8be5e06e327a4e60b1fe27d8070a33cc',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:5ae356c950a84d3bbd19e46efdf5c320',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:fa52c56dbbfb472cbfa7e7ce1190ce22',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:9dabdcff0fed4caf897c6cfda509a899',
      taxon: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      frequency: 0
    },
    {
      id: 'statement:8b263b9efeb84640b623da4d08dad862',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:9dabdcff0fed4caf897c6cfda509a899',
      taxon: 'taxon:68549e9e52864a5897442792e88f1bd0',
      frequency: 1
    },
    {
      id: 'statement:f80a348bc1464ceb8ca3f9ac5aca6a30',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:9dabdcff0fed4caf897c6cfda509a899',
      taxon: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      frequency: 1
    },
    {
      id: 'statement:10f68889fcd44a5a95cdd164afd1250f',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:9dabdcff0fed4caf897c6cfda509a899',
      taxon: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      frequency: 1
    },
    {
      id: 'statement:2e5c3a3b40bd49eb94292ebd733501b1',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:9dabdcff0fed4caf897c6cfda509a899',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 1
    },
    {
      id: 'statement:5e000dbbf664413599fc6c06efdf90a7',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:9dabdcff0fed4caf897c6cfda509a899',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 1
    },
    {
      id: 'statement:b80c8771f7754807aa91c1b5c2931ee9',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:9dabdcff0fed4caf897c6cfda509a899',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 1
    },
    {
      id: 'statement:fb7cd4d949364d1e8d461e781ce49c2d',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:9dabdcff0fed4caf897c6cfda509a899',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 1
    },
    {
      id: 'statement:cd2553e4eb2f4935b9dbf6d08f9f15cd',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:9dabdcff0fed4caf897c6cfda509a899',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 1
    },
    {
      id: 'statement:0689a128755d4451bb3af25b10505d11',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:9dabdcff0fed4caf897c6cfda509a899',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 1
    },
    {
      id: 'statement:c3e429d7e26640c8a36b2e5c0f24938a',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:9dabdcff0fed4caf897c6cfda509a899',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 1
    },
    {
      id: 'statement:cc95eb5c869d43a1a92164790d8e8993',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:9dabdcff0fed4caf897c6cfda509a899',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 1
    },
    {
      id: 'statement:28e9160b5e6141c0ad6aeb74c8e6aa8b',
      character: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      value: 'state:9dabdcff0fed4caf897c6cfda509a899',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 1
    },
    {
      id: 'statement:94da63b48f1a45b984ad25ca1fba0480',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:e3cf517eb4ba474ba90104c7951e25ba',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:351bb2e3256c4f5493b745fe4f14f941',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:e3cf517eb4ba474ba90104c7951e25ba',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 0
    },
    {
      id: 'statement:3b560f8deaab473085470bcdde7333cd',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:e3cf517eb4ba474ba90104c7951e25ba',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 0.5
    },
    {
      id: 'statement:fa4546605ebc4819a95f7919bace97e1',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:e3cf517eb4ba474ba90104c7951e25ba',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 0
    },
    {
      id: 'statement:3b91b8063eb64fca8a03ae20680cf5b6',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:e3cf517eb4ba474ba90104c7951e25ba',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 0
    },
    {
      id: 'statement:57b58e16c8164ffeaccaa339da3d4c78',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:e3cf517eb4ba474ba90104c7951e25ba',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 0
    },
    {
      id: 'statement:45e1a35d62a040238770599371c01d13',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:e3cf517eb4ba474ba90104c7951e25ba',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 0
    },
    {
      id: 'statement:21406e0385114c29b145c4a2afaf1673',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:e3cf517eb4ba474ba90104c7951e25ba',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0
    },
    {
      id: 'statement:2d30de13647a46b7bd38ee08f926ee73',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:e3cf517eb4ba474ba90104c7951e25ba',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0
    },
    {
      id: 'statement:0452ecb742db4f00a62b59b67627d882',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:e3cf517eb4ba474ba90104c7951e25ba',
      taxon: 'taxon:d7816f44e87744528854a26207c90dc7',
      frequency: 0
    },
    {
      id: 'statement:a56d5760c3c040ecb4178273f2a50a7c',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:e3cf517eb4ba474ba90104c7951e25ba',
      taxon: 'taxon:f58c95cf4def4ee09065b00fa90a3e3a',
      frequency: 0
    },
    {
      id: 'statement:25d76d018f2341d2ab14a741e36ee5c0',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:e3cf517eb4ba474ba90104c7951e25ba',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0
    },
    {
      id: 'statement:f18f687df7ea422ea264ecd2a0b4d899',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:e3cf517eb4ba474ba90104c7951e25ba',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0
    },
    {
      id: 'statement:7cdcd27b84f148dabafb61e824768df4',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:e3cf517eb4ba474ba90104c7951e25ba',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0
    },
    {
      id: 'statement:7591f138faf24c4da8a108a706bd18cd',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:e3cf517eb4ba474ba90104c7951e25ba',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0
    },
    {
      id: 'statement:59f774623c7f46b29c41e135751f8475',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:e3cf517eb4ba474ba90104c7951e25ba',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 0
    },
    {
      id: 'statement:3a517f8e3b1f45669c18a18df557a5fc',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:e3cf517eb4ba474ba90104c7951e25ba',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 0
    },
    {
      id: 'statement:2b2544118c4340dcaef0f3cfcf234eff',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:4ece383d85224479b1d5ced07ed9620e',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 1
    },
    {
      id: 'statement:56b21f02a3a246c79650487b212801b2',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:4ece383d85224479b1d5ced07ed9620e',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 1
    },
    {
      id: 'statement:b5af70b6c80c45a8abf77150f606b7bc',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:4ece383d85224479b1d5ced07ed9620e',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 0.5
    },
    {
      id: 'statement:2b87105e49cd4f7591f679f617b68945',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:4ece383d85224479b1d5ced07ed9620e',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 0
    },
    {
      id: 'statement:2a3912b44dfb4b87b55e4cafa97ce4cf',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:4ece383d85224479b1d5ced07ed9620e',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 1
    },
    {
      id: 'statement:99923152d9c34ccfa2e408c429ad11bd',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:4ece383d85224479b1d5ced07ed9620e',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 0
    },
    {
      id: 'statement:6c06513398284e7c8e33fb261d316094',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:4ece383d85224479b1d5ced07ed9620e',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 1
    },
    {
      id: 'statement:65dc353cee5c45ffa13a0950ed63b1d4',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:4ece383d85224479b1d5ced07ed9620e',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0
    },
    {
      id: 'statement:bf83afccdd6d4672a4e55374827a092b',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:4ece383d85224479b1d5ced07ed9620e',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 1
    },
    {
      id: 'statement:83a19b13b19840839098a77c24bb5b30',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:4ece383d85224479b1d5ced07ed9620e',
      taxon: 'taxon:d7816f44e87744528854a26207c90dc7',
      frequency: 0
    },
    {
      id: 'statement:8be1c44ca7534289ae9cdf2fd87b5e1d',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:4ece383d85224479b1d5ced07ed9620e',
      taxon: 'taxon:f58c95cf4def4ee09065b00fa90a3e3a',
      frequency: 0
    },
    {
      id: 'statement:4b2dc2c7df374c0997a76482bca8c0ce',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:4ece383d85224479b1d5ced07ed9620e',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0
    },
    {
      id: 'statement:9b44a6428b67459a9b62038937fbec5d',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:4ece383d85224479b1d5ced07ed9620e',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 1
    },
    {
      id: 'statement:5cd3488564c342588068aa72887e7191',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:4ece383d85224479b1d5ced07ed9620e',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0
    },
    {
      id: 'statement:d0dcf448f4d945ae8337499d741fe9f7',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:4ece383d85224479b1d5ced07ed9620e',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0.33
    },
    {
      id: 'statement:ff66f89361c2498d847a7c5668063097',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:4ece383d85224479b1d5ced07ed9620e',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 0
    },
    {
      id: 'statement:90f82d5ff06c4069970dfe0c7cc75135',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:4ece383d85224479b1d5ced07ed9620e',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 1
    },
    {
      id: 'statement:322ef3e9cb4a4ef097b675a1bf655006',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:1c019ceb5c954bd1b7d5ddc4f3f06ff3',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:76b19901d8a94c8480a31bc9ebb086c1',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:1c019ceb5c954bd1b7d5ddc4f3f06ff3',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 0
    },
    {
      id: 'statement:773b0f1998774afca8009aa1726ea54b',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:1c019ceb5c954bd1b7d5ddc4f3f06ff3',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 0
    },
    {
      id: 'statement:d1d8ca64f3cd4131ac5527faa33975b7',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:1c019ceb5c954bd1b7d5ddc4f3f06ff3',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 0.5
    },
    {
      id: 'statement:34b92a500be746d699cea4b9602b34bd',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:1c019ceb5c954bd1b7d5ddc4f3f06ff3',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 0
    },
    {
      id: 'statement:fb8da1e2234f41779f7231b96086c81c',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:1c019ceb5c954bd1b7d5ddc4f3f06ff3',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 0
    },
    {
      id: 'statement:415bb892c4b146a39e5c1181ff03060b',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:1c019ceb5c954bd1b7d5ddc4f3f06ff3',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 0
    },
    {
      id: 'statement:2d92a980c58745b6b4379a1cf0e1c645',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:1c019ceb5c954bd1b7d5ddc4f3f06ff3',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0
    },
    {
      id: 'statement:a77005db02ee4458a0caad7fc071ef2c',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:1c019ceb5c954bd1b7d5ddc4f3f06ff3',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0
    },
    {
      id: 'statement:cf89c42f5e3f4b999c329d9fa43dc49b',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:1c019ceb5c954bd1b7d5ddc4f3f06ff3',
      taxon: 'taxon:d7816f44e87744528854a26207c90dc7',
      frequency: 0
    },
    {
      id: 'statement:7a6d27e4f092485190559e9e6612f284',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:1c019ceb5c954bd1b7d5ddc4f3f06ff3',
      taxon: 'taxon:f58c95cf4def4ee09065b00fa90a3e3a',
      frequency: 1
    },
    {
      id: 'statement:9f08830a64a746f597dba39828026595',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:1c019ceb5c954bd1b7d5ddc4f3f06ff3',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0
    },
    {
      id: 'statement:5420832173544d8d9bb730aee39f3a9a',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:1c019ceb5c954bd1b7d5ddc4f3f06ff3',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0
    },
    {
      id: 'statement:232db94c2074475b974cb8e9b04f2f1f',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:1c019ceb5c954bd1b7d5ddc4f3f06ff3',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0
    },
    {
      id: 'statement:5b0c40fa2e5a4284bda6145edf9a4f36',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:1c019ceb5c954bd1b7d5ddc4f3f06ff3',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0.33
    },
    {
      id: 'statement:6048d826dbe3490fb34c81267a45a089',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:1c019ceb5c954bd1b7d5ddc4f3f06ff3',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 0
    },
    {
      id: 'statement:95c1eb767458465183336c064543cf5d',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:1c019ceb5c954bd1b7d5ddc4f3f06ff3',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 0
    },
    {
      id: 'statement:13955fa5bba0462aa20133259cba8e9f',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:46a2415075e549bfafa3dc8726149710',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:af19f00927204018b4e285dce11e1752',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:46a2415075e549bfafa3dc8726149710',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 0
    },
    {
      id: 'statement:496147d1325047789da33ac947ef2496',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:46a2415075e549bfafa3dc8726149710',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 0
    },
    {
      id: 'statement:7d58e47a181940189c60fbd9e1114696',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:46a2415075e549bfafa3dc8726149710',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 0.5
    },
    {
      id: 'statement:b248f76c60894d3d903713555952d477',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:46a2415075e549bfafa3dc8726149710',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 0
    },
    {
      id: 'statement:c1e4a8699f4d4b838229e6f64063abf9',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:46a2415075e549bfafa3dc8726149710',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 0.2
    },
    {
      id: 'statement:638b987f0ed14570a267b3eba23ae9e2',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:46a2415075e549bfafa3dc8726149710',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 0
    },
    {
      id: 'statement:94143e28ab9f450d8974ead4a23b6b19',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:46a2415075e549bfafa3dc8726149710',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0.33
    },
    {
      id: 'statement:bfbd9912f3104190ba104bb18847f44d',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:46a2415075e549bfafa3dc8726149710',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0
    },
    {
      id: 'statement:c6a6ea4bba5c491ba6d26979005d45c1',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:46a2415075e549bfafa3dc8726149710',
      taxon: 'taxon:d7816f44e87744528854a26207c90dc7',
      frequency: 0
    },
    {
      id: 'statement:38f72e069f7049f7857aee53efaeb30c',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:46a2415075e549bfafa3dc8726149710',
      taxon: 'taxon:f58c95cf4def4ee09065b00fa90a3e3a',
      frequency: 0
    },
    {
      id: 'statement:39b058f625454532aded9eb7e63c82e7',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:46a2415075e549bfafa3dc8726149710',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0
    },
    {
      id: 'statement:36cc4c7180a848f1b846412d418ea04e',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:46a2415075e549bfafa3dc8726149710',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0
    },
    {
      id: 'statement:80ff0bdf403648309b25355b522f4e4a',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:46a2415075e549bfafa3dc8726149710',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0
    },
    {
      id: 'statement:356a3f893aa54a7aafb004bcbe20db32',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:46a2415075e549bfafa3dc8726149710',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0
    },
    {
      id: 'statement:090905b6327d413da34ed3f53537ea85',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:46a2415075e549bfafa3dc8726149710',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 0
    },
    {
      id: 'statement:19efaa4cf5da446c841683895cc8b320',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:46a2415075e549bfafa3dc8726149710',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 0
    },
    {
      id: 'statement:1271bcc9ec6045dc8000409ff728e8ee',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:070a1bbfd4e54334905ca3606633c046',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:9555709862d74d4fb77997acf3087932',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:070a1bbfd4e54334905ca3606633c046',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 0
    },
    {
      id: 'statement:c6dbd42dfcf54d7ea99b6e3d330df478',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:070a1bbfd4e54334905ca3606633c046',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 0
    },
    {
      id: 'statement:f928d72c4f444283a394e824443ab01b',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:070a1bbfd4e54334905ca3606633c046',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 0
    },
    {
      id: 'statement:e1a0f9916133418cbece0e13dcb5d6f5',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:070a1bbfd4e54334905ca3606633c046',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 0
    },
    {
      id: 'statement:8828d838019d4c6a91d66c8bf28c7a3a',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:070a1bbfd4e54334905ca3606633c046',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 0.2
    },
    {
      id: 'statement:99b58951367a49b5b1b92dcb9c7c58da',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:070a1bbfd4e54334905ca3606633c046',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 0
    },
    {
      id: 'statement:3556ae067e8d46118f94fc8dded1267a',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:070a1bbfd4e54334905ca3606633c046',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0
    },
    {
      id: 'statement:12fc619854b9480d8d32ec6d646b4fa1',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:070a1bbfd4e54334905ca3606633c046',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0
    },
    {
      id: 'statement:b597805cca50403092f0ee8f9464b236',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:070a1bbfd4e54334905ca3606633c046',
      taxon: 'taxon:d7816f44e87744528854a26207c90dc7',
      frequency: 0.5
    },
    {
      id: 'statement:17c64d464d4c4794929594b72f55fd05',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:070a1bbfd4e54334905ca3606633c046',
      taxon: 'taxon:f58c95cf4def4ee09065b00fa90a3e3a',
      frequency: 0
    },
    {
      id: 'statement:a8b480a9b8c0450cb59f4ca27d390bde',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:070a1bbfd4e54334905ca3606633c046',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0
    },
    {
      id: 'statement:f41f145a69f342db9221b1a239afecb9',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:070a1bbfd4e54334905ca3606633c046',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0
    },
    {
      id: 'statement:bac0a1e3068b492e8ea5e77513a9556a',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:070a1bbfd4e54334905ca3606633c046',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0
    },
    {
      id: 'statement:9047ef2f4bb6483abddda151ed288c70',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:070a1bbfd4e54334905ca3606633c046',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0
    },
    {
      id: 'statement:11bf739bc1ae47e0a0a0bc5695bf5785',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:070a1bbfd4e54334905ca3606633c046',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 0
    },
    {
      id: 'statement:d8c335a47267474d90d90db26d2200f9',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:070a1bbfd4e54334905ca3606633c046',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 0
    },
    {
      id: 'statement:302f31d9a3f742dcae57713a2575a386',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:476fc7e83bdf485e942bda46983ca326',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:d2122337cabe4b50a214249a5952bdaf',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:476fc7e83bdf485e942bda46983ca326',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 0
    },
    {
      id: 'statement:ab4f0835e37d49bab5b2596c614694bf',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:476fc7e83bdf485e942bda46983ca326',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 0
    },
    {
      id: 'statement:3e22fe7b70a4403986557e084ad37ad2',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:476fc7e83bdf485e942bda46983ca326',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 0
    },
    {
      id: 'statement:c3320523eaf847dd9ebc01a12409918f',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:476fc7e83bdf485e942bda46983ca326',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 0
    },
    {
      id: 'statement:e28f849ee4504e85805d948454d9f162',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:476fc7e83bdf485e942bda46983ca326',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 0.2
    },
    {
      id: 'statement:96197985fa5d4fb7b1b7d5bd07454e84',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:476fc7e83bdf485e942bda46983ca326',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 0
    },
    {
      id: 'statement:ca39aac2e98a4fbda60ecb64c6101c57',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:476fc7e83bdf485e942bda46983ca326',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0.33
    },
    {
      id: 'statement:2721fa8cd37f4328b7392a5ce5b95500',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:476fc7e83bdf485e942bda46983ca326',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0
    },
    {
      id: 'statement:0496c5ae5c2b45b8a2354b64e2270559',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:476fc7e83bdf485e942bda46983ca326',
      taxon: 'taxon:d7816f44e87744528854a26207c90dc7',
      frequency: 0
    },
    {
      id: 'statement:8dd420c97cee4c14a8444b0010ce1d9b',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:476fc7e83bdf485e942bda46983ca326',
      taxon: 'taxon:f58c95cf4def4ee09065b00fa90a3e3a',
      frequency: 0
    },
    {
      id: 'statement:9a9938ea053c458c9b9ae808158f8674',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:476fc7e83bdf485e942bda46983ca326',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0.33
    },
    {
      id: 'statement:078657b390b24e26a3c07dc011b31ef0',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:476fc7e83bdf485e942bda46983ca326',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0
    },
    {
      id: 'statement:fadbafe8012941dc940aa7eb2551053c',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:476fc7e83bdf485e942bda46983ca326',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0
    },
    {
      id: 'statement:5268e2956800417980e0aecd644c8815',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:476fc7e83bdf485e942bda46983ca326',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0
    },
    {
      id: 'statement:b9704ec440f1498785f28c0b25fa1ed9',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:476fc7e83bdf485e942bda46983ca326',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 0
    },
    {
      id: 'statement:e1bd67cc858e44bd819418e5643a4302',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:476fc7e83bdf485e942bda46983ca326',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 0
    },
    {
      id: 'statement:147717236756482bb97c69c64adf2efc',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d1343483a63c4a5a8b7d2e12d607ce77',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:f7fbca12e2a94b548f46eb33b1909292',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d1343483a63c4a5a8b7d2e12d607ce77',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 0
    },
    {
      id: 'statement:8303e7b3a0cd4722a0040ea23134c43b',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d1343483a63c4a5a8b7d2e12d607ce77',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 0
    },
    {
      id: 'statement:e1483a75a60a496584ea8ac288265236',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d1343483a63c4a5a8b7d2e12d607ce77',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 0
    },
    {
      id: 'statement:4a3bad1a618142d1a63c18a4c4340318',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d1343483a63c4a5a8b7d2e12d607ce77',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 0
    },
    {
      id: 'statement:6164ed54a0e54dd48ac5b0b3acf13ac2',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d1343483a63c4a5a8b7d2e12d607ce77',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 0.2
    },
    {
      id: 'statement:1c035a82f5a54bb7b4afd2c4260cdfc5',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d1343483a63c4a5a8b7d2e12d607ce77',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 0
    },
    {
      id: 'statement:817e61b72f414d4abba3ecfcbef7866e',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d1343483a63c4a5a8b7d2e12d607ce77',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0
    },
    {
      id: 'statement:8fbd02d23c64449d932c7e8948d6a9e2',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d1343483a63c4a5a8b7d2e12d607ce77',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0
    },
    {
      id: 'statement:0f8f616e105b4dedaf20849022b266f6',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d1343483a63c4a5a8b7d2e12d607ce77',
      taxon: 'taxon:d7816f44e87744528854a26207c90dc7',
      frequency: 0.5
    },
    {
      id: 'statement:0fd3688298aa4d3d8a10615635dfbea0',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d1343483a63c4a5a8b7d2e12d607ce77',
      taxon: 'taxon:f58c95cf4def4ee09065b00fa90a3e3a',
      frequency: 0
    },
    {
      id: 'statement:aa6bc08b0606462589311b1d2c39efdd',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d1343483a63c4a5a8b7d2e12d607ce77',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0.33
    },
    {
      id: 'statement:11bbda71acb84c379d1ce9156ca7e39c',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d1343483a63c4a5a8b7d2e12d607ce77',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0
    },
    {
      id: 'statement:2cd1ff8460204a50910f477360defd3e',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d1343483a63c4a5a8b7d2e12d607ce77',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0.5
    },
    {
      id: 'statement:65d668fd4e6a4211b56bd05050636831',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d1343483a63c4a5a8b7d2e12d607ce77',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0.33
    },
    {
      id: 'statement:ec6b06381f654d939d860fd233130454',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d1343483a63c4a5a8b7d2e12d607ce77',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 0.5
    },
    {
      id: 'statement:86d1a57741ed40a7aa1581bf5940f04a',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d1343483a63c4a5a8b7d2e12d607ce77',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 0
    },
    {
      id: 'statement:e103dcbe26be4932944558bae1d9cd87',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d2fb10b7a7914b3fa945cf57348c96aa',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:71c6dc5a36d54cb2be16ec7f28fe5299',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d2fb10b7a7914b3fa945cf57348c96aa',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 0
    },
    {
      id: 'statement:953bf475f0ea46bca60512515e8441c0',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d2fb10b7a7914b3fa945cf57348c96aa',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 0
    },
    {
      id: 'statement:b5f812333984419888bff49d347f6676',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d2fb10b7a7914b3fa945cf57348c96aa',
      taxon: 'taxon:006b23419b11493eb93ffb459c5e0d90',
      frequency: 0
    },
    {
      id: 'statement:b654d2be3808450ba46dc2c21647db31',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d2fb10b7a7914b3fa945cf57348c96aa',
      taxon: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
      frequency: 0
    },
    {
      id: 'statement:f7514e8098fa4c0b86b3e177ea0e8193',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d2fb10b7a7914b3fa945cf57348c96aa',
      taxon: 'taxon:33de852d02cc4210b7723eec2a24b267',
      frequency: 0.2
    },
    {
      id: 'statement:0310a225015244e08c529156c90dcc26',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d2fb10b7a7914b3fa945cf57348c96aa',
      taxon: 'taxon:a92f878ca186473d9929ad9681c92401',
      frequency: 0
    },
    {
      id: 'statement:5355ef8e8bf8411197737dde0c524b8e',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d2fb10b7a7914b3fa945cf57348c96aa',
      taxon: 'taxon:da78e50761c6461186ea74b707b38d49',
      frequency: 0.33
    },
    {
      id: 'statement:d35d9c43ddef4766b90b076913a813fb',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d2fb10b7a7914b3fa945cf57348c96aa',
      taxon: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
      frequency: 0
    },
    {
      id: 'statement:533d8a36238047739a20f24f034c9a80',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d2fb10b7a7914b3fa945cf57348c96aa',
      taxon: 'taxon:d7816f44e87744528854a26207c90dc7',
      frequency: 0
    },
    {
      id: 'statement:ca098baa960c4b1f86388b13cbacb838',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d2fb10b7a7914b3fa945cf57348c96aa',
      taxon: 'taxon:f58c95cf4def4ee09065b00fa90a3e3a',
      frequency: 0
    },
    {
      id: 'statement:bdfe9ae64171431685c3c15fb7b9b206',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d2fb10b7a7914b3fa945cf57348c96aa',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0.33
    },
    {
      id: 'statement:bcb364b35fef45aea03aa191d3e0f459',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d2fb10b7a7914b3fa945cf57348c96aa',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0
    },
    {
      id: 'statement:1bc49267774f4edebbd0fa5cdd6cf3c4',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d2fb10b7a7914b3fa945cf57348c96aa',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0.5
    },
    {
      id: 'statement:c0cf89a8c8b6481083600f35a7ef424e',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d2fb10b7a7914b3fa945cf57348c96aa',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0
    },
    {
      id: 'statement:eb7fd54d465344a3b3cc1800afa01041',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d2fb10b7a7914b3fa945cf57348c96aa',
      taxon: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
      frequency: 0.5
    },
    {
      id: 'statement:9056d202ddcf4665ab10e3504c76ebd1',
      character: 'character:ed7498b2609841099aa98504d14ea1cd',
      value: 'state:d2fb10b7a7914b3fa945cf57348c96aa',
      taxon: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
      frequency: 0
    },
    {
      id: 'statement:f28ce388e8be4667b3a7c44eb70a2e70',
      character: 'character:5713f56b0207461a9405a7dc8caa7995',
      value: 'state:5fee845ee3384c58b1f109c75301808d',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 1
    },
    {
      id: 'statement:8523be90460e4e73a258ae970ce86ca9',
      character: 'character:5713f56b0207461a9405a7dc8caa7995',
      value: 'state:5fee845ee3384c58b1f109c75301808d',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 1
    },
    {
      id: 'statement:c3a8611ec0424c529ef989aed0a2e992',
      character: 'character:5713f56b0207461a9405a7dc8caa7995',
      value: 'state:5fee845ee3384c58b1f109c75301808d',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:21204177c504465c82b7858059625b84',
      character: 'character:5713f56b0207461a9405a7dc8caa7995',
      value: 'state:5fee845ee3384c58b1f109c75301808d',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:9b372cfbaf7446a79c2cea6437f571e0',
      character: 'character:5713f56b0207461a9405a7dc8caa7995',
      value: 'state:5fee845ee3384c58b1f109c75301808d',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:f6a1f770db184f03bc79db2eb23cdc98',
      character: 'character:5713f56b0207461a9405a7dc8caa7995',
      value: 'state:5fee845ee3384c58b1f109c75301808d',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:2c573b7cdded403e99f9b09b0ee1e7ab',
      character: 'character:5713f56b0207461a9405a7dc8caa7995',
      value: 'state:5fee845ee3384c58b1f109c75301808d',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:1c8f10bed9c0484399f26487452757ed',
      character: 'character:5713f56b0207461a9405a7dc8caa7995',
      value: 'state:5fee845ee3384c58b1f109c75301808d',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:96f961b01ea249b8a060892cf900dfec',
      character: 'character:5713f56b0207461a9405a7dc8caa7995',
      value: 'state:5fee845ee3384c58b1f109c75301808d',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:2f12b46aa4fa48d9a685c0c1ee9375e9',
      character: 'character:5713f56b0207461a9405a7dc8caa7995',
      value: 'state:7506e6363136467885270db2bd1d8db2',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:21f3b0ca53194b44ba46477413f56468',
      character: 'character:5713f56b0207461a9405a7dc8caa7995',
      value: 'state:7506e6363136467885270db2bd1d8db2',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0
    },
    {
      id: 'statement:5630802ec41f405698a583775094320a',
      character: 'character:5713f56b0207461a9405a7dc8caa7995',
      value: 'state:7506e6363136467885270db2bd1d8db2',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 1
    },
    {
      id: 'statement:a6a71c1f3e49441aa82696acd513d170',
      character: 'character:5713f56b0207461a9405a7dc8caa7995',
      value: 'state:7506e6363136467885270db2bd1d8db2',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 1
    },
    {
      id: 'statement:4c502cb49c24481d9d2ed4d58cac8374',
      character: 'character:5713f56b0207461a9405a7dc8caa7995',
      value: 'state:7506e6363136467885270db2bd1d8db2',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 1
    },
    {
      id: 'statement:2f1385b631154f028d6afff57d1ce669',
      character: 'character:5713f56b0207461a9405a7dc8caa7995',
      value: 'state:7506e6363136467885270db2bd1d8db2',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 1
    },
    {
      id: 'statement:5aa3b95e4bda4530940b7e4e71bc5ae6',
      character: 'character:5713f56b0207461a9405a7dc8caa7995',
      value: 'state:7506e6363136467885270db2bd1d8db2',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 1
    },
    {
      id: 'statement:e38fd884816642bfbec00b863840c643',
      character: 'character:5713f56b0207461a9405a7dc8caa7995',
      value: 'state:7506e6363136467885270db2bd1d8db2',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 1
    },
    {
      id: 'statement:0f93737d9834458088de268d3fc869dd',
      character: 'character:5713f56b0207461a9405a7dc8caa7995',
      value: 'state:7506e6363136467885270db2bd1d8db2',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 1
    },
    {
      id: 'statement:225ae4bd21164e978f6900fd3bea7a75',
      character: 'character:02900c3d6771420db9fd1e1821cabd73',
      value: 'state:3dca7b4bbec348b588b79de4f589b3fe',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 1
    },
    {
      id: 'statement:8ef9a1c443b9424da5dd40c86348a286',
      character: 'character:02900c3d6771420db9fd1e1821cabd73',
      value: 'state:3dca7b4bbec348b588b79de4f589b3fe',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 0
    },
    {
      id: 'statement:aa44a0f40d154314a8fa712012d4e545',
      character: 'character:02900c3d6771420db9fd1e1821cabd73',
      value: 'state:3dca7b4bbec348b588b79de4f589b3fe',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 0
    },
    {
      id: 'statement:730145dfaf49497cabe0eae39cbbcef8',
      character: 'character:02900c3d6771420db9fd1e1821cabd73',
      value: 'state:1ba6def4e383459ea0032a1cd57128fd',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:f0dfa1abf68642c39e229ecace03f5fa',
      character: 'character:02900c3d6771420db9fd1e1821cabd73',
      value: 'state:1ba6def4e383459ea0032a1cd57128fd',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 1
    },
    {
      id: 'statement:3c1c633ec5e545feb681e2b3f71c7d5e',
      character: 'character:02900c3d6771420db9fd1e1821cabd73',
      value: 'state:1ba6def4e383459ea0032a1cd57128fd',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 0
    },
    {
      id: 'statement:b9e10ccaee034936aa38aabb6b375ce0',
      character: 'character:02900c3d6771420db9fd1e1821cabd73',
      value: 'state:a30b97576e6b4b6ca98724637ba29f59',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:05bc8ad4d639478d927c8135d8cd7973',
      character: 'character:02900c3d6771420db9fd1e1821cabd73',
      value: 'state:a30b97576e6b4b6ca98724637ba29f59',
      taxon: 'taxon:31372f04fe644c8f9deaf539a22b0949',
      frequency: 0
    },
    {
      id: 'statement:4cc07654856d4ef6b519a2f2c83e347f',
      character: 'character:02900c3d6771420db9fd1e1821cabd73',
      value: 'state:a30b97576e6b4b6ca98724637ba29f59',
      taxon: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
      frequency: 1
    },
    {
      id: 'statement:bd12d716d3234e2fb15560e2563b4899',
      character: 'character:7dfcaa00b3944afea7787702090177b9',
      value: 'state:48e29f33284c448ebb9a28d2f43e75c0',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 1
    },
    {
      id: 'statement:5348d88e4fe14e0d9f5c8de6a0d932ac',
      character: 'character:7dfcaa00b3944afea7787702090177b9',
      value: 'state:48e29f33284c448ebb9a28d2f43e75c0',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 0
    },
    {
      id: 'statement:9c7e8c72ed9e40d4accaab7b0d23cf0d',
      character: 'character:7dfcaa00b3944afea7787702090177b9',
      value: 'state:15bcab29cf474de6b608bbcbf32ec091',
      taxon: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      frequency: 0
    },
    {
      id: 'statement:a5e2c6bccfba4d55a14ed04e50b6e2c3',
      character: 'character:7dfcaa00b3944afea7787702090177b9',
      value: 'state:15bcab29cf474de6b608bbcbf32ec091',
      taxon: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      frequency: 1
    },
    {
      id: 'statement:b1a8aaf4b2f44fd78755f2cc1a09e5e3',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:f608cf5aa6ac42f1ba2758365f139eca',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:62351830008a414ba4058e7d389f880d',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:f608cf5aa6ac42f1ba2758365f139eca',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:2c633b2396c942ed80775cdb9a25f38f',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:f608cf5aa6ac42f1ba2758365f139eca',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:b6f6c4639210453184a2bf2951f7e306',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:f608cf5aa6ac42f1ba2758365f139eca',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:2295065e5acc4ec4983ddd2b259181b1',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:f608cf5aa6ac42f1ba2758365f139eca',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0
    },
    {
      id: 'statement:6f79c119193f4a519fdf9a2fc6fc1033',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:f608cf5aa6ac42f1ba2758365f139eca',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0
    },
    {
      id: 'statement:7162d0db1056431ba1082797e11592da',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:f608cf5aa6ac42f1ba2758365f139eca',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0
    },
    {
      id: 'statement:d838f4d5d6f14ba18e8790f218c33244',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:f608cf5aa6ac42f1ba2758365f139eca',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0
    },
    {
      id: 'statement:4e095881b42243c5b7baf38afe6a46e6',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:f608cf5aa6ac42f1ba2758365f139eca',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 1
    },
    {
      id: 'statement:b4bd37b66ca040f99634a37658280aa3',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:cde3f087343343ed87d3d3338cfd65ba',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:16d358d063be46e58e9601be4e115a2d',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:cde3f087343343ed87d3d3338cfd65ba',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:3826a9e470d240e586a820dc049c0266',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:cde3f087343343ed87d3d3338cfd65ba',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:566d0d1cadd64156b60fcfa262544208',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:cde3f087343343ed87d3d3338cfd65ba',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:7d2fca24c9624eb3bcc2f2047a61e525',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:cde3f087343343ed87d3d3338cfd65ba',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 1
    },
    {
      id: 'statement:928bd3f7814e4376af90d3145a94f9c3',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:cde3f087343343ed87d3d3338cfd65ba',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0.5
    },
    {
      id: 'statement:b39a44c5ed7b409298f3229954b3448b',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:cde3f087343343ed87d3d3338cfd65ba',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 1
    },
    {
      id: 'statement:c1524049fc9c4c348fc078aca30ffcdc',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:cde3f087343343ed87d3d3338cfd65ba',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0.5
    },
    {
      id: 'statement:57c116d4f61347c4a5f06ffe8abad820',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:cde3f087343343ed87d3d3338cfd65ba',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:9e96ae9a499f4effa24f59c141fbdbdb',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:f25b9c2eefd34671bcd750ffdb75057b',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 1
    },
    {
      id: 'statement:6f0f1f1ff0e143aeb46a45572c103fdc',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:f25b9c2eefd34671bcd750ffdb75057b',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 1
    },
    {
      id: 'statement:366ed3e1f91b474e9a7744985ffec3fd',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:f25b9c2eefd34671bcd750ffdb75057b',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 1
    },
    {
      id: 'statement:fa5b6a5b3bfa4a1d8a8e914438be80c4',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:f25b9c2eefd34671bcd750ffdb75057b',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 1
    },
    {
      id: 'statement:58dac31626fd453c9a645a8e400e152d',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:f25b9c2eefd34671bcd750ffdb75057b',
      taxon: 'taxon:0b76f7e3497548059633c20678c3fe31',
      frequency: 0
    },
    {
      id: 'statement:4b8119c5ef5a48aeb2d3df8333cfe05f',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:f25b9c2eefd34671bcd750ffdb75057b',
      taxon: 'taxon:9204ac0cf960428790eff38272e9f279',
      frequency: 0.5
    },
    {
      id: 'statement:42b65a0d0e9142a08aa7bc238a1c1203',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:f25b9c2eefd34671bcd750ffdb75057b',
      taxon: 'taxon:cc160befff6e4d4bb470120617d6d657',
      frequency: 0
    },
    {
      id: 'statement:4ffedaf689ca41eda3b4144a523e4bb0',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:f25b9c2eefd34671bcd750ffdb75057b',
      taxon: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
      frequency: 0.5
    },
    {
      id: 'statement:024bb37a7bb8493482e4d791bcb88ca4',
      character: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      value: 'state:f25b9c2eefd34671bcd750ffdb75057b',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:7c8a5e44d9114f18a26b1cce444687a0',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:125f4877e9694701afd87c5cb07faf1d',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 1
    },
    {
      id: 'statement:6d681117298f4686acff9aebed195c25',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:125f4877e9694701afd87c5cb07faf1d',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:5b9828c085494c2b9b86e7619ae7394a',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:125f4877e9694701afd87c5cb07faf1d',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:4fae5b793c404e6db16242193bb2fc2e',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:125f4877e9694701afd87c5cb07faf1d',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:b18a82ff6d1b45acbf2fa5136c403ba8',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:125f4877e9694701afd87c5cb07faf1d',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:798baffd67f149e9a909143c686cce0a',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:125f4877e9694701afd87c5cb07faf1d',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:40b09a9404dd4e6d89304e792e93edba',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:125f4877e9694701afd87c5cb07faf1d',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:e82b88a7e9664973a82dd02ba475a387',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:eef599e6ccc0461aa758c8ba0eb93c18',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:53c571f6f203482b92838e304ce34e9d',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:eef599e6ccc0461aa758c8ba0eb93c18',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 1
    },
    {
      id: 'statement:610332887ab246e6afac270efe6a970a',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:eef599e6ccc0461aa758c8ba0eb93c18',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:d6eac7f16b0b47b09e82e1d21f00bb89',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:eef599e6ccc0461aa758c8ba0eb93c18',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:912e2a1889af4dbdaeda74dfa6f713a2',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:eef599e6ccc0461aa758c8ba0eb93c18',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:cd22713a70c94b4d87f8e7e2f4911e89',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:eef599e6ccc0461aa758c8ba0eb93c18',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:81f6b8a1a83145b7b642d98328467bfd',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:eef599e6ccc0461aa758c8ba0eb93c18',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:8ffd60d6546140dbb814740bd86d39ca',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:16ff061119f34368812a4f38de003018',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:e20c2518f59647f08354e6fd18e3166a',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:16ff061119f34368812a4f38de003018',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:33b38081175c4106a81e362b4430e6b3',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:16ff061119f34368812a4f38de003018',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 1
    },
    {
      id: 'statement:c83a257ebf7b4e74add41baf69b2d5bf',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:16ff061119f34368812a4f38de003018',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:99004ef9fa6f49158226c16c697c528d',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:16ff061119f34368812a4f38de003018',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:654d8522b98a461ab7905d12137bf103',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:16ff061119f34368812a4f38de003018',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:3694729f8ba34afebb220b9414ad9250',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:16ff061119f34368812a4f38de003018',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:241f3e5cdae14313a058e810f0aa80d5',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:b4870cbaf635453296511498f6cb6083',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:7e7702d212c6429298b8356f292a4627',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:b4870cbaf635453296511498f6cb6083',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:f2b248e5b8a94bbdb2d88c02731f5868',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:b4870cbaf635453296511498f6cb6083',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:b517e8a94c514e88a8bea6638862e181',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:b4870cbaf635453296511498f6cb6083',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 1
    },
    {
      id: 'statement:e52285d3a4584758b1f3ae6d6cd79789',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:b4870cbaf635453296511498f6cb6083',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:c351cad435dd4ef59ae05fe67287bdd3',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:b4870cbaf635453296511498f6cb6083',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:1cec87ed838c4e6b91cf94445fe7bf24',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:b4870cbaf635453296511498f6cb6083',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:fe4539788e334f83819b08d24dbff388',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:5dff1b7b4a50489ab446269231ebcad9',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:e97d404b43764467b3331cf86441d92f',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:5dff1b7b4a50489ab446269231ebcad9',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:948768b4a55b485abaca8c147d703e5f',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:5dff1b7b4a50489ab446269231ebcad9',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:992d25a0e75e47848b4b760b89b099b7',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:5dff1b7b4a50489ab446269231ebcad9',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:8a262898323e410ba48f06b898f49e7e',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:5dff1b7b4a50489ab446269231ebcad9',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 1
    },
    {
      id: 'statement:b2e9adfd61e94b7f96238bebcf860b2b',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:5dff1b7b4a50489ab446269231ebcad9',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:625507a79ee84e47a1ff6f0ddf790ff2',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:5dff1b7b4a50489ab446269231ebcad9',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:36e8fca398ed4fa8b636357bf5caa2f8',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:aacf3b41176e491b8eacaabf95f7b5d8',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:7b1f1558cbfb4c6a97da0b9b988a8e29',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:aacf3b41176e491b8eacaabf95f7b5d8',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:746d504c945a41ae9105f136198396d7',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:aacf3b41176e491b8eacaabf95f7b5d8',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:66eef169ac574794b7706c6e418892ab',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:aacf3b41176e491b8eacaabf95f7b5d8',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:c1e94e4149154f1887ff08afc931e180',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:aacf3b41176e491b8eacaabf95f7b5d8',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:d87bb6a4e1644976b6cf154f13e0e824',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:aacf3b41176e491b8eacaabf95f7b5d8',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 1
    },
    {
      id: 'statement:73cdd512a5ad4500bc3ee83c672c3834',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:aacf3b41176e491b8eacaabf95f7b5d8',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 0
    },
    {
      id: 'statement:4286900ffb984a17b65578d41bc66d4e',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:f2c6ca15928145948bd0648fc58a1aae',
      taxon: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      frequency: 0
    },
    {
      id: 'statement:666806aea29046fd92f6a6e34e6562ff',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:f2c6ca15928145948bd0648fc58a1aae',
      taxon: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      frequency: 0
    },
    {
      id: 'statement:16c436887d0a4978a31c278d525f6889',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:f2c6ca15928145948bd0648fc58a1aae',
      taxon: 'taxon:dcab945e493147789a3ffe404de155d5',
      frequency: 0
    },
    {
      id: 'statement:807b9e1b99c94106bc51a2a05bc986d1',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:f2c6ca15928145948bd0648fc58a1aae',
      taxon: 'taxon:4b9a609b503e43de96e869b437e482d3',
      frequency: 0
    },
    {
      id: 'statement:ec33eb040b6b4e4f8f6b77019cf4ef43',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:f2c6ca15928145948bd0648fc58a1aae',
      taxon: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      frequency: 0
    },
    {
      id: 'statement:879d37e8d4bd42258bd84274f44354c0',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:f2c6ca15928145948bd0648fc58a1aae',
      taxon: 'taxon:208860c1f2984d6492331b3fa7de6518',
      frequency: 0
    },
    {
      id: 'statement:410de17d759a45458a4d88ea9230222f',
      character: 'character:1d27e135b25545fc84f36c887c1709e5',
      value: 'state:f2c6ca15928145948bd0648fc58a1aae',
      taxon: 'taxon:b060b441e3dc4b08af195505240264ca',
      frequency: 1
    },
    {
      id: 'statement:5805be2f8038421ba9fe5dc6bb393713',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:96690ca140d749d2adf245564f16361c',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:dde4d9f4e04c4174ade956bd4b4de4f5',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:c418421028ae4b6785a32f1dac13797b',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:293d19097c4e42d29a4641b6088cce8a',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:ef437a254d6640698c445828e7d3596e',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:78002b623d20466d8cd654f12f52e188',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:54aadd9a09964c91a12709084344b5eb',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:82a106f7ad384bcc8e1c0c66d42aa1fc',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:f1326c29f740451eae35264db46c6fda',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:d9ea1ce8a70743128d691caa1feeaa72',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:36cad144c0024b9fa08484bc7820e137',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:bbcb6a61fb6f46abb850ac03c8ff8138',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 0
    },
    {
      id: 'statement:2aca8d431ab44f3b909c0d8b78ff1de2',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 0
    },
    {
      id: 'statement:96764daa3766494aa0e2094eb2a26cb4',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 0
    },
    {
      id: 'statement:28223aa051554138a9b6ccb0828b5a1c',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:7f42d1629e2b463891b4965f6d119aa7',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0
    },
    {
      id: 'statement:61c8c283630f488799faeebbd40332e5',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:e8dc0ec265104946a40592295cef20e8',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:13b43f634de74f7bb88bb98fd6abb5b7',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:5b95aff03a53494181b87beacf68e67a',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:ad43a4f3b0d743c1ac8c7e6a84c31e30',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:e19fd3c662cb4a7c9174b3736cabfb01',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:f8ae770afc474f33837bd428be492d47',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 0
    },
    {
      id: 'statement:2e138aee3cda4fdabf0b32804719080e',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 0
    },
    {
      id: 'statement:9c59ce0fb78a42e88fa20fb89287d3af',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 0
    },
    {
      id: 'statement:dd63aeefa9334b87a1151232ca165466',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 0
    },
    {
      id: 'statement:c3237652e6af40068aa464472aec4e77',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 0.5
    },
    {
      id: 'statement:28fb126b5b484d1f8c42a30df71483be',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 0.5
    },
    {
      id: 'statement:29425f3a2de3428e90ef9f1b6803655c',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 0.5
    },
    {
      id: 'statement:70aaa704f734493fb937dc4cf48ac273',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0.5
    },
    {
      id: 'statement:41a80585b6a94757ab05ccc3f2c3cbc7',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0.5
    },
    {
      id: 'statement:440521e4375a4733b114d362e2152a62',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0.5
    },
    {
      id: 'statement:f9ff8966199c47b4b5c58ea96d3f3c9a',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 0.5
    },
    {
      id: 'statement:063f9662e9e74939a2f0175a43c385ec',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0.5
    },
    {
      id: 'statement:73457f70837c4c289f621d38d7fb03f7',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0.5
    },
    {
      id: 'statement:9dd9b82bef1841b898eae7fe3bd0bc09',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0.5
    },
    {
      id: 'statement:f53b02fcd76b477f8dcd8aa2369016a5',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:8619740ce9eb4dbe95d72bbd90da858c',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0.5
    },
    {
      id: 'statement:a61a266b3942447da201c00bc31be271',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:ea68b438c294479394c569fa9b223f6d',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:0a11f8dc046945d28e3f3cbc619fc350',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:ff3245a843264fcd8a6caf5488b349ed',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:7e2f3382ae704e3280448f342122742c',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:129f24348ea34c8cb820d50741b8cb91',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:c04b2e3b385d4ffabd3ab06d7c47ff90',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:fde8a01617da4aaaa48ac1382c4af4bc',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0.5
    },
    {
      id: 'statement:256317133c694abfb763e3bc8dca761b',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0.5
    },
    {
      id: 'statement:680b04e3363d48c5a1736efe4c9168ba',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0.5
    },
    {
      id: 'statement:d0be06a912894e30937a79393cb01e40',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:8f7062fbbcf74dceb5e4ed1f79cea58c',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:c73c72def4e2446180105afc3284f168',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 1
    },
    {
      id: 'statement:1dc9a125733144b6bfefb357a0cb6244',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 1
    },
    {
      id: 'statement:a1cdd4209a534b398d422382bf25a630',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 0.5
    },
    {
      id: 'statement:973f02d429c74331bea28a9b3cea884c',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:b4ba5cf83c7c43c49afa1bc36c989128',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0.5
    },
    {
      id: 'statement:929f0ad7c33c420981e1f1ea3317008a',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0.5
    },
    {
      id: 'statement:7024f0ac88ba4568ab7bb6e4600cb7ac',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0.5
    },
    {
      id: 'statement:21819f0e95874a4fa4c54bd890e514a4',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0.5
    },
    {
      id: 'statement:00e6d0ccc9414e65b2a6d2fdba9be14d',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0.5
    },
    {
      id: 'statement:be3e30ac27604750b2c60a90e07cfec1',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 1
    },
    {
      id: 'statement:f9d319e4b9ae42c98ffc0370b80c9ab1',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 1
    },
    {
      id: 'statement:1fd2a03b67cd4dd09d7413da748f8ac1',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 1
    },
    {
      id: 'statement:94f17d79a7144538a4a6b11dbd94a2e2',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 1
    },
    {
      id: 'statement:70a2a8615f974cb7b079792a03e95b36',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 1
    },
    {
      id: 'statement:0b81166682a64e35bc50e00275e29045',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 1
    },
    {
      id: 'statement:95c537eb618444ecb9e9dc988daf50ed',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 0.5
    },
    {
      id: 'statement:0e5b3c77c6614d978fd917149ae7ff43',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 0.5
    },
    {
      id: 'statement:18129c9ba123421abbb71cfa8fbf679d',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 0.5
    },
    {
      id: 'statement:835a7ffb7e7c4c21987e420adc1df3f0',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0.5
    },
    {
      id: 'statement:4d894ee76d7647f691f98c94357bf780',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0.5
    },
    {
      id: 'statement:9633e8b488d34fc3bb4979221de5803a',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0.5
    },
    {
      id: 'statement:96fdeccb2b1a43469ad452853da5b90c',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 0.5
    },
    {
      id: 'statement:6225a927fdb8490e8a1186a36c9320c0',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0.5
    },
    {
      id: 'statement:02c3b052ff594ceba34d6a29b774ceb5',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0.5
    },
    {
      id: 'statement:732d1eadbc8546fa91f2ff7de2de2b49',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0.5
    },
    {
      id: 'statement:219ddce90c9b4bd3b4bee2322c4cdb88',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:26a0596d43334c728da9873560842feb',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0.5
    },
    {
      id: 'statement:0312725b2783473a8f3e96b88a897cc7',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 1
    },
    {
      id: 'statement:ae4ab99fd81d4e48ac38534b731e0c7d',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 1
    },
    {
      id: 'statement:59bb6fa18d1f414d9bfc84b997bceee1',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 1
    },
    {
      id: 'statement:2a6487343af248dd82058714b173e16c',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 1
    },
    {
      id: 'statement:9baf0fd943d6492888c28a5424884429',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 1
    },
    {
      id: 'statement:5de3dece840c4305a1a09a714303e39a',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 1
    },
    {
      id: 'statement:9a981643efe84d5480bf9f3f697d14b4',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 1
    },
    {
      id: 'statement:67de71de01144e5d943c3a994f4f9c25',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0.5
    },
    {
      id: 'statement:4545d2283a3142838fb61e9eb77089d1',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0.5
    },
    {
      id: 'statement:1c389057456241ddb1e75d631764b0da',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0.5
    },
    {
      id: 'statement:d7f8b8e67dc549d6b7fa36999e4edcc9',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 1
    },
    {
      id: 'statement:4d1f82327ecb4e009bae198de6eedd40',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 1
    },
    {
      id: 'statement:a577470ce02b43e191a8ad3f11f482d0',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 0
    },
    {
      id: 'statement:593c4ea3387a4d01b0cde02b15260d4e',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 0
    },
    {
      id: 'statement:02f881ada21e44ddacd4572cd3cb043e',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 0.5
    },
    {
      id: 'statement:485a6dc5455148239fda34504a7ffb1e',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 1
    },
    {
      id: 'statement:3d998a8ab3bb45debfa4c47b4ded06bb',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0.5
    },
    {
      id: 'statement:64017fd249254b7baae318a1e540b08c',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0.5
    },
    {
      id: 'statement:ae999e4ae580405d8c72a830b351131d',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0.5
    },
    {
      id: 'statement:831dabffd50040e4b9de91d0066e5877',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0.5
    },
    {
      id: 'statement:7054f62891f94037a22666bba723400b',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0.5
    },
    {
      id: 'statement:ebd12115269d4a9585f1ca22d3a6da28',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:f687bbf6d9ae4501a64b34e18dc81f15',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:1a46786bf19c4eb6ae4dc90233872a73',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 0
    },
    {
      id: 'statement:e36eea09b54641e2bc3abd3fbfc50dbe',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 0
    },
    {
      id: 'statement:0d229f9838874aa080a734b9b6bc6eaf',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 0
    },
    {
      id: 'statement:aff2339c922b4650864a488f0794de26',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 0
    },
    {
      id: 'statement:5cda7394f3ec4923b68c7250d64ef0d3',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 0
    },
    {
      id: 'statement:2a4355f01dc742aa8ec995c9b974f5a4',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 0
    },
    {
      id: 'statement:6e595115eeb94f91820ff2466ad73270',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 0
    },
    {
      id: 'statement:5184329b167248f2b432d57f6eb000ec',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0
    },
    {
      id: 'statement:0418b6cd4ac14ef589f2164c25436909',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0
    },
    {
      id: 'statement:6e9900e786e44a948ab986badbabbdc5',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0
    },
    {
      id: 'statement:22af0a6e25d94b8a907f8be724478e87',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 0
    },
    {
      id: 'statement:65d6311689bc4ce1a4717f9bdb81dce5',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0
    },
    {
      id: 'statement:d27ffde0aa8844eda0fda66d7a41beff',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0
    },
    {
      id: 'statement:f67e3c00499c48d8ac14b0ff73c8735c',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:5ee1f1eead4847c88341d080c1cec913',
      character: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      value: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:b5ec2ff935254d02a875fc8ac86686dc',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 1
    },
    {
      id: 'statement:ac7df211424b4460b3e6856770b836e5',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 1
    },
    {
      id: 'statement:e51c42c766cf4b0ab90edaef8a03f051',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:f6f9143b410940b3a8995db43aaceb76',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0.5
    },
    {
      id: 'statement:ad432996e36440dba70a6b2082c9bf9b',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 1
    },
    {
      id: 'statement:0d1045ce04924d59a998f3fc99f70e2d',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 1
    },
    {
      id: 'statement:1fad57c4e3cc4e0baacb1570a8daad43',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 1
    },
    {
      id: 'statement:9394dfc8d3f44942a7524b62c04e2316',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 1
    },
    {
      id: 'statement:631a4fa17ce74953bd66aa08b417b900',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 1
    },
    {
      id: 'statement:7ccbecf3130f408b88b81b4cb7bd5706',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 1
    },
    {
      id: 'statement:cf3ad6a6689b423d855011b82ba873d6',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 1
    },
    {
      id: 'statement:8e2d857e0d534cdbbddc2ee289889343',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0.5
    },
    {
      id: 'statement:545141f7691347cda241fedaaefbd9e0',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 0
    },
    {
      id: 'statement:ad0ef85e4df3498e9b320446639af60d',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 0
    },
    {
      id: 'statement:532971d891cb4769bc0376aeb1ac71a2',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 0
    },
    {
      id: 'statement:fdb7bdb45d29465e83e82748ea18b749',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 1
    },
    {
      id: 'statement:7664b9b67580444f828a9e717bca7f25',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0
    },
    {
      id: 'statement:fac3eb80772e4da5a79791d02eff0230',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:b4b9524e8c0f4ee8adec63a60dab6100',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:0901c5b74a104d55be9aaa8f614b3427',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:738bdd3f0564440c99366576c429f749',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:11502e03bfc446e6bd90487ec9ef4639',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:f7dbeb8ad9ea4b1cba4cca0f434aa2d3',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:d2b46da22c974a61a7fcb54ea12e25d3',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 0
    },
    {
      id: 'statement:6edfaae65e544126ac99967f99810a99',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:b99e3c7c290241e1b92b318a51a048d2',
      frequency: 0
    },
    {
      id: 'statement:ee5eda89f47142149733ef134cfac4ec',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:2dd83d0d33f749e0ba829dab29f3159d',
      frequency: 0
    },
    {
      id: 'statement:f5f5a2c307234faa8fe2a885426fc6e9',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:b7bfcc040eac41cbae75c97186670c53',
      frequency: 0
    },
    {
      id: 'statement:01ced4099dfe491daf59ea38af11dccb',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:7d4626e1f2b5427886750497bea38e24',
      frequency: 0
    },
    {
      id: 'statement:974e8c53c6734fc78e41402a825f6606',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:06f53062e5e14a7c9e69aba62856d1a7',
      frequency: 0
    },
    {
      id: 'statement:a75f6a4cb5c54348923c1e21a935d6c3',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:eac083a0a0fe4748b8e8dadc16e6d16d',
      frequency: 0
    },
    {
      id: 'statement:cde9324ed86f44cc851bdf92c032dc12',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:24b733fe467a45bba5e26946082af20f',
      frequency: 0
    },
    {
      id: 'statement:959d5452f35941aeb3f4da65ed166b9d',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:82b5ab90812346b2b9ac4813fe4d326d',
      frequency: 0
    },
    {
      id: 'statement:13e3340b442c4413979e7291b6703f49',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:0ae6071500944ec1822dd51aa93f4ae1',
      frequency: 0
    },
    {
      id: 'statement:d8a4de0d4a534ee8b3a00b60effd4c45',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:98a5b74a97de497ca159d00be74fdc08',
      frequency: 0
    },
    {
      id: 'statement:c5b6d3d8536248e48e99ba5f0a28ed48',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:6235cbaf10c9479bab1a2a1d0109f50e',
      frequency: 0
    },
    {
      id: 'statement:397d9a7001384edf980f6c52ec972d9f',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:7eb38eaf73ad4ebebd6566d25e01ae65',
      frequency: 0
    },
    {
      id: 'statement:2134b896fcc44a7cb81515eec0c7dbd5',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0
    },
    {
      id: 'statement:cddd688a99304838b00fc64609bcee65',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0
    },
    {
      id: 'statement:8bddec074f5e468193b6b33a0877de8f',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0
    },
    {
      id: 'statement:b39048d6b49940fcb1dd62117ac1422f',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:6bb437c615ba4309855b986d25bc6a2d',
      frequency: 0
    },
    {
      id: 'statement:d713500f51c142c8a78db9fc6721e536',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:979c27d392b74984bbd163a3589e203c',
      frequency: 0
    },
    {
      id: 'statement:9ac65616956d45aaa8c6a775693972f7',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0
    },
    {
      id: 'statement:3517fb39ceb94802bc10310f36766d3e',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0
    },
    {
      id: 'statement:45d5564e32ee41718cc44e5af45aa791',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:306246d3a3364632a918861a381d13bf',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6d0675a5a9574841950d98600f6e0368',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:9257b7b119e24b21b77bea5c66b9503d',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:30bf21add7f74752aa85f7adfcf23f20',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:469cf8a0e03046b9afbddf1631bf819b',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:09ccad8d892c4c019ff64abb24ac85b6',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:01c5e09fc2254558ae8caf7674b6c443',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:57badd5160a74d04ae20f059d3dccbbd',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:0ed39b5ae1e14defabc58aba9d5c68a2',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:e489f03fa05d4bd28991da195f5cd362',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:a974933625ae4fb9b849ad6bc5007a8b',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:e93f0008b1134b779be399ed76270a26',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:e92f4a34f1c64489be2dcf740b4f5529',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:742349f3218d45bd9e0c7ff40d019a14',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:9773e70a2834403b88e2c7a16526f975',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 1
    },
    {
      id: 'statement:7deb900a99ee46d88a579ad300758131',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 1
    },
    {
      id: 'statement:b63c575f383c4a7fabd4461e3e17740c',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 1
    },
    {
      id: 'statement:b7fe503dadb143e8950f33e9991ba9e1',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:b6c8e0edc9bd4fd480a3770cc9b81ede',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0
    },
    {
      id: 'statement:ee58e1a019554950af80c438481d8cc9',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:5bc3dadfbdaa44f78898f587779b2768',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:9e1f1267ad47466fb8009eaa8355f698',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:be51d99068094140afd6f542f891f88e',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:7e83de61d23b431b8651aae057a45c21',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:24d6e8f1e581470d807b3b8863680f7b',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:2364eab45a5a45b8912befebd9ee42cb',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 0
    },
    {
      id: 'statement:2e9250aa39d8471a9b67a94810003249',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:b99e3c7c290241e1b92b318a51a048d2',
      frequency: 0
    },
    {
      id: 'statement:11e54d1348c74b84afd7d87999dc70c9',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:2dd83d0d33f749e0ba829dab29f3159d',
      frequency: 0
    },
    {
      id: 'statement:896bbad3588c49d39b783e832dc3f52a',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:b7bfcc040eac41cbae75c97186670c53',
      frequency: 0
    },
    {
      id: 'statement:34e72f9e11fa43f39c533d5dafb363f4',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:7d4626e1f2b5427886750497bea38e24',
      frequency: 0
    },
    {
      id: 'statement:0b592fc79df54475b74bff0e0ad29585',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:06f53062e5e14a7c9e69aba62856d1a7',
      frequency: 0
    },
    {
      id: 'statement:bd579e97b0ee4891aafd7832223707f8',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:eac083a0a0fe4748b8e8dadc16e6d16d',
      frequency: 0.5
    },
    {
      id: 'statement:fd72661c38584f8285100bb9abd1f3fd',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:24b733fe467a45bba5e26946082af20f',
      frequency: 0
    },
    {
      id: 'statement:7e4323780543431eb92a9c79ae38ec56',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:82b5ab90812346b2b9ac4813fe4d326d',
      frequency: 0
    },
    {
      id: 'statement:15252838b02e4b8a836783f725598993',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:0ae6071500944ec1822dd51aa93f4ae1',
      frequency: 0.5
    },
    {
      id: 'statement:b08b54d072bb4c348d2a448665ca0582',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:98a5b74a97de497ca159d00be74fdc08',
      frequency: 1
    },
    {
      id: 'statement:fa54cf4aa8014135a6f9807c4ff8366f',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:6235cbaf10c9479bab1a2a1d0109f50e',
      frequency: 0.5
    },
    {
      id: 'statement:65b45f12e9074fe285f34a5b06b33bfe',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:7eb38eaf73ad4ebebd6566d25e01ae65',
      frequency: 1
    },
    {
      id: 'statement:540fadccd6e24064a9f176bba8fb0ae9',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 1
    },
    {
      id: 'statement:031f28ff6e4549e0bb6b1c4f4237e91d',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 1
    },
    {
      id: 'statement:54944e2c237643f489f4a34ef792efa8',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 1
    },
    {
      id: 'statement:34bb8682b23f4d59b5bfd3889c733997',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:6bb437c615ba4309855b986d25bc6a2d',
      frequency: 0
    },
    {
      id: 'statement:a220d3357e964d25b7b002fcdee0415b',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:979c27d392b74984bbd163a3589e203c',
      frequency: 0
    },
    {
      id: 'statement:2462b3459e4044198a7c1c85c30d2035',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0
    },
    {
      id: 'statement:827b0ef86797465a9246945eeb999e5c',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0
    },
    {
      id: 'statement:b06a33b03f154dea8fd42d978818d026',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:976b08b8582a44d9bbbc3897579cc01b',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:2838201ecca04f7ea37d69adc40371e8',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:c4e0c9d653094b98a79f0c7d0726f100',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:8bb88627495a477bb346e86f8cbfdcec',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:3f8f36e5ae3c492c8c495aa4235b5744',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:ce93154f53004b4ebc80d199b3a92ee2',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:0150f74540b348cb818b84da094f35ef',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:389fa63ca484464fb88f74f9aa0e34c8',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:f212c4966cc04a0581fb94172c6bb4a4',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:1e654ffcca92481eadc2f52005c6fc32',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:126743fd8b7d4bdcbde620492e1b0c08',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:8eaf93bd3ece45d5b70d6f06256bbe03',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:3633bb1ff83e4c5abb8e9fa7279b16d4',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:ff5e24e2298e408ea996f5fe8f338042',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:debad4bb147746a9882baba26847c4fe',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 0
    },
    {
      id: 'statement:e25b0e048b3343ee95107f646391eea4',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 0
    },
    {
      id: 'statement:8d128b42ff6843f79179b8c94c304cc6',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 0
    },
    {
      id: 'statement:b9bd61ed33064326b174de342fe5797f',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:8693d7611a0b41a6957a2de67340273e',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0
    },
    {
      id: 'statement:38f956b3fb8844f69c95d34e9b2764d7',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:c9bcd4f2184b4673b26c98b53a1fdd24',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:4f86f38e509a4bf88f5ee83cf58f2241',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:224f2d178d1841ef9a6b503b5e0a8097',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:c3d18c0da0394aa798c17008b8d6bd71',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:da84934faeeb4c1b9f23e4243efdf315',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:cd4d66436e134ccb86e8664eba975bfc',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 0
    },
    {
      id: 'statement:189fbd7a07644d7790e1f64ebf27ca93',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:b99e3c7c290241e1b92b318a51a048d2',
      frequency: 0.5
    },
    {
      id: 'statement:39f01bc9d87143bb954c24a4907cd1fe',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:2dd83d0d33f749e0ba829dab29f3159d',
      frequency: 0
    },
    {
      id: 'statement:acfcc553e5f94548a55d0ac0ab279119',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:b7bfcc040eac41cbae75c97186670c53',
      frequency: 0.5
    },
    {
      id: 'statement:7b270392eea542ed8de109d3f989ab24',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:7d4626e1f2b5427886750497bea38e24',
      frequency: 0
    },
    {
      id: 'statement:c9549bdcfc3142e095e0df4ee7884934',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:06f53062e5e14a7c9e69aba62856d1a7',
      frequency: 0.5
    },
    {
      id: 'statement:f9a93d76f37447a68d963e2173184746',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:eac083a0a0fe4748b8e8dadc16e6d16d',
      frequency: 0
    },
    {
      id: 'statement:1e45262a1aca498da5cd26b1cd3d2610',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:24b733fe467a45bba5e26946082af20f',
      frequency: 0.5
    },
    {
      id: 'statement:9c54e5617bfc4edb83218124ae50f1b3',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:82b5ab90812346b2b9ac4813fe4d326d',
      frequency: 0
    },
    {
      id: 'statement:cd165b7f275945b0ae60739198d4ddbf',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:0ae6071500944ec1822dd51aa93f4ae1',
      frequency: 0.5
    },
    {
      id: 'statement:7360a744d2ef4e07b1e723964fc4a748',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:98a5b74a97de497ca159d00be74fdc08',
      frequency: 0
    },
    {
      id: 'statement:54d0fdb655a94ddc9f77bdd3d453dcfe',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:6235cbaf10c9479bab1a2a1d0109f50e',
      frequency: 0.5
    },
    {
      id: 'statement:fc053218d8f1423dba2498d3984fd5d9',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:7eb38eaf73ad4ebebd6566d25e01ae65',
      frequency: 0
    },
    {
      id: 'statement:aa8a4b05e38847429d3b8bee266e9c6c',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0
    },
    {
      id: 'statement:99f278ccadaf4a7382fecbff0c5d3a5f',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0
    },
    {
      id: 'statement:ea1b356dc6184577bc8377004812201b',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0
    },
    {
      id: 'statement:0af25dd916f643d381c8af61b208b8c4',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:6bb437c615ba4309855b986d25bc6a2d',
      frequency: 0.3
    },
    {
      id: 'statement:25a344759d334b00bd75abc28731a046',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:979c27d392b74984bbd163a3589e203c',
      frequency: 0
    },
    {
      id: 'statement:464a8d3515764114b0510f29623bcb9c',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0
    },
    {
      id: 'statement:7bf55abb2e3f44e9bddbf1d98fdb1741',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0
    },
    {
      id: 'statement:c76a27b3ce45420dad8582535d7eceb1',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:7013d4ee6b4f47f7b1838ee14e35c47a',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:156436e1bbc34105a33a72eb337665de',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:3626f4c2ae684d90b09860e8b0183153',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:bcd6e468f5a04a079353278a9e32a4f3',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:6355a1f892c644f38b5f49f87fbfc12e',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:2abc6c1e7ae140b7af848b1ed40d3832',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:27a2ce05038648b9a014ec09a6caed76',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:cd52b69e107740fbbd3e759d54a69e55',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:ea9f7e200d48490a88c74c19dafb1896',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:71197692c3eb4909aef45fe638ff8868',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:e5e61e46ea084fd9afb3221a4b195c44',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:bfa9a10af8a245f5892fbb107aa765ff',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:27cde26eeaad47cc8d53791db851f352',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:4ea4f88b41dd4fa69d5fed2bf62fe2ee',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:9cba88e783a94b86b6ccb668075e18de',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 0
    },
    {
      id: 'statement:3a59c46f696141e5bd671c025cd6318f',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 0
    },
    {
      id: 'statement:0b47d988af2a42fc9cdb0e8fe0e61d16',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 0
    },
    {
      id: 'statement:17b3876b8d0b480ea0ecea7421a813c0',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:b7674fe4bea94ccb80f51843025a5a3a',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0
    },
    {
      id: 'statement:25075778ca974e01b96d85d0d283b30b',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:162481982a8e442bbd0f9aa03003ba2a',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:2d8ff8f5c74a45c18a86523f51f380e5',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:39a4b039ded04395b822b7efb1f0d22b',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:b6b01f3686c94449acf80f3c2c42b6b1',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:ab40f48f7a31429e80e0155ca077e76b',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:536be04ec9444074ae12058be8379640',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 0
    },
    {
      id: 'statement:9d36bbc7132447ea8ce5824799f4d2b0',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:b99e3c7c290241e1b92b318a51a048d2',
      frequency: 0
    },
    {
      id: 'statement:55954d0240df481f8b774a711e305e65',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:2dd83d0d33f749e0ba829dab29f3159d',
      frequency: 0
    },
    {
      id: 'statement:c778e7c65a2a46179d46a6462395057d',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:b7bfcc040eac41cbae75c97186670c53',
      frequency: 0
    },
    {
      id: 'statement:c68d454da33e4ac7af8fd5454cc714a5',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:7d4626e1f2b5427886750497bea38e24',
      frequency: 0
    },
    {
      id: 'statement:f9a6880d8223495e9bdfe947bc538c01',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:06f53062e5e14a7c9e69aba62856d1a7',
      frequency: 0
    },
    {
      id: 'statement:77d7309d44c543b682deeeac7061e3b0',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:eac083a0a0fe4748b8e8dadc16e6d16d',
      frequency: 0
    },
    {
      id: 'statement:252e25dc48f4437181e3abc50a6ad177',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:24b733fe467a45bba5e26946082af20f',
      frequency: 0
    },
    {
      id: 'statement:2e182d8b61804509aa21135ff8b645cf',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:82b5ab90812346b2b9ac4813fe4d326d',
      frequency: 0
    },
    {
      id: 'statement:7a87053ecd6849ef97d4a9e3000d86bf',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:0ae6071500944ec1822dd51aa93f4ae1',
      frequency: 0
    },
    {
      id: 'statement:71ad772890044bcda7383e8e7897d303',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:98a5b74a97de497ca159d00be74fdc08',
      frequency: 0
    },
    {
      id: 'statement:2e85b66c9afa4728b6bd616ed9888f9d',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:6235cbaf10c9479bab1a2a1d0109f50e',
      frequency: 0
    },
    {
      id: 'statement:2c9cf7ddd9b64c5bbbbb05529d5a63c2',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:7eb38eaf73ad4ebebd6566d25e01ae65',
      frequency: 0
    },
    {
      id: 'statement:280e9983661b498bae03b51158784768',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0
    },
    {
      id: 'statement:f20a4385741a42a18098701178cbfb70',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0
    },
    {
      id: 'statement:66b1922ae8e84bb1bab862026fe19427',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0
    },
    {
      id: 'statement:8d958342088b4555b3f41e8e395087b0',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:6bb437c615ba4309855b986d25bc6a2d',
      frequency: 0
    },
    {
      id: 'statement:b1ff27a9850246e0b851c70053896a5b',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:979c27d392b74984bbd163a3589e203c',
      frequency: 0
    },
    {
      id: 'statement:c3c2c441e4d54dffba27ce5504a6f8ad',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0.5
    },
    {
      id: 'statement:5506989f20ef4cfdb66f6eca8d20bca4',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0.5
    },
    {
      id: 'statement:2db7f57a94be4b698318e671c12dffd7',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0.5
    },
    {
      id: 'statement:2f0f67e89f5442c2986ba008d539a2a0',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:6f196035c20044c7b75311ff30f1295d',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0.5
    },
    {
      id: 'statement:ee9dff880ce547ada10a92b36febbb5d',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:623c6ec2aa4f4bc28c97db5ecbfd081a',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:2e71d85538d4453b8f820da9eb175400',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 1
    },
    {
      id: 'statement:f6f373818a284233abd76724ce2071b9',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0.5
    },
    {
      id: 'statement:34cc02c331b14aa69524923a61d26793',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:1cb034e3574e4ce6878ee31d72b6ff06',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:6806268ebd4441ce8b1a42ff6c1f786c',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:aea2447588aa49aab12e1979f7e7d058',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:1f4f325d95284824a51781477edf012e',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:52a35c17b947491c9551a85565f7edb3',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:53a2db73e50349a0b3964f8f35f2a2bf',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:3d005425f5a84fe885780e8981ab3be6',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0.5
    },
    {
      id: 'statement:65360f75b7714a1a809d7bffffd37651',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 0
    },
    {
      id: 'statement:ea5ef13cd5c04646b0b2f267241f5af4',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 0
    },
    {
      id: 'statement:5eec550aea904aeba9a1acee24e9eb2b',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 0
    },
    {
      id: 'statement:f33e302af4ef4974971fe7f75015e4b9',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:8ab5282f7478450f8921200993c98728',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 1
    },
    {
      id: 'statement:abc928a868924d799c31ebf330135f20',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 1
    },
    {
      id: 'statement:f693965f6d8041feabbf1d6390ea3745',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 1
    },
    {
      id: 'statement:b7fb0012da2f4bc5a52db98234b07166',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 1
    },
    {
      id: 'statement:e5f58e6e66fa4cffbd7c685cb9f91b48',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 1
    },
    {
      id: 'statement:7e7e40acf122485b8237deb7dc3cc1f7',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 1
    },
    {
      id: 'statement:d14088e05f284d93b4cef3f75691c176',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 1
    },
    {
      id: 'statement:4ba950bf579542d48aefafb775b1dbbd',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 1
    },
    {
      id: 'statement:e1f4fb4d7a9a414c93635346c9fbfae3',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:b99e3c7c290241e1b92b318a51a048d2',
      frequency: 0.5
    },
    {
      id: 'statement:489977b95f7248f39800479e2c18c366',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:2dd83d0d33f749e0ba829dab29f3159d',
      frequency: 1
    },
    {
      id: 'statement:c342be4c5a484da4aefca078da357fc5',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:b7bfcc040eac41cbae75c97186670c53',
      frequency: 0.5
    },
    {
      id: 'statement:06b20db9a62e470c8551e0d96f4d3b10',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:7d4626e1f2b5427886750497bea38e24',
      frequency: 1
    },
    {
      id: 'statement:783fefbbada64cc59180a7546a812981',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:06f53062e5e14a7c9e69aba62856d1a7',
      frequency: 0.5
    },
    {
      id: 'statement:be30af8b94584e949734c17a0a387542',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:eac083a0a0fe4748b8e8dadc16e6d16d',
      frequency: 0.5
    },
    {
      id: 'statement:1b0091072c1441e2bdfacebd93116c76',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:24b733fe467a45bba5e26946082af20f',
      frequency: 0.5
    },
    {
      id: 'statement:595d1bf0767248c2859bca6d9cdcd32c',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:82b5ab90812346b2b9ac4813fe4d326d',
      frequency: 1
    },
    {
      id: 'statement:dd05c121aa5c455a827a1bceaa06a324',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:0ae6071500944ec1822dd51aa93f4ae1',
      frequency: 0
    },
    {
      id: 'statement:abaf04fefae44869a0595989b67db10f',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:98a5b74a97de497ca159d00be74fdc08',
      frequency: 0
    },
    {
      id: 'statement:8ff5dc3748474b86a4b795b9caa0cf6d',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:6235cbaf10c9479bab1a2a1d0109f50e',
      frequency: 0
    },
    {
      id: 'statement:3c289f9922e84cb5a37f6a6b548e0b94',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:7eb38eaf73ad4ebebd6566d25e01ae65',
      frequency: 0
    },
    {
      id: 'statement:39ff0c2ef4924f639aedc84a169343c5',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0
    },
    {
      id: 'statement:d4e80078f73a4f88945efe4f0e478aeb',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0
    },
    {
      id: 'statement:591ee7922e0b4629b724247b7e392e6d',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0
    },
    {
      id: 'statement:130b252170954a96ac2502018282fa7a',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:6bb437c615ba4309855b986d25bc6a2d',
      frequency: 1
    },
    {
      id: 'statement:0d60904bb35d45469f1bccd151906beb',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:979c27d392b74984bbd163a3589e203c',
      frequency: 1
    },
    {
      id: 'statement:dae0fd282fac4dd38036744ddca51d4b',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0.5
    },
    {
      id: 'statement:43bed1e348984a6698c96c73a2291dcc',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0.5
    },
    {
      id: 'statement:7a1144a01dba42389455bc0f4920e87f',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0.5
    },
    {
      id: 'statement:90b4ee2248594d428db27f0e0e529b47',
      character: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      value: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0.5
    },
    {
      id: 'statement:59a20d5770294562a1f051191892b7c3',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 1
    },
    {
      id: 'statement:b44effb79858409f99f90c1caabf67eb',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 1
    },
    {
      id: 'statement:a5a2366c77644cc29de2eae945c419e9',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 1
    },
    {
      id: 'statement:80a52f3d4d4342c2bf7e62245a691b4b',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 1
    },
    {
      id: 'statement:cf5790bf7beb402eab2f71adea1f9a13',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 1
    },
    {
      id: 'statement:c138f01d616b4b23a600967a97b273fb',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 1
    },
    {
      id: 'statement:29e0f3da344d4084a8c04b60183bad13',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 1
    },
    {
      id: 'statement:b5551e07ad634aa0afc133f258a2a3d8',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 1
    },
    {
      id: 'statement:d452d2a95c594f9496334f6f65a7dffe',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 1
    },
    {
      id: 'statement:efeeb12414944580b9c4d36aa1f0d5f1',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 1
    },
    {
      id: 'statement:abd640eec0c54d09a63fe19af612c744',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 1
    },
    {
      id: 'statement:638fe6f2210a4830b7b109184e01b55d',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 1
    },
    {
      id: 'statement:52381d716b7c4d0c9c398aafdfa8ef17',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 0
    },
    {
      id: 'statement:df716541c0b44b14886e44f3bbe84c35',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 0
    },
    {
      id: 'statement:448f3038f32b4041af52268c1fd7f402',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 0
    },
    {
      id: 'statement:8a6d1559b08e438da47f5dfca5483e6f',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 1
    },
    {
      id: 'statement:9c6fdcb46b944d229a9da6208a46ab83',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0
    },
    {
      id: 'statement:4314b4077b124ef787d83b04dbc49180',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:6fb6c140fdbc49e69e09c72a2ee5dfb4',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:d1d3b68d02fa485faa38865e3e9ca0e0',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:65a232b32a8d4ecd842b4aebf02e10d1',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:56c26dda2bec487e963665541e8e4d63',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:6523a21bd6d64f7680aacfc61074a6bb',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:95dcdde727504fc2b65128040b81889b',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 0
    },
    {
      id: 'statement:70f01bee27ac4d20929b05d3bdc87017',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 0
    },
    {
      id: 'statement:5207e85ffa504aa6a6ca40f71d9f4045',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 0
    },
    {
      id: 'statement:0d986bb4ac5a4ec0aa0275050622b68e',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 0
    },
    {
      id: 'statement:7d255d4413b84b99ab1088255ce1a880',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 0
    },
    {
      id: 'statement:a5bf5cca08064b4eba2d9a83bb8103b6',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 0
    },
    {
      id: 'statement:8ded26dc1b3c4c3dabaa91f512e1b004',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 0
    },
    {
      id: 'statement:117119736f9d4435923483e60f7fcf5a',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0
    },
    {
      id: 'statement:adbd2143f083403f8162dd978bfab736',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0
    },
    {
      id: 'statement:f777c81bf0214f638b017353abc851c7',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0
    },
    {
      id: 'statement:8827d1df68b04fe5bc2222388c87282d',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 0
    },
    {
      id: 'statement:59f56c80ffa644e1bf046c3ef671caed',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0
    },
    {
      id: 'statement:2848a50bd2a0473bb329ea6c2d022c06',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0
    },
    {
      id: 'statement:70ff12c1e3b64b2780d3b2381b34dd20',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:993bb2ed84fd4a4484c3757120ee7b8e',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:fc30aca86ab642f185b40ea25104204f',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:1546fc0e21bd418b8f92e349c70fc0f6',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:8ca23b9ef3524e5b8b4486511519deec',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:2ae98935129d4ce8b068513bf2cb6e78',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:5b094b191c67425486303702956e42f7',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:4672780f48294c56988b88b3afa83e4b',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:5f4a8d6118d84ed2a7a4320544186ba4',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:882da89cea7d4beca1e1cffe42030894',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:c68201df2ba148a3b799db688ecd0753',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:8d0ab710384743df86f3a031363f963c',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:8102785fafbc4ddf9242119962db68fe',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:cbc0aa592d494abdb73e8bd6aed774ab',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:a1668c9fe1614836a6a491ed4447822f',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:09079f83b9df453fb394c00174d31923',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 1
    },
    {
      id: 'statement:2ccc976f41e24868abf4a1a90e0a5af3',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 1
    },
    {
      id: 'statement:1c50296cd6f6459180f1c3da1b7c2c70',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 1
    },
    {
      id: 'statement:ae21e4f1677246ed93dacda6af7f42c3',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:bcc3692e7c7f4d698ff37f6df49136c6',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 1
    },
    {
      id: 'statement:dfd3064617534e30b22b0f5df718f735',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 1
    },
    {
      id: 'statement:a8ac2637bab740f98b9020d5e0be83ca',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 1
    },
    {
      id: 'statement:e7f8cc253ec74991ba93c1b9afe537c3',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 1
    },
    {
      id: 'statement:f0d1d3fbc70142188f87157af05fc427',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 1
    },
    {
      id: 'statement:aac5bc876a914ef8a0365101af02bf49',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 1
    },
    {
      id: 'statement:f0e4680d5ea540e6895e4571b6c453cb',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 1
    },
    {
      id: 'statement:9c75f33490c54a65a3ee60e2b053e5f8',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 1
    },
    {
      id: 'statement:5cbdc9c704c5491fbfab6596bf46ea9e',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 1
    },
    {
      id: 'statement:779c0eb0471044caa84b0d8669e52a51',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 1
    },
    {
      id: 'statement:17450649e79f41b09a5d027cf81a96bd',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 1
    },
    {
      id: 'statement:f15ad135681f4e8da38826ec39f15f83',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 1
    },
    {
      id: 'statement:5ffdae6ab69e48bbafbeba0325cf9beb',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 1
    },
    {
      id: 'statement:c42378da86c142e9b4e1f757f22f676a',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 1
    },
    {
      id: 'statement:e4912241bbce4786a98a664481e95d3d',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 1
    },
    {
      id: 'statement:6d515c27e3ab4c9ca67cb2a5f1b891be',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 1
    },
    {
      id: 'statement:c756f0c3882d4b5eb705280b1ea9c62b',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 1
    },
    {
      id: 'statement:46f04596ecdf4a5f997359bc7618aee7',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 1
    },
    {
      id: 'statement:81bad305642849e080f0fec3ed85d17f',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 1
    },
    {
      id: 'statement:72914a4caff54ad99e69f25d05f260f7',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 1
    },
    {
      id: 'statement:84a69669ef534d2ebc108c2369ca4ae0',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 1
    },
    {
      id: 'statement:012c8f37ff85454d8920e612f51f8c55',
      character: 'character:0b8c3af432c84d90a58939bf4ab87047',
      value: 'state:f10e767344504ed4aee5077ca353163b',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 1
    },
    {
      id: 'statement:399894fd893b4c128e2f3f94e1757ac6',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:237ab996a1c342358d4e11f804314a23',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:591438b9d1114623ad230bd726604e24',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:8a9b625d7d69406099a52dc2dcd0c920',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:4b486999bac2406b9abc6aec15032084',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:5870eec93c2b484bb8348843dd8a88eb',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:ecae908713434cca8ec28abea9f51bc5',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:d1c35387db504b8eaa1eb2cda9ff9c4e',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:75d8c19de88a4128994af9b3f5c1ecd5',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:c9f521398a5d40569cb4418aafae2292',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:c8319b8634be4e90bfda5b23403d9a21',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:597b30115e224ad886725bb8f0497609',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:4d28a3f8535c4111b2756daafdbd2013',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 0
    },
    {
      id: 'statement:105ee5b294634262bd888ff17afc2691',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 0
    },
    {
      id: 'statement:7019ee43f132473cad59aca18d795540',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 0
    },
    {
      id: 'statement:eea9b7729d1f45ffaef6bb4dc849231d',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:375b5a9bef594db5af8e814d7942c451',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 1
    },
    {
      id: 'statement:2b41444f26074595920863e0c838c593',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:c3c2124ba8084ca1a5a86695407bba0d',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:6cc9e7bbadbd4609b838d1434685f5c0',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:4c32d2d02c5844adbe70ebae3e9f9402',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:33448758c1cc44d7ad195b2ca3da222b',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:4d8da74b7e4d4986b93769d976f25b32',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:b6f9906706b646398ac9590b828f644d',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 1
    },
    {
      id: 'statement:83b72db456d0461aa84c6b809ef87a37',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 1
    },
    {
      id: 'statement:f57ef24b6dc34f9b8c6c79e00bd06866',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 1
    },
    {
      id: 'statement:0228771cbc1342608cce79e9e8f263dd',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 0
    },
    {
      id: 'statement:cc79a2b779f246288117b81a89fbd5f3',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 0
    },
    {
      id: 'statement:6c65a666d6804570aec745a8f5ad0b05',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 1
    },
    {
      id: 'statement:71ad4b7626554d32b5baa79d2fc87318',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 1
    },
    {
      id: 'statement:48c6de09ff76495298af281fc590df55',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 1
    },
    {
      id: 'statement:b85ca9f6612d4b33968cc5d88546fbc2',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 1
    },
    {
      id: 'statement:e6037cadc34342e8830df76575cad196',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 1
    },
    {
      id: 'statement:51418dd777494632b8c89eb351a9eca0',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 0
    },
    {
      id: 'statement:c380c83e7b164907a216e13e71fd2e5c',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0
    },
    {
      id: 'statement:1bec248def5147338473375f953a98de',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0
    },
    {
      id: 'statement:80832b8c830c4208a007d72a96c69e66',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:7a83931ee72b49a0a650c25b7ecb05fa',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:712ee430df4a4c39b00c192d0add5204',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:0f49d1e3efe64af9a7bac5b2723326d1',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 1
    },
    {
      id: 'statement:757eedb6179f4add969d4802e2d1e76b',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 1
    },
    {
      id: 'statement:bfe3e37f4705439b984b69a5a97b7be2',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 1
    },
    {
      id: 'statement:601f229d5cae49fb90070fa138770bd8',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 1
    },
    {
      id: 'statement:f226ccacb897489099b8044f7b85d65e',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 1
    },
    {
      id: 'statement:7ec290e128234d738cd132ea4ebf949a',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 1
    },
    {
      id: 'statement:06603ab5214248648e341923a6656b86',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 1
    },
    {
      id: 'statement:5c4e795be6e0489d866e155c67c438f1',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 1
    },
    {
      id: 'statement:31046ce3e33f4e6093f04b17eccb1164',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 1
    },
    {
      id: 'statement:2c42c6b30e58430197f759879ecec3bd',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 1
    },
    {
      id: 'statement:aa8a4772b0f747c084ef6b55fb95611f',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 1
    },
    {
      id: 'statement:8cc9915cc6c64b8084600a0c08913393',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 1
    },
    {
      id: 'statement:c943bd9316614a39b7eca2dc8cf10ab3',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 1
    },
    {
      id: 'statement:97f4347131ad46a4b8474b4f56418e3a',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 1
    },
    {
      id: 'statement:b5ae8a615a7c4fcf895dfe3f2697b4ce',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 1
    },
    {
      id: 'statement:8eb36c8a9ec44f20afa5b01c18349751',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 1
    },
    {
      id: 'statement:9aa0d70edd324a2d83d8fa96592ab02c',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0
    },
    {
      id: 'statement:1056307b5868429094988a1116350c3a',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 1
    },
    {
      id: 'statement:297238640c77475db88de16bb003a7fe',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 1
    },
    {
      id: 'statement:a3e70365b3a44bc1a5cb8f243ae4428e',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 1
    },
    {
      id: 'statement:b0b56065bc884cc3ae783850aa2d8bc4',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 1
    },
    {
      id: 'statement:5d14f6782a754f7085fb7d5cf1a379fd',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 1
    },
    {
      id: 'statement:4531a145e12749f99fb4c6fc23666082',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 1
    },
    {
      id: 'statement:8ad2947ec1404dd09b466e282f8f0586',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 0
    },
    {
      id: 'statement:cdfd4032213d4d9aa75fda5af34f0a99',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 0
    },
    {
      id: 'statement:0d10e3fef70342d9b37d02f49177161f',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 0
    },
    {
      id: 'statement:7fe6fb06906a4b8985e23fae7c932ef5',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 1
    },
    {
      id: 'statement:e897871bfab249b484b4444fbe4bf78a',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 1
    },
    {
      id: 'statement:c70859828c1340c5b3a5e997b00bcc66',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 0
    },
    {
      id: 'statement:8db5f66dd72c43d78f583ad6f33a3bd1',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 0
    },
    {
      id: 'statement:2ceecbd7387f48b1b48b8d9c124be7fb',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0
    },
    {
      id: 'statement:313ac2db98db48ef8c7be35c2d329b81',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0
    },
    {
      id: 'statement:aad08d879d3d475aa053329f5e972ad1',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0
    },
    {
      id: 'statement:effe6dcfa62c40c9b2dbb25c28992c13',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 1
    },
    {
      id: 'statement:78f5127729d540cbba1da61c30ff7be2',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 1
    },
    {
      id: 'statement:b6a503a40de84bb2afb507a9b10fbc43',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 1
    },
    {
      id: 'statement:79d4f9447fe04b96a06b46ffcc41e51e',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 1
    },
    {
      id: 'statement:bde11ceb17694e499f258ced33fdf1f6',
      character: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      value: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 1
    },
    {
      id: 'statement:8c1a67ee695045048d4421f4f6a58009',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:de0009df6f574b69831033ecf1bed7db',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:5bcfda631010470da64388f57883f047',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:de0009df6f574b69831033ecf1bed7db',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:18f996137548422d8882d76a15c85199',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:de0009df6f574b69831033ecf1bed7db',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:bc214d12ede14e1b99770fd979d63e57',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:de0009df6f574b69831033ecf1bed7db',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:aa1f044167e4467e84be186c1eeb5379',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:de0009df6f574b69831033ecf1bed7db',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:cd66996ed02548fb932c4571e85af257',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:de0009df6f574b69831033ecf1bed7db',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:9d94513706044da8a9b5b62f40b64852',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:de0009df6f574b69831033ecf1bed7db',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:8d89336faa4e41b280a49acc206b4b38',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:de0009df6f574b69831033ecf1bed7db',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:7a0e6ecf04db47cab6565c9327e98442',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:de0009df6f574b69831033ecf1bed7db',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:052f0e445648455f97d8ab6cd761c403',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:de0009df6f574b69831033ecf1bed7db',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:6f792e32b0024bdca4174e2ccc43542a',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:de0009df6f574b69831033ecf1bed7db',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:b63e4da84e0d481a8eb9318fcd79f768',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:de0009df6f574b69831033ecf1bed7db',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:a3629561ca5b41c397b37dcad8a08399',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:de0009df6f574b69831033ecf1bed7db',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 1
    },
    {
      id: 'statement:c9904bdce05544e7b493e96489ef59a3',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:9a5af60cc4c8445798d55bf50e1a712b',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 1
    },
    {
      id: 'statement:f47416914bf542babf0676fabe3e297a',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:9a5af60cc4c8445798d55bf50e1a712b',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 1
    },
    {
      id: 'statement:b64c91a16df043b19117bc14499f9c11',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:9a5af60cc4c8445798d55bf50e1a712b',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 1
    },
    {
      id: 'statement:a4c7a82ab3554c57b4e54b039585a96e',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:9a5af60cc4c8445798d55bf50e1a712b',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 1
    },
    {
      id: 'statement:8fa36c0894854c0db95df16df86dfd0e',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:9a5af60cc4c8445798d55bf50e1a712b',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 1
    },
    {
      id: 'statement:979ad0f2219f403a9fbc4ae79b9721a3',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:9a5af60cc4c8445798d55bf50e1a712b',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 1
    },
    {
      id: 'statement:3b34421a0b7f4ffcb0e2094b5d4472dc',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:9a5af60cc4c8445798d55bf50e1a712b',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 1
    },
    {
      id: 'statement:f5dc29d33c3c4f82955013e966dfc5ac',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:9a5af60cc4c8445798d55bf50e1a712b',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 1
    },
    {
      id: 'statement:d07fb28d00f743a992e8c1d944284624',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:9a5af60cc4c8445798d55bf50e1a712b',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 1
    },
    {
      id: 'statement:6ef12ffd3b7847ed9ae8277914d66c53',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:9a5af60cc4c8445798d55bf50e1a712b',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 1
    },
    {
      id: 'statement:e7dadc4390164f20a2bbece40350a8f9',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:9a5af60cc4c8445798d55bf50e1a712b',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 1
    },
    {
      id: 'statement:05db690ac1404849b5b50b7fd5492902',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:9a5af60cc4c8445798d55bf50e1a712b',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 1
    },
    {
      id: 'statement:8b3e31b1a48a4832af09a92319067e3d',
      character: 'character:8ac26470be7345f19ae0ad35874031aa',
      value: 'state:9a5af60cc4c8445798d55bf50e1a712b',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:22aa69833cc14669ac0da8bcf8c6ea70',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:0dab31833ecc4e8a8c38d9483315aaa5',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 1
    },
    {
      id: 'statement:a6b7d86bd7b84f819ad0f824dd10f90b',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:0dab31833ecc4e8a8c38d9483315aaa5',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 1
    },
    {
      id: 'statement:1e366d26cfb445b7a8503bd5f6f9b22f',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:0dab31833ecc4e8a8c38d9483315aaa5',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:f0c6b5f77d844ac59b59ed63533ff1c4',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:0dab31833ecc4e8a8c38d9483315aaa5',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:6e6e546fffc3460d848e8f3e3c188240',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:0dab31833ecc4e8a8c38d9483315aaa5',
      taxon: 'taxon:fc4a592737934537b2b9808b4c1699a5',
      frequency: 0
    },
    {
      id: 'statement:1b2d7e743a8a4c0fa2698d0b348c66d1',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:0dab31833ecc4e8a8c38d9483315aaa5',
      taxon: 'taxon:bb73937367394271b1f9275bf7b7d4a6',
      frequency: 0
    },
    {
      id: 'statement:fbdecf087fab4092bd67af35799af120',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:0dab31833ecc4e8a8c38d9483315aaa5',
      taxon: 'taxon:e99232c6ff3f4131babcc1bc0cbf6d43',
      frequency: 0
    },
    {
      id: 'statement:65a1e814cfe9413da045a86e17f5238a',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:0dab31833ecc4e8a8c38d9483315aaa5',
      taxon: 'taxon:e8bb4953ac66481995633993f16b7380',
      frequency: 0
    },
    {
      id: 'statement:7378c0f729e446f7aa9186387e7333c1',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:0dab31833ecc4e8a8c38d9483315aaa5',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:e55c38ef44384d2eab8d5097f820f96f',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:0dab31833ecc4e8a8c38d9483315aaa5',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:c4bc8639d5294b89bf5d2594234fb231',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:0dab31833ecc4e8a8c38d9483315aaa5',
      taxon: 'taxon:8395502483b1434f8645c3ce55a85823',
      frequency: 0
    },
    {
      id: 'statement:b8c76a012aec4eae945c47394394eae4',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:0dab31833ecc4e8a8c38d9483315aaa5',
      taxon: 'taxon:e9a27d08344e4fdda5cd46ca429789e4',
      frequency: 0
    },
    {
      id: 'statement:fcb5d09024b14d9cb741370f36d86137',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:0dab31833ecc4e8a8c38d9483315aaa5',
      taxon: 'taxon:dc09d52aa7ac4ac781bd1312fa275c91',
      frequency: 0
    },
    {
      id: 'statement:a31f0e23c419452f87bea52e4ed9be13',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:0dab31833ecc4e8a8c38d9483315aaa5',
      taxon: 'taxon:67a3e0bcf98f4754b0cd07782d9a5222',
      frequency: 0
    },
    {
      id: 'statement:cdd57c6901624f628e03270926faea7b',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:0dab31833ecc4e8a8c38d9483315aaa5',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:d5d21aef716f4a698e644ea53c3e4da8',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:0dab31833ecc4e8a8c38d9483315aaa5',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:f7d705146ca245a894cbce5f1a5598b9',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:0dab31833ecc4e8a8c38d9483315aaa5',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 1
    },
    {
      id: 'statement:585f8e269e394bacb632641ed3b1f740',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:db8563cdeb734551945ecca65ce758ad',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:7e885a639c9b488e8d7b14145df0a44c',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:db8563cdeb734551945ecca65ce758ad',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:44774cd7d05b4141a5652ff88d630cc0',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:db8563cdeb734551945ecca65ce758ad',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:685451095e204a6a8050eae05ba82605',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:db8563cdeb734551945ecca65ce758ad',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:7fa568fd503443d991a40d8def3d074e',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:db8563cdeb734551945ecca65ce758ad',
      taxon: 'taxon:fc4a592737934537b2b9808b4c1699a5',
      frequency: 0.5
    },
    {
      id: 'statement:34a5de0b0c6b4679bf9f83abdd5dba95',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:db8563cdeb734551945ecca65ce758ad',
      taxon: 'taxon:bb73937367394271b1f9275bf7b7d4a6',
      frequency: 0
    },
    {
      id: 'statement:1ea320bc9f4e4041868294605a0d730e',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:db8563cdeb734551945ecca65ce758ad',
      taxon: 'taxon:e99232c6ff3f4131babcc1bc0cbf6d43',
      frequency: 0.5
    },
    {
      id: 'statement:c4674bbafd6f4e369d9dc0aead4fae9a',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:db8563cdeb734551945ecca65ce758ad',
      taxon: 'taxon:e8bb4953ac66481995633993f16b7380',
      frequency: 0
    },
    {
      id: 'statement:dcdabac4ba8345d89a8b1d0c3dd81742',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:db8563cdeb734551945ecca65ce758ad',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 1
    },
    {
      id: 'statement:8d5942021a7f4a6796625b71a7ffc292',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:db8563cdeb734551945ecca65ce758ad',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:dcc7c4ff70a742318373ced5ac18759d',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:db8563cdeb734551945ecca65ce758ad',
      taxon: 'taxon:8395502483b1434f8645c3ce55a85823',
      frequency: 0.5
    },
    {
      id: 'statement:0192569e41c749719f1d3a69b782ee0c',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:db8563cdeb734551945ecca65ce758ad',
      taxon: 'taxon:e9a27d08344e4fdda5cd46ca429789e4',
      frequency: 0
    },
    {
      id: 'statement:f37cd9ab10b148e49b449a40a5c5d26f',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:db8563cdeb734551945ecca65ce758ad',
      taxon: 'taxon:dc09d52aa7ac4ac781bd1312fa275c91',
      frequency: 1
    },
    {
      id: 'statement:278c17db9733422c9c4b3b4820178aec',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:db8563cdeb734551945ecca65ce758ad',
      taxon: 'taxon:67a3e0bcf98f4754b0cd07782d9a5222',
      frequency: 0.5
    },
    {
      id: 'statement:61d1cdac6f15453eac981ba43fd38b8a',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:db8563cdeb734551945ecca65ce758ad',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:06c9fe247de64ccf870e0e656b07f7cf',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:db8563cdeb734551945ecca65ce758ad',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:1591c20bf37442429b2e8077c7dbd9d1',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:db8563cdeb734551945ecca65ce758ad',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:3858351c10504717b1b48d2fff596364',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:76a5a29ba54b4f32981cf1df1fca4612',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:b31ed5d459df49aca5a5505f3d4c4b76',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:76a5a29ba54b4f32981cf1df1fca4612',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:f87472182c614f27af92da38e2d9e724',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:76a5a29ba54b4f32981cf1df1fca4612',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:16d0673b514940d09e05541a4ce05b89',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:76a5a29ba54b4f32981cf1df1fca4612',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:bc1f7657e64f43159a2adfe54c0bf88d',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:76a5a29ba54b4f32981cf1df1fca4612',
      taxon: 'taxon:fc4a592737934537b2b9808b4c1699a5',
      frequency: 0.5
    },
    {
      id: 'statement:4f1b96663a834295b620800b8fe45626',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:76a5a29ba54b4f32981cf1df1fca4612',
      taxon: 'taxon:bb73937367394271b1f9275bf7b7d4a6',
      frequency: 0.5
    },
    {
      id: 'statement:8823469bc95549988eb431f038bbfe85',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:76a5a29ba54b4f32981cf1df1fca4612',
      taxon: 'taxon:e99232c6ff3f4131babcc1bc0cbf6d43',
      frequency: 0.5
    },
    {
      id: 'statement:7f9e2be2c9e5433f81f02d4eb75f2274',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:76a5a29ba54b4f32981cf1df1fca4612',
      taxon: 'taxon:e8bb4953ac66481995633993f16b7380',
      frequency: 0.5
    },
    {
      id: 'statement:21d987bd89a34565a257263780ffdc21',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:76a5a29ba54b4f32981cf1df1fca4612',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:93642d581244407598602bbb2e076ae5',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:76a5a29ba54b4f32981cf1df1fca4612',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 1
    },
    {
      id: 'statement:efefd44cab2243fa9386dfe6e2afdc62',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:76a5a29ba54b4f32981cf1df1fca4612',
      taxon: 'taxon:8395502483b1434f8645c3ce55a85823',
      frequency: 0.5
    },
    {
      id: 'statement:903c69defa1043848d49cfb5b33446cc',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:76a5a29ba54b4f32981cf1df1fca4612',
      taxon: 'taxon:e9a27d08344e4fdda5cd46ca429789e4',
      frequency: 0.5
    },
    {
      id: 'statement:387822f914ba408e9035f1b58a1d8569',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:76a5a29ba54b4f32981cf1df1fca4612',
      taxon: 'taxon:dc09d52aa7ac4ac781bd1312fa275c91',
      frequency: 0
    },
    {
      id: 'statement:a767f849cb47456f8368293db37264a8',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:76a5a29ba54b4f32981cf1df1fca4612',
      taxon: 'taxon:67a3e0bcf98f4754b0cd07782d9a5222',
      frequency: 0.5
    },
    {
      id: 'statement:a2c55cf06d284b17bca7c909f4c9c11a',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:76a5a29ba54b4f32981cf1df1fca4612',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:38d914bfbdca4e009d7095eb1dd2ceb6',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:76a5a29ba54b4f32981cf1df1fca4612',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:270e597fc0b342a58cfd0ef6bf2195f5',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:76a5a29ba54b4f32981cf1df1fca4612',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:dea1b3bc8a154d54a897f49d43245d2c',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:6b3ce5ba641b4d7cba82c77573e902c4',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:64dedb455e304704af79627eb0480513',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:6b3ce5ba641b4d7cba82c77573e902c4',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:fbf9ff038517403aab90c30bbf1b47f2',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:6b3ce5ba641b4d7cba82c77573e902c4',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 1
    },
    {
      id: 'statement:fd140fd8932f48c3991611a7666fb38a',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:6b3ce5ba641b4d7cba82c77573e902c4',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 1
    },
    {
      id: 'statement:52ed757e30e941a483cb9e216836de60',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:6b3ce5ba641b4d7cba82c77573e902c4',
      taxon: 'taxon:fc4a592737934537b2b9808b4c1699a5',
      frequency: 0
    },
    {
      id: 'statement:0ebda8c1989840f0ba7935980ca85540',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:6b3ce5ba641b4d7cba82c77573e902c4',
      taxon: 'taxon:bb73937367394271b1f9275bf7b7d4a6',
      frequency: 0.5
    },
    {
      id: 'statement:4361e92d061c49a6878035ee35266130',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:6b3ce5ba641b4d7cba82c77573e902c4',
      taxon: 'taxon:e99232c6ff3f4131babcc1bc0cbf6d43',
      frequency: 0
    },
    {
      id: 'statement:6709511beda64f46a14b67b2e986a41a',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:6b3ce5ba641b4d7cba82c77573e902c4',
      taxon: 'taxon:e8bb4953ac66481995633993f16b7380',
      frequency: 0.5
    },
    {
      id: 'statement:5507206613cf46298b248fd6bfddbc71',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:6b3ce5ba641b4d7cba82c77573e902c4',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:a845cbe7fa4641f8a788c0b4a167c80b',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:6b3ce5ba641b4d7cba82c77573e902c4',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:35a3280712774c19a7286019f15ed6aa',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:6b3ce5ba641b4d7cba82c77573e902c4',
      taxon: 'taxon:8395502483b1434f8645c3ce55a85823',
      frequency: 0
    },
    {
      id: 'statement:800b497cb9e94252982eb6874e200433',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:6b3ce5ba641b4d7cba82c77573e902c4',
      taxon: 'taxon:e9a27d08344e4fdda5cd46ca429789e4',
      frequency: 0.5
    },
    {
      id: 'statement:b34fd1fea32543b59c0412466ac93d02',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:6b3ce5ba641b4d7cba82c77573e902c4',
      taxon: 'taxon:dc09d52aa7ac4ac781bd1312fa275c91',
      frequency: 0
    },
    {
      id: 'statement:b946fd9042984a12960fb7738d892458',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:6b3ce5ba641b4d7cba82c77573e902c4',
      taxon: 'taxon:67a3e0bcf98f4754b0cd07782d9a5222',
      frequency: 0
    },
    {
      id: 'statement:38bb9d843e7245a39d8d7819c8f5ad1b',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:6b3ce5ba641b4d7cba82c77573e902c4',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 1
    },
    {
      id: 'statement:478790b66a604237a5ce338de6f207ba',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:6b3ce5ba641b4d7cba82c77573e902c4',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 1
    },
    {
      id: 'statement:886e181978d840ec9121ba435eb000a9',
      character: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      value: 'state:6b3ce5ba641b4d7cba82c77573e902c4',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:aa12435108d7406380f20a814a8068d1',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:90c3ec7f4d6d4f45b9d892a20e20f043',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 1
    },
    {
      id: 'statement:65507c7e01d641409d0a9a4a6184a4d3',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:90c3ec7f4d6d4f45b9d892a20e20f043',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:7818d4afc43a47bdb48afc882bb76fe4',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:90c3ec7f4d6d4f45b9d892a20e20f043',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 1
    },
    {
      id: 'statement:3ede41586c3040418d06c43b50af6442',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:90c3ec7f4d6d4f45b9d892a20e20f043',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 1
    },
    {
      id: 'statement:c725f8571f524882a31370a0c6131e1c',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:90c3ec7f4d6d4f45b9d892a20e20f043',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 1
    },
    {
      id: 'statement:ba99f122086543c4b778835eb06c3e66',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:90c3ec7f4d6d4f45b9d892a20e20f043',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 1
    },
    {
      id: 'statement:c86c01fa17734eb49b5818834b57a52f',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:90c3ec7f4d6d4f45b9d892a20e20f043',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 1
    },
    {
      id: 'statement:9a47251ccc614d5a9ee8eea4b2ca4cc6',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:90c3ec7f4d6d4f45b9d892a20e20f043',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 1
    },
    {
      id: 'statement:091d943182fb42c8b108481296cb0236',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:90c3ec7f4d6d4f45b9d892a20e20f043',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 1
    },
    {
      id: 'statement:7bb42c8d39ed482389f97ba8ce9223ec',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:90c3ec7f4d6d4f45b9d892a20e20f043',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 1
    },
    {
      id: 'statement:489384842de2459598b4d60094c85555',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:90c3ec7f4d6d4f45b9d892a20e20f043',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:b2344a5da4604b88bd128d2d5bc35489',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:90c3ec7f4d6d4f45b9d892a20e20f043',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:25e95c24d9a4487ca36a5cce5f12bb55',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:90c3ec7f4d6d4f45b9d892a20e20f043',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 1
    },
    {
      id: 'statement:2abab82e8bd140c483d704454a459f0e',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:83095f3c22e8424c9ece6870943f3f2e',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:28d1755a53c6459f8b06669989520d11',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:83095f3c22e8424c9ece6870943f3f2e',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 1
    },
    {
      id: 'statement:d4f130ec28ab48e1b183722ef03ef058',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:83095f3c22e8424c9ece6870943f3f2e',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:bc37c3d164a442c0af8e8d4500357772',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:83095f3c22e8424c9ece6870943f3f2e',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:aa176861aa8449c6a8617510441fb697',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:83095f3c22e8424c9ece6870943f3f2e',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:e43efee05a7d43cb9208ff7113c85d81',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:83095f3c22e8424c9ece6870943f3f2e',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:add20b2faa384f9f8fc54b4385d9d30a',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:83095f3c22e8424c9ece6870943f3f2e',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:42fac2eb59cd48a58d81e0f6d7323559',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:83095f3c22e8424c9ece6870943f3f2e',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:c9771e766e6041a4bbbb0527ed1dec0f',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:83095f3c22e8424c9ece6870943f3f2e',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:5c0019194ec74c8687f409e6a06c9679',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:83095f3c22e8424c9ece6870943f3f2e',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:8fe74f32fee24bd3b8048f1d9277b52b',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:83095f3c22e8424c9ece6870943f3f2e',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 1
    },
    {
      id: 'statement:40c583939b0242209b83de362a380557',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:83095f3c22e8424c9ece6870943f3f2e',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 1
    },
    {
      id: 'statement:9fba0a49b9584436942a20c67531a2a2',
      character: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      value: 'state:83095f3c22e8424c9ece6870943f3f2e',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:b90d37a1803849a0aa87873d27f6858e',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:d9a63bf8ee9c48378d88232307d4f54f',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 1
    },
    {
      id: 'statement:e265b532f2bd4cb8978ca6b0f0bc34ac',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:d9a63bf8ee9c48378d88232307d4f54f',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 1
    },
    {
      id: 'statement:583a3d2cc307403f885ef3717a138e55',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:d9a63bf8ee9c48378d88232307d4f54f',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 1
    },
    {
      id: 'statement:6ea4a6b93387412c844652dc0f5c50b2',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:d9a63bf8ee9c48378d88232307d4f54f',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 1
    },
    {
      id: 'statement:e244a73c530648228088dd464abfd0fe',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:d9a63bf8ee9c48378d88232307d4f54f',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 1
    },
    {
      id: 'statement:b2cc667ad2104937b1d69a797b43802f',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:d9a63bf8ee9c48378d88232307d4f54f',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 1
    },
    {
      id: 'statement:52945846a12548319304e75f83ca5e9d',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:d9a63bf8ee9c48378d88232307d4f54f',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 1
    },
    {
      id: 'statement:1789b9738f054c63b8b56ca3266b57c0',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:d9a63bf8ee9c48378d88232307d4f54f',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 1
    },
    {
      id: 'statement:aa992b839e1c4ad3a1cfd2215bf3f076',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:d9a63bf8ee9c48378d88232307d4f54f',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:bb8a63198b444b1f9ecfe1321e91498a',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:d9a63bf8ee9c48378d88232307d4f54f',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:7e4621992f1c4f689e471e8d45c80f26',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:91faa14b048c4bb88401ab9698af8f3d',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:a58f8eaa54c34d96999b6411c8229aef',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:91faa14b048c4bb88401ab9698af8f3d',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:9880e4fb6c7648458d1d56502fce1e9f',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:91faa14b048c4bb88401ab9698af8f3d',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:fd2b6fe7244c4ba4bb2e327d459a5d8c',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:91faa14b048c4bb88401ab9698af8f3d',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:c12a093b4cbe409aa47d825a9bd77de8',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:91faa14b048c4bb88401ab9698af8f3d',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:35d14aa535e843f9bdc957cc3b26daca',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:91faa14b048c4bb88401ab9698af8f3d',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:e07f6749469e43edaff850662bd341c9',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:91faa14b048c4bb88401ab9698af8f3d',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:04e18902c5ca48f582605e236f7cbd80',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:91faa14b048c4bb88401ab9698af8f3d',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:5e5154bf1873498392bec2f75e025137',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:91faa14b048c4bb88401ab9698af8f3d',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 1
    },
    {
      id: 'statement:97265f6380ff46339d4c20965e3c98f4',
      character: 'character:605d21e525cc4b7cb99053a91c6451e5',
      value: 'state:91faa14b048c4bb88401ab9698af8f3d',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 1
    },
    {
      id: 'statement:5256cbd2dae64c22b14bff86fd4c0905',
      character: 'character:5a4c64d87be74fdb884004359788e91e',
      value: 'state:178a3027e7af45709d09347ef43eef98',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 1
    },
    {
      id: 'statement:3b8f210ded7f4db3991d88f2a376a71b',
      character: 'character:5a4c64d87be74fdb884004359788e91e',
      value: 'state:178a3027e7af45709d09347ef43eef98',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:be7c58402aee4848b20a3ef7eed0c067',
      character: 'character:5a4c64d87be74fdb884004359788e91e',
      value: 'state:178a3027e7af45709d09347ef43eef98',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:230ec5d2d7a1423b9231ffe2a25a3e78',
      character: 'character:5a4c64d87be74fdb884004359788e91e',
      value: 'state:386310864e7546d9afad3c7b1f0c257d',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:9ade054b8cf143a6b638917e8de70a08',
      character: 'character:5a4c64d87be74fdb884004359788e91e',
      value: 'state:386310864e7546d9afad3c7b1f0c257d',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 1
    },
    {
      id: 'statement:2a1817d0078c40ffa5e58a2dbdcc3c9e',
      character: 'character:5a4c64d87be74fdb884004359788e91e',
      value: 'state:386310864e7546d9afad3c7b1f0c257d',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:ea772859c21448fd977906c7413ee8b6',
      character: 'character:5a4c64d87be74fdb884004359788e91e',
      value: 'state:7e50a20110a14010975b1f0837657145',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:5a5c0a752a534e0e8887e48f048cbbcc',
      character: 'character:5a4c64d87be74fdb884004359788e91e',
      value: 'state:7e50a20110a14010975b1f0837657145',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:dba1948d69c04bd6b7c62d20e61cd660',
      character: 'character:5a4c64d87be74fdb884004359788e91e',
      value: 'state:7e50a20110a14010975b1f0837657145',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 1
    },
    {
      id: 'statement:dcb1e05207d347548e3921981d2af700',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:8b43d2c273d6496e8eacd461d7702028',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 1
    },
    {
      id: 'statement:7ba00111f090450e82c8326c43f2374a',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:8b43d2c273d6496e8eacd461d7702028',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:ca6dc7cdcfef4378b680f89d766a4725',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:8b43d2c273d6496e8eacd461d7702028',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 1
    },
    {
      id: 'statement:bf176f3472a441b6b19eb312d856b931',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:8b43d2c273d6496e8eacd461d7702028',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:f47f37d86e1448e4ac3202f10df83573',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:8b43d2c273d6496e8eacd461d7702028',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:649baed20ca44b11a89a8eadc8d9591c',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:8b43d2c273d6496e8eacd461d7702028',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:5ce3a97bc5b34b9da192d4e95f7c484b',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:8b43d2c273d6496e8eacd461d7702028',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:b58c13e9210a4235b707b1484f55fc70',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:8b43d2c273d6496e8eacd461d7702028',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 1
    },
    {
      id: 'statement:70de9521c40b488094a1656514335569',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:8b43d2c273d6496e8eacd461d7702028',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:211958835eb74f278a5637f88e73df86',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:8b43d2c273d6496e8eacd461d7702028',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:2e7fee72de534fa28626e0aa82abcb5f',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:8b43d2c273d6496e8eacd461d7702028',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:0e736eba2d12451fb230af13e3eb3243',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:80d144db82f54a0eae7da9cbbc3a7763',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:ce813eed828f400fb1468fe53a18fbef',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:80d144db82f54a0eae7da9cbbc3a7763',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 1
    },
    {
      id: 'statement:a95a460a37fd41d5accfc27ab8847317',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:80d144db82f54a0eae7da9cbbc3a7763',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:fc9b421c2b5e4edda1da016ed3a91f8d',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:80d144db82f54a0eae7da9cbbc3a7763',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 1
    },
    {
      id: 'statement:54394463ce30457cbcb50a26dcba5978',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:80d144db82f54a0eae7da9cbbc3a7763',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 1
    },
    {
      id: 'statement:ce3c9e2475e841c29515c4436cd1aa09',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:80d144db82f54a0eae7da9cbbc3a7763',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 1
    },
    {
      id: 'statement:2a20881e509e49c7b75274734009778b',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:80d144db82f54a0eae7da9cbbc3a7763',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 1
    },
    {
      id: 'statement:88633f1a2990465e902397a655335111',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:80d144db82f54a0eae7da9cbbc3a7763',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:26e391c08ef94403bfe6070883497922',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:80d144db82f54a0eae7da9cbbc3a7763',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 1
    },
    {
      id: 'statement:7a2ea803c1354519a23f620d10ace657',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:80d144db82f54a0eae7da9cbbc3a7763',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 1
    },
    {
      id: 'statement:3db38dd56b3049e78a4a7cd5c46631d7',
      character: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      value: 'state:80d144db82f54a0eae7da9cbbc3a7763',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 1
    },
    {
      id: 'statement:2b312eb4623a43f28e303160025f78cf',
      character: 'character:81928a5e71724968ac8b0f01007c0d19',
      value: 'state:9c2dfdab893643eaa3a5e348faf553ba',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:ee3aaa90028948528ea15a7389810496',
      character: 'character:81928a5e71724968ac8b0f01007c0d19',
      value: 'state:9c2dfdab893643eaa3a5e348faf553ba',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:e6b5063a1bef4f4691141d651333b654',
      character: 'character:81928a5e71724968ac8b0f01007c0d19',
      value: 'state:9c2dfdab893643eaa3a5e348faf553ba',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 1
    },
    {
      id: 'statement:2782be2de2d24570b19d779ff353ad65',
      character: 'character:81928a5e71724968ac8b0f01007c0d19',
      value: 'state:f38f32edbeb64816a94207a728d658b3',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 1
    },
    {
      id: 'statement:3b078d01f1424cb196bca618ccd02c5f',
      character: 'character:81928a5e71724968ac8b0f01007c0d19',
      value: 'state:f38f32edbeb64816a94207a728d658b3',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 1
    },
    {
      id: 'statement:5c0230eaecf8426f9ed5ebef4a51a24f',
      character: 'character:81928a5e71724968ac8b0f01007c0d19',
      value: 'state:f38f32edbeb64816a94207a728d658b3',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:e1132a74376145838fe97c2c2a9e3215',
      character: 'character:9ea44913ba3f47a1a400138b22e72441',
      value: 'state:6eb3db7370de44fca8adf4ceb461bfd5',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:ed8d085e23c342c8bb4716bc92475694',
      character: 'character:9ea44913ba3f47a1a400138b22e72441',
      value: 'state:6eb3db7370de44fca8adf4ceb461bfd5',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 1
    },
    {
      id: 'statement:d16517075f0648c780081d413ebe55e8',
      character: 'character:9ea44913ba3f47a1a400138b22e72441',
      value: 'state:a1f43e122c2a4fa5a06d1acb8f0946ff',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 1
    },
    {
      id: 'statement:d0a8d1e35bf74cd090d9623cb4622094',
      character: 'character:9ea44913ba3f47a1a400138b22e72441',
      value: 'state:a1f43e122c2a4fa5a06d1acb8f0946ff',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:4968c4ba910d4a21a59291bea33d3e05',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:2bc53645b08f4bb8a43a68d99396b72b',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:e49d0fc7df8c4cdf8dced534fcd5106c',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:2bc53645b08f4bb8a43a68d99396b72b',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:eef3ac310df745b78951c31f57091f97',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:2bc53645b08f4bb8a43a68d99396b72b',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 1
    },
    {
      id: 'statement:104b5b3269014a1eaf4c35fb56a5d090',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:2bc53645b08f4bb8a43a68d99396b72b',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 1
    },
    {
      id: 'statement:6b23817910d74d4bac539281d06011a4',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:2bc53645b08f4bb8a43a68d99396b72b',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:a57d84277d424c8c98cd694e8799cb76',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:2bc53645b08f4bb8a43a68d99396b72b',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:fc57a4c9c8074dd08e0f5abaa4d1538f',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:2bc53645b08f4bb8a43a68d99396b72b',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:00b54fedf650473b9d829b401a8d722c',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:2bc53645b08f4bb8a43a68d99396b72b',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:dd4808a3bc794795b9f934234c454231',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:2bc53645b08f4bb8a43a68d99396b72b',
      taxon: 'taxon:8395502483b1434f8645c3ce55a85823',
      frequency: 0
    },
    {
      id: 'statement:800048a1c618494a969ecedda86a8e7c',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:2bc53645b08f4bb8a43a68d99396b72b',
      taxon: 'taxon:e9a27d08344e4fdda5cd46ca429789e4',
      frequency: 0
    },
    {
      id: 'statement:59bb6ee65b874e7cba1e16292b3bea4f',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:2bc53645b08f4bb8a43a68d99396b72b',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:546646f1e9dc446ea34eadcd48c61bdd',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:2bc53645b08f4bb8a43a68d99396b72b',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:e24cc845572546819dcc97a015392a9a',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:2bc53645b08f4bb8a43a68d99396b72b',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:7835ee4f5312443dbebd258282fea6ff',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:2bc53645b08f4bb8a43a68d99396b72b',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:205836c2df5e421ebd8d715902a79634',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:0abede2d444349e598f952743aae0dd7',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 1
    },
    {
      id: 'statement:4a8263fcae6b4c7d974451c94690a754',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:0abede2d444349e598f952743aae0dd7',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 1
    },
    {
      id: 'statement:8e992ca2ee5c43a99f6b86115b0d05ea',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:0abede2d444349e598f952743aae0dd7',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:8528eda8f8254ebf8a952423079d62ff',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:0abede2d444349e598f952743aae0dd7',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:7095a7ed7ee246448f3f0b377e1be6d6',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:0abede2d444349e598f952743aae0dd7',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 1
    },
    {
      id: 'statement:771d6de5bb7b4afa88cf5d0c9b35826f',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:0abede2d444349e598f952743aae0dd7',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 1
    },
    {
      id: 'statement:c608cbf5dda1410381ac9388108ff080',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:0abede2d444349e598f952743aae0dd7',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 1
    },
    {
      id: 'statement:1e336e4ae4874ebbb7a81f1fd0a7bf90',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:0abede2d444349e598f952743aae0dd7',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 1
    },
    {
      id: 'statement:c2ef5a043d7f4f288328dd6cc80cd2a1',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:0abede2d444349e598f952743aae0dd7',
      taxon: 'taxon:8395502483b1434f8645c3ce55a85823',
      frequency: 0.5
    },
    {
      id: 'statement:10e33967f2a04c7d835d73453aeef5d1',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:0abede2d444349e598f952743aae0dd7',
      taxon: 'taxon:e9a27d08344e4fdda5cd46ca429789e4',
      frequency: 1
    },
    {
      id: 'statement:3e1131b94f1c46a18102b2fc4d6febaf',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:0abede2d444349e598f952743aae0dd7',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 1
    },
    {
      id: 'statement:4c29f9487f4c42548d52f43a0317b382',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:0abede2d444349e598f952743aae0dd7',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:aaedcddd248d4e02b4deeb0175154cbe',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:0abede2d444349e598f952743aae0dd7',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:685c1e6670f54bb091cbe300801b7b9b',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:0abede2d444349e598f952743aae0dd7',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 1
    },
    {
      id: 'statement:a5b96ca7967f488590d80512f12e6fca',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:7fa22657294445bbb8fa07ce5be183ed',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:85c71154c12448b38a2fceb07fd0362b',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:7fa22657294445bbb8fa07ce5be183ed',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:4842c815fbc040d38692ea7814b3a721',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:7fa22657294445bbb8fa07ce5be183ed',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:3045872d8d3d4e28a4afc5dad3944c9a',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:7fa22657294445bbb8fa07ce5be183ed',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:cc64e8cf5a9a49228c41e7ecbd71e698',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:7fa22657294445bbb8fa07ce5be183ed',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:de95c8a4c52846868a08909ed361f4ee',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:7fa22657294445bbb8fa07ce5be183ed',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:dcc03605df454f4cba3028dd608ddb29',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:7fa22657294445bbb8fa07ce5be183ed',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:b9836ad6f1064030b66b8d11863e91a5',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:7fa22657294445bbb8fa07ce5be183ed',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:7a68789f36484e02aefb21919cb14401',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:7fa22657294445bbb8fa07ce5be183ed',
      taxon: 'taxon:8395502483b1434f8645c3ce55a85823',
      frequency: 0.5
    },
    {
      id: 'statement:91ff191e8f0d4968ae83f2c0699b771d',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:7fa22657294445bbb8fa07ce5be183ed',
      taxon: 'taxon:e9a27d08344e4fdda5cd46ca429789e4',
      frequency: 0
    },
    {
      id: 'statement:9c597552e0d047aebfaf81eb9845a628',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:7fa22657294445bbb8fa07ce5be183ed',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:d19adac0dfee445aabfbfc3c260962b7',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:7fa22657294445bbb8fa07ce5be183ed',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 1
    },
    {
      id: 'statement:3d1300a1b5bf42eeb59cde1e753ce934',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:7fa22657294445bbb8fa07ce5be183ed',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 1
    },
    {
      id: 'statement:1b14aa62dbf048118afe10eb4f937204',
      character: 'character:4575d9eead984fb49a2930e06c320c00',
      value: 'state:7fa22657294445bbb8fa07ce5be183ed',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:6cf69ef54b484bbe988c36d40da50dee',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:b3820d28f7994f2eb17320b426ae2556',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:44186a5aff924edda071eaa90516a023',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:b3820d28f7994f2eb17320b426ae2556',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:ec57c7623b10485fa514e7e55e6fa5ab',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:b3820d28f7994f2eb17320b426ae2556',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:2e93b823b6854947b5bf8152f2f282d1',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:b3820d28f7994f2eb17320b426ae2556',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:2b1855fa287e4b7cbfcbe16065901e70',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:b3820d28f7994f2eb17320b426ae2556',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:13002ff9678245b7a8b2c09e843cc3a8',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:b3820d28f7994f2eb17320b426ae2556',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:d6ea2ec8e70e4983a2e65c89678b7e8b',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:b3820d28f7994f2eb17320b426ae2556',
      taxon: 'taxon:8395502483b1434f8645c3ce55a85823',
      frequency: 0.5
    },
    {
      id: 'statement:4038a9b9ceca4e3f8163aa99c5f9c861',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:b3820d28f7994f2eb17320b426ae2556',
      taxon: 'taxon:e9a27d08344e4fdda5cd46ca429789e4',
      frequency: 0
    },
    {
      id: 'statement:65e54070dc094d74aa41efda5445aad8',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:b3820d28f7994f2eb17320b426ae2556',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:4862d5c8be864f3192653c2413167a17',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:b3820d28f7994f2eb17320b426ae2556',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 1
    },
    {
      id: 'statement:32ed80b853d74c4ead2cd62d2342a7e7',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:d58b0eaccd46418ea30f0a4325dd0a11',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 1
    },
    {
      id: 'statement:a0020fef4c2a4aa7a8ab5aa702f98a16',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:d58b0eaccd46418ea30f0a4325dd0a11',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 1
    },
    {
      id: 'statement:cbacc61ab690403baa01da032ed100ab',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:d58b0eaccd46418ea30f0a4325dd0a11',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 1
    },
    {
      id: 'statement:474c19267df243bdaf23a76f1f5162d2',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:d58b0eaccd46418ea30f0a4325dd0a11',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 1
    },
    {
      id: 'statement:8db26e7c8c8c44258d1e15a89ee66962',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:d58b0eaccd46418ea30f0a4325dd0a11',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 1
    },
    {
      id: 'statement:f3e20cd0022840c192b01e712c4748bf',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:d58b0eaccd46418ea30f0a4325dd0a11',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 1
    },
    {
      id: 'statement:a501498fa9e34d5b8abbff25ba6fda8e',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:d58b0eaccd46418ea30f0a4325dd0a11',
      taxon: 'taxon:8395502483b1434f8645c3ce55a85823',
      frequency: 0.5
    },
    {
      id: 'statement:2b834d0db3e7438c8184f45c31d4cae5',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:d58b0eaccd46418ea30f0a4325dd0a11',
      taxon: 'taxon:e9a27d08344e4fdda5cd46ca429789e4',
      frequency: 1
    },
    {
      id: 'statement:65a73e1b99a541138ddd58d7b63ff478',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:d58b0eaccd46418ea30f0a4325dd0a11',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 1
    },
    {
      id: 'statement:1af9ee73dc9a430c990ca8496a9c07d3',
      character: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      value: 'state:d58b0eaccd46418ea30f0a4325dd0a11',
      taxon: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      frequency: 0
    },
    {
      id: 'statement:ed861ec007fc4024b0b76d7124ce3617',
      character: 'character:412372b6801b40779e428e5da61d7705',
      value: 'state:0ecc3cafb5e94d3884f249ff2a8fb57b',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:3e054412a7a64cfa8b469b56e39c8214',
      character: 'character:412372b6801b40779e428e5da61d7705',
      value: 'state:0ecc3cafb5e94d3884f249ff2a8fb57b',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:b5e7f519028b480d8ee982d1781a2cd8',
      character: 'character:412372b6801b40779e428e5da61d7705',
      value: 'state:0ecc3cafb5e94d3884f249ff2a8fb57b',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:e04857e05ffa42eb873eb05e89edc730',
      character: 'character:412372b6801b40779e428e5da61d7705',
      value: 'state:0ecc3cafb5e94d3884f249ff2a8fb57b',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 1
    },
    {
      id: 'statement:fc42dbee464246c3a85ce53814bc477d',
      character: 'character:412372b6801b40779e428e5da61d7705',
      value: 'state:2cd049a669cd4808bd84c9a06c417e7c',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 1
    },
    {
      id: 'statement:227df42bfdca4675876ee51eeac6fc3a',
      character: 'character:412372b6801b40779e428e5da61d7705',
      value: 'state:2cd049a669cd4808bd84c9a06c417e7c',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 1
    },
    {
      id: 'statement:ac82c26b7a8b472e8d62548e25a3cf9f',
      character: 'character:412372b6801b40779e428e5da61d7705',
      value: 'state:2cd049a669cd4808bd84c9a06c417e7c',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 1
    },
    {
      id: 'statement:d5996b3213004a1493dc12b95fc61db5',
      character: 'character:412372b6801b40779e428e5da61d7705',
      value: 'state:2cd049a669cd4808bd84c9a06c417e7c',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:8feae6ebf7654801966631eadf427526',
      character: 'character:d010e512ef3d437a94721351ac24601e',
      value: 'state:e3572a8dd08d4e2f89cb3985100ffd49',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:c9d24c435ea74635959deba3f7736928',
      character: 'character:d010e512ef3d437a94721351ac24601e',
      value: 'state:e3572a8dd08d4e2f89cb3985100ffd49',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:87f283c98bad42aca7db30c37c4e85f3',
      character: 'character:d010e512ef3d437a94721351ac24601e',
      value: 'state:e3572a8dd08d4e2f89cb3985100ffd49',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 1
    },
    {
      id: 'statement:6e8e7eb40a4f4a30a45342638203f308',
      character: 'character:d010e512ef3d437a94721351ac24601e',
      value: 'state:b044fa859d134e7eb230327dc8e91182',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 1
    },
    {
      id: 'statement:274ab1485e084ce9a8e8ac423a0a7ed2',
      character: 'character:d010e512ef3d437a94721351ac24601e',
      value: 'state:b044fa859d134e7eb230327dc8e91182',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 1
    },
    {
      id: 'statement:4cdabff56cb94be4930c19d4a6bfd56f',
      character: 'character:d010e512ef3d437a94721351ac24601e',
      value: 'state:b044fa859d134e7eb230327dc8e91182',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:0fb52934685a410d8f763ce0c202a904',
      character: 'character:5e0cf12bccce469abd9973f810396235',
      value: 'state:aadd9df383f645bfba17faa9c75745d2',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:efdfd6b956864ea8893e29acd2789ef8',
      character: 'character:5e0cf12bccce469abd9973f810396235',
      value: 'state:aadd9df383f645bfba17faa9c75745d2',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 1
    },
    {
      id: 'statement:cbf6b80cd7374894a4d6b202619a6ad1',
      character: 'character:5e0cf12bccce469abd9973f810396235',
      value: 'state:40ace287ce224c85804db7278f890d5b',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 1
    },
    {
      id: 'statement:d4998442692e403e83df29306cbb9f45',
      character: 'character:5e0cf12bccce469abd9973f810396235',
      value: 'state:40ace287ce224c85804db7278f890d5b',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:6661c3e34c95410eb8558d58f606975d',
      character: 'character:d2486e19423843a68c4acbf8643b8785',
      value: 'state:f01a941e41d64cc9b88cddd78426053b',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 1
    },
    {
      id: 'statement:bef1842d16ba47e1a9be7d8d2dd890da',
      character: 'character:d2486e19423843a68c4acbf8643b8785',
      value: 'state:f01a941e41d64cc9b88cddd78426053b',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 0
    },
    {
      id: 'statement:2525f57b00dc48f095cab10f4e752718',
      character: 'character:d2486e19423843a68c4acbf8643b8785',
      value: 'state:f01a941e41d64cc9b88cddd78426053b',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 1
    },
    {
      id: 'statement:cecf4473a46841269e3deb1e839df4c4',
      character: 'character:d2486e19423843a68c4acbf8643b8785',
      value: 'state:58b7b1776a494a8ebee3965551169925',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 0
    },
    {
      id: 'statement:56a9a90beadf4664acfa3bbd4f9f927e',
      character: 'character:d2486e19423843a68c4acbf8643b8785',
      value: 'state:58b7b1776a494a8ebee3965551169925',
      taxon: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      frequency: 1
    },
    {
      id: 'statement:5864e505b52b4253a68ecb3033f0d439',
      character: 'character:d2486e19423843a68c4acbf8643b8785',
      value: 'state:58b7b1776a494a8ebee3965551169925',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 0
    },
    {
      id: 'statement:ea8833cb78394375ba1053f3f81715a5',
      character: 'character:52b27c35b2094d47a0572b183a821a5f',
      value: 'state:b8f4aa70a72947feaf1d6d941005c9ce',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 0
    },
    {
      id: 'statement:aa107b53ee8349cc8bf07566800dc619',
      character: 'character:52b27c35b2094d47a0572b183a821a5f',
      value: 'state:b8f4aa70a72947feaf1d6d941005c9ce',
      taxon: 'taxon:7c8e4121e32f4425bb71eb3a2c50889e',
      frequency: 0
    },
    {
      id: 'statement:222ccc881e50413e8c46217e04fcae47',
      character: 'character:52b27c35b2094d47a0572b183a821a5f',
      value: 'state:b8f4aa70a72947feaf1d6d941005c9ce',
      taxon: 'taxon:3399e319022b4d2eba71dead20122af2',
      frequency: 1
    },
    {
      id: 'statement:923a064cd1bc423a8fd4e77521730540',
      character: 'character:52b27c35b2094d47a0572b183a821a5f',
      value: 'state:b8f4aa70a72947feaf1d6d941005c9ce',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 1
    },
    {
      id: 'statement:15879986affc4ea598afcc66bbf63c58',
      character: 'character:52b27c35b2094d47a0572b183a821a5f',
      value: 'state:11c09bb6e1114e0e8ed8d07b62dd393d',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 1
    },
    {
      id: 'statement:02cf126c9bc2400881fa75e58f8ea4cc',
      character: 'character:52b27c35b2094d47a0572b183a821a5f',
      value: 'state:11c09bb6e1114e0e8ed8d07b62dd393d',
      taxon: 'taxon:7c8e4121e32f4425bb71eb3a2c50889e',
      frequency: 0
    },
    {
      id: 'statement:a75d1132193145b3adf1abaefeed881a',
      character: 'character:52b27c35b2094d47a0572b183a821a5f',
      value: 'state:11c09bb6e1114e0e8ed8d07b62dd393d',
      taxon: 'taxon:3399e319022b4d2eba71dead20122af2',
      frequency: 0
    },
    {
      id: 'statement:634fe0b09f8b4dcbaf5b81ddb2e384b4',
      character: 'character:52b27c35b2094d47a0572b183a821a5f',
      value: 'state:11c09bb6e1114e0e8ed8d07b62dd393d',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 0
    },
    {
      id: 'statement:cde5bfa3ffbd47a89689939cd9268f34',
      character: 'character:52b27c35b2094d47a0572b183a821a5f',
      value: 'state:e8f5b6f51a2745ad95aecdd8ffdd2d18',
      taxon: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      frequency: 0
    },
    {
      id: 'statement:fe988a0d54db4c438b29b14690d0ed00',
      character: 'character:52b27c35b2094d47a0572b183a821a5f',
      value: 'state:e8f5b6f51a2745ad95aecdd8ffdd2d18',
      taxon: 'taxon:7c8e4121e32f4425bb71eb3a2c50889e',
      frequency: 1
    },
    {
      id: 'statement:2b6b6b2ad565495f9778f9851f991907',
      character: 'character:52b27c35b2094d47a0572b183a821a5f',
      value: 'state:e8f5b6f51a2745ad95aecdd8ffdd2d18',
      taxon: 'taxon:3399e319022b4d2eba71dead20122af2',
      frequency: 0
    },
    {
      id: 'statement:419617e2f49844fc897009ab361aa30b',
      character: 'character:52b27c35b2094d47a0572b183a821a5f',
      value: 'state:e8f5b6f51a2745ad95aecdd8ffdd2d18',
      taxon: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      frequency: 0
    },
    {
      id: 'statement:c72ed1e961b54b4086ac74af130e6000',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 1
    },
    {
      id: 'statement:10ef614aef5640bb9ab704d7811703c3',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 1
    },
    {
      id: 'statement:dd30765904f0444e8c404a2df7310a6c',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 1
    },
    {
      id: 'statement:1fbec711593945dda2b85b606376848c',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 1
    },
    {
      id: 'statement:291af53e55d6408da073ba0fd3b5356b',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 1
    },
    {
      id: 'statement:067c323a7b2143e98ec9c2b64f301249',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 1
    },
    {
      id: 'statement:95a1c789df064e6c9386205f1c93579c',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 1
    },
    {
      id: 'statement:c6871d8c54c0498dbb3c7b31b104af88',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 0
    },
    {
      id: 'statement:1f490879a12c45da9aef2a14a39e1170',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 0
    },
    {
      id: 'statement:5a77ab56bead48f4991df33ed2fbe32d',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 0
    },
    {
      id: 'statement:1ba6367c06cd44bcbfe32aa92943ff5a',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 0
    },
    {
      id: 'statement:e50114794f9e49ffb3a2fc2eedde5101',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 0
    },
    {
      id: 'statement:1e600160f89e4c1a9d8e76fe9d83927e',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 0
    },
    {
      id: 'statement:71dae4a7e9d647a0a16ec5c3781d9061',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 0
    },
    {
      id: 'statement:dd6203a093d34a788c111289e7ea56d5',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0
    },
    {
      id: 'statement:d790e481159b411f8b0add69da58f3af',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0
    },
    {
      id: 'statement:59679d2aadd64964a56438a7d3e7bf1d',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0
    },
    {
      id: 'statement:763b489f0493432bbbf8a75c99a8b0af',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 0
    },
    {
      id: 'statement:b3c7950a45ba4bc98dacd313247ef709',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0
    },
    {
      id: 'statement:0bd55ddfae134aeab3c895ce2ee3141e',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0
    },
    {
      id: 'statement:7a12a7931c6a42cc972243ef20529b8a',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:bd17fdc8de644beb8d9e6e76b06eb741',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:7e4486abac0147a4b893bf11c2267254',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:e83576585d5545d992cbe543f4564266',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0
    },
    {
      id: 'statement:18643bea082342d8adef6c992fa3ce14',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:18abf795d8ce491db0ba64d068f104da',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:5966546a128b4a29a4c86b5f225f019e',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:0b5aba36095746c1a9d419134a8082d6',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:c8647dfeb56548ab907be41c8033c258',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:325d6ef2190f41e1bb1e69d4e43c671b',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:2bb9a5f0a3b1423caaf9d70f2d709305',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 1
    },
    {
      id: 'statement:95ec7549e65e496680a0eda3a231a3eb',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 1
    },
    {
      id: 'statement:6f104d273592446fb292073d51b00f97',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 1
    },
    {
      id: 'statement:ff7b7746d6064972b79af6c99f4b23f8',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 1
    },
    {
      id: 'statement:9d459606599f4815b03b0930c4a07ec9',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 1
    },
    {
      id: 'statement:a3ee155595334d5ca76ac7416a4de1e1',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 1
    },
    {
      id: 'statement:6c648ed307c74951819be95acd18a2bb',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 1
    },
    {
      id: 'statement:7065bd5867fc49578a370090a1482740',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 1
    },
    {
      id: 'statement:970e600ae9fa47a7a8d93e6290149d3b',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 1
    },
    {
      id: 'statement:e0fdf9e021554a83a9868066688f3cf5',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 1
    },
    {
      id: 'statement:fb05a9ffe8dc4dbca5b77242adb93c3a',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 1
    },
    {
      id: 'statement:d9f8f58420384fe898cead35c0f47475',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 1
    },
    {
      id: 'statement:bd019e42b803460f89878838b5d8bf0a',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 1
    },
    {
      id: 'statement:2cc7d33362244b4497e82ca8e5b2c972',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 1
    },
    {
      id: 'statement:f51a8b3b0aec4b19949b45eb4050cee7',
      character: 'character:07a340ed905542efbfc222b0b040ead4',
      value: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 1
    },
    {
      id: 'statement:e360664279994cec99fe9f01fef91ab7',
      character: 'character:24df13ef12f14dc281852699aff79acf',
      value: 'state:6abdfe000ee740358241189a22f8601c',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0
    },
    {
      id: 'statement:2cc9cd237d284b749591ffa00817663c',
      character: 'character:24df13ef12f14dc281852699aff79acf',
      value: 'state:6abdfe000ee740358241189a22f8601c',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 0
    },
    {
      id: 'statement:7c2295d1ea144c7bb89beea8d32f6250',
      character: 'character:24df13ef12f14dc281852699aff79acf',
      value: 'state:6abdfe000ee740358241189a22f8601c',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 0
    },
    {
      id: 'statement:21e04de7471547a9a2101665bf5ed5d7',
      character: 'character:24df13ef12f14dc281852699aff79acf',
      value: 'state:6abdfe000ee740358241189a22f8601c',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 0
    },
    {
      id: 'statement:6de4dadfc4f844c99177d44810302e0c',
      character: 'character:24df13ef12f14dc281852699aff79acf',
      value: 'state:6abdfe000ee740358241189a22f8601c',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 1
    },
    {
      id: 'statement:1bfc72fb397c42468a4c6da13ec1c70e',
      character: 'character:24df13ef12f14dc281852699aff79acf',
      value: 'state:6abdfe000ee740358241189a22f8601c',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 1
    },
    {
      id: 'statement:6ff184943263451c9dcbdf392d8f7c01',
      character: 'character:24df13ef12f14dc281852699aff79acf',
      value: 'state:6abdfe000ee740358241189a22f8601c',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 1
    },
    {
      id: 'statement:49c5f3db9c404e25beb35eb242e0ff63',
      character: 'character:24df13ef12f14dc281852699aff79acf',
      value: 'state:6abdfe000ee740358241189a22f8601c',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 1
    },
    {
      id: 'statement:009a5a43a8d642cf92ba2208a32488b8',
      character: 'character:24df13ef12f14dc281852699aff79acf',
      value: 'state:6abdfe000ee740358241189a22f8601c',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 1
    },
    {
      id: 'statement:f0b233603e57436c866fae1be9c44c31',
      character: 'character:24df13ef12f14dc281852699aff79acf',
      value: 'state:f48f4804dc514efc99340fd9842b20af',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 1
    },
    {
      id: 'statement:e9f92ed4e8824403ad60aa0d3d2bbaaa',
      character: 'character:24df13ef12f14dc281852699aff79acf',
      value: 'state:f48f4804dc514efc99340fd9842b20af',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 1
    },
    {
      id: 'statement:d603d0ccb45f493c9e2706d23e285c64',
      character: 'character:24df13ef12f14dc281852699aff79acf',
      value: 'state:f48f4804dc514efc99340fd9842b20af',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 1
    },
    {
      id: 'statement:654755cce0c24013b75e4724be146ab8',
      character: 'character:24df13ef12f14dc281852699aff79acf',
      value: 'state:f48f4804dc514efc99340fd9842b20af',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 1
    },
    {
      id: 'statement:e9e911248bee4e3b903a60f3f84cf67c',
      character: 'character:24df13ef12f14dc281852699aff79acf',
      value: 'state:f48f4804dc514efc99340fd9842b20af',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 0
    },
    {
      id: 'statement:df2469a6ae054d51a29809ae38178cd3',
      character: 'character:24df13ef12f14dc281852699aff79acf',
      value: 'state:f48f4804dc514efc99340fd9842b20af',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 0
    },
    {
      id: 'statement:74800a47396747ba9db2e78762f9649c',
      character: 'character:24df13ef12f14dc281852699aff79acf',
      value: 'state:f48f4804dc514efc99340fd9842b20af',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0
    },
    {
      id: 'statement:0d683cd14b7040e5b130954c47639123',
      character: 'character:24df13ef12f14dc281852699aff79acf',
      value: 'state:f48f4804dc514efc99340fd9842b20af',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0
    },
    {
      id: 'statement:5bb03daad8c544aaaefb70b841b6230e',
      character: 'character:24df13ef12f14dc281852699aff79acf',
      value: 'state:f48f4804dc514efc99340fd9842b20af',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0
    },
    {
      id: 'statement:01a15f8768e6474e8a0e848b16251231',
      character: 'character:6fac591531ab4d82b28bfdf9eccac722',
      value: 'state:5832ef931eea4edfa7a3c0eb817b20a9',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0
    },
    {
      id: 'statement:054628d82587463ea8a33ad0bad9115c',
      character: 'character:6fac591531ab4d82b28bfdf9eccac722',
      value: 'state:5832ef931eea4edfa7a3c0eb817b20a9',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 1
    },
    {
      id: 'statement:d86daa9da9a04f04b454876125cda287',
      character: 'character:6fac591531ab4d82b28bfdf9eccac722',
      value: 'state:5832ef931eea4edfa7a3c0eb817b20a9',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 0
    },
    {
      id: 'statement:0789000fdb724e2d9e1a10c64c222384',
      character: 'character:6fac591531ab4d82b28bfdf9eccac722',
      value: 'state:5832ef931eea4edfa7a3c0eb817b20a9',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 0
    },
    {
      id: 'statement:450c776bf9124660873b984b041ab41c',
      character: 'character:6fac591531ab4d82b28bfdf9eccac722',
      value: 'state:5ee844a61f32446fa4d042da2281e10b',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 1
    },
    {
      id: 'statement:3061b62c978841bbb35ec3f7798e3fd8',
      character: 'character:6fac591531ab4d82b28bfdf9eccac722',
      value: 'state:5ee844a61f32446fa4d042da2281e10b',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 0
    },
    {
      id: 'statement:c4daab3f976046b7ac537617f447d70e',
      character: 'character:6fac591531ab4d82b28bfdf9eccac722',
      value: 'state:5ee844a61f32446fa4d042da2281e10b',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 1
    },
    {
      id: 'statement:b89eb50078894083a1b617729ca2d416',
      character: 'character:6fac591531ab4d82b28bfdf9eccac722',
      value: 'state:5ee844a61f32446fa4d042da2281e10b',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 1
    },
    {
      id: 'statement:73f6ec90c1bb4767948d5d325992129f',
      character: 'character:221e73d7938548c4b13167bd0eaef7c6',
      value: 'state:12112b5dc21a4191b08d097150fb68ca',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 0
    },
    {
      id: 'statement:04e8daf46a3e4a09be7b8ca0dfc8b171',
      character: 'character:221e73d7938548c4b13167bd0eaef7c6',
      value: 'state:12112b5dc21a4191b08d097150fb68ca',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 0
    },
    {
      id: 'statement:6d53ba23dfbd41a6832d4c14389ac993',
      character: 'character:221e73d7938548c4b13167bd0eaef7c6',
      value: 'state:12112b5dc21a4191b08d097150fb68ca',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 1
    },
    {
      id: 'statement:5844c0ba250049b49ff69ef39ce73437',
      character: 'character:221e73d7938548c4b13167bd0eaef7c6',
      value: 'state:12112b5dc21a4191b08d097150fb68ca',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 1
    },
    {
      id: 'statement:83ca8f9dd7ce48b3b8e3ecb6911e1175',
      character: 'character:221e73d7938548c4b13167bd0eaef7c6',
      value: 'state:9105835be71a447a9adc4283c74a57af',
      taxon: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      frequency: 1
    },
    {
      id: 'statement:526968a029d1498e921cef0a052e9cfd',
      character: 'character:221e73d7938548c4b13167bd0eaef7c6',
      value: 'state:9105835be71a447a9adc4283c74a57af',
      taxon: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      frequency: 1
    },
    {
      id: 'statement:d921a520b275452d97c7952b5168e6cf',
      character: 'character:221e73d7938548c4b13167bd0eaef7c6',
      value: 'state:9105835be71a447a9adc4283c74a57af',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 0
    },
    {
      id: 'statement:de950327914c4388aa167f5f21b54136',
      character: 'character:221e73d7938548c4b13167bd0eaef7c6',
      value: 'state:9105835be71a447a9adc4283c74a57af',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 0
    },
    {
      id: 'statement:69e39ca71d684abe8409c71997920187',
      character: 'character:d21ad4fe6bb04233b65647a5bc21c2a0',
      value: 'state:b3eaebef4d7f4ff5b2355fa8289528a9',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 1
    },
    {
      id: 'statement:c2548db6b1ec437f9cdb5dfb93942e8f',
      character: 'character:d21ad4fe6bb04233b65647a5bc21c2a0',
      value: 'state:b3eaebef4d7f4ff5b2355fa8289528a9',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 0
    },
    {
      id: 'statement:74c694dd15364a3c9d75ede46c1d032c',
      character: 'character:d21ad4fe6bb04233b65647a5bc21c2a0',
      value: 'state:78f8d51ea83545a5b09288d67ab8105a',
      taxon: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      frequency: 0
    },
    {
      id: 'statement:bbb5045c14ef4e1c8d2db37361eee8c6',
      character: 'character:d21ad4fe6bb04233b65647a5bc21c2a0',
      value: 'state:78f8d51ea83545a5b09288d67ab8105a',
      taxon: 'taxon:243675aec777454883872f4a925bf917',
      frequency: 1
    },
    {
      id: 'statement:479fb08ce1df4f8a8d54c1987c82a221',
      character: 'character:86ad6e44df2d4b249a61e48a6a816dae',
      value: 'state:e295203678c64f71897de6f6a29ed602',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 1
    },
    {
      id: 'statement:92e5b6ccf87a4d2cac0cbe1864ef0932',
      character: 'character:86ad6e44df2d4b249a61e48a6a816dae',
      value: 'state:e295203678c64f71897de6f6a29ed602',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 1
    },
    {
      id: 'statement:bf38dc5cc9364e8ba2ac8a70a3e649d2',
      character: 'character:86ad6e44df2d4b249a61e48a6a816dae',
      value: 'state:e295203678c64f71897de6f6a29ed602',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0
    },
    {
      id: 'statement:3a7c277a323d4cf2894df4b94a65809b',
      character: 'character:86ad6e44df2d4b249a61e48a6a816dae',
      value: 'state:e295203678c64f71897de6f6a29ed602',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0
    },
    {
      id: 'statement:af47cacfe15a4d3da9160d419d9d82b5',
      character: 'character:86ad6e44df2d4b249a61e48a6a816dae',
      value: 'state:e295203678c64f71897de6f6a29ed602',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0
    },
    {
      id: 'statement:4679e5d60eff45328edc28d5c9918554',
      character: 'character:86ad6e44df2d4b249a61e48a6a816dae',
      value: 'state:7c198e4933f943c2915a2154db9b525f',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 0
    },
    {
      id: 'statement:bf044f2dd8624272a889ddafc63205f9',
      character: 'character:86ad6e44df2d4b249a61e48a6a816dae',
      value: 'state:7c198e4933f943c2915a2154db9b525f',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 0
    },
    {
      id: 'statement:6ccd1e5b3623441bbb78fce0c27c7c12',
      character: 'character:86ad6e44df2d4b249a61e48a6a816dae',
      value: 'state:7c198e4933f943c2915a2154db9b525f',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 1
    },
    {
      id: 'statement:be271ff544f143ebbbe4b30194fc8961',
      character: 'character:86ad6e44df2d4b249a61e48a6a816dae',
      value: 'state:7c198e4933f943c2915a2154db9b525f',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 1
    },
    {
      id: 'statement:349795561832455999ae1fb50daa7ec8',
      character: 'character:86ad6e44df2d4b249a61e48a6a816dae',
      value: 'state:7c198e4933f943c2915a2154db9b525f',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 1
    },
    {
      id: 'statement:e6758b3cd4294d9c83ca7d2f8d44ee16',
      character: 'character:40cb623df43b4cb88643a93a745ad7a1',
      value: 'state:cc9b5757b2b94c53bbb6e54017e56224',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 0
    },
    {
      id: 'statement:ad133e99302d431b878638205a21356a',
      character: 'character:40cb623df43b4cb88643a93a745ad7a1',
      value: 'state:cc9b5757b2b94c53bbb6e54017e56224',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 1
    },
    {
      id: 'statement:468eb3ea23a04de0a66ddfd25491d401',
      character: 'character:40cb623df43b4cb88643a93a745ad7a1',
      value: 'state:a3642e7d484e41208aa90dcb69b04ac1',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 1
    },
    {
      id: 'statement:ca75cec965ca4dbdae990d2636882ef1',
      character: 'character:40cb623df43b4cb88643a93a745ad7a1',
      value: 'state:a3642e7d484e41208aa90dcb69b04ac1',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 0
    },
    {
      id: 'statement:d31c418b19374e38a264f3015a8c73fb',
      character: 'character:9728394fdc86455f83bdcec5b0b45575',
      value: 'state:9b3ffae0606b47358a4c3268185f0e9d',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 0
    },
    {
      id: 'statement:e892210d2cab40b38fe1eb16d3b0b0de',
      character: 'character:9728394fdc86455f83bdcec5b0b45575',
      value: 'state:9b3ffae0606b47358a4c3268185f0e9d',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 1
    },
    {
      id: 'statement:847bd085f2344ebdb67a3b02dda6662a',
      character: 'character:9728394fdc86455f83bdcec5b0b45575',
      value: 'state:ebe18f1d5e534f2faabb3155178269bb',
      taxon: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      frequency: 1
    },
    {
      id: 'statement:2e17525ed2ba4b7dafae2dadbeafd1bf',
      character: 'character:9728394fdc86455f83bdcec5b0b45575',
      value: 'state:ebe18f1d5e534f2faabb3155178269bb',
      taxon: 'taxon:6038c1e234524f1c89120377247c442a',
      frequency: 0
    },
    {
      id: 'statement:9e901891a7ad44358381386e1ec413fa',
      character: 'character:30b2df2a3f8b4c409c8a58ee6fa24210',
      value: 'state:c7abd704b79c4727863f3d6939e4d1b6',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0
    },
    {
      id: 'statement:754872f3353446ceb4f59619dc957345',
      character: 'character:30b2df2a3f8b4c409c8a58ee6fa24210',
      value: 'state:c7abd704b79c4727863f3d6939e4d1b6',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0
    },
    {
      id: 'statement:93c3c29ef43543129761d587acade5f5',
      character: 'character:30b2df2a3f8b4c409c8a58ee6fa24210',
      value: 'state:c7abd704b79c4727863f3d6939e4d1b6',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 1
    },
    {
      id: 'statement:3adcccd3018d4b6da1003c1aeeacb098',
      character: 'character:30b2df2a3f8b4c409c8a58ee6fa24210',
      value: 'state:3086a8b0adcb4f72b2a6632330813e43',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 1
    },
    {
      id: 'statement:5ced54d4f3444fb59c9542a76934ea92',
      character: 'character:30b2df2a3f8b4c409c8a58ee6fa24210',
      value: 'state:3086a8b0adcb4f72b2a6632330813e43',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 1
    },
    {
      id: 'statement:9e322fec249749df8753fc2ad18626ab',
      character: 'character:30b2df2a3f8b4c409c8a58ee6fa24210',
      value: 'state:3086a8b0adcb4f72b2a6632330813e43',
      taxon: 'taxon:846505985b2c49b795d3d37f6100d68c',
      frequency: 0
    },
    {
      id: 'statement:7bb8d2964b864feeb2b3d918a67a5b4b',
      character: 'character:bfba8f60cbf7482eb93cf69c3e7b1fbd',
      value: 'state:66433fa49d994eb887a172a391c1c480',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 1
    },
    {
      id: 'statement:fd34bfaf4c3e4b5daa250aedde8c4955',
      character: 'character:bfba8f60cbf7482eb93cf69c3e7b1fbd',
      value: 'state:66433fa49d994eb887a172a391c1c480',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 0
    },
    {
      id: 'statement:8907d722c6054e398bc0ba9e84cf04c4',
      character: 'character:bfba8f60cbf7482eb93cf69c3e7b1fbd',
      value: 'state:1c3373b7f8004073b05cc8c2e9f7ce0e',
      taxon: 'taxon:68a4263694c0459b8cedf63ae0696868',
      frequency: 0
    },
    {
      id: 'statement:c721c0dfc06d4c239540a2d8b172eada',
      character: 'character:bfba8f60cbf7482eb93cf69c3e7b1fbd',
      value: 'state:1c3373b7f8004073b05cc8c2e9f7ce0e',
      taxon: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      frequency: 1
    },
    {
      id: 'statement:c23a994d36c142b98b480dccb7cbd22a',
      character: 'character:8bd603d317204fe6a6f8642a612a3fea',
      value: 'state:a4066f75313d4dc783da59ea733d7e58',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 1
    },
    {
      id: 'statement:015dd2be7b6c4872a2a6f555b61ae694',
      character: 'character:8bd603d317204fe6a6f8642a612a3fea',
      value: 'state:a4066f75313d4dc783da59ea733d7e58',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:681f864610ea418c9254536429800b92',
      character: 'character:8bd603d317204fe6a6f8642a612a3fea',
      value: 'state:a4066f75313d4dc783da59ea733d7e58',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:ceed19f968104ef6abe9716ada1f98e7',
      character: 'character:8bd603d317204fe6a6f8642a612a3fea',
      value: 'state:a4066f75313d4dc783da59ea733d7e58',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:b33925219c7149a79aca40e29971f2b5',
      character: 'character:8bd603d317204fe6a6f8642a612a3fea',
      value: 'state:a4066f75313d4dc783da59ea733d7e58',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:c53a0a6d5de2404084e7278f49dab938',
      character: 'character:8bd603d317204fe6a6f8642a612a3fea',
      value: 'state:a4066f75313d4dc783da59ea733d7e58',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:0c903cea58d0406aa529c0f85334def7',
      character: 'character:8bd603d317204fe6a6f8642a612a3fea',
      value: 'state:12ba8539cb7d4c49b87d2f55d452469a',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:954761bbc3ed40489880debd2c4ca8e3',
      character: 'character:8bd603d317204fe6a6f8642a612a3fea',
      value: 'state:12ba8539cb7d4c49b87d2f55d452469a',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:610771d21ab942058e43af98bf44d9dc',
      character: 'character:8bd603d317204fe6a6f8642a612a3fea',
      value: 'state:12ba8539cb7d4c49b87d2f55d452469a',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 1
    },
    {
      id: 'statement:bc88f47eb6634804a4135090dd4b990d',
      character: 'character:8bd603d317204fe6a6f8642a612a3fea',
      value: 'state:12ba8539cb7d4c49b87d2f55d452469a',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 1
    },
    {
      id: 'statement:de4e629b10794c849e10d9988ecefbad',
      character: 'character:8bd603d317204fe6a6f8642a612a3fea',
      value: 'state:12ba8539cb7d4c49b87d2f55d452469a',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 1
    },
    {
      id: 'statement:042ce5c3146744dea2cffacf438ab145',
      character: 'character:8bd603d317204fe6a6f8642a612a3fea',
      value: 'state:12ba8539cb7d4c49b87d2f55d452469a',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 1
    },
    {
      id: 'statement:667e7a9a188747068d2ef1c1b6cc7df3',
      character: 'character:8bd603d317204fe6a6f8642a612a3fea',
      value: 'state:23cff9f9dedf4c72b796a13eb0f7e8b1',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:4ee7ab94bc6d40dba6c1153bf4440451',
      character: 'character:8bd603d317204fe6a6f8642a612a3fea',
      value: 'state:23cff9f9dedf4c72b796a13eb0f7e8b1',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 1
    },
    {
      id: 'statement:0c07ac3384614a05853fc46d003ca29c',
      character: 'character:8bd603d317204fe6a6f8642a612a3fea',
      value: 'state:23cff9f9dedf4c72b796a13eb0f7e8b1',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:c762a13182a34e7abfcdff38c0cbb5f5',
      character: 'character:8bd603d317204fe6a6f8642a612a3fea',
      value: 'state:23cff9f9dedf4c72b796a13eb0f7e8b1',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:e5437fb8fb7442a898f9b890912a829b',
      character: 'character:8bd603d317204fe6a6f8642a612a3fea',
      value: 'state:23cff9f9dedf4c72b796a13eb0f7e8b1',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:a3c3635f679b48b9bd53ed01779792f2',
      character: 'character:8bd603d317204fe6a6f8642a612a3fea',
      value: 'state:23cff9f9dedf4c72b796a13eb0f7e8b1',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:c2f61a015f184bb9837c35b9b837cee9',
      character: 'character:f25e0cb427544f84a2c666cba2cf8feb',
      value: 'state:8f21f24bac7b408e9deb7904efdac988',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 1
    },
    {
      id: 'statement:a068b21f208b4782badd9a4cfad31fc5',
      character: 'character:f25e0cb427544f84a2c666cba2cf8feb',
      value: 'state:8f21f24bac7b408e9deb7904efdac988',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:42b366a5041840cab781508d6a4ff3a7',
      character: 'character:f25e0cb427544f84a2c666cba2cf8feb',
      value: 'state:8f21f24bac7b408e9deb7904efdac988',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:f93c5b2b23864acea22c348644f28273',
      character: 'character:f25e0cb427544f84a2c666cba2cf8feb',
      value: 'state:8f21f24bac7b408e9deb7904efdac988',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:20dbf3faf04946ac810212928232d9ae',
      character: 'character:f25e0cb427544f84a2c666cba2cf8feb',
      value: 'state:8f21f24bac7b408e9deb7904efdac988',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:8ad8b76150d74f23b84d254a8b27cd37',
      character: 'character:f25e0cb427544f84a2c666cba2cf8feb',
      value: 'state:8f21f24bac7b408e9deb7904efdac988',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:4bcd1ea74acf4a0e99476355614ec183',
      character: 'character:f25e0cb427544f84a2c666cba2cf8feb',
      value: 'state:6e2a65dd0b9749baacb6d747d175998f',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:70c628a2da0a4998aaa6df0524bb618e',
      character: 'character:f25e0cb427544f84a2c666cba2cf8feb',
      value: 'state:6e2a65dd0b9749baacb6d747d175998f',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 1
    },
    {
      id: 'statement:2b3e512fae8e4611bcc5f1665c300ead',
      character: 'character:f25e0cb427544f84a2c666cba2cf8feb',
      value: 'state:6e2a65dd0b9749baacb6d747d175998f',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 1
    },
    {
      id: 'statement:3868ae97326d4db3a0d7dff5666107e2',
      character: 'character:f25e0cb427544f84a2c666cba2cf8feb',
      value: 'state:6e2a65dd0b9749baacb6d747d175998f',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 1
    },
    {
      id: 'statement:fee1f9f5bad94758b53367de2eb6600f',
      character: 'character:f25e0cb427544f84a2c666cba2cf8feb',
      value: 'state:6e2a65dd0b9749baacb6d747d175998f',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 1
    },
    {
      id: 'statement:83ec893d2f8f47a0b1b8862793e7a21c',
      character: 'character:f25e0cb427544f84a2c666cba2cf8feb',
      value: 'state:6e2a65dd0b9749baacb6d747d175998f',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 1
    },
    {
      id: 'statement:f3218babe2604c3da0845acb00b01b25',
      character: 'character:a31a2c895be04dafab6301e958552988',
      value: 'state:b61672f82a4e45e689f3af8a4f5f2e3c',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:a6d1fc2b950a4aa69bd89df6f9ba5a48',
      character: 'character:a31a2c895be04dafab6301e958552988',
      value: 'state:b61672f82a4e45e689f3af8a4f5f2e3c',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:70fe3dae2871488cb1322a69c353beea',
      character: 'character:a31a2c895be04dafab6301e958552988',
      value: 'state:b61672f82a4e45e689f3af8a4f5f2e3c',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:42e833bc75b5408e84cbbd8e56b58378',
      character: 'character:a31a2c895be04dafab6301e958552988',
      value: 'state:b61672f82a4e45e689f3af8a4f5f2e3c',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 1
    },
    {
      id: 'statement:3ea657693e834b1c9e6899f8f3298bb9',
      character: 'character:a31a2c895be04dafab6301e958552988',
      value: 'state:b61672f82a4e45e689f3af8a4f5f2e3c',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:20560a49f93146bcbbc0513cc5ffae04',
      character: 'character:a31a2c895be04dafab6301e958552988',
      value: 'state:b61672f82a4e45e689f3af8a4f5f2e3c',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:7a21bbe8fdae45ec910f3295be954812',
      character: 'character:a31a2c895be04dafab6301e958552988',
      value: 'state:d1c739afe8a24df79da2724e6dd4a042',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:18118840f6324d40a197459a1daa29f0',
      character: 'character:a31a2c895be04dafab6301e958552988',
      value: 'state:d1c739afe8a24df79da2724e6dd4a042',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 1
    },
    {
      id: 'statement:5ab651021bbe467b92ca49b2d7b2cd14',
      character: 'character:a31a2c895be04dafab6301e958552988',
      value: 'state:d1c739afe8a24df79da2724e6dd4a042',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 1
    },
    {
      id: 'statement:58c7c95997b54f1faaf7c604541ee5d6',
      character: 'character:a31a2c895be04dafab6301e958552988',
      value: 'state:d1c739afe8a24df79da2724e6dd4a042',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:59f3667a28e64eb2bd4650ab1dfdf8d2',
      character: 'character:a31a2c895be04dafab6301e958552988',
      value: 'state:d1c739afe8a24df79da2724e6dd4a042',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:a105e2d48e1b4c07bbc10e6925529864',
      character: 'character:a31a2c895be04dafab6301e958552988',
      value: 'state:d1c739afe8a24df79da2724e6dd4a042',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:367ea3a6a6724589bad0eecec19d55bf',
      character: 'character:a31a2c895be04dafab6301e958552988',
      value: 'state:a885e56dca3343548419b6a520273679',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 1
    },
    {
      id: 'statement:8525531f53424b05902e02d242abf239',
      character: 'character:a31a2c895be04dafab6301e958552988',
      value: 'state:a885e56dca3343548419b6a520273679',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:b16121c9ca25492aae7bd1b25fde50d9',
      character: 'character:a31a2c895be04dafab6301e958552988',
      value: 'state:a885e56dca3343548419b6a520273679',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:edda7589384b41f49201bd0aefa765e1',
      character: 'character:a31a2c895be04dafab6301e958552988',
      value: 'state:a885e56dca3343548419b6a520273679',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:0c4255bd518c4eeab69002a858682876',
      character: 'character:a31a2c895be04dafab6301e958552988',
      value: 'state:a885e56dca3343548419b6a520273679',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 1
    },
    {
      id: 'statement:80aad43223744e8aab7a6b5c9f79d640',
      character: 'character:a31a2c895be04dafab6301e958552988',
      value: 'state:a885e56dca3343548419b6a520273679',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 1
    },
    {
      id: 'statement:3d3aaa1f419641f2bbef0b2764005480',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:30446f84cc9b400ca935c642fec819a8',
      taxon: 'taxon:67458bb052894f4681aa4126d8d35c86',
      frequency: 1
    },
    {
      id: 'statement:d4a336853cf8416aa7369677dc01beb0',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:30446f84cc9b400ca935c642fec819a8',
      taxon: 'taxon:36af041484ce4685831553f0bd906a40',
      frequency: 0
    },
    {
      id: 'statement:c28dafc816c2485dad9b2602a1708802',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:30446f84cc9b400ca935c642fec819a8',
      taxon: 'taxon:c059f0052b304adbbcff33929b05e2ac',
      frequency: 1
    },
    {
      id: 'statement:554324f222214ccea3ea51476ba59b6f',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:30446f84cc9b400ca935c642fec819a8',
      taxon: 'taxon:581d17fb9f5d47b2812cf5e50937d0e3',
      frequency: 0
    },
    {
      id: 'statement:ee019a33984449289091610723568544',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:30446f84cc9b400ca935c642fec819a8',
      taxon: 'taxon:c3e334d30ad2429783efb8d1e4efa8ff',
      frequency: 1
    },
    {
      id: 'statement:e906c2c9d4db40088c5443c133ac87ea',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:30446f84cc9b400ca935c642fec819a8',
      taxon: 'taxon:7697589c779a4b9d9a3ecd7510bc3eb6',
      frequency: 0
    },
    {
      id: 'statement:38519eb11fd84bafbf1e87fa4daae734',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:30446f84cc9b400ca935c642fec819a8',
      taxon: 'taxon:54efd5bb862649fea957cd9fdee610c2',
      frequency: 1
    },
    {
      id: 'statement:63b5ceb3a1ca42eca59f2eab8addfc20',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:30446f84cc9b400ca935c642fec819a8',
      taxon: 'taxon:7df747f7bf144e93b36c90db0efb11aa',
      frequency: 0
    },
    {
      id: 'statement:eab03dfe0b9e4f29aec6f0788488b7a5',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:30446f84cc9b400ca935c642fec819a8',
      taxon: 'taxon:c62dc3063cf540ac8257806fd28a2458',
      frequency: 1
    },
    {
      id: 'statement:f3f7d196a44f45239ffd3f2c0d986b2d',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:30446f84cc9b400ca935c642fec819a8',
      taxon: 'taxon:42d5f08f60ca466abf13dc4e0e4502f2',
      frequency: 0
    },
    {
      id: 'statement:f2aa501e93344f27bbdcb7f8e2038655',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:30446f84cc9b400ca935c642fec819a8',
      taxon: 'taxon:02db0784ddd443e3bc5242cea06d6a2d',
      frequency: 1
    },
    {
      id: 'statement:61cb066e82784e8699e4262dd2eff76e',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:30446f84cc9b400ca935c642fec819a8',
      taxon: 'taxon:e8aeb9fe7a9c47ee8ce9bbe06496cf6f',
      frequency: 0
    },
    {
      id: 'statement:12bc5d9dc9f044b9b537fbad93121eb1',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:f40235986e234e2b8a96b928d8e6977f',
      taxon: 'taxon:67458bb052894f4681aa4126d8d35c86',
      frequency: 0
    },
    {
      id: 'statement:30f635dec7b64a2a895ca190358e47bc',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:f40235986e234e2b8a96b928d8e6977f',
      taxon: 'taxon:36af041484ce4685831553f0bd906a40',
      frequency: 1
    },
    {
      id: 'statement:40f6d144b61647e89c832d63bbde5eae',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:f40235986e234e2b8a96b928d8e6977f',
      taxon: 'taxon:c059f0052b304adbbcff33929b05e2ac',
      frequency: 0
    },
    {
      id: 'statement:f884de79df334c818100636b2a6ca91f',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:f40235986e234e2b8a96b928d8e6977f',
      taxon: 'taxon:581d17fb9f5d47b2812cf5e50937d0e3',
      frequency: 1
    },
    {
      id: 'statement:34934483c825438d89c02f453051a368',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:f40235986e234e2b8a96b928d8e6977f',
      taxon: 'taxon:c3e334d30ad2429783efb8d1e4efa8ff',
      frequency: 0
    },
    {
      id: 'statement:b5f99a43d7d046cc8ac6a9c8cf766a09',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:f40235986e234e2b8a96b928d8e6977f',
      taxon: 'taxon:7697589c779a4b9d9a3ecd7510bc3eb6',
      frequency: 1
    },
    {
      id: 'statement:56262fc9c48a471495010b8de0abf74e',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:f40235986e234e2b8a96b928d8e6977f',
      taxon: 'taxon:54efd5bb862649fea957cd9fdee610c2',
      frequency: 0
    },
    {
      id: 'statement:58a935c9c4ad4683bcc7de23987f2bc4',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:f40235986e234e2b8a96b928d8e6977f',
      taxon: 'taxon:7df747f7bf144e93b36c90db0efb11aa',
      frequency: 1
    },
    {
      id: 'statement:ede3bf56a44f4eb68735c4111d612d07',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:f40235986e234e2b8a96b928d8e6977f',
      taxon: 'taxon:c62dc3063cf540ac8257806fd28a2458',
      frequency: 0
    },
    {
      id: 'statement:20f85dfe069744ddbea1ab942f4754a4',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:f40235986e234e2b8a96b928d8e6977f',
      taxon: 'taxon:42d5f08f60ca466abf13dc4e0e4502f2',
      frequency: 1
    },
    {
      id: 'statement:311f9771710a4acfa01c97fb6711f39b',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:f40235986e234e2b8a96b928d8e6977f',
      taxon: 'taxon:02db0784ddd443e3bc5242cea06d6a2d',
      frequency: 0
    },
    {
      id: 'statement:8f8708a8e4034c7c860440356b7979f3',
      character: 'character:f72358dceeaf467ab2549655798488f3',
      value: 'state:f40235986e234e2b8a96b928d8e6977f',
      taxon: 'taxon:e8aeb9fe7a9c47ee8ce9bbe06496cf6f',
      frequency: 1
    },
    {
      id: 'statement:0ffe8f507fee45c29d4acd41c72a1a07',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:7a3890e3d9894aca9045c7737fe1fd94',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 1
    },
    {
      id: 'statement:c0a3a074c6474d60976e5fcadbd5786d',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:7a3890e3d9894aca9045c7737fe1fd94',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:726bfd8c46d44f68a870df85e528f21f',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:7a3890e3d9894aca9045c7737fe1fd94',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:11e14a9112ab4d11b9d754e346ef26b0',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:7a3890e3d9894aca9045c7737fe1fd94',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:2d306eae1bf043d49f553865767033f7',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:7a3890e3d9894aca9045c7737fe1fd94',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:4c8346af046f41cd8695eec5614c1b70',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:7a3890e3d9894aca9045c7737fe1fd94',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:8102d49441ad49779a4034de41081b73',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:9340f8d8ab3e493fa5f945c5bc70c950',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:16273858ac8049238505afdf7320fdd0',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:9340f8d8ab3e493fa5f945c5bc70c950',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:8c3dec6d6fb7493f818f775ef90ec77f',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:9340f8d8ab3e493fa5f945c5bc70c950',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:3e3301bdfbd8436c874b95afc35716d8',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:9340f8d8ab3e493fa5f945c5bc70c950',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 1
    },
    {
      id: 'statement:bda7ccce560b4151b13c9aa05b6cefb8',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:9340f8d8ab3e493fa5f945c5bc70c950',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:75d9946a61224b148571cde1275b9db3',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:9340f8d8ab3e493fa5f945c5bc70c950',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:53347b99a876439d8968ca9da6c4a259',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:7f51ff853cb346b6a8b33bc87809d86b',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:d17bde0ba9c64778adeb2730df8018d1',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:7f51ff853cb346b6a8b33bc87809d86b',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:995e40acb1c44ac4acaab526270e4058',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:7f51ff853cb346b6a8b33bc87809d86b',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 1
    },
    {
      id: 'statement:2ae29bd8d5cb47a4bc1aeac768d60a1d',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:7f51ff853cb346b6a8b33bc87809d86b',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:87aac34ce1e14ee28dae20c6ca2e4eda',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:7f51ff853cb346b6a8b33bc87809d86b',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:bb66391903374f34b43f16ba2c500499',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:7f51ff853cb346b6a8b33bc87809d86b',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:39c487da8b9f4c69b342dfc8222b3cd4',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:75ec652e91424e54877a7d18148bc269',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:0cfdfd7119734ecfbd71ac27eee1490a',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:75ec652e91424e54877a7d18148bc269',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 1
    },
    {
      id: 'statement:965c94d534f143559ec0a5a15460e66f',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:75ec652e91424e54877a7d18148bc269',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:d9cf652faa174ac0ad6a2fb2bf6e53ac',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:75ec652e91424e54877a7d18148bc269',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:ddaace6e8ba74d4986a1f24995928b19',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:75ec652e91424e54877a7d18148bc269',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:f18904aae3554b84ba235a134d11b45f',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:75ec652e91424e54877a7d18148bc269',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:d714464e499246878e9781f0d8d2c298',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:4e2f5bed34ec4e5684809638e3fbe173',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:8b1c2e09bb0b45b9aa3a186c5a57043b',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:4e2f5bed34ec4e5684809638e3fbe173',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:c4d225a9460f4257b6ba9fb027cfb79e',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:4e2f5bed34ec4e5684809638e3fbe173',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:13e7b6b044ef4d3296d60cd822d0edcf',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:4e2f5bed34ec4e5684809638e3fbe173',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:38659f34d55a401d825e6d271d20d8dc',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:4e2f5bed34ec4e5684809638e3fbe173',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 0
    },
    {
      id: 'statement:d1775926783a4627ae0bb63d99948d05',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:4e2f5bed34ec4e5684809638e3fbe173',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 1
    },
    {
      id: 'statement:94ee70a708bf467fa13dc1221e89dbb6',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:51e491e9f65349eeaed43472eb2e77ee',
      taxon: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      frequency: 0
    },
    {
      id: 'statement:87e7e4c8efe54fcfb64d438c245dc88e',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:51e491e9f65349eeaed43472eb2e77ee',
      taxon: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      frequency: 0
    },
    {
      id: 'statement:4821676a075441c689b6b33e13b75dbf',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:51e491e9f65349eeaed43472eb2e77ee',
      taxon: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      frequency: 0
    },
    {
      id: 'statement:7f35b924121a4e60b1f7f0c70722fa76',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:51e491e9f65349eeaed43472eb2e77ee',
      taxon: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      frequency: 0
    },
    {
      id: 'statement:75847574d8554b1d83bd65050888f3d2',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:51e491e9f65349eeaed43472eb2e77ee',
      taxon: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      frequency: 1
    },
    {
      id: 'statement:4a803cd38eea493ea444efaf5dad651e',
      character: 'character:626439c25cc844c5aad6d76d1b3fb425',
      value: 'state:51e491e9f65349eeaed43472eb2e77ee',
      taxon: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      frequency: 0
    },
    {
      id: 'statement:5a22db3e347342c0aa851e3c06639b32',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 1
    },
    {
      id: 'statement:be5e6b7b73e74ed4b247167551539069',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 1
    },
    {
      id: 'statement:f50ca29ae7fa4387a632acda70fceaaa',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 1
    },
    {
      id: 'statement:cb1044e009d844d7aa2859fa7d0000d9',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 1
    },
    {
      id: 'statement:ccfd455d721c49d99b6f7cb1288adcdd',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 1
    },
    {
      id: 'statement:11b1c6b670f64d11ba7c181ea892bd93',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 1
    },
    {
      id: 'statement:03f4fd4dda08415b99033440a02bbb6a',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 1
    },
    {
      id: 'statement:ab971d9fcccc4aaeac7c8dc705d577ed',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 1
    },
    {
      id: 'statement:ce47f62aa05547dbae44f587449c493d',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 1
    },
    {
      id: 'statement:b22988b008344715a1dda0f6977453e5',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 1
    },
    {
      id: 'statement:ba3a4c8f9db2473c8859cbfc5ce997a5',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 1
    },
    {
      id: 'statement:b1faf01891504cc4b45b41ecad54650a',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 1
    },
    {
      id: 'statement:db20568fcf3f4fbf8eb6c922c36e5634',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 1
    },
    {
      id: 'statement:bf2e216b57ea46549d84ac974fcd9556',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 1
    },
    {
      id: 'statement:986b241a0adb4264ad86033565266afb',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 0
    },
    {
      id: 'statement:d38a5b8245ff4a7e86af4527e9f05ec4',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0
    },
    {
      id: 'statement:d01b1aa1782c48e2a3089a3194ef7f87',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0
    },
    {
      id: 'statement:c57d7e31818146b08074a759f8f9886d',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:03893f1009884cbd9c93af927dd4f0d7',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:067b2fde2e894b858c5b686e15864c4b',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:da1b6c9100c74a068c133a9d70593d92',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      frequency: 0
    },
    {
      id: 'statement:59d5e71a2f5c44aeb3f1950b56559019',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      frequency: 0
    },
    {
      id: 'statement:de3b7686f57c4cd884be8f151aa4535e',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      frequency: 0
    },
    {
      id: 'statement:7a2f14003dac440eabe5af8cba78979f',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      frequency: 0
    },
    {
      id: 'statement:a71da10535ba4204b41ffca1e3affbb1',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      frequency: 0
    },
    {
      id: 'statement:12e0031acaa641abb05477584a54afdf',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      frequency: 0
    },
    {
      id: 'statement:c223a998336144639d3a0142132d4d50',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      frequency: 0
    },
    {
      id: 'statement:839c088a713d4ba18069540ded6d46a7',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      frequency: 0
    },
    {
      id: 'statement:0fdb82da52ab4f479beb1461b94760fc',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      frequency: 0
    },
    {
      id: 'statement:e70c6aab8bdf4ca0b18793e46d0ed491',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      frequency: 0
    },
    {
      id: 'statement:4e600991cc7f49529f30d7887b0934fb',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      frequency: 0
    },
    {
      id: 'statement:e6cd3907fad046358c5f9f3191fe912a',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:db6b77a76f65499cb717d587a9df293e',
      frequency: 0
    },
    {
      id: 'statement:bc314b79af94410a9606ecda464894a9',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 0
    },
    {
      id: 'statement:b921243973184220b18bbc7ca24f02a7',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 0
    },
    {
      id: 'statement:5c085b40e1ca44cbba3dbfb8b804ae6d',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 1
    },
    {
      id: 'statement:e4ae95ee9a854f90ad647e29c8a18ac7',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 1
    },
    {
      id: 'statement:6c95b92565084d469eed63638d6c380d',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 1
    },
    {
      id: 'statement:f075e104195345f0a4f2587c92cf43c6',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 1
    },
    {
      id: 'statement:66e6623ab5794787b2b31045ac65097a',
      character: 'character:20af2bc4885343edb9791570f99adb40',
      value: 'state:29e3a638e66e4a079f45f3e575f62445',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 1
    },
    {
      id: 'statement:363c42485d254ddd9fa1d5ab13aed497',
      character: 'character:8e2896367e5544b0bb416ae2678ccf14',
      value: 'state:2062af158f4a4331b385eff5a38e96d6',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 1
    },
    {
      id: 'statement:1343846f66724f2bae029fd20d6238e2',
      character: 'character:8e2896367e5544b0bb416ae2678ccf14',
      value: 'state:2062af158f4a4331b385eff5a38e96d6',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 0
    },
    {
      id: 'statement:7b34d8a832d34f3e84a0b7159587ed41',
      character: 'character:8e2896367e5544b0bb416ae2678ccf14',
      value: 'state:cfdaf564cba54a459bdcbac6ccfd9bf7',
      taxon: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      frequency: 0
    },
    {
      id: 'statement:9e7ff54301554075ad3700dad9edacfc',
      character: 'character:8e2896367e5544b0bb416ae2678ccf14',
      value: 'state:cfdaf564cba54a459bdcbac6ccfd9bf7',
      taxon: 'taxon:d404a74b652d4ec09580742ff596db82',
      frequency: 1
    },
    {
      id: 'statement:868a025025e443d886730464f6fef237',
      character: 'character:2ab08df28e944a27b3ae8140e7a1ef95',
      value: 'state:40ba2f2b08b14a30864b6ebb96415aba',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 1
    },
    {
      id: 'statement:0a5407dc0a4549c6b08662f58d75bc8d',
      character: 'character:2ab08df28e944a27b3ae8140e7a1ef95',
      value: 'state:40ba2f2b08b14a30864b6ebb96415aba',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0
    },
    {
      id: 'statement:8c31a55e61784f8a8616e8befb22a900',
      character: 'character:2ab08df28e944a27b3ae8140e7a1ef95',
      value: 'state:40ba2f2b08b14a30864b6ebb96415aba',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 1
    },
    {
      id: 'statement:0a0040d49bae4f31a691abb0de7bff4b',
      character: 'character:2ab08df28e944a27b3ae8140e7a1ef95',
      value: 'state:40ba2f2b08b14a30864b6ebb96415aba',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:e69aa45c66164a0e806292e1856cdb56',
      character: 'character:2ab08df28e944a27b3ae8140e7a1ef95',
      value: 'state:40ba2f2b08b14a30864b6ebb96415aba',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:2274a0537bf74a978470211d6a2fb217',
      character: 'character:2ab08df28e944a27b3ae8140e7a1ef95',
      value: 'state:f1e48c7942924e23905b4ad0757fc42b',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 0
    },
    {
      id: 'statement:e1b73f0cd50a4b528491d5c6c856a1be',
      character: 'character:2ab08df28e944a27b3ae8140e7a1ef95',
      value: 'state:f1e48c7942924e23905b4ad0757fc42b',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 1
    },
    {
      id: 'statement:abf25bcec4f24695a32d2ee6d2e0a02c',
      character: 'character:2ab08df28e944a27b3ae8140e7a1ef95',
      value: 'state:f1e48c7942924e23905b4ad0757fc42b',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0
    },
    {
      id: 'statement:3b7267619e8b4602b792c0cf535eb012',
      character: 'character:2ab08df28e944a27b3ae8140e7a1ef95',
      value: 'state:f1e48c7942924e23905b4ad0757fc42b',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 1
    },
    {
      id: 'statement:3ae0f129050e44c9aaede29d3a85e2ed',
      character: 'character:2ab08df28e944a27b3ae8140e7a1ef95',
      value: 'state:f1e48c7942924e23905b4ad0757fc42b',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 1
    },
    {
      id: 'statement:4d95a90ed553404a89374c4542754cda',
      character: 'character:7f7bd48bf9e2421b81fe19dd9c84734a',
      value: 'state:ca35fffb86c44fe18ff7741dce7c5abd',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 0
    },
    {
      id: 'statement:5987c8538e3f40f4b07bfc5140830212',
      character: 'character:7f7bd48bf9e2421b81fe19dd9c84734a',
      value: 'state:ca35fffb86c44fe18ff7741dce7c5abd',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 1
    },
    {
      id: 'statement:75359eeacd9048049ce882e5d2c36020',
      character: 'character:7f7bd48bf9e2421b81fe19dd9c84734a',
      value: 'state:ca35fffb86c44fe18ff7741dce7c5abd',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0
    },
    {
      id: 'statement:0cd6587df5664b4eaacb7cbbe1e5b97b',
      character: 'character:7f7bd48bf9e2421b81fe19dd9c84734a',
      value: 'state:ca35fffb86c44fe18ff7741dce7c5abd',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:82ce5d0d097d426dbad38b7817b3ac8c',
      character: 'character:7f7bd48bf9e2421b81fe19dd9c84734a',
      value: 'state:ca35fffb86c44fe18ff7741dce7c5abd',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:4a56680cf5a54a098d8efa535b5ad10a',
      character: 'character:7f7bd48bf9e2421b81fe19dd9c84734a',
      value: 'state:c2ed6b5a1fdd482e8c6eda74f9bfee6e',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 1
    },
    {
      id: 'statement:68eba63848104a36b72f96c5b319c60c',
      character: 'character:7f7bd48bf9e2421b81fe19dd9c84734a',
      value: 'state:c2ed6b5a1fdd482e8c6eda74f9bfee6e',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0
    },
    {
      id: 'statement:415e6195ece94fcb8a584378accbbd0e',
      character: 'character:7f7bd48bf9e2421b81fe19dd9c84734a',
      value: 'state:c2ed6b5a1fdd482e8c6eda74f9bfee6e',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 1
    },
    {
      id: 'statement:2760cc10654e4a71b37af06499e5ff47',
      character: 'character:7f7bd48bf9e2421b81fe19dd9c84734a',
      value: 'state:c2ed6b5a1fdd482e8c6eda74f9bfee6e',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 1
    },
    {
      id: 'statement:28b9cca4e27047e5b27e321fb31f51f3',
      character: 'character:7f7bd48bf9e2421b81fe19dd9c84734a',
      value: 'state:c2ed6b5a1fdd482e8c6eda74f9bfee6e',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 1
    },
    {
      id: 'statement:153a0388eca74ca1bd40fde7abf559c0',
      character: 'character:97e72ae3637c45de94624f6971968353',
      value: 'state:4c35f420f5d64dbcb4720d2c4538225e',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 1
    },
    {
      id: 'statement:452120e8397f4105af4f10ac828c9ea4',
      character: 'character:97e72ae3637c45de94624f6971968353',
      value: 'state:4c35f420f5d64dbcb4720d2c4538225e',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 0
    },
    {
      id: 'statement:88c62e2b93874255a41b2b7337bb0010',
      character: 'character:97e72ae3637c45de94624f6971968353',
      value: 'state:4c35f420f5d64dbcb4720d2c4538225e',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 0
    },
    {
      id: 'statement:037b06c9587e4d3bbf8f204cf0154107',
      character: 'character:97e72ae3637c45de94624f6971968353',
      value: 'state:4c35f420f5d64dbcb4720d2c4538225e',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:5111b219f66d4e57bccf748d354f1355',
      character: 'character:97e72ae3637c45de94624f6971968353',
      value: 'state:4c35f420f5d64dbcb4720d2c4538225e',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:1947a377e06a41ca948ad536d23db21b',
      character: 'character:97e72ae3637c45de94624f6971968353',
      value: 'state:0a03f5d1108c4e0392b11620111d8178',
      taxon: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      frequency: 0
    },
    {
      id: 'statement:34042482a0394628bf6caabe8b4c479b',
      character: 'character:97e72ae3637c45de94624f6971968353',
      value: 'state:0a03f5d1108c4e0392b11620111d8178',
      taxon: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      frequency: 1
    },
    {
      id: 'statement:b67568d181dd41a0ac348104f47d9e1f',
      character: 'character:97e72ae3637c45de94624f6971968353',
      value: 'state:0a03f5d1108c4e0392b11620111d8178',
      taxon: 'taxon:ccedce802ccd43f2875441e71de35964',
      frequency: 1
    },
    {
      id: 'statement:7080f903c1d64073a7ece71181ee57b3',
      character: 'character:97e72ae3637c45de94624f6971968353',
      value: 'state:0a03f5d1108c4e0392b11620111d8178',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 1
    },
    {
      id: 'statement:63af8049e35943d493ade941c4a24cb1',
      character: 'character:97e72ae3637c45de94624f6971968353',
      value: 'state:0a03f5d1108c4e0392b11620111d8178',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 1
    },
    {
      id: 'statement:2a3d310565f74579aab0788d9ad345aa',
      character: 'character:165d5519e47944baab846f374527247b',
      value: 'state:94f5f84689404fc3bf501a27fb3c9e4a',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:479dd8a4eb3e48869b79097fd5d49fff',
      character: 'character:165d5519e47944baab846f374527247b',
      value: 'state:94f5f84689404fc3bf501a27fb3c9e4a',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 1
    },
    {
      id: 'statement:193268734e1f46ea9bab3fed0fe7cff9',
      character: 'character:165d5519e47944baab846f374527247b',
      value: 'state:f538baaa19ba4c88a7aa6d04aaf00778',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 1
    },
    {
      id: 'statement:bb56312458fb40898d7bbfc4d918f802',
      character: 'character:165d5519e47944baab846f374527247b',
      value: 'state:f538baaa19ba4c88a7aa6d04aaf00778',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:de258ee044214f4b81ffe11642c126d6',
      character: 'character:5b684f66dc2d43bab42edfb99f9c3a38',
      value: 'state:c19931360e3a4db781431251f1595592',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 1
    },
    {
      id: 'statement:87cd817a5e944edda4d0dc106df8c916',
      character: 'character:5b684f66dc2d43bab42edfb99f9c3a38',
      value: 'state:c19931360e3a4db781431251f1595592',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 0
    },
    {
      id: 'statement:788930c5eadf46ada028b5853c23e861',
      character: 'character:5b684f66dc2d43bab42edfb99f9c3a38',
      value: 'state:ecc94766453f4d1292b9fff290a39c13',
      taxon: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      frequency: 0
    },
    {
      id: 'statement:e7f791f4fc7347cabef2a30a72a3828c',
      character: 'character:5b684f66dc2d43bab42edfb99f9c3a38',
      value: 'state:ecc94766453f4d1292b9fff290a39c13',
      taxon: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      frequency: 1
    }
  ],
  title: {
    nb: 'Øyenstikkere'
  },
  geography: {
    name: {
      nb: 'Norge'
    }
  },
  description: {
    nb: 'Det finnes 50 arter av øyenstikkere i Norge, hvorav 16 tilhører undergruppen vannymfer mens 34 tilhører undergruppen libeller. Denne nøkkelen dekker alle disse samt fem arter som kan dukke opp her.'
  },
  descriptionUrl: {
    nb: {
      externalReference: {
        serviceId: 'service:nbic_page',
        externalId: '201640'
      }
    }
  },
  characters: [
    {
      id: 'character:01eab420010e4ffeb653432bed171497',
      title: {
        nb: 'Hvilestilling'
      },
      states: [
        {
          id: 'state:ede6268c398546a28b7284de75aeba0d',
          title: {
            nb: 'Vingene legges helt eller delvis bakover langs kroppen i hvile.'
          },
          media: 'media:205826'
        },
        {
          id: 'state:d740f0a459f3420490e72b669bf4dd26',
          title: {
            nb: 'Vingene står vinkelrett ut fra kroppen i hvile.'
          },
          media: 'media:205828'
        }
      ]
    },
    {
      id: 'character:968ccdf71e4840558061183dd87be09f',
      title: {
        nb: 'Hodefasong'
      },
      states: [
        {
          id: 'state:b3cf31d972e144d3bdbade3ed062e046',
          title: {
            nb: 'Hodet over dobbelt så bredt som langt. Øynene små og adskilt med om lag halve hodets bredde. Den utstikkende pannen er smalere enn minsteavstanden mellom øynene.'
          },
          media: 'media:205831'
        },
        {
          id: 'state:b7c14d6db2e5482594081b34f3f636d3',
          title: {
            nb: 'Hodet mindre enn dobbelt så bredt som langt. Øynene store og adskilt med om lag kvarte hodets bredde. Den utstikkende pannen er bredere enn minsteavstanden mellom øynene.'
          },
          media: 'media:205832'
        },
        {
          id: 'state:04065cd4122c43e89efd1df51b0e2042',
          title: {
            nb: 'Hodet mindre enn dobbelt så bredt som langt. Øynene store og møtes oppå hodet (i et punkt eller bredt sammensveiset).'
          },
          media: 'media:205833'
        }
      ]
    },
    {
      id: 'character:206d3dc8b8f641c4a11181b8c6ee0346',
      title: {
        nb: 'Vingefasong'
      },
      states: [
        {
          id: 'state:a29ff6c0dd1043208f5f4a9562fd44c3',
          title: {
            nb: 'Vingene smale med få ribber og smal basis. Fram- og bakvinge har samme fasong. (Små arter; opptil 40 mm.)'
          },
          media: 'media:205834'
        },
        {
          id: 'state:95e231c6848f43e197def0ba5475573c',
          title: {
            nb: 'Vingene brede med tett ribbenett og smal basis. Fram- og bakvinge har samme fasong. (Middels store arter med metallisk grønn/blå kropp; lengde 45-50 mm.)'
          },
          media: 'media:205835'
        },
        {
          id: 'state:86a2af7956d7461e84a899a9f8e4a232',
          title: {
            nb: 'Vingene brede med tett ribbenett og bred basis. Bakvingen er bredere enn framvingen, særlig ved basis. (Små til store arter; lengde 29-84 mm.)'
          },
          media: 'media:205836'
        }
      ]
    },
    {
      id: 'character:7b1ae86303dc4454952487cc36a55b67',
      title: {
        nb: 'Metallglans'
      },
      states: [
        {
          id: 'state:91b42803b6d849a6a84b213888a87254',
          title: {
            nb: 'Kroppen metallgrønn, metallblå eller kobberfarget, i det minste på deler av hode og bryst.'
          },
          media: 'media:205837'
        },
        {
          id: 'state:7aa1095650e84eb89f20769120fa8789',
          title: {
            nb: 'Kroppen (utenom øynene) helt uten metallglans.'
          },
          media: 'media:205842'
        }
      ]
    },
    {
      id: 'character:a4a7a70d8a1541618d9ff3b2750b0a79',
      title: {
        nb: 'Kjønn'
      },
      states: [
        {
          id: 'state:1a395d1dc2e94d1cb46f7ea21f51b41e',
          title: {
            nb: 'Andre bakkroppsledd med et sekundært kjønnsorgan på undersiden (hanner).'
          },
          media: 'media:205843'
        },
        {
          id: 'state:b604edca29d04d0f8921199442e70446',
          title: {
            nb: 'Andre bakkroppsledd uten seksuelle modifikasjoner på undersiden (hunner).'
          },
          media: 'media:205844'
        }
      ]
    },
    {
      id: 'character:2794a6d1258847d4a6fb75f92e24b219',
      title: {
        nb: 'Vingetegninger'
      },
      states: [
        {
          id: 'state:8dfe3826cfed4c56a2758b8063662890',
          title: {
            nb: 'Vingene svakt grønn- eller bruntonede.'
          },
          media: 'media:205845'
        },
        {
          id: 'state:9a1237c292f749b1b17b86b8206dca25',
          title: {
            nb: 'Vingene glassklare med et grønt/blått bånd på midten (røkfarget hos unge individer).'
          },
          media: 'media:205846'
        },
        {
          id: 'state:3e14bf6f568a4372ad56c4a84b740572',
          title: {
            nb: 'Vingene grønne/blå over hele arealet unntatt tuppen og basis (røkfarget hos unge individer).'
          },
          media: 'media:205847'
        }
      ]
    },
    {
      id: 'character:2a0f5495cc8044d8997daa4581cf8ca1',
      title: {
        nb: 'Vingemerke'
      },
      states: [
        {
          id: 'state:002bb1b3979b4bd88db3cd3b821c14f8',
          title: {
            nb: 'Vingetuppen med et hvitt vingemerke. Bakkroppsspissen uten tanglignende analvedheng. (Hunner)'
          },
          media: 'media:205848'
        },
        {
          id: 'state:7ba69042bf7d49afa01a6b0f6fc7cc6e',
          title: {
            nb: 'Vingen uten vingemerke. Bakkroppsspissen med tanglignende analvedheng. (Hanner)'
          },
          media: 'media:205849'
        }
      ]
    },
    {
      id: 'character:f9406b0787b0420884149c3bbf1191c8',
      title: {
        nb: 'Vingefarge/vingemål'
      },
      states: [
        {
          id: 'state:f987d2db24fd48e08a2f5d319f34267b',
          title: {
            nb: 'Vingen svakt grønntonet. Avstanden mellom vingemerket og vingetuppen <= 1/10 av vingens lengde.'
          },
          media: 'media:205850'
        },
        {
          id: 'state:a98ff09b82fe461597ebcfabaee133a1',
          title: {
            nb: 'Vingen svakt bruntonet. Avstanden mellom vingemerket og vingetuppen >= 1/10 av vingens lengde.'
          },
          media: 'media:205851'
        }
      ]
    },
    {
      id: 'character:bf8889944f3a467fadbffe4ee44d813d',
      title: {
        nb: 'Vingeribber'
      },
      states: [
        {
          id: 'state:928070b6e545411c8e91406d723c7c46',
          title: {
            nb: 'Basis av vingen med grovt ribbenett.'
          },
          media: 'media:205852'
        },
        {
          id: 'state:80a5b9d1dc934f6d951314c756f3bb2a',
          title: {
            nb: 'Basis av vingen med fint ribbenett.'
          },
          media: 'media:205853'
        }
      ]
    },
    {
      id: 'character:7a5dd2c0b89b4d70924f581d764fe674',
      title: {
        nb: 'Vinger'
      },
      states: [
        {
          id: 'state:e0d3bc1078464cd48411e0358b93a24c',
          title: {
            nb: 'Vingemerket langt; langsidene rundt 3 ganger så lange som kortsidene. Vingens ribbenett består hovedsakelig av femkantede celler. To lengderibber (bilde) skiller lag godt innenfor vingenoden. (Kropp overveiende metallgrønn. Større arter: 35-40 mm.)'
          },
          media: 'media:205854'
        },
        {
          id: 'state:39efdd03d3ff4e1fa25a77f1221f1483',
          title: {
            nb: 'Vingemerket kort; langsidene opptil 2 ganger så lange som kortsidene. Vingens ribbenett består hovedsakelig av firkantede celler. To lengderibber (bilde) skiller lag omtrent på høyde med vingenoden. (Mindre arter: 24-38 mm.)'
          },
          media: 'media:205855'
        }
      ]
    },
    {
      id: 'character:c56a19673d09408c9cd1eb06c6e01766',
      title: {
        nb: 'Øyefarge'
      },
      states: [
        {
          id: 'state:935bc3ff964a484fa00c13e9093c5478',
          title: {
            nb: 'Øyet grønt på nedre halvdel'
          },
          media: 'media:205856'
        },
        {
          id: 'state:261692e5045142e0a84ba089b62a96a0',
          title: {
            nb: 'Øyet blått på nedre halvdel'
          },
          media: 'media:205857'
        },
        {
          id: 'state:a26f800ec8014d3fbe1370f5e6aacb04',
          title: {
            nb: 'Øyet rødt på nedre halvdel'
          },
          media: 'media:205858'
        },
        {
          id: 'state:48f0be12ad4b42eab1087253d4f1cfa6',
          title: {
            nb: 'Øyet brunt på nedre halvdel'
          },
          media: 'media:205859'
        },
        {
          id: 'state:e0d2260418e44a5db61ba86c367be016',
          title: {
            nb: 'Øyet annerledes (f.eks. grått eller beige)'
          },
          media: 'media:205860'
        }
      ]
    },
    {
      id: 'character:21cc662d0b4e4d94ab271e23cd72fe31',
      title: {
        nb: 'Bakhodetegninger'
      },
      states: [
        {
          id: 'state:e91146dc90d94fb2b14f6e71e8b70229',
          title: {
            nb: 'Bakhodet ensfarget mørkt (sjelden med en kort lys tverrstrek rett over halsen).'
          },
          media: 'media:205861'
        },
        {
          id: 'state:6ecd45b1ce054dafa85651470850c53e',
          title: {
            nb: 'Bakhodet mørkt med en lang lys tverrstrek.'
          },
          media: 'media:205862'
        },
        {
          id: 'state:9e17cb664baa4947b8440a6233ae0ac1',
          title: {
            nb: 'Bakhodet med to lyse sideflekker som kan være forbundet med en lys tverrstrek eller smeltet sammen til en timeglassfigur.'
          },
          media: 'media:205863'
        }
      ]
    },
    {
      id: 'character:b82093ba9c5a44a08ba8b66ec0bcda4c',
      title: {
        nb: 'Bakhodetegninger 2'
      },
      states: [
        {
          id: 'state:d69da87df02f4dcc9bf256b7116303a7',
          title: {
            nb: 'Bakhodet med to lyse flekker som ikke er forbundet med en lys tverrstrek.'
          },
          media: 'media:205864'
        },
        {
          id: 'state:100837a0afe94152a054b7ba0b98bf20',
          title: {
            nb: 'Bakhodet med to lyse flekker forbundet med en hel eller oppdelt lys tverrstrek.'
          },
          media: 'media:205865'
        },
        {
          id: 'state:252725a993be420cbfcf45fcce735a71',
          title: {
            nb: 'Bakhodet med en bred, lys timeglassfigur.'
          },
          media: 'media:205866'
        }
      ]
    },
    {
      id: 'character:55ed66d6324b49ffac9cd44e50cc6f2b',
      title: {
        nb: 'Skulderparti'
      },
      states: [
        {
          id: 'state:9482013fb3584420b23f8bb9dd963038',
          title: {
            nb: 'Skulderpartiet ensfarget mørkt.'
          },
          media: 'media:205867'
        },
        {
          id: 'state:4878a3f56abd4ca38a740d05d9b50872',
          title: {
            nb: 'Skulderpartiet overveiende lyst, eller mørkt med en hel eller redusert lys skulderlinje.'
          },
          media: 'media:205868'
        }
      ]
    },
    {
      id: 'character:daf65d36f7b94daa8fe8632217a91f37',
      title: {
        nb: 'Brystets sidetegninger'
      },
      states: [
        {
          id: 'state:797c14e10db940ce8ef3eaf94f5a9f0b',
          title: {
            nb: 'Brystets store sideplate overveiende mørk på fremre halvdel, mørk eller lys på bakre.'
          },
          media: 'media:205869'
        },
        {
          id: 'state:de85b3e680a14cff9e7eb8df66717ca9',
          title: {
            nb: 'Brystets store sideplate på fremre halvdel med en lys strektegning kantet med svart. Strektegningen løper parallelt med den lyse skulderlinjen og fremstår som en skulderlinje nr 2.'
          },
          media: 'media:205870'
        },
        {
          id: 'state:db2b8428e3d54a46aae21ff4f9861d76',
          title: {
            nb: 'Brystets store sideplate overveiende lys, med en tydelig svart strek eller tapptegning på midten.'
          },
          media: 'media:205871'
        },
        {
          id: 'state:89b36b4b8e4c40a2a8d7633a88edd5b5',
          title: {
            nb: 'Brystets store sideplate overveiende lys, uten eller med kun en liten antydning til svart strek på midten.'
          },
          media: 'media:205872'
        }
      ]
    },
    {
      id: 'character:23f5f8c5362246b1acd788308481eac0',
      title: {
        nb: 'Bakkroppens grunnmønster'
      },
      states: [
        {
          id: 'state:29207b2078074b7a9afb3ec18c726a83',
          title: {
            nb: 'Bakkroppens ledd 4-10 overveiende mørke på ryggsiden. De tre siste leddene uten distinkte lyse ryggtegninger (men kan ha lyse flanker og lyse bånd mellom leddene).'
          },
          media: 'media:205873'
        },
        {
          id: 'state:dac25429b181498fbfcef22cc9ec4c64',
          title: {
            nb: 'Bakkroppens ledd 4-10 overveiende mørke på ryggsiden, men ett eller flere av de tre siste leddene med distinkte lyse ryggtegninger.'
          },
          media: 'media:205874'
        },
        {
          id: 'state:22e22c7c478a4cb09c0558d9db69d6ee',
          title: {
            nb: 'Bakkroppen med alternerende mørke og lyse tegninger. De mørke tegningene er ikke delt langs midtlinjen.'
          },
          media: 'media:205875'
        },
        {
          id: 'state:5f040f3bfdca47a89eb288548575a8cf',
          title: {
            nb: 'Bakkroppen lys med mørke tegninger som i hvert fall på ledd 7-10 er delt av en langsgående lys midtstripe.'
          },
          media: 'media:205876'
        }
      ]
    },
    {
      id: 'character:cd197cc6d5c14a60b212a287132ec08d',
      title: {
        nb: 'Analvedheng/pudring'
      },
      states: [
        {
          id: 'state:46238226252348a68e03e17c91cf1116',
          title: {
            nb: 'Øvre analvedheng tangformede. Kjønnsmodne individer har blå vokspudring på brystet og på de fremre og bakre bakkroppsleddene (Hanner).'
          },
          media: 'media:205877'
        },
        {
          id: 'state:0ec8add9fbf34ad591b094325cc51c39',
          title: {
            nb: 'Uten tangformede analvedheng; med egglegger. Kroppen vanligvis uten blå vokspudring (Hunner).'
          },
          media: 'media:205878'
        }
      ]
    },
    {
      id: 'character:52e6714bdaa24a928c2fb4b18d287e25',
      title: {
        nb: 'Analvedheng/pudring 2'
      },
      states: [
        {
          id: 'state:754180c0a02f47c092cc2ce8a1d4aa8a',
          title: {
            nb: 'Nedre analvedheng rette. Den blå pudringen hos kjønnsmodne individer dekker hele ryggsiden av bakkroppsledd 2 (NB: kan være slitt bort!).'
          },
          media: 'media:205879'
        },
        {
          id: 'state:3c79e8e9c89940dda71bf02b1a87d43d',
          title: {
            nb: 'Nedre analvedheng krumme. Den blå pudringen hos kjønnsmodne individer dekker bare de to fremre tredjedelene av ryggsiden av bakkroppsledd 2.'
          },
          media: 'media:205880'
        }
      ]
    },
    {
      id: 'character:24683d8c9065432bb03bebb400fdefb3',
      title: {
        nb: 'Egglegger/halsring'
      },
      states: [
        {
          id: 'state:08036abf4f8d44f48f293b2355f83f31',
          title: {
            nb: 'Eggleggeren sett fra siden lang; ender tydelig bakenfor bakkroppsledd 10. Halsringen med en stor metallgrønn flekk på siden.'
          },
          media: 'media:205881'
        },
        {
          id: 'state:c9d6a90f03b342cdbbb4b09cea67475c',
          title: {
            nb: 'Eggleggeren sett fra siden kortere; spissen flukter omtrent med bakkanten på bakkroppsledd 10. Halsringen vanligvis uten eller med ubetydelig metallgrønn sideflekk.'
          },
          media: 'media:205882'
        }
      ]
    },
    {
      id: 'character:f3c971f5e63b4796a61bcbb3aad10d53',
      title: {
        nb: 'Vingens q-felt'
      },
      states: [
        {
          id: 'state:5ae356c950a84d3bbd19e46efdf5c320',
          title: {
            nb: 'Vingens q-felt tilnærmet rektangulært'
          },
          media: 'media:205883'
        },
        {
          id: 'state:9dabdcff0fed4caf897c6cfda509a899',
          title: {
            nb: 'Vingens q-felt tilspisset'
          },
          media: 'media:205884'
        }
      ]
    },
    {
      id: 'character:ed7498b2609841099aa98504d14ea1cd',
      title: {
        nb: 'Andre bakkroppsledds ryggtegning'
      },
      states: [
        {
          id: 'state:e3cf517eb4ba474ba90104c7951e25ba',
          title: {
            nb: 'Bakkroppsledd 2 uten svart ryggtegning'
          },
          media: 'media:205885'
        },
        {
          id: 'state:4ece383d85224479b1d5ced07ed9620e',
          title: {
            nb: 'Bakkroppsledd 2 med en svart stolpetegning som fyller hele eller nesten hele leddets lengde.'
          },
          media: 'media:205886'
        },
        {
          id: 'state:1c019ceb5c954bd1b7d5ddc4f3f06ff3',
          title: {
            nb: 'Bakkroppsledd 2 med en enkel svart midttegning i bakre del. Tegningen er forbundet med leddets bakkant.'
          },
          media: 'media:205887'
        },
        {
          id: 'state:46a2415075e549bfafa3dc8726149710',
          title: {
            nb: 'Bakkroppsledd 2 med en enkel, frittstående svart midttegning i bakre del.'
          },
          media: 'media:205888'
        },
        {
          id: 'state:070a1bbfd4e54334905ca3606633c046',
          title: {
            nb: 'Bakkroppsledd 2 med en svart midttegning som er forbundet med leddets bakkant, samt med to frie svarte sidestreker.'
          },
          media: 'media:205889'
        },
        {
          id: 'state:476fc7e83bdf485e942bda46983ca326',
          title: {
            nb: 'Bakkroppsledd 2 med en fri svart midttegning samt to frie svarte sidestreker.'
          },
          media: 'media:205890'
        },
        {
          id: 'state:d1343483a63c4a5a8b7d2e12d607ce77',
          title: {
            nb: 'Bakkroppsledd 2 med en togreinet svart tegning som er forbundet med leddets bakkant (Y-fasong).'
          },
          media: 'media:205891'
        },
        {
          id: 'state:d2fb10b7a7914b3fa945cf57348c96aa',
          title: {
            nb: 'Bakkroppsledd 2 med en fri, togreinet svart tegning (U-fasong).'
          },
          media: 'media:205892'
        }
      ]
    },
    {
      id: 'character:29f7839fec844466b5074262a3d273c2',
      title: {
        nb: 'Undersiden av bakkroppsledd 8'
      },
      states: [
        {
          id: 'state:7fc71feb62434b35ad946fcc3d550694',
          title: {
            nb: 'Bakkroppsledd 8 med en utstikkende torn på undersiden.'
          },
          media: 'media:205893'
        },
        {
          id: 'state:7de65d2a383a4c11a2581ba1643b662f',
          title: {
            nb: 'Bakkroppsledd 8 uten torn på undersiden.'
          },
          media: 'media:205896'
        }
      ]
    },
    {
      id: 'character:5713f56b0207461a9405a7dc8caa7995',
      title: {
        nb: 'Framvingemerke'
      },
      states: [
        {
          id: 'state:5fee845ee3384c58b1f109c75301808d',
          title: {
            nb: 'Framvingens vingemerke er tydelig tofarget; mørkegrått i indre halvdel og hvitaktig i ytre.'
          },
          media: 'media:205897'
        },
        {
          id: 'state:7506e6363136467885270db2bd1d8db2',
          title: {
            nb: 'Framvingens vingemerke ensfarget eller med kjernen noe mørkere enn ytterkanten.'
          },
          media: 'media:205898'
        }
      ]
    },
    {
      id: 'character:02900c3d6771420db9fd1e1821cabd73',
      title: {
        nb: 'Bakkroppsspissens tegninger'
      },
      states: [
        {
          id: 'state:3dca7b4bbec348b588b79de4f589b3fe',
          title: {
            nb: 'De lyse tegningene på bakkroppsspissen omfatter primært ledd 8.'
          },
          media: 'media:205899'
        },
        {
          id: 'state:1ba6def4e383459ea0032a1cd57128fd',
          title: {
            nb: 'De lyse tegningene på bakkroppsspissen omfatter primært ledd 9.'
          },
          media: 'media:205900'
        },
        {
          id: 'state:a30b97576e6b4b6ca98724637ba29f59',
          title: {
            nb: 'De lyse tegningene på bakkroppsspissen omfatter primært ledd 10.'
          },
          media: 'media:205901'
        }
      ]
    },
    {
      id: 'character:a814be4addc1404691f710e254a97982',
      title: {
        nb: 'Bakkroppens fasong og tegninger'
      },
      states: [
        {
          id: 'state:deb21628016445d3a05404b4786e01c8',
          title: {
            nb: 'Bakkroppen relativt bred med torpedoformede mørke ryggtegninger. Det fjerde ryggleddet mindre enn fire ganger så langt som bredt.'
          },
          media: 'media:205902'
        },
        {
          id: 'state:536ba323042546ffa5da73df27f0d699',
          title: {
            nb: 'Bakkroppen relativt slank med mer rettsidete mørke ryggtegninger. Det fjerde ryggleddet mer enn fem ganger så langt som bredt.'
          },
          media: 'media:205903'
        }
      ]
    },
    {
      id: 'character:7dfcaa00b3944afea7787702090177b9',
      title: {
        nb: 'Analvedheng'
      },
      states: [
        {
          id: 'state:48e29f33284c448ebb9a28d2f43e75c0',
          title: {
            nb: 'Nedre analvedheng sprikende.'
          },
          media: 'media:205904'
        },
        {
          id: 'state:15bcab29cf474de6b608bbcbf32ec091',
          title: {
            nb: 'Nedre analvedheng +/- parallelle.'
          },
          media: 'media:205906'
        }
      ]
    },
    {
      id: 'character:bd95a42e58c3445380ecc25c3a797d7e',
      title: {
        nb: 'Halsskjold'
      },
      states: [
        {
          id: 'state:f319c125005b4b84bab271019cd02d0c',
          title: {
            nb: 'Halsskjoldets bakkant +/- jevnt avrundet.'
          },
          media: 'media:205907'
        },
        {
          id: 'state:87d89dc56d914e14838307b9de9f10a4',
          title: {
            nb: 'Halsskjoldets bakkant med en tydelig midtre utvekst, eventuelt også laterale utvekster.'
          },
          media: 'media:205908'
        }
      ]
    },
    {
      id: 'character:15bf55c649a84c839ffc8fc345b2c42b',
      title: {
        nb: 'Bakkroppens sidetegninger'
      },
      states: [
        {
          id: 'state:f608cf5aa6ac42f1ba2758365f139eca',
          title: {
            nb: 'Bakkroppsledd 3-5 med langsgående svarte sidetegninger i overgangen mot buksiden. Tegningene er delvis adskilt fra de svarte ryggtegningene av en lys sidestripe.'
          },
          media: 'media:205909'
        },
        {
          id: 'state:cde3f087343343ed87d3d3338cfd65ba',
          title: {
            nb: 'Bakkroppsledd 3-5 med langsgående svarte sidestreker som løper ut fra eller peker mot framhjørnene på de svarte ryggtegningene.'
          },
          media: 'media:205910'
        },
        {
          id: 'state:f25b9c2eefd34671bcd750ffdb75057b',
          title: {
            nb: 'Bakkroppsledd 3-5 uten langsgående svarte sidestreker. Ryggtegningenes framhjørner i høyden svakt utstikkende.'
          },
          media: 'media:205911'
        }
      ]
    },
    {
      id: 'character:1d27e135b25545fc84f36c887c1709e5',
      title: {
        nb: 'Bakkroppstegninger og genitalier'
      },
      states: [
        {
          id: 'state:125f4877e9694701afd87c5cb07faf1d',
          title: {
            nb: 'Andre bakkroppsledd med en soppformet svart tegning. Tredje ledd kun svart på bakre tredjedel. Øvre analvedheng tydelig adskilt, korte og brede med en innoverrettet krok. Nedre analvedheng lange, slanke og parallelle.'
          },
          media: 'media:205912'
        },
        {
          id: 'state:eef599e6ccc0461aa758c8ba0eb93c18',
          title: {
            nb: 'Andre bakkroppsledd normalt med en sparformet svart tegning flankert av to svarte streker. Tredje bakkroppsledd med en spydspissformet svart tegning som dekker mindre enn halve ryggarealet. Både øvre og nedre analvedheng brede og tydelig separerte, hver med en innoverrettet krok.'
          },
          media: 'media:205913'
        },
        {
          id: 'state:16ff061119f34368812a4f38de003018',
          title: {
            nb: 'Andre bakkroppsledd normalt med en halvmåneformet svart tegning flankert av to svarte streker (= surt fjes). Den svarte tegningen på ledd 3 dekker mer enn halve ryggarealet. Øvre analvedheng brede og divergerende. Nedre analvedheng knapt synlige ovenfra.'
          },
          media: 'media:205914'
        },
        {
          id: 'state:b4870cbaf635453296511498f6cb6083',
          title: {
            nb: 'Andre bakkroppsledd med en svart flekk som er bredt forbundet med bakkanten og flankert av to svarte streker. Tredje bakkroppsledd overveiende svart. Øvre analvedheng eksepsjonelt lange og tangformede.'
          },
          media: 'media:205915'
        },
        {
          id: 'state:5dff1b7b4a50489ab446269231ebcad9',
          title: {
            nb: 'Andre bakkroppsledd med en vanligvis U-formet svart tegning (dvs ikke forbundet med bakkanten). Den svarte tegningen på ledd 3 er dratt ut i to svarte streker på sidene. Øvre analvedheng tydelig separerte, korte og brede med en innoverrettet krok. Nedre analvedheng lange, slanke og tilnærmet parallelle.'
          },
          media: 'media:205916'
        },
        {
          id: 'state:aacf3b41176e491b8eacaabf95f7b5d8',
          title: {
            nb: 'Andre bakkroppsledd med en vanligvis Y-formet svart tegning (dvs forbundet med bakkanten med en "stett"). Den svarte tegningen på ledd 3 er dratt ut i to svarte streker på sidene. Øvre analvedheng er korte og brede og berører hverandre ved basis. Nedre analvedheng lange, slanke og svakt divergerende.'
          },
          media: 'media:205917'
        },
        {
          id: 'state:f2c6ca15928145948bd0648fc58a1aae',
          title: {
            nb: 'Andre bakkroppsledd med en vanligvis Y-formet svart tegning (dvs forbundet med bakkanten med en "stett"). Ledd 3 med svarte sidetegninger i overgangen mot buken. Øvre analvedheng tydelig separerte, avrundede, med en innoverrettet krok i spissen. Nedre analvedheng slanke og svakt konvergerende, med krokformet spiss.'
          },
          media: 'media:205918'
        }
      ]
    },
    {
      id: 'character:34f0cbb6d2a54e2982c3fc8da8a329e3',
      title: {
        nb: 'Halsskjold og bakkroppstegninger'
      },
      states: [
        {
          id: 'state:1ea88d9615ce4c14931b3bd7c0d0d894',
          title: {
            nb: 'Halsskjoldet med en bred, oppstikkende tapp rett innenfor bakkanten. Bakkroppen slank med overveiende svart ryggside. Ledd 8 vanligvis lyst.'
          },
          media: 'media:205919'
        },
        {
          id: 'state:6a3e50775fa04152b6cea07baa1b7397',
          title: {
            nb: 'Halsskjoldets bakkant jevnt avrundet. Bakkroppen slank med overveiende svart ryggside (nyklekte individer med lys basis og lys tupp).'
          },
          media: 'media:205920'
        },
        {
          id: 'state:9c25ac0e021d472a822b3d67650e63ca',
          title: {
            nb: 'Halsskjoldets bakkant nesten rett. Bakkroppen med torpedolignende svarte ryggtegninger.'
          },
          media: 'media:205921'
        },
        {
          id: 'state:73b1f70e87e6407bab078f4cec8444c5',
          title: {
            nb: 'Halsskjoldets bakkant jevnt avrundet med en smal, svart utbuling på midten. Foran denne finnes en smal tverrgående list som på midten peker mest bakover. Bakkroppen med overveiende svarte ryggtegninger.'
          },
          media: 'media:205922'
        },
        {
          id: 'state:cbb0e8614ecb4ad4a52c2f1a5c1097a6',
          title: {
            nb: 'Halsskjoldets bakkant med en bred sentral utvekst. Bakkroppens ryggside overveiende svart. Ledd 2 med en svart tegning i (nesten) hele leddets lengde; ledd 8 med en hel eller todelt lys tegning ved basis.'
          },
          media: 'media:205923'
        },
        {
          id: 'state:26bf43b580eb4d7cba396c059b3f1b54',
          title: {
            nb: 'Halsskjoldets bakkant med en bred, ofte kløvet sentral utvekst. Bakkroppens ryggside overveiende svart, men med brede lyse tegninger ved basis av ledd 2 og ledd 8.'
          },
          media: 'media:205924'
        },
        {
          id: 'state:b8499c35857640918ba02070f6d0de4f',
          title: {
            nb: 'Halsskjoldets bakkant med en svak sentral og to svake laterale utbulninger. Bakkroppens ryggside varierer fra overveiende svart til svart- og lysbåndet. Hos lyse individer er de svarte ryggtegningenes framhjørner dratt ut fremover.'
          },
          media: 'media:205925'
        },
        {
          id: 'state:bf3f604eb0d8487cbe9ea71c4a63930b',
          title: {
            nb: 'Halsskjoldets bakkant med en kraftig sentral og to kraftige laterale utvekster med dype innskjæringer imellom. Bakkroppens ryggside varierer fra overveiende svart til svart- og lysbåndet. Hos lyse individer er de svarte ryggtegningenes framhjørner dratt ut fremover.'
          },
          media: 'media:205926'
        },
        {
          id: 'state:3c73fd85d7ec408d8ed866059388a89d',
          title: {
            nb: 'Halsskjoldets bakkant jevnt avrundet med en smal, svart utbuling på midten. Foran denne finnes en smal tverrgående list som på midten peker mest fremover. Bakkroppen blå med karakteristiske svarte strektegninger på siden i overgangen til buken. Ryggsiden overveiende svart med blå spiss (ledd 10 og deler av ledd 9 blått).'
          },
          media: 'media:205927'
        }
      ]
    },
    {
      id: 'character:dac354b20a9e419cb6b176e5c8575f6e',
      title: {
        nb: 'Størrelse'
      },
      states: [
        {
          id: 'state:8619740ce9eb4dbe95d72bbd90da858c',
          title: {
            nb: 'Liten art. Kroppslengde < 34 mm.'
          },
          media: 'media:205928'
        },
        {
          id: 'state:26a0596d43334c728da9873560842feb',
          title: {
            nb: 'Mellomstor art. Kroppslengde 34-55 mm.'
          },
          media: 'media:205929'
        },
        {
          id: 'state:e7190ede664f4db9a7e93c6fcd4da8f8',
          title: {
            nb: 'Stor art. Kroppslengde > 55 mm.'
          },
          media: 'media:205930'
        }
      ]
    },
    {
      id: 'character:fe18c9be3d17497db4ff42c1ba43ce8a',
      title: {
        nb: 'Bakkroppens grunnmønster'
      },
      states: [
        {
          id: 'state:6d0675a5a9574841950d98600f6e0368',
          title: {
            nb: 'Bakkroppen sett ovenfra brun til svart med en mosaikk av gule, grønne, blå eller lilla (ikke oransje) parflekker som tidvis kan flyte sammen på hver side av eller på tvers av midtlinjen. Store, slanke arter.'
          },
          media: 'media:205931'
        },
        {
          id: 'state:2838201ecca04f7ea37d69adc40371e8',
          title: {
            nb: 'Bakkroppen sett ovenfra svart med en rad gule, grønne, oransje, røde eller brune flekker langs midten. Flekkene kan være frie eller henge sammen med lyse tverrbånd i leddenes framkant.'
          },
          media: 'media:205932'
        },
        {
          id: 'state:156436e1bbc34105a33a72eb337665de',
          title: {
            nb: 'Bakkroppen sett ovenfra dekket av lyseblå til gråblå vokspudring over store deler av ryggarealet.'
          },
          media: 'media:205933'
        },
        {
          id: 'state:6f196035c20044c7b75311ff30f1295d',
          title: {
            nb: 'Bakkroppen sett ovenfra overveiende rød.'
          },
          media: 'media:205934'
        },
        {
          id: 'state:23835f5e9e3f4f239ebbb8d313bfe6b0',
          title: {
            nb: 'Bakkroppen sett ovenfra annerledes; ensfarget eller mønstret i gule, beige, oransje, brune, svarte, bronseskinnende eller metallgrønne farger.'
          },
          media: 'media:205935'
        }
      ]
    },
    {
      id: 'character:0b8c3af432c84d90a58939bf4ab87047',
      title: {
        nb: 'Framvingetriangel'
      },
      states: [
        {
          id: 'state:fc30aca86ab642f185b40ea25104204f',
          title: {
            nb: '"Triangelet" i framvingen peker utover (den ytre vinkelen er tydelig skarpest).'
          },
          media: 'media:205936'
        },
        {
          id: 'state:f10e767344504ed4aee5077ca353163b',
          title: {
            nb: '"Triangelet" i framvingen peker bakover (den bakre vinkelen er +/- skarpest).'
          },
          media: 'media:205937'
        }
      ]
    },
    {
      id: 'character:a8950f69158f4f85ba8e97abdd14e0ec',
      title: {
        nb: 'Bakvingebasis'
      },
      states: [
        {
          id: 'state:712ee430df4a4c39b00c192d0add5204',
          title: {
            nb: 'Bakvingen med en mørk tegning i analfeltet.'
          },
          media: 'media:205938'
        },
        {
          id: 'state:d7e7e8a8b57f49e6ac29769cd8de999e',
          title: {
            nb: 'Bakvingen uten mørk tegning i analfeltet.'
          },
          media: 'media:205939'
        }
      ]
    },
    {
      id: 'character:8ac26470be7345f19ae0ad35874031aa',
      title: {
        nb: 'Øyne'
      },
      states: [
        {
          id: 'state:de0009df6f574b69831033ecf1bed7db',
          title: {
            nb: 'Øynene berører hverandre såvidt i et punkt oppå hodet. (Stor art med grønne øyne og svart, gulflekket kropp.)'
          },
          media: 'media:205940'
        },
        {
          id: 'state:9a5af60cc4c8445798d55bf50e1a712b',
          title: {
            nb: 'Øynene løper sammen langs toppen av hodet.'
          },
          media: 'media:205941'
        }
      ]
    },
    {
      id: 'character:9825b920bdc44c36b847c0c9fbd8a985',
      title: {
        nb: 'Skulderstreker'
      },
      states: [
        {
          id: 'state:0dab31833ecc4e8a8c38d9483315aaa5',
          title: {
            nb: 'Skulderstreker lange og brede; ca like brede som den minste avstanden mellom dem.'
          },
          media: 'media:205942'
        },
        {
          id: 'state:db8563cdeb734551945ecca65ce758ad',
          title: {
            nb: 'Skulderstreker lange og smale; rundt halvparten så brede som den minste avstanden mellom dem.'
          },
          media: 'media:205943'
        },
        {
          id: 'state:76a5a29ba54b4f32981cf1df1fca4612',
          title: {
            nb: 'Skulderstreker korte.'
          },
          media: 'media:205944'
        },
        {
          id: 'state:6b3ce5ba641b4d7cba82c77573e902c4',
          title: {
            nb: 'Skulderstreker helt fraværende.'
          },
          media: 'media:205945'
        }
      ]
    },
    {
      id: 'character:0ba6ceee4d324d968d9cfcdf9bd6b334',
      title: {
        nb: 'Brystets sidetegninger'
      },
      states: [
        {
          id: 'state:90c3ec7f4d6d4f45b9d892a20e20f043',
          title: {
            nb: 'Brystet med kontrasterende sidetegninger bestående av gule, grønne eller blå bånd mot brun eller svart bakgrunn.'
          },
          media: 'media:205946'
        },
        {
          id: 'state:83095f3c22e8424c9ece6870943f3f2e',
          title: {
            nb: 'Brystet med relativt ensfargete eller jevnt tonede sidetegninger i grønt til brunt.'
          },
          media: 'media:205947'
        }
      ]
    },
    {
      id: 'character:605d21e525cc4b7cb99053a91c6451e5',
      title: {
        nb: 'Brystets lyse diagonalbånd'
      },
      states: [
        {
          id: 'state:d9a63bf8ee9c48378d88232307d4f54f',
          title: {
            nb: 'Siden av brystet med to lyse diagonalbånd.'
          },
          media: 'media:205948'
        },
        {
          id: 'state:91faa14b048c4bb88401ab9698af8f3d',
          title: {
            nb: 'Siden av brystet med tre lyse diagonalbånd.'
          },
          media: 'media:205949'
        }
      ]
    },
    {
      id: 'character:5a4c64d87be74fdb884004359788e91e',
      title: {
        nb: 'Brystets skulder- og sidetegninger'
      },
      states: [
        {
          id: 'state:178a3027e7af45709d09347ef43eef98',
          title: {
            nb: 'Brystet med brunt skulderparti med brede grønne skulderstreker, og med nesten ensfarget grønne sidetegninger.'
          },
          media: 'media:205950'
        },
        {
          id: 'state:386310864e7546d9afad3c7b1f0c257d',
          title: {
            nb: 'Brystet med grønt skulderparti og nesten ensfarget grønne sidetegninger.'
          },
          media: 'media:205951'
        },
        {
          id: 'state:7e50a20110a14010975b1f0837657145',
          title: {
            nb: 'Brystet med brunt skulderparti og brune sidetegninger som går over i grønt mot buksiden.'
          },
          media: 'media:205952'
        }
      ]
    },
    {
      id: 'character:fb53cde8f0fb4a0f9891778ce300f925',
      title: {
        nb: 'Andre bakkroppsledd'
      },
      states: [
        {
          id: 'state:8b43d2c273d6496e8eacd461d7702028',
          title: {
            nb: 'Andre bakkroppsledd med en kile- eller nagleformet gul eller grønn ryggtegning.'
          },
          media: 'media:205953'
        },
        {
          id: 'state:80d144db82f54a0eae7da9cbbc3a7763',
          title: {
            nb: 'Andre bakkroppsledd uten kile-/nagleformet tegning.'
          },
          media: 'media:205954'
        }
      ]
    },
    {
      id: 'character:81928a5e71724968ac8b0f01007c0d19',
      title: {
        nb: 'Andre bakkroppsledds lyse tegning'
      },
      states: [
        {
          id: 'state:9c2dfdab893643eaa3a5e348faf553ba',
          title: {
            nb: 'Andre bakkroppsledd med en smal, gul nagleformet tegning.'
          },
          media: 'media:205955'
        },
        {
          id: 'state:f38f32edbeb64816a94207a728d658b3',
          title: {
            nb: 'Andre bakkroppsledd med en bred, gul eller grønn kileformet tegning.'
          },
          media: 'media:205956'
        }
      ]
    },
    {
      id: 'character:9ea44913ba3f47a1a400138b22e72441',
      title: {
        nb: 'Kroppsfarge og sidetegninger'
      },
      states: [
        {
          id: 'state:6eb3db7370de44fca8adf4ceb461bfd5',
          title: {
            nb: 'Kropp nøttebrun. Bakkroppen med en rad gråblå flekker langs siden. Øyne brune.'
          },
          media: 'media:205957'
        },
        {
          id: 'state:a1f43e122c2a4fa5a06d1acb8f0946ff',
          title: {
            nb: 'Kropp oransje til nøttebrun. Bakkroppen uten blålige sideflekker. Øyne grønne.'
          },
          media: 'media:205958'
        }
      ]
    },
    {
      id: 'character:4575d9eead984fb49a2930e06c320c00',
      title: {
        nb: 'Bakkroppens lyse tegninger'
      },
      states: [
        {
          id: 'state:2bc53645b08f4bb8a43a68d99396b72b',
          title: {
            nb: 'Bakkroppens ledd 3-7 sett ovenfra uten eller kun med svakt antydede lyse parflekker ved bakkanten. Kroppens grunnfarge oransje til nøttebrun.'
          },
          media: 'media:205959'
        },
        {
          id: 'state:0abede2d444349e598f952743aae0dd7',
          title: {
            nb: 'Bakkroppens ledd 3-7 sett ovenfra med tydelige gule, grønne eller blå parflekker ved bakkanten. Kroppens grunnfarge nøttebrun til svart.'
          },
          media: 'media:205960'
        },
        {
          id: 'state:7fa22657294445bbb8fa07ce5be183ed',
          title: {
            nb: 'Bakkroppens ledd 3-7 sett ovenfra med sammenflytende lyse sidetegninger adskilt av en svart midtstripe.'
          },
          media: 'media:205961'
        }
      ]
    },
    {
      id: 'character:1562119f2f3142b2bda934bc36b8e3f3',
      title: {
        nb: 'Bakkroppens parflekker'
      },
      states: [
        {
          id: 'state:b3820d28f7994f2eb17320b426ae2556',
          title: {
            nb: 'De midtre lyse parflekkene på bakkroppsledd 3-7 er tydelig større enn de bakre og ofte forbundet på tvers av midtlinjen. Stor, svart art med gule flekker.'
          },
          media: 'media:205962'
        },
        {
          id: 'state:d58b0eaccd46418ea30f0a4325dd0a11',
          title: {
            nb: 'De midtre lyse parflekkene på bakkroppsledd 3-7 er i høyden på størrelse med de bakre.'
          },
          media: 'media:205963'
        }
      ]
    },
    {
      id: 'character:412372b6801b40779e428e5da61d7705',
      title: {
        nb: 'Øyne og bryst'
      },
      states: [
        {
          id: 'state:0ecc3cafb5e94d3884f249ff2a8fb57b',
          title: {
            nb: 'Kontaktsonen mellom øynene er mindre enn dobbelt så lang som trekanten bak øynene. Brystets diagonalbånd er relativt smale og S-formede.'
          },
          media: 'media:205964'
        },
        {
          id: 'state:2cd049a669cd4808bd84c9a06c417e7c',
          title: {
            nb: 'Kontaktsonen mellom øynene er mer enn dobbelt så lang som trekanten bak øynene. Brystets diagonalbånd er bredere og rettere.'
          },
          media: 'media:205965'
        }
      ]
    },
    {
      id: 'character:d010e512ef3d437a94721351ac24601e',
      title: {
        nb: 'Panne og vinger'
      },
      states: [
        {
          id: 'state:e3572a8dd08d4e2f89cb3985100ffd49',
          title: {
            nb: 'Det svarte T-merket i pannen har smalt skaft (maks halvparten så bredt som langt). Membranulen (farget celle innerst på hver vinge) er tilnærmet ensfarget hvitgrå.'
          },
          media: 'media:205966'
        },
        {
          id: 'state:b044fa859d134e7eb230327dc8e91182',
          title: {
            nb: 'Det svarte T-merket i pannen har tykt skaft (mer enn halvparten så bredt som langt). Membranulen er tofarget lysegrå/mørkegrå.'
          },
          media: 'media:205967'
        }
      ]
    },
    {
      id: 'character:5e0cf12bccce469abd9973f810396235',
      title: {
        nb: 'Hode, bryst og vinger'
      },
      states: [
        {
          id: 'state:aadd9df383f645bfba17faa9c75745d2',
          title: {
            nb: 'Den svarte streken mellom pannen og munnskjoldet er jevnbred. Bakhodet er helsvart. Brystet vanligvis med et par lyse flekker på nedre del mellom diagonalbåndene. Vingens framkant sett ovenfra brunlig.'
          },
          media: 'media:205968'
        },
        {
          id: 'state:40ace287ce224c85804db7278f890d5b',
          title: {
            nb: 'Den svarte streken mellom pannen og munnskjoldet smalner av mot kantene. Bakhodet er svart med en gul flekk bak hvert øye. Brystet vanligvis uten lyse flekker på nedre del mellom diagonalbåndene. Vingens framkant sett ovenfra gul.'
          },
          media: 'media:205969'
        }
      ]
    },
    {
      id: 'character:d2486e19423843a68c4acbf8643b8785',
      title: {
        nb: 'Brystets sidetegninger'
      },
      states: [
        {
          id: 'state:f01a941e41d64cc9b88cddd78426053b',
          title: {
            nb: 'Brystets store sideplate tilnærmet ensfarget lys.'
          },
          media: 'media:205970'
        },
        {
          id: 'state:58b7b1776a494a8ebee3965551169925',
          title: {
            nb: 'Brystets store sideplate med markante svarte tegninger på midten.'
          },
          media: 'media:205971'
        }
      ]
    },
    {
      id: 'character:52b27c35b2094d47a0572b183a821a5f',
      title: {
        nb: 'Analvedheng'
      },
      states: [
        {
          id: 'state:b8f4aa70a72947feaf1d6d941005c9ce',
          title: {
            nb: 'Analvedheng små og gule.'
          },
          media: 'media:205972'
        },
        {
          id: 'state:11c09bb6e1114e0e8ed8d07b62dd393d',
          title: {
            nb: 'Analvedheng små og svarte.'
          },
          media: 'media:205973'
        },
        {
          id: 'state:e8f5b6f51a2745ad95aecdd8ffdd2d18',
          title: {
            nb: 'Analvedheng store og tangformede (gule til brune).'
          },
          media: 'media:205974'
        }
      ]
    },
    {
      id: 'character:07a340ed905542efbfc222b0b040ead4',
      title: {
        nb: 'Øyets bakkant'
      },
      states: [
        {
          id: 'state:7e4486abac0147a4b893bf11c2267254',
          title: {
            nb: 'Øyets bakkant med en liten, skarp utbuling (kan være vanskelig å se. Observeres best skrått bakfra).'
          },
          media: 'media:205975'
        },
        {
          id: 'state:2ad119d0d6cf4a4b8b80ad97fa569c65',
          title: {
            nb: 'Øyets bakkant tilnærmet jevn.'
          },
          media: 'media:205976'
        }
      ]
    },
    {
      id: 'character:24df13ef12f14dc281852699aff79acf',
      title: {
        nb: 'Bakvingens mørke basalflekk'
      },
      states: [
        {
          id: 'state:6abdfe000ee740358241189a22f8601c',
          title: {
            nb: 'Bakvingens mørke basalflekk stopper godt innenfor "triangelet". Små arter med slank bakkropp og kritthvitt fjes. Kropp 31-39 mm.'
          },
          media: 'media:205977'
        },
        {
          id: 'state:f48f4804dc514efc99340fd9842b20af',
          title: {
            nb: 'Bakvingens mørke basalflekk berører eller dekker også "triangelet". Større arter, ofte med bred og noe flattrykt bakkropp (39-65 mm).'
          },
          media: 'media:205978'
        }
      ]
    },
    {
      id: 'character:6fac591531ab4d82b28bfdf9eccac722',
      title: {
        nb: 'Vingenode og kroppsfarge'
      },
      states: [
        {
          id: 'state:5832ef931eea4edfa7a3c0eb817b20a9',
          title: {
            nb: 'Vingenoden med en mørk flekk. Kropp aldri blåpudret.'
          },
          media: 'media:205979'
        },
        {
          id: 'state:5ee844a61f32446fa4d042da2281e10b',
          title: {
            nb: 'Vingenoden uten mørk flekk. Kropp med eller uten blå pudring.'
          },
          media: 'media:205980'
        }
      ]
    },
    {
      id: 'character:221e73d7938548c4b13167bd0eaef7c6',
      title: {
        nb: 'Vinger og bakkropp'
      },
      states: [
        {
          id: 'state:12112b5dc21a4191b08d097150fb68ca',
          title: {
            nb: 'Framvingen med en mørk basalstrek eller basalflekk. Bakvingen med mørke basaltegninger i fremre del av vingebasis i tillegg til analfeltet. Kjønnsmodne hanner er blåpudret.'
          },
          media: 'media:205981'
        },
        {
          id: 'state:9105835be71a447a9adc4283c74a57af',
          title: {
            nb: 'Framvingen uten mørke basaltegninger. Bakvingens mørke basaltegning hovedsakelig begrenset til analfeltet og eventuelt "triangelet". Kropp aldri blåpudret.'
          },
          media: 'media:205982'
        }
      ]
    },
    {
      id: 'character:d21ad4fe6bb04233b65647a5bc21c2a0',
      title: {
        nb: 'Vinger og kropp'
      },
      states: [
        {
          id: 'state:b3eaebef4d7f4ff5b2355fa8289528a9',
          title: {
            nb: 'Framvingen med velutviklet mørk basaltegning. Vingespissen fargeløs. Brystet vanligvis med smale, bleke skulderstreker (kan forsvinne med alderen).'
          },
          media: 'media:205983'
        },
        {
          id: 'state:78f8d51ea83545a5b09288d67ab8105a',
          title: {
            nb: 'Framvingens mørke basaltegning redusert til en eller to smale streker. Vingespissen ofte mørk. Brystet uten bleke skulderstreker.'
          },
          media: 'media:205984'
        }
      ]
    },
    {
      id: 'character:86ad6e44df2d4b249a61e48a6a816dae',
      title: {
        nb: 'Kroppsfarge'
      },
      states: [
        {
          id: 'state:e295203678c64f71897de6f6a29ed602',
          title: {
            nb: 'Analvedheng hvite. Kropp svart med gule til oransje flekker eller med gråblå vokspudring.'
          },
          media: 'media:205985'
        },
        {
          id: 'state:7c198e4933f943c2915a2154db9b525f',
          title: {
            nb: 'Analvedheng svarte. Kropp svart med gule til rødbrune flekker, aldri blåpudret.'
          },
          media: 'media:205986'
        }
      ]
    },
    {
      id: 'character:40cb623df43b4cb88643a93a745ad7a1',
      title: {
        nb: 'Kjevefarge'
      },
      states: [
        {
          id: 'state:cc9b5757b2b94c53bbb6e54017e56224',
          title: {
            nb: 'Kjeven svart med hvite sideflekker.'
          },
          media: 'media:205987'
        },
        {
          id: 'state:a3642e7d484e41208aa90dcb69b04ac1',
          title: {
            nb: 'Kjeven helsvart.'
          },
          media: 'media:205988'
        }
      ]
    },
    {
      id: 'character:9728394fdc86455f83bdcec5b0b45575',
      title: {
        nb: 'Kroppsform og vingemerke'
      },
      states: [
        {
          id: 'state:9b3ffae0606b47358a4c3268185f0e9d',
          title: {
            nb: 'Bakkroppen slank. Vingemerke svart.'
          },
          media: 'media:205989'
        },
        {
          id: 'state:ebe18f1d5e534f2faabb3155178269bb',
          title: {
            nb: 'Bakkroppen klubbeformet. Vingemerke hvitt hos utfargede individer.'
          },
          media: 'media:205990'
        }
      ]
    },
    {
      id: 'character:30b2df2a3f8b4c409c8a58ee6fa24210',
      title: {
        nb: 'Bakkroppens flekkmønster'
      },
      states: [
        {
          id: 'state:c7abd704b79c4727863f3d6939e4d1b6',
          title: {
            nb: 'Bakkroppens lyse flekker er brede og har en tydelig innsnøring i bakre del. Den bakerste flekken er sitrongul og tydelig lysere enn de øvrige, som kan være gule, røde eller brune.'
          },
          media: 'media:205991'
        },
        {
          id: 'state:3086a8b0adcb4f72b2a6632330813e43',
          title: {
            nb: 'Bakkroppens lyse flekker er smale til brede og mangler tydelig innsnøring. Den bakerste flekken er enten ikke gul eller har samme gulfarge som de øvrige.'
          },
          media: 'media:205992'
        }
      ]
    },
    {
      id: 'character:bfba8f60cbf7482eb93cf69c3e7b1fbd',
      title: {
        nb: 'Vinger og bakkropp'
      },
      states: [
        {
          id: 'state:66433fa49d994eb887a172a391c1c480',
          title: {
            nb: 'Basis av framvingen med tydelig svart flekk ved bakkanten. Framvingens framkant sett forfra mørk i indre halvdel og lys i ytre. Vingemerket brunt eller rødlig. Bakkroppen noe slankere, med noe mindre ryggflekker.'
          },
          media: 'media:205993'
        },
        {
          id: 'state:1c3373b7f8004073b05cc8c2e9f7ce0e',
          title: {
            nb: 'Basis av framvingen med mindre utviklet svart flekk ved bakkanten. Framvingens framkant sett forfra lys hele veien. Vingemerket rødlig. Bakkroppen noe kraftigere, med noe større ryggflekker.'
          },
          media: 'media:205994'
        }
      ]
    },
    {
      id: 'character:8bd603d317204fe6a6f8642a612a3fea',
      title: {
        nb: 'Pannetegninger'
      },
      states: [
        {
          id: 'state:a4066f75313d4dc783da59ea733d7e58',
          title: {
            nb: 'Pannen uten gule tegninger.'
          },
          media: 'media:205995'
        },
        {
          id: 'state:12ba8539cb7d4c49b87d2f55d452469a',
          title: {
            nb: 'Pannen med vidt adskilte gule sideflekker.'
          },
          media: 'media:205996'
        },
        {
          id: 'state:23cff9f9dedf4c72b796a13eb0f7e8b1',
          title: {
            nb: 'Pannen med store gule sideflekker som helt eller delvis danner et sammenhengende bånd over munnskjoldet.'
          },
          media: 'media:205997'
        }
      ]
    },
    {
      id: 'character:f25e0cb427544f84a2c666cba2cf8feb',
      title: {
        nb: 'Bakkroppsform'
      },
      states: [
        {
          id: 'state:8f21f24bac7b408e9deb7904efdac988',
          title: {
            nb: 'Bakre del av bakkroppen bredest over ledd 7-8.'
          },
          media: 'media:205998'
        },
        {
          id: 'state:6e2a65dd0b9749baacb6d747d175998f',
          title: {
            nb: 'Bakre del av bakkroppen bredest over ledd 5-7, eller jevnt avsmalnende.'
          },
          media: 'media:205999'
        }
      ]
    },
    {
      id: 'character:a31a2c895be04dafab6301e958552988',
      title: {
        nb: 'Bakkroppstegninger'
      },
      states: [
        {
          id: 'state:b61672f82a4e45e689f3af8a4f5f2e3c',
          title: {
            nb: 'Bakkroppens ledd 5-7 sett ovenfra med okergule til brune flekker i framhjørnene (kan være små og utydelige hos hannen).'
          },
          media: 'media:206008'
        },
        {
          id: 'state:d1c739afe8a24df79da2724e6dd4a042',
          title: {
            nb: 'Bakkroppens ledd 5-7 sett ovenfra helt uten lyse tegninger, men ledd 2 og/eller 3 med okergule parflekker (kan være utydelige). Mellom ledd 2 og 3 er det et smalt okergult tverrbånd.'
          },
          media: 'media:206009'
        },
        {
          id: 'state:a885e56dca3343548419b6a520273679',
          title: {
            nb: 'Bakkroppen sett ovenfra helt uten okergule parflekker. Ledd 2 og 3 adskilt av et smalt, gråaktig tverrbånd.'
          },
          media: 'media:206010'
        }
      ]
    },
    {
      id: 'character:f72358dceeaf467ab2549655798488f3',
      title: {
        nb: 'Bakkropps- og vingeform'
      },
      states: [
        {
          id: 'state:30446f84cc9b400ca935c642fec819a8',
          title: {
            nb: 'Bakkroppen kraftig innsnørt ved ledd 3. Bakvingen med skarpt bakhjørne (hanner).'
          },
          media: 'media:206000'
        },
        {
          id: 'state:f40235986e234e2b8a96b928d8e6977f',
          title: {
            nb: 'Bakkroppen ikke eller ubetydelig innsnørt ved ledd 3. Bakvingen med jevnt avrundet bakhjørne (hunner).'
          },
          media: 'media:206001'
        }
      ]
    },
    {
      id: 'character:626439c25cc844c5aad6d76d1b3fb425',
      title: {
        nb: 'Analvedheng'
      },
      states: [
        {
          id: 'state:7a3890e3d9894aca9045c7737fe1fd94',
          title: {
            nb: 'De øvre analvedhengene er små og lyreformede. Nedre analvedheng kløvet.'
          },
          media: 'media:206002'
        },
        {
          id: 'state:9340f8d8ab3e493fa5f945c5bc70c950',
          title: {
            nb: 'De øvre analvedhengene er rette.'
          },
          media: 'media:206003'
        },
        {
          id: 'state:7f51ff853cb346b6a8b33bc87809d86b',
          title: {
            nb: 'De øvre analvedhengene er knipetangformede; parallelle i indre del og krumme i ytre.'
          },
          media: 'media:206004'
        },
        {
          id: 'state:75ec652e91424e54877a7d18148bc269',
          title: {
            nb: 'De øvre analvedhengene har en tydelig knekk i indre del men ikke i ytre del.'
          },
          media: 'media:206005'
        },
        {
          id: 'state:4e2f5bed34ec4e5684809638e3fbe173',
          title: {
            nb: 'De øvre analvedhengene har en tydelig knekk i ytre del men ikke i indre del.'
          },
          media: 'media:206006'
        },
        {
          id: 'state:51e491e9f65349eeaed43472eb2e77ee',
          title: {
            nb: 'De øvre analvedhengene har en tydelig knekk både i indre og ytre del.'
          },
          media: 'media:206007'
        }
      ]
    },
    {
      id: 'character:301d67f73bd143c3b12e3b69b4e68794',
      title: {
        nb: 'Egglegger'
      },
      states: [
        {
          id: 'state:5ee0f9fbff194876bdea4d0aebbfcf8e',
          title: {
            nb: 'Eggleggeren danner en lang, nedadrettet pigg.'
          },
          media: 'media:206011'
        },
        {
          id: 'state:1f7b74859e3443cbbc76796e33b8a7be',
          title: {
            nb: 'Eggleggeren er kortere.'
          },
          media: 'media:206012'
        }
      ]
    },
    {
      id: 'character:87e8d7dbbb6e465a9e605cf2decaf13a',
      title: {
        nb: 'Egglegger 2'
      },
      states: [
        {
          id: 'state:e517f72a2d9d4fa19fc85bd7a8ebb1cb',
          title: {
            nb: 'Eggleggeren sett nedenfra er kløvet på midten (art finnes kun i Finnmark).'
          },
          media: 'media:206013'
        },
        {
          id: 'state:e254970e2aff408689c202a3fa75510b',
          title: {
            nb: 'Eggleggeren sett nedenfra er ikke kløvet på midten.'
          },
          media: 'media:206014'
        }
      ]
    },
    {
      id: 'character:20af2bc4885343edb9791570f99adb40',
      title: {
        nb: 'Framvingeribber'
      },
      states: [
        {
          id: 'state:067b2fde2e894b858c5b686e15864c4b',
          title: {
            nb: 'Framvingen med minst 10 tverribber langs framkanten mellom vingefestet og vingenoden.'
          },
          media: 'media:206015'
        },
        {
          id: 'state:29e3a638e66e4a079f45f3e575f62445',
          title: {
            nb: 'Framvingen med høyst 8 tverribber langs framkanten mellom vingefestet og vingenoden.'
          },
          media: 'media:206016'
        }
      ]
    },
    {
      id: 'character:8e2896367e5544b0bb416ae2678ccf14',
      title: {
        nb: 'Vingemerke og skulderstreker'
      },
      states: [
        {
          id: 'state:2062af158f4a4331b385eff5a38e96d6',
          title: {
            nb: 'Vingemerket svart. Skuldrene lyse til mørke uten klart definerte lyse skulderstreker. Bakkroppen relativt bred. Større art: vingespenn 76-83 mm.'
          },
          media: 'media:206017'
        },
        {
          id: 'state:cfdaf564cba54a459bdcbac6ccfd9bf7',
          title: {
            nb: 'Vingemerket gulbrunt. Skuldrene mørke med to lyse skulderstreker (kan være skjult av blå pudring hos hannen). Bakkroppen relativt smal. Mindre art: vingespenn 59-63 mm.'
          },
          media: 'media:206018'
        }
      ]
    },
    {
      id: 'character:2ab08df28e944a27b3ae8140e7a1ef95',
      title: {
        nb: 'Beinfarge'
      },
      states: [
        {
          id: 'state:40ba2f2b08b14a30864b6ebb96415aba',
          title: {
            nb: 'Legger helsvarte.'
          },
          media: 'media:206019'
        },
        {
          id: 'state:f1e48c7942924e23905b4ad0757fc42b',
          title: {
            nb: 'Legger svarte med en lys lengdestripe.'
          },
          media: 'media:206020'
        }
      ]
    },
    {
      id: 'character:7f7bd48bf9e2421b81fe19dd9c84734a',
      title: {
        nb: 'Vingefarge'
      },
      states: [
        {
          id: 'state:ca35fffb86c44fe18ff7741dce7c5abd',
          title: {
            nb: 'Bakvingen med en ravgul basalflekk som når minst halvveis ut til vingenoden.'
          },
          media: 'media:206021'
        },
        {
          id: 'state:c2ed6b5a1fdd482e8c6eda74f9bfee6e',
          title: {
            nb: 'Bakvingen i høyden med litt gult ved basis.'
          },
          media: 'media:206022'
        }
      ]
    },
    {
      id: 'character:97e72ae3637c45de94624f6971968353',
      title: {
        nb: 'Brystets sidetegninger'
      },
      states: [
        {
          id: 'state:4c35f420f5d64dbcb4720d2c4538225e',
          title: {
            nb: 'Brystet med to gule diagonalbånd og tre karakteristiske gule flekker mot svart bakgrunn. De gule tegningene mørkner mot brunsvart med alderen men kan normalt skjelnes. Kropp gulbrun til svart, aldri særlig rød.'
          },
          media: 'media:206023'
        },
        {
          id: 'state:0a03f5d1108c4e0392b11620111d8178',
          title: {
            nb: 'Brystet annerledes tegnet, ofte med utydelig avgrensede diagonalbånd og uten de tre karakteristiske lyse flekkene mellom diagonalbåndene. Kropp gulbrun til blodrød.'
          },
          media: 'media:206024'
        }
      ]
    },
    {
      id: 'character:165d5519e47944baab846f374527247b',
      title: {
        nb: 'Hode og bryst'
      },
      states: [
        {
          id: 'state:94f5f84689404fc3bf501a27fb3c9e4a',
          title: {
            nb: 'Brystet vanligvis med lite kontrast mellom de gule, brune eller rødlige diagonalbåndene og områdene rundt (NB! Usikker karakter!). Diagonalbåndene tilnærmet ensfarget. Pannen har alltid en smal, svart strektegning fra antennefestet og ned langs kanten av øyet (langt "skjegg").'
          },
          media: 'media:206025'
        },
        {
          id: 'state:f538baaa19ba4c88a7aa6d04aaf00778',
          title: {
            nb: 'Brystets diagonalbånd vanligvis hvitlige i nedre del og tydelig lysere enn brystet for øvrig (NB! Usikker karakter!). Pannen kan ha eller mangle svart strektegning langs øyet (langt eller kort "skjegg").'
          },
          media: 'media:206026'
        }
      ]
    },
    {
      id: 'character:919a670f72d7473087bccbb9b1ac4dbd',
      title: {
        nb: 'Egglegger'
      },
      states: [
        {
          id: 'state:de14d0d741844ae7b5fdec43f6b2e19f',
          title: {
            nb: 'Tuppen av eggleggeren peker skarpt ut fra kroppen.'
          },
          media: 'media:206027'
        },
        {
          id: 'state:8a126e7f7e4f4e12ae686ad380e50322',
          title: {
            nb: 'Tuppen av eggleggeren peker ikke skarpt ut fra kroppen.'
          },
          media: 'media:206028'
        }
      ]
    },
    {
      id: 'character:5b684f66dc2d43bab42edfb99f9c3a38',
      title: {
        nb: 'Hannens sekundære kjønnsorgan'
      },
      states: [
        {
          id: 'state:c19931360e3a4db781431251f1595592',
          title: {
            nb: 'Kroken på hannens hamulus lang og smal.'
          },
          media: 'media:206029'
        },
        {
          id: 'state:ecc94766453f4d1292b9fff290a39c13',
          title: {
            nb: 'Kroken på hannens hamulus kortere og bredere.'
          },
          media: 'media:206030'
        }
      ]
    }
  ],
  taxa: [
    {
      id: 'taxon:78dc3ab56a95486db90b4526d2f997b8',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49562'
      },
      scientificName: 'Calopteryx virgo',
      vernacularName: {
        nb: 'blåpraktvannymfe'
      },
      media: 'media:f8762',
      children: [
        {
          id: 'taxon:f6d0f15970b14272b2ae185fba5920de',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:4e82573b23604302899d2f9eddeb3053',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:035180d55f4a4b57973c07f987a815f5',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49563'
      },
      scientificName: 'Calopteryx splendens',
      vernacularName: {
        nb: 'båndpraktvannymfe'
      },
      media: 'media:f8760',
      children: [
        {
          id: 'taxon:1c8ca951161941fbb366567e011e8d09',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:980ce8a3259941bda3dee43870bdad63',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:72d3820c784f4ab284934f08b7babb9d',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49602'
      },
      scientificName: 'Lestes sponsa',
      vernacularName: {
        nb: 'nordmetallvannymfe'
      },
      media: 'media:f8842',
      children: [
        {
          id: 'taxon:caaf938b83e645ebb542fd3559b31044',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:02de5f68893e465bb76d488b2530d60b',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:d6158b19549e47388ddb58cd55250aac',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49601'
      },
      scientificName: 'Lestes dryas',
      vernacularName: {
        nb: 'sørmetallvannymfe'
      },
      media: 'media:f8838',
      children: [
        {
          id: 'taxon:233ad840eced449dbeeec8e73a34064a',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:1d8854ace689476e96fc43578b97b92b',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:a3dae6afb98c41d38a5fc4e112cab00e',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49624'
      },
      scientificName: 'Platycnemis pennipes',
      vernacularName: {
        nb: 'fjærbeinvannymfe'
      },
      media: 'media:f8891',
      children: [
        {
          id: 'taxon:477ada0dad7c43bd86208efa3193532f',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:baf58ab819b64701980a426fde42b5b8',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:68549e9e52864a5897442792e88f1bd0',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '135936'
      },
      scientificName: 'Nehalennia speciosa',
      vernacularName: {
        nb: 'dvergvannymfe'
      },
      media: 'media:f8876',
      children: [
        {
          id: 'taxon:ab35b73243d74879886f0657a09617c7',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:fd2fc1d402a549a28f4a517ec4e0e644',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:d16e97ca8f1443509f3552c1a52fa34c',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49579'
      },
      scientificName: 'Pyrrhosoma nymphula',
      vernacularName: {
        nb: 'rødvannymfe'
      },
      media: 'media:f8894',
      children: [
        {
          id: 'taxon:ae3d93f990674e248670cc0e80af59c8',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:51ebfdc5a5ca4ffd855ea6c0ba68828d',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:edf6085ca173491cb0da0b49bd4edba6',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49575'
      },
      scientificName: 'Erythromma najas',
      vernacularName: {
        nb: 'rødøyevannymfe'
      },
      media: 'media:f8819',
      children: [
        {
          id: 'taxon:2741c376e464497896f5aec4e651a215',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:15dee9a7814445759e031d5d258387ed',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:3672a358c7e646c0bd299d40a5a8834c',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49577'
      },
      scientificName: 'Ischnura elegans',
      vernacularName: {
        nb: 'kystvannymfe'
      },
      media: 'media:f8830',
      children: [
        {
          id: 'taxon:090aca4abfbd49a49e065af0eb53d866',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:31eb2e8a97274c9198f34d3f1febb616',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:a4bcdf6bb38d4ae2ba95bcd928a5020c',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '135934'
      },
      scientificName: 'Ischnura pumilio',
      vernacularName: {
        nb: 'pyttvannymfe'
      },
      media: 'media:f8834',
      children: [
        {
          id: 'taxon:31372f04fe644c8f9deaf539a22b0949',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:7dced9a6fb244587b1b54e99aa54c821',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:a4b717ce16e6431c85e6ff66b97ebaf2',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49573'
      },
      scientificName: 'Enallagma cyathigerum',
      vernacularName: {
        nb: 'innsjøvannymfe'
      },
      media: 'media:f8813',
      children: [
        {
          id: 'taxon:006b23419b11493eb93ffb459c5e0d90',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:5576afa0400e491c9fb6c0eb6dc2f162',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:6bf8a3d4e00c42b1b816652bb3de1cbe',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49568'
      },
      scientificName: 'Coenagrion hastulatum',
      vernacularName: {
        nb: 'spydblåvannymfe'
      },
      media: 'media:f8774',
      children: [
        {
          id: 'taxon:33de852d02cc4210b7723eec2a24b267',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:a92f878ca186473d9929ad9681c92401',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:dcab945e493147789a3ffe404de155d5',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49570'
      },
      scientificName: 'Coenagrion lunulatum',
      vernacularName: {
        nb: 'måneblåvannymfe'
      },
      media: 'media:f8782',
      children: [
        {
          id: 'taxon:da78e50761c6461186ea74b707b38d49',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:aa888de2344544aeb8d926ea77ca37b7',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:4b9a609b503e43de96e869b437e482d3',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49567'
      },
      scientificName: 'Coenagrion armatum',
      vernacularName: {
        nb: 'klypeblåvannymfe'
      },
      media: 'media:f8768',
      children: [
        {
          id: 'taxon:d7816f44e87744528854a26207c90dc7',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:f58c95cf4def4ee09065b00fa90a3e3a',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:1400e1263d8f4069a458b3bc45ad78e4',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49566'
      },
      scientificName: 'Coenagrion puella',
      vernacularName: {
        nb: 'sørblåvannymfe'
      },
      media: 'media:f8787',
      children: [
        {
          id: 'taxon:0b76f7e3497548059633c20678c3fe31',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:9204ac0cf960428790eff38272e9f279',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:208860c1f2984d6492331b3fa7de6518',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49571'
      },
      scientificName: 'Coenagrion pulchellum',
      vernacularName: {
        nb: 'fagerblåvannymfe'
      },
      media: 'media:f8793',
      children: [
        {
          id: 'taxon:cc160befff6e4d4bb470120617d6d657',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:ef6c7cd3fe4340639a205efbe9df9afe',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:b060b441e3dc4b08af195505240264ca',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49569'
      },
      scientificName: 'Coenagrion johanssoni',
      vernacularName: {
        nb: 'nordblåvannymfe'
      },
      media: 'media:f8778',
      children: [
        {
          id: 'taxon:50aff9f8cdaa42c48f6d48a8c31c8b28',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:c119465b67e943a1b80c5c7f9779c4b5',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:4185334ea74c410f923e6afd3f3d400c',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49550'
      },
      scientificName: 'Aeshna cyanea',
      vernacularName: {
        nb: 'blågrønnlibelle'
      },
      media: 'media:f8720',
      children: [
        {
          id: 'taxon:03fcadda7429456cb02396ac695a8da9',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:f8be9787dd194502af19a56c9cbbd1bd',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:9a0e6d7e531b4d34be349f0cd7c8856b',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '135920'
      },
      scientificName: 'Aeshna viridis',
      vernacularName: {
        nb: 'vassaloelibelle'
      },
      media: 'media:f8744',
      children: [
        {
          id: 'taxon:d64657d6a30a4102a8ae2788f6d932bd',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:4942df945ea045dea09a577f1fe973ff',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:2a29ce9e98b141ca9b1eb2dd7848efa0',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '152292'
      },
      scientificName: 'Aeshna isoceles',
      vernacularName: {
        nb: 'kilelibelle'
      },
      media: 'media:f8726',
      children: [
        {
          id: 'taxon:b4b56815616741bb9dffe5aa274dc04c',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:eb54f08f205d4b93bfce1ec4a8eaf67a',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:13e6b3baefbd4d66bd92d45a9e8d3383',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49551'
      },
      scientificName: 'Aeshna grandis',
      vernacularName: {
        nb: 'brunlibelle'
      },
      media: 'media:f8723',
      children: [
        {
          id: 'taxon:bc169a50dd7b49e4a811787bbd0a8ae0',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:7ae578248f094c2b88ae56463e7836fc',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:80b845418fad4d3b944474c1ce77ee10',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49552'
      },
      scientificName: 'Aeshna juncea',
      vernacularName: {
        nb: 'starrlibelle'
      },
      media: 'media:f8729',
      children: [
        {
          id: 'taxon:fc4a592737934537b2b9808b4c1699a5',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:bb73937367394271b1f9275bf7b7d4a6',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:3a9f3795d0174893912e125718a6fdd1',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49555'
      },
      scientificName: 'Aeshna subarctica',
      vernacularName: {
        nb: 'torvmoselibelle'
      },
      media: 'media:f8740',
      children: [
        {
          id: 'taxon:e99232c6ff3f4131babcc1bc0cbf6d43',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:e8bb4953ac66481995633993f16b7380',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:1406440cc6f44d87aa4d51ae02cd0e9b',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49554'
      },
      scientificName: 'Aeshna serrata',
      vernacularName: {
        nb: 'takrørlibelle'
      },
      media: 'media:f8736',
      children: [
        {
          id: 'taxon:40ef43b9a9e04e5d9035d1f9d2e4b085',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:57a8836d90be475b917c8e80b90318a7',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:467733f8f8e2416dbe5e09b9ffcf1d2b',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49553'
      },
      scientificName: 'Aeshna mixta',
      vernacularName: {
        nb: 'septemberlibelle'
      },
      media: 'media:f8733',
      children: [
        {
          id: 'taxon:e8ff18cf99934191864858599eae85ba',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:742f38e3078e48608ac26d521f4db578',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:7d3e780a1e4345d68240028d63873ceb',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49549'
      },
      scientificName: 'Aeshna caerulea',
      vernacularName: {
        nb: 'fjellibelle'
      },
      media: 'media:f8717',
      children: [
        {
          id: 'taxon:8395502483b1434f8645c3ce55a85823',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:e9a27d08344e4fdda5cd46ca429789e4',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:4ff1457547ce42adbc61bf8b770201a4',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49557'
      },
      scientificName: 'Brachytron pratense',
      vernacularName: {
        nb: 'vårlibelle'
      },
      media: 'media:f8755',
      children: [
        {
          id: 'taxon:dc09d52aa7ac4ac781bd1312fa275c91',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:67a3e0bcf98f4754b0cd07782d9a5222',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:6276a79b2f70467f893e1206fd8fa803',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '135938'
      },
      scientificName: 'Anax imperator',
      vernacularName: {
        nb: 'storkeiserlibelle'
      },
      media: 'media:f8751',
      children: [
        {
          id: 'taxon:6e001a5d311c457a84a80d36d5028bbe',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:04384ea1b5f94c8ab14cd193504b2b0c',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:db6b77a76f65499cb717d587a9df293e',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49559'
      },
      scientificName: 'Hemianax ephippiger',
      vernacularName: {
        nb: 'vandrekeiserlibelle'
      },
      media: 'media:f8826',
      children: [
        {
          id: 'taxon:4430f2ce52794b46a3dd7af2a121cf89',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:85990763f4d24308a08f609c090b9428',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:be82c788e27b468081efac91bbe1fa6f',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49596'
      },
      scientificName: 'Gomphus vulgatissimus',
      vernacularName: {
        nb: 'klubbeelvelibelle'
      },
      media: 'media:f8824',
      children: [
        {
          id: 'taxon:ee1d1725e56f455b93fe878cae4e59c6',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:463f22f2e2e3496aa677a7a8c36d84cc',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:c17f1c6e6f5a4f3f9c19aa2865d2a189',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49598'
      },
      scientificName: 'Onychogomphus forcipatus',
      vernacularName: {
        nb: 'tangelvelibelle'
      },
      media: 'media:f8879',
      children: [
        {
          id: 'taxon:7c8e4121e32f4425bb71eb3a2c50889e',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:3399e319022b4d2eba71dead20122af2',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:b64bc837fdaf44e98a802908000e22fd',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '135940'
      },
      scientificName: 'Ophiogomphus cecilia',
      vernacularName: {
        nb: 'grønnelvelibelle'
      },
      media: 'media:f8882',
      children: [
        {
          id: 'taxon:faf92aa0710944119a6c70c1be3578e1',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:c4b1579fd2474e21942de4b422c0c7f1',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:04afe93a555743adaeb4fa5b7544ca02',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49582'
      },
      scientificName: 'Cordulegaster boltonii',
      vernacularName: {
        nb: 'kongelibelle'
      },
      media: 'media:f8798',
      children: [
        {
          id: 'taxon:a7873f2a85254db89fafec4e24c8eec9',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:be44e384a0aa42078505f9c2ee9b341d',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:c820d6743ef04604b16fccb6ed0d9db4',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49587'
      },
      scientificName: 'Epitheca bimaculata',
      vernacularName: {
        nb: 'toflekklibelle'
      },
      media: 'media:f8816',
      children: [
        {
          id: 'taxon:cd0fe7a4f54b41fa9b5857edf73f6f58',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:aa9f1b584e9d4dd58b986bc6a7dc8e07',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:80fcfbeddc61480e83c8c2f976297dea',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49585'
      },
      scientificName: 'Cordulia aenea',
      vernacularName: {
        nb: 'smaragdlibelle'
      },
      media: 'media:f8805',
      children: [
        {
          id: 'taxon:67458bb052894f4681aa4126d8d35c86',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:36af041484ce4685831553f0bd906a40',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:b58f7ac8f5b54ccd891cdda8255b506d',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49592'
      },
      scientificName: 'Somatochlora metallica',
      vernacularName: {
        nb: 'glansmetallibelle'
      },
      media: 'media:f8910',
      children: [
        {
          id: 'taxon:c059f0052b304adbbcff33929b05e2ac',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:581d17fb9f5d47b2812cf5e50937d0e3',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:f949e72881de42e1ac55cfe6b259ecd8',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49590'
      },
      scientificName: 'Somatochlora arctica',
      vernacularName: {
        nb: 'myrmetallibelle'
      },
      media: 'media:f8902',
      children: [
        {
          id: 'taxon:c3e334d30ad2429783efb8d1e4efa8ff',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:7697589c779a4b9d9a3ecd7510bc3eb6',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:d1663420c3f4431fa33e97f99fac1992',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49591'
      },
      scientificName: 'Somatochlora flavomaculata',
      vernacularName: {
        nb: 'gulflekkmetallibelle'
      },
      media: 'media:f8907',
      children: [
        {
          id: 'taxon:54efd5bb862649fea957cd9fdee610c2',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:7df747f7bf144e93b36c90db0efb11aa',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:e38399dd886a46209e35bbdae3e1c77e',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49589'
      },
      scientificName: 'Somatochlora alpestris',
      vernacularName: {
        nb: 'fjellmetallibelle'
      },
      media: 'media:f8898',
      children: [
        {
          id: 'taxon:c62dc3063cf540ac8257806fd28a2458',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:42d5f08f60ca466abf13dc4e0e4502f2',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:3f4a524448a44506ae5e4a02f758d1bd',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49593'
      },
      scientificName: 'Somatochlora sahlbergi',
      vernacularName: {
        nb: 'tundrametallibelle'
      },
      media: 'media:f8915',
      children: [
        {
          id: 'taxon:02db0784ddd443e3bc5242cea06d6a2d',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:e8aeb9fe7a9c47ee8ce9bbe06496cf6f',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:2a69f38a2c0d416ba7a10c271b6c7b20',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49612'
      },
      scientificName: 'Libellula quadrimaculata',
      vernacularName: {
        nb: 'firflekkbredlibelle'
      },
      media: 'media:f8873',
      children: [
        {
          id: 'taxon:d70089cde7ed4663829456c4fe949273',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:3be897ae7ec84f1e86a88d61f513ba04',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:3464af5a70a14133b98f1766afbd3f6d',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49611'
      },
      scientificName: 'Libellula depressa',
      vernacularName: {
        nb: 'blåbredlibelle'
      },
      media: 'media:f8869',
      children: [
        {
          id: 'taxon:b99e3c7c290241e1b92b318a51a048d2',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:2dd83d0d33f749e0ba829dab29f3159d',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:243675aec777454883872f4a925bf917',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '145911'
      },
      scientificName: 'Libellula fulva',
      vernacularName: {
        nb: 'sotflekkbredlibelle'
      },
      media: 'media:f8871',
      children: [
        {
          id: 'taxon:b7bfcc040eac41cbae75c97186670c53',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:7d4626e1f2b5427886750497bea38e24',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:c76f0a719a45423fa2d7ffa22722ede8',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49614'
      },
      scientificName: 'Orthetrum cancellatum',
      vernacularName: {
        nb: 'storblålibelle'
      },
      media: 'media:f8884',
      children: [
        {
          id: 'taxon:06f53062e5e14a7c9e69aba62856d1a7',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:eac083a0a0fe4748b8e8dadc16e6d16d',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:d404a74b652d4ec09580742ff596db82',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49615'
      },
      scientificName: 'Orthetrum coerulescens',
      vernacularName: {
        nb: 'småblålibelle'
      },
      media: 'media:f8886',
      children: [
        {
          id: 'taxon:24b733fe467a45bba5e26946082af20f',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:82b5ab90812346b2b9ac4813fe4d326d',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:082a2925f32945a7aabefc11ec5f6e34',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49606'
      },
      scientificName: 'Leucorrhinia caudalis',
      vernacularName: {
        nb: 'vannliljetorvlibelle'
      },
      media: 'media:f8854',
      children: [
        {
          id: 'taxon:0ae6071500944ec1822dd51aa93f4ae1',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:98a5b74a97de497ca159d00be74fdc08',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:6038c1e234524f1c89120377247c442a',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49605'
      },
      scientificName: 'Leucorrhinia albifrons',
      vernacularName: {
        nb: 'gråtorvlibelle'
      },
      media: 'media:f8850',
      children: [
        {
          id: 'taxon:6235cbaf10c9479bab1a2a1d0109f50e',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:7eb38eaf73ad4ebebd6566d25e01ae65',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:68a4263694c0459b8cedf63ae0696868',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49607'
      },
      scientificName: 'Leucorrhinia dubia',
      vernacularName: {
        nb: 'småtorvlibelle'
      },
      media: 'media:f8858',
      children: [
        {
          id: 'taxon:1147caf5bc224aedb85496e764d8621d',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:c9d10fe87d0f46a2874abdfe430232e7',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:adfb9b2b32b34942b7114154d0ce9f4e',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49609'
      },
      scientificName: 'Leucorrhinia rubicunda',
      vernacularName: {
        nb: 'østtorvlibelle'
      },
      media: 'media:f8866',
      children: [
        {
          id: 'taxon:19556c14b0c34a9eb12309f09fec408a',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:9f11526639bd4e8caf3c9cda634a7431',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:846505985b2c49b795d3d37f6100d68c',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49608'
      },
      scientificName: 'Leucorrhinia pectoralis',
      vernacularName: {
        nb: 'gulflekktorvlibelle'
      },
      media: 'media:f8862',
      children: [
        {
          id: 'taxon:12e213093e564e28a5e1e7fb6c3ed91d',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:53704b46c1ce4804a44711e424bcd97a',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:b76a1023bfed44eab4468991a13b31f8',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49618'
      },
      scientificName: 'Sympetrum danae',
      vernacularName: {
        nb: 'svarthøstlibelle'
      },
      media: 'media:f8917',
      children: [
        {
          id: 'taxon:6bb437c615ba4309855b986d25bc6a2d',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:979c27d392b74984bbd163a3589e203c',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:9c3616cef390407da3d1ff3cc3c2f30c',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49619'
      },
      scientificName: 'Sympetrum flaveolum',
      vernacularName: {
        nb: 'gulvingehøstlibelle'
      },
      media: 'media:f8920',
      children: [
        {
          id: 'taxon:d27b23c19c534971824dc9bce0672c71',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:01b710b4d1634239a03965e499eb25c4',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:ccedce802ccd43f2875441e71de35964',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49620'
      },
      scientificName: 'Sympetrum sanguineum',
      vernacularName: {
        nb: 'blodhøstlibelle'
      },
      media: 'media:f8922',
      children: [
        {
          id: 'taxon:317bd168d3a9489c900d2cf314c07396',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:9699f2a7aa8349c2b0b7b7ca2f4130b9',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:1395ed689af44a10b5e4b743017c1f16',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49621'
      },
      scientificName: 'Sympetrum striolatum',
      vernacularName: {
        nb: 'senhøstlibelle'
      },
      media: 'media:f8924',
      children: [
        {
          id: 'taxon:5cbefb19e263424bbe447bf7534ba2f7',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:b539523334fa426e8f8ebb2c23000064',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    },
    {
      id: 'taxon:bdce9fb4a9f54f33a3479c8819343e60',
      externalReference: {
        serviceId: 'service:nbic_taxa',
        externalId: '49617'
      },
      scientificName: 'Sympetrum vulgatum',
      vernacularName: {
        nb: 'sørhøstlibelle'
      },
      media: 'media:f8927',
      children: [
        {
          id: 'taxon:f3d4e691a6e04b0ab3d4d9eea202193c',
          label: {
            nb: '♂'
          }
        },
        {
          id: 'taxon:9e040b28f74241c0936d3cb437317588',
          label: {
            nb: '♀'
          }
        }
      ],
      isEndPoint: true
    }
  ]
}

const App = () => {
  return <ClavisViewer clavis={clavis} />
}

export default App
