import React from 'react'
import i18n from '../i18n'

const ItemMetadata = (props) => {
  const { item, setModal } = props
  const t = i18n.t

  const getLicense = (url, width = 95) => {
    if (url.includes('creativecommons.org/publicdomain/zero/')) {
      url = (
        <img
          style={{ width, cursor: 'pointer' }}
          alt='Licensed CC0'
          src='https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png'
        />
      )
    } else if (url.includes('creativecommons.org/licenses/by-sa/')) {
      url = (
        <img
          style={{ width, cursor: 'pointer' }}
          alt='CC BY-SA'
          src='https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png'
        />
      )
    } else if (url.includes('creativecommons.org/licenses/by/')) {
      url = (
        <img
          style={{ width, cursor: 'pointer' }}
          alt='CC BY-SA'
          src='https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png'
        />
      )
    } else if (url.includes('creativecommons.org/')) {
      url = (
        <img
          style={{ width, cursor: 'pointer' }}
          alt='CC licensed'
          src='https://mirrors.creativecommons.org/presskit/cc.primary.srr.gif'
        />
      )
    } else {
      url = <a href={url}>{url}</a>
    }
    return url
  }

  return (
    <table id='metadataTable'>
      <tbody>
        {item.creators && (
          <tr>
            <td style={{fontWeight: "bold"}}>{t('Created by')}:</td>
            <td>
              {item.creators.map((creator) => (
                <div
                  style={{
                    cursor: creator.url ? 'pointer' : 'default'
                  }}
                  key={creator.id}
                >
                  {creator.name[i18n.language]}
                </div>
              ))}
            </td>
          </tr>
        )}

        {item.contributors && (
          <tr>
            <td style={{fontWeight: "bold"}}>{t('Contributed')}:</td>
            <td>
              {item.contributors.map((contributor) => (
                <div
                  style={{
                    cursor: contributor.url ? 'pointer' : 'default'
                  }}
                  key={contributor.id}
                >
                  {contributor.name}
                </div>
              ))}
            </td>
          </tr>
        )}

        {item.publishers && (
          <tr>
            <td style={{fontWeight: "bold"}}>{t('Publisher')}:</td>
            <td>
              {item.publishers.map((publisher) => (
                <div
                  style={{
                    cursor: publisher.url ? 'pointer' : 'default'
                  }}
                  key={publisher.id}
                >
                  {publisher.media ? (
                    <img
                      alt={publisher.name}
                      src={publisher.media.mediaElement.url}
                      style={{ maxHeight: '25px', maxWidth: '200px' }}
                    />
                  ) : (
                    <span>{publisher.name}</span>
                  )}
                </div>
              ))}
            </td>
          </tr>
        )}

        {item.infoUrl && (
          <tr>
            <td></td>
            <td>
              <div
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                  textDecoration: 'underline'
                }}
              >
                {t('About this picture')}
              </div>
            </td>
          </tr>
        )}

        {item.license && (
          <tr>
            <td></td>
            <td>{getLicense(item.license)}</td>
          </tr>
        )}

        {item.version && (
          <tr>
            <td style={{fontWeight: "bold"}}>{t('Version')}:</td>
            <td>{item.lastModified}</td>
          </tr>
        )}

        {item.id && !item.infoUrl && (
          <tr>
            <td style={{fontWeight: "bold"}}>{t('Id')}:</td>
            <td>{item.identifier}</td>
          </tr>
        )}

        {item.language && (
          <tr>
            <td style={{fontWeight: "bold"}}>{t('Languages')}:</td>
            <td>{item.language.toString()}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default ItemMetadata
