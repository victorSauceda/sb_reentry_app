import { useRouter } from 'next/router'

import { DisplayMap, LocationRecordDisplay } from './'
import { RecordListing } from '../ui'

import { SortedRecord } from '../types/records'
import { Button } from '../ui'

import styles from './OrgRecordDisplay.module.css'

interface OrgRecordDisplayProps {
  singleFetchedRecord: SortedRecord
}

const OrgRecordDisplay = ({ singleFetchedRecord }: OrgRecordDisplayProps) => {
  const { back } = useRouter()

  const {
    locations,
    name,
    website,
    languages_spoken,
    notes,
  } = singleFetchedRecord

  return (
    <div className={styles.OrgRecordDisplay} role="list">
      <RecordListing border={false} className={styles.listing}>
        <Button onClick={back}>Back</Button>
        <h2>{name}</h2>
        {website && (
          <p>
            Org Website:{' '}
            <a href={website} target="_blank" rel="noopener noreferrer">
              {website}
            </a>
          </p>
        )}
        {languages_spoken && <p>Languages Spoken: {languages_spoken}</p>}
        {notes && <p>{notes}</p>}
        {Boolean(locations.length) && (
          <>
            <DisplayMap latLongInfo={locations} />
            {locations.map((locationInfo, i) => (
              <LocationRecordDisplay key={i} locationInfo={locationInfo} />
            ))}
          </>
        )}
      </RecordListing>
    </div>
  )
}

export default OrgRecordDisplay
